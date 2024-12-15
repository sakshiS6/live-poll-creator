"use client";
import { IconDeviceIpadHorizontalShare } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import ReactWordcloud from "react-wordcloud";

const Hero = () => {
  const words = [
    {
      text: "told",
      value: 64,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
    {
      text: "correct",
      value: 10,
    },
    {
      text: "day",
      value: 54,
    },
    {
      text: "prescription",
      value: 12,
    },
    {
      text: "time",
      value: 77,
    },
    {
      text: "thing",
      value: 45,
    },
    {
      text: "left",
      value: 19,
    },
    {
      text: "pay",
      value: 13,
    },
    {
      text: "people",
      value: 32,
    },
    {
      text: "month",
      value: 22,
    },
    {
      text: "again",
      value: 35,
    },
    {
      text: "review",
      value: 24,
    },
    {
      text: "call",
      value: 38,
    },
    {
      text: "doctor",
      value: 70,
    },
    {
      text: "asked",
      value: 26,
    },
    {
      text: "finally",
      value: 14,
    },
    {
      text: "insurance",
      value: 29,
    },
    {
      text: "week",
      value: 41,
    },
    {
      text: "called",
      value: 49,
    },
    {
      text: "problem",
      value: 20,
    },
    {
      text: "going",
      value: 59,
    },
    {
      text: "help",
      value: 49,
    },
    {
      text: "felt",
      value: 45,
    },
    {
      text: "discomfort",
      value: 11,
    },
    {
      text: "lower",
      value: 22,
    },
    {
      text: "severe",
      value: 12,
    },
    {
      text: "free",
      value: 38,
    },
    {
      text: "better",
      value: 54,
    },
    {
      text: "muscle",
      value: 14,
    },
    {
      text: "neck",
      value: 41,
    },
    {
      text: "root",
      value: 24,
    },
    {
      text: "adjustment",
      value: 16,
    },
    {
      text: "therapy",
      value: 29,
    },
    {
      text: "injury",
      value: 20,
    },
    {
      text: "excruciating",
      value: 10,
    },
    {
      text: "chronic",
      value: 13,
    },
    {
      text: "chiropractor",
      value: 35,
    },
    {
      text: "treatment",
      value: 59,
    },
    {
      text: "tooth",
      value: 32,
    },
    {
      text: "chiropractic",
      value: 17,
    },
    {
      text: "dr",
      value: 77,
    },
    {
      text: "relief",
      value: 19,
    },
    {
      text: "shoulder",
      value: 26,
    },
    {
      text: "nurse",
      value: 17,
    },
    {
      text: "room",
      value: 22,
    },
    {
      text: "hour",
      value: 35,
    },
    {
      text: "wait",
      value: 38,
    },
    {
      text: "hospital",
      value: 11,
    },
    {
      text: "eye",
      value: 13,
    },
    {
      text: "test",
      value: 10,
    },
    {
      text: "appointment",
      value: 49,
    },
    {
      text: "medical",
      value: 19,
    },
    {
      text: "question",
      value: 20,
    },
    {
      text: "office",
      value: 64,
    },
    {
      text: "care",
      value: 54,
    },
    {
      text: "minute",
      value: 29,
    },
    {
      text: "waiting",
      value: 16,
    },
    {
      text: "patient",
      value: 59,
    },
    {
      text: "health",
      value: 49,
    },
    {
      text: "alternative",
      value: 24,
    },
    {
      text: "holistic",
      value: 19,
    },
    {
      text: "traditional",
      value: 20,
    },
  ];

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [30, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  return (
    <div>
      <>
        {/* Hero */}
        <div className="bg-white mt-6 rounded-lg">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 ">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <Link
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
              </Link>
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
                PollCreator gives you the power to design a wide variety of
                interactive polls. Polling your audience can be the most
                effective way to increase engagement and make a presentation
                dynamic and memorable.
              </p>
            </div>
            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <Link
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
              </Link>
              <button
                type="button"
                className="relative flex group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <Link href="/manage-room" className="flex text-lg gap-2">
                  <IconDeviceIpadHorizontalShare /> Create Room
                </Link>
              </button>
            </div>
            <div className="flex border-1 border-black mt-6 ">
              <div className="mx-auto bg-white text-violet-800 w-fit m-2 p-10 align-items rounded-lg">
                <div style={{ height: 400, width: 600 }}>
                  <ReactWordcloud options={options} words={words} />
                </div>
              </div>
              <div className="relative w-fit text-black mt-8 p-4 ml-16">
                <h1 className="text-3xl text-center font-bold text-violet-800">
                  Word Cloud
                </h1>
                <p className="text-xl text-center p-8">
                  Create WordCloud to highlight popular poll responses. They’re
                  great for gathering input and wowing your classroom, meeting,
                  and workshop audiences!
                </p>
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
