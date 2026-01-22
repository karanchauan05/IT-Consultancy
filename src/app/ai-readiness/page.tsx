'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import {
    Cpu,
    Database,
    ShieldCheck,
    Users,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Loader2,
    Sparkles,
    BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type Question = {
    id: number;
    text: string;
    icon: any;
    options: {
        label: string;
        value: number;
        description: string;
    }[];
};

const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "How would you describe your organization's data infrastructure?",
        icon: Database,
        options: [
            { label: "Siloed", value: 1, description: "Data is disconnected across different departments and systems." },
            { label: "Standardized", value: 2, description: "Common formats are used, but integration is still manual." },
            { label: "Unified", value: 3, description: "Centralized data warehouse or lake with automated pipelines." },
            { label: "Optimized", value: 4, description: "Real-time data streaming and advanced governance in place." }
        ]
    },
    {
        id: 2,
        text: "What is your current AI talent capability?",
        icon: Users,
        options: [
            { label: "Exploring", value: 1, description: "No dedicated AI roles; limited internal understanding." },
            { label: "Emerging", value: 2, description: "Few specialists; heavy reliance on external partners." },
            { label: "Established", value: 3, description: "Core data science team integrated into business units." },
            { label: "Advanced", value: 4, description: "Company-wide AI literacy with internal Centre of Excellence." }
        ]
    },
    {
        id: 3,
        text: "How mature are your AI governance and ethics policies?",
        icon: ShieldCheck,
        options: [
            { label: "Non-existent", value: 1, description: "No formal guidelines for AI usage or data privacy." },
            { label: "Initial", value: 2, description: "Draft policies focused primarily on legal compliance." },
            { label: "Defined", value: 3, description: "Comprehensive framework for biased detection and safety." },
            { label: "Automated", value: 4, description: "Ongoing monitoring and automated ethical guardrail systems." }
        ]
    },
    {
        id: 4,
        text: "To what extent is AI currently integrated into your business strategy?",
        icon: Cpu,
        options: [
            { label: "Ad-hoc", value: 1, description: "Experimental projects with no clear strategic alignment." },
            { label: "Functional", value: 2, description: "Used in specific areas like marketing or customer service." },
            { label: "Strategic", value: 3, description: "Core component of long-term business and product roadmaps." },
            { label: "Transformation", value: 4, description: "The business model is fundamentally built around AI capabilities." }
        ]
    }
];

