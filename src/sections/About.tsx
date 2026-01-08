import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Target, Globe } from "lucide-react";
import { getInstitutionLogos } from "@/data/institutions";

export default function About() {
    const features = [
        {
            icon: <Users className="w-8 h-8 text-ieee-gold" />,
            title: "Vibrant Community",
            desc: "Connect with like-minded students and professionals in the field of technology."
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-ieee-gold" />,
            title: "Innovation",
            desc: "Explore cutting-edge technologies through our specialized cells and projects."
        },
        {
            icon: <Target className="w-8 h-8 text-ieee-gold" />,
            title: "Skill Growth",
            desc: "Participate in workshops and competitions to sharpen your technical skills."
        },
        {
            icon: <Globe className="w-8 h-8 text-ieee-gold" />,
            title: "Global Network",
            desc: "Part of IEEE's global ecosystem, providing access to international resources."
        }
    ];

    const institutions = getInstitutionLogos();

    return (
        <section id="about" className="py-24 bg-ieee-navy-light relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-ieee-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl leading-tight">
                            Who We <span className="text-ieee-gold">Are</span>
                        </h2>
                        <div className="space-y-6 mb-8">
                            <p className="text-lg leading-relaxed text-gray-400">
                                The IEEE Student Branch is a student organization at <span className="text-white font-semibold">EMSI Marrakesh</span> dedicated to promoting technical excellence and professional growth among students. We operate under the expert academic supervision of <span className="text-white font-semibold">Laboratoire LAMIGEP</span>, fostering a culture of engineering excellence, research, and innovation.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-400">
                                As part of IEEE—the world's largest technical professional organization—our branch serves as a bridge between academic theory and practical industry application, empowering the next generation of Moroccan engineers.
                            </p>
                        </div>

                        {/* Institutional Affiliation Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-10 p-8 bg-ieee-navy/40 rounded-3xl border border-ieee-gold/20 backdrop-blur-md"
                        >
                            <span className="block text-xs font-bold uppercase tracking-widest text-ieee-gold/60 mb-6 text-center">
                                Institutional Affiliation
                            </span>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
                                {institutions.map((inst) => (
                                    <div
                                        key={inst.name}
                                        className="relative flex items-center justify-center"
                                    >
                                        <img
                                            src={inst.logo}
                                            alt={inst.alt}
                                            className="h-14 sm:h-16 w-auto object-contain transition-all duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="bg-ieee-navy p-8 rounded-3xl border border-ieee-gold/10 shadow-soft">
                            <h3 className="text-xl font-bold mb-4 text-white">Our Focus</h3>
                            <ul className="space-y-4 text-gray-400">
                                {[
                                    "Technical Workshops & Projects",
                                    "National & International Competitions",
                                    "Leadership & Soft Skills Development",
                                    "Building a Strong Professional Network"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-ieee-gold shadow-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="bg-ieee-navy border-none shadow-soft rounded-2xl h-full transition-all hover:bg-ieee-navy-light hover:shadow-gold-glow group border border-transparent hover:border-ieee-gold/20">
                                    <CardContent className="p-8">
                                        <div className="mb-6 p-4 bg-ieee-gold/5 rounded-2xl w-fit group-hover:bg-ieee-gold/10 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}