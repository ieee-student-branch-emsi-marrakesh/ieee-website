import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface PolicyDialogProps {
    trigger: React.ReactNode;
    title: string;
    content: React.ReactNode;
}

const PolicyDialog = ({ trigger, title, content }: PolicyDialogProps) => (
    <Dialog>
        <DialogTrigger asChild>
            {trigger}
        </DialogTrigger>
        <DialogContent className="bg-ieee-navy border-white/10 text-white w-[95vw] sm:max-w-2xl p-4 sm:p-8 rounded-3xl overflow-y-auto max-h-[90vh]">
            <DialogHeader className="text-left">
                <DialogTitle className="text-xl sm:text-2xl font-bold text-ieee-gold mb-2 sm:mb-4 uppercase tracking-wider">{title}</DialogTitle>
                <div className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    {content}
                </div>
            </DialogHeader>
        </DialogContent>
    </Dialog>
);

export const PrivacyPolicy = ({ trigger }: { trigger: React.ReactNode }) => (
    <PolicyDialog
        trigger={trigger}
        title="Branch Data Privacy"
        content={
            <div className="space-y-4 text-gray-300">
                <p>
                    As a student-led branch at EMSI Marrakesh, we value your trust. We only collect data that you voluntarily provide through our contact forms or event registrations.
                </p>
                <p>
                    This information (typically your name, email, and academic department) is used exclusively to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ieee-gold/80 italic">
                    <li>Facilitate workshop registrations and certificates.</li>
                    <li>Send important community updates and event invitations.</li>
                    <li>Manage internal branch communications.</li>
                </ul>
                <p>
                    We never sell your data or share it with external marketers. Your information remains within the IEEE student branch ecosystem.
                </p>
            </div>
        }
    />
);

export const TermsOfService = ({ trigger }: { trigger: React.ReactNode }) => (
    <PolicyDialog
        trigger={trigger}
        title="Member Code of Conduct"
        content={
            <div className="space-y-4 text-gray-300">
                <p>
                    By interacting with IEEE EMSI Marrakesh and attending our events, you join a community built on technical excellence and mutual respect.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><span className="text-ieee-gold font-bold">Inclusivity:</span> We welcome all students regardless of their background or level of expertise.</li>
                    <li><span className="text-ieee-gold font-bold">Collaboration:</span> Support your peers during workshops and hackathons.</li>
                    <li><span className="text-ieee-gold font-bold">Innovation:</span> Use our resources for ethical technological advancement.</li>
                </ul>
                <p>
                    Any behavior that is disruptive, disrespectful, or violates EMSI institutional policies during our activities may result in a formal membership review.
                </p>
            </div>
        }
    />
);

export const CookiePolicy = ({ trigger }: { trigger: React.ReactNode }) => (
    <PolicyDialog
        trigger={trigger}
        title="Cookie Statement"
        content={
            <div className="space-y-4 text-gray-300">
                <p>
                    We keep our digital footprint clean. This website uses only essential, technical cookies required for basic functionality and site security.
                </p>
                <p>
                    We do not use invasive tracking pixels, third-party advertising cookies, or behavioral profiling tools. Our priority is providing a fast, secure, and distraction-free experience for our members.
                </p>
                <p className="text-ieee-gold italic text-center font-medium">
                    Just tech. No tracking.
                </p>
            </div>
        }
    />
);
