'use client';

import Image from 'next/image';
import Tire from '/public/assets/contact-tire.png';
import {
  FaDiscord,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';
import ContactForm from '@/components/contact-us/ContactForm';

const contactData = [
  {
    icon: <FaPhoneVolume />,
    label: '+971526337582',
  },
  {
    icon: <FaEnvelope />,
    label: 'info@galaxyusedcar.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Street no 23 - Industrial Area 4 - Sharjah',
  },
];

const socialData = [
  {
    icon: <FaTwitter />,
    link: '',
  },
  {
    icon: <FaInstagram />,
    link: '',
  },
  {
    icon: <FaDiscord />,
    link: '',
  },
];

const ContactUs = () => {
  return (
    <section className="pt-12 md:pt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-[1200px] mx-auto bg-white rounded-xl shadow-black overflow-hidden p-2 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[33%] px-4 py-6 bg-primary relative overflow-hidden rounded-xl z-10 flex flex-col justify-between gap-y-3 min-h-96 text-white">
            <Image
              src={Tire}
              alt="tire"
              className="-z-10 absolute -bottom-8 -right-8 max-w-full h-auto"
            />

            <div>
              <h5 className="text-3xl font-semibold mb-3">
                Contact Information
              </h5>
              <p className="opacity-60">Say something to start a live chat!</p>
            </div>

            {/* contact data */}
            <div className="flex flex-col gap-y-3">
              {contactData.map((item, i) => {
                return (
                  <div className="flex items-center gap-x-3" key={i}>
                    {item.icon} <p className="lg:pr-32">{item.label}</p>
                  </div>
                );
              })}
            </div>

            {/* social data */}
            <div className="flex items-center gap-x-3">
              {socialData.map((item, i) => {
                return (
                  <Link
                    href={item.link}
                    key={i}
                    className="flex justify-center items-center text-white hover:bg-white hover:text-black w-7 h-7 rounded-full duration-300"
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center p-4 md:p-8 w-full lg:w-[67%]">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* google map */}
      <div className="w-full mt-12 md:mt-36">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.329293211007!2d91.85869627595447!3d24.95490874147077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055b0809312fb%3A0x313f779160064c08!2sGrand%20Sylhet%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sbd!4v1711199135025!5m2!1sen!2sbd"
          width="600"
          height="550"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="!w-full h-[320px] md:h-[550px]"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
