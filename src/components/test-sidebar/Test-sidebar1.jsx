import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";


// import { TfiAlignRight } from "react-icons/tfi";
// import "./App.css";
{
  /* <img src={viteLogo} className="logo" alt="Vite logo" /> */
}

function Sidebar() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "home-icon" },
    { title: "Inbox", src: "chat-icon" },
    { title: "Accounts", src: "user-icon", gap: true },
    { title: "Schedule", src: "calendar-icon" },
    { title: "Search", src: "search-icon" },
    { title: "Analytics", src: "chart-icon" },
    { title: "Files", src: "folder-icon", gap: true },
    { title: "Setting", src: "settings-icon" },
  ];

  return (
    <section className="flex">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}
      >
        <img
          src={viteLogo}
          className={`${
            open && "rotate-90"
          } absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full logo`}
          alt="Vite logo"
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
              className={`${
                menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"} text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-lg`}
            >
              {/* <img src='./src/assets/react.svg' /> */}
              <img
                src={`./src/assets/icons/${menu.src}.png`}
                className="w-7 h-7"
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
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
