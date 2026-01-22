'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowRight, Sparkles, Layers, Database, Cpu, Cloud, Users, Info } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ServicePopupCard from '@/components/ServicePopupCard';
import { SERVICES_POPUP_DATA } from '@/lib/services-popup-data';
import { useState } from 'react';

export default function Services() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const solutions = [
        {
            icon: Sparkles,
            title: "Scaling AI",
            description: "Transform your business with enterprise-grade AI solutions that deliver measurable impact.",
            link: "/services/scaling-ai",
            image: "/images/generative-ai.webp",
            slug: "scaling-ai"
        },
        {
            icon: Users,
            title: "Customer Experience",
            description: "Create seamless, personalized experiences that delight customers across every touchpoint.",
            link: "/services/customer-experience",
            image: "/images/customer-experience.webp",
            slug: "customer-experience"
        },
        {
            icon: Cpu,
            title: "Product Innovation",
            description: "Build products that matter with modern engineering practices and user-centered design.",
            link: "/services/product-innovation",
            image: "/images/product-innovation.webp",
            slug: "product-innovation"
        },
        {
            icon: Database,
            title: "Data Modernization",
            description: "Unlock the value of your data with modern platforms and analytics capabilities.",
            link: "/services/data-modernization",
            image: "/images/data-modernization.webp",
            slug: "data-modernization"
        },
        {
            icon: Cloud,
            title: "Enterprise Platform Modernization",
            description: "Modernize legacy systems with cloud-native architectures and DevOps practices.",
            link: "/services/platform-modernization",
            image: "/images/platform-modernization.webp",
            slug: "platform-modernization"
        },
        {
            icon: Layers,
            title: "Digital Application Management",
            description: "Optimize and evolve your digital applications for maximum business value.",
            link: "/services/application-management",
            image: "/images/application-management.webp",
            slug: "application-management"
        }
    ];

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="bg-tw-teal text-white pt-48 pb-32 relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('/images/services-hero.webp')` }}
            >
                <div className="absolute inset-0 bg-tw-dark-teal/80 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Services
                        </h1>
                        <p className="font-serif italic text-xl md text-gray-300 leading-relaxed mb-12">
                            We deliver extraordinary impact through industry-leading practices, blending design and AI expertise to solve your toughest challenges.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-tw-crimson hover:bg-white hover:text-tw-teal shadow-xl transition-all hover:-translate-y-1">
                                Get in touch
                            </Button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-5xl mx-auto text-center">
                        <h2 className="font-serif text-2xl md:text-4xl font-bold text-tw-black mb-8 leading-tight">
                            We are a global technology consultancy that delivers extraordinary impact through industry-leading practices
                        </h2>
                    </AnimatedSection>
                </div>
            </section>

            {/* Solutions Grid */}
            <section id="solutions" className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="mb-16 text-center">
                        <h2 className="font-serif text-2xl md:text-4xl font-bold text-tw-black mb-6">
                            Our solutions
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => {
                            const Icon = solution.icon;
                            return (
                                <AnimatedSection
                                    key={index}
                                    direction="up"
                                    delay={index * 0.1}
                                    className="h-full"
                                >
                                    <div className="relative">
                                        {/* Interactive Badge */}
                                        <div className="absolute -top-2 -right-2 bg-tw-crimson text-white text-xs px-2 py-1 rounded-full font-bold z-10 shadow-lg">
                                            Interactive
                                        </div>
                                        
                                        <Link
                                            href={solution.link}
                                            className="group block h-full bg-white p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                                        >
                                        <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{ backgroundImage: `url(${solution.image})` }}></div>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-tw-crimson/5 -mr-16 -mt-16 rounded-full transition-transform group-hover:scale-150 duration-700"></div>

                                        {/* Info Button */}
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedService(solution.slug);
                                            }}
                                            className="absolute top-4 right-4 w-8 h-8 bg-tw-teal/10 hover:bg-tw-teal hover:text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
                                            title="View detailed metrics and case studies"
                                        >
                                            <Info className="w-4 h-4" />
                                        </button>

                                        <div className="relative z-10">
                                            <div className="w-14 h-14 bg-tw-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-crimson/10 transition-colors">
                                                <Icon className="w-7 h-7 text-tw-teal group-hover:text-tw-crimson transition-colors" />
                                            </div>

                                            <h3 className="font-serif text-2xl font-bold text-tw-black mb-4 group-hover:text-tw-crimson transition-colors">
                                                {solution.title}
                                            </h3>

                                            <p className="text-tw-body mb-6">
                                                {solution.description}
                                            </p>

                                            <div className="flex items-center gap-2 text-tw-crimson font-bold group-hover:gap-4 transition-all">
                                                Learn more <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </Link>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-tw-black text-white py-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">
                            Ready to transform your business?
                        </h2>
                        <p className="text-lg text-gray-400 mb-12">
                            Let's discuss how we can help you achieve extraordinary impact.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-tw-crimson hover:bg-white hover:text-tw-black transition-all hover:-translate-y-1 shadow-2xl">
                                Start the conversation
                            </Button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Popup Card */}
            {selectedService && (
                <ServicePopupCard
                    data={SERVICES_POPUP_DATA[selectedService]}
                    isOpen={!!selectedService}
                    onClose={() => setSelectedService(null)}
                />
            )}

            <Footer />
        </main>
    );
}

