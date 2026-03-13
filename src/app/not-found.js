"use client";

import Link from "next/link";

import Container from "@/components/Common/Layout/Container";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center  py-20 overflow-hidden">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto relative">

                    <div className="relative flex items-center justify-center mb-12 select-none">

                        <div className="absolute w-[150%] h-[150%] bg-blue-50/50 rounded-full blur-[100px] -z-10 opacity-70"></div>

                        <span className="text-[12rem] md:text-[18rem] font-black leading-none bg-linear-to-b from-[#084274] to-[#077ADE] bg-clip-text text-transparent opacity-10 drop-shadow-2xl absolute">
                            404
                        </span>

                        <div className="relative flex items-center gap-4 md:gap-8 translate-y-4 md:translate-y-8">
                            <span className="text-8xl md:text-[12rem] font-extrabold text-[#084274] tracking-tighter">4</span>


                            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-[8px] md:border-[16px] border-[#077ADE] relative animate-pulse shadow-xl shadow-blue-100 flex items-center justify-center">
                                <div className="w-4 h-4 md:w-8 md:h-8 bg-[#084274] rounded-full"></div>
                            </div>

                            <span className="text-8xl md:text-[12rem] font-extrabold text-[#084274] tracking-tighter">4</span>
                        </div>
                    </div>

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black text-[#084274] mb-6 tracking-tight">
                            Oops! Page Not Found
                        </h2>

                        <p className="text-gray-500 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto">
                            The page you're looking for might have been moved, deleted, or never existed in the first place.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center pt-4">
                            <Link
                                href="/"
                                className="group relative px-10 py-4 bg-[#077ADE] text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/10"
                            >
                                Back to Home
                            </Link>

                            <Link
                                href="/products"
                                className="px-10 py-4 border-2 border-[#077ADE] text-[#077ADE] rounded-full font-bold hover:bg-blue-50 transition-all hover:scale-105 active:scale-95"
                            >
                                Browse Products
                            </Link>
                        </div>
                    </div>

                    <div className="mt-0 pt-10 border-t border-gray-100 w-full max-w-xs">
                        <p className="text-gray-400 text-sm">
                            Need immediate help? <Link href="/contact" className="text-[#077ADE] font-bold hover:underline">Contact Us</Link>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
