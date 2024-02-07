// Loader.js

import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-green-900"></div>
    </div>
  );
};

export default Loader;
