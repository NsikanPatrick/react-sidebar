// import React from "react";
import { useState } from "react";
import reactLogo from "../../assets/react.svg";
// import viteLogo from "/vite.svg";
// import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaUserAlt, FaRegCalendarCheck, FaChevronLeft } from "react-icons/fa";
import {
  IoSearchOutline,
  IoStatsChartSharp,
  IoFolderOutline,
  IoSettingsOutline,
} from "react-icons/io5";

// import "./App.css";
{
  /* <img src={viteLogo} className="logo" alt="Vite logo" /> */
}

function Sidebar() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { title: "Inbox", link: "/", icon: FaRegMessage },
    { title: "Accounts", link: "/", icon: FaUserAlt, gap: true },
    { title: "Schedule", link: "/", icon: FaRegCalendarCheck },
    { title: "Search", link: "/", icon: IoSearchOutline },
    { title: "Analytics", link: "/", icon: IoStatsChartSharp },
    { title: "Files", link: "/", icon: IoFolderOutline, gap: true },
    { title: "Settings", link: "/", icon: IoSettingsOutline },
  ];

  return (
    <section className="flex">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } duration-500 h-screen p-5 pt-8 bg-dark-purple relative`}
      >
        {/* <img
          src={viteLogo}
          className={`${
            open && "rotate-90"
          } absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full logo`}
          alt="Vite logo"
          onClick={() => setOpen(!open)}
        /> */}

        <FaChevronLeft
          className={`${
            !open && "rotate-180"
          } absolute cursor-pointer -right-3 top-9 w-7 border-2 text-white bg-light-white rounded-full logo`}
          alt="Vite logo"
          size={30}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items center">
          <img
            src={reactLogo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`${menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } text-gray-300 text-sm flex items-center group gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-lg`}
            >
              {/* <Link to={menu.link}>
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              </Link> */}
              <div>{menu?.icon({ size: "20" })}</div>
              <span
                style={{ transitionDelay: `${index + 3}00ms` }}
                className={`${
                  !open && "hidden opacity-0 translate-x-28"
                } origin-left duration-500`}
              >
                {menu.title}
              </span>

              <span
                className={`${
                  open && "hidden"
                } tooltip absolute left-48 bg-white text-dark-purple font-semibold
                rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:w-fit group-hover:duration-500`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </section>
  );
}

export default Sidebar;
