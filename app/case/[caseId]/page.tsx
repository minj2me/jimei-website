//import getCase from '@/actions/get-case';
import Container from '@/components/ui/container';
import { Case } from '@/types';

interface CasePageProps {
    params: {
        caseId: string;
    }
}

/**
 * 案例详情页
 */
const CasePage: React.FC<CasePageProps> = async ({
    params
}) => {
    /*const companyCase = await getCase(params.caseId);

    if (!companyCase) {
        return null;
    }*/

    if (params.caseId === "") {
        return;
    }
    const map = new Map<string, Case>();

    return (
        <div className=' bg-[#f2f2f2]'>
            <Container>
                CasePage
            </Container>
        </div>
    );
}

export default CasePage;