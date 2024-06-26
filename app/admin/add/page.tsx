
"use client";
import React, { useState } from "react";
import Container from '@/components/ui/container';
import useGetCaseTab from "@/hooks/use-get-case-tab";
//import RichTextEditor from "@/components/rich-text-editor";
import AddContentComponent from "@/components/add-content";

/**
 * 添加案例和新闻的页面
 * //https://www.npmjs.com/package/react-draft-wysiwyg
//https://blog.csdn.net/weixin_36775115/article/details/104061792
//https://blog.csdn.net/qq_38867101/article/details/112000611
https://blog.logrocket.com/build-rich-text-editors-react-draft-js-react-draft-wysiwyg/
 */

const AddPage = () => {
    const { isLoading, caseTabs } = useGetCaseTab();
    if (isLoading) {
        return (<p className="flex w-[100%] h-[800px] text-center items-center justify-center">加载中...</p>);
    }
    return (
        <div>
            <AddContentComponent tabs={caseTabs} />
        </div>
    );
}

export default AddPage;