"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);
  
  return (
    <footer className=" bg-white text-gray-700  w-full ">
    <div className='bg-beige-600 w-8/12 max-lg:w-full mx-auto p-4 '> 
{/* 
        <div className="container bg-beige-600 mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Visionary Interiors</h2>
            <p className="mt-2">Creating spaces that inspire and delight.</p>
            </div>
           
        </div> */}
        <div className="container mx-auto text-center">
            <p>© {year} Visionary Interiors. All rights reserved.</p>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
