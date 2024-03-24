"use client";

import { useState, useEffect } from 'react';
import { CaseFilterCallback, Industry, Client, CaseType } from "@/types";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Image,
} from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useSessionContext } from "@supabase/auth-helpers-react";

/*import useGetIndustrys from '@/hooks/use-get-industry';
import useGetClients from '@/hooks/use-get-clients';
import useGetTypes from '@/hooks/use-get-types';*/

interface CaseFilterProps {
    param: {
        //caseTabSub: CaseTabSub,
        caseTypeId: number,
        onChange: (callback: CaseFilterCallback) => void,
    }
}
const CaseFilter: React.FC<CaseFilterProps> = ({
    param
}) => {
    if (!param || !param.caseTypeId) {
        return;
    }

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { supabaseClient } = useSessionContext();

    //const caseTabId = param.caseTypeId;
    //const [caseTabId, setCaseTabId] = useState<number>(param.caseTypeId);
    //console.log("caseTabId:" + caseTabId);
    const NO_VALUE = -1;
    const ALL = "全部";
    const [industryId, setIndustryId] = useState<number>(NO_VALUE);
    const [typeId, setTypeId] = useState<number>(NO_VALUE);
    const [clientId, setClientId] = useState<number>(NO_VALUE);
    //const industryId: number = NO_VALUE;
    //const typeId: number = NO_VALUE;

    const [currentIndustrys, setCurrentIndustrys] = useState<Industry[]>();
    const [currentTypes, setCurrentTypes] = useState<CaseType[]>([]);
    const [currentClients, setCurrentClients] = useState<Client[]>([]);

    const [industry, setIndustry] = useState<string>(ALL)
    const [type, setType] = useState<string>(ALL);
    const [client, setClient] = useState<string>(ALL)

    useEffect(() => {
        setIndustryId(NO_VALUE);
        setTypeId(NO_VALUE);
        setIndustry(ALL);
        setType(ALL);
        setClient(ALL);
        param.onChange({ caseTabId: param.caseTypeId, industryId: industryId, typeId: typeId, clientId: clientId })
    }, [param.caseTypeId]);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                console.log("fetching Industry Data, caseTabId:" + param.caseTypeId);
                let { data, error } = await supabaseClient
                    .from('Industry')
                    .select("*")
                    .eq('caseTabId', param.caseTypeId);
                if (!error) {
                    setCurrentIndustrys(data as Industry[]);
                    //console.log("useGetIndustrys:" + (data as Industry[]).length);
                    setIsLoading(false);
                    param.onChange({ caseTabId: param.caseTypeId, industryId: industryId, typeId: typeId, clientId: clientId })
                }
            } catch (error) {
                setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [param.caseTypeId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data: any;
                let error: any;
                //console.log("fetching Type Data, caseTabId:" + param.caseTypeId + ", industryId:" + industryId);
                if (industryId === NO_VALUE) {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Type')
                        .select("*")
                        .eq('caseTabId', param.caseTypeId);
                    data = data_;
                    error = error_;
                } else {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Type')
                        .select("*")
                        .eq('caseTabId', param.caseTypeId).eq("industryId", industryId);
                    data = data_;
                    error = error_;
                }
                if (!error) {
                    const datas = data as CaseType[];
                    setCurrentTypes(datas);
                    //console.log("useGetTypes:" + datas.length);
                    param.onChange({ caseTabId: param.caseTypeId, industryId: industryId, typeId: typeId, clientId: clientId })
                }
            } catch (error) {
                //setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            //setIsLoading(false);
        };
        fetchData();
    }, [param.caseTypeId, industryId]);

    useEffect(() => {
        //setIsLoading(true);
        const fetchData = async () => {
            try {
                let data: any;
                let error: any;
                //console.log("fetching Client Data, caseTabId:" + param.caseTypeId + ", industryId:" + industryId + ", typeId:" + typeId);
                if (industryId === NO_VALUE && typeId === NO_VALUE) {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Client')
                        .select("*")
                        .eq('caseTabId', param.caseTypeId);
                    data = data_;
                    error = error_;
                } else if (industryId === NO_VALUE && typeId !== NO_VALUE) {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Client')
                        .select("*")
                        .eq('caseTabId', param.caseTypeId).eq("typeId", typeId);
                    data = data_;
                    error = error_;
                } else if (industryId !== NO_VALUE && typeId === NO_VALUE) {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Client')
                        .select("*")
                        .eq('caseTabId', param.caseTypeId).eq("industryId", industryId);
                    data = data_;
                    error = error_;
                } else {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Client')
                        .select("*")
                        .eq('caseTabId', param.caseTypeId).eq("industryId", industryId).eq("typeId", typeId);
                    data = data_;
                    error = error_;
                }
                if (!error) {
                    setCurrentClients(data as Client[]);
                    param.onChange({ caseTabId: param.caseTypeId, industryId: industryId, typeId: typeId, clientId: clientId })
                    //setIsLoading(false);
                }
            } catch (error) {
                //setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            //setIsLoading(false);
        };
        fetchData();
    }, [param.caseTypeId, industryId, typeId]);

    if (isLoading) {
        return (<p className="flex w-[100%] h-[800px] text-center items-center justify-center">加载中...</p>);
    }

    return (
        <div className=' flex justify-start items-center'>
            <div className=' flex flex-row gap-3 mr-[110px] items-center'>
                <p className='text-[#999999] text-[15px]'>行业</p>
                <p className='text-[#000000] text-[15px]'>{industry}</p>
                {/* https://chakra-ui.com/docs/components/menu */}
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton>
                                <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                {
                                    currentIndustrys?.map((item) => (
                                        <MenuItem onClick={() => {
                                            setIndustry(item.title);
                                            //setIndustryValue(item);
                                            setIndustryId(item.id);
                                            //console.log("industryId:" + industryId);
                                        }} value={item.title}>{item.title}</MenuItem>
                                    ))
                                }
                            </MenuList>
                        </>
                    )}
                </Menu>
            </div>
            <div className=' flex flex-row gap-3 mr-[110px] items-center'>
                <p className='text-[#999999] text-[15px]'>类型</p>
                <p className='text-[#000000] text-[15px]'>{type}</p>
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton>
                                <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                {
                                    currentTypes?.map((item) => (
                                        <MenuItem onClick={() => {
                                            setType(item.title),
                                                setTypeId(item.id)
                                            //setCurrentClients(industryValue?.clients ?? []);
                                        }} value={item.id}>{item.title}</MenuItem>
                                    ))
                                }
                            </MenuList>
                        </>
                    )}
                </Menu>
            </div>
            <div className=' flex flex-row gap-3 mr-[110px] items-center'>
                <p className='text-[#999999] text-[15px]'>客户</p>
                <p className='text-[#000000] text-[15px]'>{client}</p>
                <Menu>
                    {({ isOpen }) => (
                        <>
                            <MenuButton>
                                <ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                {
                                    currentClients?.map((item) => (
                                        <MenuItem onClick={() => {
                                            setClient(item.name),
                                            setClientId(item.id),
                                            param.onChange({ caseTabId: param.caseTypeId, industryId: industryId, typeId: typeId, clientId: item.id })
                                        }} value={item.id}>{item.name}</MenuItem>
                                    ))
                                }
                            </MenuList>
                        </>
                    )}
                </Menu>
            </div>
            <div>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='string' placeholder='搜索' />
                </InputGroup>
            </div>
        </div>);
}

export default CaseFilter;