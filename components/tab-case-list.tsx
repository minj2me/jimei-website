"use client";
import { useState, useEffect, useRef } from "react";
import { Case, CaseTypeData, CaseTab, CaseType, CaseHeaderType, CaseTabSub } from "@/types";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import CaseList from "./case-list";
import { useSessionContext } from "@supabase/auth-helpers-react";
import CaseFilter from "@/app/case/[caseId]/components/case-filter";

interface TabCaseListComponentProps {
    tabs: CaseTab[],
}

const TabCaseListComponent: React.FC<TabCaseListComponentProps> = ({
    tabs
}) => {
    if (tabs === undefined || tabs === null) {
        return;
    }
    if (tabs === undefined || tabs === null) {
        return;
    }
    //const [cases, setCases] = useState<Case[]>([]);
    const NO_VALUE = -1;
    const [industryId, setIndustryId] = useState<number>(NO_VALUE);
    const [typeId, setTypeId] = useState<number>(NO_VALUE);
    const [clientId, setClientId] = useState<number>(NO_VALUE);

    const { supabaseClient } = useSessionContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    //const isInitialRender = useRef(true); // 用于标记是否是首次渲染
    //const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [needReload, setNeedReload] = useState<boolean>(false);
    //const [currentCaseTabId, setCurrentCaseTabId] = useState<number>(tabs[0]?.id);
    //const [currentCaseTabId, setCurrentCaseTabId] = useState<number>(NO_VALUE);
    const [currentCaseTabId, setCurrentCaseTabId] = useState<number>(1);
    const [currentCases, setCurrentCases] = useState<Case[]>([]);

    //console.log("tabs[0]?.id:" + tabs[0]?.id + ", currentCaseTabId:" + currentCaseTabId);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            //console.log("queryString, fetching cases data, caseTabId:" + currentCaseTabId + ", industryId:" + industryId + ", typeId:" + typeId + ", clientId:" + clientId);
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
                    const queryObj: Record<string, string> = queryArray.reduce((obj:any, condition) => {
                        const [key, value] = condition.split('=');
                        obj[key] = value;
                        return obj;
                    }, {});
                    /*console.log({ queryObj });
                    console.log("queryObj.caseTabId:" + queryObj.caseTabId);
                    console.log("queryObj.industryId:" + queryObj.industryId);
                    console.log("queryObj.typeId:" + queryObj.typeId);
                    console.log("queryObj.clientId:" + queryObj.clientId);*/
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

    /*if (!currentTabSub) {
        return;
    }*/
    //console.log("TabCaseListComponent, currentIndex:" + currentIndex + ", currentCases length:" + currentCases.length);
    return (
        <div className=" w-[95%] bg-[#f2f2f2]">
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
                        onChange({ caseTabId, industryId, typeId, clientId }) {
                            setCurrentCaseTabId(caseTabId);
                            setIndustryId(industryId);
                            setTypeId(typeId);
                            setClientId(clientId);
                        },
                    }} />
                <div className=" h-[80px]" />
                <TabPanels>
                    <CaseList isLoading={isLoading} cases={currentCases} itemsPerPage={9} tabChanged={needReload} />
                </TabPanels>
            </Tabs>
        </div>
    );
}
export default TabCaseListComponent;