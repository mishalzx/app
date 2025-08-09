import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://customer-assets.emergentagent.com/job_interactive-proposal/artifacts/emhy27h7_Ariflex%20Logo-01.png"
              alt="Ariflex Logo"
              className="h-16 w-auto mx-auto mb-4 brightness-0 invert opacity-90"
            />
          </div>

          {/* Inspirational Quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <svg className="w-12 h-12 text-yellow-400 mx-auto opacity-60" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h6V14c0-2.2 1.8-4 4-4V8h-4zm12 0c-3.3 0-6 2.7-6 6v10h6V14c0-2.2 1.8-4 4-4V8h-4z"/>
              </svg>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-6 italic">
              "Excellence in recruitment is not just about finding the right talent—it's about building the future of organizations, one exceptional leader at a time."
            </blockquote>
            
            <div className="text-yellow-300 font-semibold text-lg">
              Team Ariflex
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-yellow-400 font-medium">ahmed@ariflex.co</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-yellow-400 font-medium">+966 54 003 9965</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-yellow-400 font-medium">Saudi Arabia</div>
            </div>
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-emerald-100">Years of Excellence</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">300+</div>
              <div className="text-emerald-100">Successful Closings</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-emerald-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-emerald-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="text-emerald-200 text-sm">
              © {currentYear} Ariflex. Commercial Proposal - Bluemoon Marketing. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
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