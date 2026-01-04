
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Daria, Russia",
      time: "hired in 2 weeks",
      quote: "I thought my accent would disqualify me. I got 3 interviews in 8 days. I followed the intro video script exactly, and schools started replying within hours.",
      highlight: "$1,700/month in Hanoi",
      image: "/photo/teachers/daria_review.jpg"
    },
    {
      name: "Selim K., Tunisia",
      time: "hired in 3 weeks",
      quote: "I sent money home to my family after just 1 month. The best job at home paid $400/month. Now I make $2,100/month teaching in HCMC.",
      highlight: "Sent $500 home",
      image: "/photo/teachers/selim_review.jpg"
    },
    {
      name: "Aziza, Turkmenistan",
      time: "hired in 18 days",
      quote: "I was an accountant with no teaching background. I used the exact CV template and interview cheat sheet. I got hired at my first interview.",
      highlight: "Teaching in Ho Chi Minh City",
      image: "/photo/teachers/aziza_review.jpg"
    },
    {
      name: "Carlos M., Colombia",
      time: "hired in 4 weeks",
      quote: "This guide saved me from a scam contract. The red-flag checklist helped me spot problems. I found a better school 2 weeks later.",
      highlight: "Legal visa sponsorship",
      image: "/photo/teachers/carlos_review.jpg"
    }
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl md:text-6xl font-dela mb-16 tracking-tighter">
        WHAT NON-NATIVE<br />
        <span className="accent-text">TEACHERS ARE SAYING</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((rev, i) => (
          <div key={i} className={`polaroid group hover:-translate-y-2 transition-all cursor-default w-full ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
            <div className="bg-slate-200 aspect-square mb-4 flex items-center justify-center overflow-hidden">
              <img src={rev.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${rev.name}`} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-bold italic mb-3 leading-snug">"{rev.quote}"</p>
            <div className="border-t-2 border-black/5 pt-3">
              <p className="font-dela text-xs">{rev.name}</p>
              <p className="text-[10px] font-bold uppercase accent-text">{rev.time}</p>
              <div className="mt-2 bg-[#F8F0DD] text-[10px] font-bold p-1 border border-black inline-block uppercase">
                {rev.highlight}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
