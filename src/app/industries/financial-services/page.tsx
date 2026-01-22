
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowLeft, Landmark, Shield, BarChart3, Globe2, TrendingUp, Wallet, Banknote, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function FinancialServices() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero */}
            <section className="bg-tw-teal text-white pt-48 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-tw-dark-teal/90 z-0"></div>
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl">
                        <div className="text-left mb-8">
                            <Link href="/industries" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Back to Industries
                            </Link>
                        </div>
                        <span className="inline-block px-4 py-1.5 bg-tw-crimson text-xs font-bold uppercase tracking-widest mb-6">
                            Financial Services
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Building the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">digital finance</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic font-serif">
                            We help financial institutions, fintechs, and insurers navigate the complex digital landscape with enterprise-grade security, compliance, and innovation.
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
                                The finance industry is at a pivotal inflection point.
                            </h2>
                            <p className="text-tw-body text-lg mb-6 text-gray-600">
                                Traditional business models are being upended by agile challengers, shifting customer expectations, and rapid technological advancements. To survive and thrive, financial institutions must embrace digital transformation not just as a project, but as a core operating model.
                            </p>
                            <p className="text-tw-body mb-8 text-gray-600">
                                At NexusIT, we combine deep domain expertise with cutting-edge engineering capabilities to help our clients build resilient, scalable, and secure financial infrastructure. From modernizing legacy core banking systems to deploying AI-driven fraud detection, we deliver outcomes that drive growth and trust.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-4xl font-bold text-tw-crimson mb-2">40%</h4>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Avg. Cost Reduction</p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-tw-crimson/10 transform translate-x-4 translate-y-4 rounded-lg"></div>
                            <Image
                                src="/images/financial-tech.webp"
                                alt="Financial Technology"
                                width={800}
                                height={600}
                                className="relative rounded-lg shadow-xl w-full h-auto"
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Challenges & Solutions */}
            <section className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-serif text-4xl font-bold text-tw-black mb-6">Solving complex challenges</h2>
                        <p className="text-tw-body text-lg">
                            We address the most critical issues facing financial leaders today with bespoke technology solutions.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <AnimatedSection direction="up" delay={0.1}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-crimson shadow-sm hover:shadow-xl transition-all group">
                                <Landmark className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Legacy Modernization</h3>
                                <p className="text-tw-body mb-6">
                                    Moving away from monolithic mainframes to agile, microservices-based cloud architectures without disrupting critical operations.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>Cloud Migration Strategies</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>API-First Core Banking</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 2 */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-teal shadow-sm hover:shadow-xl transition-all group">
                                <Shield className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Risk & Compliance</h3>
                                <p className="text-tw-body mb-6">
                                    Navigating an ever-changing regulatory landscape (GDPR, PSD2, SOX) while protecting against sophisticated cyber threats.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Automated Compliance Reporting</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>AI-Driven Fraud Detection</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 3 */}
                        <AnimatedSection direction="up" delay={0.3}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-black shadow-sm hover:shadow-xl transition-all group">
                                <TrendingUp className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Data Intelligence</h3>
                                <p className="text-tw-body mb-6">
                                    Turning vast amounts of transaction data into actionable insights for personalized customer experiences and better decision making.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Predictive Analytics</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Real-time Personalization</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 4 */}
                        <AnimatedSection direction="up" delay={0.1}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-teal shadow-sm hover:shadow-xl transition-all group">
                                <Wallet className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Digital Wallets & Payments</h3>
                                <p className="text-tw-body mb-6">
                                    Building seamless, secure, and instant payment experiences that meet the demands of the modern borderless economy.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Cross-border Payment Rails</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Digital Asset Custody</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 5 */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-black shadow-sm hover:shadow-xl transition-all group">
                                <Banknote className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Wealth Tech</h3>
                                <p className="text-tw-body mb-6">
                                    Democratizing access to sophisticated investment strategies through robo-advisors and automated portfolio management.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Algorithmic Trading Platforms</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Hybrid Advisory Models</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 6 */}
                        <AnimatedSection direction="up" delay={0.3}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-crimson shadow-sm hover:shadow-xl transition-all group">
                                <Building2 className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Open Finance</h3>
                                <p className="text-tw-body mb-6">
                                    Creating ecosystems where data flows securely between institutions to create new value propositions for customers.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>API Marketplace Development</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>Third-party Integrations</span>
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
                        <h2 className="font-serif text-4xl font-bold text-tw-black">Reinventing digital banking for a global Tier-1 bank</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <AnimatedSection direction="left" className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">The Challenge</h3>
                                <p className="text-tw-body text-gray-600">
                                    A leading global bank was struggling with agility due to a 30-year-old mainframe core. New feature rollouts took months, and system maintenance consumed 80% of their IT budget. They needed a complete overhaul without disrupting service for their 15 million customers.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">Our Solution</h3>
                                <p className="text-tw-body text-gray-600">
                                    NexusIT deployed a "strangler fig" pattern to incrementally replace legacy monolothic functions with cloud-native microservices. We implemented a continuous delivery pipeline and retrained their internal teams on DevOps best practices.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">The Impact</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-tw-light-gray p-4 rounded">
                                        <p className="text-2xl font-bold text-tw-crimson mb-1">3x</p>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Release Frequency</p>
                                    </div>
                                    <div className="bg-tw-light-gray p-4 rounded">
                                        <p className="text-2xl font-bold text-tw-crimson mb-1">-45%</p>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Infrastructure Cost</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/resources/publications/modern-banking-transformation">
                                <Button variant="primary" className="bg-tw-crimson hover:bg-tw-black text-white mt-4 border-none shadow-lg">
                                    Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="relative h-[500px] w-full shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/modern-banking.webp')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="italic text-lg font-serif">"NexusIT didn't just rebuild our tech stack; they rebuilt our engineering culture. We are now moving faster than fintech startups."</p>
                                    <p className="mt-4 font-bold uppercase text-sm tracking-wider">— CTO, Global Retail Bank</p>
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
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Ready to transform your financial services?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Let's discuss how we can help you build a secure, scalable, and innovative future.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="bg-tw-crimson hover:bg-white hover:text-tw-teal transition-all shadow-2xl hover:-translate-y-1">
                                Speak to an Expert
                            </Button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
