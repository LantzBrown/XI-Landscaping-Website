import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Separator } from "../../components/ui/separator";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

export const MobileHome = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Navigation items
  const navItems = [
    { text: "HOME", href: "/" },
    { text: "SERVICES", href: "/services" },
    { text: "GALLERY", href: "/gallery" },
    { text: "CONTACT", href: "/contact" },
  ];

  // What makes us different cards
  const differentiators = [
    {
      title: "Skin In The Game",
      description:
        "We have been doing this for the past 20+ years. For ourselves and other families across Sacramento.",
      align: "left",
    },
    {
      title: "We're Family",
      description:
        "My sons and I work together.\n\nSo I know you're getting the best of the best garden and team.",
      align: "right",
    },
    {
      title: "Easy Maintenance",
      description:
        "We make your garden look after itself, we also explain the best way to maintain it yourself or we maintain it for you.",
      align: "left",
    },
    {
      title: "Creative Collaboration",
      description:
        "We continuously ensure you're happy with the design and the work so it's not just a nice garden but your dream garden.",
      align: "right",
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Free Estimate",
      description:
        "In the initial step, I meet you and we have a relaxed conversation about your garden vision and preferences.",
      align: "left",
      hasButton: true,
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our team of experts plans out a custom garden design that aligns with what we discussed, your desires and your spaces characteristics.",
      align: "right",
      hasButton: false,
    },
    {
      number: "03",
      title: "Review & Improvement",
      description:
        "We show the design to you for review. Once approved, we move forward to start the plan for construction.",
      align: "left",
      hasButton: false,
    },
    {
      number: "04",
      title: "Build & Maintain",
      description:
        "We build out your dream garden and constantly get your feedback, then we explain how to maintain it or we maintain it.",
      align: "right",
      hasButton: false,
    },
  ];

  // Service categories
  const serviceCategories = [
    {
      title: "RESIDENTIAL",
      description:
        "Crafting the perfect garden space for your home. Whether indoor or outdoor, we got it all ready for your greenery needs.",
      image: "https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-27.png",
    },
    {
      title: "COMMERCIAL",
      description: "Landscaping and maintenance for your business",
      image: "https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-17.png",
    },
    {
      title: "MUNICIPAL",
      description:
        "Landscaping and maintenance for public gardens and city parks.",
      image: "https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-18.png",
    },
  ];

  // Testimonial data
  const testimonials = [
    {
      text: "I've been very impressed with XI Landscape. They're a great family-run business—always respectful, responsive, and (easy to communicate with). Their (attention to detail), (quality of work), and overall tidiness are consistently excellent. I primarily use them for regular mow-and-blow service, but they've always been happy to accommodate special requests as they come up. (I recommended XI to both my parents and my brother), and now they're using them too. Highly recommend!",
      author: "MIKE MERRI",
      position: "",
    },
    {
      text: "We've used XI for our lawn services for (two years now) as they were recommended to us by our neighbors. (Super reliable service, easy to communicate with, and accommodative of requests). I appreciate being able to ask them to (check things out), like when one of (our sprinklers) wasn't working properly. They are flexible, will service more in the summer and cut back in the winter when things don't grow as fast. Would recommend to anyone who needs lawn care",
      author: "ELIZABETH DOW",
      position: "",
    },
    {
      text: "I'm working with XI Landscaping, and they're doing an AWESOME job. Sábás and the team are such nice people I could talk with them for hours. If you want to get your yard in better shape than ever imagined, then I'd work with them.",
      author: "LANTZ BROWN",
      position: "",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const formatTestimonialText = (text: string) => {
    return text.split(/(\([^)]+\))/).map((part, index) => {
      if (part.startsWith('(') && part.endsWith(')')) {
        return (
          <span key={index} className="text-[#9c9797]">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };
  // FAQ questions data
  const faqQuestions = [
    {
      question: "Can you help with design ideas or planning?",
      answer: "Yes, we offer comprehensive design services and can help you plan your perfect garden based on your preferences and space.",
    },
    {
      question: "How much does landscaping services typically cost?",
      answer: "Costs vary depending on the scope of the project, materials used, and size of your space. We provide detailed estimates after an initial consultation.",
    },
    {
      question: "Can you work with a specific budget?",
      answer: "Absolutely! We can tailor our services to fit various budgets and provide options that maximize value while respecting your financial constraints.",
    },
    {
      question: "Do you offer financing or payment plans?",
      answer: "Yes, we offer flexible payment options and can discuss financing plans during your consultation.",
    },
    {
      question: "What is your process from consultation to project completion?",
      answer: "Our process includes an initial consultation, design planning, review and approval, implementation, and final walkthrough, with ongoing communication throughout.",
    },
    {
      question: "How long does a landscaping project typically take to complete?",
      answer: "Project timelines vary based on complexity and scope, but we provide estimated timeframes during the planning phase and keep you updated on progress.",
    },
    {
      question: "What should I do to prepare for my landscaping project?",
      answer: "We'll guide you through any necessary preparations, but generally it helps to clear the area of personal items and provide access to water and electricity.",
    },
    {
      question: "Can you work around existing structures or landscaping?",
      answer: "Yes, we're experienced in integrating new designs with existing elements and can work around structures, trees, or other features you wish to preserve.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured for all the work we perform, providing you with peace of mind throughout the project.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "We stand behind our work with comprehensive warranties on both materials and labor, details of which we'll discuss during the consultation.",
    },
    {
      question: "Do you offer maintenance services for completed landscaping projects?",
      answer: "Yes, we do maintenance even if we didn't install your landscape.",
    },
    {
      question: "Do you install outdoor lighting or smart irrigation systems?",
      answer: "Yes, we offer a full range of outdoor lighting solutions and smart irrigation systems that can be controlled remotely and conserve water.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <img
          className="w-full h-[100vh] object-cover"
          alt="Garden landscape"
          src="https://ik.imagekit.io/lantz/Sabas/Screenshot%202025-08-12%20at%202.00.34%E2%80%AFPM.png"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />

        {/* Navigation */}
        <Link to="/" className="absolute top-[15px] left-4 font-['Inter',Helvetica] font-bold text-white text-[26px] tracking-[0] leading-[normal] whitespace-nowrap z-10">
          XI Landscaping
        </Link>
        
        {/* Hamburger Menu */}
        <div className="absolute top-[12px] right-4 z-10">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2"
          >
            {menuOpen ? <X className="w-[30px] h-[30px]" /> : <Menu className="w-[37px] h-[38px]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#202e13] bg-opacity-95 z-20 flex flex-col items-center justify-center">
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-[12px] right-4 text-white p-2"
            >
              <X className="w-[30px] h-[30px]" />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.href} 
                  className="font-['Inter',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[normal] hover:underline"
                  onClick={() => {
                    setMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Hero Text */}
        <div className="absolute w-full top-[120px] text-center px-4 z-10">
          <h1 className="font-semibold text-light-gray text-5xl mb-2">
            DREAM GARDENS
          </h1>
          <h2 className="font-normal text-white text-4xl mb-4">
            BUILT AND MAINTAINED
          </h2>

          <p className="font-normal text-[#d6d6d6] text-lg mx-auto">
            We've built and maintained the best gardens in Sacramento for
            20+ years.<br />
            And we want to do the same for you.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="absolute flex flex-col items-center justify-center space-y-4 bottom-[100px] left-0 right-0 z-10">
          <a 
            href="tel:+19162544538" 
            className="font-bold text-white text-2xl underline"
            onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion()}
          >
            (916) 254-4538
          </a>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button className="h-[60px] w-[200px] bg-white hover:bg-gray-100 rounded-none">
              <span className="font-semibold text-[#202e13] text-xl">
                Free Estimate
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="w-full bg-ligth-gray py-10">
        <div className="px-4">
          <h2 className="font-semibold text-[36px]">
            <span className="text-[#202e13]">WHAT MAKES US </span>
            <span className="text-[#979696]">DIFFERENT</span>
            <span className="text-[#202e13]">?</span>
          </h2>
          <div className="font-normal text-[#202e13] text-lg mb-6">
            [&nbsp;&nbsp; ABOUT US&nbsp;&nbsp; ]
          </div>

          <div className="space-y-8">
            {differentiators.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${item.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
              >
                <h3 className="font-semibold text-[#202e13] text-[22px] mb-2">
                  {item.title}
                </h3>
                <p className="font-normal text-[#9c9797] text-base max-w-[80%]">
                  {item.description.split("\n\n").map((paragraph, i) => (
                    <React.Fragment key={i}>
                      {paragraph}
                      {i < item.description.split("\n\n").length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg z-10"></div>
            <img
              className="w-full h-[250px] object-cover rounded-lg"
              alt="Garden landscape"
              src="https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-11.png"
              loading="lazy"
              decoding="async"
            />
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[50px] bg-[#202e13] hover:bg-[#2d3e1e] rounded-none z-20">
                <span className="font-semibold text-white text-lg">
                  Contact Us
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="services" className="w-full bg-[#202e13] bg-opacity-87 py-10">
        <div className="px-4">
          <div className="mb-6">
            <h2 className="font-semibold text-[36px] text-right">
              <span className="text-white">SIMPLE STEPS FOR OUR </span>
              <span className="text-[#d6d6d6]">LANDSCAPE</span>
              <span className="text-white"> WORK</span>
            </h2>
            <div className="font-normal text-white text-lg text-right">
              [&nbsp;&nbsp; HOW IT WORKS&nbsp;&nbsp; ]
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`${step.align === 'right' ? 'text-right' : 'text-left'}`}
              >
                {step.hasButton ? (
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <h3 className="font-semibold text-[#202e13] text-[22px] mb-2 bg-white inline-block px-3 py-1 cursor-pointer hover:bg-gray-100">
                      {step.number} | {step.title}
                    </h3>
                  </Link>
                ) : (
                  <h3 className="font-semibold text-white text-[22px] mb-2 bg-transparent inline-block px-3 py-1">
                    {step.number} | {step.title}
                  </h3>
                )}
                <p className="font-normal text-[#b6b6b6] text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-ligth-gray py-10">
        <div className="px-4">
          <h2 className="font-semibold text-[36px]">
            <span className="text-[#202e13]">WHAT WE DO </span>
            <span className="text-[#979696]">AND FOR WHO</span>
          </h2>
          <div className="font-normal text-[#202e13] text-lg mb-6">
            [&nbsp;&nbsp; SERVICES&nbsp;&nbsp; ]
          </div>

          {/* Service Categories */}
          <div>
            {serviceCategories.map((service, index) => (
              <Link 
                key={index} 
                to="/services" 
                onClick={() => window.scrollTo(0, 0)} 
                className={`block ${index < serviceCategories.length - 1 ? "mb-8" : ""}`}
              >
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                  <img
                    className="w-full h-full object-cover"
                    alt={`${service.title} landscaping`}
                    src={service.image}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
                    <h3 className="font-semibold text-white text-4xl mb-4">
                      {service.title}
                    </h3>
                    <p className="font-normal text-[#f6f6f6] text-base px-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link 
              to="/services" 
              onClick={() => window.scrollTo(0, 0)}
            >
              <Button className="mx-auto block w-[200px] h-[50px] bg-[#202e13] hover:bg-[#2d3e1e] rounded-none">
                <span className="font-semibold text-white text-lg">
                  See All Services
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full bg-ligth-gray py-10">
        <div className="px-4">
          <div className="text-right mb-6">
            <h2 className="font-semibold text-[36px]">
              <span className="text-[#202e13]">CHECK OUT OUR </span>
              <span className="text-[#979696]">GALLERY</span>
            </h2>
            <div className="font-normal text-[#202e13] text-lg">
              [&nbsp;&nbsp; GALLERY&nbsp;&nbsp; ]
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-2/3">
              <img
                className="w-full h-[200px] object-cover rounded-lg"
                alt="Garden landscape"
                src="https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-21.png"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-1/3 relative">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg"></div>
              <img
                className="w-full h-[200px] object-cover rounded-lg"
                alt="Garden landscape"
                src="https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-22.png"
                loading="lazy"
                decoding="async"
              />
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full border border-solid border-[#202e13] flex items-center justify-center cursor-pointer hover:bg-white hover:bg-opacity-10 transition-colors">
                  <div className="font-normal text-[#202e13] text-[14px] text-center">
                    VIEW <br />
                    MORE
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-ligth-gray py-10">
        <div className="px-4">
          <div className="text-center mb-6">
            <div className="font-normal text-[#202e13] text-lg">
              [&nbsp;&nbsp; TESTIMONIALS&nbsp;&nbsp; ]
            </div>

            <div className="relative text-center">
              <p className="font-semibold text-lg mb-6 text-[#202e13] px-4">
                {formatTestimonialText(testimonials[currentTestimonial].text)}
              </p>

              <h4 className="font-semibold text-[#202e13] text-[22px]">
                {testimonials[currentTestimonial].author}
              </h4>
              {testimonials[currentTestimonial].position && (
                <p className="font-normal text-[#9c9797] text-lg">
                  {testimonials[currentTestimonial].position}
                </p>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-[#202e13] hover:text-[#2d3e1e] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#202e13] hover:text-[#2d3e1e] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#202e13]' : 'bg-[#9c9797]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[url('https://c.animaapp.com/mdii0hdzXe40MW/img/mountain-view-image.png')] bg-cover bg-center h-[250px] flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="px-4 text-white relative z-10 w-full">
          <h2 className="font-semibold text-white text-[36px] mb-6">
            READY TO TRANSFORM<br />
            YOUR GARDEN?
          </h2>

          <div className="flex justify-start">
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button className="w-[150px] h-[50px] bg-white hover:bg-gray-100 rounded-none">
              <span className="font-semibold text-[#202e13] text-lg">
                Contact Us
              </span>
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="contact" className="w-full py-10" style={{ backgroundColor: '#EEEEDE' }}>
        <div className="px-4">
          {/* Section Title */}
          <div className="mb-6">
            <h2 className="font-semibold text-[#202e13] text-[36px]">
              FREQUENTLY <span className="text-[#6e6e6e]">ASKED</span> QUESTIONS
            </h2>
            <div className="font-normal text-[#202e13] text-lg">
              [&nbsp;&nbsp; F.A.Q&nbsp;&nbsp; ]
            </div>
          </div>

          {/* FAQ Image */}
          <div className="mb-6">
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              alt="Landscaping showcase"
              src="https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-62.png"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full text-left">
              {faqQuestions.map((faq, index) => (
                <React.Fragment key={`faq-${index}`}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="py-3 font-semibold text-[#202e13] text-[16px] hover:no-underline text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-normal text-[#565656] text-base leading-[24px] text-left">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                  <Separator className="bg-[#202e13] opacity-20" />
                </React.Fragment>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative w-full py-8" style={{ backgroundColor: '#EAE9D5' }}>
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
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap"
                >
                  HOME
                </Link>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo(0, 0)}
                  className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap"
                >
                  SERVICES
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => window.scrollTo(0, 0)}
                  className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap"
                >
                  GALLERY
                </Link>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="font-['Inter',Helvetica] font-normal text-[#6f6f6f] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap"
                >
                  CONTACT
                </Link>
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
    </>
  );
};