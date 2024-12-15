import { IconDeviceIpadHorizontalShare } from "@tabler/icons-react";
import React from "react";

const Hero = () => {
  return (
    <div>
      <>
        {/* Hero */}
        <div className="bg-white mt-6">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <a
                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
                href="/manage-room"
              >
                Poll Creator - Create interactive polls
                <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </div>
            {/* End Announcement Banner */}
            {/* Title */}
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                Let's Create
                <span className="bg-clip-text bg-gradient-to-tl from-violet-800 to-violet-600 text-transparent">
                  Poll
                </span>
              </h1>
            </div>
            {/* End Title */}
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-600 dark:text-neutral-400">
                Preline UI is an open-source set of prebuilt UI components,
                ready-to-use examples and Figma design system based on the
                utility-first Tailwind CSS framework.
              </p>
            </div>
            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <a
                className="inline-flex text-lg justify-center items-center gap-x-3 text-center bg-violet-800 text-white border border-transparent rounded-md py-3 px-4"
                href="/signup"
              >
                Get started
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <button
                type="button"
                className="relative flex group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <a href="/manage-room" className="flex text-lg gap-2"><IconDeviceIpadHorizontalShare /> Create Room
                </a>
              </button>
            </div>
            <div className="flex border-1 border-black mt-6">
                <div>
                    <img src="/wordCloud.png" alt="Word Cloud" className="mt-8 w-fit p-2 ml-24" />
                </div>
                <div className="relative w-fit text-black mt-8 p-4 ml-32">
                    <h1 className="text-3xl text-center font-bold text-violet-800">Word Cloud</h1>
                    <p className="text-xl text-center p-8">Create WordCloud to highlight popular poll responses. They’re great for gathering input and wowing your classroom, meeting, and workshop audiences!</p>
                </div>
            </div>
            {/* End Buttons */}
          </div>
        </div>
        {/* End Hero */}
      </>
    </div>
  );
};
export default Hero;
