export interface Image {
  id: string;
  url: string;
}

export interface MainTab {
  id: number;
  name: string;
};

export interface CaseTab {
  title: string,
  type: CaseTab,
}

export interface CaseTypeData {
  type: CaseType,
  name: string,
}

export enum CaseType {
  BrandDesign = 0,
  AlbumDesign = 1,//画册设计
  PackagingDesign = 2,
  IndustrialDesign = 3,
  PPTDesign = 4,
  WebDesign = 5,
}

export enum CaseTypeName {
  BrandDesign = "品牌设计",
  AlbumDesign = "画册设计",
  PackagingDesign = "包装设计",
  IndustrialDesign = "工业设计",
  PPTDesign = "PPT设计",
  WebDesign = "网页设计",
}

export interface Worker {
  id: number,
  name: string,
  desc: string,
  mainImage: ImageData,
}

export interface Case {
  type: CaseTypeData,
  id: string,
  title: string,
  desc: string,
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