import { IMemorial } from "@/app/_types/memorial";
import Image from "next/image";
import Link from "next/link";
import Star from "../../assets/icons/star.svg";
import Cross from "../../assets/icons/cross.svg";

async function Memorials({ memorials }: { memorials: IMemorial[] }) {
  return (
    <section className="bg-basic-bg bg-cover bg-repeat-y min-h-screen">
      <div className="grid m-auto max-w-screen-lg py-20">
        <h1 className="font-primary text-2xl md:text-4xl text-center">
          Vores elskede & savnede
        </h1>

        <div className="flex justify-center mt-10">
          <ul className="flex gap-8 flex-wrap justify-center">
            {memorials.map((m) => (
              <li key={m.id}>
                <Link href={`memorials/${m.id}`}>
                  <article className="p-5 bg-white shadow-md group transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative group">
                      <Image
                        src={`/images/${m.imgUrl}`}
                        width={240}
                        height={243}
                        alt={m.fullName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                        quality={100}
                        priority={true}
                      />
                      <div
                        style={{ backgroundColor: m.theme.base }}
                        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      ></div>
                    </div>

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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Memorials;
