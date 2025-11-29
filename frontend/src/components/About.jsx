function About() {
    return (
        <section id="about" className="section-padding bg-dark-secondary relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            About <span className="gradient-text">IEEE Student Branch</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Empowering the next generation of engineers and innovators at EMSI Marrakesh
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left Column - Description */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">Who We Are</h3>
                            <p className="text-gray-300 leading-relaxed">
                                The IEEE Student Branch at EMSI Marrakesh is part of the world's largest
                                technical professional organization dedicated to advancing technology for
                                the benefit of humanity.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                We bring together students from diverse engineering disciplines to learn,
                                collaborate, and innovate. Through workshops, competitions, projects, and
                                networking events, we provide opportunities for personal and professional growth.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-primary/20 text-accent rounded-full text-sm font-medium">
                                    Innovation
                                </span>
                                <span className="px-4 py-2 bg-primary/20 text-accent rounded-full text-sm font-medium">
                                    Collaboration
                                </span>
                                <span className="px-4 py-2 bg-primary/20 text-accent rounded-full text-sm font-medium">
                                    Excellence
                                </span>
                                <span className="px-4 py-2 bg-primary/20 text-accent rounded-full text-sm font-medium">
                                    Leadership
                                </span>
                            </div>
                        </div>

                        {/* Right Column - Mission & Vision */}
                        <div className="space-y-6">
                            <div className="card hover-lift">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                                        <p className="text-gray-400">
                                            To foster technological innovation and excellence for the benefit of
                                            humanity by providing students with opportunities to develop technical
                                            and professional skills.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card hover-lift">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">Our Vision</h4>
                                        <p className="text-gray-400">
                                            To be the leading student organization in Morocco, recognized for
                                            producing skilled engineers and innovators who drive technological
                                            advancement and social impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements/Features */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card text-center hover-lift">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Community</h4>
                            <p className="text-gray-400">
                                Join a vibrant community of 500+ passionate students and professionals
                            </p>
                        </div>

                        <div className="card text-center hover-lift">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
                            <p className="text-gray-400">
                                Work on cutting-edge projects and participate in international competitions
                            </p>
                        </div>

                        <div className="card text-center hover-lift">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Career Growth</h4>
                            <p className="text-gray-400">
                                Access exclusive workshops, mentorship, and networking opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
