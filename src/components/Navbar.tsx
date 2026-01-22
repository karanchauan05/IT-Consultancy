'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { SEARCH_DATA, type SearchItem } from '@/lib/search-data';

import { ChevronDown, Home } from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

const NAV_LINKS: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
        label: 'Services',
        href: '/services',
        children: [
            { label: 'All Services', href: '/services' },
            { label: 'Scaling AI', href: '/services/scaling-ai' },
            { label: 'Customer Experience', href: '/services/customer-experience' },
            { label: 'Product Innovation', href: '/services/product-innovation' },
            { label: 'Data Modernization', href: '/services/data-modernization' },
            { label: 'Platform Modernization', href: '/services/platform-modernization' },
            { label: 'Application Management', href: '/services/application-management' },
        ]
    },
    {
        label: 'Industries',
        href: '/industries',
        children: [
            { label: 'All Industries', href: '/industries' },
            { label: 'Financial Services', href: '/industries/financial-services' },
            { label: 'Retail & eCommerce', href: '/industries/retail-ecommerce' },
            { label: 'Healthcare', href: '/industries/healthcare' },
            { label: 'Automotive', href: '/industries/automotive' },
        ]
    },
    {
        label: 'Resources',
        href: '/resources',
        children: [
            { label: 'All Resources', href: '/resources' },
            { label: 'AI Readiness Assessment', href: '/ai-readiness' },
            { label: 'Publications', href: '/resources/publications' },
            { label: 'Articles', href: '/resources/articles' },
        ]
    },
    {
        label: 'Careers',
        href: '/careers'
    },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const pathname = usePathname();

    const handleHomeClick = (e: React.MouseEvent) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = SEARCH_DATA.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );
        setSearchResults(filtered);
    }, [searchQuery]);

    useEffect(() => {
        if (!isSearchOpen) {
            setSearchQuery('');
        }
    }, [isSearchOpen]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                {!isMobileMenuOpen && (
                    <Link href="/" className="group flex items-center gap-1 z-50 relative">
                        <span className="font-serif font-black text-2xl tracking-tighter text-tw-black">
                            NexusIT
                        </span>
                        <span className="text-tw-crimson text-3xl font-light">/</span>
                    </Link>
                )}

                {/* Desktop Navigation */}
                <nav className={`hidden lg:flex items-center gap-6 transition-all duration-300 ${isSearchOpen ? 'opacity-0 invisible scale-95' : 'opacity-100 visible scale-100'}`}>
                    {NAV_LINKS.map((link) => {
                        if (link.label === 'Home') {
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={handleHomeClick}
                                    className="p-2 text-tw-black hover:text-tw-crimson transition-colors rounded-full hover:bg-gray-100"
                                    title="Home"
                                >
                                    <Home className="w-5 h-5" />
                                </Link>
                            );
                        }

                        if (link.children) {
                            return (
                                <div key={link.label} className="relative group">
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1 text-sm font-medium text-tw-black hover:text-tw-crimson transition-colors py-4"
                                    >
                                        {link.label}
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-2 border-tw-crimson opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                                        <div className="py-2">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-6 py-3 text-sm text-tw-gray hover:text-tw-crimson hover:bg-gray-50 transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-tw-black hover:text-tw-crimson transition-colors"
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Integrated Search Bar */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-full max-w-2xl transition-all duration-300 px-6 z-50 ${isSearchOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    <div className="relative flex items-center">
                        <Search className="absolute left-0 w-5 h-5 text-tw-crimson" />
                        <input
                            type="text"
                            placeholder="Type to search..."
                            className="w-full bg-transparent border-none py-2 pl-8 pr-10 text-base font-medium text-tw-black focus:outline-none placeholder:text-gray-400"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus={isSearchOpen}
                        />
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute right-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-tw-crimson" />
                        </button>
                    </div>

                    {/* Dropdown Results */}
                    {searchQuery.trim() !== '' && (
                        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-100 shadow-2xl rounded-sm overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                                {searchResults.length > 0 ? (
                                    <div className="py-2">
                                        {searchResults.map((result) => (
                                            <Link
                                                key={result.id}
                                                href={result.href}
                                                onClick={() => {
                                                    setIsSearchOpen(false);
                                                    setSearchQuery('');
                                                }}
                                                className="flex items-center justify-between px-6 py-3 hover:bg-tw-light-gray transition-colors group"
                                            >
                                                <div>
                                                    <span className="text-[10px] font-medium text-tw-crimson uppercase tracking-widest block">{result.category}</span>
                                                    <span className="text-sm font-medium text-tw-black group-hover:text-tw-crimson transition-colors">{result.title}</span>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-tw-crimson transition-all" />
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="px-6 py-8 text-center">
                                        <p className="text-sm text-tw-gray">No results found for "<span className="font-medium text-tw-black">{searchQuery}</span>"</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Utilities */}
                <div className="hidden lg:flex items-center gap-4">
                    {!isSearchOpen && (
                        <button
                            className="text-tw-black hover:text-tw-crimson transition-colors p-2 rounded-full hover:bg-gray-100"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                {!isMobileMenuOpen && (
                    <button
                        className="lg:hidden z-50 relative text-tw-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                )}

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-white z-[60] flex flex-col px-6 overflow-y-auto animate-in slide-in-from-right duration-300">
                        <div className="flex items-center justify-between py-6 mb-6 border-b border-gray-100 flex-shrink-0">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center gap-1">
                                <span className="font-serif font-black text-2xl tracking-tighter text-tw-black">
                                    NexusIT
                                </span>
                                <span className="text-tw-crimson text-3xl font-light">/</span>
                            </Link>
                            <button
                                className="text-tw-black p-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        {/* Mobile Search */}
                        <div className="relative mb-8 border-b border-gray-100">
                            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-tw-crimson" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-transparent py-4 pl-8 pr-4 text-lg font-serif font-medium focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {searchQuery.trim() !== '' ? (
                            <div className="flex-1 overflow-y-auto pb-12">
                                {searchResults.map((result) => (
                                    <Link
                                        key={result.id}
                                        href={result.href}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setSearchQuery('');
                                        }}
                                        className="block py-4 border-b border-gray-50"
                                    >
                                        <span className="text-[10px] font-medium text-tw-crimson uppercase tracking-widest block">{result.category}</span>
                                        <span className="text-lg font-medium text-tw-black">{result.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <nav className="flex flex-col gap-6">
                                {NAV_LINKS.map((link) => (
                                    <div key={link.label} className="border-b border-gray-100 pb-2">
                                        {link.children ? (
                                            <details className="group/details">
                                                <summary className="list-none flex items-center justify-between text-2xl font-serif font-medium text-tw-black cursor-pointer">
                                                    {link.label}
                                                    <ChevronDown className="w-5 h-5 transition-transform group-open/details:rotate-180" />
                                                </summary>
                                                <div className="mt-4 pl-4 flex flex-col gap-3">
                                                    {link.children.map(child => (
                                                        <Link
                                                            key={child.label}
                                                            href={child.href}
                                                            className="text-lg font-medium text-gray-600 hover:text-tw-crimson"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </details>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="block text-2xl font-serif font-bold text-tw-black"
                                                onClick={(e) => {
                                                    setIsMobileMenuOpen(false);
                                                    if (link.label === 'Home') handleHomeClick(e);
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        )}
                    </div>
                )}

            </div>
        </header>
    );
}
