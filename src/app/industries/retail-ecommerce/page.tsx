
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { ArrowLeft, ShoppingBag, Truck, Smartphone, Search, Users, CreditCard, RotateCw, Package, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export default function RetailEcommerce() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero */}
            <section className="bg-tw-teal text-white pt-48 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-tw-dark-teal/90 z-0"></div>
                {/* Abstract background elements */}
                <div className="absolute bottom-0 left-0 w-2/3 h-full opacity-10 bg-[linear-gradient(45deg,_#ffffff_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up" className="max-w-4xl">
                        <div className="text-left mb-8">
                            <Link href="/industries" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Back to Industries
                            </Link>
                        </div>
                        <span className="inline-block px-4 py-1.5 bg-tw-crimson text-xs font-bold uppercase tracking-widest mb-6">
                            Retail & eCommerce
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Reimagining the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">shopping experience</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed italic font-serif">
                            Empowering retailers to create seamless, personalized, and omnichannel experiences that drive customer loyalty and operational efficiency.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <AnimatedSection direction="left" className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-tw-teal/10 transform -translate-x-4 translate-y-4 rounded-lg"></div>
                            <Image
                                src="/images/retail-modern.webp"
                                alt="Modern Retail"
                                width={800}
                                height={600}
                                className="relative rounded-lg shadow-xl w-full h-auto"
                            />
                        </AnimatedSection>
                        <AnimatedSection direction="right" className="lg:w-1/2">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-tw-black mb-6">
                                Retail is no longer just about transactions.
                            </h2>
                            <p className="text-tw-body text-lg mb-6 text-gray-600">
                                Today's consumers demand hyper-personalization, instant gratification, and a uniform experience across online and offline channels. Retailers are under immense pressure to reinvent their supply chains, leverage data for insights, and adopt new technologies like AR and AI.
                            </p>
                            <p className="text-tw-body mb-8 text-gray-600">
                                NexusIT partners with global brands to build the retail platforms of tomorrow. We integrate unified commerce engines, modernize logistics with IoT, and use machine learning to predict trends before they happen.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-4xl font-bold text-tw-crimson mb-2">25%</h4>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Increase in Converions</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Key Solutions - Grid */}
            <section className="py-24 bg-tw-light-gray overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="font-serif text-4xl font-bold text-tw-black mb-6">End-to-End Retail Solutions</h2>
                        <p className="text-tw-body text-lg">
                            From the warehouse floor to the mobile app checkout, we optimize every step of the retail value chain.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Box 1 */}
                        <AnimatedSection direction="up" delay={0.1}>
                            <div className="h-full bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 border-b-4 border-tw-crimson shadow-md">
                                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-crimson group-hover:text-white transition-colors">
                                    <ShoppingBag className="w-7 h-7 text-tw-crimson group-hover:text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4">Unified Commerce</h3>
                                <p className="text-tw-body mb-6">Breaking down silos between online, mobile, and brick-and-mortar to create a single view of the customer.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">Headless Commerce</span>
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">POS Integration</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Box 2 */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="h-full bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 border-b-4 border-tw-teal shadow-md">
                                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-teal group-hover:text-white transition-colors">
                                    <TrendingUp className="w-7 h-7 text-tw-teal group-hover:text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4">AI Demand Forecasting</h3>
                                <p className="text-tw-body mb-6">Using predictive algorithms to optimize stock levels, reduce waste, and ensure the right products are in the right place.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">Machine Learning</span>
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">Inventory Opt.</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Box 3 */}
                        <AnimatedSection direction="up" delay={0.3}>
                            <div className="h-full bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 border-b-4 border-tw-black shadow-md">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-black group-hover:text-white transition-colors">
                                    <Users className="w-7 h-7 text-tw-black group-hover:text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4">Personalization Engine</h3>
                                <p className="text-tw-body mb-6">Delivering 1:1 tailored product recommendations and content in real-time based on browsing behavior.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">CDP Implementation</span>
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">Real-time Analytics</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Box 4 */}
                        <AnimatedSection direction="up" delay={0.1}>
                            <div className="h-full bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 border-b-4 border-tw-teal shadow-md">
                                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-teal group-hover:text-white transition-colors">
                                    <Truck className="w-7 h-7 text-tw-teal group-hover:text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4">Supply Chain Visibility</h3>
                                <p className="text-tw-body mb-6">End-to-end tracking of goods using IoT and Blockchain to ensure transparency and ethical sourcing.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">Smart Logistics</span>
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">Supplier Portals</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Box 5 */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="h-full bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 border-b-4 border-tw-black shadow-md">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-black group-hover:text-white transition-colors">
                                    <Smartphone className="w-7 h-7 text-tw-black group-hover:text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4">Mobile-First Experiences</h3>
                                <p className="text-tw-body mb-6">Native and PWA applications that enable features like scan-and-go, augmented reality try-ons, and location-based offers.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">React Native</span>
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">AR/VR</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Box 6 */}
                        <AnimatedSection direction="up" delay={0.3}>
                            <div className="h-full bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 border-b-4 border-tw-crimson shadow-md">
                                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-tw-crimson group-hover:text-white transition-colors">
                                    <Package className="w-7 h-7 text-tw-crimson group-hover:text-white" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold mb-4">Order Management (OMS)</h3>
                                <p className="text-tw-body mb-6">Optimizing order routing logic to fulfill orders from the most efficient location, enabling ship-from-store functionality.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">Distributed OMS</span>
                                    <span className="bg-gray-100 px-3 py-1 text-xs font-bold rounded-full">Inventory Sync</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up">
                        <div className="bg-tw-black text-white rounded-3xl p-12 lg:p-20 relative overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-tw-crimson rounded-full opacity-20 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-tw-teal rounded-full opacity-20 blur-3xl"></div>

                            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                                <div className="lg:w-1/2">
                                    <span className="text-tw-crimson font-bold uppercase tracking-widest mb-4 block">Proven Success</span>
                                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Digital transformation for a fashion giant</h2>
                                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                        We helped a leading European fashion retailer unify their online and offline channels, resulting in a seamless "endless aisle" experience that boosted revenue by 22% in the first year.
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-tw-crimson">01</div>
                                            <p className="font-medium">Integrated 500+ physical stores with e-commerce inventory</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-tw-crimson">02</div>
                                            <p className="font-medium">Reduced out-of-stock scenarios by 35% with predictive AI</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-tw-crimson">03</div>
                                            <p className="font-medium">Launched mobile app with visual search capabilities</p>
                                        </div>
                                    </div>
                                    <Link href="/resources/publications/omnichannel-retail-transformation">
                                        <Button variant="primary" className="bg-tw-crimson hover:bg-white hover:text-tw-crimson border-none text-white shadow-lg">
                                            Read Case Study
                                        </Button>
                                    </Link>
                                </div>
                                <div className="lg:w-1/2">
                                    <Image
                                        src="/images/fashion-retail.webp"
                                        alt="Fashion Retail App"
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/10"
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-50 py-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <AnimatedSection direction="up">
                        <h2 className="font-serif text-4xl font-bold text-tw-black mb-6">Ready to lead the retail revolution?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                            Stay ahead of consumer trends with technology that delivers results.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button variant="primary" size="lg" className="bg-tw-crimson hover:bg-tw-black w-full shadow-lg">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link href="/services" className="w-full sm:w-auto">
                                <Button variant="primary" size="lg" className="bg-tw-black hover:bg-tw-crimson w-full shadow-lg text-white border-none">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
