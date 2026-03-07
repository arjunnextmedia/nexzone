"use client"

import React, { useState } from 'react';
import { products } from '@/data/products';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group transition-all hover:shadow-md h-full">
            {/* Product Image Section */}
            <div className="relative w-full aspect-square bg-[#F5F5F7] p-2 sm:p-4 flex items-center justify-center overflow-hidden">
                <img
                    src={product.image || '/images/products/placeholder.png'}
                    alt={product.name}
                    className="max-h-[85%] max-w-[85%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Product Info Section */}
            <div className="p-2 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-[10px] sm:text-[11px] lg:text-[12px] xl:text-sm font-semibold text-[#113578] line-clamp-3 h-[3.8em] leading-[1.2] mb-1 sm:mb-2">
                        {product.name}
                    </h3>
                    <div className="flex flex-col min-[400px]:flex-row items-start min-[400px]:items-center justify-between gap-1 sm:gap-2">
                        <span className="text-[11px] sm:text-sm md:text-lg font-bold text-[#113578]">${product.price || '7.15'}</span>
                        <button className="bg-black text-white text-[8px] sm:text-[9px] md:text-[11px] px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-gray-800 transition-colors font-medium whitespace-nowrap">
                            Chat Now
                        </button>
                    </div>
                </div>

                <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-50">
                    <p className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                        Min. Order: 10 Items
                    </p>
                </div>
            </div>
        </div>
    );
};

