'use client';

import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Select from 'react-select';
import ReactSlider from 'react-slider';

const makeOptions = [
  { label: 'Chevrolet' },
  { label: 'Nissan' },
  { label: 'Cadillac' },
  { label: 'Dodge' },
];

const yearList = [{ label: '2014' }, { label: '2015' }];

const Sidebar = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [makeSearch, setMakeSearch] = useState('');
  const [modelSearch, setModelSearch] = useState('');
  const [cylinderSearch, setCylinderSearch] = useState('');
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);

  const toggleFilter = (index) => {
    setActiveFilter((prev) => (prev === index ? null : index));
  };

  //   search functionality
  const searchFilter = (e, name) => {
    switch (name) {
      case 'make':
        setMakeSearch(e.target.value);
        break;
      case 'model':
        setModelSearch(e.target.value);
        break;
      case 'cylinder':
        setCylinderSearch(e.target.value);
        break;

      default:
        break;
    }
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
    <div className="border rounded-md overflow-hidden shadow-light bg-white text-[#90A3BF] py-6 px-4 md:px-8 w-full lg:w-[25%]">
      <h5 className="text-xl font-bold mb-4">Search Filters</h5>

      <div className="flex flex-col gap-y-3">
        {/* make */}
        <div>
          <div
            className="flex justify-between items-center font-medium cursor-pointer"
            onClick={() => toggleFilter(0)}
          >
            <p>Make</p>
            <div className="border rounded-md border-[#90A3BF] p-2">
              {activeFilter !== 0 ? <FaPlus /> : <FaMinus />}
            </div>
          </div>

          {/* filter options */}
          {activeFilter === 0 && (
            <div className="mt-3">
              {/* search box and reset button */}
              <div className="grid grid-cols-3 justify-between gap-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white shadow-black rounded-md py-2 px-4 focus:outline-primary col-span-2"
                  value={makeSearch}
                  onChange={(e) => searchFilter(e, 'make')}
                />
                <button className="text-sm bg-danger rounded-md px-4 text-white">
                  Reset
                </button>
              </div>
              {/* option */}
              <div className="max-h-[220px] overflow-y-auto flex flex-col gap-y-2 mt-4">
                {makeOptions
                  .filter((item) =>
                    item.label.toLowerCase().includes(makeSearch.toLowerCase())
                  )
                  .map((item, i) => (
                    <label key={i}>
                      <input type="checkbox" className="mr-2 w-4 h-4" />
                      {item.label}
                    </label>
                  ))}
              </div>
            </div>
          )}
        </div>
        <hr />
        {/* model */}
        <div>
          <div
            className="flex justify-between items-center font-medium cursor-pointer"
            onClick={() => toggleFilter(1)}
          >
            <p>Model</p>
            <div className="border rounded-md border-[#90A3BF] p-2">
              {activeFilter !== 1 ? <FaPlus /> : <FaMinus />}
            </div>
          </div>

          {/* filter options */}
          {activeFilter === 1 && (
            <div className="mt-3">
              {/* search box and reset button */}
              <div className="grid grid-cols-3 justify-between gap-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white shadow-black rounded-md py-2 px-4 focus:outline-primary col-span-2"
                  value={modelSearch}
                  onChange={(e) => searchFilter(e, 'model')}
                />
                <button className="text-sm bg-danger rounded-md px-4 text-white">
                  Reset
                </button>
              </div>
              {/* option */}
              <div className="max-h-[220px] overflow-y-auto flex flex-col gap-y-2 mt-4">
                {makeOptions
                  .filter((item) =>
                    item.label.toLowerCase().includes(modelSearch.toLowerCase())
                  )
                  .map((item, i) => (
                    <label key={i}>
                      <input type="checkbox" className="mr-2 w-4 h-4" />
                      {item.label}
                    </label>
                  ))}
              </div>
            </div>
          )}
        </div>
        <hr />
        {/* year */}
        <div>
          <div
            className="flex justify-between items-center font-medium cursor-pointer"
            onClick={() => toggleFilter(2)}
          >
            <p>Year</p>
            <div className="border rounded-md border-[#90A3BF] p-2">
              {activeFilter !== 2 ? <FaPlus /> : <FaMinus />}
            </div>
          </div>
          {/* filter options */}
          {activeFilter === 2 && (
            <div className="mt-3">
              {/* search box and reset button */}
              <div className="flex justify-end gap-4">
                <button className="text-sm bg-danger rounded-md px-3 py-1 text-white">
                  Reset
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <Select
                  className="leading-7"
                  defaultValue={fromYear}
                  options={yearList}
                  placeholder={yearList[0].label}
                  name="fromYear"
                  styles={colourStyles}
                  onChange={(e) => setFromYear(e.label)}
                />
                <Select
                  className="leading-7"
                  defaultValue={toYear}
                  options={yearList}
                  placeholder={yearList[0].label}
                  name="toYear"
                  styles={colourStyles}
                  onChange={(e) => setToYear(e.label)}
                />
                <button className="bg-primary rounded-md px-4 text-white">
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
        <hr />
        {/* cylinder */}
        <div>
          <div
            className="flex justify-between items-center font-medium cursor-pointer"
            onClick={() => toggleFilter(3)}
          >
            <p>Cylinder</p>
            <div className="border rounded-md border-[#90A3BF] p-2">
              {activeFilter !== 3 ? <FaPlus /> : <FaMinus />}
            </div>
          </div>

          {/* filter options */}
          {activeFilter === 3 && (
            <div className="mt-3">
              {/* search box and reset button */}
              <div className="grid grid-cols-3 justify-between gap-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white shadow-black rounded-md py-2 px-4 focus:outline-primary col-span-2"
                  value={cylinderSearch}
                  onChange={(e) => searchFilter(e, 'cylinder')}
                />
                <button className="text-sm bg-danger rounded-md px-4 text-white">
                  Reset
                </button>
              </div>
              {/* option */}
              <div className="max-h-[220px] overflow-y-auto flex flex-col gap-y-2 mt-4">
                {makeOptions
                  .filter((item) =>
                    item.label
                      .toLowerCase()
                      .includes(cylinderSearch.toLowerCase())
                  )
                  .map((item, i) => (
                    <label key={i}>
                      <input type="checkbox" className="mr-2 w-4 h-4" />
                      {item.label}
                    </label>
                  ))}
              </div>
            </div>
          )}
        </div>
        <hr />
        {/* price */}
        <div>
          <div
            className="flex justify-between items-center font-medium cursor-pointer"
            onClick={() => toggleFilter(4)}
          >
            <p>Price</p>
            <div className="border rounded-md border-[#90A3BF] p-2">
              {activeFilter !== 4 ? <FaPlus /> : <FaMinus />}
            </div>
          </div>

          {/* filter options */}
          {activeFilter === 4 && (
            <div className="mt-3">
              {/* reset button */}
              <div className="flex justify-between">
                <h5 className="fontmedium">
                  ${priceRange[0]} - ${priceRange[1]}
                </h5>
                <button className="text-sm bg-danger rounded-md px-4 py-1.5 text-white">
                  Reset
                </button>
              </div>

              <ReactSlider
                className="price-slider w-full h-1 bg-primary mt-4 rounded-full"
                thumbClassName="price-thumb w-4 h-4 bg-gray-300 rounded-full -mt-[6px] focus:outline-none focus:bg-primary"
                trackClassName="price-track"
                minDistance={10}
                value={priceRange}
                onChange={setPriceRange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
