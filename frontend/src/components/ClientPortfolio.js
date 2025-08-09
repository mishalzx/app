import React, { useState, useEffect, useRef } from "react";
import { Building, Award, Globe, TrendingUp } from "lucide-react";

const ClientPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredClient, setHoveredClient] = useState(null);
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

  const clients = [
    { name: "Bussma", arabic: "بصمة", sector: "Technology", description: "Leading digital transformation solutions" },
    { name: "SPCS Cybersecurity Partner", arabic: "", sector: "Security", description: "Comprehensive cybersecurity services" },
    { name: "Kaneen", arabic: "كنين", sector: "Real Estate", description: "Premier real estate development" },
    { name: "Geepas", arabic: "", sector: "Electronics", description: "Consumer electronics and appliances" },
    { name: "Nesto", arabic: "نستو", sector: "Retail", description: "Modern retail and hypermarket chain" },
    { name: "Axiom Telecom", arabic: "", sector: "Telecommunications", description: "Mobile and telecommunications solutions" },
    { name: "LuLu", arabic: "", sector: "Retail", description: "International hypermarket chain" },
    { name: "First Fix", arabic: "", sector: "Maintenance", description: "Professional maintenance services" },
    { name: "Landmark Group", arabic: "", sector: "Retail", description: "Multi-brand retail conglomerate" },
    { name: "Al-Aqeeq Schools", arabic: "مدارس العقيق", sector: "Education", description: "Premium educational institution" },
    { name: "Al-Asasyah", arabic: "الاساسية", sector: "Construction", description: "Infrastructure and construction" },
    { name: "Juice Time", arabic: "وقت العصير", sector: "F&B", description: "Fresh juice and healthy beverages" }
  ];

  const sectors = [
    { name: "Technology", count: 2, icon: Globe, color: "bg-blue-500" },
    { name: "Retail", count: 3, icon: Building, color: "bg-green-500" },
    { name: "Education", count: 2, icon: Award, color: "bg-purple-500" },
    { name: "Others", count: 5, icon: TrendingUp, color: "bg-orange-500" }
  ];

  return (
    <section id="clients" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Our Client Portfolio
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Trusted by leading organizations across diverse sectors throughout Saudi Arabia and the region.
            </p>
          </div>

          {/* Sector Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${sector.color} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(sector.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{sector.name}</h3>
                <p className="text-gray-600">{sector.count} Clients</p>
              </div>
            ))}
          </div>

          {/* Client Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {clients.map((client, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 border border-emerald-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredClient(index)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-emerald-900 mb-1 group-hover:text-emerald-700 transition-colors">
                      {client.name}
                    </h3>
                    {client.arabic && (
                      <p className="text-emerald-600 text-sm mb-2" dir="rtl">{client.arabic}</p>
                    )}
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                      {client.sector}
                    </span>
                  </div>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full group-hover:bg-yellow-500 transition-colors"></div>
                </div>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  hoveredClient === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Partnership Success Metrics
                </h3>
                <p className="text-emerald-100 max-w-2xl mx-auto">
                  Building lasting relationships with clients across diverse industries throughout the region.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">12+</div>
                  <div className="text-emerald-100 font-medium">Trusted Clients</div>
                  <div className="text-emerald-200 text-sm">Active Partnerships</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">8</div>
                  <div className="text-emerald-100 font-medium">Industry Sectors</div>
                  <div className="text-emerald-200 text-sm">Diverse Portfolio</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                  <div className="text-emerald-100 font-medium">Client Retention</div>
                  <div className="text-emerald-200 text-sm">Long-term Success</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-emerald-100 font-medium">Satisfaction Rate</div>
                  <div className="text-emerald-200 text-sm">Quality Assurance</div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 inline-block">
                  <p className="text-emerald-100 text-lg">
                    <strong className="text-yellow-400">"Partnership Excellence"</strong> - 
                    Building strategic relationships that drive organizational success across the Kingdom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortfolio;