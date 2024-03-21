'use client';

import { useState } from 'react';
import Image from 'next/image';
import signUp from '/public/assets/sign-up.png';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [phone, setPhone] = useState('+971');
  const [phoneCode, setPhoneCode] = useState('');

  const handlePhone = (e, code) => {
    setPhone(e);
    setPhoneCode(code.dialCode);
  };
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Image
            src={signUp}
            alt="car"
            className="object-cover max-w-full h-auto w-full max-h-[850px]"
          />
        </div>

        <div className="py-20 px-12 min-h-[80vh] flex justify-center items-center">
          <form className="flex-grow flex flex-col gap-y-3 max-w-[450px] -ml-36">
            <h3 className="font-bold text-4xl md:text-5xl mb-6">Sign Up</h3>
            {/* username */}
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="bg-white border rounded-md py-2.5 px-4 focus:outline-primary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="bg-white border rounded-md py-2.5 px-4 focus:outline-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="password">Password</label>
                <p
                  className="cursor-pointer flex items-center gap-x-2 hover:text-primary text-sm"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  {showPassword ? 'Hide' : 'Show'}
                </p>
              </div>
              <input
                required
                name="password"
                placeholder="Enter Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white border rounded-md py-2.5 px-4 focus:outline-primary"
              />
            </div>
            {/*confirm password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="con-password">Confirm Password</label>
                <p
                  className="cursor-pointer flex items-center gap-x-2 hover:text-primary text-sm"
                  onClick={() => setShowConPassword((prev) => !prev)}
                >
                  {showConPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  {showConPassword ? 'Hide' : 'Show'}
                </p>
              </div>
              <input
                required
                name="password"
                placeholder="Enter Password"
                type={showConPassword ? 'text' : 'password'}
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
                className="bg-white border rounded-md py-2.5 px-4 focus:outline-primary"
              />
            </div>
            {/* phone */}
            <div className="my-4">
              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                required
                defaultCountry="ae"
                placeholder="Enter Phone Number"
                enableSearch
                value={phone}
                dialCode={phoneCode}
                onChange={(e, dialCode) => handlePhone(e, dialCode)}
                className="!w-full"
                inputClass="!w-full !py-5 !border-gray-200 focus:!border-primary"
               
              />
            </div>

            {/* button */}
            <div>
              <button className="py-3 px-28 bg-primary font-medium rounded-full text-white capitalize mt-2 hover:bg-opacity-95 w-full">
                Sign Up
              </button>
            </div>
            <p className="text-sm">
              Already have an account?{' '}
              <Link href="/sign-in" className="underline hover:text-primary">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
