'use client';

import Link from 'next/link';
import { ArrowRight, Building2, ShoppingBag, HeartPulse, Car } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Industries() {
    const industries = [
        {
            icon: Building2,
            title: "Financial Services",
            description: "Resilient systems for the future of banking and payments.",
            href: "/industries/financial-services"
        },
        {
            icon: ShoppingBag,
            title: "Retail & E-commerce",
            description: "Seamless omnichannel experiences that drive customer loyalty.",
            href: "/industries/retail-ecommerce"
        },
        {
            icon: HeartPulse,
            title: "Healthcare",
            description: "Data-driven care pathways and interoperable health systems.",
            href: "/industries/healthcare"
        },
        {
            icon: Car,
            title: "Automotive",
            description: "Software-defined mobility and connected vehicle platforms.",
            href: "/industries/automotive"
        }
    ];

    return (
        <section className="py-24 bg-[#FFF5F7] overflow-hidden" id="industries">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection
                    direction="up"
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-tw-crimson/10 pb-12"
                >
                    <div className="max-w-2xl">
                        <span className="text-tw-crimson font-medium tracking-widest uppercase text-sm mb-4 block">Industries</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-tw-black">
                            Solving complex problems across sectors
                        </h2>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-tw-crimson/10 border border-tw-crimson/10">
                    {industries.map((industry, idx) => {
                        const Icon = industry.icon;
                        return (
                            <AnimatedSection
                                key={idx}
                                delay={idx * 0.1}
                                direction="up"
                                className="h-full"
                            >
                                <Link
                                    href={industry.href}
                                    className="group relative block bg-white p-10 hover:bg-[#FFF0F3] transition-colors duration-300 h-full"
                                >
                                    <div className="mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-10 h-10 text-tw-crimson" />
                                    </div>
                                    <h3 className="font-serif text-2xl font-medium mb-4 text-tw-black group-hover:text-tw-crimson transition-colors">
                                        {industry.title}
                                    </h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-800 transition-colors">
                                        {industry.description}
                                    </p>
                                    <div className="absolute bottom-8 left-10 opacity-100 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center text-tw-crimson font-bold text-sm">
                                        Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </Link>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
