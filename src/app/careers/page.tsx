'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowRight, Globe, Users, Zap, Heart, Lightbulb, Award, TrendingUp, Filter, X, ChevronRight } from 'lucide-react';
import { JOB_POSTS } from '@/lib/jobs-data';
import AnimatedSection from '@/components/AnimatedSection';

export default function Careers() {
    const [level, setLevel] = useState('All');

    // Extract unique values for filters
    const levels = ['All', ...Array.from(new Set(JOB_POSTS.map(job => job.level)))];

    // Filter jobs
    const filteredJobs = JOB_POSTS.filter(job => {
        const matchesLevel = level === 'All' || job.level === level;
        return matchesLevel;
    });

    const clearFilters = () => {
        setLevel('All');
    };

    const benefits = [
        {
            icon: Lightbulb,
            title: "Continuous Learning",
            description: "Access to world-class training, conferences, and learning budgets to fuel your growth."
        },
        {
            icon: Globe,
            title: "Global Opportunities",
            description: "Work with teams across 18 countries and experience different cultures and markets."
        },
        {
            icon: Heart,
            title: "Work-Life Balance",
            description: "Flexible working arrangements, generous PTO, and wellness programs."
        },
        {
            icon: Users,
            title: "Inclusive Culture",
            description: "A diverse, equitable workplace where everyone belongs and can thrive."
        },
        {
            icon: Award,
            title: "Competitive Compensation",
            description: "Market-leading salaries, bonuses, and comprehensive benefits packages."
        },
        {
            icon: TrendingUp,
            title: "Career Growth",
            description: "Clear career paths with mentorship and opportunities to lead impactful projects."
        }
    ];

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative bg-tw-crimson text-white pt-48 pb-32 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('/images/careers-hero.webp')` }}
            >
                <div className="absolute inset-0 bg-tw-crimson/90 z-0"></div>
                <div className="absolute inset-0 opacity-10 z-1">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Once at NexusIT, always at NexusIT
                        </h1>
                        <p className="font-serif italic text-lg md:text-xl text-white/90 leading-relaxed mb-12">
                            Join a global community of technologists, designers, and consultants who are passionate about creating extraordinary impact.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Culture Section */}
            <section id="life-at-nexusit" className="py-24 bg-white scroll-mt-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <AnimatedSection direction="left">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black mb-8">
                                Life at NexusIT
                            </h2>
                            <p className="text-tw-body mb-6 text-lg">
                                We're more than a consultancy—we're a community. We believe in the power of technology to transform businesses and improve lives, but we also believe in the power of people.
                            </p>
                            <p className="text-tw-body mb-8 text-lg">
                                Our culture is built on collaboration, continuous learning, and a commitment to excellence. We empower our people to do their best work while maintaining a healthy work-life balance.
                            </p>
                            <div className="bg-tw-light-gray p-8 rounded-lg border-l-4 border-tw-crimson shadow-sm">
                                <h3 className="font-bold text-xl mb-2 text-tw-black">"Best Place to Work"</h3>
                                <p className="text-tw-body">Recognized for our inclusive environment and employee satisfaction across multiple regions.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="grid grid-cols-2 gap-4">
                            <div
                                className="h-64 bg-tw-teal rounded bg-cover bg-center relative overflow-hidden group shadow-lg"
                                style={{ backgroundImage: `url('/images/careers-hero.webp')` }}
                            >
                                <div className="absolute inset-0 bg-tw-teal/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div
                                className="h-64 bg-tw-crimson rounded mt-8 bg-cover bg-center relative overflow-hidden group shadow-lg"
                                style={{ backgroundImage: `url('/images/customer-experience.webp')` }}
                            >
                                <div className="absolute inset-0 bg-tw-crimson/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div
                                className="h-64 bg-purple-600 rounded -mt-8 bg-cover bg-center relative overflow-hidden group shadow-lg"
                                style={{ backgroundImage: `url('/images/culture-3.webp')` }}
                            >
                                <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div
                                className="h-64 bg-orange-500 rounded bg-cover bg-center relative overflow-hidden group shadow-lg"
                                style={{ backgroundImage: `url('/images/culture-4.webp')` }}
                            >
                                <div className="absolute inset-0 bg-orange-500/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="mb-16 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black mb-6">
                            Why join NexusIT?
                        </h2>
                        <p className="text-tw-body max-w-3xl mx-auto">
                            We invest in our people because we know that extraordinary impact comes from extraordinary teams.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                                    <div className="bg-white p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group">
                                        <div className="w-14 h-14 bg-tw-crimson/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-crimson group-hover:text-white transition-all duration-300">
                                            <Icon className="w-7 h-7 text-tw-crimson group-hover:text-white" />
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-tw-black mb-4 group-hover:text-tw-crimson transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-tw-body">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section id="open-positions" className="bg-tw-light-gray border-b border-gray-200 py-8 scroll-mt-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" delay={0.1}>
                        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                            <div className="flex items-center gap-2 mb-4 lg:mb-0">
                                <Filter className="w-5 h-5 text-tw-crimson" />
                                <span className="font-bold text-tw-black uppercase tracking-wider text-sm">Filter Roles</span>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
                                {(level !== 'All') && (
                                    <button
                                        onClick={clearFilters}
                                        className="order-last lg:order-first mt-4 lg:mt-0 lg:mr-4 text-sm text-tw-gray hover:text-tw-crimson flex items-center gap-1 transition-colors self-end lg:self-center"
                                    >
                                        <X className="w-4 h-4" /> Clear filters
                                    </button>
                                )}
                                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                    {/* Level Filter */}
                                    <div className="relative group min-w-[200px] flex-1">
                                        <select
                                            value={level}
                                            onChange={(e) => setLevel(e.target.value)}
                                            className="w-full appearance-none bg-white border border-gray-300 px-4 py-3 pr-8 rounded focus:outline-none focus:border-tw-crimson transition-colors cursor-pointer text-tw-body font-medium shadow-sm hover:border-tw-crimson/50"
                                        >
                                            {levels.map(lvl => (
                                                <option key={lvl} value={lvl}>{lvl === 'All' ? 'All Levels' : lvl}</option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* All Roles */}
            <section className="py-20 bg-white min-h-[50vh] overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="flex justify-between items-center mb-8">
                        <p className="text-gray-500 font-medium">
                            Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
                        </p>
                    </AnimatedSection>

                    <div className="space-y-4">
                        {filteredJobs.map((role, index) => (
                            <AnimatedSection key={role.id} direction="up" delay={index * 0.05}>
                                <Link
                                    href={`/careers/${role.id}`}
                                    className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border-2 border-gray-200 hover:border-tw-crimson hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="font-serif text-2xl font-bold text-tw-black mb-2 group-hover:text-tw-crimson transition-colors">
                                            {role.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-tw-gray">
                                            <span className="flex items-center gap-2 uppercase tracking-widest font-bold text-[10px] text-gray-500">
                                                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                                                {role.level}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-tw-crimson font-bold group-hover:gap-4 transition-all">
                                        View role <ArrowRight className="w-5 h-5" />
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}

                        {filteredJobs.length === 0 && (
                            <AnimatedSection direction="up">
                                <div className="text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">No positions found</h3>
                                    <p className="text-gray-500 mb-6">Try adjusting your filters to see more results.</p>
                                    <button
                                        onClick={clearFilters}
                                        className="px-8 py-3 bg-tw-crimson text-white font-bold rounded hover:bg-tw-black transition-colors shadow-lg"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            </AnimatedSection>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
