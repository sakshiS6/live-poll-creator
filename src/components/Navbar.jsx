import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <div className="bg-violet-300 p-4">
      <>
        {/* ========== HEADER ========== */}
        <header className="bg-white w-[70rem] text-violet-800 rounded-full  mx-auto">
          <nav className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
            
            <Link className="flex gap-x-2 text-2xl font-bold " href="/">
              <img src="/icon.png" width={55} alt="Icon" className="bg-violet-600 rounded-full p-1"/>
            </Link>
            <h1 className="text-xl font-bold m-2">CloudStream</h1>
            {/* Collapse */}
            <div
              id="hs-navbar-floating-dark"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
              aria-labelledby="hs-navbar-floating-dark-collapse"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
                <Link
                  className="p-3 ps-px sm:px-3 md:py-4 text-md text-violet-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-300"
                  href="/"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  className="p-3 ps-px sm:px-3 md:py-4 text-md text-violet-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-300"
                  href="/manage-room"
                >
                  Manage Room
                </Link>
                <Link
                  className="p-3 ps-px sm:px-3 md:py-4 text-md text-violet-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-300"
                  href="/signup"
                >
                  Sign Up
                </Link>
                <Link
                  className="p-3 ps-px sm:px-3 md:py-4 text-md text-violet-800 hover:text-neutral-500 focus:outline-none focus:text-neutral-300"
                  href="/login"
                >
                  Login
                </Link>
                
                <div>
                  <Link
                    className=" bg-violet-800 text-white group inline-flex items-center gap-x-2 py-2 px-3 font-medium text-md rounded-full focus:outline-none"
                    href="/contact"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
            {/* End Collapse */}
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
      </>
    </div>
  );
};

export default Navbar;
