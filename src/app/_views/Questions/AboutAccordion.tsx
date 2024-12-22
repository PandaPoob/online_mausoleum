"use client";
import { useState } from "react";

function AboutAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      <div className="border-y border-lightGrey">
        <button
          className="w-full flex justify-between items-center py-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          onClick={() => toggleAccordion(0)}
        >
          <span className="text-lg font-medium">
            Hvad er formålet med hjemmesiden?
          </span>
          <svg
            className={`w-6 h-6 transform ${
              activeIndex === 0 ? "rotate-180" : ""
            } transition-transform duration-300`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-max-height duration-300 ${
            activeIndex === 0 ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="pb-4 px-2">
            På denne hjemmeside kan du se billeder af familiemedlemmer med
            relation til Smith-Pedersen. Du kan mindes dem vi har mistet og
            gennemse de mange øjeblikke fanget på billede.
          </div>
        </div>
      </div>
      <div className="border-b border-lightGrey">
        <button
          className="w-full flex justify-between items-center py-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-lg font-medium">
            Hvem står for hjemmesiden?
          </span>
          <svg
            className={`w-6 h-6 transform ${
              activeIndex === 1 ? "rotate-180" : ""
            } transition-transform duration-300`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-max-height duration-300 ${
            activeIndex === 1 ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="pb-4 px-2">
            Hjemmesiden er oprettet og bliver vedligeholdt af Freja.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAccordion;
