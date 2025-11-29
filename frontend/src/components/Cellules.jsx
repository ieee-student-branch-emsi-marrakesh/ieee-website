import { cellules } from '../data/cellules';

function Cellules() {
    return (
        <section id="cellules" className="section-padding bg-dark relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-accent opacity-5 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="gradient-text">Cellules</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Specialized chapters focusing on different areas of technology and engineering
                    </p>
                </div>

                {/* Cellules Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cellules.map((cellule, index) => (
                        <div
                            key={cellule.id}
                            className="card hover-lift group cursor-pointer relative overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Colored accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                                style={{ background: cellule.color }}
                            ></div>

                            {/* Icon */}
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {cellule.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                {cellule.name}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4 font-medium">{cellule.fullName}</p>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {cellule.description}
                            </p>

                            {/* Activities */}
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-accent mb-3">Key Activities:</p>
                                <div className="flex flex-wrap gap-2">
                                    {cellule.activities.map((activity, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 rounded-full bg-dark border border-gray-700 text-gray-300 hover:border-accent transition-colors"
                                        >
                                            {activity}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover overlay effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                                style={{ background: cellule.color }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="card text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Join a Cellule</h3>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Each cellule offers unique opportunities to develop specialized skills, work on exciting projects,
                            and connect with like-minded peers. You can be part of multiple cellules based on your interests!
                        </p>
                        <a href="#contact" className="btn btn-primary hover-lift">
                            Get Started
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cellules;
