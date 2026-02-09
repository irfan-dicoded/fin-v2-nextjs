"use client";

import { useState } from "react";
import { Minus, Plus } from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/base/buttons/button";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can cancel your subscription at any time. If you cancel, you'll continue to have access to your account until the end of your current billing period.",
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can add custom notes, PO numbers, or any other information you need to your invoices.",
    },
    {
        question: "How does billing work?",
        answer: "We offer monthly and annual billing options. Annual plans come with a discount. You can pay by credit card or bank transfer.",
    },
    {
        question: "How do I change my account email?",
        answer: "You can change your account email from your profile settings. We'll send a verification email to confirm the change.",
    },
];

export const FAQSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="bg-primary py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-display-md font-semibold tracking-tight text-primary">Frequently asked questions</h2>
                    <p className="mt-4 text-xl text-tertiary">Everything you need to know about the product and billing.</p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-0">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-secondary last:border-b-0">
                            <button onClick={() => toggleItem(index)} className="flex w-full items-center justify-between py-6 text-left">
                                <span className="text-lg font-medium text-primary">{item.question}</span>
                                <span className="ml-4 flex-shrink-0">
                                    {openItem === index ? <Minus className="size-5 text-tertiary" /> : <Plus className="size-5 text-tertiary" />}
                                </span>
                            </button>
                            <AnimatePresence initial={false}>
                                {openItem === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-tertiary">{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 rounded-2xl bg-secondary p-8 text-center">
                    <div className="mb-6 flex justify-center">
                        <Image src="/images/mockups/avatar-group.png" alt="Our team" width={120} height={48} className="h-12 w-auto" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-primary">Still have questions?</h3>
                    <p className="mb-6 text-tertiary">Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.</p>
                    <Button color="primary" size="lg">
                        Get in touch
                    </Button>
                </div>
            </div>
        </section>
    );
};
