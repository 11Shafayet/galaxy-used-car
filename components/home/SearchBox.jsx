'use client';

import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

const makeList = [
  {
    value: 'Chevrolet',
    label: 'Chevrolet',
  },
  {
    value: 'Nissan',
    label: 'Nissan',
  },
  {
    value: 'Cadillac',
    label: 'Cadillac',
  },
  {
    value: 'Dodge',
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
  const [make, setMake] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    console.log(make);
  }, [make]);

  const handleSubmit = () => {
    console.log(make);
  };

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? '#0C6135'
          : isFocused
          ? '#E0EBE4'
          : undefined,
        color: isSelected ? '#fff' : '#000',

        ':active': {
          ...styles[':active'],
          backgroundColor: isSelected ? '#0C6135' : 'white',
        },
      };
    },
  };
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container px-4 mx-auto">
        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 max-w-[900px] mx-auto"
          onSubmit={handleSubmit}
        >
          {/* make */}
          <Select
            className="leading-9"
            defaultValue={make}
            options={makeList}
            placeholder="Select Make"
            name="make"
            styles={colourStyles}
            onChange={(e) => setMake(e.label)}
          />
          {/* model */}
          <Select
            className="leading-9"
            defaultValue={model}
            options={modelList}
            placeholder="Select Model"
            name="model"
            styles={colourStyles}
            onChange={(e) => setModel(e.label)}
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
