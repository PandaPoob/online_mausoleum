"use client";
import { useState } from "react";
import Link from "next/link";

function RequestAccordion() {
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
            Jeg har logget ind med Gmail men skal søge om adgang?
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
            For at tilgå hjemmesiden skal du anmode om speciel adgang gennem en
            formular. Du kan ansøge om adgang{" "}
            <Link href={`/request`} className="underline">
              her
            </Link>
            .
          </div>
        </div>
      </div>
      <div className="border-b border-lightGrey">
        <button
          className="w-full flex justify-between items-center py-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          onClick={() => toggleAccordion(1)}
        >
          <span className="text-lg font-medium">
            Hvordan kan jeg tilføje billeder af vores familiemedlemmer?
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
            Hjemmesiden henter billeder fra Google Drive. Hvis du ønsker at
            tilføje billeder til Google Drive mappen skal du kontakte Freja
            personligt.
          </div>
        </div>
      </div>
      <div className="border-b border-lightGrey">
        <button
          className="w-full flex justify-between items-center py-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
          onClick={() => toggleAccordion(2)}
        >
          <span className="text-lg font-medium">
            Kan jeg tilføje et andet familiemedlem til hjemmesiden?
          </span>
          <svg
            className={`w-6 h-6 transform ${
              activeIndex === 2 ? "rotate-180" : ""
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
            activeIndex === 2 ? "max-h-40" : "max-h-0"
          }`}
        >
          <div className="pb-4 px-2">
            Familiemedlemmerne på hjemmesiden er ikke hentet dynamisk og du skal
            derfor kontakte Freja personligt, hvis du ønsker at tilføje et andet
            familiemedlem til hjemmesiden.
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestAccordion;
