export interface Image {
  id: string;
  url: string;
}

export interface MainTab {
  id: number;
  name: string;
};

export interface Case {
  type: number,
  id: string,
  titie: string,
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

export interface Event {
  type: EventType,
  title: string,
  imageUrl: string,
}