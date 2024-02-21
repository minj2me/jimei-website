import Modal from "./modal";
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
        <Modal
            title={""}
            description={""}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="space-x-2 flex flex-row items-center justify-center bg-neutral-600/50">
                <p className=" text-white text-[20px]">案例</p>
                <p className=" text-white text-[20px] m-10">.</p>
                <p className=" text-white text-[20px]">关于</p>
                <p className=" text-white text-[20px] m-10">.</p>
                <p className=" text-white text-[20px]">联系</p>
            </div>
        </Modal>
    );
}
export default MenuModal;