import { Case } from "@/types";

interface CaseItemProps {
    caseData: Case,
}

const CaseItem: React.FC<CaseItemProps> = ({
    caseData
}) => {
    return (
        <div className=" flex flex-col hover:cursor-pointer items-center">
            <img src={caseData.mainImage?.url} />
            <p className=" mt-[15px] text-[16px] text-center">{caseData.title}</p>
            <p className=" text-[#999999] mt-[10px] text-[16px] text-center">{caseData.desc}</p>
        </div>
    );
}
export default CaseItem;