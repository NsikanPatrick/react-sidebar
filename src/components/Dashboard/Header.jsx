import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState("hidden");

    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        if (!mobileMenu) {
          sidebar.classList.remove("hidden");
        } else {
          sidebar.classList.add("hidden");
        }
      }, [mobileMenu]);

    // const handleMobileMenu = () => {
    //     const sidebar = document.querySelector(".sidebar");
    //     sidebar.classList.toggle("hidden");
    // }

    return (
        <div className="header text-dark-purple flex gap-10">
          <FaBars
            className="cursor-pointer mt-1 lg:hidden"
            size={30}
            onClick={() => setMobileMenu(!mobileMenu)}
            
            // onClick={handleMobileMenu}
          />
          <h1>Home Page</h1>
        </div>
    );
}

export default Header;