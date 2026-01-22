
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, User } from 'lucide-react';
import { ARTICLES } from '@/lib/resources-data';
import { Metadata } from 'next';
import ArticleShareButton from './ArticleShareButton';

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { slug } = await params;
    const article = ARTICLES.find(a => a.slug === slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        }
    }

    return {
        title: article.title,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            images: [article.image],
            type: 'article',
            publishedTime: article.date,
            authors: article.author ? [article.author] : undefined,
        },
    }
}

export default async function ArticleDetail({ params }: Props) {
    const { slug } = await params;
    const article = ARTICLES.find(a => a.slug === slug);

    if (!article) {
        return (
            <main className="min-h-screen font-sans bg-white">
                <Navbar />
                <section className="pt-32 pb-20 container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
                    <Link href="/resources/articles">
                        <span className="text-tw-crimson font-bold hover:underline cursor-pointer">Back to all articles</span>
                    </Link>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />

            {/* NYT Style Article Layout */}
            <article className="max-w-4xl mx-auto px-4 md:px-6 pt-32 pb-24">
                {/* Header Subtitle/Category */}
                <div className="text-center mb-4">
                    <Link href="/resources/articles" className="text-xs font-bold uppercase tracking-[0.2em] text-tw-gray hover:text-tw-crimson transition-colors">
                        {article.category}
                    </Link>
                </div>

                {/* Main Headline */}
                <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl font-bold text-center text-tw-black mb-8 leading-tight max-w-3xl mx-auto">
                    {article.title}
                </h1>

                {/* Metadata Line */}
                <div className="flex flex-col items-center gap-4 mb-12 text-tw-gray border-y border-gray-100 py-6">
                    <div className="flex items-center gap-3 text-sm">
                        <span className="font-bold text-tw-black">By {article.author}</span>
                        <span className="text-gray-300">|</span>
                        <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-tw-teal">{article.readTime}</span>
                        <ArticleShareButton article={article} />
                    </div>
                </div>

                {/* Featured Image - NYT Style */}
                <div className="mb-12">
                    <div className="aspect-[3/2] md:aspect-[16/9] w-full bg-gray-50 overflow-hidden">
                        <Image
                            src={article.image}
                            alt={article.title}
                            width={960}
                            height={540}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Caption placeholder if needed */}
                    <p className="mt-3 text-xs text-tw-gray italic text-center">
                        Illustration by NexusIT Creative Studio
                    </p>
                </div>

                {/* Article Body */}
                <div className="max-w-[680px] mx-auto">
                    <div
                        className="prose-nyt max-w-none selection:bg-tw-crimson/10"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Footer / Author Bio */}
                    <div className="mt-20 pt-10 border-t border-gray-100">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="w-20 h-20 bg-tw-light-gray rounded-full flex items-center justify-center shrink-0 border border-gray-100">
                                <User className="w-10 h-10 text-tw-gray" />
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest text-tw-crimson mb-1">About the author</p>
                                <h4 className="font-serif text-xl font-bold text-tw-black mb-2">{article.author}</h4>
                                <p className="text-tw-gray text-sm leading-relaxed max-w-md">
                                    Sarah is a lead strategist at NexusIT, focusing on the intersection of artificial intelligence and operational efficiency.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Back Link */}
                    <div className="mt-16 text-center">
                        <Link href="/resources/articles" className="inline-flex items-center gap-2 text-sm font-bold text-tw-crimson hover:underline">
                            <ArrowLeft className="w-4 h-4" />
                            View all articles
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
