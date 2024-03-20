import Image from 'next/image';
import Link from 'next/link';
import google from '/public/assets/googleplay.png';
import apple from '/public/assets/appstore.png';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const links = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/',
    label: 'Buy Used Car',
  },
  {
    link: '/',
    label: 'About Us',
  },
  {
    link: '/',
    label: 'Contact Us',
  },
];

const Footer = () => {
  return (
    <footer className="pt-16 md:pt-28 lg:pt-32 pb-8 text-white bg-[#3AB579]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between gap-4 gap-y-8 md:gap-12 lg:gap-20">
          {/* links */}
          <div className="flex flex-col gap-3">
            <h5 className="text-lg uppercase font-medium mb-2">Quick Links</h5>
            {links.map((item, i) => (
              <Link
                className="text-sm hover:text-primary duration-300"
                href={item.link}
                key={i}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* contact details */}
          <div className="flex flex-col gap-3">
            <h5 className="text-lg uppercase font-medium mb-2">Need Help</h5>
            <div className="flex gap-x-2 items-center text-sm">
              <FaPhoneAlt />
              <p>91445643442</p>
            </div>
            <div className="flex gap-x-2 items-center text-sm">
              <FaEnvelope />
              <p>info@galaxyusedcar.com</p>
            </div>

            <h5 className="text-lg uppercase font-medium -mb-2 mt-3">Office</h5>
            <p className="text-sm">
              Street no 23 - Industrial Area 4 - Sharjah
            </p>
          </div>

          {/* opening hours */}
          <div className="flex flex-col gap-3">
            <h5 className="text-lg uppercase font-medium mb-2">
              Opening Hours
            </h5>
            <p className="text-sm leading-tight">
              Monday - Friday: 8:30 AM - 1:30 PM | 4:00 -9:00 PM
            </p>
            <p className="text-sm leading-tight">Saturday: 8:00 AM - 4:00 PM</p>
            <p className="text-sm leading-tight">Sunday: Closed</p>
          </div>

          {/* download buttons */}
          <div className="flex flex-col gap-3">
            <h5 className="text-lg uppercase font-medium mb-2">
              Download Our Apps
            </h5>

            <Link href="">
              <Image
                src={apple}
                className="max-w-[155px] h-auto object-cover"
              />
            </Link>
            <Link href="">
              <Image
                src={google}
                className="max-w-[155px] h-auto object-cover"
              />
            </Link>
          </div>
        </div>

        {/* copyright */}
        <p className="uppercase text-sm mt-16 text-center opacity-80">
          Galaxy Used Car © 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
