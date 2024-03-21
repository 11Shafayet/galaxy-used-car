import Image from 'next/image';
import heroImage from '/public/assets/used-car-hero.png';
import CarList from '@/components/buy-used-car/CarList';

const BuyUsedCar = () => {
  return (
    <section className="">
      <header className="relative flex justify-center items-center text-center text-white min-h-[300px] lg:min-h-[455px] z-10">
        <Image
          src={heroImage}
          alt="car"
          className="absolute w-full h-full inset-0 object-cover -z-10"
        />
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30 -z-10" />

        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-7xl font-medium uppercase">
            <span className="text-[#127F4A] font-bold">Home/</span> Buy Car
          </h2>
          <h5 className="text-4xl md:text-[66px] font-medium uppercase mt-6">
            Cars For Sale
          </h5>
        </div>
      </header>

      <CarList />
    </section>
  );
};

export default BuyUsedCar;
