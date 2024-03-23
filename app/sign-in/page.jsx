import Image from 'next/image';
import signIn from '/public/assets/car6.jpg';
import SignInForm from '@/components/sign-in/SignInForm';

const SignIn = () => {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="py-20 px-12 min-h-[80vh] flex justify-center items-center bg-primary bg-opacity-10">
          <SignInForm />
        </div>
        <div className="hidden lg:block">
          <Image
            src={signIn}
            alt="car"
            className="object-cover max-w-full h-auto w-full max-h-[90vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
