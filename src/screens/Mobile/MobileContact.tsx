import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";
import { submitToAirtable, ContactFormData } from "../../utils/airtable";

// Service areas
const serviceAreas = [
  "Lincoln",
  "Roseville",
  "Folsom",
  "Elk Grove",
  "Fair Oaks",
  "Citrus Heights",
  "Arden-Arcade",
  "Carmichael",
  "El Dorado Hills",
];

// Footer links
const footerLinks = [
  { title: "HOME", href: "/" },
  { title: "SERVICES", href: "/services" },
  { title: "GALLERY", href: "/gallery" },
  { title: "CONTACT", href: "/contact" },
];

export const MobileContact = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    number: '',
    email: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const success = await submitToAirtable(formData);
    
    if (success) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        number: '',
        email: '',
        address: '',
        message: '',
      });
    } else {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-ligth-gray">
      {/* Header */}
      <header className="relative w-full h-[175px] bg-[url(https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-28-5.png)] bg-cover bg-center">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Contact header background"
          src="https://c.animaapp.com/mdhv6xukEmiG5d/img/rectangle-28-5.png"
          loading="eager"
          decoding="async"
        />
        <div className="container mx-auto px-4 h-full relative">
        <Link to="/" className="absolute top-[15px] left-4 font-['Inter',Helvetica] font-bold text-white text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
          XI Landscaping
        </Link>
        <h2 className="absolute top-[126px] left-0 font-['Inter',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal]">
          CONTACT US
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

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Contact Info */}
        <div className="text-center space-y-6">
          <div>
            <div className="font-['Inter',Helvetica] font-bold text-[#202e13] text-[25px] tracking-[0] leading-[normal] whitespace-nowrap mb-2">
              Phone Number
            </div>
            <a 
              href="tel:+19162544538"
              className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[23px] tracking-[0] leading-[normal] hover:underline"
            >
              +1 (916) 254-4538
            </a>
          </div>

          <div>
            <div className="font-['Inter',Helvetica] font-bold text-[#202e13] text-[25px] tracking-[0] leading-[normal] whitespace-nowrap mb-2">
              Email
            </div>
            <a 
              href="mailto:sabasramirez1738@gmail.com"
              className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[23px] tracking-[0] leading-[normal] hover:underline"
            >
              sabasramirez1738@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            className="h-12 rounded-[5px] border border-solid border-[#202e13] px-3 py-2 font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px]"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
          <Input
            className="h-12 rounded-[5px] border border-solid border-[#202e13] px-3 py-2 font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px]"
            placeholder="Number"
            value={formData.number}
            onChange={(e) => handleInputChange('number', e.target.value)}
            required
          />
          <Input
            className="h-12 rounded-[5px] border border-solid border-[#202e13] px-3 py-2 font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px]"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
          <Input
            className="h-12 rounded-[5px] border border-solid border-[#202e13] px-3 py-2 font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px]"
            placeholder="Full Address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            required
          />
          <Textarea
            className="h-[200px] rounded-[5px] border border-solid border-[#202e13] px-3 py-2 font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px]"
            placeholder="Message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            required
          />
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="h-[53px] bg-[#202e13] rounded-[10px] font-['Inter',Helvetica] font-semibold text-white text-[20px] disabled:opacity-50"
            onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion()}
            onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion()}
            onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion()}
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
          </Button>
          
          {submitStatus === 'success' && (
            <div className="text-green-600 font-semibold text-center text-sm">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="text-red-600 font-semibold text-center text-sm">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>

        {/* Service Areas */}
        <div className="text-center">
          <div className="font-['Inter',Helvetica] font-bold text-[#202e13] text-[25px] tracking-[0] leading-[normal] whitespace-nowrap mb-4">
            Service Areas
          </div>
          <div className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[20px] tracking-[0] leading-[normal]">
            {serviceAreas.map((area, index) => (
              <React.Fragment key={`area-${index}`}>
                {area}
                <br />
              </React.Fragment>
            ))}
          </div>
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
              key={`footer-contact-link-${index}`}
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
          PRIVACY POLICY | TERMS & CONDITIONS
        </p>
        </div>
        </div>
      </footer>
    </div>
  );
};