export interface Image {
  id: string;
  url: string;
}

export interface MainTab {
  id: number;
  name: string;
};

//案例主页的Tab数据
export interface CaseTab {
  //title: CaseHeaderTypeName,
  id: number,
  title: string,
  type: CaseHeaderType,
  //sub: CaseTabSub,
}

export interface CaseTabSub {
  //type: CaseHeaderType,
  //clients:Client[],
  datas: CaseTypeData[],
  industrys: Industry[],//行业
}

//行业类型
export enum IndustryType {
  Food = 0,//食品
  DailyUse = 1,//日常用品
  Brand = 2,//品牌
}

export enum IndustryTypeName {
  Food = "食品",
  DailyUse = "日常用品",
  Brand = "品牌",
}

export interface CaseFilterCallback {
  caseTabId: number,
  industryId: number,
  typeId: number,
  clientId: number,
}

/**
 * 客户数据
 */
export interface Client {
  id: number,
  name: string,
  caseTabId: number,
  industryId: number,
  typeId: number,
}

export interface Industry {
  //title: IndustryTypeName,
  id: number
  title: string,
  caseTabId: number,
  //type: IndustryType,
  //clients: Array<Client>,
  //map: Map<CaseType, Array<Client>>,
}

export interface CaseType {
  id: number,
  title: string,
  industryId: number,
  caseTabId: number,
}

export interface CaseTypeData {
  type: CaseType,
  name: string,
}

/*export enum CaseType {
  BrandDesign = 0,
  AlbumDesign = 1,//画册设计
  PackagingDesign = 2,
  IndustrialDesign = 3,
  PPTDesign = 4,
  WebDesign = 5,
  Business = 6,
  HomeDesign = 7,
  FactoryDesign = 8,
}*/

export enum CaseHeaderType {
  Flat = 0,//平面设计
  Space = 1,//空间设计
  Industry = 2,//工业设计
}

export enum CaseHeaderTypeName {
  Flat = "平面设计",
  Space = "空间设计",
  Industry = "工业设计",
}

export enum CaseTypeName {
  BrandDesign = "品牌设计",
  AlbumDesign = "画册设计",
  PackagingDesign = "包装设计",
  IndustrialDesign = "工业设计",
  PPTDesign = "PPT设计",
  WebDesign = "网页设计",
  Business = "商业",
  HomeDesign = "家装",
  FactoryDesign = "工厂设计",
}

export interface Worker {
  id: number,
  name: string,
  desc: string,
  mainImage: ImageData,
}

export interface Case {
  id: number,
  caseTabId: number,
  industryId: number,
  typeId: number,
  clientId: number,
  type: CaseTypeData,
  title: string,
  title2: string,//展示在类型名上方
  title3: string,//展示在类型名下方的其它信息 
  desc: string,//设计理念 
  projectBg: string,//项目背景
  mainImage: ImageData,
  images?: ImageData[],
}

export interface Banner {
  imageUrl: string,
  imageWidth: number,
  imageHeight: number
  title: string,
  title2: string,
  englishTitle: string
}

export enum EventType {
  News = 0,
  Event = 1,
}

export interface EventSub {
  title: string,
  image: ImageData,
  timeString?: string,
  desc?: string,
}

export interface Event {
  id: number,
  type: EventType,
  title: string,
  images: ImageData[],
  timeString?: string,
  descUnderImage?: string,
  desc?: string,
  desc2?: string,
  desc3?: string,
}

export interface ImageData {
  url: string,
  alt?: string,
  width: number,
  height: number,
}