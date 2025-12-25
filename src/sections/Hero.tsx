import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import JoinUsDialog from "@/components/JoinUsDialog";

export default function Hero() {
    const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ieee-navy pt-20 circuit-pattern">
                {/* Background decoration */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-ieee-gold/5 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-ieee-blue/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-ieee-gold uppercase bg-ieee-gold/10 border border-ieee-gold/20 rounded-full">
                            IEEE S.B EMSI Marrakesh
                        </span>
                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-8xl">
                            IEEE S.B <span className="text-ieee-gold">EMSI Marrakesh</span>
                        </h1>
                        <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-400 md:text-xl leading-relaxed">
                            Empowering students through technology, innovation, and leadership.
                            Join the world's largest technical professional organization dedicated
                            to advancing technology for the benefit of humanity.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                            <Button
                                size="lg"
                                onClick={() => setIsJoinDialogOpen(true)}
                                className="px-10 py-7 text-lg rounded-2xl group bg-ieee-gold text-ieee-navy hover:bg-ieee-gold/90 font-bold shadow-gold"
                            >
                                Join Us
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-7 text-lg rounded-2xl border-2 border-ieee-gold/50 text-ieee-gold hover:bg-ieee-gold/10 hover:border-ieee-gold transition-all"
                            >
                                <Calendar className="mr-2 w-5 h-5" />
                                Our Events
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats/Badge area */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
                >
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-[0.4em]">
                        Innovate <span className="text-ieee-gold/40 mx-2">•</span> Lead <span className="text-ieee-gold/40 mx-2">•</span> Connect
                    </p>
                </motion.div>
            </section>

            {/* Join Us Dialog */}
            <JoinUsDialog isOpen={isJoinDialogOpen} onClose={() => setIsJoinDialogOpen(false)} />
        </>
    );
}