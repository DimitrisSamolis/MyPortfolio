import React from "react";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const SwitchMode = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      title="Theme toggle"
      className={`fixed top-20 right-5 px-4 py-2 hover:bg-orange ${
        isDarkMode ? "bg-indigo-400" : "bg-indigo-800"
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
