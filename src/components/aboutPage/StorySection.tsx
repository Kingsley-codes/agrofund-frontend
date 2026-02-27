"use client";

import { FaSeedling, FaQuoteLeft } from "react-icons/fa";

export default function StorySection() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK2GTLecsd0E3DdkQm4xnDbsdnJfR8tkvov5AeOrAvxKyhY0GD1WBR1nLNtXwIw1cdIh62Rdq5otV_f7TM_NuFqtVfN6B6T6Ddr--HAcaHtRK5fpQJvx8LvowtpgCRE-qLtFPht3c1xc3BwUW8fGxIewPRb-VrAHpz5WdRuyyRMudr0iRX8HSFXdb7QPej0oEEdSybWC5nZzSsM3FMBB6sdb4RdR2OfIjQOk7OP-CszL7EqBfBFIGLIL15LZ98z2bclkrslDPLURva"
            alt="Nigerian farmer smiling"
            className="rounded-md shadow-md w-full h-[500px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-primary text-4xl font-black mb-8">Our Story</h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              What started as a simple investment platform in Lagos has blossomed into a full-scale agricultural venture. Many Nigerians wanted to invest in agriculture but lacked time and expertise.
            </p>
            <p>
              Talented rural farmers were trapped in cycles of subsistence farming due to lack of modern machinery and capital.
            </p>
            <div className="pl-6 border-l-4 border-terracotta italic text-xl font-medium text-slate-800 py-2 flex items-center gap-2">
              <FaQuoteLeft /> "We didn't just want to build a fintech app; we wanted to build a bridge that felt like soil under your fingernails."
            </div>
            <p>
              Today, Agrofund Hub manages dozens of farm clusters across Nigeria, using IoT technology to give remote farmers real-time updates while ensuring local partners receive fair wages, training, and a stake in the harvest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}