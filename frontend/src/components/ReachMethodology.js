import React, { useState, useEffect, useRef } from "react";
import { Search, Users, Target, CheckCircle, UserCheck, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const ReachMethodology = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const reachSteps = [
    {
      letter: "R",
      title: "Research",
      subtitle: "Understanding Your Needs",
      icon: Search,
      color: "bg-red-500",
      description: "A crucial step and opportunity to meet our clients, discover all about their organization, and understand their needs.",
      details: [
        "Establish roles and relationships",
        "Develop role description",
        "Build estimated timeline",
        "Align with all stakeholders",
        "Create search and pool strategies"
      ]
    },
    {
      letter: "E",
      title: "Engage",
      subtitle: "Sourcing & Screening",
      icon: Users,
      color: "bg-blue-500",
      description: "The stage at which our team begins sourcing, screening, and interviewing candidates.",
      details: [
        "Facilitate stakeholder communications",
        "Source targeted talent",
        "Conduct initial screening",
        "Compare and contrast top prospects",
        "Interview and evaluate candidates",
        "Finalize a shortlist"
      ]
    },
    {
      letter: "A",
      title: "Appraise",
      subtitle: "Evaluation & Assessment",
      icon: Target,
      color: "bg-yellow-500",
      description: "The mid‑point in the recruitment journey, where we score, compare, and select the final candidates.",
      details: [
        "Present to client",
        "Client conducts interview rounds",
        "Perform additional assessments",
        "Contact references",
        "Candidate tours if needed",
        "Client determines top finalists"
      ]
    },
    {
      letter: "C",
      title: "Choose",
      subtitle: "Selection & Negotiation",
      icon: CheckCircle,
      color: "bg-green-500",
      description: "The part where we accept candidates and start preparing an offer based on negotiations.",
      details: [
        "Client makes the final decision",
        "Negotiations",
        "Finalization of offer",
        "Delivery of verbal & formal offer",
        "Candidate accepts offer"
      ]
    },
    {
      letter: "H",
      title: "Hire",
      subtitle: "Onboarding Success",
      icon: UserCheck,
      color: "bg-purple-500",
      description: "The final stage of the process during which we conduct pre‑onboarding and onboarding before the candidate starts their new position.",
      details: [
        "Connect the organization's HR department with new hire",
        "Formulate pre‑onboarding plan",
        "Conduct engagement survey",
        "Schedule post‑hire communications"
      ]
    }
  ];

  return (
    <section id="reach" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              The REACH Methodology
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our highly efficient and reliable approach revolves around our carefully developed 
              <strong> REACH</strong> methodology, ensuring seamless recruitment from start to finish.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {reachSteps.map((step, index) => (
                <Button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  variant={activeStep === index ? "default" : "outline"}
                  className={`px-6 py-3 transition-all duration-300 ${
                    activeStep === index 
                      ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg scale-105" 
                      : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  }`}
                >
                  <span className="font-bold text-lg mr-2">{step.letter}</span>
                  {step.title}
                </Button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${reachSteps[activeStep].color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                        {React.createElement(reachSteps[activeStep].icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-emerald-900">
                          {reachSteps[activeStep].title}
                        </h3>
                        <p className="text-lg text-emerald-700">{reachSteps[activeStep].subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {reachSteps[activeStep].description}
                    </p>

                    <div className="flex justify-between">
                      <Button
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        variant="outline"
                        className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 disabled:opacity-50"
                      >
                        Previous
                      </Button>
                      <Button
                        onClick={() => setActiveStep(Math.min(reachSteps.length - 1, activeStep + 1))}
                        disabled={activeStep === reachSteps.length - 1}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white"
                      >
                        Next
                        <ChevronRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-emerald-900 mb-4">Key Activities</h4>
                    <ul className="space-y-3">
                      {reachSteps[activeStep].details.map((detail, index) => (
                        <li 
                          key={index} 
                          className={`flex items-start transition-all duration-300 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white text-center mb-12">
                How We Execute REACH
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {reachSteps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-bold text-white">{step.letter}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-emerald-200 text-sm">{step.subtitle}</p>
                    
                    {index < reachSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full">
                        <div className="w-full h-0.5 bg-yellow-500/50"></div>
                        <div className="absolute right-0 top-0 w-2 h-2 bg-yellow-500 rounded-full transform translate-x-1 -translate-y-0.75"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachMethodology;