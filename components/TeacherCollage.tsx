import React from 'react';

const TeacherCollage: React.FC = () => {
    const photos = [
        {
            src: '/photo/teachers/teacher_0.jpg',
            alt: 'Teacher with local friends',
            caption: 'Community & Connection'
        },
        {
            src: '/photo/teachers/camila_roof.jpg',
            alt: 'Portrait of a teacher',
            caption: 'Meet Camila'
        },
        {
            src: '/photo/teachers/teacher_1.jpg',
            alt: 'Scenic Vietnam',
            caption: 'The Backdrop'
        },
        {
            src: '/photo/teachers/classroom_group_fun.jpg',
            alt: 'Classroom moment',
            caption: 'In the Classroom'
        },
        {
            src: '/photo/teachers/social_life_coconuts.jpg',
            alt: 'Night out with teachers',
            caption: 'Social Life'
        }
    ];

    return (
        <section className="py-24 bg-[#FF4A22] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block bg-black text-white font-dela text-xs px-3 py-1 mb-6 uppercase">The Teachers</div>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-dela text-white mb-4 tracking-tighter uppercase leading-none">
                        OUR GROWING<br />
                        <span className="italic underline decoration-black decoration-8 underline-offset-8">FAMILY.</span>
                    </h2>
                    <p className="max-w-xl mx-auto font-bold text-white/90 text-xl mt-8">
                        These aren't stock photos. These are real people who used this guide to start their lives in Vietnam.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 items-center max-w-6xl mx-auto">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`relative group card-shadow border-4 border-black bg-white p-3 transform transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-50 w-full max-w-[320px] ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                                } ${index % 3 === 0 ? 'md:rotate-3' : ''}`}
                        >
                            <div className="aspect-[4/5] overflow-hidden border-2 border-black mb-2 bg-gray-100">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-full object-cover grayscale-0"
                                />
                            </div>
                            <p className="font-dela text-center text-xs uppercase">{photo.caption}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-white font-dela text-2xl mb-8 italic">YOU'RE NOT JUST HIRING A GUIDE, YOU'RE JOINING A COMMUNITY.</p>
                </div>
            </div>
        </section>
    );
};

export default TeacherCollage;
