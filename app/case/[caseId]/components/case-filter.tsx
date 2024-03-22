"use client";

import { useState, useEffect } from 'react';
import { CaseTabSub, Industry, Client, CaseType } from "@/types";
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
        onChange: (matchKey: string) => void,
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

    console.log("param.caseTypeId:" + param.caseTypeId);
    const caseTabId = param.caseTypeId;
    const NO_VALUE = -1;
    const industryId: number = NO_VALUE;
    const typeId: number = NO_VALUE;

    const [currentIndustrys, setCurrentIndustrys] = useState<Industry[]>();
    const [currentTypes, setCurrentTypes] = useState<CaseType[]>([]);
    const [currentClients, setCurrentClients] = useState<Client[]>([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                let { data, error } = await supabaseClient
                    .from('Industry')
                    .select("*")
                    .eq('caseTabId', caseTabId);
                if (!error) {
                    setCurrentIndustrys(data as Industry[]);
                    console.log("useGetIndustrys:" + (data as Industry[]).length);
                    setIsLoading(false);
                }
            } catch (error) {
                setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [caseTabId]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data: any;
                let error: any;
                if (industryId === NO_VALUE) {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Type')
                        .select("*")
                        .eq('caseTabId', caseTabId);
                    data = data_;
                    error = error_;
                } else {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Type')
                        .select("*")
                        .eq('caseTabId', caseTabId).eq("industryId", industryId);
                    data = data_;
                    error = error_;
                }
                if (!error) {
                    const datas = data as CaseType[];
                    setCurrentTypes(datas);
                }
            } catch (error) {
                //setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            //setIsLoading(false);
        };
        fetchData();
    }, [caseTabId, industryId]);

    useEffect(() => {
        //setIsLoading(true);
        const fetchData = async () => {
            try {
                let data: any;
                let error: any;
                if (industryId === NO_VALUE || typeId === NO_VALUE) {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Client')
                        .select("*")
                        .eq('caseTabId', caseTabId);
                    data = data_;
                    error = error_;
                } else {
                    let { data: data_, error: error_ } = await supabaseClient
                        .from('Client')
                        .select("*")
                        .eq('caseTabId', caseTabId).eq("industryId", industryId).eq("typeId", typeId);
                    data = data_;
                    error = error_;
                }
                if (!error) {
                    setCurrentClients(data as Client[]);
                    console.log("useGetClients:" + (data as Client[]).length);
                    //setIsLoading(false);
                }
            } catch (error) {
                //setIsLoading(false);
                console.error('Error fetching data:', error);
            }
            //setIsLoading(false);
        };
        fetchData();
    }, [caseTabId, industryId, typeId]);

    const [industry, setIndustry] = useState<string>("全部")
    const [industryValue, setIndustryValue] = useState<Industry>();
    const [type, setType] = useState<string>("全部");
    const [client, setClient] = useState<string>("全部")
    //const {isLoading, industrys} =  useGetIndustrys(param.caseTypeId);
    //const [currentIndustrys, setCurrentIndustrys] = useState<Industry[]>(industrys);
    //const dataType = useGetTypes(param.caseTypeId, industrys[0]?.id);
    //const [currentTypes, setCurrentTypes] = useState<CaseType[]>(dataType.types);
    //const dataClients = useGetClients(param.caseTypeId, industrys[0]?.id, dataType.types[0]?.id);

    const filterClient = async (caseTabId: number, industryId: number, typeId: number) => {
        //setCurrentClients(useGetClients(caseTabId, industryId, typeId).clients)
        console.log("type:" + type + ", client size:" + currentClients.length);
    }

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
                                            setIndustryValue(item);
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
                                                //setCurrentClients(industryValue?.clients ?? []);
                                                filterClient(param.caseTypeId, industryValue?.id ?? 0, item.id);
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
                                        <MenuItem onClick={() => { }} value={item.id}>{item.name}</MenuItem>
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