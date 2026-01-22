'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import NewsletterSection from '@/components/NewsletterSection';
import { ArrowRight, BookOpen, Podcast, FileText, Newspaper } from 'lucide-react';
import { ARTICLES, CASE_STUDIES } from '@/lib/resources-data';
import AnimatedSection from '@/components/AnimatedSection';
import AIReadinessSection from '@/components/AIReadinessSection';

export default function Resources() {
    const featuredResources = [
        {
            type: "Featured Article",
            ...ARTICLES[0],
            href: `/resources/articles/${ARTICLES[0].slug}`
        },
        {
            type: "Case Study",
            ...CASE_STUDIES[0],
            href: `/resources/publications/${CASE_STUDIES[0].slug}`
        },
        {
            type: "Featured Article",
            ...ARTICLES[1],
            href: `/resources/articles/${ARTICLES[1].slug}`
        }
    ];

    const latestArticles = ARTICLES;

    const publications = [
        {
            icon: BookOpen,
            title: "Publications",
            description: "Deep dives into how we solve complex problems for industry leaders.",
            link: "/resources/publications"
        },
        {
            icon: FileText,
            title: "Articles",
            description: "Expert insights on technology and business transformation.",
            link: "/resources/articles"
        },
        {
            icon: Newspaper,
            title: "Technology Radar",
            description: "Our flagship publication tracking technology trends.",
            link: "/resources/technology-radar"
        }
    ];

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="bg-tw-black text-white pt-48 pb-32 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('/images/resources-hero.webp')` }}
            >
                <div className="absolute inset-0 bg-tw-black/80 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Resources
                        </h1>
                        <p className="font-serif italic text-lg md:text-xl text-gray-400 leading-relaxed mb-12">
                            Our latest thinking on the issues that matter most in technology and business. Explore articles, reports, podcasts and more.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
            <AIReadinessSection />

            {/* Latest Articles */}
            <section className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black">
                            Featured resources
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredResources.map((resource, index) => (
                            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                                <Link
                                    href={resource.href}
                                    className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 block h-full"
                                >
                                    <div
                                        className="h-80 relative bg-cover bg-center overflow-hidden"
                                        style={{ backgroundImage: `url(${resource.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90"></div>
                                        <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                            <span className="bg-white text-tw-black text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-4 inline-block">
                                                {resource.type}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-tw-teal/10 transition-transform duration-700 group-hover:scale-110"></div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 text-sm text-tw-gray mb-4">
                                            <span className="font-bold uppercase tracking-wider">{resource.category}</span>
                                            <span className="w-1 h-1 bg-tw-gray rounded-full"></span>
                                            <span>{resource.readTime}</span>
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-tw-black mb-4 group-hover:text-tw-crimson transition-colors">
                                            {resource.title}
                                        </h3>
                                        <p className="text-tw-body mb-6">
                                            {resource.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-tw-crimson font-bold group-hover:gap-4 transition-all">
                                            Read more <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black mb-6">
                            Publications and tools
                        </h2>
                        <p className="max-w-3xl mx-auto">
                            Curated resources to help you navigate the technology landscape.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {publications.map((pub, index) => {
                            const Icon = pub.icon;
                            return (
                                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                                    <Link
                                        href={pub.link}
                                        className="group p-8 border-2 border-gray-200 hover:border-tw-crimson transition-all duration-300 block h-full"
                                    >
                                        <div className="w-14 h-14 bg-tw-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-crimson/10 transition-colors">
                                            <Icon className="w-7 h-7 text-tw-teal group-hover:text-tw-crimson transition-colors" />
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-tw-black mb-3 group-hover:text-tw-crimson transition-colors">
                                            {pub.title}
                                        </h3>
                                        <p className="text-tw-body mb-6">
                                            {pub.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-tw-crimson font-bold opacity-100 transition-all group-hover:gap-4">
                                            Explore <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Latest Articles */}
            <section className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-tw-black mb-6">
                                Latest articles
                            </h2>
                            <p className="text-tw-body">
                                Stay up to date with our latest thinking.
                            </p>
                        </div>
                        <Link href="/resources/articles" className="hidden md:flex items-center gap-2 text-tw-crimson font-bold hover:gap-4 transition-all">
                            View all <ArrowRight className="w-5 h-5" />
                        </Link>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestArticles.map((article, index) => (
                            <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                                <Link
                                    href={`/resources/articles/${article.slug}`}
                                    className="group bg-white p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 block h-full"
                                >
                                    <div className="flex items-center gap-3 text-sm text-tw-gray mb-4">
                                        <span className="font-bold uppercase tracking-wider text-tw-crimson">{article.category}</span>
                                        <span className="w-1 h-1 bg-tw-gray rounded-full"></span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-tw-black mb-3 group-hover:text-tw-crimson transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-tw-gray">{article.date}</p>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <AnimatedSection direction="up">
                <NewsletterSection />
            </AnimatedSection>

            <Footer />
        </main>
    );
}
