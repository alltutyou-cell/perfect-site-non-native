
import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-24 font-bold leading-relaxed">
            <a href="/" className="inline-block mb-12 font-dela text-sm hover:accent-text">← BACK TO HOME</a>
            <h1 className="text-5xl font-dela mb-12 tracking-tighter uppercase">Privacy Policy</h1>
            <div className="max-w-3xl space-y-8">
                <section>
                    <h2 className="text-2xl font-dela mb-4">1. Data Collection</h2>
                    <p>We collect information you provide directly to us when you purchase our guide, including your name, email address, and payment information. This data is used solely to deliver the product and provide customer support.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-dela mb-4">2. Use of Information</h2>
                    <p>Your email may be used to send you the PDF guide, updates related to the guide, and occasional marketing for related services. You can unsubscribe at any time.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-dela mb-4">3. Data Protection</h2>
                    <p>We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-dela mb-4">4. Cookies</h2>
                    <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
