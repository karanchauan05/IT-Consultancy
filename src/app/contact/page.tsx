'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Mail, Phone, MapPin, Share2, Facebook, Instagram } from 'lucide-react';
import ContactForm from './ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

export default function Contact() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Section */}
            <section
                className="bg-tw-teal text-white pt-48 pb-32 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('/images/contact-hero.webp')` }}
            >
                <div className="absolute inset-0 bg-tw-dark-teal/85 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Get in touch
                        </h1>
                        <p className="font-serif italic text-lg md:text-xl text-gray-300 leading-relaxed">
                            Ready to transform your business? Let's start a conversation about how we can help you achieve extraordinary impact.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:pl-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <AnimatedSection direction="left">
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-tw-black mb-12">
                                    Send us a message
                                </h2>
                                <ContactForm />
                            </AnimatedSection>
                        </div>

                        {/* Contact Information */}
                        <div className="lg:col-span-4 lg:col-start-8">
                            <AnimatedSection direction="right">
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-tw-black mb-12">
                                    Other ways to reach us
                                </h2>

                                <div className="space-y-8 mb-12">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-tw-crimson/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-tw-crimson group-hover:text-white transition-all duration-300">
                                            <Mail className="w-6 h-6 text-tw-crimson group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-tw-black mb-2">Email</h3>
                                            <a href="mailto:info@nexusit.com" className="text-tw-gray hover:text-tw-crimson transition-colors">
                                                info@nexusit.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-tw-crimson/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-tw-crimson group-hover:text-white transition-all duration-300">
                                            <Phone className="w-6 h-6 text-tw-crimson group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-tw-black mb-2">Phone</h3>
                                            <a href="tel:+1-800-NEXUSIT" className="text-tw-gray hover:text-tw-crimson transition-colors">
                                                +1 (800) NEXUSIT
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-tw-crimson/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-tw-crimson group-hover:text-white transition-all duration-300">
                                            <MapPin className="w-6 h-6 text-tw-crimson group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-tw-black mb-2">Headquarters</h3>
                                            <p className="text-tw-gray">
                                                200 E Randolph St<br />
                                                Chicago, IL 60601<br />
                                                United States
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 bg-tw-crimson/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-tw-crimson group-hover:text-white transition-all duration-300">
                                            <Share2 className="w-6 h-6 text-tw-crimson group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-tw-black mb-2">Social Media</h3>
                                            <div className="flex gap-4 mt-1">
                                                <a href="#" className="text-tw-gray hover:text-tw-crimson transition-colors" aria-label="Facebook">
                                                    <Facebook className="w-5 h-5" />
                                                </a>
                                                <a href="#" className="text-tw-gray hover:text-tw-crimson transition-colors" aria-label="Instagram">
                                                    <Instagram className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-tw-light-gray p-8 rounded shadow-sm border border-gray-100">
                                    <h3 className="font-serif text-2xl font-bold text-tw-black mb-4">
                                        Looking for career opportunities?
                                    </h3>
                                    <p className="text-tw-body mb-6">
                                        Visit our careers page to explore open positions and learn more about life at NexusIT.
                                    </p>
                                    <Link href="/careers">
                                        <Button variant="primary" size="md" className="bg-tw-teal hover:bg-tw-crimson shadow-md border-none text-white">
                                            View careers
                                        </Button>
                                    </Link>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
