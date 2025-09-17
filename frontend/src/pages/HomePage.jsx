

import React from 'react'
import { useState } from 'react'
import Header from '../components/header'
import Hero from '../components/Hero'
import About from '../components/About'
import Results from '../components/Results'

const donorsData = [
  { id: 1, name: 'Ali', bloodGroup: 'A+', age: 25, location: 'Miani', contact: '123456' },
  { id: 2, name: 'Sara', bloodGroup: 'B+', age: 30, location: 'Miani', contact: '654321' },
  // ...add more donors
];

const HomePage = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter donors by selected blood group
  const filteredDonors = selectedBloodGroup
    ? donorsData.filter(donor => donor.bloodGroup === selectedBloodGroup)
    : donorsData;

  // Pagination logic
  const donorsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredDonors.length / donorsPerPage));
  const paginatedDonors = filteredDonors.slice(
    (currentPage - 1) * donorsPerPage,
    currentPage * donorsPerPage
  );

  // Reset to first page when blood group changes
  const handleBloodGroupChange = (group) => {
    setSelectedBloodGroup(group);
    setCurrentPage(1);
  };


  return (
    <div>
       <Header
         selectedBloodGroup={selectedBloodGroup}
        setSelectedBloodGroup={handleBloodGroupChange}/>
       <Hero/>
       <Results  donors={paginatedDonors}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}/>
       <About/>

       
    </div>
  )
}

export default HomePage
