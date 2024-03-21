'use client';
import { useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from 'react-icons/fa';

const Pagination = ({ meta, handlePagination }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="flex items-center gap-x-1 mt-6">
        <div className="flex justify-center items-center w-11 h-11  bg-black bg-opacity-5 text-black hover:bg-primary hover:text-white hover:bg-opacity-100 rounded-md duration-500 cursor-pointer">
          <FaLongArrowAltLeft />
        </div>

        <div
          className={`flex justify-center items-center w-11 h-11 bg-primary text-white hover:bg-primary hover:text-white hover:bg-opacity-100 rounded-md duration-500 cursor-pointer font-bold`}
        >
          1
        </div>
        <div
          className={`flex justify-center items-center w-11 h-11 bg-black bg-opacity-5 text-black hover:bg-primary hover:text-white hover:bg-opacity-100 rounded-md duration-500 cursor-pointer font-bold`}
        >
          2
        </div>

        <div className="flex justify-center items-center w-11 h-11  bg-black bg-opacity-5 text-black hover:bg-primary hover:text-white hover:bg-opacity-100 rounded-md duration-500 cursor-pointer">
          <FaLongArrowAltRight />
        </div>
      </div>
    </>
  );
};

export default Pagination;
