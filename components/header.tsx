"use client";

import Image from 'next/image'
import { useState } from "react";
//import MenuModal from "./modals/menu-modal";
// import {
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     MenuGroup,
//     MenuDivider,
//     MenuOptionGroup,
//     MenuItemOption,
// } from "@chakra-ui/react"

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* <MenuModal
                isOpen={open}
                onClose={() => { setOpen(false) }}
            /> */}
            <div className="flex items-center">
                <div
                    className=" flex justify-center items-center h-[80px] w-full "
                >
                    <Image src={`/image/jm_logo.png`} alt="" width="20" height="20" />
                    <text className=" ml-[11px]">
                        集美(广州)工业设计有限公司
                    </text>
                </div>
                <div
                    onClick={() => { setOpen(true) }}
                    className=" absolute hover:cursor-pointer right-[120px] flex items-center justify-center w-[53px] h-[35px] bg-black rounded-3xl">
                    <Image src={`/image/menu.png`} alt="" width="15" height="12" />
                </div>
                {/* <Menu>
                    <MenuButton>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu> */}
            </div>
        </>
    )
}

export default Header;