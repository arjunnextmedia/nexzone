"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navbarItems";
import Container from "@/components/Common/Layout/Container";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="w-full ">
            <Container>
                <div className="flex justify-between items-center w-full h-[110px] gap-2 lg:gap-3 xl:gap-6">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <div className="relative w-32 h-12 md:w-40 md:h-16 xl:w-48 xl:h-20">
                                <Image
                                    src="/images/branding/logo.svg"
                                    alt="Nexzone Logo"
                                    fill
                                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex justify-center bg-white/50 rounded-3xl shrink">
                        <div className="flex space-x-1 lg:space-x-2 xl:space-x-4 px-1 lg:px-2 xl:px-4 py-1.5 lg:py-2.5 rounded-full items-center">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`px-2 lg:px-3 xl:px-4 py-1.5 md:py-2 rounded-md text-sm lg:text-base xl:text-lg font-light transition-colors whitespace-nowrap ${isActive ? "text-[#084274]" : "text-black hover:text-[#084274]"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex items-stretch shrink-0">
                        <div className="relative flex items-stretch rounded-full w-44 lg:w-56 xl:w-72 2xl:w-80 border border-[#077ADE] shadow-sm overflow-hidden bg-[#F8F9FA]">
                            <button className="bg-[#077ADE] self-stretch hover:bg-blue-600 text-white px-3 md:px-4 flex items-center justify-center transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                            <input
                                type="text"
                                placeholder="Search in this store"
                                className="w-full bg-transparent text-xs md:text-sm text-gray-700 py-2.5 md:py-3 px-2 focus:outline-none placeholder-gray-500 font-medium"
                            />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex flex-1 justify-end items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0073e6]"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? "text-[#084274] bg-blue-50/50" : "text-black hover:text-[#084274] hover:bg-gray-50"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="pt-4 pb-4 px-4 border-t border-gray-100 bg-gray-50">
                            <div className="relative flex items-center rounded-full w-full border border-gray-200 shadow-sm overflow-hidden bg-white">
                                <button className="bg-[#0073e6] hover:bg-blue-600 text-white px-5 py-3 flex items-center justify-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search in this store"
                                    className="w-full bg-transparent text-sm text-gray-700 py-3 px-4 focus:outline-none placeholder-gray-500 font-medium"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
}
