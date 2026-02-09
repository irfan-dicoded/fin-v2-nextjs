"use client";

import { useState } from "react";
import { BookOpen01, Briefcase01, Building05, ChevronDown, Heart, Menu01, Stars02, XClose } from "@untitledui/icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/base/buttons/button";

const productFeatures = {
    "Manage Assets": [
        {
            icon: Building05,
            title: "Public Portfolio",
            description: "Equities, Bonds, Commodities, Forex, Crypto",
        },
        {
            icon: Briefcase01,
            title: "Private Investments",
            description: "Private Equity, Hedge Funds, Venture Capitals, Real Estate",
        },
        {
            icon: () => (
                <svg className="size-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            ),
            title: "Lifestyle Assets",
            description: "Aviation, Marine, Automobile, Art, Jewelry, and Collectibles",
        },
    ],
    "Easy Monitoring": [
        {
            icon: () => (
                <svg className="size-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
            ),
            title: "Universal Dashboard",
            description: "See and modify the dashboard to fit your specific needs",
        },
        {
            icon: () => (
                <svg className="size-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
            ),
            title: "Compliance",
            description: "Monitor your compliance inside a single dashboard",
        },
        {
            icon: () => (
                <svg className="size-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
            ),
            title: "Family & Entity Management",
            description: "Effortlessly manage family members, entities, and providers",
        },
    ],
    "All-in-One": [
        {
            icon: () => (
                <svg className="size-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            title: "Stakeholders",
            description: "See how your specific role fits in the Fintivio environment",
        },
        {
            icon: () => (
                <svg className="size-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
            ),
            title: "Integrations",
            description: "Integrate all of your financial data into Fintivio",
        },
        {
            icon: () => (
                <svg className="size-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: "Security",
            description: "Learn how Fintivio secures your precious data",
        },
    ],
};

const resourceItems = [
    {
        icon: BookOpen01,
        title: "Blog",
        description: "The latest finance and family office guides curated by our expert team.",
    },
    {
        icon: Stars02,
        title: "Customer stories",
        description: "Learn how our customers are using Fintivio to 10x their efficiency.",
    },
    {
        icon: () => (
            <svg className="size-5 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
        ),
        title: "Press",
        description: "The latest of Fintivio in the press.",
    },
];

const companyItems = [
    {
        icon: Heart,
        title: "About Fintivio",
        description: "Get to know Fintivio and the team behind it.",
    },
    {
        icon: Briefcase01,
        title: "Careers",
        description: "Join a global remote team reshaping the future of family offices.",
    },
];

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productDropdownOpen, setProductDropdownOpen] = useState(false);
    const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

    const openProductDropdown = () => {
        setProductDropdownOpen(true);
        setResourcesDropdownOpen(false);
    };

    const openResourcesDropdown = () => {
        setResourcesDropdownOpen(true);
        setProductDropdownOpen(false);
    };

    const closeAllDropdowns = () => {
        setProductDropdownOpen(false);
        setResourcesDropdownOpen(false);
    };

    return (
        <header className="relative z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/images/logo.svg" alt="Fintivio" width={108} height={32} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 lg:flex">
                        <Link href="#" className="text-md font-medium text-secondary hover:text-primary">
                            Why Fintivio?
                        </Link>

                        {/* Product Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                className="flex items-center gap-1 text-md font-medium text-secondary hover:text-primary"
                                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                                onMouseEnter={openProductDropdown}
                            >
                                Product
                                <ChevronDown className={`size-4 transition-transform duration-200 ${productDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Desktop Dropdown Menu */}
                            {productDropdownOpen && (
                                <div className="absolute top-full left-1/2 z-50 w-[800px] -translate-x-1/2 pt-2" onMouseLeave={closeAllDropdowns}>
                                    <div className="rounded-2xl border border-secondary bg-primary p-6 shadow-xl">
                                        <div className="grid grid-cols-3 gap-8">
                                            {Object.entries(productFeatures).map(([category, features]) => (
                                                <div key={category}>
                                                    <h3 className="mb-4 text-md font-semibold text-brand-600">{category}</h3>
                                                    <div className="space-y-4">
                                                        {features.map((feature, index) => (
                                                            <Link
                                                                key={`${category}-${index}`}
                                                                href="#"
                                                                className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                                                            >
                                                                <feature.icon className="mt-0.5 size-5 shrink-0 text-brand-600" />
                                                                <div>
                                                                    <p className="font-medium text-primary">{feature.title}</p>
                                                                    <p className="text-sm text-tertiary">{feature.description}</p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                className="flex items-center gap-1 text-md font-medium text-secondary hover:text-primary"
                                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                                onMouseEnter={openResourcesDropdown}
                            >
                                Resources
                                <ChevronDown className={`size-4 transition-transform duration-200 ${resourcesDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Desktop Resources Dropdown */}
                            {resourcesDropdownOpen && (
                                <div className="absolute top-full left-1/2 z-50 w-[900px] -translate-x-1/2 pt-2" onMouseLeave={closeAllDropdowns}>
                                    <div className="rounded-2xl border border-secondary bg-primary p-6 shadow-xl">
                                        <div className="grid grid-cols-3 gap-8">
                                            {/* Resources Column */}
                                            <div className="space-y-4">
                                                {resourceItems.map((item) => (
                                                    <Link
                                                        key={item.title}
                                                        href="#"
                                                        className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                                                    >
                                                        <item.icon className="mt-0.5 size-5 shrink-0 text-brand-600" />
                                                        <div>
                                                            <p className="font-medium text-primary">{item.title}</p>
                                                            <p className="text-sm text-tertiary">{item.description}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Company Column */}
                                            <div className="space-y-4">
                                                {companyItems.map((item) => (
                                                    <Link
                                                        key={item.title}
                                                        href="#"
                                                        className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                                                    >
                                                        <item.icon className="mt-0.5 size-5 shrink-0 text-brand-600" />
                                                        <div>
                                                            <p className="font-medium text-primary">{item.title}</p>
                                                            <p className="text-sm text-tertiary">{item.description}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Update Card */}
                                            <div className="rounded-xl bg-secondary p-4">
                                                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                                                    <Image src="/images/hero/mockup.png" alt="Dashboard update" fill className="object-cover" />
                                                </div>
                                                <h4 className="mb-2 font-semibold text-primary">We've just released an update!</h4>
                                                <p className="mb-4 text-sm text-tertiary">Check out the all new dashboard view. Customize to fit your needs.</p>
                                                <div className="flex gap-4">
                                                    <button className="text-sm font-medium text-tertiary hover:text-primary">Dismiss</button>
                                                    <Link href="#" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                                                        Changelog
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="#" className="text-md font-medium text-secondary hover:text-primary">
                            Pricing
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <Button color="secondary" size="md">
                            Log in
                        </Button>
                        <Button color="primary" size="md">
                            Request Demo
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button type="button" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                        {mobileMenuOpen ? <XClose className="size-6 text-primary" /> : <Menu01 className="size-6 text-primary" />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden">
                        <div className="space-y-4 py-6">
                            <Link href="#" className="block text-md font-medium text-secondary hover:text-primary">
                                Why Fintivio?
                            </Link>

                            {/* Mobile Product Dropdown */}
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between text-md font-medium text-secondary hover:text-primary"
                                    onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                                >
                                    Product
                                    <ChevronDown className={`size-4 transition-transform duration-200 ${productDropdownOpen ? "rotate-180" : ""}`} />
                                </button>

                                {productDropdownOpen && (
                                    <div className="space-y-6 pl-4">
                                        {Object.entries(productFeatures).map(([category, features]) => (
                                            <div key={category}>
                                                <h3 className="mb-3 text-md font-semibold text-brand-600">{category}</h3>
                                                <div className="space-y-3">
                                                    {features.map((feature, index) => (
                                                        <Link
                                                            key={`${category}-${index}`}
                                                            href="#"
                                                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                                                        >
                                                            <feature.icon className="mt-0.5 size-5 shrink-0 text-brand-600" />
                                                            <div>
                                                                <p className="font-medium text-primary">{feature.title}</p>
                                                                <p className="text-sm text-tertiary">{feature.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Resources Dropdown */}
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between text-md font-medium text-secondary hover:text-primary"
                                    onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                                >
                                    Resources
                                    <ChevronDown className={`size-4 transition-transform duration-200 ${resourcesDropdownOpen ? "rotate-180" : ""}`} />
                                </button>

                                {resourcesDropdownOpen && (
                                    <div className="space-y-6 pl-4">
                                        <div className="space-y-4">
                                            <h3 className="text-md font-semibold text-brand-600">Resources</h3>
                                            {resourceItems.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href="#"
                                                    className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                                                >
                                                    <item.icon className="mt-0.5 size-5 shrink-0 text-brand-600" />
                                                    <div>
                                                        <p className="font-medium text-primary">{item.title}</p>
                                                        <p className="text-sm text-tertiary">{item.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-md font-semibold text-brand-600">Company</h3>
                                            {companyItems.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href="#"
                                                    className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary"
                                                >
                                                    <item.icon className="mt-0.5 size-5 shrink-0 text-brand-600" />
                                                    <div>
                                                        <p className="font-medium text-primary">{item.title}</p>
                                                        <p className="text-sm text-tertiary">{item.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link href="#" className="block text-md font-medium text-secondary hover:text-primary">
                                Pricing
                            </Link>
                            <div className="flex flex-col gap-3 pt-4">
                                <Button color="secondary" size="lg" className="w-full">
                                    Log in
                                </Button>
                                <Button color="primary" size="lg" className="w-full">
                                    Request Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
