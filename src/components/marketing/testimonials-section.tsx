"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const TestimonialsSection = () => {
    return (
        <section className="bg-[#16326C] py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Company Logo */}
                    <div className="mb-12 flex justify-center">
                        <Image src="/images/logos/wildcrafted.png" alt="Wildcrafted" width={140} height={32} className="h-8 w-auto" />
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="mb-12">
                        <p className="text-display-md leading-tight font-medium text-white">
                            Since using Fintivio, we were able to save 40+ hours of manual work every quarter while staying precise at all times!
                        </p>
                    </blockquote>

                    {/* Avatar and Author Info */}
                    <div className="flex flex-col items-center">
                        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
                            <Image src="/images/mockups/avatar-single.png" alt="Amélie Laurent" width={64} height={64} className="h-full w-full object-cover" />
                        </div>
                        <p className="text-lg font-semibold text-white">Amélie Laurent</p>
                        <p className="text-brand-200">Portfolio Manager, Wildcrafted</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
