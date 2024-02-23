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
            <p>{caseData.title}</p>
            <p>{caseData.desc}</p>
        </div>
    );
}
export default CaseItem;