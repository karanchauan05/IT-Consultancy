'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FOOTER_SECTIONS = [
    {
        title: "Services",
        links: [
            { label: 'Scaling AI', href: '/services/scaling-ai' },
            { label: 'Customer Experience', href: '/services/customer-experience' },
            { label: 'Product Innovation', href: '/services/product-innovation' },
            { label: 'Data Modernization', href: '/services/data-modernization' },
            { label: 'Platform Modernization', href: '/services/platform-modernization' },
            { label: 'Application Management', href: '/services/application-management' }
        ]
    },{
        title: "Industries",
        links: [
            { label: 'Financial Services', href: '/industries/financial-services' },
            { label: 'Retail & eCommerce', href: '/industries/retail-ecommerce' },
            { label: 'Healthcare', href: '/industries/healthcare' },
            { label: 'Automotive', href: '/industries/automotive' }
        ]
    },
    {
        title: "Resources",
        links: [
            { label: 'AI Readiness Assessment', href: '/ai-readiness' },
            { label: 'Publications', href: '/resources/publications' },
            { label: 'Articles', href: '/resources/articles' }
        ]
    },
    {
        title: "Company",
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact Us', href: '/contact' }
        ]
    }
];

export default function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (title: string) => {
        setOpenSection(openSection === title ? null : title);
    };

    return (
        <footer className="footer-bg text-tw-black lg:text-white pt-16 lg:pt-24 pb-12 border-t border-gray-100 lg:border-none bg-white lg:bg-tw-teal">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Mobile Accordion Layout */}
                <div className="lg:hidden text-left mb-12">
                    {FOOTER_SECTIONS.map((section) => (
                        <div key={section.title} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="w-full flex items-center justify-between py-6 focus:outline-none"
                            >
                                <span className="text-xl font-medium font-sans">{section.title}</span>
                                <ChevronDown
                                    className={cn(
                                        "w-6 h-6 text-tw-crimson transition-transform duration-300",
                                        openSection === section.title && "rotate-180"
                                    )}
                                />
                            </button>
                            <div className={cn(
                                "overflow-hidden transition-all duration-300",
                                openSection === section.title ? "max-h-96 pb-6" : "max-h-0"
                            )}>
                                <ul className="space-y-4 pt-2">
                                    {section.links.map(link => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="text-gray-600 hover:text-tw-crimson transition-colors block text-lg py-1">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    <div className="py-12 bg-white">
                        <h3 className="text-xl font-medium mb-6">Connect with us</h3>
                        <div className="flex justify-start gap-6">
                            <Link href="#" className="text-tw-crimson hover:opacity-80 transition-opacity"><Facebook className="w-7 h-7" /></Link>
                            <Link href="#" className="text-tw-crimson hover:opacity-80 transition-opacity"><Instagram className="w-7 h-7" /></Link>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Tightly Packaged Columns */}
                <div className="hidden lg:flex justify-center gap-x-24 mb-20 text-left">
                    <div className="max-w-[250px]">
                        <h2 className="font-serif text-3xl font-medium mb-5">NexusIT</h2>
                        <p className="text-sm text-gray-400 leading-relaxed mb-5">
                            Solving complexity through strategy and design.
                            We are a global design and technology consultancy.
                            Launchpad for success and greatness.
                            East in west, NexusIT is just the best.
                        </p>
                        <div className="flex justify-start gap-5">
                            <Link href="#" className="hover:text-tw-crimson transition-colors"><Facebook className="w-6 h-6" /></Link>
                            <Link href="#" className="hover:text-tw-crimson transition-colors"><Instagram className="w-6 h-6" /></Link>
                        </div>
                        
                    </div>

                    {FOOTER_SECTIONS.map((section) => (
                        <div key={section.title} className="min-w-[150px]">
                            <h3 className="font-medium mb-6 uppercase tracking-wider text-xs text-gray-400">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map(link => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="hover:text-tw-crimson transition-colors text-[15px] text-gray-300 block whitespace-nowrap">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright & Legal Section */}
                <div className="border-t border-gray-100 lg:border-white/10 pt-10 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-500 lg:text-gray-400 gap-y-4">
                    <div>
                        &copy; 2025-{new Date().getFullYear()} NexusIT, Inc. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-2">
                        <Link href="/privacy" className="hover:text-tw-crimson lg:hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-tw-crimson lg:hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
