import React, { useState, useEffect } from "react";
import { ChevronRight, Award, Users, Target } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Successful Placements" },
    { icon: Target, value: "95%", label: "Success Rate" },
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Main Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Commercial
              <span className="block text-yellow-400">Proposal</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-light text-emerald-100 mb-4">
              Bluemoon Marketing
            </div>
            
            <div className="text-xl text-yellow-300 font-medium mb-12">
              {currentYear}
            </div>

            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transforming organizations with top-tier executive search, outsourcing, 
              recruitment process outsourcing (RPO), and consultation services across 
              governmental, semi-governmental, and private sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-400 text-emerald-900 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Get Started
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => document.querySelector("#about").scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-emerald-900 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
              >
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;