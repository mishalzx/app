import React, { useState, useEffect, useRef } from "react";
import { Download, Users, Building, Award } from "lucide-react";
import { Button } from "./ui/button";

const OrgStructure = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const sectionRef = useRef(null);
  const chartRef = useRef(null);

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

  const orgStructure = {
    executive: [
      { id: 'ceo', name: 'CEO', salary: '40k', count: 1, reports: 'Board / Owners' },
      { id: 'cos', name: 'Chief of Staff', salary: '', count: 1, reports: 'CEO' },
      { id: 'hr', name: 'HR Manager', salary: '', count: 1, reports: 'CEO' },
      { id: 'sr-accountant', name: 'Senior Accountant', salary: '', count: 1, reports: 'CEO' },
      { id: 'accountant', name: 'Accountant', salary: '', count: 1, reports: 'Senior Accountant' }
    ],
    creative: [
      { id: 'art-director', name: 'Art Director', salary: '', count: 1, reports: 'CEO' },
      { id: 'graphic-designers', name: 'Graphic Designers', salary: '', count: 4, reports: 'Art Director' },
      { id: 'animator', name: 'Animator', salary: '', count: 1, reports: 'Art Director' },
      { id: 'content-creators', name: 'Content Creators', salary: '', count: 2, reports: 'Art Director' },
      { id: 'content-writers-bil', name: 'Content Writers (Bilingual)', salary: '', count: 2, reports: 'Art Director' },
      { id: 'content-writers-eng', name: 'Content Writers (English)', salary: '', count: 2, reports: 'Art Director' }
    ],
    commercial: [
      { id: 'head-cs-digital', name: 'Head of Client Services & Digital', salary: '', count: 1, reports: 'CEO' },
      { id: 'smm-managers', name: 'SMM / Account Managers', salary: '', count: 4, reports: 'Head of CS & Digital' },
      { id: 'creative-managers', name: 'Creative Account Managers', salary: '', count: 2, reports: 'Head of CS & Digital' },
      { id: 'pr-managers', name: 'PR / Comms Account Managers', salary: '', count: 2, reports: 'Head of CS & Digital' }
    ],
    digital: [
      { id: 'community-managers', name: 'Community Managers', salary: '', count: 5, reports: 'Head of CS & Digital' },
      { id: 'regional-lead', name: 'Regional Lead (Hail)', salary: '', count: 1, reports: 'Head of CS & Digital' },
      { id: 'social-analysts', name: 'Social Media Analysts', salary: '', count: 2, reports: 'Head of CS & Digital' },
      { id: 'media-planner', name: 'Digital Media Planner', salary: '', count: 1, reports: 'Head of CS & Digital' }
    ]
  };

  const departments = [
    { key: 'executive', name: 'Executive Layer', icon: Building, total: 5, color: 'bg-blue-600' },
    { key: 'creative', name: 'Creative Department', icon: Award, total: 12, color: 'bg-indigo-600' },
    { key: 'commercial', name: 'Commercial & Digital', icon: Users, total: 9, color: 'bg-blue-700' },
    { key: 'digital', name: 'Digital Department', icon: Users, total: 9, color: 'bg-blue-800' }
  ];

  const togglePosition = (positionId) => {
    setSelectedPositions(prev => 
      prev.includes(positionId) 
        ? prev.filter(id => id !== positionId)
        : [...prev, positionId]
    );
  };

  const downloadChart = async () => {
    if (!chartRef.current) return;

    try {
      // Create a more detailed content for download
      const selectedDetails = selectedPositions.map(id => {
        const allPositions = [...orgStructure.executive, ...orgStructure.creative, ...orgStructure.commercial, ...orgStructure.digital];
        return allPositions.find(pos => pos.id === id);
      }).filter(Boolean);

      const content = `
        Bluemoon Marketing - Organizational Structure
        Location: Hail, Saudi Arabia
        
        SELECTED POSITIONS (${selectedPositions.length}):
        ${selectedDetails.map(pos => `• ${pos.name} ${pos.count > 1 ? `(×${pos.count})` : ''} - Reports to: ${pos.reports}`).join('\n')}
        
        COMPLETE STRUCTURE:
        Total FTE: ~34-35
        
        Executive Layer (5):
        ${orgStructure.executive.map(pos => `• ${pos.name} ${pos.count > 1 ? `(×${pos.count})` : ''}`).join('\n')}
        
        Creative Department (12):
        ${orgStructure.creative.map(pos => `• ${pos.name} ${pos.count > 1 ? `(×${pos.count})` : ''}`).join('\n')}
        
        Commercial & Digital (9):
        ${orgStructure.commercial.map(pos => `• ${pos.name} ${pos.count > 1 ? `(×${pos.count})` : ''}`).join('\n')}
        
        Digital Department (8-9):
        ${orgStructure.digital.map(pos => `• ${pos.name} ${pos.count > 1 ? `(×${pos.count})` : ''}`).join('\n')}
      `;

      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Bluemoon_Org_Structure_Selected_${selectedPositions.length}_positions.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <section id="organization" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Organizational Structure
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
              <strong>For Bluemoon Marketing</strong> - Corporate Structure (Saudi Arabia)
            </p>
            <p className="text-lg text-blue-700 font-medium">
              Location: Hail, Saudi Arabia | Total FTE: ~34-35
            </p>
          </div>

          {/* Selection Summary */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-12 border border-blue-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Selected Positions</h3>
                <p className="text-blue-700">
                  {selectedPositions.length} position{selectedPositions.length !== 1 ? 's' : ''} selected
                </p>
              </div>
              <Button
                onClick={downloadChart}
                disabled={selectedPositions.length === 0}
                className="bg-blue-600 hover:bg-blue-700 text-white mt-4 md:mt-0 disabled:opacity-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Structure
              </Button>
            </div>
          </div>

          {/* Department Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {departments.map((dept, index) => (
              <div 
                key={dept.key}
                className={`${dept.color} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {React.createElement(dept.icon, { className: "w-8 h-8 mb-4" })}
                <h3 className="text-lg font-bold mb-2">{dept.name}</h3>
                <p className="text-blue-100">{dept.total} Positions</p>
              </div>
            ))}
          </div>

          {/* Organizational Chart */}
          <div ref={chartRef} className="space-y-12">
            {departments.map((dept, deptIndex) => (
              <div 
                key={dept.key}
                className={`bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 border border-blue-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${deptIndex * 200}ms` }}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 ${dept.color} rounded-xl flex items-center justify-center mr-4`}>
                    {React.createElement(dept.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">{dept.name}</h3>
                    <p className="text-blue-600">Click positions to select for recruitment</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {orgStructure[dept.key].map((position, posIndex) => (
                    <div
                      key={position.id}
                      onClick={() => togglePosition(position.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedPositions.includes(position.id)
                          ? 'border-blue-600 bg-blue-100 shadow-lg'
                          : 'border-blue-200 bg-white hover:border-blue-400 hover:shadow-md'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-blue-900 text-sm leading-tight">
                          {position.name}
                        </h4>
                        {position.count > 1 && (
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                            ×{position.count}
                          </span>
                        )}
                      </div>
                      
                      {position.salary && (
                        <div className="text-blue-700 font-semibold text-sm mb-1">
                          {position.salary}
                        </div>
                      )}
                      
                      <div className="text-gray-600 text-xs">
                        Reports to: {position.reports}
                      </div>

                      {selectedPositions.includes(position.id) && (
                        <div className="mt-2 flex items-center text-blue-600">
                          <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium">Selected</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-16 bg-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-6">
                Complete Organizational Overview
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">5</div>
                  <div className="text-blue-100">Executive</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">12</div>
                  <div className="text-blue-100">Creative</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">9</div>
                  <div className="text-blue-100">Commercial</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">8-9</div>
                  <div className="text-blue-100">Digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgStructure;