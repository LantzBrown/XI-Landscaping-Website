import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../../components/ui/separator";

// Desktop gallery images
const desktopGalleryImages = [
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-2-1.png",
    width: "661px",
    height: "496px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-1-1.png",
    width: "662px",
    height: "882px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-20-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-3-1.png",
    width: "661px",
    height: "496px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-7-1.png",
    width: "661px",
    height: "930px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-18-1.png",
    width: "661px",
    height: "496px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-19-1.png",
    width: "662px",
    height: "882px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-17-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-6-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-11-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping--1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-16-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-12-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-4-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-14-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-13-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-15-1.png",
    width: "661px",
    height: "661px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-8-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-5-1.png",
    width: "661px",
    height: "881px",
  },
  {
    src: "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-10-1.png",
    width: "661px",
    height: "881px",
  },
];

// Footer links
const footerLinks = [
  { title: "HOME", href: "/" },
  { title: "SERVICES", href: "/services" },
  { title: "GALLERY", href: "/gallery" },
  { title: "CONTACT", href: "/contact" },
];

export const DesktopGallery = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-ligth-gray">
      {/* Header */}
      <header className="relative w-full h-[477px] bg-[url(https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-28-5.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <Link to="/" className="absolute top-[46px] left-10 font-['Inter',Helvetica] font-bold text-white text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
          XI Landscaping
        </Link>

        <nav className="absolute top-[50px] right-10 flex space-x-[65px]">
          <Link 
            to="/" 
            className="font-['Inter',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
          >
            HOME
          </Link>
          <Link 
            to="/services" 
            className="font-['Inter',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
          >
            SERVICES
          </Link>
          <Link 
            to="/gallery" 
            className="font-['Inter',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
          >
            GALLERY
          </Link>
          <Link 
            to="/contact" 
            className="font-['Inter',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
          >
            CONTACT
          </Link>
        </nav>
        
        {/* Page Title */}
        <div className="absolute bottom-[60px] left-10">
          <h1 className="font-semibold text-white text-8xl tracking-[0] leading-[normal]">
            GALLERY
          </h1>
        </div>
      </header>

      {/* Gallery Grid - Desktop */}
      <div className="container mx-auto px-4 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {desktopGalleryImages.map((image, index) => (
            <div key={`desktop-gallery-${index}`} className="relative mb-4 break-inside-avoid">
              <img
                className="w-full h-auto object-cover rounded-lg"
                alt={`XI landscaping project ${index + 1}`}
                src={image.src}
                style={{
                  height: `${200 + Math.floor(Math.random() * 200)}px`
                }}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full bg-ligth-gray py-12">
        <div className="container mx-auto px-4">
        <h3 className="font-['Inter',Helvetica] font-light text-[#202e13] text-[28px] lg:text-[38px] tracking-[0] leading-[normal] mb-8">
          XI Landscaping
        </h3>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-[40px] mb-8">
          <span className="font-['Inter',Helvetica] font-semibold text-[#202e13] text-[18px] lg:text-[22px] tracking-[0] leading-[normal]">
            SITEMAP
          </span>

          <div className="flex flex-wrap gap-4 md:gap-[40px]">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal]"
            >
              HOME
            </Link>
            <Link
              to="/services"
              onClick={() => window.scrollTo(0, 0)}
              className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal]"
            >
              SERVICES
            </Link>
            <Link
              to="/gallery"
              onClick={() => window.scrollTo(0, 0)}
              className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal]"
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal]"
            >
              CONTACT
            </Link>
          </div>
        </div>

        <Separator className="w-full mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal] mb-4 md:mb-0">
            COURTESY 2025. ALL RIGHTS RESERVED.
          </div>

          <div className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal]">
            PRIVACY POLICY | TERMS & CONDITIONS
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
};
