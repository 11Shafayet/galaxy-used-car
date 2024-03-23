'use client';

import useAuth from '/Context/useAuth';
import SignInForm from '../sign-in/SignInForm';
import { FaTimes } from 'react-icons/fa';

const SignInModal = () => {
  const { modalOpen, setModalOpen } = useAuth();

  return (
    <>
      {modalOpen ? (
        <section className="fixed w-full h-full flex justify-center items-center inset-0 z-[10000000]">
          <div
            className="absolute bg-black bg-opacity-50 w-full h-full inset-0"
            onClick={() => setModalOpen(false)}
          />

          <div className="relative flex justify-center items-center bg-white lg:min-w-[600px] p-6 md:p-12 rounded-md ">
            <div
              className=" absolute top-4 right-4 text-2xl hover:text-primary cursor-pointer"
              onClick={() => setModalOpen(false)}
            >
              <FaTimes />
            </div>
            <SignInForm />
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default SignInModal;
