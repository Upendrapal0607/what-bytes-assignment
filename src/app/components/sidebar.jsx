"use client";
import { useState } from "react";
import Link from "next/link";
import { SiSimpleanalytics } from "react-icons/si";
import { CiFileOn } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
const Sidebar = () => {
  const [active, setActive] = useState("Skill Test");

  const menuItems = [
    { name: "Dashboard", href: "/", icon: <SiSimpleanalytics /> },
    { name: "Skill Test", href: "/skill-test", icon: <FiAward /> },
    { name: "Internship", href: "/internship", icon: <CiFileOn /> },
  ];

  return (
    <div className="w-48 text-black flex flex-col">
      <div className="flex-grow">
        {menuItems.map((item) => (
          <a key={item.name} href={"#"}>
            <div
              className={`flex items-center  px-3 py-3 gap-3 mr-2 my-4 rounded-e-full cursor-pointer transition-all ${
                active === item.name
                  ? "text-blue-500 bg-blue-900 bg-opacity-50"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
