import React from 'react';
import InnerHero from '@/components/Common/Hero/InnerHero';
import ProductListing from '@/components/Products/ProductListing';

const ProductsPage = () => {
    return (
        <main className="min-h-screen">
            {/* Inner Hero Section */}
            <InnerHero
                title="Our Products"
                breadcrumb={[
                    { label: 'Products', href: '/products' }
                ]}
            />

            {/* Product Listing Section */}
            <ProductListing />
        </main>
    );
};

export default ProductsPage;
