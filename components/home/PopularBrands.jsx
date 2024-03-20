'use client';

import { useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import bmw from '/public/assets/bmw.png';
import honda from '/public/assets/honda.png';
import daihatsu from '/public/assets/daihatsu.png';
import mazda from '/public/assets/mazda.png';
import nissan from '/public/assets/nissan.png';
import subaru from '/public/assets/subaru.png';
import suzuki from '/public/assets/suzuki.png';
import toyota from '/public/assets/toyota.png';
import BrandSkeleton from '../skeletons/BrandSkeleton';

const brandsList = [
  bmw,
  honda,
  daihatsu,
  mazda,
  nissan,
  subaru,
  suzuki,
  toyota,
];

const PopularBrands = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Most Popular Brand
        </h1>
      </div>
      {loading ? (
        <BrandSkeleton />
      ) : (
        <Marquee className="mt-20">
          {brandsList.map((brand, i) => (
            <Image
              src={brand}
              alt="brand"
              className="max-w-full h-auto mx-12"
              key={i}
            />
          ))}
        </Marquee>
      )}
    </section>
  );
};

export default PopularBrands;
