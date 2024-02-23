"use client";
import { useState } from "react";
import { Case, CaseTypeData, CaseType } from "@/types";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import CaseList from "./case-list";

interface TabCaseListComponentProps {
    tabs: CaseTypeData[],
    caseMap: Map<CaseType, Case[]>,
}

const TabCaseListComponent: React.FC<TabCaseListComponentProps> = ({
    tabs, caseMap
}) => {
    if (caseMap === undefined || caseMap === null) {
        return;
    }
    if (tabs === undefined || tabs === null) {
        return;
    }
    //const [tabIndex, setTabIndex] = useState(0)
    const [currentCases, setCurrentCases] = useState<Case[]>(caseMap.get(tabs[0].type) ?? []);
    //setCurrentCases(caseMap.get(CaseType.BrandDesign));
    //setCurrentCases(caseMap.get(tabs[0].type));
    if (!currentCases) {
        return;
    }
    //const bg = colors[tabIndex]
    return (
        <div className=" w-[95%]">
            <Tabs size='md' align="center" variant="unstyled" onChange={(index) =>
                setCurrentCases(caseMap.get(tabs[index].type) ?? [])
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
                    <CaseList cases={currentCases} itemsPerPage={1} />
                </TabPanels>
            </Tabs>
        </div>
    );
}
export default TabCaseListComponent;