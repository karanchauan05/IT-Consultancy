
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { JOB_POSTS } from '@/lib/jobs-data';
import { ArrowLeft, Clock, Briefcase, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import JobApplication from './JobApplication';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { id } = await params;
    const job = JOB_POSTS.find(j => j.id === id);

    if (!job) {
        return {
            title: 'Role Not Found',
        }
    }

    return {
        title: `${job.title} | Careers`,
        description: job.description.substring(0, 160),
    }
}

export default async function JobDetail({ params }: Props) {
    const { id } = await params;
    const job = JOB_POSTS.find(j => j.id === id);

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

                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-tw-black mb-6">
                                {job.title}
                            </h1>
                            <div className="flex flex-wrap gap-6 text-tw-gray font-medium">
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
                        <JobApplication job={job} />
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

                        <div className="lg:col-span-4">
                            <div className="bg-tw-light-gray p-8 rounded-lg border border-gray-100 sticky top-32">
                                <h3 className="font-serif text-2xl font-bold mb-6 text-tw-black uppercase tracking-tight">Job Summary</h3>
                                <ul className="space-y-4 mb-8">
                                    {(job.jobSummary || [
                                        "Work with cutting-edge technologies",
                                        "Collaborate with global teams",
                                        "Drive digital transformation",
                                        "Growth and learning opportunities"
                                    ]).map((point, i) => (
                                        <li key={i} className="flex gap-3 items-start text-sm text-tw-gray">
                                            <div className="w-1.5 h-1.5 bg-tw-crimson rounded-full shrink-0 mt-1.5"></div>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
