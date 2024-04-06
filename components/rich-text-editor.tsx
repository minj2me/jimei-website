import React, { useState, useEffect } from 'react';
import { useSessionContext } from "@supabase/auth-helpers-react";
import { EditorState, convertToRaw } from 'draft-js';
import { Button } from '@chakra-ui/button';
import dynamic from 'next/dynamic';
import uniqid from "uniqid";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import "../app/globals.css";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseCaseImagesStoragePath = process.env.NEXT_PUBLIC_SUPABASE_CASE_IMAGE_STORAGE_PATH ?? "";

interface RichTextEditorProps {
    onChange: (content: string) => void;
    initialContent?: string;
}

/*
Understanding dynamic in Next.js:
The dynamicfunction is pivotal for SSR frameworks like Next.js, allowing you to import components that require the browser’s DOM, 
such as Draft.js Editor. This approach optimizes performance and ensures compatibility across server and client environments.
 */
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    onChange, initialContent
}) => {
    const { supabaseClient } = useSessionContext();
    //check for https://github.com/jpuri/react-draft-wysiwyg/issues/951
    const [isMounted, setIsMounted] = useState(false)
    const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
    const onEditorStateChange = (newEditorState: EditorState): void => {
        setEditorState(newEditorState);
    };
    const [convertedContent, setConvertedContent] = useState<string>("");

    useEffect(() => {
        setIsMounted(true)
        return () => {
            setIsMounted(false)
        }
    }, [])

    useEffect(() => {
        //let html = convertToHTML(editorState.getCurrentContent());
        let html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        setConvertedContent(html);
    }, [editorState]);

    const onSave = async () => {
        //const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        //setConvertedContent(html);
        //const uploadImageSuccess = await uploadImage("");
        // Save content to database or send to server
        if (onChange) {
            onChange(convertedContent);
        }
        //console.log("convertedContent:" + convertedContent);
    };

    const uploadImage = async (imageFile: File): Promise<string> => {
        // Upload image
        const uniqueID = uniqid();
        const {
            data: imageData,
            error: imageError
        } = await supabaseClient
            .storage
            .from('case-images')
            .upload(`image-${uniqueID}`, imageFile, {
                cacheControl: '3600',
                upsert: false
            });

        if (imageError) {
            return "";
        }
        console.log("Failed image successful, path:" + imageData.path);
        return imageData.path;
    }

    const uploadImageCallBack = (file: File) => {
        return new Promise((resolve, reject) => {
            uploadImage(file)
                .then(path_ => {
                    if (path_) {
                        //把图片添加到控件的虚线框(预览)
                        let imgObj = {
                            data: {
                                //link: supabaseUrl + "/storage/v1/object/public/case-images/" + path_,
                                link: supabaseUrl + supabaseCaseImagesStoragePath + path_,
                            }
                        }
                        resolve(imgObj)
                    } else {
                        reject(path_);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    /*function uploadImageCallBack(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            const img = new Image();
            // let url = ''
            reader.onload = function (e) {
                img.src = this.result;
            };
    
            img.onload = function () {
                // console.log(img); // 获取图片
                // console.log(img.src.length)
                // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
    
                // 图片原始尺寸
                const originWidth = this.width;
                const originHeight = this.height;
    
                // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
                const maxWidth = 400;
                const maxHeight = 500;
                // 目标尺寸
                let targetWidth = originWidth;
                let targetHeight = originHeight;
                // 图片尺寸超过300x300的限制
                if (originWidth > maxWidth || originHeight > maxHeight) {
                    if (originWidth / originHeight > maxWidth / maxHeight) {
                        // 更宽，按照宽度限定尺寸
                        targetWidth = maxWidth;
                        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                    } else {
                        targetHeight = maxHeight;
                        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                    }
                }
                // canvas对图片进行缩放
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                // 清除画布
                context.clearRect(0, 0, targetWidth, targetHeight);
                // 图片压缩
                context.drawImage(img, 0, 0, targetWidth, targetHeight);
                //第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高 
    
                // 压缩后的图片转base64 url
                //canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
                //qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92 
                const newUrl = canvas.toDataURL('image/jpeg', 0.92); // base64 格式
                resolve({
                    data: {
                        link: newUrl,
                    },
                });
    
                // 也可以把压缩后的图片转blob格式用于上传
                // canvas.toBlob((blob)=>{
                //     console.log(blob)
                //     //把blob作为参数传给后端
                // }, 'image/jpeg', 0.92)
            };
        });
    }*/

    const myBlockRenderer = (contentBlock: any) => {
        const type = contentBlock.getType();
        // Convert image type to mediaComponent
        if (type === 'atomic') {
            return {
                component: MediaComponent,
                editable: false,
                props: {
                    foo: 'bar',
                },
            };
        }
    }

    interface MediaComponentPrompts {
        block: any,
        contentState: any,
    }

    const MediaComponent: React.FC<MediaComponentPrompts> = ({ block, contentState }) => {
        const data = contentState.getEntity(block.getEntityAt(0)).getData();
        const emptyHtml = ' ';
        return (
            <div>
                {emptyHtml}
                <img
                    src={data.src}
                    alt={data.alt || ''}
                    style={{ height: data.height || 'auto', width: data.width || 'auto' }}
                />
            </div>
        );
    }

    return (
        <div className=' flex flex-col'>
            {isMounted && (<Editor
                customBlockRenderFunc={myBlockRenderer}
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                    image: {
                        urlEnabled: true,
                        uploadEnabled: true,
                        alignmentEnabled: true,   // 是否显示排列按钮 相当于text-align
                        uploadCallback: uploadImageCallBack,
                        previewImage: true,
                        inputAccept: 'image/*',
                        alt: { present: false, mandatory: false, previewImage: true }
                    },
                    options: [
                        'inline',
                        'blockType',
                        'fontSize',
                        'fontFamily',
                        'list',
                        'textAlign',
                        'colorPicker',
                        'link',
                        'embedded',
                        'image',
                        'remove',
                        'history',
                    ],
                    fontFamily: {
                        options: [
                            '宋体',
                            '黑体',
                            '楷体',
                            '微软雅黑',
                            'Arial',
                            'Georgia',
                            'Impact',
                            'Tahoma',
                            'Times New Roman',
                            'Verdana',
                        ],
                    },
                }}
            />
            )}
            <Button type="submit" onClick={onSave}>保存内容</Button>
            {/* <button onClick={onSave}>Save</button> */}
        </div>
    );
};

export default RichTextEditor;