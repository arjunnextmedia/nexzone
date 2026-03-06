import React from 'react';
import Container from '../Layout/Container';

const Footer = () => {
    return (
        <footer className="footer py-5 md:py-10 text-white">
            <Container>
                <div className=" space-y-4">

                    {/* Top Header Section */}
                    <div
                        className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl p-6 lg:px-12 lg:py-6 shadow-2xl"
                        style={{
                            backgroundImage: "linear-gradient(270deg, rgba(21,84,138,1.00) 0%, rgba(11,17,17,1.00) 100%)",
                            backgroundPosition: "center center"
                        }}
                    >
                        <div className="flex items-center">
                            <img src="/images/branding/logo-02.svg" alt="Nexzone Logo" className="h-16 md:h-20 lg:h-24 w-auto object-contain" />
                        </div>

                        <div className="flex items-stretch shrink-0 w-full md:w-auto">
                            <div className="relative flex items-stretch rounded-full w-full md:w-[400px] lg:w-[450px] xl:w-[500px] shadow-2xl overflow-hidden bg-white">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full bg-transparent text-base text-gray-700 py-4 px-8 focus:outline-none placeholder-gray-400 font-medium"
                                />
                                <button className="bg-[#077ADE] hover:bg-blue-600 text-white px-10 font-bold transition-all active:scale-95 flex items-center justify-center whitespace-nowrap">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

                        {/* Left Large Section - Links */}
                        <div
                            className="col-span-1 rounded-[40px] p-10 lg:col-span-2 shadow-xl"
                            style={{
                                backgroundImage: "linear-gradient(270deg, rgba(21,84,138,1.00) 0%, rgba(11,17,17,1.00) 100%)",
                                backgroundPosition: "center center"
                            }}
                        >
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                                <div className="space-y-6">
                                    <h4 className="text-base md:text-xl font-semibold tracking-tight">Get support</h4>
                                    <ul className="space-y-4 ">
                                        <li><a href="/" className="transition-colors hover:text-white">Home</a></li>
                                        <li><a href="/products" className="transition-colors hover:text-white">Products</a></li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-base md:text-xl font-semibold tracking-tight">Trade Assurance</h4>
                                    <ul className="space-y-4 ">
                                        <li><a href="/blog" className="transition-colors hover:text-white">Blog</a></li>
                                        <li><a href="/privacy" className="transition-colors hover:text-white">Privacy</a></li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-base md:text-xl font-semibold tracking-tight">Get to know us</h4>
                                    <ul className="space-y-4 ">
                                        <li><a href="/company-profile" className="transition-colors hover:text-white">Company profile</a></li>
                                        <li><a href="/terms" className="transition-colors hover:text-white">Terms</a></li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-base md:text-xl font-semibold tracking-tight">Contact us</h4>
                                    <ul className="space-y-4 ">
                                        <li><a href="/contacts" className="transition-colors hover:text-white">Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-10 pt-8 border-t border-white/10 text-center w-full">
                                <p className="text-sm font-medium">
                                    © 2026 <span className="text-[#048BFF]">Nexzone.</span> Published by <a href="https://nextmedia.ae/" target="_blank" rel="noopener noreferrer" className="text-[#048BFF] cursor-pointer hover:underline">Next Media </a>Group.
                                </p>
                            </div>
                        </div>

                        {/* Right Section Cards */}
                        <div className="flex flex-col gap-4">

                            {/* Follow Section */}
                            <div className="flex-1 rounded-[40px] bg-linear-to-br from-[#0c243f] to-[#004c99] p-10 shadow-xl">
                                <h4 className="mb-4 text-2xl md:text-3xl font-semibold tracking-tight">Follow in</h4>
                                <p className="mb-8 text-sm md:text-base leading-relaxed ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#007aff] text-white transition-all hover:scale-110 hover:shadow-lg">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066cc] text-white transition-all hover:scale-110 hover:shadow-lg">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h21.35c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.594-1.325-1.325-1.325zm-14.451 18.522h-3.38v-10.308h3.38v10.308zm-1.687-11.722c-1.082 0-1.958-.876-1.958-1.958s.876-1.958 1.958-1.958 1.958.876 1.958 1.958-.876 1.958-1.958 1.958zm14.451 11.722h-3.38v-5.614c0-1.402-.025-3.207-1.954-3.207-1.955 0-2.254 1.526-2.254 3.104v5.717h-3.38v-11h3.243v1.411h.046c.451-.853 1.551-1.754 3.193-1.754 3.414 0 4.045 2.247 4.045 5.17v5.481z" /></svg>
                                    </a>
                                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white transition-all hover:scale-110 hover:shadow-lg">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white transition-all hover:scale-110 hover:shadow-lg">
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.482 8.415-.003 6.557-5.338 11.892-11.893 11.892-2.014-.001-3.991-.51-5.751-1.474l-6.244 1.679zm6.75-4.057c1.477.876 3.123 1.341 4.806 1.342 5.303 0 9.618-4.314 9.62-9.616.001-2.569-1.121-5.116-2.56-6.561-1.436-1.428-3.344-2.214-5.37-2.214-5.307 0-9.621 4.312-9.623 9.615-.001 1.794.469 3.541 1.357 5.07l-.379 1.387.149.087z" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Bottom Card */}
                            {/* <div className="flex h-24 items-center rounded-[40px] bg-linear-to-br from-[#0c243f] to-[#004c99] px-10 shadow-xl">
                               
                            </div> */}
                        </div>

                    </div>

                </div>
            </Container>
        </footer >
    );
};

export default Footer;
