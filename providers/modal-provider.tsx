"use client";

//import AuthModal from "@/components/modals/AuthModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //当app启动时执行
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
        </>
    );
}

export default ModalProvider