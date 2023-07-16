import React from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const SwitchMode = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-20 right-5 px-4 py-2 hover:bg-orange ${
        isDarkMode ? "bg-sky-800" : "bg-sky-500"
      }  rounded-xl cursor-pointer z-40`}
    >
      {isDarkMode ? (
        <div className="text-black">
          <BsSunFill />
        </div>
      ) : (
        <div className="text-white">
          <BsFillMoonStarsFill />
        </div>
      )}
    </button>
  );
};

export default SwitchMode;
