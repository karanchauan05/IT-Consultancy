"use client";

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { X, CheckCircle, Mail } from 'lucide-react';

export default function NewsletterSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            console.log("Newsletter subscription:", { email });
            setStatus('success');
            setEmail('');

            // Close modal after showing success message
            setTimeout(() => {
                setIsModalOpen(false);
                setStatus('idle');
            }, 3000);
        }, 1000);
    };

    return (
        <>
            <section className="bg-tw-teal text-white py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">
                            Stay ahead of the curve
                        </h2>
                        <p className="text-lg text-gray-300 mb-12">
                            Subscribe to our newsletter for the latest resources delivered to your inbox.
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-tw-crimson hover:bg-pink-600 hover:text-white"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Subscribe now
                        </Button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-md bg-white text-tw-black rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-tw-crimson transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8">
                            <div className="w-16 h-16 bg-tw-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8 text-tw-teal" />
                            </div>

                            <h3 className="font-serif text-2xl font-bold text-center mb-2">
                                Subscribe to Nexus Resources
                            </h3>
                            <p className="text-gray-500 text-center mb-8">
                                Get the latest technology trends and leadership resources delivered weekly.
                            </p>

                            {status === 'success' ? (
                                <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center justify-center gap-3">
                                    <CheckCircle size={24} />
                                    <span className="font-medium">Successfully subscribed!</span>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="name@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tw-teal focus:border-tw-teal outline-none transition-all"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-tw-crimson hover:bg-tw-black text-white"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                    </Button>
                                    <p className="text-xs text-gray-400 text-center mt-4">
                                        No spam. Unsubscribe anytime.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
