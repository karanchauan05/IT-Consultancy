
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowLeft, Car, Settings, Battery, Zap, Shield, Server, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function Automotive() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero */}
            <section className="bg-tw-teal text-white pt-48 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-tw-dark-teal/90 z-0"></div>
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl">
                        <div className="text-left mb-8">
                            <Link href="/industries" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Back to Industries
                            </Link>
                        </div>
                        <span className="inline-block px-4 py-1.5 bg-tw-crimson text-xs font-bold uppercase tracking-widest mb-6">
                            Automotive industry
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Accelerating the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">mobility</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic font-serif">
                            From software-defined vehicles to smart manufacturing, we help OEMs and suppliers drive innovation in a rapidly evolving ecosystem.
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
                                The race to software-defined mobility is on.
                            </h2>
                            <p className="text-tw-body text-lg mb-6 text-gray-600">
                                The automotive industry is undergoing its biggest transformation in a century. Vehicles are becoming data centers on wheels, and the value chain is shifting from hardware to software and services.
                            </p>
                            <p className="text-tw-body mb-8 text-gray-600">
                                NexusIT partners with leading automakers to navigate this shift. We build robust vehicle operating systems, secure cloud backends for connected fleets, and intelligent manufacturing solutions that ensure quality at scale.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-4xl font-bold text-tw-crimson mb-2">30%</h4>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Faster Time-to-Market</p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-tw-black/5 transform translate-x-4 translate-y-4 rounded-lg"></div>
                            <Image
                                src="/images/automotive-innovation.webp"
                                alt="Automotive Innovation"
                                width={800}
                                height={600}
                                className="relative rounded-lg shadow-xl w-full h-auto"
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-serif text-4xl font-bold text-tw-black mb-6">Engineering the road ahead</h2>
                        <p className="text-tw-body text-lg">
                            Comprehensive solutions for the entire automotive lifecycle, from R&D to the aftermarket.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <AnimatedSection direction="up" delay={0.1}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-crimson shadow-sm hover:shadow-xl transition-all group">
                                <Car className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">SDV Architecture</h3>
                                <p className="text-tw-body mb-6">
                                    Designing modular software architectures that decouple hardware from software, enabling continuous updates and new feature delivery.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>OTA Update Mechanisms</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>Service-Oriented Architecture</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 2 */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-teal shadow-sm hover:shadow-xl transition-all group">
                                <Settings className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Smart Manufacturing</h3>
                                <p className="text-tw-body mb-6">
                                    Implementing digital twins and IIoT analytics to optimize production efficiency and predict equipment failures before they happen.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Predictive Maintenance</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Supply Chain Visibility</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 3 */}
                        <AnimatedSection direction="up" delay={0.3}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-black shadow-sm hover:shadow-xl transition-all group">
                                <Battery className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Electrification (EV)</h3>
                                <p className="text-tw-body mb-6">
                                    Developing intelligent battery management systems (BMS) and charging infrastructure software for the electric future.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Range Optimization</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Charging Station Mgmt</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 4 */}
                        <AnimatedSection direction="up" delay={0.1}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-teal shadow-sm hover:shadow-xl transition-all group">
                                <Zap className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Connected Ecosystems</h3>
                                <p className="text-tw-body mb-6">
                                    Secure V2X platforms connecting vehicles to infrastructure, pedestrians, and other vehicles for enhanced safety.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>5G Integration</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-teal shrink-0 mt-0.5" />
                                        <span>Real-time Traffic Data</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 5 */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-black shadow-sm hover:shadow-xl transition-all group">
                                <Cpu className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Autonomous Tech</h3>
                                <p className="text-tw-body mb-6">
                                    Training and deploying deep learning models for ADAS features, sensor fusion, and path planning algorithms.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Computer Vision Pipelines</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-black shrink-0 mt-0.5" />
                                        <span>Simulation & Testing</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>

                        {/* Card 6 */}
                        <AnimatedSection direction="up" delay={0.3}>
                            <div className="h-full bg-white p-8 border-t-4 border-tw-crimson shadow-sm hover:shadow-xl transition-all group">
                                <Shield className="w-10 h-10 text-tw-teal mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-2xl font-bold mb-4 text-tw-black">Automotive Security</h3>
                                <p className="text-tw-body mb-6">
                                    Protecting connected vehicles from cyber threats with robust encryption, intrusion detection, and secure boot mechanisms.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>ISO 21434 Compliance</span>
                                    </li>
                                    <li className="flex gap-2 items-start text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-tw-crimson shrink-0 mt-0.5" />
                                        <span>Penetration Testing</span>
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
                        <h2 className="font-serif text-4xl font-bold text-tw-black">Next-gen vehicle platform for a Global OEM</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <AnimatedSection direction="left" className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">The Challenge</h3>
                                <p className="text-tw-body text-gray-600">
                                    A top-tier automotive manufacturer needed to transition from distributed ECUs to a centralized compute architecture to support advanced driver features. Their legacy codebase was fragmented and impossible to update over-the-air.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">Our Solution</h3>
                                <p className="text-tw-body text-gray-600">
                                    We architected a high-performance, containerized software platform using a service-oriented approach. This allowed independent development of vehicle functions and seamless OTA updates for the entire fleet.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-tw-black mb-3">The Impact</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-tw-light-gray p-4 rounded">
                                        <p className="text-2xl font-bold text-tw-crimson mb-1">-80%</p>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Update Time</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/resources/publications/software-defined-vehicle-platform">
                                <Button variant="primary" className="bg-tw-crimson hover:bg-tw-black text-white mt-4 border-none shadow-lg">
                                    Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="relative h-[500px] w-full shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/images/software-defined-vehicle.webp')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="italic text-lg font-serif">"The new software platform has completely transformed our vehicle DNA. We are now as much a software company as a car manufacturer."</p>
                                    <p className="mt-4 font-bold uppercase text-sm tracking-wider">— VP R&D, European Automaker</p>
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
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Ready to accelerate your mobility journey?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                            Drive the future with NexusIT's automotive engineering expertise.
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
