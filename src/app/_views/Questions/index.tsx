import Link from "next/link";
import AboutAccordion from "./AboutAccordion";
import RequestAccordion from "./RequestAccordion";

function Questions() {
  return (
    <section className="bg-basic-bg bg-cover bg-repeat-y min-h-screen">
      <div className="grid m-auto max-w-screen-lg py-20">
        <h1 className="font-primary text-2xl md:text-4xl text-center mb-10">
          Spørgsmål & Svar
        </h1>

        {/*         <h2>how to sign up? send email</h2>
        <h2>how to upload images? request access</h2>
        <h2>can i add another family member? yes</h2> */}
        <div className="bg-white p-10">
          <h2 className="font-primary font-bold text-md mb-6">Hjemmesiden</h2>
          <AboutAccordion />

          <h2 className="font-primary font-bold text-md mt-10 mb-6">
            Adgang og tilladelser
          </h2>
          <RequestAccordion />
        </div>
      </div>
    </section>
  );
}

export default Questions;
