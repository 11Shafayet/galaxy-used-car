'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <form className="w-full flex flex-col gap-y-6 mt-12 md:mt-0">
      <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0">
        {/* first name */}
        <div className="flex flex-col gap-y-1 w-full md:w-1/2 mx-4">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            placeholder="John"
            className="border-0 border-b focus:outline-primary p-3"
          />
        </div>
        {/* last name */}
        <div className="flex flex-col gap-y-1 w-full md:w-1/2 mx-4">
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            placeholder="Doe"
            className="border-0 border-b focus:outline-primary p-3"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0">
        {/* email */}
        <div className="flex flex-col gap-y-1 w-full md:w-1/2 mx-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="hello@gmail.com"
            className="border-0 border-b focus:outline-primary p-3"
          />
        </div>
        {/* phone */}
        <div className="flex flex-col gap-y-1 w-full md:w-1/2 mx-4">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="+1 012 3456 789"
            className="border-0 border-b focus:outline-primary p-3"
          />
        </div>
      </div>

      {/* message */}
      <div className="flex flex-col gap-y-1 w-full mx-4">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Write your message..."
          rows={4}
          className="border-0 border-b focus:outline-primary p-3"
        />
      </div>

      <div className="flex justify-end items-center mt-6">
        <button
          type="submit"
          className="bg-primary text-white hover:bg-opacity-90 text-lg font-medium py-3 px-16 rounded-md duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
