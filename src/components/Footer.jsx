import { IconUserShare } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-violet-300 flex ">
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto w-full text-black font-bold">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <Link
                className="flex-none text-xl font-semibold text-black focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Brand"
              >
                Poll Creator
              </Link>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <h4 className="font-semibold text-black">Product</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-black hover:text-black focus:outline-none focus:text-black dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Pricing
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-black-400 hover:text-black-200 focus:outline-none focus:text-black-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Changelog
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-black-400 hover:text-black-200 focus:outline-none focus:text-black-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Docs
                  </Link>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-span-1">
              <h4 className="font-semibold text-black-100">Company</h4>
              <div className="mt-3 grid space-y-3">
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-black-400 hover:text-black-200 focus:outline-none focus:text-black-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    About us
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-black-400 hover:text-black-200 focus:outline-none focus:text-black-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Blog
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-black-400 hover:text-black-200 focus:outline-none focus:text-black-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Careers
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-black-400 hover:text-black-200 focus:outline-none focus:text-black-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Customers
                  </Link>
                </p>
              </div>
            </div>
            {/* End Col */}
            <div className="col-span-2">
              <h4 className="font-semibold text-black-100">Stay up to date</h4>
              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Subscribe
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter your email"
                    />
                  </div>
                  <Link
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-none focus:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Subscribe
                  </Link>
                </div>
                <p className="mt-3 text-sm text-black-400">
                  
                </p>
              </form>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-center  items-center ml-28">
              <p className="text-lg text-black-400 dark:text-neutral-400">
                © 2025 PollCreator
              </p>
            </div>
            {/* End Col */}
            {/* Social Brands */}
            <div className="m-4 p-4 w-[20%] flex justify-center items-center mr-28 gap-4">
              <Link
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm border border-transparent text-blue-700 hover:bg-white/10 focus:outline-none focus:bg-white/10 bg-white rounded-full"
                href="https://www.facebook.com/"
              >
                <svg
                  className="shrink-0 size-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Link>
              
              <Link
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full bg-white m-2 border border-transparent text-blue-600 hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href="https://x.com/"
              >
                <svg
                  className="shrink-0 size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Link>
              <Link
                className="size-8 inline-flex justify-center items-center gap-x-4 text-sm font-semibold rounded-full  border border-transparent text-black bg-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                href="https://github.com/sakshiS6"
              >
                <svg
                  className="shrink-0 size-8"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>
             
            </div>
            {/* End Social Brands */}
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </div>
  );
};

export default Footer;
