"use client";

import { useEffect } from "react";
import Link from "next/link";
import Container from "@/components/Common/Layout/Container";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    {/* Animated Warning Icon */}
                    <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-8 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>

                    <h2 className="text-4xl font-extrabold text-[#084274] mb-4">
                        Something went wrong
                    </h2>

                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                        We encountered an unexpected error. Don't worry, our team has been notified.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <button
                            onClick={() => reset()}
                            className="px-10 py-4 bg-[#077ADE] text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 hover:scale-105 transition-all active:scale-95"
                        >
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="px-10 py-4 bg-gray-50 text-gray-700 rounded-full font-bold hover:bg-gray-100 transition-all border border-gray-200"
                        >
                            Go to Home
                        </Link>
                    </div>

                    <div className="mt-12 text-sm text-gray-400 font-mono bg-gray-50 px-4 py-2 rounded-lg max-w-full overflow-hidden text-ellipsis">
                        Error ID: {Math.random().toString(36).substring(7).toUpperCase()}
                    </div>
                </div>
            </Container>
        </div>
    );
}
