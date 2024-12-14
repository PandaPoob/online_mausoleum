import { Memorial } from "@/app/_types/memorial";
import { authenticateUser } from "@/app/utils/authSettings";

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
      imgUrl: "/6_dorte.png",
    },
    {
      id: 5,
      fullName: "Liv Ok Hee Smith-Pedersen",
      titles: ["søster", "datter", "kusine", "niece"],
      born: "08-04-1993",
      died: "31-12-2021",
      burial: "14-01-2022",
      imgUrl: "/5_liv.png",
    },
    {
      id: 4,
      fullName: "Evald Nielsen",
      titles: ["far", "morfar"],
      born: "22-05-1923",
      died: "21-01-2016",
      burial: "10-02-2016",
      imgUrl: "/4_evald.png",
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
  //console.log(data);
  return (
    <section>
      <h1 className="font-primary text-lg md:text-4xl text-center">
        Vores elskede & savnede
      </h1>

      <div className="flex justify-center mt-10">
        <ul className="flex">
          {data.map((m) => (
            <li key={m.id}>
              <article>
                <h2 className="text-xl font-bold">
                  {m.nickName ? m.nickName : m.fullName}
                </h2>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Memorials;
