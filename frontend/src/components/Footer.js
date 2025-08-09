import React from "react";
import { Mail, Phone, MapPin, Award, Users, Target } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Executive Search", href: "#services" },
        { name: "Outsourcing", href: "#services" },
        { name: "RPO Services", href: "#services" },
        { name: "Consultation", href: "#services" }
      ]
    },
    {
      title: "Process",
      links: [
        { name: "REACH Methodology", href: "#reach" },
        { name: "Recruitment Process", href: "#process" },
        { name: "Quality Assurance", href: "#process" },
        { name: "Follow-up Support", href: "#process" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#about" },
        { name: "Why Choose Us", href: "#services" },
        { name: "Client Portfolio", href: "#clients" },
        { name: "Success Stories", href: "#clients" }
      ]
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-emerald-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_5f2f4da9-f311-4324-ba20-5edbfc7b4dcf/artifacts/3q3yn9wl_Ariflex%20Logo-01.png"
                alt="Ariflex Logo"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Ariflex</h3>
            </div>
            <p className="text-emerald-100 leading-relaxed mb-6">
              A Saudi-grown company providing top‑tier executive search, outsourcing, 
              recruitment process outsourcing (RPO), and consultation services across 
              governmental, semi‑governmental, and private sectors.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <a href="mailto:ahmed@ariflex.co" className="text-emerald-100 hover:text-yellow-400 transition-colors">
                  ahmed@ariflex.co
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <a href="tel:+966540039965" className="text-emerald-100 hover:text-yellow-400 transition-colors">
                  +966 54 003 9965
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-emerald-100">Saudi Arabia</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-emerald-200 hover:text-yellow-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-emerald-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-yellow-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-emerald-200">Years of Excellence</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-yellow-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-emerald-200">Successful Placements</div>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-12 h-12 text-yellow-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-emerald-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-emerald-200 text-sm mb-4 md:mb-0">
              © {currentYear} Ariflex. All rights reserved. Commercial Proposal - Bluemoon Marketing.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => scrollToSection("#about")}
                className="text-emerald-200 hover:text-yellow-400 transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("#services")}
                className="text-emerald-200 hover:text-yellow-400 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("#contact")}
                className="text-emerald-200 hover:text-yellow-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-400 text-emerald-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;