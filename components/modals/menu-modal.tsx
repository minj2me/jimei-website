import ModalComponent from "./modal";
import { useState, useEffect } from "react";
import Modal from "./modal";
import Link from 'next/link';

interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: String;
    description: String;
}

const MenuModal: React.FC<MenuModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Modal
            title={title}
            description={description}
            isOpen={isOpen}
            onClose={onClose}
            childrenBg="bg-neutral-600/70"
            isFullScreen={true}
        >
            <div className="space-x-2 flex flex-row items-center justify-center h-full">
            <Link className=" text-white text-[28px] hover:cursor-pointer" onClick={()=>{onClose()}} href={"/"}>首页</Link>
                <p className=" text-white text-[28px] m-[50px] p-6">.</p>
                <Link className=" text-white text-[28px] hover:cursor-pointer" onClick={()=>{onClose()}} href={"/caseIndex"}>案例</Link>
                <p className=" text-white text-[28px] m-[50px] p-6">.</p>
                <Link className=" text-white text-[28px] hover:cursor-pointer" onClick={()=>{onClose()}} href={"/about"}>关于</Link>
                <p className=" text-white text-[28px] m-[50px] p-6">.</p>
                <Link className=" text-white text-[28px] hover:cursor-pointer" onClick={()=>{onClose()}} href={"/"}>联系</Link>
            </div>
        </Modal>
    );
}
export default MenuModal;