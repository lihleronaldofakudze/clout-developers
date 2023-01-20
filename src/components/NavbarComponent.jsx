import React from "react";
import { menus } from "../constants";

const NavbarComponent = () => {
  return (
    <header className="flex items-center justify-between py-5 px-10">
      <nav>
        <p className="cursor-pointer text-5xl italic">
          {"Clout".toLocaleUpperCase()}
        </p>
        <p className="cursor-pointer text-sm">
          {"Developers".toLocaleUpperCase()}
        </p>
      </nav>
      <ul className="flex items-center justify-around">
        {menus.map((menu, index) => (
          <li key={index} className="pl-5 cursor-pointer">
            {menu.toLocaleUpperCase()}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavbarComponent;
