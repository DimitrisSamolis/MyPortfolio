import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="wrap">
        <div className="loading flex flex-col items-center">
        <div className="animate-spin rounded-full h-24 w-24 border-y-4 border-orange-500"></div>
          <div className="text-orange-500 mt-2 p-2 rounded-xl bg-gradient-to-b from-black to-slate-800 font-thin">LOADING...</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
