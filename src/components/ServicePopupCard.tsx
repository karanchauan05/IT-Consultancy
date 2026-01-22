'use client';

import { useState, useEffect } from 'react';
import { X, TrendingUp, Users, Clock, Award, ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Button } from './Button';
import Link from 'next/link';

interface ServiceStats {
    metric: string;
    value: string;
    icon: LucideIcon;
    description: string;
}

interface ServicePopupData {
    title: string;
    description: string;
    keyBenefits: string[];
    stats: ServiceStats[];
    technologies: string[];
    caseStudyTitle: string;
    caseStudyResult: string;
    link: string;
}

interface ServicePopupCardProps {
    data: ServicePopupData;
    isOpen: boolean;
    onClose: () => void;
}

export default function ServicePopupCard({ data, isOpen, onClose }: ServicePopupCardProps) {
    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-tw-teal to-tw-dark-teal text-white p-6 rounded-t-2xl relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">{data.title}</h2>
                    <p className="text-gray-200 text-lg">{data.description}</p>
                </div>

                <div className="p-6">
                    {/* Key Benefits */}
                    <div className="mb-8">
                        <h3 className="font-serif text-xl font-bold mb-4 text-tw-black">Key Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {data.keyBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-tw-crimson rounded-full flex-shrink-0"></div>
                                    <span className="text-tw-body">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mb-8">
                        <h3 className="font-serif text-xl font-bold mb-4 text-tw-black">Impact Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {data.stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="bg-tw-light-gray p-4 rounded-lg text-center">
                                        <div className="w-10 h-10 bg-tw-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Icon className="w-5 h-5 text-tw-teal" />
                                        </div>
                                        <div className="font-bold text-2xl text-tw-black mb-1">{stat.value}</div>
                                        <div className="font-medium text-sm text-tw-body mb-1">{stat.metric}</div>
                                        <div className="text-xs text-gray-500">{stat.description}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                        <h3 className="font-serif text-xl font-bold mb-4 text-tw-black">Technologies & Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-tw-teal/10 text-tw-teal rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Case Study */}
                    <div className="mb-8 bg-gradient-to-r from-tw-crimson/5 to-tw-teal/5 p-6 rounded-lg border border-gray-100">
                        <h3 className="font-serif text-xl font-bold mb-3 text-tw-black">Success Story</h3>
                        <h4 className="font-bold text-tw-crimson mb-2">{data.caseStudyTitle}</h4>
                        <p className="text-tw-body">{data.caseStudyResult}</p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={data.link} className="flex-1">
                            <Button variant="primary" className="w-full bg-tw-crimson hover:bg-tw-crimson/90">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/contact" className="flex-1">
                            <Button variant="outline" className="w-full border-tw-teal text-tw-teal hover:bg-tw-teal hover:text-white">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}