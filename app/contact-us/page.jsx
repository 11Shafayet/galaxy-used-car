'use client';

import Image from 'next/image';
import Tire from '/public/assets/contact-tire.png';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneVolume } from 'react-icons/fa';

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

const ContactUs = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-[1200px] mx-auto bg-white rounded-xl shadow-light overflow-hidden p-2 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[33%] px-4 py-6 bg-primary relative overflow-hidden rounded-xl z-10 flex flex-col justify-between gap-y-3 min-h-96 text-white">
            <Image
              src={Tire}
              alt="tire"
              className="-z-10 absolute bottom-0 right-0 max-w-full h-auto"
            />

            <div>
              <h5 className="text-3xl font-semibold mb-3">
                Contact Information
              </h5>
              <p className="opacity-60">Say something to start a live chat!</p>
            </div>

            {/* contact data */}
            <div>
              {contactData.map((item, i) => {
                return (
                  <div className="flex items-center gap-x-3" key={i}>
                    {item.icon} <p>{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
