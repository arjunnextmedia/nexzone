"use client";

import { useEffect, useState } from "react";



const WHATSAPP_NUMBER = "971508997350";
const PHONE_NUMBER = "tel:+971508998716";


const KEYFRAMES = `
@keyframes floatSlideIn {
  0%   { opacity: 0; transform: translateX(80px) scale(0.6); }
  60%  { opacity: 1; transform: translateX(-8px) scale(1.08); }
  80%  { transform: translateX(4px) scale(0.97); }
  100% { opacity: 1; transform: translateX(0) scale(1); }
}
@keyframes pulseRing {
  0%   { transform: scale(1);    opacity: 0.6; }
  70%  { transform: scale(1.75); opacity: 0;   }
  100% { transform: scale(1.75); opacity: 0;   }
}
`;

export default function ScrollToTop() {
    const [showTop, setShowTop] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Inject keyframes once
    useEffect(() => {
        if (document.getElementById("float-actions-kf")) return;
        const style = document.createElement("style");
        style.id = "float-actions-kf";
        style.textContent = KEYFRAMES;
        document.head.appendChild(style);
    }, []);

    // Trigger entrance after a short settle delay
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 400);
        return () => clearTimeout(t);
    }, []);

    // Scroll-to-top visibility
    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    /* Entrance animation styles — staggered by 150 ms */
    const waStyle = mounted
        ? { animation: "floatSlideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both" }
        : { opacity: 0, transform: "translateX(80px)" };

    const phoneStyle = mounted
        ? { animation: "floatSlideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both" }
        : { opacity: 0, transform: "translateX(80px)" };

    return (
        <div
            className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-3"
            aria-label="Quick contact actions"
        >

            {/* ══════════════ WhatsApp ══════════════ */}
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                style={waStyle}
                className="
                    group relative
                    w-11 h-11 sm:w-12 sm:h-12
                    rounded-full
                    bg-[#25D366] hover:bg-[#1ebe58]
                    text-white
                    flex items-center justify-center
                    shadow-lg hover:shadow-[#25D366]/50
                    transition-colors duration-300 ease-out
                    hover:-translate-y-0.5 hover:scale-110
                "
            >
                {/* Idle pulse ring */}
                <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-[#25D366]"
                    style={{ animation: "pulseRing 2.2s ease-out 1.5s infinite" }}
                />

                {/* WhatsApp official brand icon */}
                <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="relative w-5 h-5 sm:w-6 sm:h-6"
                    aria-hidden="true"
                >
                    <path d="M16 .5C7.439.5.5 7.439.5 16c0 2.722.69 5.284 1.902 7.523L.5 31.5l8.241-1.874A15.456 15.456 0 0016 31.5c8.561 0 15.5-6.939 15.5-15.5S24.561.5 16 .5zm0 28.3a12.75 12.75 0 01-6.503-1.778l-.466-.277-4.892 1.114 1.158-4.762-.305-.49A12.756 12.756 0 013.2 16C3.2 9.49 8.49 4.2 16 4.2S28.8 9.49 28.8 16 23.51 28.8 16 28.8zm6.99-9.555c-.383-.192-2.266-1.118-2.617-1.245-.35-.128-.605-.192-.86.192-.255.383-.987 1.245-1.21 1.5-.222.256-.445.288-.828.096-.383-.192-1.617-.596-3.08-1.902-1.138-1.017-1.906-2.272-2.13-2.655-.222-.383-.024-.59.168-.78.172-.17.383-.446.575-.67.19-.223.255-.383.383-.638.128-.255.064-.479-.032-.67-.096-.192-.86-2.074-1.18-2.84-.31-.745-.626-.644-.86-.656-.222-.01-.479-.013-.734-.013-.256 0-.67.096-.1021.479-.351.383-1.34 1.309-1.34 3.192 0 1.883 1.372 3.702 1.563 3.957.192.256 2.7 4.124 6.543 5.783.914.394 1.628.63 2.184.806.917.292 1.752.251 2.41.152.736-.11 2.266-.926 2.585-1.82.32-.894.32-1.66.224-1.82-.096-.16-.351-.256-.734-.447z" />
                </svg>

                {/* Tooltip — green gradient + caret */}
                <span className="
                    absolute right-full mr-4
                    flex items-center
                    opacity-0 group-hover:opacity-100
                    translate-x-2 group-hover:translate-x-0
                    transition-all duration-300 ease-out
                    pointer-events-none
                ">
                    <span className="
                        px-3 py-1.5 rounded-full
                        bg-linear-to-r from-[#1db954] to-[#25D366]
                        text-white text-xs font-semibold whitespace-nowrap tracking-wide
                        shadow-lg shadow-[#25D366]/40
                    ">
                        WhatsApp
                    </span>
                    <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#25D366]" />
                </span>
            </a>

            {/* ══════════════ Phone ══════════════ */}
            <a
                href={PHONE_NUMBER}
                aria-label="Call us"
                style={phoneStyle}
                className="
                    group relative
                    w-11 h-11 sm:w-12 sm:h-12
                    rounded-full
                    bg-[#077ADE] hover:bg-[#0565bb]
                    text-white
                    flex items-center justify-center
                    shadow-lg hover:shadow-[#077ADE]/50
                    transition-colors duration-300 ease-out
                    hover:-translate-y-0.5 hover:scale-110
                "
            >
                {/* Idle pulse ring */}
                <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-[#077ADE]"
                    style={{ animation: "pulseRing 2.2s ease-out 1.8s infinite" }}
                />

                {/* Phone SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative w-5 h-5 sm:w-6 sm:h-6"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                    />
                </svg>

                {/* Tooltip — blue gradient + caret */}
                <span className="
                    absolute right-full mr-4
                    flex items-center
                    opacity-0 group-hover:opacity-100
                    translate-x-2 group-hover:translate-x-0
                    transition-all duration-300 ease-out
                    pointer-events-none
                ">
                    <span className="
                        px-3 py-1.5 rounded-full
                        bg-linear-to-r from-[#0558a8] to-[#077ADE]
                        text-white text-xs font-semibold whitespace-nowrap tracking-wide
                        shadow-lg shadow-[#077ADE]/40
                    ">
                        Call Us
                    </span>
                    <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#077ADE]" />
                </span>
            </a>

            {/* ══════════════ Scroll to Top ══════════════ */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`
                    group relative
                    w-11 h-11 sm:w-12 sm:h-12
                    rounded-full
                    bg-gray-700 hover:bg-gray-900
                    text-white
                    flex items-center justify-center
                    shadow-lg hover:shadow-gray-600/40
                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:scale-110
                    ${showTop
                        ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                        : "opacity-0 translate-y-4 pointer-events-none scale-90"
                    }
                `}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>

                {/* Tooltip — purple gradient + caret */}
                <span className="
                    absolute right-full mr-4
                    flex items-center
                    opacity-0 group-hover:opacity-100
                    translate-x-2 group-hover:translate-x-0
                    transition-all duration-300 ease-out
                    pointer-events-none
                ">
                    <span className="
                        px-3 py-1.5 rounded-full
                        bg-linear-to-r from-[#4f3cc9] to-[#6d5ce7]
                        text-white text-xs font-semibold whitespace-nowrap tracking-wide
                        shadow-lg shadow-[#6d5ce7]/40
                    ">
                        Back to Top
                    </span>
                    <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-[#6d5ce7]" />
                </span>
            </button>
        </div>
    );
}
