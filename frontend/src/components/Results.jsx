import React from 'react';

const Results = ({ donors, currentPage, totalPages, onPageChange }) => {
    if (donors.length === 0) {
        return <div className="text-center p-4">No results found.</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Donor Records</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {donors.map(donor => (
                    <div key={donor.id} className="border rounded-lg p-4 shadow-md">
                        <h3 className="font-semibold">{donor.name}</h3>
                        <p>Blood Group: {donor.bloodGroup}</p>
                        <p>Age: {donor.age}</p>
                        <p>Location: {donor.location}</p>
                        <p>Contact: {donor.contact}</p>
                    </div>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4">
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1} 
                className="px-4 py-2 bg-red-500 text-white rounded-l disabled:opacity-50"
            >
                Previous
            </button>
            <span className="px-4 py-2">{currentPage} of {totalPages}</span>
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages} 
                className="px-4 py-2 bg-red-500 text-white rounded-r disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Results;