'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowRight, Target, Users, Globe, Award, Heart, Leaf } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function AboutClient() {
    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "We pursue excellence in everything we do, from code quality to partner relationships."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We believe the best solutions come from diverse teams working together."
        },
        {
            icon: Heart,
            title: "Empathy",
            description: "We put ourselves in our partners' and colleagues' shoes to truly understand their needs."
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "We're committed to creating positive change that extends beyond our projects."
        }
    ];

    const milestones = [
        { year: "1993", event: "Founded in Chicago with a vision to revolutionize software development" },
        { year: "2000", event: "Expanded globally with offices in India and Australia" },
        { year: "2010", event: "Pioneered Agile and DevOps practices across enterprise partners" },
        { year: "2015", event: "Launched Technology Radar, now a leading industry publication" },
        { year: "2020", event: "Became a leader in AI and machine learning consulting" },
        { year: "2024", event: "Serving Fortune 500 companies across 18 countries" }
    ];

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="bg-tw-black text-white pt-48 pb-32 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('/images/about-hero.webp')` }}
            >
                <div className="absolute inset-0 bg-tw-black/80 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            About NexusIT
                        </h1>
                        <p className="font-serif italic text-lg md:text-xl text-gray-400 leading-relaxed">
                            We are a global technology consultancy that delivers extraordinary impact through industry-leading practices, blending design and AI expertise.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection direction="left">
                            <h2 className="font-serif text-4xl md:text-6xl font-bold text-tw-black mb-12 leading-tight">
                                Our mission is to create extraordinary impact for our partners and the world
                            </h2>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <AnimatedSection direction="right" delay={0.2}>
                                <h3 className="font-serif text-2xl font-bold text-tw-black mb-4">What we believe</h3>
                                <p className="text-tw-body">
                                    Technology is a powerful force for good. When applied thoughtfully, it can transform businesses, improve lives, and create a more sustainable future. We're committed to using our expertise to drive positive change.
                                </p>
                            </AnimatedSection>
                            <AnimatedSection direction="right" delay={0.4}>
                                <h3 className="font-serif text-2xl font-bold text-tw-black mb-4">How we work</h3>
                                <p className="text-tw-body">
                                    We partner with organizations as true collaborators, bringing deep technical expertise and business acumen to every engagement. Our teams work side-by-side with yours to build capabilities that last.
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section id="values" className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="mb-16 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black mb-6">
                            Our values
                        </h2>
                        <p className="text-tw-body max-w-3xl mx-auto">
                            The principles that guide everything we do.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <AnimatedSection
                                    key={index}
                                    direction="up"
                                    delay={index * 0.1}
                                    className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-14 h-14 bg-tw-crimson/10 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-tw-crimson" />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-tw-black mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-tw-body">
                                        {value.description}
                                    </p>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section id="history" className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="left" className="mb-16 pl-[20px]">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black mb-6">
                            Our history
                        </h2>
                        <p className="text-tw-body max-w-3xl">
                            Three decades of innovation and impact.
                        </p>
                    </AnimatedSection>

                    <div className="max-w-4xl mx-auto relative border-l-2 border-gray-100 ml-4 md:ml-12 pl-8 md:pl-12 space-y-12">
                        {milestones.map((milestone, index) => (
                            <AnimatedSection
                                key={index}
                                direction="right"
                                delay={index * 0.05}
                                className="flex flex-col md:flex-row gap-4 md:gap-8 group relative"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] md:-left-[59px] top-2 w-5 h-5 md:w-6 md:h-6 bg-white border-4 border-tw-teal rounded-full group-hover:border-tw-crimson group-hover:scale-125 transition-all duration-300"></div>

                                <div className="flex-shrink-0">
                                    <div className="text-tw-crimson font-serif font-bold text-3xl md:text-4xl">
                                        {milestone.year}
                                    </div>
                                </div>
                                <div className="flex-1 pt-1 md:pt-2">
                                    <p className="text-lg md:text-xl text-tw-black font-medium leading-relaxed">
                                        {milestone.event}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Impact */}
            <section id="social-change" className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedSection direction="up" className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black mb-6">
                                Committed to social change
                            </h2>
                            <p className="text-tw-body max-w-2xl mx-auto">
                                We believe technology should be a force for good. That's why we're committed to diversity, equity, inclusion, sustainability, and social impact initiatives.
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <AnimatedSection direction="up" delay={0.1} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors duration-300">
                                    <Leaf className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-tw-black mb-3">Sustainability</h3>
                                <p className="text-sm text-tw-gray leading-relaxed">
                                    Carbon neutral operations and sustainable technology practices.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection direction="up" delay={0.2} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors duration-300">
                                    <Users className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-tw-black mb-3">Diversity & Inclusion</h3>
                                <p className="text-sm text-tw-gray leading-relaxed">
                                    Building a workplace where everyone belongs and can thrive.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection direction="up" delay={0.3} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                                    <Heart className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="font-serif text-xl font-bold text-tw-black mb-3">Community Impact</h3>
                                <p className="text-sm text-tw-gray leading-relaxed">
                                    Pro bono work and partnerships with non-profits worldwide.
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="py-24 bg-tw-teal text-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <Award className="w-16 h-16 mx-auto mb-8" />
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                            Recognized for excellence
                        </h2>
                        <p className="text-lg text-gray-300 mb-12">
                            AWS Global Partner of the Year • Gartner Magic Quadrant Leader • Best Places to Work
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-tw-crimson text-white py-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">
                            Let's create extraordinary impact together
                        </h2>
                        <p className="text-lg text-white/90 mb-12">
                            Partner with us to transform your business and drive meaningful change.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-white text-tw-crimson hover:bg-tw-black hover:text-white">
                                Get in touch
                            </Button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
