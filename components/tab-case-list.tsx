"use client";
import { useState, useEffect, useRef } from "react";
import { Case, CaseTypeData, CaseTab, CaseType, CaseHeaderType, CaseTabSub } from "@/types";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import CaseList from "./case-list";
import CaseFilter from "@/app/case/[caseId]/components/case-filter";

interface TabCaseListComponentProps {
    //tabs: CaseTypeData[],
    tabs: CaseTab[],
    //tabsMap?: Map<CaseHeaderType, CaseTabSub>,
    //caseMap?: Map<string, Case[]>,
    //onTabChange(index: number): void;
}

const TabCaseListComponent: React.FC<TabCaseListComponentProps> = ({
    //tabs, tabsMap, caseMap
    tabs
}) => {
    if (tabs === undefined || tabs === null) {
        return;
    }
    if (tabs === undefined || tabs === null) {
        return;
    }
    //const isInitialRender = useRef(true); // 用于标记是否是首次渲染
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [needReload, setNeedReload] = useState<boolean>(false);
    //行业id
    const [currentIndustry, setCurrentIndustry] = useState<string>();
    //类型id
    const [currentType, setCurrentType] = useState<string>();
    //客户id
    //const [currentTabSub, setCurrentTabSub] = useState<CaseTabSub>(tabs[currentIndex]?.sub);
    //const [currentTabSub, setCurrentTabSub] = useState<CaseTabSub | undefined>(undefined);
    const [currentCaseTabId, setCurrentCaseTabId] = useState<number>(tabs[0]?.id);
    //""为返回全部 
    //const [currentCases, setCurrentCases] = useState<Case[]>(caseMap?.get(tabs[currentIndex].type + ",,,") ?? []);
    const [dataOffset, setDataOffset] = useState(0);
    /*if (!currentTabSub) {
        return;
    }*/
    //console.log("TabCaseListComponent, currentIndex:" + currentIndex + ", currentCases length:" + currentCases.length);
    return (
        <div className=" w-[95%] bg-[#f2f2f2]">
            <Tabs size='md' align="center" variant="unstyled" onChange={
                (index) => {
                    setDataOffset(0),
                        //key为:大类,行业,子类型,客户id; 大类id+",,,"为返回全部 
                        //setCurrentCases(caseMap.get(tabs[index].type + ",,,") ?? []),
                        //setCurrentTabSub(tabsMap.get(tabs[index].type)!!),
                        setCurrentCaseTabId(tabs[index].id),
                        console.log("tabs[" + index + "].type:" + tabs[index].type),
                        setCurrentIndex(index),
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
                        onChange(matchKey) {
                        },
                    }} />
                <div className=" h-[80px]" />
                {/* <TabPanels>
                    <CaseList cases={currentCases} itemsPerPage={9} tabChanged={needReload} />
                </TabPanels> */}
            </Tabs>
        </div>
    );
}
export default TabCaseListComponent;