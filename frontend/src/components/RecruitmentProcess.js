import React, { useState, useEffect, useRef } from "react";
import { FileSearch, Users, Shield, Brain, Handshake, MessageSquare, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const RecruitmentProcess = () => {
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

  const processSteps = [
    {
      id: "understanding",
      icon: FileSearch,
      title: "Understanding Requirements",
      duration: "Initial Phase",
      description: "The first crucial step that ensures the hiring process begins on the right track.",
      details: [
        "In-depth consultation to understand your organizational culture and needs",
        "Detailed role analysis and requirements gathering",
        "Stakeholder alignment and expectation setting",
        "Timeline establishment and milestone planning"
      ],
      note: "Clients must disclose the names of any previously contacted candidates three days before sourcing to avoid recurrences."
    },
    {
      id: "sourcing",
      icon: Users,
      title: "Sourcing",
      duration: "5-10 Business Days",
      description: "Requires highly skilled and specialized headhunters to navigate a global talent pool.",
      details: [
        "Global talent pool navigation and identification",
        "Specialized headhunting for niche positions",
        "Advanced sourcing techniques and tools",
        "Candidate pre-qualification and initial assessment"
      ],
      note: "Delivery times: 5 business days for professionals; 10 business days for executives. By narrowing the search to three candidates, interviews are conducted as quickly and efficiently as possible."
    },
    {
      id: "reference",
      icon: Shield,
      title: "Reference Check",
      duration: "2 Business Days",
      description: "Our 360‑degree assessment involves contacting all recent employers, line managers, and colleagues.",
      details: [
        "Comprehensive background verification",
        "Previous employer and colleague interviews",
        "Performance history validation",
        "Cultural fit assessment"
      ],
      note: "Completion time: 2 business days (excludes security checks, credential checks, etc.)."
    },
    {
      id: "assessment",
      icon: Brain,
      title: "Leadership Assessment Test",
      duration: "4 Business Days",
      description: "We utilize tests from only the best globally accredited organizations.",
      details: [
        "Behavioral assessment and profiling",
        "Psychometric evaluation",
        "Leadership capability testing",
        "Role-specific competency analysis"
      ],
      note: "Ensures candidates fit the role's behavioral, psychometric, and leadership requirements."
    },
    {
      id: "negotiation",
      icon: Handshake,
      title: "Negotiation",
      duration: "3 Business Days",
      description: "Professional handling of offer negotiations to ensure mutual satisfaction.",
      details: [
        "Salary and benefits negotiation",
        "Terms and conditions alignment",
        "Expectation management for both parties",
        "Final offer preparation and presentation"
      ],
      note: "Completion time: 3 business days."
    },
    {
      id: "interviews",
      icon: MessageSquare,
      title: "Conducting Interviews & Follow‑up",
      duration: "Ongoing",
      description: "This phase is even more demanding than the search itself, requiring utmost care and focus.",
      details: [
        "Structured interview process coordination",
        "Candidate and client feedback management",
        "Long-term relationship building",
        "Post-placement support and follow-up"
      ],
      note: "A significant part of our role is building long‑lasting strategic partnerships and remaining in contact with both candidates and clients."
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              The Recruitment Process
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A comprehensive overview of our systematic approach to talent acquisition, 
              designed for efficiency and excellence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-emerald-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <Clock className="w-12 h-12 text-yellow-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Process Timeline</h3>
                  <p className="text-emerald-100 mb-6">
                    Our structured timeline ensures efficient delivery while maintaining quality standards.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-200">Professionals</span>
                      <span className="text-yellow-400 font-semibold">5 Business Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-200">Executives</span>
                      <span className="text-yellow-400 font-semibold">10 Business Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-200">Assessment</span>
                      <span className="text-yellow-400 font-semibold">4 Business Days</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Quality Assurance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">360-degree candidate assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Globally accredited testing organizations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Comprehensive reference checks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Long-term partnership focus</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {processSteps.map((step, index) => (
                  <AccordionItem 
                    key={step.id} 
                    value={step.id}
                    className={`border border-emerald-100 rounded-2xl mb-4 overflow-hidden transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-emerald-50 transition-colors [&[data-state=open]]:bg-emerald-50">
                      <div className="flex items-center space-x-4 text-left">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          {React.createElement(step.icon, { className: "w-6 h-6 text-emerald-700" })}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-emerald-900">{step.title}</h4>
                          <p className="text-sm text-yellow-600 font-medium">{step.duration}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="mt-4 space-y-4">
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                        
                        <div className="space-y-2">
                          <h5 className="font-semibold text-emerald-900">Key Activities:</h5>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {step.note && (
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                            <p className="text-sm text-yellow-800 font-medium">
                              <strong>Note:</strong> {step.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Process Flow Visualization */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-emerald-100">
            <h3 className="text-3xl font-bold text-emerald-900 text-center mb-12">
              End-to-End Process Flow
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-100 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-7 h-7 text-emerald-700 group-hover:text-yellow-600 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-emerald-900 mb-1">{step.title}</h4>
                  <p className="text-xs text-yellow-600">{step.duration}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <div className="w-full h-0.5 bg-emerald-200"></div>
                      <div className="absolute right-0 top-0 w-2 h-2 bg-emerald-300 rounded-full transform translate-x-1 -translate-y-0.75"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;