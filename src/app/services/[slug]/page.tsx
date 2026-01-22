
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import FloatingContactButton from '@/components/FloatingContactButton';
import { ArrowLeft, CheckCircle, TrendingUp, Users, Clock, Award, Zap, Shield, Target, Rocket, Database, Brain, Globe, Cpu, ArrowRight, Star, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '@/lib/services-data';
import { SERVICES_POPUP_DATA } from '@/lib/services-popup-data';
import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { slug } = await params;
    const service = SERVICES_DATA[slug];

    if (!service) {
        return {
            title: 'Service Not Found',
        }
    }

    return {
        title: service.title,
        description: service.description,
        openGraph: {
            title: service.title,
            description: service.description,
            images: [service.image],
        },
    }
}

export default async function ServiceDetail({ params }: Props) {
    const { slug } = await params;
    const service = SERVICES_DATA[slug];
    const popupData = SERVICES_POPUP_DATA[slug];

    if (!service || !popupData) {
        return (
            <main className="min-h-screen font-sans bg-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center pt-32">
                    <div className="text-center">
                        <h1 className="text-4xl font-serif font-bold mb-4">Service Not Found</h1>
                        <Link href="/services">
                            <Button variant="primary">Back to Services</Button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* Hero Section */}
            <section 
                className="bg-tw-teal text-white pt-32 pb-24 relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
            >
                <div className="absolute inset-0 bg-tw-dark-teal/90 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <AnimatedSection direction="up">
                        <Breadcrumb items={[
                            { label: 'Services', href: '/services' },
                            { label: service.title }
                        ]} />
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8">
                                    <Icon className="w-10 h-10 text-tw-crimson" />
                                </div>
                                <h1 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    {service.title}
                                </h1>
                                <p className="font-serif italic text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                                    {service.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact">
                                        <Button variant="primary" size="lg" className="bg-tw-crimson hover:bg-tw-crimson/90">
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1 hidden md:block">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-tw-crimson/20 to-transparent rounded-2xl"></div>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        className="rounded-lg shadow-2xl border border-white/10 relative z-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tw-black">
                                Why Choose Our {service.title} Services
                            </h2>
                            <p className="text-lg text-tw-body max-w-3xl mx-auto">
                                We deliver measurable results through proven methodologies and cutting-edge technology
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {popupData.keyBenefits.map((benefit, index) => (
                                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                                    <div className="bg-tw-light-gray p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-6 h-6 bg-tw-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-tw-body font-medium">{benefit}</span>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Impact Metrics Section */}
            <section className="py-24 bg-tw-light-gray">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tw-black">
                                Proven Impact & Results
                            </h2>
                            <p className="text-lg text-tw-body max-w-3xl mx-auto">
                                Our data-driven approach delivers measurable outcomes for your business
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {popupData.stats.map((stat, index) => {
                                const StatIcon = stat.icon;
                                return (
                                    <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                                        <div className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                            <div className="w-16 h-16 bg-tw-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <StatIcon className="w-8 h-8 text-tw-teal" />
                                            </div>
                                            <div className="font-bold text-4xl text-tw-black mb-2">{stat.value}</div>
                                            <div className="font-semibold text-lg text-tw-body mb-2">{stat.metric}</div>
                                            <div className="text-sm text-gray-500">{stat.description}</div>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <AnimatedSection direction="up">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-tw-black">Our Approach</h2>
                                    <div className="prose-nyt max-w-none text-tw-body leading-relaxed">
                                        {service.content.split('\n\n').slice(0, 2).map((paragraph: string, index: number) => (
                                            <p key={index} className="mb-6">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-tw-teal/5 to-tw-crimson/5 p-8 rounded-2xl border border-gray-100">
                                    <h3 className="font-serif text-xl font-bold mb-6 text-tw-black">How We Help</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Strategic roadmapping and assessment",
                                            "Hands-on engineering and delivery", 
                                            "Team coaching and capability building",
                                            "Measurement of business outcomes"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4">
                                                <div className="w-3 h-3 bg-tw-crimson rounded-full flex-shrink-0"></div>
                                                <span className="text-tw-body font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24 bg-tw-light-gray">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tw-black">
                                Technologies & Platforms
                            </h2>
                            <p className="text-lg text-tw-body max-w-3xl mx-auto">
                                We leverage cutting-edge technologies to deliver robust, scalable solutions
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex flex-wrap gap-3 justify-center">
                                {popupData.technologies.map((tech, index) => (
                                    <AnimatedSection key={index} direction="up" delay={index * 0.05}>
                                        <span className="px-4 py-2 bg-gradient-to-r from-tw-teal/10 to-tw-crimson/10 text-tw-teal rounded-full text-sm font-medium border border-tw-teal/20 hover:shadow-md transition-all duration-300">
                                            {tech}
                                        </span>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Case Study Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-6xl mx-auto">
                        <div className="bg-gradient-to-r from-tw-teal to-tw-dark-teal text-white p-12 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                        <Quote className="w-6 h-6 text-tw-crimson" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold">Success Story</h3>
                                        <p className="text-gray-300">Real-world impact</p>
                                    </div>
                                </div>
                                <h4 className="font-bold text-xl text-tw-crimson mb-4">{popupData.caseStudyTitle}</h4>
                                <p className="text-lg leading-relaxed text-gray-200 mb-8">{popupData.caseStudyResult}</p>
                                <div className="flex items-center gap-2 text-tw-crimson font-semibold">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span>Featured Case Study</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-tw-black text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            Let's discuss how our {service.title.toLowerCase()} expertise can drive extraordinary impact for your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <Button variant="primary" size="lg" className="bg-tw-crimson hover:bg-tw-crimson/90 text-white shadow-2xl hover:-translate-y-1 transition-all">
                                    Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-tw-black">
                                    Explore All Services
                                </Button>
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Related Services */}
            <RelatedServices currentSlug={slug} />

            {/* Floating Contact Button */}
            <FloatingContactButton />

            <Footer />
        </main>
    );
}
