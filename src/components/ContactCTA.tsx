'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ContactCTA() {
    return (
        <section className="py-24 bg-tw-teal text-white text-center overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection
                    direction="up"
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                        Ready to transform your business?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed font-serif italic">
                        Let's discuss how we can help you navigate complexity and build for the future.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-tw-crimson hover:bg-white hover:text-tw-crimson text-white px-8 py-4 font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                    >
                        Connect with us
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}
