"use client"
import Image from "next/image";
import Sidebar from "./components/sidebar";
import SkillTest from "./components/skilltest";
import SyllabusAnalysis from "./components/Syllabuswise";
import PieChart from "./components/pi-chart";
import { useState } from "react";

export default function Home() {

  const [total,setTotal] = useState(15);
  const [previousPercentile,setPreviousPercentile] = useState(70);
 const [studentDetails,setStudentDetails] = useState({
  correct:5,
  rank:4,
  percentile:70
 }); 
  return (
    <main >
      {/* Header */}
      <div className="flex w-full justify-between items-center border-b-2 border-gray-400 px-4 py-6">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2 h-6 bg-black"></div>
          <div className="w-2 h-6 bg-black"></div>
          <div className="w-2 h-6 bg-black"></div>
        </div>
        <h2 className="text-2xl font-bold">
          WhatBytes
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="rounded-full"
          src="https://avatars.githubusercontent.com/u/112810287?v=4"
          alt="profile"
          width={50}
          height={50}
        />
        <h2 className="text-2xl font-bold">
          Rahil Siddique
        </h2>
      </div>
    </div>

{/* Other Componanets */}
    <div className="main flex sm:flex-row flex-col gap-2 mx-auto justify-between min-w-full">
      {/* Side bar */}
      <div className="sidebar border-r border-gray-700 py-12 md:w-[15%] w-[100%]">
 <Sidebar/>
      </div>
      <div className="skill-test sm:w-[52%] w-[100%] py-12">
<p>Skill Test</p>
<SkillTest setStudentDetails = {setStudentDetails} previousPercentile = {previousPercentile} setPreviousPercentile = {setPreviousPercentile} studentDetails = {studentDetails}/>
      </div>

      <div className="syllabus w-[100%] sm:w-[33%] mt-16">
      <div className=" bg-gray-100 flex gap-[1px] items-center justify-center flex-col">
      <div className="bg-white shadow-md w-[100%] max-w-xl">
        <SyllabusAnalysis />
      </div>
      <div className="  flex flex-col items-center bg-white  shadow-md gap-8 w-[100%] py-4 px-0">
      <div className="mt-8">
        <h3 className="font-bold text-lg">Question Analysis</h3>
        <p className="text-gray-700 mt-2">
          You scored <span className="font-bold">10</span> questions correct out of <span className="font-bold">15</span>. However, it still needs some improvements.
        </p>
      </div>
      <div className="w-[60%] sm:w-[40%]">
      <PieChart correct={studentDetails?.correct} total={total} />
      </div>
      </div>
      
    </div>
      </div>
    </div>
    </main>
  );
}
