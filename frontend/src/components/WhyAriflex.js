import React, { useState, useEffect, useRef } from "react";
import { Clock, TrendingUp, Shield, Star } from "lucide-react";

const WhyAriflex = () => {
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

  const benefits = [
    {
      icon: Clock,
      title: "Over a Decade of Experience",
      description: "Navigate complex landscapes with confidence backed by 10+ years of industry expertise."
    },
    {
      icon: TrendingUp,
      title: "Drive Business Growth",
      description: "Our strategic approach enables businesses to reach new heights and achieve sustainable growth."
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Build long-lasting relationships with a recruitment partner you can depend on."
    },
    {
      icon: Star,
      title: "Strategic Focus",
      description: "Focus on strategic decision-making while we handle time-consuming talent acquisition."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Why Choose Ariflex
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Over a decade of experience in this industry enables us to navigate the complex 
              landscape and drive businesses to new heights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional team meeting"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-emerald-900/20 rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold text-emerald-900 mb-2">Our Promise</h4>
                <p className="text-gray-700">
                  With Ariflex as a trusted recruitment partner, organizations can dedicate more 
                  precious time to strategic decision‑making while we take care of the 
                  time‑consuming aspects of talent acquisition.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 hover:scale-105 group ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-100 transition-colors">
                      <benefit.icon className="w-6 h-6 text-emerald-700 group-hover:text-yellow-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-emerald-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-8">
                Trusted by Organizations Across Saudi Arabia
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">3</div>
                  <div className="text-emerald-100">Sectors Served</div>
                  <div className="text-sm text-emerald-200">Governmental, Semi-Governmental, Private</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
                  <div className="text-emerald-100">Years Experience</div>
                  <div className="text-sm text-emerald-200">Industry Leadership</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-emerald-100">Commitment</div>
                  <div className="text-sm text-emerald-200">To Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAriflex;