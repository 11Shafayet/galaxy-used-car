'use client';

import Image from 'next/image';
import Topbar from './Topbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '/public/assets/logo1.png';

const navLinks = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/buy-used-car',
    label: 'Buy Used Car',
  },
  {
    link: '/about-us',
    label: 'About Us',
  },
  {
    link: '/contact-us',
    label: 'Contact Us',
  },
];

const Navbar = () => {
  const path = usePathname();
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      {/* topbar */}
      <Topbar />

      <div className="border-t py-4 mt-2">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center gap-x-4">
            {/* logo */}
            <Image src={logo} alt="logo" className="max-w-[220px] h-auto" />

            {/* links */}
            <div className="hidden md:flex items-center gap-x-4">
              {navLinks.map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  className={`capitalize hover:text-primary ${
                    path === item.link && 'font-medium text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* hamburger icon */}
            <div
              className="flex md:hidden text-2xl hover:text-primary cursor-pointer"
              onClick={() => setNavActive((prev) => !prev)}
            >
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`flex flex-col justify-center items-center py-6 gap-y-3 bg-white h-screen fixed w-full z-[111111] duration-500 top-0 ${
          navActive ? 'right-[00%]' : 'right-[200%]'
        } `}
      >
        <div
          className="absolute top-4 right-4 z-[11111] text-3xl cursor-pointer"
          onClick={() => setNavActive(false)}
        >
          <FaTimes />
        </div>
        {navLinks.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className={`capitalize text-xl hover:text-primary ${
              path === item.link && 'font-medium text-primary'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
