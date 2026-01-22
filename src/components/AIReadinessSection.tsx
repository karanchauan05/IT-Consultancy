'use client';

import Link from 'next/link';
import { Button } from './Button';
import { ArrowRight, Sparkles, Cpu, Target, Layers, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function AIReadinessSection() {
    const features = [
        {
            icon: Cpu,
            title: "Maturity Scoring",
            description: "Understand where you stand across five key AI dimensions."
        },
        {
            icon: Target,
            title: "Actionable Roadmap",
            description: "Get specific, prioritized steps to accelerate your AI journey."
        },
        {
            icon: Layers,
            title: "Gap Analysis",
            description: "Identify critical technical and organizational blockers."
        }
    ];

    return (
        <section className="py-24 bg-tw-light-gray overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-tw-teal/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-tw-crimson/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-tw-teal rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/10">
                    {/* Background Image / Overlay */}
                    <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full opacity-40 lg:opacity-100">
                        <div className="absolute inset-0 bg-linear-to-r from-tw-teal via-tw-teal/80 lg:via-tw-teal/60 to-transparent z-10"></div>
                        <img
                            src="/images/ai-diagnostics.webp"
                            alt="AI Diagnostics"
                            className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:scale-105"
                        />
                    </div>

                    <div className="relative z-20 p-8 md:p-16 lg:max-w-2xl">
                        <AnimatedSection direction="left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tw-crimson/20 text-tw-crimson text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-tw-crimson/30 backdrop-blur-sm">
                                <Sparkles className="w-3.5 h-3.5" />
                                Interactive Assessment
                            </div>

                            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-8 leading-[1.1]">
                                Is your organization <span className="italic">AI-ready?</span>
                            </h2>

                            <p className="text-xl text-gray-300 mb-12 leading-relaxed font-serif italic max-w-lg">
                                Future-proof your business by identifying gaps and opportunities in your AI strategy before your competitors do.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 items-start group">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-tw-crimson/20 group-hover:border-tw-crimson/30">
                                            <feature.icon className="w-6 h-6 text-tw-crimson transition-transform duration-300 group-hover:scale-110" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1.5 group-hover:text-tw-crimson transition-colors">{feature.title}</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed font-light">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <Link href="/ai-readiness" className="w-full sm:w-auto">
                                    <Button variant="primary" size="lg" className="w-full bg-tw-crimson hover:bg-white hover:text-tw-crimson text-white border-none group px-10 text-base font-bold transition-all duration-500 rounded-xl">
                                        Start Assessment
                                        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                                    </Button>
                                </Link>
                                <span className="text-gray-500 text-sm font-medium">Free • 5 Minutes • Instant Report</span>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Decorative bottom bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-tw-crimson via-tw-crimson/50 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}
