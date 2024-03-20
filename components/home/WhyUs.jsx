import Image from 'next/image';
import tire1 from '/public/assets/tire1.png';
import tire2 from '/public/assets/tire2.png';
import purchase from '/public/assets/purchase.png';
import heart from '/public/assets/heart.png';
import smiley from '/public/assets/smiley.png';

const services = [
  {
    image: purchase,
    title: 'Purchase',
    desc: 'Our stress-free sale department that can find easy purchase solutions to save you money.',
  },
  {
    image: heart,
    title: 'Trusted By Thousands',
    desc: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
  },
  {
    image: smiley,
    title: 'Wide Range of Brands',
    desc: 'With a robust selection of popular vehicles on hand, as well as leading vehicles from USA & CANADA.',
  },
];

const WhyUs = () => {
  return (
    <section className="relative bg-primary py-16 md:py-28 z-10 overflow-hidden">
      <Image
        src={tire1}
        alt="tire"
        className="max-w-full h-auto absolute -top-[85px] left-0 text-[#22BC7C] -z-10 opacity-30"
      />
      <Image
        src={tire2}
        alt="tire"
        className="max-w-full h-auto absolute -bottom-[100px] right-0 text-[#22BC7C] -z-10 opacity-30"
      />

      <div className="container px-4 mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Why Galaxy Used Cars?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-12 lg:gap-x-32 mt-12 lg:mt-20">
          {services.map((item, i) => {
            const { image, title, desc } = item;
            return (
              <div
                className="flex flex-col gap-y-3 justify-center items-center text-center"
                key={i}
              >
                <Image
                  src={image}
                  alt="icon"
                  className="w-[60px] h-auto object-cover"
                />
                <h5 className="text-xl">{title}</h5>
                <p className="opacity-75 text-sm">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
