'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FloatingContactButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href="/contact">
            <button
                className="fixed bottom-8 right-8 w-16 h-16 bg-tw-crimson hover:bg-tw-crimson/90 rounded-full flex items-center justify-center shadow-2xl text-white transition-all duration-300 hover:scale-110 z-40"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Contact us"
            >
                <MessageCircle className="w-8 h-8" />
                {isHovered && (
                    <div className="absolute right-20 bg-tw-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                        Get in touch
                    </div>
                )}
            </button>
        </Link>
    );
}
