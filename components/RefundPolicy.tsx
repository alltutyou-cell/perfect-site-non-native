
import React from 'react';

const RefundPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-24 font-bold leading-relaxed">
            <a href="/" className="inline-block mb-12 font-dela text-sm hover:accent-text">← BACK TO HOME</a>
            <h1 className="text-5xl font-dela mb-12 tracking-tighter uppercase">Refund Policy</h1>
            <div className="max-w-3xl space-y-8">
                <section>
                    <h2 className="text-2xl font-dela mb-4">7-Day Money-Back Guarantee</h2>
                    <p>We are confident in the value of the "Not Native. Not Sorry." guide. If you are not satisfied with your purchase for any reason, you are eligible for a full refund within 7 days of purchase.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-dela mb-4">How to Request a Refund</h2>
                    <p>To request a refund, please email our support team at support@up2agency.info with your order details. Refunds will be processed within 5-10 business days.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-dela mb-4">Exceptions</h2>
                    <p>Refunds requested after the 7-day period will not be issued. As this is a digital product, access to the guide and any bonuses will be revoked upon refund.</p>
                </section>
            </div>
        </div>
    );
};

export default RefundPolicy;
