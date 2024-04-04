'use client';

import { useState } from 'react';
import Link from 'next/link';
import wpIcon from '/public/assets/wp-icon.png';
import Image from 'next/image';

import car1 from '/public/assets/car1.png';
import car2 from '/public/assets/car2.png';
import car3 from '/public/assets/car3.png';
import dummyCar from '/public/assets/dummy.jpg';

import { IoMdSpeedometer } from 'react-icons/io';
import { PiEngineBold } from 'react-icons/pi';
import { BsFuelPump } from 'react-icons/bs';
import DetailsContainer from '@/components/car-details/DetailsContainer';

const carList = [
  {
    image: car1,
    price: '54465',
    title: '2024 Toyota R',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car2,
    title: '2022 Nissan ALTIMA',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    image: car3,
    title: 'Vans',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
  {
    title: '2024 Toyota R',
    mileage: '3464454',
    type: 'Electric',
    engine: 'Engine',
  },
];

const CarDetails = () => {
  const [relatedCarLoading, setRelatedCarLoading] = useState(false);

  return (
    <section>
      <header className="py-20 md:py-28 flex justify-center items-center text-center bg-primaryLight">
        <div className="container px-4 mx-auto">
          <h2 className=" uppercase font-medium text-4xl md:text-6xl text-white">
            <span className="font-bold">Home/</span> Buy Car
          </h2>
        </div>
      </header>

      <div>
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 py-12">
            <div className="lg:col-span-2">
              <DetailsContainer />
            </div>

            {/* sidebar */}
            <div>
              {/* contact */}
              <div className="flex flex-col shadow-light p-4 md:p-8 rounded-md border">
                <p className="text-2xl font-semibold">$123423</p>
                <p className="text-sm font-semibold">Stock Number: 23421324</p>
                <Link
                  href=""
                  className="flex gap-x-3 justify-center items-center py-2.5 px-8 w-full rounded-md border mt-3 hover:text-white hover:bg-primary duration-300"
                >
                  <Image
                    src={wpIcon}
                    alt="whatsapp icon"
                    className="w-6 h-6 object-cover"
                  />
                  Text Us on WhatsApp
                </Link>
              </div>

              <hr className="my-10" />

              {/* related cars */}
              <div className="flex flex-col gap-y-3">
                <h5 className="text-2xl text-secondary opacity-90 font-medium mb-4">
                  Related Cars
                </h5>

                {carList.map((car, i) => {
                  const { image, title, mileage, type, engine, price } = car;
                  return (
                    <div
                      className="relative pt-1 pb-3 px-4 lg:px-8 rounded-md border border-gray-300 bg-white shadow flex flex-col justify-center items-center"
                      key={i}
                    >
                      {price && (
                        <h4 className="absolute top-0 right-0 rounded-md bg-primary bg-opacity-15 text-primary font-bold text-sm py-2 px-5">
                          ${price}
                        </h4>
                      )}

                      <Image
                        src={image ? image : dummyCar}
                        alt="car image"
                        className="h-auto max-w-[130px] object-cover"
                      />
                      <h5 className="font-bold text-xl overflow-x-hidden line-clamp-2 text-ellipsis text-[#127F4A] text-center">
                        {title}
                      </h5>

                      <div className="flex flex-nowrap gap-4 justify-between mt-4">
                        {/* mileage */}
                        <div className="flex items-center gap-3 text-gray-600">
                          <IoMdSpeedometer className="text-xl" />
                          <p className="text-sm opacity-75">{mileage} mi</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
