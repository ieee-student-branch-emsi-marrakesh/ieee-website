function WhatWeDo() {
    const activities = [
        {
            title: "Ateliers techniques",
            description: "Ateliers pratiques couvrant les dernières technologies, langages de programmation et outils d’ingénierie.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Hackathons & Compétitions",
            description: "Participez à des compétitions locales et internationales pour démontrer vos compétences et gagner des prix.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Événements de réseautage",
            description: "Connectez-vous avec des professionnels, des alumni et des étudiants pour élargir votre réseau.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Projets de recherche",
            description: "Collaborez sur des projets de recherche innovants et contribuez à des publications académiques.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Conférences invitées",
            description: "Apprenez auprès d’experts et de leaders d’opinion grâce à des conférences et séminaires exclusifs.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            color: "from-indigo-500 to-blue-500"
        },
        {
            title: "Engagement communautaire",
            description: "Ayez un impact positif via des initiatives d’éducation STEM et des projets de responsabilité sociale.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            color: "from-pink-500 to-rose-500"
        }
    ];

    return (
        <section id="what-we-do" className="section-padding bg-dark relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Ce que <span className="gradient-text">nous faisons</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Découvrez la diversité de nos activités et opportunités pour vous aider à progresser
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className="card hover-lift group cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white">
                                    {activity.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                {activity.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {activity.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-gray-300 mb-6 text-lg">
                        Prêt à vous impliquer et à faire la différence ?
                    </p>
                    <a href="#contact" className="btn btn-primary hover-lift">
                        Rejoindre notre communauté
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;
