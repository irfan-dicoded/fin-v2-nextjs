"use client";

import { PlayCircle } from "@untitledui/icons";
import Image from "next/image";
import { BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/patterns/hero-pattern.svg" alt="" fill className="object-cover opacity-50 dark:opacity-30" priority />
            </div>

            <div className="relative z-10">
                {/* Main Hero Content */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 py-28 lg:grid-cols-2 lg:py-36">
                        {/* Left Column - Text Content */}
                        <div className="flex flex-col justify-center space-y-8">
                            {/* Badge */}
                            <div className="w-fit">
                                <BadgeWithDot type="color" color="brand">
                                    UAE&apos;s #1 Wealth Management Platform
                                </BadgeWithDot>
                            </div>

                            {/* Headline */}
                            <div className="space-y-4">
                                <h1 className="text-display-xl font-semibold tracking-tight text-primary">Your Wealth&apos;s Reliable OS</h1>
                                <p className="text-xl text-tertiary">
                                    Consolidate, analyze, and report across all asset classes. Track private investments, real estate, and lifestyle assets with
                                    real-time performance analytics.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button color="primary" size="xl" className="w-full sm:w-auto">
                                    Schedule a Demo
                                </Button>
                                <Button color="secondary" size="xl" iconLeading={PlayCircle} className="w-full sm:w-auto">
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        {/* Right Column - Mockup Image */}
                        <div className="flex items-center justify-center lg:justify-end">
                            <div className="relative w-full max-w-2xl">
                                <Image
                                    src="/images/hero/mockup.png"
                                    alt="Fintivio Platform Dashboard"
                                    width={800}
                                    height={600}
                                    className="rounded-lg"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
