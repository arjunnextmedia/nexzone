"use client";

import React, { useState, useEffect } from 'react';
import { productService } from '@/services';
import { ProductSidebar } from './productSidebar';
import { ProductCard } from './productCard';
import { AlertCircle, PackageSearch } from 'lucide-react';

const ProductListing = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All Products"); // display label
    const [selectedCategoryId, setSelectedCategoryId] = useState(undefined);  // MongoDB _id
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 16;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const params = {
                    page: currentPage,
                    limit: itemsPerPage,
                    ...(selectedCategoryId ? { category: selectedCategoryId } : {}),
                };
                const response = await productService.getAllProducts(params);
                // Backend: { success, total, page, totalPages, data: [...] }
                const fetchedProducts = response?.data?.data || [];
                const total = response?.data?.totalPages || 1;
                setProducts(fetchedProducts);
                setTotalPages(total);
                if (currentPage > 1) window.scrollTo({ top: 400, behavior: 'smooth' });
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [currentPage, selectedCategoryId]);

    const handleCategorySelect = (label, categoryId) => {
        setSelectedCategory(label);
        setSelectedCategoryId(categoryId);
        setCurrentPage(1);
    };

    return (
        <div className="py-10 md:py-20">
            <div className="mx-auto w-full max-w-full 2xl:max-w-[1980px] px-4 sm:px-6 lg:px-8 xl:px-[120px] 2xl:px-[160px]">
                <div className="flex flex-col lg:flex-row gap-8 items-start relative">
                    <aside className="lg:sticky lg:top-28 shrink-0 w-full lg:w-auto z-30">
                        <ProductSidebar selectedItem={selectedCategory} onSelect={handleCategorySelect} />
                    </aside>
                    <div className="flex-1 w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                            <div className="bg-[#113578] px-4 sm:px-6 py-4 shrink-0">
                                <h2 className="text-white font-bold text-base sm:text-lg truncate">{selectedCategory || 'All Products'}</h2>
                            </div>
                            <div className="p-2 sm:p-6 flex-1 min-h-[400px]">
                                {loading ? (
                                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                                        {[...Array(8)].map((_, i) => <div key={i} className="bg-gray-50 animate-pulse rounded-xl h-[300px] border border-gray-100" />)}
                                    </div>
                                ) : error ? (
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
                                        <p className="text-gray-500 mb-6">{error}</p>
                                        <button onClick={() => window.location.reload()} className="px-6 py-2 bg-[#113578] text-white rounded-lg font-semibold hover:bg-[#048BFF] transition-colors">Retry</button>
                                    </div>
                                ) : products.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <PackageSearch className="w-16 h-16 text-gray-300 mb-4" />
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Products Found</h3>
                                        <p className="text-gray-500">We couldn't find any products in this category.</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
                                        {products.map((p) => <ProductCard key={p._id} product={p} />)}
                                    </div>
                                )}
                                {!loading && !error && products.length > 0 && totalPages > 1 && (
                                    <div className="mt-12 flex justify-center items-center gap-2">
                                        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="w-10 h-10 flex items-center justify-center bg-black text-[#077ADE] text-2xl rounded-lg cursor-pointer hover:bg-gray-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-md">&lt;</button>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm transition-all shadow-sm ${currentPage === i + 1 ? 'bg-[#077ADE] text-white font-bold scale-105' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'}`}>{i + 1}</button>
                                        ))}
                                        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="w-10 h-10 flex items-center justify-center bg-black text-[#077ADE] text-2xl rounded-lg cursor-pointer hover:bg-gray-800 transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-md">&gt;</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;