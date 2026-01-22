"use client";

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { X, Upload, CheckCircle } from 'lucide-react';
import type { JobPost } from '@/lib/jobs-data';

interface JobApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
    jobId: string;
}

export default function JobApplicationModal({ isOpen, onClose, jobTitle, jobId }: JobApplicationModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        resume: null as File | null,
        coverLetter: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API submission
        console.log("Submitting Application:", {
            jobId,
            jobTitle,
            ...formData,
            resumeName: formData.resume?.name
        });

        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    linkedin: '',
                    resume: null,
                    coverLetter: ''
                });
            }, 2000);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-tw-crimson transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="font-serif text-3xl font-bold text-tw-black mb-4">Application Sent!</h3>
                            <p className="text-gray-600 max-w-md">
                                Thank you for applying to the <span className="font-bold">{jobTitle}</span> position. We've received your details and will be in touch soon.
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8 border-b border-gray-100 pb-6">
                                <h2 className="font-serif text-3xl font-bold text-tw-black mb-2">Apply for this role</h2>
                                <p className="text-gray-500">
                                    You are applying for: <span className="font-bold text-tw-teal">{jobTitle}</span>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="fullName" className="text-sm font-bold text-tw-black">Full Name *</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tw-crimson/20 focus:border-tw-crimson outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-tw-black">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tw-crimson/20 focus:border-tw-crimson outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold text-tw-black">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tw-crimson/20 focus:border-tw-crimson outline-none transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="linkedin" className="text-sm font-bold text-tw-black">LinkedIn Profile</label>
                                        <input
                                            type="url"
                                            id="linkedin"
                                            name="linkedin"
                                            value={formData.linkedin}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tw-crimson/20 focus:border-tw-crimson outline-none transition-all"
                                            placeholder="linkedin.com/in/johndoe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-tw-black">Resume/CV *</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors text-center cursor-pointer relative">
                                        <input
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleFileChange}
                                            required
                                        />
                                        <div className="flex flex-col items-center gap-2">
                                            <Upload className="w-8 h-8 text-gray-400" />
                                            {formData.resume ? (
                                                <span className="font-bold text-tw-teal">{formData.resume.name}</span>
                                            ) : (
                                                <>
                                                    <span className="text-sm font-medium text-gray-600">Click to upload or drag and drop</span>
                                                    <span className="text-xs text-gray-400">PDF, DOC, DOCX (Max 5MB)</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="coverLetter" className="text-sm font-bold text-tw-black">Cover Letter</label>
                                    <textarea
                                        id="coverLetter"
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-tw-crimson/20 focus:border-tw-crimson outline-none transition-all resize-none"
                                        placeholder="Tell us why you're a great fit..."
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full bg-tw-crimson hover:bg-tw-black text-white py-4 text-lg"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
                                    </Button>
                                    <p className="text-xs text-gray-400 text-center mt-4">
                                        By clicking submit, you agree to our privacy policy and terms of service.
                                    </p>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
