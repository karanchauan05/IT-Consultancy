'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { Article } from '@/lib/resources-data';

interface ArticleHeaderProps {
    article: Article;
}

export default function ArticleShareButton({ article }: ArticleHeaderProps) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        if (!article) return;
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.description,
                    url: url,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div
            onClick={handleShare}
            className="flex items-center gap-2 cursor-pointer text-tw-teal hover:text-tw-crimson transition-colors group"
        >
            {copied ? (
                <Check className="w-4 h-4 text-green-600 animate-in fade-in zoom-in duration-300" />
            ) : (
                <Share2 className="w-4 h-4 transition-transform group-hover:scale-110" />
            )}
            <span className="text-[10px] font-bold uppercase tracking-widest">
                {copied ? 'Link Copied' : 'Share'}
            </span>
        </div>
    );
}