export default function AIReadiness() {
    const [step, setStep] = useState(0); // 0: Intro, 1-4: Questions, 5: Loading, 6: Results
    const [answers, setAnswers] = useState<Record<number, number>>({});

    const handleAnswer = (questionId: number, value: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
        setTimeout(() => {
            if (step < QUESTIONS.length) {
                setStep(step + 1);
            } else {
                calculateResults();
            }
        }, 400);
    };

    const calculateResults = () => {
        setStep(5); // Show loading
        setTimeout(() => {
            setStep(6); // Show results
        }, 2500);
    };

    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = QUESTIONS.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    const getMaturityLevel = () => {
        if (percentage < 30) return { label: "Foundational", color: "text-red-500", bg: "bg-red-50", desc: "You're at the beginning of your journey. Priority should be on data consolidation." };
        if (percentage < 60) return { label: "Developing", color: "text-orange-500", bg: "bg-orange-50", desc: "You have the basics. Focus on building core AI use cases and talent." };
        if (percentage < 85) return { label: "Strategic", color: "text-tw-teal", bg: "bg-teal-50", desc: "AI is a key driver. Focus on scaling across the enterprise and governance." };
        return { label: "Visionary", color: "text-tw-crimson", bg: "bg-crimson-50", desc: "You are leading the market. Focus on continuous innovation and ethical leadership." };
    };

    const maturity = getMaturityLevel();

    return (
        <main className="min-h-screen font-sans bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4">
                <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-h-[600px] flex flex-col">

                    {/* Progress Bar */}
                    {step > 0 && step < 5 && (
                        <div className="h-1.5 w-full bg-gray-100">
                            <div
                                className="h-full bg-tw-crimson transition-all duration-700 ease-out"
                                style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                            />
                        </div>
                    )}

                    <div className="p-8 md:p-16 flex-grow flex flex-col">

                        {/* Step 0: Intro */}
                        {step === 0 && (
                            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <span className="inline-block px-4 py-1.5 bg-tw-teal/10 text-tw-teal text-xs font-bold uppercase tracking-widest mb-6 rounded-full font-sans">
                                    Assessment Tool
                                </span>
                                <h1 className="font-serif text-4xl md:text-6xl font-bold text-tw-black mb-8 leading-tight">
                                    Is your enterprise <span className="text-tw-crimson italic">AI-Ready?</span>
                                </h1>
                                <p className="text-lg md:text-xl text-tw-gray mb-12 max-w-2xl leading-relaxed">
                                    Take our 2-minute assessment to measure your organization's AI maturity across data, talent, governance, and strategy.
                                </p>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="bg-tw-crimson hover:bg-tw-teal transition-all group px-10 h-16 text-lg"
                                    onClick={() => setStep(1)}
                                >
                                    Start the assessment <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        )}

                        {/* Step 1-4: Questions */}
                        {step >= 1 && step <= QUESTIONS.length && (
                            <div key={step} className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-tw-crimson/10 rounded-xl flex items-center justify-center">
                                        {(() => {
                                            const Icon = QUESTIONS[step - 1].icon;
                                            return <Icon className="w-6 h-6 text-tw-crimson" />;
                                        })()}
                                    </div>
                                    <span className="text-tw-gray font-bold uppercase tracking-widest text-xs">
                                        Question {step} of {QUESTIONS.length}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-tw-black mb-10">
                                    {QUESTIONS[step - 1].text}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {QUESTIONS[step - 1].options.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleAnswer(QUESTIONS[step - 1].id, option.value)}
                                            className={cn(
                                                "text-left p-6 rounded-xl border-2 transition-all duration-200 group flex flex-col justify-between h-full",
                                                answers[QUESTIONS[step - 1].id] === option.value
                                                    ? "border-tw-crimson bg-tw-crimson/5"
                                                    : "border-gray-100 hover:border-tw-teal hover:bg-gray-50"
                                            )}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold text-tw-black text-lg group-hover:text-tw-teal transition-colors">
                                                    {option.label}
                                                </span>
                                                <div className={cn(
                                                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                                    answers[QUESTIONS[step - 1].id] === option.value
                                                        ? "border-tw-crimson bg-tw-crimson"
                                                        : "border-gray-300 group-hover:border-tw-teal"
                                                )}>
                                                    {answers[QUESTIONS[step - 1].id] === option.value && (
                                                        <div className="w-2 h-2 bg-white rounded-full" />
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-sm text-tw-gray leading-relaxed">
                                                {option.description}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-auto pt-12 flex justify-between items-center">
                                    <button
                                        className="flex items-center gap-2 text-tw-gray hover:text-tw-crimson font-bold text-sm transition-colors"
                                        onClick={() => setStep(step - 1)}
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Previous
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 5: Loading */}
                        {step === 5 && (
                            <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                                <Loader2 className="w-16 h-16 text-tw-crimson animate-spin mb-8" />
                                <h2 className="text-2xl font-serif font-bold text-tw-black mb-4">Generating Insights...</h2>
                                <p className="text-tw-gray text-center max-w-md">
                                    Our engine is analyzing your responses against industry benchmarks to determine your AI maturity profile.
                                </p>
                            </div>
                        )}

                        {/* Step 6: Results */}
                        {step === 6 && (
                            <div className="animate-in fade-in zoom-in duration-1000">
                                <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                                    <div className="relative w-48 h-48 flex items-center justify-center">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="96"
                                                cy="96"
                                                r="88"
                                                fill="transparent"
                                                stroke="#f3f4f6"
                                                strokeWidth="12"
                                            />
                                            <circle
                                                cx="96"
                                                cy="96"
                                                r="88"
                                                fill="transparent"
                                                stroke="currentColor"
                                                strokeWidth="12"
                                                strokeDasharray={552.92}
                                                strokeDashoffset={552.92 - (552.92 * percentage) / 100}
                                                className={cn("transition-all duration-1000 ease-out", maturity.color.replace('text-', 'stroke-'))}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-5xl font-bold text-tw-black">{percentage}%</span>
                                            <span className="text-xs font-bold text-tw-gray uppercase tracking-widest">Score</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <span className={cn("px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block", maturity.bg, maturity.color)}>
                                            Status: {maturity.label}
                                        </span>
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-tw-black mb-4">
                                            Your AI Readiness Report
                                        </h2>
                                        <p className="text-lg text-tw-gray leading-relaxed mb-6">
                                            {maturity.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <div className="bg-white border border-gray-100 p-4 rounded-lg flex items-center gap-3 shadow-sm">
                                                <Sparkles className="w-5 h-5 text-tw-crimson" />
                                                <span className="text-sm font-bold">Top Insight: Infrastructure is primary hurdle</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                    <div className="p-6 bg-tw-teal/5 rounded-xl border border-tw-teal/10">
                                        <BarChart3 className="w-8 h-8 text-tw-teal mb-4" />
                                        <h3 className="font-bold text-tw-black mb-2">Benchmark</h3>
                                        <p className="text-sm text-tw-gray">Your score is {percentage > 50 ? 'above' : 'below'} the industry average for your sector.</p>
                                    </div>
                                    <div className="p-6 bg-tw-crimson/5 rounded-xl border border-tw-crimson/10">
                                        <CheckCircle2 className="w-8 h-8 text-tw-crimson mb-4" />
                                        <h3 className="font-bold text-tw-black mb-2">Next Step</h3>
                                        <p className="text-sm text-tw-gray">Conduct a data audit to identify high-value pilot opportunities.</p>
                                    </div>
                                    <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                                        <Users className="w-8 h-8 text-purple-600 mb-4" />
                                        <h3 className="font-bold text-tw-black mb-2">Consultation</h3>
                                        <p className="text-sm text-tw-gray">Speak with our AI strategy leads for a roadmap session.</p>
                                    </div>
                                </div>

                                <div className="bg-tw-black text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
                                    <div className="max-w-md text-center md:text-left">
                                        <h3 className="text-2xl font-serif font-bold mb-4">Get the full strategic analysis</h3>
                                        <p className="text-gray-400">Download the complete 15-page AI maturity report tailored to your responses.</p>
                                    </div>
                                    <Link href="/contact">
                                        <Button variant="primary" size="lg" className="bg-tw-crimson hover:bg-white hover:text-tw-black whitespace-nowrap px-8">
                                            Unlock Full Report
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
