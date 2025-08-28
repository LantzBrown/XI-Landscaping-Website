import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";
import { submitToAirtable, ContactFormData, trackPhoneClick } from "../../utils/airtable";

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

export const DesktopContact = (): JSX.Element => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    number: '',
    email: '',
    address: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

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
            CONTACT
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
              className="h-[60px] lg:h-[89px] border border-solid border-[#202e13] px-4 lg:px-7 py-4 lg:py-[29px] font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px] lg:text-[22px]"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
            <Input
              className="h-[60px] lg:h-[89px] border border-solid border-[#202e13] px-4 lg:px-7 py-4 lg:py-[29px] font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px] lg:text-[22px]"
              placeholder="Number"
              value={formData.number}
              onChange={(e) => handleInputChange('number', e.target.value)}
              required
            />
            <Input
              className="h-[60px] lg:h-[89px] border border-solid border-[#202e13] px-4 lg:px-7 py-4 lg:py-[29px] font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px] lg:text-[22px]"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
            <Input
              className="h-[60px] lg:h-[89px] border border-solid border-[#202e13] px-4 lg:px-7 py-4 lg:py-[29px] font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px] lg:text-[22px]"
              placeholder="Full Address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required
            />
            <Textarea
              className="h-[200px] lg:h-[356px] border border-solid border-[#202e13] px-4 lg:px-7 py-4 lg:py-[29px] font-['Inter',Helvetica] font-normal text-[#9c9797] text-[18px] lg:text-[22px]"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="h-[60px] lg:h-[89px] bg-[#202e13] font-['Inter',Helvetica] font-semibold text-white text-[18px] lg:text-[22px] disabled:opacity-50"
              onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion()}
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Estimate'}
            </Button>
            
            {submitStatus === 'success' && (
              <div className="text-green-600 font-semibold text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="text-red-600 font-semibold text-center">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-['Inter',Helvetica] font-bold text-[#202e13] text-[20px] lg:text-[25px] whitespace-nowrap tracking-[0] leading-[normal] mb-4">
                Email
              </h3>
              <a 
                href="mailto:sabasramirez1738@gmail.com"
                className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[23px] tracking-[0] leading-[normal] hover:underline"
                onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion()}
              >
                sabasramirez1738@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-['Inter',Helvetica] font-bold text-[#202e13] text-[20px] lg:text-[25px] whitespace-nowrap tracking-[0] leading-[normal] mb-4">
                Phone Number
              </h3>
              <a 
                href="tel:+19162544538"
                className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[23px] tracking-[0] leading-[normal] hover:underline"
                onClick={() => {
                  (window as any).gtag_report_conversion && (window as any).gtag_report_conversion();
                  trackPhoneClick({
                    phoneNumber: "+1 (916) 254-4538",
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent,
                    page: "Desktop Contact"
                  });
                }}
              >
                +1 (916) 254-4538
              </a>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-['Inter',Helvetica] font-bold text-[#202e13] text-[20px] lg:text-[25px] tracking-[0] leading-[normal] whitespace-nowrap mb-4">
                Service Areas
              </h3>
              <div className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[23px] tracking-[0] leading-[normal]">
                {serviceAreas.map((area, index) => (
                  <React.Fragment key={`desktop-area-${index}`}>
                    {area}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
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
          {footerLinks.map((link, index) => (
            <Link
              key={`footer-contact-link-${index}`}
              to={link.href}
              onClick={() => window.scrollTo(0, 0)}
              className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal]"
            >
              {link.title}
            </Link>
          ))}
          </div>
        </div>

        <Separator className="w-full mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal] mb-4 md:mb-0">
          COURTESY 2025. ALL RIGHTS RESERVED.
        </div>

        <div className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[18px] lg:text-[22px] tracking-[0] leading-[normal]">
          PRIVACY POLICY | TERMS &amp; CONDITIONS
        </div>
        </div>
        </div>
      </footer>
    </div>
  );
};