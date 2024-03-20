import React from 'react';

const CarCardSkeleton = ({ num = 6 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
      {Array.from({ length: num }, (_, index) => (
        <div
          key={index}
          className="col-span-1 bg-gray-300 w-full h-[200px] rounded-md blink_animation"
        />
      ))}
    </div>
  );
};

export default CarCardSkeleton;
