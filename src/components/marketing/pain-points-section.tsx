"use client";

import { FileMinus02, Laptop01, ZapOff } from "@untitledui/icons";

const painPoints = [
    {
        icon: FileMinus02,
        title: "Fragmented Data",
        description:
            "Your portfolio lives across custodians, fund admins, brokers, and Excel files. No single source of truth. Every report starts from scratch.",
    },
    {
        icon: ZapOff,
        title: "Manual Reporting",
        description:
            "Your team spends weeks compiling quarterly reports. Copy-pasting between systems, reconciling numbers, formatting decks. Time that should go to investment decisions.",
    },
    {
        icon: Laptop01,
        title: "No Single View",
        description:
            "Private equity in one system, real estate in another, public markets somewhere else, lifestyle assets in a spreadsheet. You've never seen your true net worth in one place.",
    },
];

export const PainPointsSection = () => {
    return (
        <section className="bg-[#F0F7FF] py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 max-w-3xl">
                    <h2 className="text-display-md font-semibold tracking-tight text-primary">
                        Managing wealth shouldn&apos;t require 12 spreadsheets, 5 custodian logins, and a full weekend
                    </h2>
                    <p className="mt-6 text-xl text-tertiary">
                        Most family offices still operate with disconnected tools and manual processes. Sound familiar?
                    </p>
                </div>

                {/* Pain Points Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {painPoints.map((point, index) => (
                        <div key={point.title} className="rounded-2xl bg-primary p-8 shadow-sm">
                            {/* Icon */}
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600">
                                <point.icon className="size-6 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="mb-3 text-xl font-semibold text-primary">{point.title}</h3>
                            <p className="leading-relaxed text-tertiary">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
