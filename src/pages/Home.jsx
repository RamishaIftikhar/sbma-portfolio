import React from "react";
import man from "../assets/man.png";
import bg from "../assets/bg.png";
import m1 from "../assets/m1.png";
import bgImage from "../assets/b2.png";
import servicebg from "../assets/servicebg.png";
import sunbornbg from "../assets/sunbornbg.png";
import bgImg from "../assets/tbg.png";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import {
  FaGoogle,
  FaSearch,
  FaEnvelope,
  FaShopify,
  FaPaintBrush,
  FaRegFileAlt,
} from "react-icons/fa";

export default function Home() {
  const services = [
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
  ];

  const testimonials = [
    {
      quote:
        "Sunborn elevated our school's online presence through strategic campaigns and strong branding. Their work brought real results during admissions.",
      name: "Waseem Leon",
      org: "Punjab Superior School",
      rating: "5/5",
    },
    {
      quote:
        "Sunborn crafted impactful content and branding that gave our fuel business a modern edge. Their marketing brought us the visibility we needed.",
      name: "Sohail Ahmed Khan",
      org: "Mosed Petroleum",
      rating: "4.8/5",
    },
    {
      quote:
        "From branding to lead-generating content, Sunborn delivered excellence. Their marketing gave our business a whole new edge online.",
      name: "Faizan Altaf",
      org: "Blue Beyond Visa Consultancy",
      rating: "4.9/5",
    },
    {
      quote:
        "Sunborn helped us build a bold brand image and smart marketing flow. Their team truly understands what drives digital growth.",
      name: "Sami Kamran",
      org: "BuyIt",
      rating: "4.5/5",
    },
  ];

  return (
    <div className="min-h-screen text-white font-sans">

      {/* ✅ Hero Section */}
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <p className="text-green-400 mb-2">Welcome To</p>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                SUNBORN <br /> <span className="text-white">MARKETING AGENCY</span>
              </h1>
              <p className="mt-6 text-gray-300 text-sm sm:text-base lg:text-lg">
                We specialize in Meta & Google Ads, SEO, Shopify store design, branding, and content creation. With data driven strategies and creative execution, we help businesses grow faster and smarter in the digital world.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={man} alt="Man" className="w-[260px] sm:w-[320px] lg:w-[400px]" />
            </div>
          </div>
        </section>

        {/* ✅ Stats Row */}
        <div className="py-8 border-t border-gray-800">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row justify-center items-center gap-8 text-center">
            <p className="text-white font-semibold">
              Award-Winning Strategies <span className="text-green-500">◆</span>
            </p>
            <p className="text-white font-semibold">
              1,000+ Successful Campaigns Delivered <span className="text-green-500">◆</span>
            </p>
            <p className="text-white font-semibold">98% Client Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* ✅ About Us */}
      <section
        className="relative bg-[#0A0F0D] text-white py-20 overflow-hidden bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0 opacity-10 z-0">
          {[...Array(72)].map((_, i) => (
            <div key={i} className="bg-green-900 border border-green-800"></div>
          ))}
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={m1} alt="Office Desk" className="w-[95%] h-auto max-h-[500px] object-contain rounded-3xl shadow-2xl" />
          </div>
          <div className="w-full lg:w-1/2">
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
            <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base lg:text-lg">
              At Sunborn, we’re passionate digital marketers, designers, and strategists dedicated to helping brands grow, connect, and convert.
            </p>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              We believe in creativity backed by data and results that speak for themselves. With every project, we aim to empower brands to rise, shine, and stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Services */}
      <section
        className="bg-cover bg-center bg-no-repeat text-white py-16 sm:py-20 relative"
        style={{ backgroundImage: `url(${servicebg})` }}
      >
        <div className="absolute inset-0 bg-[#0A0F0D]/90 z-0"></div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="text-center mb-16">
            <p className="text-green-400 text-sm font-medium flex justify-center items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Services That Drive Success, <br />
              <span className="text-white">Not Just Clicks<span className="text-green-500">.</span></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div key={i} className="bg-[#0F1513] px-6 pt-10 pb-6 rounded-lg text-center relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#1F2A28]"></div>
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white text-green-600 rounded-full flex items-center justify-center text-xl shadow-md border-4 border-[#0F1513] z-10">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 mt-6 text-green-400">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{service.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1F2A28]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Stats Section */}
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-20" style={{ backgroundImage: `url(${sunbornbg})` }}>
        <div className="text-white text-center w-full max-w-screen-xl px-4 sm:px-6 lg:px-20">
          <h1 className="text-5xl font-extrabold mb-20 tracking-wide">SUNBORN STATS.</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-2">
            <div className="bg-[#0f0f0f] py-12 px-10 rounded-2xl shadow-xl">
              <h2 className="text-5xl font-bold text-[#27D965]">120+</h2>
              <p className="text-2xl font-semibold mt-4">Happy Clients</p>
              <p className="text-sm text-gray-400 mt-2">Number of satisfied clients who have benefited from our services.</p>
            </div>
            <div className="bg-[#0f0f0f] py-12 px-10 rounded-2xl shadow-xl">
              <h2 className="text-5xl font-bold text-[#27D965]">50+</h2>
              <p className="text-2xl font-semibold mt-4">Projects Completed</p>
              <p className="text-sm text-gray-400 mt-2">Total projects successfully delivered across various industries.</p>
            </div>
            <div className="col-span-1 md:col-span-2 bg-[#0f0f0f] py-12 px-10 rounded-2xl shadow-xl">
              <h2 className="text-5xl font-bold text-[#27D965]">150+</h2>
              <p className="text-2xl font-semibold mt-4">Campaigns Launched</p>
              <p className="text-sm text-gray-400 mt-2">Successful marketing campaigns launched, driving growth and engagement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Testimonials */}
      <div className="w-full text-white bg-no-repeat bg-top bg-cover flex items-center" style={{ backgroundImage: `url(${bgImg})`, paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14">
            <div>
              <p className="text-sm text-[#27D965] font-medium uppercase mb-2">Testimonials</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">What Our Clients Say</h2>
              <p className="text-[#27D965] text-lg font-medium">Real Stories, Real Results.</p>
            </div>
            <p className="text-sm text-gray-400 mt-6 md:mt-0 md:max-w-xl">
              We take pride in the impact we create. Here's what our clients have to say about working with Sunborn—from increased leads to brand transformations, their words speak volumes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-[#0f0f0f] rounded-2xl p-8 relative">
                <FaQuoteLeft className="text-3xl text-white mb-6" />
                <p className="text-lg text-gray-200 mb-8">“{testimonial.quote}”</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-gray-600"></div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.org}</p>
                    </div>
                  </div>
                  <p className="text-[#27D965] text-sm font-medium whitespace-nowrap">★ ({testimonial.rating})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
