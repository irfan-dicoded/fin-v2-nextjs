"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { BadgeWithDot } from "@/components/base/badges/badges";

interface AssetType {
    id: string;
    title: string;
    description: string;
}

const assetTypes: AssetType[] = [
    {
        id: "public",
        title: "Public Portfolio",
        description: "Track all Equities, Bonds, Commodities, Forex, Crypto assets effortlessly.",
    },
    {
        id: "private",
        title: "Private Investments",
        description: "Monitor your Private Equity, Hedge Funds, VCs, Real Estate investments without hassle.",
    },
    {
        id: "lifestyle",
        title: "Lifestyle Assets",
        description: "Manage your planes, yachts, cars, art, jewelry, and even rare collectibles with ease.",
    },
];

export const UnifiedPlatformSection = () => {
    const [activeAsset, setActiveAsset] = useState<string>("public");

    return (
        <section className="bg-secondary py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="mb-6 flex justify-center">
                        <BadgeWithDot type="color" color="brand">
                            Manage Everything in One Place
                        </BadgeWithDot>
                    </div>
                    <h2 className="mx-auto max-w-3xl text-display-md font-semibold tracking-tight text-primary">Never go back-and-forth between apps again</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-xl text-tertiary">
                        Easily import all financial data from multiple sources. Whether it&apos;s APIs, documents, and external data, Fintivio makes it easy to
                        track and monitor all asset movements from a single place.
                    </p>
                </div>

                {/* iPad Mockup */}
                <div className="mb-16 flex justify-center">
                    <motion.div
                        className="relative w-full max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image src="/images/mockups/ipad.png" alt="Fintivio Dashboard on iPad" width={1200} height={800} className="rounded-lg" priority />
                    </motion.div>
                </div>

                {/* Asset Types - Selectable */}
                <div className="grid gap-6 md:grid-cols-3">
                    {assetTypes.map((asset, index) => (
                        <motion.button
                            key={asset.id}
                            onClick={() => setActiveAsset(asset.id)}
                            className={`group relative w-full border-l-4 py-6 pr-4 pl-6 text-left transition-all duration-300 hover:bg-primary ${
                                activeAsset === asset.id ? "border-brand-600" : "border-transparent"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >
                            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-600 to-brand-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <h3
                                className={`mb-3 text-xl font-semibold transition-colors duration-300 ${
                                    activeAsset === asset.id ? "text-primary" : "text-secondary group-hover:text-primary"
                                }`}
                            >
                                {asset.title}
                            </h3>
                            <p
                                className={`leading-relaxed transition-colors duration-300 ${
                                    activeAsset === asset.id ? "text-tertiary" : "text-quaternary group-hover:text-tertiary"
                                }`}
                            >
                                {asset.description}
                            </p>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
};
