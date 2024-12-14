export interface Memorial {
  id: number;
  fullName: string;
  nickName?: string;
  titles: string[];
  born: string;
  died: string;
  burial: string;
  imgUrl?: string;
  photoSection?: PhotoSection[];
}

export interface PhotoSection {
  heading: string;
  photos?: Photo[];
}

export interface Photo {
  title: string;
  direction: "horizontal" | "vertical";
  url: string;
  date: string;
}
