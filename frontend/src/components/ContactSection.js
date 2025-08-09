import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ahmed@ariflex.co",
      description: "Get in touch via email"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+966 54 003 9965",
      description: "Call us directly"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Saudi Arabia",
      description: "Serving the Kingdom"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Sun - Thu: 9AM - 6PM",
      description: "Saudi Standard Time"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Connect with Us
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your recruitment process? Let's discuss how Ariflex can help you find the perfect leadership talent for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <p className="text-emerald-100 mb-8 leading-relaxed">
                    We're here to answer your questions and discuss how our REACH methodology can transform your talent acquisition strategy.
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div 
                        key={index}
                        className={`flex items-start space-x-4 transition-all duration-300 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                        }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          {React.createElement(info.icon, { className: "w-6 h-6 text-yellow-400" })}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-yellow-400 font-medium">{info.value}</p>
                          <p className="text-emerald-200 text-sm">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Why Choose Ariflex?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-900 mb-1">24h</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-900 mb-1">10+</div>
                    <div className="text-gray-600 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-900 mb-1">95%</div>
                    <div className="text-gray-600 text-sm">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-900 mb-1">100%</div>
                    <div className="text-gray-600 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thank You Note */}
            <div className="bg-gradient-to-br from-emerald-50 to-yellow-50 rounded-3xl p-8 md:p-12 border border-emerald-100 flex items-center">
              <div className="text-center w-full">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl font-bold text-emerald-900 mb-6">
                  Thank You for Your Trust
                </h3>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  We appreciate the opportunity to present our comprehensive recruitment solutions for Bluemoon Marketing. 
                  Your success is our commitment.
                </p>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200">
                  <p className="text-lg text-emerald-800 font-medium italic">
                    "Together, we build exceptional teams that drive organizational excellence and achieve remarkable results."
                  </p>
                  <div className="mt-4 text-emerald-600 font-semibold">
                    - Team Ariflex
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;