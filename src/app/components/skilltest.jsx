"use client";
import { IoLogoHtml5 } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";
import { PiNotepadDuotone } from "react-icons/pi";
import { IoMdCheckbox } from "react-icons/io";
import PercentileGraph from "./percentile";
import FormModal from "./FormModal";
import { useState } from "react";

const SkillTest = ({
  setStudentDetails,
  studentDetails,
  previousPercentile,
  setPreviousPercentile,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const HandleUpdate = () => {

  // };
  return (
    <div className="max-w-xl mx-auto  rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 borde border-gray-400 border-x-1 border-y-0 border-b shadow-lg p-4">
        <div>
          <p className="font-bold">HTML</p>
          <IoLogoHtml5 className="w-12 h-12 mr-4 text-red-500" />
        </div>
        <div>
          <h1 className="text-lg font-bold">Hyper Text Markup Language</h1>
          <p className="text-gray-600">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
        <button
          onClick={openModal}
          className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-75 transition duration-150 ease-in-out"
        >
          Update
        </button>
        <FormModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          setStudentDetails={setStudentDetails}
          studentDetails={studentDetails}
        />
      </div>

      <div className="flex justify-between flex-col font-bold text-lg mb-4 p-4">
        <p>Quick Statistics</p>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="text-start flex items-center gap-3">
            <CiTrophy className="rounded-full bg-gray-50 w-12 h-12 p-2 text-orange-200 font-semibold shadow-md" />
            <div>
              <span className="block text-lg font-bold mb-[-10px]">
                {studentDetails?.rank}
              </span>
              <small className="text-gray-500">Your Rank</small>
            </div>
          </div>

          <div className="text-start flex items-center gap-3">
            <PiNotepadDuotone className="rounded-full bg-gray-100 w-12 h-12 p-2 text-gray-500 font-semibold shadow-md" />

            <div>
              <span className="block text-lg font-bold mb-[-10px]">
                {studentDetails?.percentile}%
              </span>
              <small className="text-gray-500">Percentile</small>
            </div>
          </div>

          <div className="text-start flex items-center gap-3">
            <IoMdCheckbox className="rounded-full bg-gray-100 w-12 h-12 p-2 text-green-500 font-bold shadow-md" />

            <div className="">
              <span className="block text-lg mb-[-10px] font-bold">
                {studentDetails?.correct} / 15
              </span>
              <small className="text-gray-500">Correct Answers</small>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 shadow-sm">
        <div>
          <p className="block text-lg mb-4 font-bold">Conpresion Graph</p>
        </div>
        <p className="text-gray-700">
          <strong>You scored {studentDetails?.percentile}% percentile</strong>{" "}
          which is lower than the average percentile 72% of all the engineers
          who took this assessment.
        </p>
        <PercentileGraph
          percentile={studentDetails?.percentile}
          previousPercentile={previousPercentile}
          setPreviousPercentile={setPreviousPercentile}
        />
      </div>
    </div>
  );
};

export default SkillTest;
