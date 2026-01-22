'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { Resource } from '@/lib/resources-data';

export default function PublicationShareButton({ study }: { study: Resource }) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        if (!study) return;
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: study.title,
                    text: study.description,
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
            className="flex items-center gap-2 cursor-pointer hover:text-tw-crimson transition-colors group"
        >
            {copied ? (
                <Check className="w-4 h-4 text-green-600 animate-in fade-in zoom-in duration-300" />
            ) : (
                <Share2 className="w-4 h-4 transition-transform group-hover:scale-110" />
            )}
            <span className="text-xs font-bold uppercase tracking-widest">
                {copied ? 'Copied' : 'Share'}
            </span>
        </div>
    );
}
