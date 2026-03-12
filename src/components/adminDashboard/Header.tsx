"use client";

import { IoIosAdd, IoIosNotifications } from "react-icons/io";

import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="h-30 sm:flex items-center justify-between px-6 lg:px-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0f1a0c]/80 backdrop-blur-md z-30">
        <div className="flex sm:w-full items-center justify-between">
          <h2 className="text-xl pt-3 w-full text-center sm:text-left font-semibold tracking-tight text-slate-800 dark:text-white">
            Admin Dashboard Overview
          </h2>

          <div className="flex items-center gap-4 lg:gap-8">
            {/* Search */}
            <div className="hidden relative md:flex items-center h-10 w-64 lg:w-80 bg-slate-100 dark:bg-white/5 rounded-xl px-8 border border-transparent focus-within:border-primary transition-colors">
              <input
                className="bg-transparent border-none mr-2 focus:ring-0 text-sm w-full text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                placeholder="Search users, IDs..."
                type="text"
              />
              <FaSearch className="text-gray-700 absolute right-2.5 top-2.5" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden size-10 sm:flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors relative">
                <IoIosNotifications className="text-gray-700 h-5 w-5" />
                <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-white dark:border-black"></span>
              </button>

              <button className="hidden sm:flex h-10 px-4 items-center justify-center rounded-xl bg-primary text-gray-800 text-sm font-semibold hover:bg-primary-dark transition-colors gap-2 whitespace-nowrap">
                <IoIosAdd className="text-gray-700 h-5 w-5 shrink-0" />
                <span>New Produce</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
