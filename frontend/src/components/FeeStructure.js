import React, { useState, useEffect, useRef } from "react";
import { Calculator, DollarSign, Shield, CheckCircle } from "lucide-react";

const FeeStructure = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);
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

  const feeOptions = [
    {
      id: 1,
      title: "Percentage of Annual Salary",
      subtitle: "Flexible, Performance-Based",
      icon: Calculator,
      charges: "8%",
      engagement: "1,000 SAR per head",
      unit: "Sourced by Ariflex",
      benefits: [
        "Performance-aligned compensation",
        "Scalable with position level",
        "Risk-sharing approach",
        "Long-term partnership focus"
      ],
      description: "Ideal for executive positions with competitive compensation packages."
    },
    {
      id: 2,
      title: "Flat Fee per Hire",
      subtitle: "Predictable, Fixed Cost",
      icon: DollarSign,
      charges: "10,000 SAR",
      engagement: "1,000 SAR per head",
      unit: "Sourced by Ariflex",
      benefits: [
        "Transparent pricing structure",
        "Budget predictability",
        "No hidden costs",
        "Suitable for multiple hires"
      ],
      description: "Perfect for standardized positions and bulk recruitment needs."
    }
  ];

  const replacementTerms = [
    {
      period: "Within 90 days",
      compensation: "Free",
      description: "Complete free replacement offer"
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Fee Structure
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Transparent pricing with flexible options designed to align with your organizational needs and budget requirements.
            </p>
          </div>

          {/* Fee Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {feeOptions.map((option, index) => (
              <div 
                key={option.id}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 cursor-pointer hover:shadow-xl ${
                  selectedOption === option.id 
                    ? 'border-yellow-400 shadow-lg transform scale-105' 
                    : 'border-emerald-100 hover:border-emerald-200'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setSelectedOption(option.id)}
              >
                {selectedOption === option.id && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Selected Option
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    selectedOption === option.id ? 'bg-yellow-100' : 'bg-emerald-100'
                  }`}>
                    {React.createElement(option.icon, { className: `w-8 h-8 ${
                      selectedOption === option.id ? 'text-yellow-600' : 'text-emerald-700'
                    }` })}
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">{option.title}</h3>
                  <p className="text-emerald-600">{option.subtitle}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Charges:</span>
                      <span className="text-2xl font-bold text-emerald-900">{option.charges}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Engagement Fee:</span>
                      <span className="text-lg font-semibold text-yellow-600">{option.engagement}</span>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm text-gray-600">Unit: {option.unit}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100 mb-16">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">Important Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Option 1 Fee Calculation:</strong> Based on annual salary (basic salary + all cash allowances + any guaranteed and joining bonus, if any).
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700">
                      <strong>VAT Exclusive:</strong> All fees are exclusive of VAT as per Saudi regulations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Payment Terms:</strong> Recruitment fees are due on the candidate's official joining date.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Timeline Reference:</strong> All timelines refer to business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Replacement Terms */}
          <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Replacement Terms & Guarantee
                </h3>
                <p className="text-emerald-100 max-w-2xl mx-auto">
                  We stand behind our placements with comprehensive replacement guarantees to ensure your investment is protected.
                </p>
              </div>

              <div className="flex justify-center items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 max-w-md mx-auto">
                  <div className="text-4xl font-bold mb-4 text-green-400">
                    FREE
                  </div>
                  <div className="text-emerald-100 font-semibold mb-3 text-xl">Within 90 days</div>
                  <div className="text-emerald-200">Complete free replacement offer</div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 inline-block">
                  <p className="text-emerald-100 text-lg">
                    <strong className="text-yellow-400">Extended Coverage:</strong> Security checks, credential checks, and similar verifications are outside the reference-check SLA.
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

export default FeeStructure;
