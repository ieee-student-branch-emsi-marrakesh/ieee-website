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
import { Clock, CheckCircle2, ChevronRight, Cpu } from "lucide-react";

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
                        Explore our specialized technical cells and their weekly activities.
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
                                            <div className="aspect-[4/3] bg-ieee-navy flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-ieee-gold/5 to-transparent opacity-50" />
                                                <Cpu className="w-16 h-16 text-ieee-gold/20 group-hover:text-ieee-gold/40 transition-colors duration-500" />
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
                                <DialogContent className="sm:max-w-[650px] bg-ieee-navy border border-ieee-gold/20 rounded-[2.5rem] p-0 overflow-hidden shadow-2xl">
                                    <div className="h-40 bg-ieee-navy-light relative border-b border-ieee-gold/10">
                                        <div className="absolute inset-0 flex items-center justify-center circuit-pattern opacity-10" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h2 className="text-6xl font-black text-white/5 tracking-tighter uppercase">{cell.id}</h2>
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <DialogHeader className="mb-10">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-black text-ieee-gold uppercase tracking-[0.3em]">Technical Cell</span>
                                                <div className="h-[1px] flex-grow bg-ieee-gold/20" />
                                            </div>
                                            <DialogTitle className="text-4xl font-black text-white tracking-tight">{cell.name}</DialogTitle>
                                            <DialogDescription className="text-gray-400 text-lg mt-4 leading-relaxed font-medium">
                                                {cell.description}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                                            <div>
                                                <h4 className="font-bold text-white mb-6 flex items-center gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-ieee-gold" />
                                                    <span className="uppercase tracking-widest text-sm">Key Activities</span>
                                                </h4>
                                                <ul className="grid grid-cols-1 gap-3">
                                                    {cell.activities.map((activity, i) => (
                                                        <li key={i} className="text-gray-300 flex items-center gap-3 text-base">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-ieee-gold shadow-gold shrink-0" />
                                                            {activity}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-ieee-navy-light border border-ieee-gold/10 p-8 rounded-[2rem] flex items-center gap-6 shadow-soft">
                                                <div className="w-14 h-14 rounded-2xl bg-ieee-gold/10 flex items-center justify-center text-ieee-gold shadow-gold-glow">
                                                    <Clock className="w-7 h-7" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-ieee-gold font-black uppercase tracking-[0.2em] mb-1">Weekly Session</p>
                                                    <p className="text-xl font-black text-white tracking-tight">{cell.schedule}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-12">
                                            <Button onClick={() => { }} className="w-full h-16 rounded-2xl bg-ieee-gold text-ieee-navy font-black text-lg hover:bg-white transition-all shadow-gold uppercase tracking-widest">
                                                Join the Cell
                                            </Button>
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
