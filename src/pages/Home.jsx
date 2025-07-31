import React from "react";
import man from "../assets/man.png";
import bg from "../assets/bg.png"; 
import m1 from "../assets/m1.png";
import bgImage from "../assets/b2.png";
import { FaGoogle, FaSearch, FaEnvelope, FaShopify, FaPaintBrush, FaRegFileAlt } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      icon: <FaGoogle />,
      title: "Meta & Google Ads",
      desc: "We create high converting Ad campaigns on Meta and Google platforms using advanced targeting, compelling creatives, and real-time optimization to maximize ROI.",
    },
    {
      icon: <FaSearch />,
      title: "Search Engine Optimization",
      desc: "Our SEO strategies improve your website’s visibility, rankings, and traffic through keyword research, on-page optimization, link building, and technical SEO.",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Marketing",
      desc: "Stay top of mind with personalized email campaigns, smart automation flows, and performance tracking to turn leads into loyal customers.",
    },
    {
      icon: <FaShopify />,
      title: "Shopify Store Design & Optimization",
      desc: "We design and optimize Shopify stores that are not just beautiful but also fast, user-friendly, and conversion-focused from first click to final checkout.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Branding & Graphic Design",
      desc: "We build bold, memorable brand identities from logos to marketing kits and create designs that align perfectly with your message and goals.",
    },
    {
      icon: <FaRegFileAlt />,
      title: "Content Creation",
      desc: "From eye-catching visuals to engaging copy, we craft content for high returns — optimized for platform, performance, and impact.",
    },
  ];
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
  <section
  className="relative bg-[#0A0F0D] text-white px-6 lg:px-20 py-20 overflow-hidden bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}>
  {/* Grid Background */}
  <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0 opacity-10 z-0">
    {[...Array(72)].map((_, i) => (
      <div key={i} className="bg-green-900 border border-green-800"></div>
    ))}
  </div>

  <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
   {/* Left Side Image */}
<div className="w-full lg:w-[70%] flex justify-center items-center bg-transparent">
  <img
    src={m1}
    alt="Office Desk"
    className="w-[150%] h-auto max-h-[500px] object-contain rounded-3xl"
  />
</div>




    {/* Right Side Text */}
    <div className="w-full lg:w-1/2 px-2">
      <p className="text-green-400 mb-2 text-sm font-medium flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
        About Us
      </p>
      <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
        We Don’t Follow <br />
        <span className="text-white">Trends,</span>{" "}
        <span className="text-white">We Create</span>
        <span className="text-green-500"> Them.</span>
      </h2>
      <p className="text-gray-300 mb-4 leading-relaxed text-[17px]">
        At Sunborn, we’re passionate digital marketers, designers, and
        strategists dedicated to helping brands grow, connect, and convert.
        From high-impact ad campaigns to stunning Shopify stores, our team
        delivers custom solutions that drive real results.
      </p>
      <p className="text-gray-300 text-[17px] leading-relaxed">
        We believe in creativity backed by data and results that speak for
        themselves. With every project, we aim to empower brands to rise,
        shine, and stay ahead.
      </p>
    </div>
  </div>
</section>
 <section className="bg-[#0A0F0D] text-white px-6 lg:px-20 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-green-400 text-sm font-medium flex justify-center items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Services That Drive Success, <br />
          <span className="text-white">
            Not Just Clicks<span className="text-green-500">.</span>
          </span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            icon: <FaGoogle />,
            title: "Meta & Google Ads",
            desc:
              "We create high converting Ad campaigns on Meta and Google platforms using advanced targeting, compelling creatives, and real-time optimization to maximize ROI.",
          },
          {
            icon: <FaSearch />,
            title: "Search Engine Optimization",
            desc:
              "Our SEO strategies improve your website’s visibility, rankings, and traffic through keyword research, on-page optimization, link building, and technical SEO.",
          },
          {
            icon: <FaEnvelope />,
            title: "Email Marketing",
            desc:
              "Stay top of mind with personalized email campaigns, smart automation flows, and performance tracking to turn leads into loyal customers.",
          },
          {
            icon: <FaShopify />,
            title: "Shopify Store Design & Optimization",
            desc:
              "We design and optimize Shopify stores that are not just beautiful but also fast, user-friendly, and conversion-focused from first click to final checkout.",
          },
          {
            icon: <FaPaintBrush />,
            title: "Branding & Graphic Design",
            desc:
              "We build bold, memorable brand identities from logos to marketing kits and create designs that align perfectly with your message and goals.",
          },
          {
            icon: <FaRegFileAlt />,
            title: "Content Creation",
            desc:
              "From eye-catching visuals to engaging copy, we craft content for high returns — optimized for platform, performance, and impact.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-[#0F1513] px-6 pt-10 pb-6 rounded-lg text-center relative"
          >
            {/* Horizontal line top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#1F2A28]"></div>
            {/* Icon */}
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white text-green-600 rounded-full flex items-center justify-center text-xl shadow-md border-4 border-[#0F1513] z-10">
              {service.icon}
            </div>
            {/* Content */}
            <h3 className="text-lg font-semibold mb-2 mt-6 text-green-400">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
            {/* Horizontal line bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1F2A28]"></div>
          </div>
        ))}
      </div>
    </section>

    </div>
  );
}
