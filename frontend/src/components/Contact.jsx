import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to a backend
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">We would love to hear from you! Please reach out with any questions or feedback.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700"
                >
                    Submit
                </button>
            </form>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Contact Details</h3>
                <p>Email: info@blooddonation.org</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Blood Donation St, City, Country</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="#" className="text-red-600 hover:underline">Facebook</a>
                    <a href="#" className="text-red-600 hover:underline">Twitter</a>
                    <a href="#" className="text-red-600 hover:underline">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;