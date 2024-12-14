import { Memorial } from "@/app/_types/memorial";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  //const session = authenticateUser();
  /*   const session = await getServerSession(authOptions);

  console.log("SESSION:", session);

  if (!session) {
    return NextResponse.json({ error: "No session found" }, { status: 401 });
  }

  const userEmail = session.user?.email;

  if (!allowedEmails.includes(userEmail)) {
    return NextResponse.json(
      {
        error:
          "You are authenticated but do not have permission to access this resource.",
      },
      { status: 403 } // Forbidden
    );
  }
 */
  /* 
      const secret = process.env.NEXTAUTH_SECRET;
      let token;
      token = await getToken({ req: req, secret: secret, raw: true });

      if (process.env.NODE_ENV == "development") {
        token = await getToken({ req: req, secret: secret, raw: true });
      } else {
        const decoded = await getToken({ req: req, secret: secret });
        token = decoded?.sub;
      }

      //Validate token
      if (!token) {
        return {
          data: {
            msg: "Unauthorized - Invalid token",
          },
          status: 401,
        };
      }
 */

  const memorials: Memorial[] = [
    {
      id: 1,
      fullName: "Liv Ok Hee Smith-Pedersen",
      titles: ["søster", "datter", "kusine", "niece"],
      born: "08-04-1993",
      died: "31-12-2021",
      burial: "14-01-2022",
    },
    {
      id: 2,
      fullName: "Dorte Marte",
      titles: ["søster", "faster", "moster"],
      born: "18-07-1958",
      died: "20-12-2024",
      burial: "29-11-2024",
    },
    {
      id: 3,
      fullName: "Evald Nielsen",
      titles: ["far", "morfar"],
      born: "22-05-1923",
      died: "21-01-2016",
      burial: "10-02-2016",
    },
    {
      id: 4,
      fullName: "Mette Smith-Pedersen",
      titles: ["søster", "faster", "moster"],
      born: "03-07-1953",
      died: "18-09-2005",
      burial: "27-09-2005",
    },
    {
      id: 5,
      fullName: "Morten Holmberg",
      titles: ["søn", "bror", "fætter"],
      born: "11-10-1978",
      died: "21-04-2005",
      burial: "06-05-2005",
    },
    {
      id: 6,
      fullName: "Inger Smith-Pedersen",
      nickName: "Trille",
      titles: ["mor", "farmor"],
      born: "18-09-1927",
      died: "27-02-2010",
      burial: "03-03-2010",
    },
  ];
  return NextResponse.json(
    {
      msg: "Ok",
      memorials: memorials,
    },
    { status: 200 }
  );
}
