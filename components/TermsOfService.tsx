
import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-black p-8 md:p-24 font-bold leading-relaxed">
            <a href="/" className="inline-block mb-12 font-dela text-sm hover:accent-text">← BACK TO HOME</a>
            <h1 className="text-5xl font-dela mb-12 tracking-tighter uppercase">Terms of Service</h1>
            <div className="max-w-3xl space-y-8">
                <section>
                    <h2 className="text-2xl font-dela mb-4">1. Acceptance of Terms</h2>
                    <p>By purchasing the "Not Native. Not Sorry." guide, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-dela mb-4">2. Intellectual Property</h2>
                    <p>The content of the guide, including text, graphics, and templates, is the intellectual property of UP2U LTD. You are granted a personal, non-exclusive license to use the materials for your own career development. Sharing, reselling, or reproducing the content for commercial purposes is strictly prohibited.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-dela mb-4">3. Disclaimer</h2>
                    <p>While we provide proven strategies based on 700+ successful placements, we cannot guarantee employment. Your success depends on your local market conditions, your qualifications, your interview performance, and your effort.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-dela mb-4">4. Limitation of Liability</h2>
                    <p>UP2U LTD shall not be liable for any damages arising out of the use or inability to use the materials in this guide.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
