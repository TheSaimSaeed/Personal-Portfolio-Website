import React from 'react';

const About = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-lg mb-6">
                    We are a dedicated non-profit organization focused on promoting blood donation. Our goal is to save lives by facilitating connections between generous donors and patients in need. Together, we can make a positive impact in our community!
                </p>
                <img 
                    src="path_to_your_image.jpg" 
                    alt="Blood donation event" 
                    className="mx-auto rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default About;