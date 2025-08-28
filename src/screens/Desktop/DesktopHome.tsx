import React from "react";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { trackPhoneClick } from "../../utils/airtable";

export const DesktopHome = (): JSX.Element => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  // Navigation items
  const navItems = [
    { text: "HOME", href: "/" },
    { text: "SERVICES", href: "/services" },
    { text: "GALLERY", href: "/gallery" },
    { text: "ABOUT", href: "/about" },
    { text: "CONTACT", href: "/contact" },
  ];

  // What makes us different cards
  const differentiators = [
    {
      title: "Skin In The Game",
      description:
        "We have been doing this for the past 20+ years. For ourselves and other families across Sacramento.",
    },
    {
      title: "We're Family",
      description:
        "My sons and I work together.\n\nSo I know you're getting the best of the best garden and team.",
    },
    {
      title: "Easy Maintenance",
      description:
        "We make your garden look after itself, we also explain the best way to maintain it yourself or we maintain it for you.",
    },
    {
      title: "Creative Collaboration",
      description:
        "We continuously ensure you're happy with the design and the work so it's not just a nice garden but your dream garden.",
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Free Estimate",
      description:
        "In the initial step, I meet you and we have a relaxed conversation about your garden vision and preferences.",
      textColor: "text-[#202e13]",
      bgColor: "bg-white",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our team of experts plans out a custom garden design that aligns with what we discussed, your desires and your spaces characteristics.",
      textColor: "text-white",
      bgColor: "bg-transparent",
    },
    {
      number: "03",
      title: "Review & Improvement",
      description:
        "We show the design to you for review. Once approved, we move forward to start the plan for construction.",
      textColor: "text-white",
      bgColor: "bg-transparent",
    },
    {
      number: "04",
      title: "Build & Maintain",
      description:
        "We build out your dream garden and constantly get your feedback, then we explain how to maintain it or we maintain it.",
      textColor: "text-white",
      bgColor: "bg-transparent",
    },
  ];

  // Service categories
  const serviceCategories = [
    {
      title: "LANDSCAPING",
      description: "Designing a garden which makes you spend more time outdoors with the family and loved ones",
      image: "https://ik.imagekit.io/lantz/Sabas/Screenshot%202025-08-28%20at%2011.41.03%E2%80%AFAM.png",
    },
    {
      title: "LAWN CARE",
      description:
        "A garden you don't have to worry about so you can spend your time with the family and loved ones. We do the general maintenance and anything else your garden might need like fertilisation, bush trimming, etc.",
      image: "https://ik.imagekit.io/lantz/Sabas/Gardener.jpg?updatedAt=1752625729518",
    },
    {
      title: "OTHER SERVICES",
      description:
        "We have a wide variety of services, feel free to check them out, we match the services to meet your needs so feel free to ask about them or others.",
      image: "https://ik.imagekit.io/lantz/Sabas/Screenshot%202025-08-28%20at%2011.41.55%E2%80%AFAM.png",
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
          className="w-full h-[954px] object-cover"
          alt="Garden landscape"
          src="https://ik.imagekit.io/lantz/Sabas/Screenshot%202025-08-12%20at%202.00.34%E2%80%AFPM.png"
          loading="eager"
          decoding="async"
        />

        {/* Header */}
        <header className="absolute top-0 left-0 w-full z-10">
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
        </header>

        {/* Hero Text */}
        <div className="absolute w-full top-[273px] text-center z-10">
          <h1 className="font-semibold text-light-gray text-8xl mb-4">
            LANDSCAPING
          </h1>
          <h2 className="font-normal text-white text-7xl mb-8">
            AND LAWN CARE
          </h2>

          <p className="font-normal text-[#d6d6d6] text-xl mx-auto max-w-[600px]">
            We've been doing this for the last 20+ years, so you can have your dream garden and spend more time enjoying your garden instead of working on it.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="absolute flex items-center justify-center space-x-8 bottom-[250px] left-0 right-0 z-10">
          <Link to="/contact">
            <Button className="h-[75px] w-[261px] bg-white hover:bg-gray-100 rounded-none">
              <span className="font-semibold text-[#202e13] text-2xl">
                Free Estimate
              </span>
            </Button>
          </Link>

          <a 
            href="tel:+19162544538" 
            className="font-bold text-white text-2xl underline"
            onClick={() => {
              (window as any).gtag_report_conversion && (window as any).gtag_report_conversion();
              trackPhoneClick({
                phoneNumber: "(916) 254-4538",
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                page: "Desktop Home"
              });
            }}
          >
            (916) 254-4538
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-ligth-gray py-16">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center mb-12">
            <div className="font-normal text-[#202e13] text-2xl">
              [&nbsp;&nbsp; SERVICES&nbsp;&nbsp; ]
            </div>
            <Link 
              to="/services" 
              onClick={() => window.scrollTo(0, 0)}
              className="font-bold text-[#202e13] text-2xl underline hover:opacity-80 transition-opacity"
            >
              See More Services
            </Link>
          </div>

          {/* Service Categories */}
          <div className="flex justify-between gap-6">
            {serviceCategories.map((service, index) => (
              <Link 
                key={index} 
                to="/services" 
                onClick={() => window.scrollTo(0, 0)}
                className="relative w-1/3 h-[600px] cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg z-10"></div>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  alt={`${service.title} landscaping`}
                  src={service.image}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-[80px] left-0 w-full text-center px-4 z-20">
                  <h3 className="font-semibold text-white text-5xl mb-4">
                    {service.title}
                  </h3>
                  <p className="font-normal text-[#f6f6f6] text-xl">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="services" className="w-full bg-[#202e13] bg-opacity-87 py-16">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center mb-12">
            <div className="font-normal text-white text-2xl">
              [&nbsp;&nbsp; HOW IT WORKS&nbsp;&nbsp; ]
            </div>
            <h2 className="font-semibold text-[60px] text-right">
              <span className="text-white">SIMPLE STEPS FOR OUR </span>
              <span className="text-[#d6d6d6]">LANDSCAPE</span>
              <span className="text-white"> WORK</span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-16">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-transparent border-none shadow-none"
              >
                <CardContent className="p-0">
                  <h3
                    className={`font-semibold ${step.textColor} text-[28px] mb-4 ${step.bgColor} inline-block px-4 py-2 ${step.number === '01' ? 'cursor-pointer hover:bg-gray-100' : ''}`}
                    onClick={step.number === '01' ? () => { window.location.href = '/contact'; window.scrollTo(0, 0); } : undefined}
                  >
                    {step.number} | {step.title}
                  </h3>
                  <p className="font-normal text-[#b6b6b6] text-xl">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lawn Care How It Works Section */}
      <section className="w-full bg-ligth-gray py-16">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-semibold text-[60px]">
              <span className="text-[#202e13]">SIMPLE STEPS FOR OUR </span>
              <span className="text-[#979696]">LAWN CARE</span>
            </h2>
            <div className="font-normal text-[#202e13] text-2xl">
              [&nbsp;&nbsp; HOW IT WORKS&nbsp;&nbsp; ]
            </div>
          </div>

          {/* Lawn Care Process Steps */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-16">
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <h3 className="font-semibold text-white text-[28px] mb-4 bg-[#202e13] inline-block px-4 py-2 cursor-pointer hover:bg-[#1a2510]"
                    onClick={() => { window.location.href = '/contact'; window.scrollTo(0, 0); }}>
                  01 | Free Estimate
                </h3>
                <p className="font-normal text-[#6f6f6f] text-xl">
                  We have a relaxed conversation about your garden's needs, and then we match the pricing and services to your needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <h3 className="font-semibold text-[#202e13] text-[28px] mb-4">
                  02 | We Start
                </h3>
                <p className="font-normal text-[#6f6f6f] text-xl">
                  We start maintaining your garden on the day and time you chose.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <h3 className="font-semibold text-[#202e13] text-[28px] mb-4">
                  03 | Relax
                </h3>
                <p className="font-normal text-[#6f6f6f] text-xl">
                  We'll be done in no time, so you can relax and spend your time elsewhere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-0">
                <h3 className="font-semibold text-[#202e13] text-[28px] mb-4">
                  04 | See You Soon
                </h3>
                <p className="font-normal text-[#6f6f6f] text-xl">
                  If you choose for us to come repeatedly then you can expect to see us then, and if you have any questions about gardening in the meantime, I would love to answer them and help :)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="w-full bg-[#202e13] py-16">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center mb-12">
            <div className="font-normal text-white text-2xl">
              [&nbsp;&nbsp; ABOUT US&nbsp;&nbsp; ]
            </div>
            <h2 className="font-semibold text-[60px] text-right">
              <span className="text-white">WHAT MAKES US </span>
              <span className="text-[#979696]">DIFFERENT</span>
              <span className="text-white">?</span>
            </h2>
          </div>

          <div className="flex">
            <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-12">
              {differentiators.map((item, index) => (
                <Card
                  key={index}
                  className="bg-transparent border-none shadow-none"
                >
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-white text-[28px] mb-4">
                      {item.title}
                    </h3>
                    <p className="font-normal text-white text-xl">
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
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="w-1/3 pl-8">
              <img
                className="w-full h-[400px] object-cover rounded-lg"
                alt="Garden landscape"
                src="https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-11.png"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button className="mt-12 w-[250px] h-[60px] bg-white hover:bg-gray-100 rounded-none">
              <span className="font-semibold text-[#202e13] text-[22px]">
                Contact Us
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full bg-ligth-gray py-16">
        <div className="container mx-auto px-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-semibold text-[60px] text-left">
              <span className="text-[#202e13]">CHECK OUT OUR </span>
              <span className="text-[#9c9797]">GALLERY</span>
            </h2>
            <div className="font-normal text-[#202e13] text-2xl">
              [&nbsp;&nbsp; GALLERY&nbsp;&nbsp; ]
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-3/4">
              <div className="relative">
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg z-10"></div>
              <img
                className="w-full h-[500px] object-cover rounded-lg"
                alt="Garden landscape"
                src="https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-21.png"
                loading="lazy"
                decoding="async"
              />
              </div>
            </div>
            <div className="w-1/4">
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
                <div className="relative">
                  <img
                    className="w-full h-[500px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    alt="Garden landscape"
                    src="https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-22.png"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-[100px] h-[100px] rounded-full border-2 border-solid border-[#202e13] bg-white bg-opacity-10 flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition-colors">
                      <div className="font-normal text-[#202e13] text-[16px] text-center font-semibold">
                        VIEW<br />
                        MORE
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-ligth-gray py-16">
        <div className="container mx-auto px-10">
          <div className="text-center mb-8">
            <div className="font-normal text-[#202e13] text-2xl">
              [&nbsp;&nbsp; TESTIMONIALS&nbsp;&nbsp; ]
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="max-w-4xl text-center">
              <p className="font-semibold text-2xl mb-8 text-[#202e13]">
                {formatTestimonialText(testimonials[currentTestimonial].text)}
              </p>

              <h4 className="font-semibold text-[#202e13] text-[26px]">
                {testimonials[currentTestimonial].author}
              </h4>
              {testimonials[currentTestimonial].position && (
                <p className="font-normal text-[#9c9797] text-[22px]">
                  {testimonials[currentTestimonial].position}
                </p>
              )}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-[#202e13] hover:text-[#2d3e1e] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-[#202e13] hover:text-[#2d3e1e] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#202e13]' : 'bg-[#9c9797]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[url('https://c.animaapp.com/mdii0hdzXe40MW/img/mountain-view-image.png')] bg-cover bg-center h-[300px] flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="px-10 text-white relative z-10">
          <h2 className="font-semibold text-white text-[48px] mb-8">
            READY TO TRANSFORM<br />
            YOUR GARDEN?
          </h2>

          <Link to="/contact">
            <Button className="w-[180px] h-[60px] bg-white hover:bg-gray-100 rounded-none">
              <span className="font-semibold text-[#202e13] text-xl">
                Contact Us
              </span>
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="contact" className="w-full py-12" style={{ backgroundColor: '#EEEEDE' }}>
        <div className="container mx-auto px-10">
          {/* Section Title */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-semibold text-[#202e13] text-[42px]">
              FREQUENTLY <span className="text-[#6e6e6e]">ASKED</span> QUESTIONS
            </h2>
            <div className="font-normal text-[#202e13] text-2xl">
              [&nbsp;&nbsp; F.A.Q&nbsp;&nbsp; ]
            </div>
          </div>

          {/* FAQ Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Image */}
            <div className="md:w-[400px]">
              <img
                className="w-full h-[400px] object-cover rounded-lg"
                alt="Landscaping showcase"
                src="https://c.animaapp.com/mdii0hdzXe40MW/img/rectangle-62.png"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right side - FAQ */}
            <div className="flex-1">
              <Accordion type="single" collapsible className="w-full">
                {faqQuestions.map((faq, index) => (
                  <React.Fragment key={`faq-${index}`}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-none"
                    >
                      <AccordionTrigger className="py-4 font-semibold text-[#202e13] text-[18px] hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-normal text-[#565656] text-lg leading-[30px]">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                    <Separator className="bg-[#202e13] opacity-20" />
                  </React.Fragment>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-12" style={{ backgroundColor: '#EAE9D5' }}>
        <div className="container mx-auto px-10">
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
    </>
  );
};