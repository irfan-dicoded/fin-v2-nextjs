"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import { AnimatePresence, motion } from "motion/react";
import familyAnimation from "@/../public/lottie/family-members.json";
import entitiesAnimation from "@/../public/lottie/multiple-entities.json";
import providersAnimation from "@/../public/lottie/providers-contacts.json";

interface Feature {
    id: string;
    title: string;
    description: string;
    animation: object;
}

const features: Feature[] = [
    {
        id: "family",
        title: "Manage Family Members",
        description:
            "Whether you have a family of 2 or 200, Fintivio's family management features help you ensure accurate role assignments and fair distribution.",
        animation: familyAnimation,
    },
    {
        id: "entities",
        title: "Manage Multiple Entities",
        description: "Easily ensure compliance and control administrations across all of your entities, no matter the country or currency.",
        animation: entitiesAnimation,
    },
    {
        id: "providers",
        title: "Manage Providers and Contacts",
        description: "Always remember who provides what and all of your contacts in a single place.",
        animation: providersAnimation,
    },
];

export const FeaturesSection = () => {
    const [activeFeature, setActiveFeature] = useState<string>("family");

    const activeFeatureData = features.find((f) => f.id === activeFeature);

    return (
        <section className="relative overflow-hidden bg-primary py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-4 text-md font-semibold text-brand-600">All-in-One Administration</p>
                    <h2 className="mb-6 text-display-md font-semibold tracking-tight text-primary">Manage All Parties from a Single Place</h2>
                    <p className="text-xl text-tertiary">
                        Stop scratching your head over which entity owns which asset by how much using our simple interface.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Feature List */}
                    <div className="space-y-0">
                        {features.map((feature, index) => (
                            <motion.button
                                key={feature.id}
                                onClick={() => setActiveFeature(feature.id)}
                                className={`group relative w-full border-l-4 py-6 pr-4 pl-6 text-left transition-all duration-300 hover:bg-secondary ${
                                    activeFeature === feature.id ? "border-brand-600" : "border-transparent"
                                }`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-600 to-brand-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <h3
                                    className={`mb-2 text-xl font-semibold transition-colors duration-300 ${
                                        activeFeature === feature.id ? "text-primary" : "text-secondary group-hover:text-primary"
                                    }`}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className={`text-base leading-relaxed transition-colors duration-300 ${
                                        activeFeature === feature.id ? "text-tertiary" : "text-quaternary group-hover:text-tertiary"
                                    }`}
                                >
                                    {feature.description}
                                </p>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Column - Animation */}
                    <div className="flex items-center justify-center">
                        <motion.div
                            className="relative w-full max-w-lg rounded-2xl bg-secondary p-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="aspect-square w-full"
                                >
                                    {activeFeatureData && (
                                        <Lottie animationData={activeFeatureData.animation} loop={true} autoplay={true} className="h-full w-full" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
