import Image from 'next/image';
import heroImage from '/public/assets/about-header.png';
import aboutLogo from '/public/assets/about-logo.png';
import about1 from '/public/assets/about1.png';
import about2 from '/public/assets/about2.png';
import about3 from '/public/assets/about3.png';
import PopularBrands from '@/components/home/PopularBrands';
import { FaCheck } from 'react-icons/fa';

const values = [
  'Integrity',
  'Accountability',
  'Gratitude',
  'Communication',
  'Enthusiasm',
  'Teamwork',
];

const AboutUs = () => {
  return (
    <section>
      <header className="relative flex justify-center items-center text-center text-white min-h-[300px] lg:min-h-[455px] z-10">
        <Image
          src={heroImage}
          alt="car"
          className="absolute w-full h-full inset-0 object-cover -z-10"
        />
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-30 -z-10" />

        <div className="container px-4 mx-auto">
          <h2 className="text-4xl md:text-7xl font-light uppercase">
            <span className="text-[#127F4A] font-bold">Home/</span> About Us
          </h2>
        </div>
      </header>

      <div className="pt-16 md:pt-20">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center items-center">
            <Image
              src={aboutLogo}
              alt="about logo"
              className="text-center max-w-[400px] h-auto object-cover"
            />
          </div>

          {/* details 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 my-12 md:my-20">
            <div className="flex flex-col justify-center gap-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Introduction</h3>
              <p className="opacity-75 leading-loose">
                Galaxy Used Car TR LLC is one of the premier car dealers in the
                UAE. Whether you are looking for a new or used vehicle, our
                website is the premier independent resource to help you select
                the car that best fits your needs and get it at the best
                possible price and quality. At Galaxy Used Car, we believe
                buying and selling a car should be easy and fun, not time
                consuming, complicated, or stressful. Combining our 10+ years of
                experience in helping people find the right car at the right
                price and quality using the latest tools and technology, we’ve
                made it clearer and easier for everyone to buy and sell
                vehicles.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <Image
                src={about1}
                alt="about"
                className="max-w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* details 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 my-12 md:my-20">
            <div className="flex justify-center lg:justify-start items-center">
              <Image
                src={about2}
                alt="about"
                className="max-w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Our Mission</h3>
              <p className="opacity-75 leading-loose">
                Our mission at Galaxy Used Cars is to serve as the UAE's leading
                hub for dealers in the used car sales market. We provide
                customers with a unique opportunity to acquire their dream
                vehicles at the most competitive prices through the ultimate
                online solution for buying and selling cars in the local market
                or cars coming from America or Canada or Europe. Driven by our
                passion for delivering superior service, we ensure that every
                customer experience the luxury they deserve. Our website is
                designed to grant you greater control throughout the buying and
                selling process, making vehicle acquisition more accessible than
                ever.
              </p>
            </div>
          </div>

          {/* details 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 my-12 md:my-20">
            <div className="flex flex-col justify-center gap-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Our Vision</h3>
              <p className="opacity-75 leading-loose">
                Our vision is to become the industry leader by providing
                top-notch service through a cutting-edge platform for buying and
                selling new and used cars. We aim to bring back the joy of
                buying and selling cars by providing a complete solution for car
                owners.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end items-center">
              <Image
                src={about3}
                alt="about"
                className="max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        {/* core values */}
        <div className="bg-primary bg-opacity-10 py-12 md:py-20">
          <div className="container px-4 mx-auto">
            <h5 className="text-3xl md:text-5xl font-bold text-center">
              Core Values
            </h5>
            <div className="flex flex-wrap justify-between items-center gap-y-3 max-w-[420px] mx-auto mt-8 md:pl-8">
              {values.map((item, i) => (
                <div className="flex items-center gap-x-2 w-1/2" key={i}>
                  <div className="flex justify-center items-center w-5 h-5 rounded-full bg-primary text-white text-sm">
                    <FaCheck />
                  </div>
                  <p className="font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* trusted companies */}
        <PopularBrands />
      </div>
    </section>
  );
};

export default AboutUs;
