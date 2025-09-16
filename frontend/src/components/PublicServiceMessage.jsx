import React from 'react';

const PublicServiceMessage = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Why Donate Blood?</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li className="text-lg">One donation can save up to three lives.</li>
                    <li className="text-lg">Blood donations are always needed, especially during emergencies.</li>
                    <li className="text-lg">Donating blood is a simple and safe process.</li>
                    <li className="text-lg">You can help patients undergoing surgeries and treatments.</li>
                    <li className="text-lg">Your donation can make a significant difference in your community.</li>
                </ul>
            </div>
        </section>
    );
};

export default PublicServiceMessage;