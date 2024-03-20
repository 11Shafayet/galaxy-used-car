'use client';

import { useEffect, useState } from 'react';
import Select from 'react-select';

const makeList = [
  {
    label: 'Chevrolet',
  },
  {
    label: 'Nissan',
  },
  {
    label: 'Cadillac',
  },
  {
    label: 'Dodge',
  },
];

const modelList = [
  {
    label: 'Chevrolet',
  },
  {
    label: 'Nissan',
  },
  {
    label: 'Cadillac',
  },
  {
    label: 'Dodge',
  },
];

const SearchBox = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  useEffect(() => {
    console.log(make);
  }, [make]);

  const handleSubmit = () => {
    console.log(make);
  };
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container px-4 mx-auto">
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 max-w-[900px] mx-auto"
        >
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={makeList[0]}
            name="make"
            options={makeList}
          />

          <button
            type="submit"
            className="bg-[#BB2D3B] text-white text-lg font-medium rounded-md py-3 px-8 w-full hover:opacity-95"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchBox;
