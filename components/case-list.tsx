import { Case, CaseType } from "@/types";
import CaseItem from "@/components/case-item";

interface CaseListProps {
    cases: Case[],
}

const CaseList: React.FC<CaseListProps> = ({
    cases
}) => {
    return (
        <div className=" grid grid-cols-3 gap-[40px]">
            {
                cases.map((item) => (
                    <CaseItem caseData={item} />
                ))
            }
        </div>
    );
}
export default CaseList;