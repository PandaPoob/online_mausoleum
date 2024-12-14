export interface IMemorial {
  id: number;
  fullName: string;
  nickName?: string;
  titles: string[];
  born: string;
  died: string;
  burial: string;
  imgUrl?: string;
  theme: ITheme;
  photoSection?: IPhotoSection[];
}

export interface ITheme {
  base: string;
  accent: string;
}
export interface IPhotoSection {
  heading: string;
  photos?: IPhoto[];
}

export interface IPhoto {
  title: string;
  direction: "horizontal" | "vertical";
  url: string;
  date: string;
}
