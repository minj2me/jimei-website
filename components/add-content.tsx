"use client";
import { useState, useEffect, useRef } from "react";
import { Case, CaseTypeData, CaseTab, CaseType, CaseHeaderType, CaseTabSub } from "@/types";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Input } from '@chakra-ui/react'
import { useSessionContext } from "@supabase/auth-helpers-react";
import CaseFilter from "@/app/case/[caseId]/components/case-filter";
import RichTextEditor from "@/components/rich-text-editor";
import { toast } from "react-hot-toast";

interface AddContentComponentProps {
    tabs: CaseTab[],
}

const AddContentComponent: React.FC<AddContentComponentProps> = ({
    tabs
}) => {
    if (tabs === undefined || tabs === null) {
        return;
    }
    if (tabs === undefined || tabs === null) {
        return;
    }
    const NO_VALUE = -1;
    const [industryId, setIndustryId] = useState<number>(NO_VALUE);
    const [typeId, setTypeId] = useState<number>(NO_VALUE);
    const [clientId, setClientId] = useState<number>(NO_VALUE);

    const { supabaseClient } = useSessionContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [needReload, setNeedReload] = useState<boolean>(false);
    const [currentCaseTabId, setCurrentCaseTabId] = useState<number>(1);
    const [currentCases, setCurrentCases] = useState<Case[]>([]);

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                let data: any;
                let error: any;
                const queryArray: string[] = []// 动态创建查询条件字符串
                if (currentCaseTabId !== NO_VALUE) {
                    queryArray.push("caseTabId=" + currentCaseTabId);
                }
                if (industryId !== NO_VALUE) {
                    queryArray.push("industryId=" + industryId);
                }
                if (typeId !== NO_VALUE) {
                    queryArray.push("typeId=" + typeId);
                }
                if (clientId !== NO_VALUE) {
                    queryArray.push("clientId=" + clientId);
                }
                if (queryArray.length === 0) {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Case')
                        .select("*")
                    data = data_;
                    error = error_;
                } else {
                    // 将字符串数组转换为对象
                    const queryObj: Record<string, string> = queryArray.reduce((obj: any, condition) => {
                        const [key, value] = condition.split('=');
                        obj[key] = value;
                        return obj;
                    }, {});
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Case')
                        .select()
                        .match(queryObj)
                    data = data_;
                    error = error_;
                }
                if (!error) {
                    setCurrentCases(data as Case[]);
                    //console.log("useGetCases:" + (data as Case[]).length);
                    setIsLoading(false);
                }
            } catch (error) {
                setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [currentCaseTabId, industryId, typeId, clientId]);

    const insertData = async (data: Case) => {
        setIsLoading(true);
        toast.loading("数据处理中...");
        try {
            console.log("currentCaseTabId:" + currentCaseTabId);
            console.log("industryId:" + industryId);
            console.log("typeId:" + typeId);
            console.log("clientId:" + clientId);
            console.log("html:" + data.html);

            const { error: error_ } = await supabaseClient
                .from('Case')
                .insert(
                    {
                        caseTabId: currentCaseTabId,
                        industryId: industryId,
                        typeId: typeId,
                        clientId: clientId,
                        title: data.title,
                        desc: data?.desc,
                        //mainImage: { url: "", width: 1500, height: 0, is_main: true },
                        html: data.html
                    },
                );
            setIsLoading(false);
            if (!error_) {
                //setNeedReload(true);
                toast.success("数据添加成功");
            } else {
                toast.error("数据添加失败");
            }
        } catch (error) {
            setIsLoading(false);
            toast.error("数据添加失败, " + error);
            console.error('Error inserting data:', error);
        }
    }

    return (
        <div className="bg-[#f2f2f2] p-5">
            <Tabs size='md' align="center" variant="unstyled" onChange={
                (index) => {
                    //setDataOffset(0),
                    //key为:大类,行业,子类型,客户id; 大类id+",,,"为返回全部 
                    //setCurrentCases(caseMap.get(tabs[index].type + ",,,") ?? []),
                    //setCurrentTabSub(tabsMap.get(tabs[index].type)!!),
                    setCurrentCaseTabId(tabs[index].id),
                        console.log("tabs[" + index + "].type:" + tabs[index].type),
                        //setCurrentIndex(index),
                        //onTabChange(index)
                        setNeedReload(true),
                        //reset value
                        setTimeout(() => {
                            setNeedReload(false)
                        }, 500);
                    // Force refresh the page
                }
            }>
                <TabList>
                    {tabs.map((tab, index) => (
                        <Tab key={index} ml="20px" mr="20px">{tab.title}</Tab>
                    ))}
                </TabList>
                <TabIndicator
                    position="relative"
                    mt="1.5px"
                    height="1px"
                    bg="#0D0C22"
                    borderRadius="1px"
                />
                <p className=' mt-[1.5px] w-full border-b border-dashed bg-[#999999]' />
                <div className=" h-[40px]" />
                <CaseFilter param={
                    {
                        caseTypeId: currentCaseTabId,
                        showAddType: true,
                        showEditText: false,
                        onChange({ caseTabId, industryId, typeId, clientId }) {
                            setCurrentCaseTabId(caseTabId);
                            setIndustryId(industryId);
                            setTypeId(typeId);
                            setClientId(clientId);
                        },
                    }} />
                <TabPanels>
                    <div className=" gap-4">
                        <div className='h-[20px]' />
                        <Input placeholder='列表页标题' bgColor={"#ffffff"} onChange={(event) => {
                            setTitle(event.target.value)
                        }} />
                        <div className='h-[15px]' />
                        <Input placeholder='列表页详情' bgColor={"#ffffff"} onChange={(event) => {
                            setDesc(event.target.value)
                        }} />
                        <div className='h-[15px]' />
                        <div className=" bg-[#F2F2F2] h-[600px]">
                            <RichTextEditor onChange={(content) => {
                                //console.log(content);
                                // export interface Case {
                                //     id?: number,
                                //     caseTabId: number,
                                //     industryId: number,
                                //     typeId: number,
                                //     clientId: number,
                                //     type?: CaseTypeData,
                                //     title?: string,
                                //     title2?: string,//展示在类型名上方
                                //     title3?: string,//展示在类型名下方的其它信息 
                                //     desc?: string,//设计理念 
                                //     projectBg?: string,//项目背景
                                //     mainImage: ImageData,
                                //     images?: ImageData[],
                                //     html?: string,
                                //   }
                                insertData({
                                    caseTabId: currentCaseTabId,
                                    industryId: industryId,
                                    typeId: typeId,
                                    clientId: clientId,
                                    title: title,
                                    desc:desc,
                                    //mainImage: { url: "", width: 1500, height: 0, is_main: true },
                                    html: content,
                                });
                            }} />
                        </div>
                    </div>
                </TabPanels>
            </Tabs>
        </div>
    );
}
export default AddContentComponent;