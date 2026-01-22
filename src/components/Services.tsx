'use client';

import { Lightbulb, Users, Zap, Globe2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Services() {
    const services = [
        {
            icon: Lightbulb,
            title: "Digital Strategy",
            description: "Navigate complexity and accelerate innovation with strategic technology consulting.",
            color: "bg-tw-crimson"
        },
        {
            icon: Zap,
            title: "Data & AI",
            description: "Unlock the power of your data with intelligent automation and machine learning.",
            color: "bg-blue-600"
        },
        {
            icon: Users,
            title: "Customer Experience",
            description: "Design and deliver exceptional digital experiences that delight your customers.",
            color: "bg-purple-600"
        },
        {
            icon: Globe2,
            title: "Modernization",
            description: "Transform legacy systems into cloud-native, scalable platforms for the future.",
            color: "bg-emerald-600"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection className="max-w-4xl mx-auto mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-tw-black mb-6">
                        What we do
                    </h2>
                    <p className="font-serif italic text-lg md:text-xl text-tw-gray leading-relaxed">
                        We integrate strategy and design to help organizations thrive in the digital age.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedSection
                                key={idx}
                                delay={idx * 0.1}
                                direction={idx % 2 === 0 ? 'left' : 'right'}
                                className="group relative bg-white border border-gray-400 p-6 md:p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Animated background accent */}
                                <div className={`absolute top-0 left-0 w-1 h-0 ${service.color} group-hover:h-full transition-all duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="font-serif text-2xl font-medium text-tw-black mb-4 group-hover:text-tw-crimson transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-tw-body">
                                        {service.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
