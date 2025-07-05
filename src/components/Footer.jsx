import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-violet-300 p-4">
      <footer className="bg-white rounded-md">
        <>
          {/* Hero */}
          <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-4 py-4 sm:py-16">
              <div className="text-center">
                <h1 className="text-3xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
                  Live Poll Creator
                </h1>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                  Get started and host your live poll now!
                </p>
                <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                  {/* Form */}
                  <form>
                    <div className="relative z-10 flex gap-x-3 p-3 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                      <div className="w-full">
                        <label
                          htmlFor="hs-search-article-1"
                          className="block text-sm text-gray-700 font-medium dark:text-white"
                        >
                          <span className="sr-only">Enter your email</span>
                        </label>
                        <input
                          type="email"
                          name="hs-search-article-1"
                          id="hs-search-article-1"
                          className="py-2.5 px-4 block rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <Link href="/" className="bg-violet-600 text-white p-2 w-1/2 rounded-full">
                        Try Now
                      </Link>
                    </div>
                  </form>
                  {/* End Form */}
                  {/* SVG Element */}
                  <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                    <svg
                      className="w-16 h-auto text-orange-500"
                      width={121}
                      height={135}
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        strokeWidth={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                  {/* SVG Element */}
                  <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                    <svg
                      className="w-40 h-auto text-cyan-500"
                      width={347}
                      height={188}
                      viewBox="0 0 347 188"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                        stroke="currentColor"
                        strokeWidth={7}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {/* End SVG Element */}
                </div>
                <div className="flex justify-center gap-8 text-2xl mt-6">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandFacebook className="hover:text-blue-500 transition" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandTwitter className="hover:text-gray-500 transition" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandInstagram className="hover:text-pink-500 transition" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandLinkedin className="hover:text-blue-400 transition" />
                  </Link>
                </div>
                <p className="text-center mt-4 text-sm text-gray-600">
        &copy; 2025 CloudStream. All rights reserved.
      </p>
              </div>
            </div>
          </div>
        </>
      </footer>
    </div>
  );
};

export default Footer;
