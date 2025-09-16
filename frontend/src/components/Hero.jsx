import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-red-600 text-white py-20">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Save Lives – Donate Blood Today!</h1>
                <p className="text-lg md:text-xl mb-8">Join us in making a difference in the lives of those in need.</p>
                <a href="#contact" className="bg-white text-red-600 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                    Sign Up to Donate
                </a>
            </div>
        </div>
    );
};

export default Hero;