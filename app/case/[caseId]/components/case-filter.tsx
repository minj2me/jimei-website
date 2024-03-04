import { useState } from 'react';
import { CaseTabSub } from "@/types";
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
    if (!param || !param.caseTabSub || !param.caseTabSub.industrys) {
        return;
    }
    const [industry, setIndustry] = useState<string>("全部")
    const [type, setType] = useState<string>("全部")
    const [client, setClient] = useState<string>("全部")
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
                            <MenuList defaultValue={industry}>
                                {
                                    param.caseTabSub.industrys.map((item) => (
                                        <MenuItem onClick={()=>{setIndustry(item.title)}} value={item.title}>{item.title}</MenuItem>
                                    ))
                                }
                            </MenuList>
                        </>
                    )}
                </Menu>
            </div>
            <div className=' flex flex-row gap-3  mr-[110px] items-center'>
                <p className='text-[#999999] text-[15px]'>类型</p>
                <p className='text-[#000000] text-[15px]'>{type}</p>
            </div>
            <div className=' flex flex-row gap-3  mr-[110px] items-center'>
                <p className='text-[#999999] text-[15px]'>客户</p>
                <p className='text-[#000000] text-[15px]'>{client}</p>
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