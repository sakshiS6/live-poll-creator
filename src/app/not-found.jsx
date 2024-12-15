import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen bg-violet-300 text-white flex justify-center item-center">
      <div className="text-center space-y-5">
      <p className="text-3xl font-bold mt-16">Page does not exist</p>
        <img src="/404image.avif" alt="" className="size-13rem mt-8 rounded-xl" />
        
        <button className="bg-violet-800 text-white font-bold text-center align-center px-4 py-3 rounded-xl shadow-xl">
          <a href="/">Back to Homepage</a>
        </button>
      </div>
    </div>
  );
};

export default NotFound;