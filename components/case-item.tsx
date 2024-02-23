import { Case } from "@/types";

interface CaseItemProps {
    caseData: Case,
}

const CaseItem: React.FC<CaseItemProps> = ({
    caseData
}) => {
    return (
        <div className=" flex flex-col">
            <img src={caseData.mainImage.url} />
            <p className=" mt-[15px] text-[16px]">{caseData.title}</p>
            <p className=" text-[#999999] mt-[10px] text-[16px]">{caseData.desc}</p>
        </div>
    );
}
export default CaseItem;