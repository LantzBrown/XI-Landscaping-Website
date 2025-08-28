import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Desktop services data
const desktopServices = [
  {
    title: "GARDEN DESIGN",
    description:
      "Crafting the perfect garden space. We will design a garden that suits your lifestyle and enhances your property's beauty",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-68.png",
  },
  {
    title: "HARDSCAPING",
    description:
      "Adding structure to your landscape. We create functional and aesthetic hardscape features like patios, walkways and retaining walls",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-69-1.png",
  },
  {
    title: "PLANT SELECTION",
    description:
      "Hand-picked greenery for your greenery. Our experts select the right plants, ensuring they thrive in your garden's unique conditions",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-72-1.png",
  },
  {
    title: "GARDEN MAINTENANCE",
    description:
      "Preserving your garden's allure. We offer ongoing maintenance services to ensure your garden looks its best year round",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-73-1.png",
  },
  {
    title: "WALLS & MASONRY",
    description:
      "Add depth to your garden and ensure there is no flooding. Add privacy to your house with walls making sure your neighbours can't see inside.",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-70-1.png",
  },
  {
    title: "GARDEN IRRIGATION",
    description:
      "Keeping your garden vibrant all year long. Our irrigation systems guarantee your garden receives the perfect amount of water.",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-74-1.png",
  },
  {
    title: "GARDEN CONSULTATION",
    description:
      "Expert advice at your fingertips. Consult with us to get valuable insights and recommendations for your dream garden project.",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-71-1.png",
  },
  {
    title: "OUTDOOR LIGHTING DESIGN",
    description:
      "Keeping your garden well lit during the light. Allowing you to Enjoy your garden throughout the entire day and night.",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-75-1.png",
  },
];

// Footer links
const footerLinks = [
  { title: "HOME", href: "/" },
  { title: "SERVICES", href: "/services" },
  { title: "GALLERY", href: "/gallery" },
  { title: "CONTACT", href: "/contact" },
];

export const DesktopServices = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-[#e8e7d2]">
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
            SERVICES
          </h1>
        </div>
      </header>

      {/* Service Cards - Desktop Layout */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-[50px] lg:gap-y-[53px]">
        {desktopServices.map((service, index) => (
          <Card
            key={`desktop-service-${index}`}
            className="w-full h-[300px] lg:h-[408px] border-none overflow-hidden relative"
          >
            <CardContent className="p-0 h-full relative">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt={`${service.title} service`}
                src={service.image}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
              <h3
                className={`absolute font-['Inter',Helvetica] font-semibold text-white text-[24px] lg:text-[46px] tracking-[0] leading-[normal] ${
                  service.title === "OUTDOOR LIGHTING DESIGN"
                    ? "top-[20px] lg:top-[30px] left-4"
                    : "top-[20px] lg:top-[30px] left-[26px]"
                } z-20`}
              >
                {service.title}
              </h3>

              <p className="absolute top-[220px] lg:top-[300px] left-[26px] right-[26px] font-['Inter',Helvetica] font-normal text-white text-[14px] lg:text-[22px] tracking-[0] leading-[normal] z-20">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full h-[400px] lg:h-[596px] bg-[url(https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-51-1.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
        <h2 className="font-['Inter',Helvetica] font-semibold text-[40px] lg:text-[78px] tracking-[0] leading-[normal] mb-4">
          <span className="text-white">READY TO </span>
          <span className="text-[#d6d6d6]">DESIGN</span>
        </h2>
        <h2 className="font-['Inter',Helvetica] font-semibold text-white text-[40px] lg:text-[78px] tracking-[0] leading-[normal] mb-8">
          YOUR GARDEN?
        </h2>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <Button className="w-[200px] lg:w-[253px] h-[50px] lg:h-[67px] bg-white rounded-none hover:bg-white">
            <span className="text-[#202e13] text-lg lg:text-2xl font-['Inter',Helvetica] font-semibold">
              Contact Us
            </span>
          </Button>
        </Link>
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
          <Link to="/services" className="font-bold text-[#202e13] text-2xl underline hover:opacity-80 transition-opacity">
            </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
