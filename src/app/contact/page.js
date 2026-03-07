import InnerHero from "@/components/Common/Hero/InnerHero";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata = {
    title: "Contact Us | Nexzone",
    description: "Connect with Nexzone Technologies for expert printer services, rental solutions, and office equipment in Sharjah, UAE.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen ">
            <InnerHero
                title="Contact Us"
                breadcrumb={[
                    { label: "Contact", href: "/contact" }
                ]}
            />

            <ContactSection />
        </main>
    );
}
