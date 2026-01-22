'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { ARTICLES } from '@/lib/resources-data';
import AnimatedSection from '@/components/AnimatedSection';

export default function Articles() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />
            <section className="pt-48 pb-20 container mx-auto px-4 md:px-6 overflow-hidden">
                <AnimatedSection direction="up">
                    <Link href="/resources" className="inline-flex items-center gap-2 text-tw-gray hover:text-tw-crimson mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Resources
                    </Link>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Articles</h1>
                    <p className="text-xl text-tw-gray mb-12">Expert perspectives on technology, strategy, and innovation.</p>
                </AnimatedSection>

                <div className="grid gap-8">
                    {ARTICLES.map((article, index) => (
                        <AnimatedSection key={article.slug} direction="up" delay={index * 0.1}>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-gray-200 p-6 md:p-8 hover:shadow-xl transition-all duration-300 bg-white group">
                                <div className="lg:col-span-4 overflow-hidden bg-gray-100 aspect-[4/3] rounded-sm">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="lg:col-span-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-tw-crimson font-bold uppercase tracking-widest text-[10px]">
                                            {article.category}
                                        </span>
                                        <span className="text-gray-400 text-xs flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {article.readTime}
                                        </span>
                                    </div>
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-tw-black mb-4 group-hover:text-tw-crimson transition-colors">
                                        <Link href={`/resources/articles/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h2>
                                    <p className="text-tw-body text-base mb-6">
                                        {article.description}
                                    </p>
                                    <Link
                                        href={`/resources/articles/${article.slug}`}
                                        className="flex items-center gap-2 text-tw-crimson font-bold hover:gap-4 transition-all"
                                    >
                                        Read article <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
