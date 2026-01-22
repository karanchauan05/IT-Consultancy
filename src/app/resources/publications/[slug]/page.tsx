
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/resources-data';
import { Metadata } from 'next';
import PublicationShareButton from './PublicationShareButton';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { slug } = await params;
    const study = CASE_STUDIES.find(s => s.slug === slug);

    if (!study) {
        return {
            title: 'Publication Not Found',
        }
    }

    return {
        title: study.title,
        description: study.description,
        openGraph: {
            title: study.title,
            description: study.description,
            images: [study.image],
            type: 'article',
            publishedTime: study.date,
        },
    }
}

export default async function PublicationDetail({ params }: Props) {
    const { slug } = await params;
    const study = CASE_STUDIES.find(s => s.slug === slug);

    if (!study) {
        return (
            <main className="min-h-screen font-sans bg-white">
                <Navbar />
                <section className="pt-32 pb-20 container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-serif font-bold mb-4">Publication Not Found</h1>
                    <Link href="/resources/publications">
                        <span className="text-tw-crimson font-bold hover:underline cursor-pointer">Back to all publications</span>
                    </Link>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* NYT Style Publication Layout */}
            <article className="max-w-4xl mx-auto px-4 md:px-6 pt-32 pb-24">
                {/* Header Subtitle/Category */}
                <div className="text-center mb-4">
                    <Link href="/resources/publications" className="text-xs font-bold uppercase tracking-[0.2em] text-tw-teal hover:text-tw-crimson transition-colors">
                        Case Study: {study.category}
                    </Link>
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl font-bold text-center text-tw-black mb-8 leading-tight max-w-3xl mx-auto">
                    {study.title}
                </h1>

                {/* Metadata Line */}
                <div className="flex flex-col items-center gap-4 mb-12 text-tw-gray border-y border-gray-100 py-6">
                    <div className="flex items-center gap-3 text-sm">
                        <span className="font-bold text-tw-black">NexusIT Intelligence</span>
                        <span className="text-gray-300">|</span>
                        <span>{study.date}</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-tw-crimson">{study.readTime}</span>
                        <PublicationShareButton study={study} />
                    </div>
                </div>

                {/* Featured Image - NYT Style */}
                <div className="mb-12">
                    <div className="aspect-[3/2] md:aspect-[21/9] w-full bg-gray-50 overflow-hidden shadow-sm">
                        <Image
                            src={study.image}
                            alt={study.title}
                            width={1200}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="mt-4 text-xs text-tw-gray italic text-center max-w-2xl mx-auto">
                        A visual representation of our digital transformation journey with global partners.
                    </p>
                </div>

                {/* Case Study Body */}
                <div className="max-w-[680px] mx-auto">
                    <div
                        className="prose-nyt max-w-none selection:bg-tw-crimson/10"
                        dangerouslySetInnerHTML={{ __html: study.content }}
                    />

                    {/* Footer / Contact CTA */}
                    <div className="mt-20 py-12 px-8 bg-tw-light-gray text-center rounded-sm border border-gray-100">
                        <h3 className="font-serif text-2xl font-bold mb-4 italic">Ready to transform your business?</h3>
                        <p className="text-tw-gray mb-8 max-w-md mx-auto">
                            Our team of experts is ready to help you navigate the complexities of the digital landscape.
                        </p>
                        <Link href="/contact">
                            <span className="inline-block bg-tw-crimson text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-tw-crimson/90 transition-colors cursor-pointer">
                                Work with us
                            </span>
                        </Link>
                    </div>

                    {/* Back Link */}
                    <div className="mt-16 text-center">
                        <Link href="/resources/publications" className="inline-flex items-center gap-2 text-sm font-bold text-tw-crimson hover:underline">
                            <ArrowLeft className="w-4 h-4" />
                            View all publications
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

