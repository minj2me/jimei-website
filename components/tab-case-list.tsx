"use client";
import { useState, useEffect, useRef } from "react";
//import { useRouter } from 'next/navigation';
import { Case, CaseTypeData, CaseType } from "@/types";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import CaseList from "./case-list";

interface TabCaseListComponentProps {
    tabs: CaseTypeData[],
    caseMap: Map<CaseType, Case[]>,
    onTabChange(index: number): void;
}

const TabCaseListComponent: React.FC<TabCaseListComponentProps> = ({
    tabs, caseMap, onTabChange
}) => {
    const isInitialRender = useRef(true); // 用于标记是否是首次渲染
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [needReload, setNeedReload] = useState<boolean>(false);
    //const router = useRouter();
    if (caseMap === undefined || caseMap === null) {
        return;
    }
    if (tabs === undefined || tabs === null) {
        return;
    }
    //const [tabIndex, setTabIndex] = useState(0)
    const [currentCases, setCurrentCases] = useState<Case[]>(caseMap.get(tabs[currentIndex].type) ?? []);
    const [dataOffset, setDataOffset] = useState(0);
    //setCurrentCases(caseMap.get(CaseType.BrandDesign));
    //setCurrentCases(caseMap.get(tabs[0].type));
    if (!currentCases) {
        return;
    }
    console.log("TabCaseListComponent, currentIndex:" + currentIndex + ", currentCases length:" + currentCases.length);
    return (
        <div className=" w-[95%]">
            <Tabs size='md' align="center" variant="unstyled" onChange={
                (index) => {
                    setDataOffset(0),
                        console.log("index:" + index + ", data count:" + caseMap.get(tabs[index].type)?.length + ", name:" + tabs[index].name),
                        setCurrentCases(caseMap.get(tabs[index].type) ?? []),
                        setCurrentIndex(index),
                        onTabChange(index)
                    setNeedReload(true);
                    setTimeout(() => {
                        console.log("TabCaseListComponent, setNeedReload to false")
                        setNeedReload(false)
                    }, 1000);
                    // Force refresh the page
                }
            }>
                <TabList>
                    {tabs.map((tab, index) => (
                        <Tab key={index} ml="20px" mr="20px">{tab.name}</Tab>
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
                <div className=" h-[80px]" />
                <TabPanels>
                    <CaseList cases={currentCases} itemsPerPage={1} tabChanged={needReload} />
                </TabPanels>
            </Tabs>
        </div>
    );
}
export default TabCaseListComponent;