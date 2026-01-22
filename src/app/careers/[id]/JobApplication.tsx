'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { CheckCircle2, X, Upload } from 'lucide-react';
import { JobPost } from '@/lib/jobs-data';

interface JobApplicationProps {
    job: JobPost;
}

export default function JobApplication({ job }: JobApplicationProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Capture form data
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Simulate API call
        setTimeout(() => {
            console.log("Job Application:", {
                jobTitle: job.title,
                ...data
            });
            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                setIsModalOpen(false);
                setResumeFile(null);
            }, 3000);
        }, 1500);
    };

    return (
        <>
            <Button
                variant="primary"
                size="lg"
                className="bg-tw-crimson hover:bg-tw-black transition-colors min-w-[200px]"
                onClick={() => setIsModalOpen(true)}
            >
                Apply for this role
            </Button>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-tw-black/60 backdrop-blur-sm" onClick={() => !isSubmitted && setIsModalOpen(false)}></div>
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
                                            <input name="firstName" required type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-tw-black mb-2">Last Name *</label>
                                            <input name="lastName" required type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-bold text-tw-black mb-2">Email Address *</label>
                                        <input name="email" required type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors" />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-sm font-bold text-tw-black mb-2">Phone Number *</label>
                                        <input name="phone" required type="tel" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors" />
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-bold text-tw-black mb-2">Resume / CV *</label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-tw-crimson transition-colors relative hover:bg-gray-50">
                                            <input
                                                type="file"
                                                name="resume"
                                                accept=".pdf,.doc,.docx"
                                                required
                                                onChange={handleFileChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            />
                                            <div className="flex flex-col items-center gap-2">
                                                <Upload className="w-8 h-8 text-tw-gray mx-auto group-hover:text-tw-crimson transition-colors" />
                                                {resumeFile ? (
                                                    <span className="font-bold text-tw-teal">{resumeFile.name}</span>
                                                ) : (
                                                    <>
                                                        <p className="text-sm font-medium text-tw-black">Click to upload or drag and drop</p>
                                                        <p className="text-xs text-tw-gray">Support for PDF, DOCX (Max 10MB)</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <label className="block text-sm font-bold text-tw-black mb-2">Cover Letter (Optional)</label>
                                        <textarea name="coverLetter" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-tw-crimson transition-colors resize-none"></textarea>
                                    </div>
                                    <Button type="submit" variant="primary" className="w-full bg-tw-crimson hover:bg-tw-black">
                                        Submit Application
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
