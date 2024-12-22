import { notFound, redirect } from "next/navigation";
import { Session } from "next-auth";
import { authenticateUser } from "@/app/utils/authSettings";
import { IMemorial } from "@/app/_types/memorial";
import Memorial from "@/app/_views/Memorials/Memorial";
import familyData from "../../../assets/data/family.json";

async function getData(slug: string) {
  const memorials: IMemorial[] = familyData;
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
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await authenticateUser();
  const slug = (await params).slug;

  const data = await getData(slug);
  if (!data) {
    redirect("/");
  }
  const googleDriveData = await getGoogleDriveData(session, data.folderId);

  return googleDriveData && <Memorial />;
}