const ProductSidebar = ({ onSelect, selectedItem }) => {
    const [openCategory, setOpenCategory] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const categories = [
        { name: 'All Products', items: [] },
        { name: 'For KonicaMinolta', items: ['A3 Color', 'A3 Mono', 'Office Desktop'] },
        { name: 'For Kyocera', items: ['TASKalfa Core', 'ECOSYS Systems'] },
        { name: 'For Ricoh', items: ['Aficio Series', 'Pro Series'] },
        { name: 'For Canon', items: ['imageRUNNER DX', 'i-SENSYS'] },
        { name: 'For Toshiba', items: ['e-STUDIO', 'Compact series'] },
        { name: 'For Sharp', items: ['Advanced Office', 'High Fidelity'] },
        { name: 'For Xerox', items: ['PrimeLink', 'Versant'] },
        { name: 'For HP', items: ['Color LaserJet Managed', 'Enterprise Mono'] },
        { name: 'For Brother', items: ['MFC Series', 'HL Laser'] },
        { name: 'For Riso Duplicator', items: ['Digital Duplicators'] },
        { name: 'Ink/Master', items: ['Black Ink', 'Color Ink', 'Master Paper'] },
        { name: 'For Panasonic', items: ['DP Series', 'UF Series'] },
        { name: 'Ungrouped', items: [] },
    ];

    const handleItemClick = (categoryName, itemName) => {
        onSelect(itemName || categoryName);
        setIsMobileMenuOpen(false);
        // If it's a main category with no items, just select it
        if (!itemName) {
            setOpenCategory(null);
        }
    };

    return (
        <div className="w-full lg:w-72 flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black">
            {/* Sidebar Header - Interactive on Mobile */}
            <div
                className="bg-[#113578] p-5 flex flex-col cursor-pointer lg:cursor-default"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-white font-bold text-base md:text-lg truncate">Product Categories</h2>
                    <div className="lg:hidden text-white transition-transform duration-300">
                        <svg
                            className={`w-5 h-5 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                {selectedItem && (
                    <div className="mt-2 text-[#048BFF] text-xs font-semibold bg-white/10 px-3 py-1 rounded-full w-fit max-w-full truncate">
                        Selected: {selectedItem}
                    </div>
                )}
            </div>

            {/* Categories List */}
            <div className={`flex-1 flex flex-col py-2 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'
                }`}>
                <div className="overflow-y-auto max-h-[calc(100vh-200px)] lg:max-h-none scrollbar-hide">
                    {categories.map((cat, i) => {
                        const isOpen = openCategory === i;
                        const isSelected = selectedItem === cat.name;

                        return (
                            <div key={i} className="flex flex-col border-b border-white/5 last:border-0">
                                <div
                                    onClick={() => {
                                        if (cat.items.length === 0) {
                                            handleItemClick(cat.name);
                                        } else {
                                            setOpenCategory(isOpen ? null : i);
                                        }
                                    }}
                                    className={`flex items-center justify-between px-5 py-4 cursor-pointer transition-colors group ${isOpen || isSelected ? 'bg-[#048BFF] text-white font-semibold' : 'text-gray-300 hover:bg-[#112233]'
                                        }`}
                                >
                                    <span className="text-sm font-medium">{cat.name}</span>
                                    {cat.items.length > 0 && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor"
                                            className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0 text-gray-400'}`}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    )}
                                </div>

                                {/* Dropdown Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#081523] ${isOpen && cat.items.length > 0 ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    {cat.items.map((sub, idx) => (
                                        <div
                                            key={idx}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleItemClick(cat.name, sub);
                                            }}
                                            className={`pl-12 pr-5 py-3 text-xs cursor-pointer transition-colors ${selectedItem === sub ? 'text-white bg-[#048BFF]' : 'text-gray-400 hover:text-white hover:bg-[#1A3A5A]'
                                                }`}
                                        >
                                            {sub}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const ProductListing = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    // Total dummy data expansion
    const allDummyProducts = Array.from({ length: 64 }, (_, i) => ({
        ...products[i % products.length],
        id: i + 1,
        price: (7.15 + (i % 5)).toFixed(2)
    }));

    const itemsPerPage = 16; // 4 rows * 4 columns on desktop
    const totalPages = Math.ceil(allDummyProducts.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = allDummyProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="py-10 md:py-20">
            <div className="mx-auto w-full max-w-full 2xl:max-w-[1980px] px-4 sm:px-6 lg:px-8 xl:px-[120px] 2xl:px-[160px]">
                <div className="flex flex-col lg:flex-row gap-8 items-start relative">

                    {/* Sidebar - Sticky on desktop only */}
                    <aside className="lg:sticky lg:top-28 shrink-0 w-full lg:w-auto z-30">
                        <ProductSidebar
                            selectedItem={selectedCategory}
                            onSelect={(val) => {
                                setSelectedCategory(val);
                                setCurrentPage(1);
                            }}
                        />
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                            {/* Header */}
                            <div className="bg-[#113578] px-4 sm:px-6 py-4 shrink-0">
                                <h2 className="text-white font-bold text-base sm:text-lg truncate">
                                    {selectedCategory || 'All Products'}
                                </h2>
                            </div>

                            {/* Grid Content */}
                            <div className="p-2 sm:p-6 flex-1">
                                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                                    {currentProducts.map((p) => (
                                        <ProductCard key={p.id} product={p} />
                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="mt-12 flex justify-center items-center gap-2">
                                    <button
                                        disabled={currentPage === 1}
                                        onClick={() => {
                                            setCurrentPage(p => Math.max(1, p - 1));
                                            window.scrollTo({ top: 400, behavior: 'smooth' });
                                        }}
                                        className="w-10 h-10 flex items-center justify-center bg-black text-[#077ADE] text-2xl rounded-lg cursor-pointer hover:bg-gray-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-md"
                                    >
                                        &lt;
                                    </button>
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => {
                                                setCurrentPage(i + 1);
                                                window.scrollTo({ top: 400, behavior: 'smooth' });
                                            }}
                                            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm transition-all shadow-sm ${currentPage === i + 1
                                                ? 'bg-[#077ADE] text-white font-bold scale-105'
                                                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                    <button
                                        disabled={currentPage === totalPages}
                                        onClick={() => {
                                            setCurrentPage(p => Math.min(totalPages, p + 1));
                                            window.scrollTo({ top: 400, behavior: 'smooth' });
                                        }}
                                        className="w-10 h-10 flex items-center justify-center bg-black text-[#077ADE] text-2xl rounded-lg cursor-pointer hover:bg-gray-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-md"
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductListing;
