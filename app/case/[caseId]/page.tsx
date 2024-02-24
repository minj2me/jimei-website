//import getCase from '@/actions/get-case';
import Container from '@/components/ui/container';

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

    return (
        <div className=' bg-white'>
            <Container>
            CasePage
            </Container>
        </div>
    );
}

export default CasePage;