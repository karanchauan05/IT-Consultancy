import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/services-data';

interface RelatedServicesProps {
    currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
    const services = Object.entries(SERVICES_DATA)
        .filter(([slug]) => slug !== currentSlug)
        .slice(0, 3);

    if (services.length === 0) {
        return null;
    }

    return (
        <section className="py-24 bg-tw-light-gray">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-tw-black">
                            Related Services
                        </h2>
                        <p className="text-lg text-tw-body max-w-3xl mx-auto">
                            Explore our other service offerings
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(([slug, service]) => (
                            <Link key={slug} href={`/services/${slug}`}>
                                <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                                    <div className="flex-1">
                                        <h3 className="font-serif text-xl font-bold mb-4 text-tw-black">
                                            {service.title}
                                        </h3>
                                        <p className="text-tw-body mb-6 line-clamp-3">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-tw-teal font-semibold group">
                                        Learn more
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
