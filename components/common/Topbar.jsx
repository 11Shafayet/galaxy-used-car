'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaUser,
} from 'react-icons/fa';
import { CiClock2 } from 'react-icons/ci';
import Link from 'next/link';
import { useState } from 'react';

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
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userDash, setUserDash] = useState(false);

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
            {!userLoggedIn ? (
              <div className="flex items-center text-sm leading-none">
                <Link
                  href="/sign-in"
                  className="pr-3 border-r hover:text-primary"
                >
                  Login
                </Link>
                <Link href="sign-up" className="pl-3 hover:text-primary">
                  Register
                </Link>
              </div>
            ) : (
              <div className="relative">
                <div
                  className="w-11 h-11 text-xl flex justify-center items-center bg-gray-300 rounded-full cursor-pointer relative"
                  onClick={() => setUserDash((prev) => !prev)}
                >
                  <FaUser />
                  {userDash && (
                    <div className="absolute top-[111%] right-0 bg-gray-100 shadow-light min-w-60 flex flex-col justify-center items-center z-[10000]">
                      <h6 className="hover:bg-primary hover:text-white cursor-pointer font-bold text-lg w-full py-3 px-3">
                        Dashboard
                      </h6>
                      <h6 className="hover:bg-primary hover:text-white cursor-pointer font-bold text-lg w-full py-3 px-3">
                        Logout
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
