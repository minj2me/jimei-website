import Container from '@/components/ui/container';
import TabListComponent from "@/components/tab-case-list";
import { CaseTypeData, CaseType, CaseTypeName, Case } from '@/types';
//import CaseList from '@/components/case-list';

const CaseIndexPage = () => {
    /*const companyCase = await getCase(params.caseId);
    if (!companyCase) {
        return null;
    }*/
    const caseTypes = new Array<CaseTypeData>();
    caseTypes.push({ type: CaseType.BrandDesign, name: CaseTypeName.BrandDesign });
    caseTypes.push({ type: CaseType.AlbumDesign, name: CaseTypeName.AlbumDesign });
    caseTypes.push({ type: CaseType.IndustrialDesign, name: CaseTypeName.IndustrialDesign });
    caseTypes.push({ type: CaseType.PPTDesign, name: CaseTypeName.PPTDesign });
    caseTypes.push({ type: CaseType.WebDesign, name: CaseTypeName.WebDesign });

    /**
     *   type: CaseTypeData,
  id: string,
  title: string,
  desc: string,
  mainImage: ImageData,
  images?: ImageData[],
     */
    const map = new Map<CaseType, Case[]>();
    const mainImage_ = { url: "/image/case1/main.png", alt: "", width: 3400, height: 1500 };
    const cases = new Array<Case>();
    const case1 = {
        type: { type: CaseType.BrandDesign, name: CaseTypeName.BrandDesign }, id: "0", title: "沉香系列包装视觉方案",
        desc: "以及极简的包装视觉来体现天然及高品质感,看起来克制，真实,自然,没有浮夸的修饰。放大沉香图片,突出出产品原料,满足消费者对于“天然、健康、高效”护肤品的追求。包装纸盒材质选择可以完全降解的环保纤维，内包装软管开口盖子使用原木材质,为化妆品增添一份自然质朴的气息,让人感觉更加亲近大自然呼应产品理念“自然之美”",
        mainImage: mainImage_, images: []
    };
    const mainImage_2 = { url: "/image/case1/main.png", alt: "", width: 3400, height: 1500 };
    const case2 = {
        type: { type: CaseType.BrandDesign, name: CaseTypeName.BrandDesign }, id: "1", title: "沉香系列包装视觉方案2",
        desc: "2以及极简的包装视觉来体现天然及高品质感,看起来克制，真实,自然,没有浮夸的修饰。放大沉香图片,突出出产品原料,满足消费者对于“天然、健康、高效”护肤品的追求。包装纸盒材质选择可以完全降解的环保纤维，内包装软管开口盖子使用原木材质,为化妆品增添一份自然质朴的气息,让人感觉更加亲近大自然呼应产品理念“自然之美”",
        mainImage: mainImage_2, images: []
    };
    const mainImage_3 = { url: "/image/case1/main.png", alt: "", width: 3400, height: 1500 };
    const case3 = {
        type: { type: CaseType.AlbumDesign, name: CaseTypeName.AlbumDesign }, id: "2", title: "AlbumDesign",
        desc: "3以及极简的包装视觉来体现天然及高品质感,看起来克制，真实,自然,没有浮夸的修饰。放大沉香图片,突出出产品原料,满足消费者对于“天然、健康、高效”护肤品的追求。包装纸盒材质选择可以完全降解的环保纤维，内包装软管开口盖子使用原木材质,为化妆品增添一份自然质朴的气息,让人感觉更加亲近大自然呼应产品理念“自然之美”",
        mainImage: mainImage_3, images: []
    };
    cases.push(case1);
    cases.push(case2);
    cases.push(case2);
    cases.push(case1);
    cases.push(case2);

    const cases2 = new Array<Case>();
    cases2.push(case3);
    cases2.push(case3);
    map.set(CaseType.BrandDesign, cases);
    map.set(CaseType.AlbumDesign, cases2);

    return (
        <div className=' bg-white'>
            <div className=' h-[10px]' />
            <Container>
                <div>
                    <p className='absolute text-[40px]'>Work</p>
                    <div className=' h-[20px]' />
                    <TabListComponent tabs={caseTypes} caseMap={map} />
                </div>
            </Container>
        </div>
    );
}

export default CaseIndexPage;