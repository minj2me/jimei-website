"use client";
import Container from '@/components/ui/container';
import TabCaseListComponent from "@/components/tab-case-list";
//import getCaseTab from "@/actions/get-case-tab";
import useGetCaseTab from "@/hooks/use-get-case-tab";
//import { CaseTypeData, IndustryTypeName, CaseType, CaseTypeName, Case, CaseTab, CaseHeaderTypeName, CaseHeaderType, CaseTabSub, IndustryType, Client, Industry } from '@/types';
//import CaseList from '@/components/case-list';

/**
 * 案例主页
 */
const CaseIndexPage = () => {
    const { isLoading, caseTabs } = useGetCaseTab();
    console.log("isLoading:" + isLoading);
    if (isLoading) {
        return (<p className="flex w-[100%] h-[800px] text-center items-center justify-center">加载中...</p>);
    }
    if (!caseTabs){
        return;
    }
    console.log("caseTabs size:" + caseTabs.length);
    return (
        <div className='bg-[#f2f2f2]'>
            <div className=' h-[10px]' />
            <Container>
                <div>
                    <p className='absolute text-[40px]'>Work</p>
                    <div className=' h-[20px]' />
                    <TabCaseListComponent tabs={caseTabs} />
                </div>
            </Container>
        </div>
    );
}

export default CaseIndexPage;