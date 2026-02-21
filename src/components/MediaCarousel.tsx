import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Media } from "@/data/events";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

interface MediaCarouselProps {
    media: Media[];
}

export default function MediaCarousel({ media }: MediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [isHoveringControls, setIsHoveringControls] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const controlsTimeoutRef = useRef<any>(null);

    const resetControlsTimeout = () => {
        if (!isPlaying) {
            setShowControls(true);
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
            return;
        }

        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
            if (!isHoveringControls) {
                setShowControls(false);
            }
        }, 3000);
    };

    const handleVideoClick = () => {
        // Prevent clicking controls from triggering play/pause
        if (isHoveringControls) return;

        if (showControls || !isPlaying) {
            togglePlay();
        } else {
            resetControlsTimeout();
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        };
    }, []);

    useEffect(() => {
        resetControlsTimeout();
    }, [isPlaying]);

    useEffect(() => {
        // Reset state when media changes
        setIsPlaying(false);
        setProgress(0);
        setDuration(0);
        setIsHoveringControls(false);
        setShowControls(true);
    }, [currentIndex]);

    if (!media || media.length === 0) return null;

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = media.length - 1;
            if (nextIndex >= media.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const total = videoRef.current.duration;
            setProgress((current / total) * 100);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            const seekTime = (parseFloat(e.target.value) / 100) * duration;
            videoRef.current.currentTime = seekTime;
            setProgress(parseFloat(e.target.value));
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        setVolume(val);
        if (videoRef.current) {
            videoRef.current.volume = val;
            videoRef.current.muted = val === 0;
            setIsMuted(val === 0);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            const nextMute = !isMuted;
            videoRef.current.muted = nextMute;
            setIsMuted(nextMute);
            if (nextMute) {
                setVolume(0);
            } else {
                setVolume(0.5); // Default to 50% on unmute
                videoRef.current.volume = 0.5;
            }
        }
    };

    const handleFullscreen = () => {
        if (playerRef.current) {
            if (!document.fullscreenElement) {
                playerRef.current.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const currentMedia = media[currentIndex];

    return (
        <div
            className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-ieee-navy-light mb-4 sm:mb-6 group flex-shrink-0"
            onMouseEnter={() => {
                resetControlsTimeout();
            }}
            onMouseMove={resetControlsTimeout}
            onMouseLeave={() => {
                setIsHoveringControls(false);
                if (isPlaying) setShowControls(false);
            }}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag={isHoveringControls ? false : "x"}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(_, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                    {currentMedia.type === "image" ? (
                        <img
                            src={currentMedia.url}
                            alt={`Media ${currentIndex + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover select-none"
                        />
                    ) : (
                        <div ref={playerRef} className="relative w-full h-full bg-black flex items-center justify-center">
                            <video
                                ref={videoRef}
                                src={currentMedia.url}
                                className="w-full h-full max-h-screen object-contain"
                                onEnded={() => setIsPlaying(false)}
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
                                playsInline
                                preload="metadata"
                                onClick={handleVideoClick}
                            />

                            {/* Central Play/Pause Toggle */}
                            <AnimatePresence>
                                {showControls && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-ieee-navy/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-ieee-gold">
                                            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Custom Controls Bar */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                                onMouseEnter={() => {
                                    setIsHoveringControls(true);
                                    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
                                }}
                                onMouseLeave={() => {
                                    setIsHoveringControls(false);
                                    resetControlsTimeout();
                                }}
                                onTouchStart={resetControlsTimeout}
                            >
                                {/* Progress Slider Container (YouTube Style) */}
                                <div className="relative group/progress mb-2 flex items-center gap-3">
                                    <div className="relative flex-grow h-1.5 flex items-center">
                                        {/* Track Background */}
                                        <div className="absolute inset-0 bg-white/20 rounded-full overflow-hidden">
                                            {/* Progress Fill (Yellow) */}
                                            <div
                                                className="h-full bg-ieee-gold transition-all duration-75"
                                                style={{ width: `${progress}%` }}
                                            />
                                        </div>

                                        {/* Scrubber (Thumb) */}
                                        <div
                                            className={`absolute w-3 h-3 bg-ieee-gold rounded-full shadow-lg transition-transform duration-200 pointer-events-none ${showControls ? 'scale-100' : 'scale-0'
                                                } group-hover/progress:scale-125`}
                                            style={{ left: `${progress}%`, marginLeft: '-6px' }}
                                        />

                                        {/* Invisible Input for Interaction */}
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="0.1"
                                            value={progress}
                                            onChange={handleSeek}
                                            className="absolute inset-0 w-full h-1.5 opacity-0 cursor-pointer accent-ieee-gold"
                                        />
                                    </div>

                                    <span className="text-[10px] text-white font-mono w-20 text-right shrink-0">
                                        {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <button onClick={togglePlay} className="text-white hover:text-ieee-gold transition-colors">
                                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                        </button>

                                        {/* Volume Control */}
                                        <div className="flex items-center gap-2 group/volume">
                                            <button onClick={toggleMute} className="text-white hover:text-ieee-gold transition-colors">
                                                {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                            </button>
                                            <input
                                                type="range"
                                                min="0"
                                                max="1"
                                                step="0.1"
                                                value={volume}
                                                onChange={handleVolumeChange}
                                                className="w-0 group-hover/volume:w-20 overflow-hidden h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-ieee-gold transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    <button onClick={handleFullscreen} className="text-white hover:text-ieee-gold transition-colors">
                                        {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {media.length > 1 && (
                <>
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-ieee-gold hover:text-ieee-navy"
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-ieee-gold hover:text-ieee-navy"
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Pagination Indicators */}
            {media.length > 1 && currentMedia.type !== "video" && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {media.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                                setIsPlaying(false);
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-ieee-gold w-6" : "bg-white/50 hover:bg-white"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
