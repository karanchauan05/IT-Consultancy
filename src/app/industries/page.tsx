'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowRight, Building2, Heart, Zap, ShoppingCart, Plane, Factory, Landmark } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function Industries() {
    const industries = [
        {
            icon: Landmark,
            title: "Financial Services",
            slug: "financial-services",
            description: "Drive digital transformation in banking, insurance, and fintech with secure, scalable solutions.",
            caseStudy: "Reinventing digital banking for a major financial institution",
            image: "/images/modern-banking.webp",
            overlay: "bg-blue-600/10"
        },
        {
            icon: ShoppingCart,
            title: "Retail & E-commerce",
            slug: "retail-ecommerce",
            description: "Create seamless omnichannel experiences that drive customer loyalty and revenue growth.",
            caseStudy: "Omnichannel transformation for a leading retailer",
            image: "/images/retail-ecommerce.webp",
            overlay: "bg-purple-600/10"
        },
        {
            icon: Heart,
            title: "Healthcare",
            slug: "healthcare",
            description: "Improve patient outcomes with AI-powered diagnostics and modern healthcare platforms.",
            caseStudy: "AI-powered diagnostics platform",
            image: "/images/healthcare.webp",
            overlay: "bg-pink-600/10"
        },
        {
            icon: Factory,
            title: "Automotive",
            slug: "automotive",
            description: "Accelerate the future of mobility with SDV expertise and smart manufacturing.",
            caseStudy: "Next-gen software-defined vehicle platform",
            image: "/images/software-defined-vehicle.webp",
            overlay: "bg-orange-600/10"
        }
    ];

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="bg-tw-teal text-white pt-48 pb-32 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('/images/hero-impact.webp')` }}
            >
                <div className="absolute inset-0 bg-tw-dark-teal/80 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Who we work with
                        </h1>
                        <p className="font-serif italic text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                            We partner with industry leaders across sectors to deliver transformative solutions that drive real business impact.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="bg-white py-24 border-b border-gray-200 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-5xl mx-auto text-center">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-tw-black mb-6">
                            Trusted by the world's most ambitious organizations
                        </h2>
                        <p className="text-tw-body max-w-3xl mx-auto">
                            From Fortune 500 companies to innovative startups, we help organizations navigate complex challenges and seize new opportunities.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black mb-6">
                            Industries we serve
                        </h2>
                        <p className="text-tw-body">
                            Deep industry expertise combined with technical excellence to solve your unique challenges.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;
                            return (
                                <AnimatedSection
                                    key={index}
                                    direction={index % 2 === 0 ? "left" : "right"}
                                    delay={0.1}
                                    className="h-full"
                                >
                                    <div
                                        className="group h-full bg-white p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                                    >
                                        <div
                                            className="absolute top-0 right-0 w-full h-full bg-cover bg-center transition-transform group-hover:scale-110 duration-700 opacity-10"
                                            style={{ backgroundImage: `url(${industry.image})` }}
                                        ></div>
                                        <div className={`absolute inset-0 ${industry.overlay} opacity-20`}></div>

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="w-16 h-16 bg-tw-teal/10 rounded-full flex items-center justify-center group-hover:bg-tw-crimson/10 transition-colors">
                                                    <Icon className="w-8 h-8 text-tw-teal group-hover:text-tw-crimson transition-colors" />
                                                </div>
                                            </div>

                                            <h3 className="font-serif text-3xl font-bold text-tw-black mb-4 group-hover:text-tw-crimson transition-colors">
                                                {industry.title}
                                            </h3>

                                            <p className="text-tw-body mb-6">
                                                {industry.description}
                                            </p>

                                            <div className="border-t border-gray-200 pt-6 mt-6">
                                                <p className="text-sm font-bold text-tw-gray uppercase tracking-wider mb-2">Case Study</p>
                                                <p className="text-tw-black text-sm font-medium mb-4">{industry.caseStudy}</p>
                                                <Link href={`/industries/${industry.slug}`} className="flex items-center gap-2 text-tw-crimson font-bold hover:gap-4 transition-all">
                                                    Read more <ArrowRight className="w-5 h-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-tw-crimson text-white py-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">
                            Let's solve your industry's toughest challenges
                        </h2>
                        <p className="text-lg text-white/90 mb-12">
                            Connect with our industry experts to explore how we can help.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-white text-tw-crimson hover:bg-tw-teal hover:text-white shadow-xl transition-all hover:-translate-y-1">
                                Contact us
                            </Button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
