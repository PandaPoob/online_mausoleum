import { Memorial } from "@/app/_types/memorial";
import { authenticateUser } from "@/app/utils/authSettings";
import Image from "next/image";
import Star from "../../assets/icons/star.svg";
import Cross from "../../assets/icons/cross.svg";

async function getData() {
  await authenticateUser();

  const memorials: Memorial[] = [
    {
      id: 6,
      fullName: "Dorte Marte",
      titles: ["søster", "faster", "moster"],
      born: "18-07-1958",
      died: "20-12-2024",
      burial: "29-11-2024",
      imgUrl: "6_dorte.png",
    },
    {
      id: 5,
      fullName: "Liv Ok Hee Smith-Pedersen",
      titles: ["søster", "datter", "kusine", "niece"],
      born: "08-04-1993",
      died: "31-12-2021",
      burial: "14-01-2022",
      imgUrl: "5_liv.png",
    },
    {
      id: 4,
      fullName: "Evald Nielsen",
      titles: ["far", "morfar"],
      born: "22-05-1923",
      died: "21-01-2016",
      burial: "10-02-2016",
      imgUrl: "4_evald.png",
    },
    {
      id: 3,
      fullName: "Inger Smith-Pedersen",
      nickName: "Trille",
      titles: ["mor", "farmor"],
      born: "18-09-1927",
      died: "27-02-2010",
      burial: "03-03-2010",
    },
    {
      id: 2,
      fullName: "Mette Smith-Pedersen",
      titles: ["søster", "faster", "moster"],
      born: "03-07-1953",
      died: "18-09-2005",
      burial: "27-09-2005",
    },
    {
      id: 1,
      fullName: "Morten Holmberg",
      titles: ["søn", "bror", "fætter"],
      born: "11-10-1978",
      died: "21-04-2005",
      burial: "06-05-2005",
    },
  ];

  return memorials;
}

async function Memorials() {
  const data = await getData();

  return (
    <section className="grid m-auto max-w-screen-lg">
      <h1 className="font-primary text-2xl md:text-4xl text-center">
        Vores elskede & savnede
      </h1>

      <div className="flex justify-center mt-10">
        <ul className="flex gap-8 flex-wrap justify-center">
          {data.map((m) => (
            <li key={m.id}>
              <article className="p-5 bg-white shadow-md">
                {m.imgUrl ? (
                  <Image
                    src={`/images/${m.imgUrl}`}
                    width={240}
                    height={243}
                    alt={m.fullName}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                    quality={100}
                    priority={true}
                  />
                ) : (
                  <div className="bg-black w-[15rem] h-[15.188rem]"></div>
                )}

                <h2 className="text-lg font-bold mt-3">
                  {m.nickName ? m.nickName : m.fullName}
                </h2>
                <div className="flex gap-7 mt-1 text-sm">
                  <div className="flex items-center gap-1">
                    <Star /> <p>{m.born}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Cross /> <p>{m.died}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Memorials;
