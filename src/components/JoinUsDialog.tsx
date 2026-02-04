import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL } from "@/data/socials";

interface JoinUsDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function JoinUsDialog({ isOpen, onClose }: JoinUsDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interests: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      // Trim values
      const name = formData.name.trim();
      const email = formData.email.trim();
      const phone = formData.phone.trim();
      const interests = formData.interests.trim();

      if (!name || !email || !phone) {
        alert("Please fill all required fields.");
        return;
      }

      const subject = encodeURIComponent("IEEE S.B Membership Application");

      const body = encodeURIComponent(
        `IEEE Student Branch EMSI Marrakesh Membership Request

Name: ${name}
Email: ${email}
Phone: ${phone}

Why Join:
  ${interests || "Not provided"}
          `
      );

      const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      // Open email client safely
      window.open(mailtoLink, "_blank");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Dialog */}
                    <div className="fixed inset-x-0 top-0 flex items-start justify-center z-50 p-4 pt-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-ieee-navy-light border border-ieee-gold/20 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-ieee-navy-light border-b border-white/5 p-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-ieee-gold/10 flex items-center justify-center border border-ieee-gold/20">
                                        <Sparkles className="w-6 h-6 text-ieee-gold" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-white">Join IEEE S.B</h2>
                                        <p className="text-sm text-gray-400">EMSI Marrakesh</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/5"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-6">
                                    <p className="text-gray-300 leading-relaxed">
                                        Join the world's largest technical professional organization!
                                        Fill out the form below and we'll get back to you with membership details.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                            <User size={14} />
                                            Full Name
                                        </label>
                                        <Input
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="h-14 rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                            <Mail size={14} />
                                            Email Address
                                        </label>
                                        <Input
                                            required
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="h-14 rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                            <Phone size={14} />
                                            Phone Number
                                        </label>
                                        <Input
                                            required
                                            type="tel"
                                            placeholder="+212 600-000000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="h-14 rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all"
                                        />
                                    </div>

                                    {/* Interests */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                                            Why do you want to join? (Optional)
                                        </label>
                                        <Textarea
                                            placeholder="Tell us about your interests and what you hope to gain from IEEE membership..."
                                            value={formData.interests}
                                            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                                            className="min-h-[120px] rounded-2xl bg-ieee-navy border-white/5 text-white placeholder:text-gray-600 focus-visible:ring-ieee-gold focus-visible:border-ieee-gold/50 transition-all resize-none p-4"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex gap-4 pt-4">
                                        <Button
                                            type="button"
                                            onClick={onClose}
                                            variant="outline"
                                            className="flex-1 h-14 rounded-2xl border-2 border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            className="flex-1 h-14 rounded-2xl bg-ieee-gold text-ieee-navy hover:bg-white transition-all shadow-gold font-black uppercase tracking-wider"
                                        >
                                            Submit Application
                                        </Button>
                                    </div>
                                </form>

                                {/* Info Note */}
                                <div className="mt-6 p-4 rounded-2xl bg-ieee-blue/10 border border-ieee-blue/20">
                                    <p className="text-sm text-gray-400 text-center">
                                        📧 Your application will be sent to <span className="text-ieee-gold font-semibold">{CONTACT_EMAIL}</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
