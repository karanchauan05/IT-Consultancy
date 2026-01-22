
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowLeft, UserPlus, HeartPulse, Microscope, Activity, Stethoscope, FileText, Database, ShieldCheck, Thermometer, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function Healthcare() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero */}
            <section className="bg-tw-teal text-white pt-48 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-tw-dark-teal/90 z-0"></div>
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl">
                        <div className="text-left mb-8">
                            <Link href="/industries" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Back to Industries
                            </Link>
                        </div>
                        <span className="inline-block px-4 py-1.5 bg-tw-crimson text-xs font-bold uppercase tracking-widest mb-6">
                            Industry
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Healthcare
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic font-serif">
                            Improving patient outcomes, streamlining operations, and accelerating medical research through the power of AI-driven diagnostics, interoperable data platforms, and modern healthcare ecosystems.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <AnimatedSection direction="left" className="lg:w-1/2">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-tw-black mb-6">
                                The future of care is connected and intelligent.
                            </h2>
                            <p className="text-tw-body text-lg mb-6 text-gray-600">
                                Healthcare providers are facing unprecedented challenges: rising costs, staffing shortages, and an explosion of health data. The answer lies in digital transformation that puts the patient at the center while optimizing the backend.
                            </p>
                            <p className="text-tw-body mb-8 text-gray-600">
                                NexusIT empowers healthcare organizations to harness the power of their data. We build secure, compliant platforms that enable interoperability, power AI research, and deliver virtual care at scale.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-4xl font-bold text-tw-crimson mb-2">60%</h4>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Faster Diagnosis</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-tw-crimson mb-2">100%</h4>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">HIPAA Compliant</p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-tw-teal/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
                            <Image
                                src="/images/digital-healthcare.webp"
                                alt="Digital Healthcare"
                                width={800}
                                height={600}
                                className="relative rounded-lg shadow-xl w-full h-auto"
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Key Offerings Grid */}
            <section className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-serif text-4xl font-bold text-tw-black mb-6">Innovating for better health</h2>
                        <p className="text-tw-body text-lg">
                            Technology solutions that bridge the gap between clinical excellence and operational efficiency.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <AnimatedSection direction="up" delay={0.1}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-crimson shadow-sm hover:shadow-xl transition-all group">
                                <HeartPulse className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4">AI Diagnostics</h3>
                                <p className="text-tw-body mb-6">Leveraging advanced machine learning algorithms to assist radiologists and clinicians in early detection of diseases.</p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>Image Analysis</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>Predictive Screening</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 2 */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-teal shadow-sm hover:shadow-xl transition-all group">
                                <Microscope className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4">Life Sciences R&D</h3>
                                <p className="text-tw-body mb-6">Accelerating the drug discovery process and optimizing clinical trials through big data analytics.</p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Trial Management</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Genomic Data Analysis</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 3 */}
                        <AnimatedSection direction="up" delay={0.3}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-black shadow-sm hover:shadow-xl transition-all group">
                                <Activity className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4">Virtual Health</h3>
                                <p className="text-tw-body mb-6">Creating secure telehealth portals and remote patient monitoring systems that expand access to care.</p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Video Consultation</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Wearable Integration</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 4 */}
                        <AnimatedSection direction="up" delay={0.1}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-teal shadow-sm hover:shadow-xl transition-all group">
                                <Stethoscope className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4">Operational Tech</h3>
                                <p className="text-tw-body mb-6">Modernizing hospital information systems (HIS) and EHRs to ensure seamless data interoperability.</p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>HL7/FHIR Standards</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Revenue Cycle Mgmt</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 5 */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-black shadow-sm hover:shadow-xl transition-all group">
                                <Database className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4">Health Data Lakes</h3>
                                <p className="text-tw-body mb-6">Building unified data architectures that aggregate patient data from disparate sources for holistic views.</p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Data Warehousing</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Real-time Dashboards</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 6 */}
                        <AnimatedSection direction="up" delay={0.3}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-crimson shadow-sm hover:shadow-xl transition-all group">
                                <ShieldCheck className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4">Privacy & Security</h3>
                                <p className="text-tw-body mb-6">Ensuring robust data protection frameworks that comply with global regulations (HIPAA, GDPR).</p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>Zero Trust Security</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>Access Control</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Case Study Deep Dive */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="left" className="border-l-4 border-tw-crimson pl-6 mb-12">
                        <span className="text-tw-crimson font-bold uppercase tracking-widest text-sm mb-2 block">Featured Success Story</span>
                        <h2 className="font-serif text-4xl font-bold text-tw-black">AI-powered diagnostics platform</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <AnimatedSection direction="left" className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">The Challenge</h3>
                                <p className="text-tw-body text-gray-600">
                                    A network of research hospitals was overwhelmed by the volume of medical imaging data. Radiologists were facing burnout, and diagnosis times were increasing, potentially delaying critical treatments.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">Our Solution</h3>
                                <p className="text-tw-body text-gray-600">
                                    We collaborated to deploy an AI-driven imaging solution integrated directly into the clinical workflow. The system triages scans based on urgency and highlights potential anomalies for review.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">The Impact</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-tw-light-gray p-4 rounded">
                                        <p className="text-2xl font-bold text-tw-crimson mb-1">-60%</p>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Analysis Time</p>
                                    </div>
                                    <div className="bg-tw-light-gray p-4 rounded">
                                        <p className="text-2xl font-bold text-tw-crimson mb-1">15%</p>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Higher Detection Rate</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/resources/publications/ai-powered-healthcare-diagnostics">
                                <Button variant="primary" className="bg-tw-crimson hover:bg-tw-black text-white mt-4 border-none shadow-lg">
                                    Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="relative h-[500px] w-full shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/ai-diagnostics.webp')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="italic text-lg font-serif">"This AI platform acts as a second pair of eyes for our radiologists, allowing them to focus on the most complex cases and save lives."</p>
                                    <p className="mt-4 font-bold uppercase text-sm tracking-wider">— Chief Medical Officer</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-tw-teal text-white py-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <AnimatedSection direction="up">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Ready to modernize your care delivery?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Partner with NexusIT to build the next generation of healthcare solutions.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-tw-crimson hover:bg-white hover:text-tw-teal transition-all shadow-2xl hover:-translate-y-1">
                                Partner With Us
                            </Button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
