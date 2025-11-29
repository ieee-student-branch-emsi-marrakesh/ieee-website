function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#003B5C]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#00A8E1] rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#0084C8] rounded-full blur-[120px] animate-float delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00629B] rounded-full blur-[150px] animate-pulse-glow"></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* IEEE Logo/Badge */}
          <div className="inline-block mb-8 animate-fadeIn">
            <div className="px-8 py-4 glass rounded-full text-[#00A8E1] font-bold text-base tracking-widest hover-glow">
              ⚡ IEEE STUDENT BRANCH EMSI MARRAKESH
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 animate-fadeIn delay-100 leading-tight">
            <span className="gradient-text block mb-2">Innovate.</span>
            <span className="text-white block mb-2">Connect.</span>
            <span className="gradient-text block">Lead.</span>
          </h1>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-200 mb-6 animate-fadeIn delay-200 max-w-4xl mx-auto font-medium leading-relaxed">
            Join the largest technical professional organization at{' '}
            <span className="text-[#00A8E1] font-bold">EMSI Marrakesh</span>
          </p>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fadeIn delay-300 max-w-3xl mx-auto leading-relaxed">
            Empowering students to advance technology for humanity through innovation and excellence
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn delay-400 mb-20">
            <a href="#about" className="btn btn-primary text-lg px-10 py-4">
              <span>Discover More</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline text-lg px-10 py-4">
              <span>Get Involved</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fadeIn delay-500">
            <div className="card hover-lift text-center p-6">
              <div className="text-5xl md:text-6xl font-black gradient-text mb-3">500+</div>
              <div className="text-gray-300 font-medium text-lg">Members</div>
            </div>
            <div className="card hover-lift text-center p-6">
              <div className="text-5xl md:text-6xl font-black gradient-text mb-3">50+</div>
              <div className="text-gray-300 font-medium text-lg">Events/Year</div>
            </div>
            <div className="card hover-lift text-center p-6">
              <div className="text-5xl md:text-6xl font-black gradient-text mb-3">6</div>
              <div className="text-gray-300 font-medium text-lg">Cellules</div>
            </div>
            <div className="card hover-lift text-center p-6">
              <div className="text-5xl md:text-6xl font-black gradient-text mb-3">10+</div>
              <div className="text-gray-300 font-medium text-lg">Years Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-[#00A8E1] rounded-full flex items-start justify-center p-2 hover-glow cursor-pointer">
          <div className="w-1.5 h-4 bg-[#00A8E1] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


