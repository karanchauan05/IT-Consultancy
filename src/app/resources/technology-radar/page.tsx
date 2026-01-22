'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowRight, ChevronRight, CheckCircle2, AlertTriangle, XCircle, PauseCircle, X, CheckCircle, Mail } from 'lucide-react';
import { useState } from 'react';

const RADAR_DATA = {
    Techniques: [
        { name: "Generative AI for Code", status: "Adopt", desc: "Using LLMs like GitHub Copilot to accelerate coding.", ring: "adopt" },
        { name: "Platform Engineering", status: "Adopt", desc: "Building internal developer platforms to reduce cognitive load.", ring: "adopt" },
        { name: "Sustainable Software", status: "Trial", desc: "Optimizing code and infrastructure for energy efficiency.", ring: "trial" },
        { name: "Zero Trust Security", status: "Assess", desc: "Verifying every request as if it originates from an open network.", ring: "assess" },
    ],
    Platforms: [
        { name: "Kubernetes", status: "Adopt", desc: "The de-facto standard for container orchestration.", ring: "adopt" },
        { name: "Snowflake", status: "Adopt", desc: "Data cloud platform for data warehousing and sharing.", ring: "adopt" },
        { name: "Vercel", status: "Trial", desc: "Frontend cloud for Next.js and other frameworks.", ring: "trial" },
        { name: "WebAssembly", status: "Assess", desc: "Binary instruction format for a stack-based virtual machine.", ring: "assess" },
    ],
    Tools: [
        { name: "Terraform", status: "Adopt", desc: "Infrastructure as Code software tool.", ring: "adopt" },
        { name: "Docker", status: "Adopt", desc: "Platform for developing, shipping, and running applications.", ring: "adopt" },
        { name: "Playwright", status: "Trial", desc: "End-to-end testing for modern web apps.", ring: "trial" },
        { name: "Bun", status: "Assess", desc: "Fast all-in-one JavaScript runtime.", ring: "assess" },
    ],
    "Languages & Frameworks": [
        { name: "TypeScript", status: "Adopt", desc: "Typed superset of JavaScript that compiles to plain JavaScript.", ring: "adopt" },
        { name: "Rust", status: "Trial", desc: "Systems programming language focused on safety and performance.", ring: "trial" },
        { name: "Python 3.12", status: "Adopt", desc: "Latest version of the popular programming language.", ring: "adopt" },
        { name: "Kotlin Multiplatform", status: "Assess", desc: "Sharing code between iOS and Android.", ring: "assess" },
    ]
};

const STATUS_ICONS = {
    "Adopt": { icon: CheckCircle2, color: "text-green-600" },
    "Trial": { icon: CheckCircle2, color: "text-blue-600" },
    "Assess": { icon: AlertTriangle, color: "text-amber-500" },
    "Hold": { icon: PauseCircle, color: "text-red-500" }
};

