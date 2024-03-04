import { useState } from 'react';
import { CaseTabSub, Industry, Client } from "@/types";
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

interface CaseFilterProps {
    param: {
        caseTabSub: CaseTabSub,
        onChange: (matchKey: string) => void,
    }
}
const CaseFilter: React.FC<CaseFilterProps> = ({
    param
}) => {
    //if (!param || !param.caseTabSub || !param.caseTabSub.industrys) {
    if (!param || !param.caseTabSub) {
        return;
    }
    console.log("param.caseTabSub.industrys size:" + param.caseTabSub.industrys.length);
    const [industry, setIndustry] = useState<string>("全部")
    const [industryValue, setIndustryValue] = useState<Industry>();
    const [type, setType] = useState<string>("全部");
    const [client, setClient] = useState<string>("全部")
    const [currentClients, setCurrentClients] = useState<Client[]>([]);

    const filterClient = (industry: Industry | undefined, type: number) => {
        if (industry) {
            setCurrentClients(industry.map.get(type) ?? [])
            console.log("type:" + type + ", client size:" + currentClients.length);
        }
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
                            {/* <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
                            </MenuList> */}
                            <MenuList>
                                {
                                    param.caseTabSub.industrys.map((item) => (
                                        <MenuItem onClick={() => { setIndustry(item.title), setIndustryValue(item) }} value={item.title}>{item.title}</MenuItem>
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
                                    param.caseTabSub.datas.map((item) => (
                                        <MenuItem onClick={() => {
                                            setType(item.name),
                                                //setCurrentClients(industryValue?.clients ?? []);
                                                filterClient(industryValue ?? undefined, item.type);
                                        }} value={item.type}>{item.name}</MenuItem>
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
                                    currentClients.map((item) => (
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