"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 500);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <div className="relative flex flex-col items-center">
                {/* Minimalist Logo Reveal */}
                <div className="relative w-40 h-20 md:w-56 md:h-28 animate-simple-fade">
                    <Image
                        src="/images/branding/NEXZONE LOGO.svg"
                        alt="Nexzone Logo"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>

                {/* Thin, Elegant Progress Line */}
                <div className="mt-6 w-32 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#077ADE] rounded-full animate-thin-progress"></div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes simple-fade {
                    0% { opacity: 0; transform: translateY(5px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes thin-progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-simple-fade {
                    animation: simple-fade 0.8s ease-out forwards;
                }
                .animate-thin-progress {
                    animation: thin-progress 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
                }
            `}</style>
        </div>
    );
}
