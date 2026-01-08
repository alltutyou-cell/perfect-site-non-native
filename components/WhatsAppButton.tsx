
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const waLink = "https://wa.me/15557729190?text=Hi!%20I'm%20on%20the%20website%20and%20have%20a%20question%20about%20the%20Vietnam%20Guide.";

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full sticker-shadow hover:scale-110 transition-all flex items-center justify-center group"
            title="Have a question? Chat with us"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 font-bold text-sm sticker-shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-black">
                Have a question? Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;
