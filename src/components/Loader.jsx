import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-t-4 border-b-4 border-white animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">D</span>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-white text-lg font-light animate-pulse">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
