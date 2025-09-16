import React from 'react';

const Header = ({ selectedBloodGroup, setSelectedBloodGroup, fetchDonors }) => {


    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    const handleChange = (e) => {
        setSelectedBloodGroup(e.target.value);
        fetchDonors(e.target.value);
    };

    return (
        <header className="bg-red-600 text-white p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Blood Donation</h1>
                <select
                    value={selectedBloodGroup}
                    onChange={handleChange}
                    className="bg-white text-black rounded p-2"
                >
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map((group) => (
                        <option key={group} value={group}>
                            {group}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
};

export default Header;