import ModalComponent from "./modal";
import { useState, useEffect } from "react";

interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({
    isOpen, onClose
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <ModalComponent
            title={""}
            description={""}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="space-x-2 flex flex-row items-center justify-center bg-red-500">
                <p className=" text-white text-[20px]">案例</p>
                <p className=" text-white text-[20px] m-10">.</p>
                <p className=" text-white text-[20px]">关于</p>
                <p className=" text-white text-[20px] m-10">.</p>
                <p className=" text-white text-[20px]">联系</p>
            </div>
        </ModalComponent>
    );
}
export default MenuModal;