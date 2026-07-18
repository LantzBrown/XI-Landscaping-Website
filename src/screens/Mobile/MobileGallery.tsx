import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import { Separator } from "../../components/ui/separator";

// Gallery images for mobile view
const mobileGalleryImages = [
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-2-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-1-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-20-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-3-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-7-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-18-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-19-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-17-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-6-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-11-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping--1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-16-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-12-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-4-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-14-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-13-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-15-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-8-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-5-1.png",
  "https://c.animaapp.com/mdhv6xukEmiG5d/img/xi-landscaping-10-1.png",
];

// Footer links
const footerLinks = [
  { title: "HOME", href: "/" },
  { title: "SERVICES", href: "/services" },
  { title: "GALLERY", href: "/gallery" },
  { title: "CONTACT", href: "/contact" },
];

export const MobileGallery = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative w-full min-h-screen bg-ligth-gray">
      {/* Header */}
      <header className="relative w-full h-[175px] bg-[url(https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-28-5.png)] bg-cover bg-center">
        <div className="container mx-auto px-4 h-full relative">
        <Link to="/" className="absolute top-[15px] left-4 font-['Inter',Helvetica] font-bold text-white text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
          XI Landscaping
        </Link>
        <h2 className="absolute top-[125px] left-0 font-['Inter',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal]">
          GALLERY
        </h2>
        <button onClick={toggleMobileMenu} className="absolute top-[12px] right-4 text-white p-2">
          {mobileMenuOpen ? <X className="w-[30px] h-[30px]" /> : <MenuIcon className="w-[37px] h-[38px]" />}
        </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
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
        </>
      )}

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="columns-2 gap-3">
          {mobileGalleryImages.map((image, index) => (
            <div key={`gallery-${index}`} className="relative mb-3 break-inside-avoid">
              <img
                className="w-full object-cover rounded-lg"
                style={{
                  height: `${150 + Math.floor(Math.random() * 150)}px`
                }}
                alt={`XI landscaping project ${index + 1}`}
                src={image}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
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
