"use client";

import { CTASection } from "@/components/marketing/cta-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { HeroSection } from "@/components/marketing/hero-section";
import { PainPointsSection } from "@/components/marketing/pain-points-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { UnifiedPlatformSection } from "@/components/marketing/unified-platform-section";

export const HomeScreen = () => {
    return (
        <div className="min-h-screen bg-primary">
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
                <PainPointsSection />
                <UnifiedPlatformSection />
                <TestimonialsSection />
                <FAQSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};
