import Questions from "@/app/_views/Questions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spørgsmål & Svar",
};

function QuestionsPage() {
  return <Questions />;
}

export default QuestionsPage;
