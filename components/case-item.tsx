"use client";

import { Case } from "@/types";
import useGetCaseImages from "@/hooks/use-get-case-image";
import { useEffect, useState } from "react";

interface CaseItemProps {
    caseData: Case,
}

const CaseItem: React.FC<CaseItemProps> = ({
    caseData
}) => {
    const { isLoading, caseImages } = useGetCaseImages(caseData.id);
    const [mainImageUrl, setMainImageUrl] = useState<string>("");

    useEffect(() => {
        for (let item of caseImages) {
            if (item.is_main) {
                setMainImageUrl(item.url);
            }
        }
    }, [caseImages]);//检测caseImages的变化

    if (isLoading) {
        return (<p className="flex w-[100%] h-[800px] text-center items-center justify-center">数据加载中...</p>);
    }

    return (
        <div className=" flex flex-col hover:cursor-pointer items-center">
            <img src={mainImageUrl} />
            <p className=" mt-[15px] text-[16px] text-center">{caseData.title}</p>
            <p className=" text-[#999999] mt-[10px] text-[16px] text-center">{caseData.desc}</p>
        </div>
    );
}
export default CaseItem;