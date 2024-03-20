import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from 'react-icons/fa';
import { CiClock2 } from 'react-icons/ci';
import Link from 'next/link';

const socialItems = [
  {
    link: '',
    icon: <FaFacebookF />,
  },
  {
    link: '',
    icon: <FaInstagram />,
  },
  {
    link: '',
    icon: <FaLinkedinIn />,
  },
];

const Topbar = () => {
  return (
    <div className="py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-x-3">
            <div className="flex gap-x-2 items-center text-sm text-primary">
              <FaPhoneAlt />
              <p>91445643442</p>
            </div>
            <div className="hidden md:flex gap-x-2 items-center text-sm">
              <CiClock2 />
              <p className="opacity-75">
                Mon - Fri 8:30-13:30 | 16:00 - 21:00, Sat 8:00 - 16:00
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-5">
            <div className="hidden md:flex gap-x-3 items-center">
              {socialItems.map((item, i) => (
                <Link href={item.link} key={i} className="opacity-75">
                  {item.icon}
                </Link>
              ))}
            </div>

            <div className="flex items-center text-sm leading-none">
              <Link href="" className="pr-3 border-r hover:text-primary">
                Login
              </Link>
              <Link href="" className="pl-3 hover:text-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