export default function TechnologyRadar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            console.log("Newsletter subscription:", { email });
            setStatus('success');
            setEmail('');

            // Close modal after showing success message
            setTimeout(() => {
                setIsModalOpen(false);
                setStatus('idle');
            }, 3000);
        }, 1000);
    };

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero */}
            <section className="bg-tw-black text-white pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <span className="text-tw-crimson font-bold uppercase tracking-widest mb-4 block">Publications</span>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Technology Radar</h1>
                    <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                        An opinionated guide to technology frontiers. Twice a year, we share our perspectives on the tools, techniques, platforms, and languages shaping the industry.
                    </p>
                </div>
            </section>

            {/* Volume Overview */}
            <section className="py-16 md:py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tw-black">Volume 30: The GenAI Era</h2>
                            <p className="text-tw-body text-lg mb-6">
                                The meteoric rise of generative AI has fundamentally shifted the software landscape. In this volume, we examine how "programming by conversation" is changing developer workflows, the importance of maintaining architectural fitness in the age of AI, and why platform engineering is becoming a critical differentiator.
                            </p>
                            <p className="text-tw-body mb-8">
                                Beyond AI, we also track the maturation of Rust in production, the continued dominance of Kubernetes, and the emerging "green software" movement aimed at reducing carbon footprints.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="primary"
                                    className="bg-tw-crimson hover:bg-tw-black border-none text-white"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Subscribe for Updates
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative flex justify-center w-full">
                            <div className="w-full max-w-[500px] aspect-square relative rounded-full border-4 border-gray-100 flex items-center justify-center animate-spin-slow-reverse">
                                {/* Ring 1 - Assess */}
                                <div className="absolute inset-0 border-4 border-gray-200 rounded-full opacity-30"></div>
                                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-gray-400 uppercase">Assess</div>

                                {/* Ring 2 - Trial (70%) */}
                                <div className="w-[70%] h-[70%] border-4 border-gray-300 rounded-full flex items-center justify-center relative">
                                    <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-gray-500 uppercase">Trial</div>

                                    {/* Ring 3 - Adopt (57% relative to Trial) */}
                                    <div className="w-[57%] h-[57%] bg-tw-teal/5 border-4 border-tw-teal/30 rounded-full flex items-center justify-center relative">
                                        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 bg-white/80 px-2 text-xs font-bold text-tw-teal uppercase">Adopt</div>
                                        <div className="text-center">
                                            <p className="font-serif text-2xl md:text-3xl font-bold text-tw-teal">VOL. 30</p>
                                            <p className="text-[10px] md:text-xs uppercase font-bold text-gray-400 mt-1">Jan 2026</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Animated blips */}
                                <div className="absolute top-[15%] right-[25%] w-3 h-3 bg-tw-crimson rounded-full animate-pulse"></div>
                                <div className="absolute bottom-[25%] left-[15%] w-3 h-3 bg-tw-teal rounded-full animate-pulse delay-700"></div>
                                <div className="absolute top-[50%] right-[10%] w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quadrants Grid */}
            <section className="py-24 bg-tw-light-gray">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {Object.entries(RADAR_DATA).map(([category, items], idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="font-serif text-2xl font-bold text-tw-black mb-6 border-b border-gray-100 pb-4 flex justify-between items-center">
                                    {category}
                                    <span className="text-xs font-sans font-normal text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">{items.length} items</span>
                                </h3>
                                <div className="space-y-6">
                                    {items.map((item, i) => {
                                        const StatusIcon = STATUS_ICONS[item.status as keyof typeof STATUS_ICONS];
                                        return (
                                            <div key={i} className="group cursor-pointer">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-lg text-tw-black group-hover:text-tw-crimson transition-colors flex items-center gap-2">
                                                        {item.name}
                                                    </h4>
                                                    <span className={`text-xs font-bold uppercase px-2 py-1 rounded bg-gray-50 border border-gray-100 ${StatusIcon.color} flex items-center gap-1`}>
                                                        <StatusIcon.icon className="w-3 h-3" />
                                                        {item.status}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                                                {i < items.length - 1 && <div className="h-px bg-gray-50 w-full"></div>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ / Methodology */}
            <section className="py-24 bg-tw-dark-gray text-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <h2 className="font-serif text-3xl font-bold mb-6">How do we build the Radar?</h2>
                            <p className="text-gray-400 mb-6">
                                The Technology Radar is based on the collective experience of our global technology leaders. It reflects the technologies we are currently using, experimenting with, or advising against.
                            </p>
                            <Link href="/contact" className="block w-full sm:w-auto">
                                <Button variant="primary" className="bg-tw-crimson hover:bg-tw-black border-none text-white w-full sm:w-auto">
                                    Contact our Tech Strategy Team
                                </Button>
                            </Link>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-tw-teal mb-2">Adopt</h3>
                                <p className="text-gray-400 text-sm">We feel strongly that the industry should be adopting these items. We use them when appropriate in our projects.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-400 mb-2">Trial</h3>
                                <p className="text-gray-400 text-sm">Worth pursuing. It is important to understand how to build up this capability. Enterprises should try this technology on a project that can handle the risk.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-amber-400 mb-2">Assess</h3>
                                <p className="text-gray-400 text-sm">Worth exploring with the goal of understanding how it will affect your enterprise.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-red-400 mb-2">Hold</h3>
                                <p className="text-gray-400 text-sm">Proceed with caution. We have had a negative experience or seen better alternatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-md bg-white text-tw-black rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-tw-crimson transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-6 md:p-8">
                            <div className="w-16 h-16 bg-tw-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8 text-tw-teal" />
                            </div>

                            <h3 className="font-serif text-2xl font-bold text-center mb-2">
                                Subscribe to Nexus Resources
                            </h3>
                            <p className="text-gray-500 text-center mb-8">
                                Get the latest technology trends and leadership resources delivered weekly.
                            </p>

                            {status === 'success' ? (
                                <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center justify-center gap-3">
                                    <CheckCircle size={24} />
                                    <span className="font-medium">Successfully subscribed!</span>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="name@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tw-teal focus:border-tw-teal outline-none transition-all"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-tw-crimson hover:bg-tw-black text-white"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                    </Button>
                                    <p className="text-xs text-gray-400 text-center mt-4">
                                        No spam. Unsubscribe anytime.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}

// Add CSS animation styles
import Link from 'next/link';
