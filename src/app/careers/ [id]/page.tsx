'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { JOB_POSTS } from '@/lib/jobs-data';
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2, X, Upload } from 'lucide-react';

export default function JobDetail() {
    const params = useParams();
    const id = params.id as string;
    const job = JOB_POSTS.find(j => j.id === id);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!job) {
        return (
            <main className="min-h-screen font-sans bg-white">
                <Navbar />
                <section className="pt-32 pb-20 container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-serif font-bold mb-4">Role Not Found</h1>
                    <p className="text-tw-body mb-8">The position you are looking for might have been filled or moved.</p>
                    <Link href="/careers/open-positions">
                        <Button variant="primary">View all open roles</Button>
                    </Link>
                </section>
                <Footer />
            </main>
        );
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append('jobTitle', job.title);
        if (selectedFile) {
            formData.append('resume', selectedFile);
        }

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    setIsModalOpen(false);
                    setSelectedFile(null);
                }, 3000);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to connect to the server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-tw-light-gray pt-32 pb-20 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <Link href="/careers/open-positions" className="inline-flex items-center gap-2 text-tw-gray hover:text-tw-crimson mb-8 transition-colors group">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to all roles
                    </Link>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                        <div className="max-w-3xl">
                            <span className="inline-block px-3 py-1 bg-tw-crimson/10 text-tw-crimson text-xs font-bold uppercase tracking-widest rounded mb-4">
                                {job.type}
                            </span>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-tw-black mb-6">
                                {job.title}
                            </h1>
                            <div className="flex flex-wrap gap-6 text-tw-gray font-medium">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-tw-crimson" />
                                    {job.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-tw-teal" />
                                    {job.level}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-purple-600" />
                                    Posted recently
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-tw-crimson hover:bg-tw-black transition-colors min-w-[200px]"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Apply for this role
                        </Button>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            <div className="prose prose-lg max-w-none text-tw-body">
                                <h2 className="font-serif text-3xl font-bold text-tw-black mb-6">About the role</h2>
                                <p className="mb-12 leading-relaxed whitespace-pre-wrap">{job.description}</p>

                                <h2 className="font-serif text-3xl font-bold text-tw-black mb-6">Responsibilities</h2>
                                <ul className="space-y-4 mb-12 list-none p-0">
                                    {job.responsibilities.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <CheckCircle2 className="w-6 h-6 text-tw-teal shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h2 className="font-serif text-3xl font-bold text-tw-black mb-6">Requirements</h2>
                                <ul className="space-y-4 list-none p-0">
                                    {job.requirements.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="w-2 h-2 bg-tw-crimson rounded-full shrink-0 mt-2.5"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="bg-tw-light-gray p-8 rounded-lg border border-gray-100 sticky top-32">
                                <h3 className="font-serif text-2xl font-bold mb-6 text-tw-black">Apply Now</h3>
                                <p className="text-sm text-tw-gray mb-8">
                                    Interested in joining our team? Click the button below to start your application process.
                                </p>
                                <Button
                                    variant="primary"
                                    className="w-full mb-6 bg-tw-crimson"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Apply for this role
                                </Button>
                                <div className="space-y-4 pt-6 border-t border-gray-200">
                                    <p className="text-sm font-bold text-tw-black uppercase tracking-wider">Share this role</p>
                                    <div className="flex gap-4">
                                        {['LinkedIn', 'Twitter', 'Email'].map(platform => (
                                            <button key={platform} className="text-sm text-tw-gray hover:text-tw-crimson transition-colors">
                                                {platform}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-tw-black/60 backdrop-blur-sm" onClick={() => !isSubmitted && !isSubmitting && setIsModalOpen(false)}></div>
                    <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        {isSubmitted ? (
                            <div className="p-16 text-center">
                                <div className="w-20 h-20 bg-tw-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-tw-teal" />
                                </div>
                                <h2 className="text-3xl font-serif font-bold mb-4">Application Sent!</h2>
                                <p className="text-tw-body mb-8">
                                    Thank you for applying to the {job.title} position. Our recruitment team will review your application and get back to you soon.
                                </p>
                                <Button variant="primary" onClick={() => setIsModalOpen(false)}>Close</Button>
                            </div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                                    <h2 className="text-xl font-bold text-tw-black">Applying for {job.title}</h2>
                                    <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit} className="p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block text-sm font-bold text-tw-black mb-2">First Name *</label>
                                            <input required name="firstName" type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-tw-black mb-2">Last Name *</label>
                                            <input required name="lastName" type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-bold text-tw-black mb-2">Email Address *</label>
                                        <input required name="email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-bold text-tw-black mb-2">Phone Number *</label>
                                        <input required name="phone" type="tel" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors" />
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-bold text-tw-black mb-2">Resume / CV *</label>
                                        <label className={`block border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer group ${selectedFile ? 'border-tw-teal bg-tw-teal/5' : 'border-gray-300 hover:border-tw-crimson'}`}>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                required
                                            />
                                            {selectedFile ? (
                                                <>
                                                    <CheckCircle2 className="w-8 h-8 text-tw-teal mx-auto mb-4" />
                                                    <p className="text-sm font-bold text-tw-teal">{selectedFile.name}</p>
                                                    <p className="text-xs text-tw-gray mt-2">Click to change file</p>
                                                </>
                                            ) : (
                                                <>
                                                    <Upload className="w-8 h-8 text-tw-gray mx-auto mb-4 group-hover:text-tw-crimson transition-colors" />
                                                    <p className="text-sm font-medium text-tw-black">Click to upload or drag and drop</p>
                                                    <p className="text-xs text-tw-gray mt-2">Support for PDF, DOC, DOCX (Max 10MB)</p>
                                                </>
                                            )}
                                        </label>
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-bold text-tw-black mb-2">Cover Letter (Optional)</label>
                                        <textarea name="coverLetter" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors resize-none"></textarea>
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full bg-tw-crimson hover:bg-tw-black disabled:opacity-50" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
