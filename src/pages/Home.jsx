import React from "react";
import man from "../assets/man.png";
import bg from "../assets/bg.png"; // your background image

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans">
      
      {/* ✅ Hero Wrapper with background image */}
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {/* Header already done by you */}

        {/* Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16">
          {/* Left Side Text */}
          <div className="max-w-2xl">
            <p className="text-green-400 mb-2">Welcome To</p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              SUNBORN <br /> <span className="text-white">MARKETING AGENCY</span>
            </h1>
            <p className="mt-6 text-gray-300 text-sm lg:text-base">
              We specialize in Meta & Google Ads, SEO, Shopify store design, branding, and content creation. With data driven strategies and creative execution, we help businesses grow faster and smarter in the digital world.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="mb-10 lg:mb-0">
            <img src={man} alt="Man" className="w-[320px] lg:w-[400px]" />
          </div>

        </section>
        {/* ✅ Stats Section  */}
      <div className="py-8 border-t border-gray-800">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-center">
          <p className="text-white font-semibold">
            Award-Winning Strategies <span className="text-green-500">◆</span>
          </p>
          <p className="text-white font-semibold">
            1,000+ Successful Campaigns Delivered <span className="text-green-500">◆</span>
          </p>
          <p className="text-white font-semibold">
            98% Client Satisfaction Rate
          </p>
        </div>
      </div>
      </div>

    </div>
  );
}
