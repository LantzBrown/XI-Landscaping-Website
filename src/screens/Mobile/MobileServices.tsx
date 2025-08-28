import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

// Service data for mobile view
const mobileServices = [
  {
    title: "GARDEN DESIGN",
    description:
      "Crafting the perfect garden space. We will design a garden that suits your lifestyle and enhances your property's beauty.",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-68.png",
  },
  {
    title: "HARDSCAPING",
    description:
      "Adding structure to your landscape. We create functional and aesthetic hardscape features like patios, walkways and retaining walls.",
    image: "https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-69-1.png",
  },
  {
    title: "PLANT SELECTION",
    description:
      "Hand-picked greenery for your greenery. Our experts select the right plants, ensuring they thrive in your garden's unique conditions.",
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

export const MobileServices = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#e8e7d2]">
      {/* Header */}
      <header className="relative w-full h-[175px] bg-[url(https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-28-5.png)] bg-cover bg-center">
        <div className="container mx-auto px-4 h-full relative">
        <Link to="/" className="absolute top-[15px] left-4 font-['Inter',Helvetica] font-bold text-white text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
          XI Landscaping
        </Link>
        <h2 className="absolute top-[124px] left-0 font-['Inter',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal]">
          OUR SERVICES
        </h2>
        <button onClick={toggleMobileMenu} className="absolute top-[12px] right-4 text-white p-2">
          {mobileMenuOpen ? <X className="w-[30px] h-[30px]" /> : <MenuIcon className="w-[37px] h-[38px]" />}
        </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#202e13] bg-opacity-95 z-50 flex flex-col items-center justify-center">
          <div className="flex justify-between items-center p-4">
            <button onClick={toggleMobileMenu} className="absolute top-[12px] right-4 text-white p-2">
              <X className="w-[30px] h-[30px]" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <Link 
              to="/" 
              className="font-['Inter',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
              onClick={toggleMobileMenu}
            >
              HOME
            </Link>
            <Link 
              to="/services" 
              className="font-['Inter',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
              onClick={toggleMobileMenu}
            >
              SERVICES
            </Link>
            <Link 
              to="/gallery" 
              className="font-['Inter',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
              onClick={toggleMobileMenu}
            >
              GALLERY
            </Link>
            <Link 
              to="/contact" 
              className="font-['Inter',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
              onClick={toggleMobileMenu}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}

      {/* Service Cards */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {mobileServices.map((service, index) => (
          <Card
            key={`service-${index}`}
            className="w-full h-[343px] bg-cover bg-center border-none overflow-hidden"
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            <CardContent className="p-4 h-full relative">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt={`${service.title} service`}
                src={service.image}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

              <h3 className="absolute top-[83px] left-4 right-4 font-['Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-[normal] text-center z-20">
                {service.title}
              </h3>

              <p className="absolute top-[171px] left-4 right-4 font-['Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal] z-20">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative w-full h-[220px] bg-[url(https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-51-1.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-20">
          <h2 className="font-['Inter',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] mb-2">
            <span className="text-white">READY TO </span>
            <span className="text-[#d6d6d6]">DESIGN</span>
          </h2>
          <h2 className="font-['Inter',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal] mb-6">
            YOUR GARDEN?
          </h2>
          <Link to="/contact">
            <Button className="w-[156px] h-[41px] bg-white rounded-none hover:bg-white">
              <span className="font-['Inter',Helvetica] font-semibold text-[#202e13] text-2xl">
              Contact Us
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative w-full bg-ligth-gray py-8">
        <div className="container mx-auto px-4">
        <div className="flex justify-between items-start mb-8">
        <h3 className="font-['Inter',Helvetica] font-bold text-[#202e13] text-[22px] tracking-[0] leading-[normal]">
          XI Landscaping
        </h3>
        <div>
        <h4 className="font-['Inter',Helvetica] font-semibold text-[#202e13] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap mb-4">
          SITEMAP
        </h4>

        <nav className="flex flex-col gap-2">
          {footerLinks.map((link, index) => (
            <Link
              key={`footer-link-${index}`}
              to={link.href}
              onClick={() => window.scrollTo(0, 0)}
              className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        </div>
        </div>

        <Separator className="w-full mb-4" />

        <div className="space-y-2">
          <p className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
            COURTESY 2025. ALL RIGHTS RESERVED.
          </p>

          <p className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          PRIVACY POLICY | TERMS &amp; CONDITIONS
          </p>
        </div>
        </div>
      </footer>
    </div>
  );
};