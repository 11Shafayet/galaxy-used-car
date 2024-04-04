'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Select from 'react-select';
import Image from 'next/image';
import Link from 'next/link';
import car1 from '/public/assets/car1.png';
import car2 from '/public/assets/car2.png';
import car3 from '/public/assets/car3.png';
import dummyCar from '/public/assets/dummy.jpg';
import CarCardSkeleton from '../skeletons/CarCardSkeletor';

import { IoMdSpeedometer } from 'react-icons/io';
import { PiEngineBold } from 'react-icons/pi';
import { BsFuelPump } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Pagination from './Pagination';

const sortingList = [
  {
    value: 'nto',
    label: 'Newest to Oldest',
  },
  {
    value: 'otn',
    label: 'Oldest to Newest',
  },
  {
    value: 'lth',
    label: 'Price Low to High',
  },
  {
    value: 'htl',
    label: 'Price High to Low',
  },
];

const carList = [
  {
    image: car1,
    price: '54465',
    title: '2024 Toyota R',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car2,
    title: '2022 Nissan ALTIMA',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car3,
    title: 'Vans',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car2,
    title: 'Electric Vehicles',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car3,
    title: '2024 Toyota R',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    title: '2024 Toyota R',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    title: '2024 Toyota R',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car2,
    title: 'Electric Vehicles',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car3,
    title: '2024 Toyota R',
    mileage: '3445',
    type: 'Electric',
    engine: 'Engine',
  },
];

const CarList = () => {
  const [sorting, setSorting] = useState(null);
  const [loading, setLoading] = useState(false);

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? '#0C6135'
          : isFocused
          ? '#E0EBE4'
          : undefined,
        color: isSelected ? '#fff' : '#000',

        ':active': {
          ...styles[':active'],
          backgroundColor: isSelected ? '#0C6135' : 'white',
        },
      };
    },
  };

  return (
    <section className="py-16 md:py-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <Sidebar />
          {/* car listing */}
          <div className="w-full lg:w-[75%]">
            {/* sorting */}
            <div className="flex justify-end">
              <Select
                className="leading-6 min-w-[160px] text-sm"
                defaultValue={sorting}
                options={sortingList}
                placeholder="Sort: Default"
                name="sorting"
                styles={colourStyles}
                onChange={(e) => setSorting(e.label)}
              />
            </div>

            {/* car list */}
            {loading ? (
              <CarCardSkeleton />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {carList.map((car, i) => {
                    const { image, title, mileage, type, engine, price } = car;
                    return (
                      <div
                        className="relative pt-4 pb-8 px-8 rounded-md border border-gray-300 bg-white shadow flex flex-col justify-center items-center"
                        key={i}
                      >
                        {price && (
                          <h4 className="absolute top-0 right-0 rounded-md bg-primary bg-opacity-15 text-primary font-bold text-lg py-2 px-5">
                            ${price}
                          </h4>
                        )}

                        <Image
                          src={image ? image : dummyCar}
                          alt="car image"
                          className="h-auto max-w-[180px] object-cover"
                        />
                        <h5 className="font-bold text-2xl overflow-x-hidden line-clamp-2 text-ellipsis text-[#127F4A] text-center">
                          {title}
                        </h5>

                        <div className="flex flex-wrap gap-4 items-center justify-between mt-4">
                          {/* mileage */}
                          <div className="flex items-center gap-3 text-gray-600">
                            <IoMdSpeedometer className="text-xl" />
                            <p className="text-sm opacity-75">{mileage}mi</p>
                          </div>

                          {/* type */}
                          <div className="flex items-center gap-3 text-gray-600">
                            <PiEngineBold className="text-xl" />
                            <p className="text-sm opacity-75">{type}</p>
                          </div>

                          {/* engine */}
                          <div className="flex items-center gap-3 text-gray-600">
                            <BsFuelPump className="text-xl" />
                            <p className="text-sm opacity-75">{engine}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* pagination */}
                <div className="flex justify-end items-center mt-4">
                  <Pagination />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarList;
