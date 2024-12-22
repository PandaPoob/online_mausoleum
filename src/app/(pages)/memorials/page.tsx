import { authenticateUser } from "@/app/utils/authSettings";
import { IMemorial } from "@/app/_types/memorial";
import Memorials from "@/app/_views/Memorials";
import familyData from "../../assets/data/family.json";

async function getData() {
  await authenticateUser();
  const memorials: IMemorial[] = familyData;

  return memorials;
}

async function MemorialsPage() {
  const data = await getData();

  return data && <Memorials memorials={data} />;
}

export default MemorialsPage;
