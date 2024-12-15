//import { notFound } from "next/navigation";
//import { Session } from "next-auth";
//import { authenticateUser } from "@/app/utils/authSettings";
//import { IMemorial } from "@/app/_types/memorial";
//import Memorial from "@/app/_views/Memorials/Memorial";

/* async function getData(slug: string) {
  const memorials: IMemorial[] = [
    {
      id: 6,
      fullName: "Dorte Marte",
      titles: ["søster", "faster", "moster"],
      born: "18-07-1958",
      died: "20-12-2024",
      burial: "29-11-2024",
      imgUrl: "6_dorte.png",
      theme: {
        base: "#FFD9A1",
        accent: "#FFB678",
      },
      folderId: "1n139fxc_Gn-jEUAXve3yeCecZyVhvc2m",
    },
    {
      id: 5,
      fullName: "Liv Ok Hee Smith-Pedersen",
      titles: ["søster", "datter", "kusine", "niece"],
      born: "08-04-1993",
      died: "31-12-2021",
      burial: "14-01-2022",
      imgUrl: "5_liv.png",
      theme: {
        base: "#FFEBEF",
        accent: "#FECEDA",
      },
      folderId: "1Rzozt8KMVToEckGsSGOx0Tq0dFF_TUSn",
    },
    {
      id: 4,
      fullName: "Evald Nielsen",
      titles: ["far", "morfar"],
      born: "22-05-1923",
      died: "21-01-2016",
      burial: "10-02-2016",
      imgUrl: "4_evald.png",
      theme: {
        base: "#C7F5CD",
        accent: "#B5F2B5",
      },
      folderId: "1NmCzDq1Wk_nkMMq-uvClxC0oP6GfUxaQ",
    },
    {
      id: 3,
      fullName: "Inger Smith-Pedersen",
      nickName: "Trille",
      titles: ["mor", "farmor"],
      born: "18-09-1927",
      died: "27-02-2010",
      burial: "03-03-2010",
      theme: {
        base: "#FEFEB8",
        accent: "#FCF0A0",
      },
      folderId: "11D0Y6FFIKvqH7tMbzWMFvbn6L9_IacuX",
    },
    {
      id: 2,
      fullName: "Mette Smith-Pedersen",
      titles: ["søster", "faster", "moster"],
      born: "03-07-1953",
      died: "18-09-2005",
      burial: "27-09-2005",
      theme: {
        base: "#FED9D3",
        accent: "#FABBB6",
      },
      folderId: "1k2QN5FBkz7ACidnQ_Id4cazG1Wv8PtYH",
    },
    {
      id: 1,
      fullName: "Morten Holmberg",
      titles: ["søn", "bror", "fætter"],
      born: "11-10-1978",
      died: "21-04-2005",
      burial: "06-05-2005",
      theme: {
        base: "#DBFBFF",
        accent: "#BDECF2",
      },
      folderId: "1_aoztvcUpGWLgd-5Yj3laVQ6JOABKfRJ",
    },
  ];

  const memorial = memorials.find((m) => m.id === Number(slug));

  if (!memorial) {
    notFound();
  }
  return memorial;
}

async function getGoogleDriveData(session: Session, folderId: string) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.token.accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching files from Google Drive");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
} */

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log(params);
  /*   const session = await authenticateUser();
  const slug = (await params).slug;

  const data = await getData(slug);
  if (!data) {
    console.log("no data", data);
    //redirect("/");
  } */
  //const googleDriveData = await getGoogleDriveData(session, data.folderId);

  return <div>hello</div>;
  //<Memorial />;
  //return googleDriveData && <Memorial />;
}
