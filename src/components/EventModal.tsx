import type { Event } from "@/data/events";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Target, Wrench, ExternalLink } from "lucide-react";
import MediaCarousel from "./MediaCarousel";

interface EventModalProps {
    event: Event | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function EventModal({ event, open, onOpenChange }: EventModalProps) {
    if (!event) return null;

    const isCompetition = event.type === "competition";
    const showRegistration = !event.isPast && event.registrationLink;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto bg-ieee-navy border-ieee-gold/20 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                <DialogHeader>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-ieee-gold mb-3 sm:mb-4 pr-6">
                        {event.title}
                    </DialogTitle>
                </DialogHeader>

                {/* Media Carousel */}
                <MediaCarousel media={event.media || [{ type: "image", url: event.image }]} />

                {/* Date & Location */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-ieee-blue">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{event.location}</span>
                    </div>
                </div>

                {/* Competition: Objectives */}
                {isCompetition && event.objectives && (
                    <div className="mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-ieee-gold flex-shrink-0" />
                            Objectives
                        </h3>
                        <ul className="space-y-2">
                            {event.objectives.map((objective, index) => (
                                <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                                    <span className="text-ieee-gold mt-1 flex-shrink-0">•</span>
                                    <span>{objective}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Workshop/Bootcamp/Talk: Speakers */}
                {!isCompetition && event.speakers && event.speakers.length > 0 && (
                    <div className="mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-ieee-gold flex-shrink-0" />
                            {event.speakers.length > 1 ? "Speakers" : "Speaker"}
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                            {event.speakers.map((speaker, index) => (
                                <div
                                    key={index}
                                    className="bg-ieee-navy-light rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/5"
                                >
                                    <p className="font-bold text-white text-sm sm:text-base">{speaker.name}</p>
                                    <p className="text-xs sm:text-sm text-ieee-blue mt-0.5">{speaker.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Detailed Description */}
                <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                        {isCompetition ? "About the Competition" : "What You Learned"}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{event.detailedDescription}</p>
                </div>

                {/* Tools & Technologies */}
                {event.tools && event.tools.length > 0 && (
                    <div className="mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center gap-2">
                            <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-ieee-gold flex-shrink-0" />
                            Tools & Technologies
                        </h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {event.tools.map((tool, index) => (
                                <span
                                    key={index}
                                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold bg-ieee-gold/10 text-ieee-gold border border-ieee-gold/20 rounded-full"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Register Now Button */}
                {showRegistration && (
                    <div className="mt-6 pt-4 border-t border-white/10">
                        <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-ieee-gold hover:bg-ieee-gold/90 text-ieee-navy font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ieee-gold/20"
                        >
                            Register Now
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
