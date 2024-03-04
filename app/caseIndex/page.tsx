import Container from '@/components/ui/container';
import TabListComponent from "@/components/tab-case-list";
import { CaseTypeData, IndustryTypeName, CaseType, CaseTypeName, Case, CaseTab, CaseHeaderTypeName, CaseHeaderType, CaseTabSub, IndustryType, Client, Industry } from '@/types';
//import CaseList from '@/components/case-list';

/**
 * 案例主页
 */
const CaseIndexPage = () => {
    /*const companyCase = await getCase(params.caseId);
    if (!companyCase) {
        return null;
    }*/

    const caseTabs = new Array<CaseTab>();
    //const caseTabSubSpaceDesign = new Array<CaseTabSub>();
    //const caseTabSubIndustryDesign = new Array<CaseTabSub>();
    //每个大类型，都有自已的：行业，类型，客户
    const clientIndustryTypeFoodsWithPackingDesignForFlat = new Array<Client>();//平面设计,产品包装设计，食品行业的客户列表
    //const clientIndustryTypeFoodsForSpeacDesign = new Array<Client>();
    const clientIndustryTypeBrandForFlat = new Array<Client>();//平面设计，品牌行业的客户列表
    const mapClientIndustryTypeBrandForFlat = new Map<number, Array<Client>>();//平面设计，食品行业的map, key为类别
    //首席乐厨
    const client1 = { id: 0, name: "首席乐厨" };
    const client2 = { id: 1, name: "喜心点心" };
    clientIndustryTypeFoodsWithPackingDesignForFlat.push(client1);
    clientIndustryTypeBrandForFlat.push(client2);
    //const mainImage_ = { url: "image/cases/case15/main.png", alt: "", width: 3400, height: 1500 };
    const casesForClient1 = new Array<Case>();
    const case15 = {
        clientId: client1.id,
        type: { type: CaseType.PackagingDesign, name: CaseTypeName.PackagingDesign },
        id: "0", title: "（首席乐厨五谷杂粮包装设计）", title2: "Love Kitchen",
        title3: "首席乐厨食品有限公司\nLove Kitchen Food Co., Ltd\n首席乐厨Love Kitchen\nExecutive Project Director\nBravo\nExecutive Designer\nBai\nExecutive illustrator\nLi\n\nPublished on 08. 20. 2023",
        desc: "我们在五谷杂粮包装主视觉上使用了手作感的插画，搭配上中式毛笔字，让产品整体感觉充满了中国风，跟农产品搭配起来相得益彰。包装材质上采用牛皮纸，以传递自然农植的品牌理念。",
        projectBg: "首席乐厨食品有限公司在2015-12-14创建 。法定注册地址为中山市火炬开发区松柏路1号A幢一楼 主要经营食品生产；食品经营；生产、销售：农副产品；销售：干货；国内贸易等，公司现有优秀的员工1-20人，是一家在中山市不断发展进步的批发/零售公司。2023年委托我们为旗下一系列产品包装进行设计。",
        mainImage: { url: "image/cases/case15/main.png", alt: "", width: 3400, height: 1500 },
        images: [{ url: "cases/image/case15/1.png", alt: "", width: 1500, height: 0 }, { url: "cases/image/case15/2.png", alt: "", width: 1500, height: 0 }]
    };
    const case16 = {
        clientId: client1.id,
        type: { type: CaseType.PackagingDesign, name: CaseTypeName.PackagingDesign },
        id: "1", title: "（首席乐厨龙虾面包装设计）", title2: "Love Kitchen",
        title3: "首席乐厨食品有限公司\nLove Kitchen Food Co., Ltd\n首席乐厨Love Kitchen\nExecutive Project Director\nBravo\nExecutive Designer\nBai\nExecutive illustrator\nLi\n\nPublished on 08. 20. 2023",
        desc: "整体包装以青花瓷风格进行设计，产品名用中华传统牌匾的方式设计，对称式构图，展现中华传统文化的文化底蕴和审美，提取汤字进行印章式设计，传递产品卖点’鲜甜浓汤‘。",
        projectBg: "首席乐厨食品有限公司在2015-12-14创建 。法定注册地址为中山市火炬开发区松柏路1号A幢一楼 主要经营食品生产；食品经营；生产、销售：农副产品；销售：干货；国内贸易等，公司现有优秀的员工1-20人，是一家在中山市不断发展进步的批发/零售公司。2023年委托我们为旗下一系列产品包装进行设计。",
        mainImage: { url: "image/cases/case16/main.png", alt: "", width: 3400, height: 1500 },
        images: [{ url: "cases/image/case16/1.png", alt: "", width: 1500, height: 0 }]
    };
    const case17 = {
        clientId: client1.id,
        type: { type: CaseType.PackagingDesign, name: CaseTypeName.PackagingDesign },
        id: "2", title: "（首席乐厨丝苗米包装设计）", title2: "Love Kitchen",
        title3: "首席乐厨食品有限公司\nLove Kitchen Food Co., Ltd\n首席乐厨Love Kitchen\nExecutive Project Director\nBravo\nExecutive Designer\nBai\nExecutive illustrator\nLi\n\nPublished on 08. 20. 2023",
        desc: "我们在丝苗米包装主视觉上使用了手作感的插画，搭配上中式毛笔字，让产品整体感觉充满了中国风，跟农产品搭配起来相得益彰。插图描绘了岭南稻田的景象，强调丝苗米的产地。",
        projectBg: "以及极简的包装视觉来体现天然及高品质感,看起来克制，真实,自然,没有浮夸的修饰。放大沉香图片,突出出产品原料,满足消费者对于“天然、健康、高效”护肤品的追求。包装纸盒材质选择可以完全降解的环保纤维，内包装软管开口盖子使用原木材质,为化妆品增添一份自然质朴的气息,让人感觉更加亲近大自然呼应产品理念“自然之美”",
        mainImage: { url: "image/cases/case17/main.png", alt: "", width: 3400, height: 1500 },
        images: [{ url: "cases/image/case17/1.png", alt: "", width: 1500, height: 0 }]
    };
    casesForClient1.push(case15);
    casesForClient1.push(case16);
    casesForClient1.push(case17);

    const casesForClient2 = new Array<Case>();
    const case18 = {
        clientId: client2.id,
        type: { type: CaseType.BrandDesign, name: CaseTypeName.BrandDesign },
        id: "2", title: "喜心点心品牌形象设计", title2: "HEASUM DIMSUM",
        title3: "Client\n喜心点心(广州)科技股份有限公司\nHeasum Dim sum (Guangzhou) Technology Co., Ltd\nBrand\n 喜心点心 Heasum Dim sum\nExecutive Project Director\nBravo\nExecutive Designer\nBai\nExecutive illustrator\nLi\n\nPublished on 08. 20. 2023",
        desc: "品牌标志用创始人书法题字为原型进行优化处理，选取黄色搭配棕色为品牌色，高贵端庄。用广州城市建筑以及广州市市花木棉花的插图作为物料设计的延展，传递岭南文化。品牌插图海报描绘了早茶文化中其乐融融、四代同堂、人文温暖的一幕。",
        projectBg: "喜心(广东)生态食品有限公司是一家集研发、生产、销售于一体的专业从事健康、营养广式点心的现代化企业，公司成立于2008年，注册资本612万元，总投资额5000万元;公司坐落于广东省番禺区，占地面积13500平方米，拥有现代化的生产车间，并引进全新先进的生产设备，日产能可达150万个广式包点。2022年委托我们进行品牌形象的升级和系列包装的设计，希望能开发一个代表品牌的IP形象并精准传达出老广东的早茶文化。",
        mainImage: { url: "image/cases/case18/main.png", alt: "", width: 3400, height: 1500 },
        images: [
            { url: "cases/image/case18/1.png", alt: "", width: 1500, height: 0 },
            { url: "cases/image/case18/2.png", alt: "", width: 1500, height: 0 },
        ]
    };
    casesForClient2.push(case18);

    const casesForFlat = new Array<Case>();
    casesForFlat.push(case15);
    casesForFlat.push(case16);
    casesForFlat.push(case17);
    casesForFlat.push(case18);

    const mapForPackingDesignForIndustryFoodForFlat = new Map<CaseType,Client[]>();
    mapForPackingDesignForIndustryFoodForFlat.set(CaseType.PackagingDesign,clientIndustryTypeFoodsWithPackingDesignForFlat)
    const industryFoodForFlat = { title: IndustryTypeName.Food, type: IndustryType.Food, map: mapForPackingDesignForIndustryFoodForFlat};
    const industryBrandForFlat = { title: IndustryTypeName.Brand, type: IndustryType.Brand, clients: clientIndustryTypeBrandForFlat };
    //const industryFoodForSpeacDesign = { title: IndustryTypeName.Food, type: IndustryType.Food, clients: clientIndustryTypeFoods };

    //const industryDaily = { title: IndustryTypeName.DailyUse, type: IndustryType.DailyUse, clients: [] };
    //const industryBrand = { title: IndustryTypeName.Brand, type: IndustryType.Brand, clients: clientIndustryTypeBrand };

    const industrysForFlat = Array<Industry>();
    industrysForFlat.push(industryFoodForFlat);
    //industrysForFlat.push(industryBrandForFlat);

    /*const industrysForSpeacDesign = Array<Industry>();
    industrysForSpeacDesign.push(industryFood);
    industrysForSpeacDesign.push(industryDaily);
    industrysForSpeacDesign.push(industryBrand);

    const industrysForIndustryDesign = Array<Industry>();
    industrysForIndustryDesign.push(industryFood);
    industrysForIndustryDesign.push(industryDaily);
    industrysForIndustryDesign.push(industryBrand);*/

    const allTypes = [
        { type: CaseType.HomeDesign, name: CaseTypeName.HomeDesign },
        { type: CaseType.Business, name: CaseTypeName.Business },
        { type: CaseType.PackagingDesign, name: CaseTypeName.PackagingDesign },
        { type: CaseType.AlbumDesign, name: CaseTypeName.AlbumDesign },
        { type: CaseType.BrandDesign, name: CaseTypeName.BrandDesign },
        { type: CaseType.FactoryDesign, name: CaseTypeName.FactoryDesign },
        { type: CaseType.IndustrialDesign, name: CaseTypeName.IndustrialDesign },
        { type: CaseType.PPTDesign, name: CaseTypeName.PPTDesign },
        { type: CaseType.WebDesign, name: CaseTypeName.WebDesign },
    ];
    const caseTabSubFlat = {
        datas: allTypes,
        industrys: industrysForFlat,
    };
    const caseTabSubSpeacDesign = {
        datas: allTypes,
        industrys: [],
    };
    const caseTabSubIndustryDesign = {
        datas: allTypes,
        industrys: [],
    };

    caseTabs.push({ title: CaseHeaderTypeName.Flat, type: CaseHeaderType.Flat, sub: caseTabSubFlat });
    caseTabs.push({ title: CaseHeaderTypeName.Space, type: CaseHeaderType.Space, sub: caseTabSubSpeacDesign });
    caseTabs.push({ title: CaseHeaderTypeName.Industry, type: CaseHeaderType.Industry, sub: caseTabSubIndustryDesign });

    //const map = new Map<CaseType, Case[]>();
    //string为一层层生的,如:0,1,4
    const mapCases = new Map<string, Case[]>();
    const map = new Map<CaseHeaderType, CaseTabSub>();
    map.set(CaseHeaderType.Flat, caseTabSubFlat);
    map.set(CaseHeaderType.Space, caseTabSubSpeacDesign);
    map.set(CaseHeaderType.Industry, caseTabSubIndustryDesign);
    /**
     *  CaseTabSub:
  data: CaseTypeData,
  industry: Industry,//行业

  CaseTypeData {
  type: CaseType,
  name: string,
}
     */
    //key为:大类,行业,子类型,客户id; ""为返回全部 
    mapCases.set(CaseHeaderType.Flat + ",,,", casesForFlat)
    mapCases.set(CaseHeaderType.Flat + "," + IndustryType.Food + "," + CaseType.PackagingDesign + "," + client1.id, casesForClient1);
    //map.set(CaseType.BrandDesign, cases);
    //map.set(CaseType.AlbumDesign, cases2);
    //tabsMap: Map<CaseHeaderType, CaseTabSub[]>

    return (
        <div className='bg-[#f2f2f2]'>
            <div className=' h-[10px]' />
            <Container>
                <div>
                    <p className='absolute text-[40px]'>Work</p>
                    <div className=' h-[20px]' />
                    <TabListComponent tabs={caseTabs} tabsMap={map} caseMap={mapCases} />
                </div>
            </Container>
        </div>
    );
}

export default CaseIndexPage;