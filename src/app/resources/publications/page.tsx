'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/resources-data';
import AnimatedSection from '@/components/AnimatedSection';

export default function Publications() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />
            <section className="pt-48 pb-20 container mx-auto px-4 md:px-6 overflow-hidden">
                <AnimatedSection direction="up">
                    <Link href="/resources" className="inline-flex items-center gap-2 text-tw-gray hover:text-tw-crimson mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Resources
                    </Link>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Publications</h1>
                    <p className="text-xl text-tw-gray mb-12">Deep dives, whitepapers, and industry case studies.</p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {CASE_STUDIES.map((study, index) => (
                        <AnimatedSection key={study.slug} direction="up" delay={index * 0.1}>
                            <Link
                                href={`/resources/publications/${study.slug}`}
                                className="group block"
                            >
                                <div className="relative aspect-[16/9] mb-6 overflow-hidden bg-gray-100">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-tw-crimson text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                                            Case Study
                                        </span>
                                    </div>
                                </div>
                                <span className="text-tw-crimson font-bold uppercase tracking-widest text-xs mb-3 block">
                                    {study.category}
                                </span>
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-tw-black mb-4 group-hover:text-tw-crimson transition-colors">
                                    {study.title}
                                </h2>
                                <p className="text-tw-body mb-6 line-clamp-2">
                                    {study.description}
                                </p>
                                <span className="flex items-center gap-2 text-tw-crimson font-bold group-hover:gap-4 transition-all">
                                    Read the case study <ArrowRight className="w-5 h-5" />
                                </span>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
