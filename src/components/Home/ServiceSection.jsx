"use client";

import Image from "next/image";
import Container from "@/components/Common/Layout/Container";
import { useState } from "react";

const services = [
    "Printer Service",
    "Printer Sales",
    "Toner & Cartridge",
    "Scanner / Spare Parts",
    "Printer Consumables",
    "Printer Annual Maintenance",
    "Printer Monthly Rental",
    "Office Equipment Supply"
];

export default function ServiceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full py-10 md:py-16 bg-[#F0F2F5]">
            <Container>
                <div className="flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl overflow-hidden">

                    {/* Left - Blue Gradient Card */}
                    <div className="w-full lg:w-[45%] bg-gradient-to-br from-[#0b2d6e] via-[#0d4fa0] to-[#1a6fd4] rounded-3xl px-5 sm:px-7 pt-7 sm:pt-9 pb-7 sm:pb-9 flex flex-col">

                        {/* Title */}
                        <div className="mb-6 sm:mb-7">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                Our Services
                            </h3>
                            {/* Swoosh ribbon underline */}
                            <svg
                                className="mt-2"
                                width="130"
                                height="22"
                                viewBox="0 0 130 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 16 Q30 2 70 8 Q100 12 130 4"
                                    stroke="#1a6fd4"
                                    strokeWidth="9"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                                <path
                                    d="M0 16 Q30 2 70 8 Q100 12 130 4"
                                    stroke="#2589f5"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                            </svg>
                        </div>

                        {/* Service Buttons */}
                        <div className="flex flex-col gap-2.5 sm:gap-3">
                            {services.map((service, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        className={`flex items-center w-full rounded-full px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold transition-all duration-300
                                        ${isActive
                                                ? "bg-white text-[#0a1628] shadow-lg"
                                                : "bg-[#1565C8] hover:bg-[#1878e8] text-white shadow-md"
                                            }`}
                                    >
                                        <span
                                            className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#E22386] flex-shrink-0 mr-3 sm:mr-4"
                                        />
                                        <span className="text-left">{service}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Image Panel */}
                    <div className="w-full lg:w-[55%]">
                        <div className="h-full min-h-[300px] md:min-h-[400px] lg:min-h-0 bg-[#0d0d12] flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full min-h-[300px] md:min-h-[460px]">
                                <Image
                                    src="/images/services/service-img.webp"
                                    alt="Printer service technician working on a printer"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
