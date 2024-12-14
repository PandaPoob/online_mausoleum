import { notFound } from "next/navigation";
import { authenticateUser } from "@/app/utils/authSettings";
import { IMemorial } from "@/app/_types/memorial";
import Memorial from "@/app/_views/Memorials/Memorial";

async function getData(params: { slug: string }) {
  await authenticateUser();
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
    },
  ];
  const { slug } = await params;

  const memorial = memorials.find((m) => m.id === Number(slug));

  if (!memorial) {
    notFound();
  }
  return memorial;
}

async function MemorialPage({ params }: { params: { slug: string } }) {
  const data = await getData(params);
  return data && <Memorial />;
}

export default MemorialPage;
