import React from 'react';

const BrandSkeleton = ({ num = 5 }) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-12 items-center justify-center mt-12">
      {Array.from({ length: num }, (_, index) => (
        <div
          key={index}
          className="bg-gray-200 w-[200px] h-[120px] rounded-md blink_animation"
        />
      ))}
    </div>
  );
};

export default BrandSkeleton;
