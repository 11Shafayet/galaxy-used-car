import Image from 'next/image';
import HeroImage from '/public/assets/hero.png';
import HeroUnderline from '/public/assets/hero-underline.png';
import Link from 'next/link';

const HeroHeader = () => {
  return (
    <section className="relative py-20 lg:min-h-[70vh] text-secondary flex justify-center items-center">
      <Image
        src={HeroImage}
        alt="Car"
        className="hidden lg:block max-w-full h-auto absolute top-1/2 -translate-y-1/2 right-0"
      />
      <div className="container px-4 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12">
          <div>
            <h1 className="text-5xl md:text-[80px] font-bold leading-[1.1] text-center lg:text-start">
              Buy Your Dream Car With{' '}
              <span className="text-primary relative">
                Galaxy
                <Image
                  src={HeroUnderline}
                  alt="underline"
                  className="w-full h-auto absolute top-[90%] left-0 right-0 object-cover"
                />
              </span>
            </h1>
            <p className="text-3xl mt-12 mb-12 text-center lg:text-start">
              We offer the best used cars for sale!
            </p>

            <div className="text-center lg:text-start">
              <Link
                href=""
                className="py-5 px-16 bg-primary text-lg font-medium text-white rounded-lg"
              >
                View All Cars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
