import { motion } from "framer-motion";
import { cells } from "@/data/cells";
import { Card, CardContent } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function Cells() {
    return (
        <section id="cells" className="py-24 bg-ieee-navy relative">
            {/* Background circuit design - subtle */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none circuit-pattern" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Our <span className="text-ieee-gold">Cells</span> & Activities
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Explore our specialized technical cells and their activities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cells.map((cell, index) => (
                        <motion.div
                            key={cell.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Card className="cursor-pointer group hover:bg-ieee-navy-light transition-all border border-white/5 hover:border-ieee-gold/30 bg-ieee-navy-light/50 shadow-soft rounded-[2.5rem] overflow-hidden h-full">
                                        <CardContent className="p-0">
                                            <div className="aspect-[4/3] bg-ieee-navy relative overflow-hidden group">
                                                <img
                                                    src={cell.image}
                                                    alt={cell.name}
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy via-ieee-navy/20 to-transparent" />
                                                <div className="absolute inset-0 bg-ieee-gold/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>
                                            <div className="p-8">
                                                <div className="mb-4 flex items-center gap-2">
                                                    <span className="w-6 h-[1px] bg-ieee-gold/40" />
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ieee-gold/60">{cell.id.toUpperCase()}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-ieee-gold transition-colors">
                                                    {cell.name.split(" (")[0]}
                                                </h3>
                                                <p className="text-gray-400 mb-8 line-clamp-2 text-sm leading-relaxed">
                                                    {cell.description}
                                                </p>
                                                <div className="flex items-center text-ieee-gold font-bold text-xs uppercase tracking-widest">
                                                    Explore Cell <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:max-w-[650px] bg-ieee-navy border border-ieee-gold/20 rounded-[2rem] sm:rounded-[2.5rem] p-0 overflow-hidden shadow-2xl [&>button]:text-white max-h-[90vh] flex flex-col">
                                    <div className="h-32 sm:h-48 relative border-b border-ieee-gold/10 overflow-hidden shrink-0">
                                        <img
                                            src={cell.image}
                                            alt={cell.name}
                                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy via-ieee-navy/40 to-transparent" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 sm:w-20 h-[1px] bg-ieee-gold/20" />
                                            <h2 className="mx-2 sm:mx-4 text-2xl sm:text-4xl font-black text-white/10 tracking-[0.3em] sm:tracking-[0.5em] uppercase">{cell.id}</h2>
                                            <div className="w-12 sm:w-20 h-[1px] bg-ieee-gold/20" />
                                        </div>
                                    </div>
                                    <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar">
                                        <DialogHeader className="mb-6 sm:mb-10">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[10px] sm:text-xs font-black text-ieee-gold uppercase tracking-[0.3em]">Technical Cell</span>
                                                <div className="h-[1px] flex-grow bg-ieee-gold/20" />
                                            </div>
                                            <DialogTitle className="text-2xl sm:text-4xl font-black text-white tracking-tight">{cell.name}</DialogTitle>
                                            <DialogDescription className="text-gray-400 text-base sm:text-lg mt-3 sm:mt-4 leading-relaxed font-medium">
                                                {cell.description}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="grid grid-cols-1 gap-6 sm:gap-10">
                                            <div>
                                                <h4 className="font-bold text-white mb-4 sm:mb-6 flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-ieee-gold" />
                                                    <span className="uppercase tracking-widest text-xs sm:text-sm">Key Activities</span>
                                                </h4>
                                                <ul className="grid grid-cols-1 gap-2 sm:gap-3">
                                                    {cell.activities.map((activity, i) => (
                                                        <li key={i} className="text-gray-300 flex items-center gap-3 text-sm sm:text-base">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-ieee-gold shadow-gold shrink-0" />
                                                            {activity}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-8 sm:mt-12">
                                                <Button
                                                    onClick={() => window.open(cell.joinUrl, "_blank")}
                                                    className="w-full h-14 sm:h-16 rounded-xl sm:rounded-2xl bg-ieee-gold text-ieee-navy font-black text-base sm:text-lg hover:bg-white transition-all shadow-gold uppercase tracking-widest"
                                                >
                                                    Join the Cell
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
