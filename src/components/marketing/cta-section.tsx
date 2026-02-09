"use client";

import { Check } from "@untitledui/icons";
import Image from "next/image";
import { Button } from "@/components/base/buttons/button";

const benefits = ["Discovery without Commitment", "Personalized onboarding", "Access to all features"];

export const CTASection = () => {
    return (
        <section className="bg-brand-25 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Content */}
                    <div>
                        <h2 className="text-display-lg font-semibold tracking-tight text-primary">Join the new wave of wealth management with Fintivio</h2>

                        {/* Benefits List */}
                        <ul className="mt-8 space-y-4">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100">
                                        <Check className="size-4 text-brand-600" />
                                    </div>
                                    <span className="text-lg text-secondary">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <Button color="primary" size="xl">
                                Schedule a Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Mockup Image */}
                    <div className="relative">
                        <Image
                            src="/images/mockups/simple-screen.png"
                            alt="Fintivio Dashboard Interface"
                            width={1216}
                            height={816}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
