import React from 'react';
import FeaturedCar from '@/components/home/FeaturedCar';
import HeroHeader from '@/components/home/HeroHeader';
import PopularBrands from '@/components/home/PopularBrands';
import RecentlyAddedCar from '@/components/home/RecentlyAddedCar';
import SearchBox from '@/components/home/SearchBox';
import VideoDetails from '@/components/home/VideoDetails';
import WhyUs from '@/components/home/WhyUs';

export default function Home() {
  return (
    <React.Fragment className="relative">
      <HeroHeader />
      <SearchBox />
      <PopularBrands />
      <FeaturedCar />
      <WhyUs />
      <RecentlyAddedCar />
      <VideoDetails />
    </React.Fragment>
  );
}
