import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { supervisors } from '@/data/supervisors';
import { Card, CardContent } from '@/components/ui/card';

export default function Supervisors() {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            slidesToScroll: 1,
            containScroll: 'trimSnaps'
        },
        [Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    return (
        <section id="supervisors" className="py-24 bg-ieee-navy border-t border-white/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Our <span className="text-ieee-gold">Supervisors</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Guided by academic excellence and institutional leadership.
                    </p>
                </motion.div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {supervisors.map((supervisor, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]">
                                <Card className="h-full border-none bg-ieee-navy-light/50 backdrop-blur-sm shadow-soft group transition-all hover:bg-ieee-navy-light rounded-3xl border border-transparent hover:border-ieee-gold/20 overflow-hidden">
                                    <CardContent className="p-8 flex flex-col items-center text-center">
                                        <div className="relative w-64 h-64 mb-8 rounded-3xl overflow-hidden bg-ieee-navy ring-4 ring-white/5 group-hover:ring-ieee-gold/30 transition-all shadow-2xl">
                                            {/* Initial fallback */}
                                            <div className="absolute inset-0 flex items-center justify-center text-ieee-gold/10 font-black text-4xl select-none">
                                                {supervisor.name.charAt(0)}
                                            </div>
                                            <img
                                                src={supervisor.image}
                                                alt={supervisor.name}
                                                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>

                                        <h3 className="text-2xl font-bold text-ieee-gold mb-2">{supervisor.name}</h3>
                                        <p className="text-sm font-semibold text-white/90 mb-1 leading-tight">{supervisor.title}</p>
                                        <p className="text-sm text-gray-400">{supervisor.role}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
