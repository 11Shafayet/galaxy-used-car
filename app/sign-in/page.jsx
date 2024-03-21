'use client';

import { useState } from 'react';
import Image from 'next/image';
import signIn from '/public/assets/signIn.png';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="py-20 px-12 min-h-[80vh] flex justify-center items-center">
          <form className="flex-grow flex flex-col gap-y-3 max-w-[450px]">
            <h3 className="font-bold text-4xl md:text-5xl mb-6">Sign In</h3>
            {/* username */}
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username or Email</label>
              <input
                type="text"
                className="bg-white border rounded-md py-2.5 px-4 focus:outline-primary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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

              <p className="underline text-end text-sm">
                Forget your password?
              </p>
            </div>

            {/* button */}
            <div>
              <button className="py-3 px-28 bg-primary font-medium rounded-full text-white capitalize mt-2 hover:bg-opacity-95">
                Sign in
              </button>
            </div>
            <p className="text-sm">
              Don't have an account?{' '}
              <Link href="/sign-up" className="underline hover:text-primary">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden lg:block">
          <Image
            src={signIn}
            alt="car"
            className="object-cover max-w-full h-auto w-full max-h-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
