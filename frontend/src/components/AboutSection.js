import React, { useState, useEffect, useRef } from "react";
import { Building2, Users, Award, Globe } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Users,
      title: "Executive Search",
      description: "Specialized in identifying and recruiting top-tier leadership talent for critical positions."
    },
    {
      icon: Building2,
      title: "Outsourcing",
      description: "Comprehensive outsourcing solutions to streamline your operations and reduce costs."
    },
    {
      icon: Award,
      title: "RPO Services",
      description: "Full recruitment process outsourcing to manage your entire talent acquisition lifecycle."
    },
    {
      icon: Globe,
      title: "Consultation",
      description: "Strategic HR consultation to optimize your organizational structure and processes."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              About Ariflex
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We are a Saudi-grown company, founded and run by visionary individuals whose aim is to 
              provide the region's organizations with top‑tier services across multiple sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Operating within <strong>governmental, semi‑governmental, and private</strong> sectors, 
                we specialize in hiring <strong>leadership roles</strong> that drive organizational success.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive approach ensures that every placement aligns with your strategic 
                objectives and cultural values, creating lasting partnerships that benefit all stakeholders.
              </p>
            </div>

            <div className="bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Our Expertise</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Leadership & Executive Recruitment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Multi-Sector Experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Strategic HR Consultation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Comprehensive Outsourcing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 hover:-translate-y-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                  <service.icon className="w-6 h-6 text-emerald-700 group-hover:text-yellow-600 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-emerald-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;