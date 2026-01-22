'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        interest: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            console.log("Contact message sent:", formData);
            setStatus('success');

            // Reset after 5 seconds
            setTimeout(() => {
                setStatus('idle');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    interest: '',
                    message: ''
                });
            }, 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-100 p-12 text-center rounded-lg animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-tw-black mb-4">Message Sent!</h3>
                <p className="text-tw-body max-w-md mx-auto mb-8">
                    Thank you for reaching out. Our team has received your message and will get back to you within 24 hours.
                </p>
                <Button
                    variant="primary"
                    className="bg-tw-crimson"
                    onClick={() => setStatus('idle')}
                >
                    Send another message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-tw-black mb-2 uppercase tracking-wider">
                        First Name *
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-tw-crimson focus:outline-none transition-colors"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-tw-black mb-2 uppercase tracking-wider">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-tw-crimson focus:outline-none transition-colors"
                        required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-bold text-tw-black mb-2 uppercase tracking-wider">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-tw-crimson focus:outline-none transition-colors"
                    required
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-bold text-tw-black mb-2 uppercase tracking-wider">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-tw-crimson focus:outline-none transition-colors"
                />
            </div>

            <div>
                <label htmlFor="interest" className="block text-sm font-bold text-tw-black mb-2 uppercase tracking-wider">
                    I'm interested in *
                </label>
                <select
                    id="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-tw-crimson focus:outline-none transition-colors"
                    required
                >
                    <option value="">Select an option</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="cloud">Cloud Transformation</option>
                    <option value="data">Data Modernization</option>
                    <option value="product">Product Innovation</option>
                    <option value="platform">Platform Modernization</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-bold text-tw-black mb-2 uppercase tracking-wider">
                    Message *
                </label>
                <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-tw-crimson focus:outline-none transition-colors resize-none"
                    required
                ></textarea>
            </div>

            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-5 h-5 border-2 border-gray-300 focus:ring-tw-crimson"
                    required
                />
                <label htmlFor="consent" className="text-sm text-tw-gray">
                    I agree to receive communications from NexusIT and understand that I can opt out at any time. *
                </label>
            </div>

            <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'loading'}
                className="w-full bg-tw-crimson hover:bg-tw-teal flex items-center justify-center gap-2"
            >
                {status === 'loading' ? 'Sending...' : (
                    <>Send message <Send className="w-5 h-5" /></>
                )}
            </Button>
        </form>
    );
}
