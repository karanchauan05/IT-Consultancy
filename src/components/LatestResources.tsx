'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES, ARTICLES } from '@/lib/resources-data';
import AnimatedSection from './AnimatedSection';

export default function LatestResources() {
    const featuredPublication = CASE_STUDIES[0];
    const latestArticles = ARTICLES.slice(0, 2);

    return (
        <section className="py-24 bg-tw-light-gray overflow-hidden" id="resources">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection
                    direction="up"
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-tw-black mb-6">
                            Latest Insights
                        </h2>
                        <p className="text-lg text-tw-gray leading-relaxed">
                            Deep dives into technology, strategy, and the future of business.
                        </p>
                    </div>
                    <Link href="/resources" className="group flex items-center gap-2 font-medium text-tw-crimson hover:text-tw-black transition-colors">
                        View all resources
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Column 1: Featured Publication (Large, spans 2 columns) */}
                    <AnimatedSection
                        direction="left"
                        className="lg:col-span-2"
                    >
                        <Link
                            href={`/resources/publications/${featuredPublication.slug}`}
                            className="group flex flex-col h-full bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-64 lg:h-96 overflow-hidden">
                                <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-tw-crimson uppercase tracking-widest rounded-sm">
                                    Publication
                                </span>
                                <img
                                    src={featuredPublication.image}
                                    alt={featuredPublication.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                <div className="text-xs font-medium text-gray-400 mb-4 flex items-center gap-2">
                                    <span>{featuredPublication.date}</span>
                                    <span>•</span>
                                    <span>{featuredPublication.readTime}</span>
                                </div>
                                <h3 className="font-serif text-3xl lg:text-5xl font-medium text-tw-black mb-6 leading-tight group-hover:text-tw-crimson transition-colors">
                                    {featuredPublication.title}
                                </h3>
                                <p className="text-tw-body text-lg mb-8 line-clamp-4">
                                    {featuredPublication.description}
                                </p>
                                <div className="mt-auto flex items-center text-sm font-bold text-tw-black group-hover:text-tw-crimson transition-colors">
                                    Read Publication <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>

                    {/* Column 2: Two Articles (Stacked, narrower column) */}
                    <div className="flex flex-col gap-8 lg:col-span-1 h-full">
                        {latestArticles.map((article, idx) => (
                            <AnimatedSection
                                key={idx}
                                delay={0.2}
                                direction="right"
                                className="flex-1"
                            >
                                <Link
                                    href={`/resources/articles/${article.slug}`}
                                    className="group flex flex-col sm:flex-row lg:flex-col h-full bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="relative w-full sm:w-2/5 lg:w-full h-48 sm:h-auto lg:h-48 overflow-hidden shrink-0">
                                        <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-tw-crimson uppercase tracking-widest rounded-sm">
                                            Article
                                        </span>
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow justify-center">
                                        <div className="text-xs font-medium text-gray-400 mb-3 flex items-center gap-2">
                                            <span>{article.date}</span>
                                            <span>•</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                        <h3 className="font-serif text-xl font-medium text-tw-black mb-3 leading-tight group-hover:text-tw-crimson transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-tw-body text-sm mb-4 line-clamp-2">
                                            {article.description}
                                        </p>
                                        <div className="mt-auto flex items-center text-sm font-bold text-tw-black group-hover:text-tw-crimson transition-colors">
                                            Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
