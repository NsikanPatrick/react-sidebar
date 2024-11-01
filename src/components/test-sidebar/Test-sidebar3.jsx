import { useState, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import {
  FaUserAlt,
  FaRegCalendarCheck,
  FaChevronLeft,
  FaChevronDown,
  FaSun,
  FaRegMoon,
} from "react-icons/fa";
import {
  IoSearchOutline,
  IoStatsChartSharp,
  IoFolderOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import PropTypes from "prop-types";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [darkMode, setdarkMode] = useState("light");

  useEffect(() => {
    // let mode = !darkMode ? "dark" : "light";
    if(!darkMode){
        document.documentElement.classList.remove("dark");
    }else{
        document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  const Menus = [
    { title: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { title: "Inbox", link: "/", icon: FaRegMessage },
    {
      title: "Accounts",
      link: "/",
      icon: FaUserAlt,
      gap: true,
      submenu: [
        { title: "Profile", link: "/" },
        { title: "Settings", link: "/" },
      ],
    },
    { title: "Schedule", link: "/", icon: FaRegCalendarCheck },
    { title: "Search", link: "/", icon: IoSearchOutline },
    { title: "Analytics", link: "/", icon: IoStatsChartSharp },
    { title: "Files", link: "/", icon: IoFolderOutline, gap: true },
    { title: "Settings", link: "/", icon: IoSettingsOutline },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  //   const toggleTheme = () => {
  //     document.documentElement.classList.toggle("dark");
  //   }

  return (
    <section className="flex">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } duration-500 h-screen p-5 pt-8 bg-dark-purple dark:bg-neutral-100 relative`}
      >
        <FaChevronLeft
          className={`${
            !open && "rotate-180"
          } absolute cursor-pointer -right-3 top-9 w-7 border-2 text-white bg-light-white dark:text-dark-purple rounded-full logo`}
          size={30}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src={reactLogo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white dark:text-dark-purple origin-left font-medium text-xl ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <div key={index} className="">
              <li
                onClick={() => menu.submenu && toggleSubmenu(index)}
                className={`${menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } text-gray-300 dark:text-dark-purple text-sm flex items-center group gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-lg`}
              >
                <div>{menu?.icon({ size: "20" })}</div>
                <span
                  style={{ transitionDelay: `${index + 3}00ms` }}
                  className={`${
                    !open && "hidden opacity-0 translate-x-28"
                  } origin-left duration-500 flex`}
                >
                  {menu.title}
                  {menu.submenu && (
                    <FaChevronDown
                      className={`ml-2 mt-1 transition-transform ${
                        activeSubmenu === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </span>
              </li>
              {menu.submenu && activeSubmenu === index && (
                <SubMenu items={menu.submenu} />
              )}
            </div>
          ))}
          <button
            onClick={() => {
              setdarkMode(!darkMode);
            }}
            className={`${open} ? "ml-10" : "ml-1" text-white dark:text-dark-purple mt-10 px-3 py-2 bg-light-white dark:bg-neutral-300 rounded-lg`}
          >
            
            {!darkMode ? <FaSun /> : <FaRegMoon />}
          </button>
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </section>
  );
}

const SubMenu = ({ items }) => {
  return (
    <ul className="pl-5">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-gray-300 text-sm flex items-center ml-5 gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-lg"
        >
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

// Add prop types validation
SubMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
