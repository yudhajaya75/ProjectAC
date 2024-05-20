import React from "react";

interface buttonProps {
  handlePrev: any;
  handleNext: any;
  page: any;
  totalPages: any;
}

const ButtonPagination: React.FC<buttonProps> = ({
  handlePrev,
  page,
  handleNext,
  totalPages,
}) => {
  return (
    <div className="flex mt-4 font-andika">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-2 text-xs md:text-md md:px-4 md:py-2  mr-2 bg-[#074288] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-2 text-xs md:text-md md:px-4 md:py-2  mr-2 bg-[#074288] text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Next
      </button>
      <div className="flex gap-2 text-xl font-semibold justify-center items-center ml-4">
        <span>{page}</span>
        <span>of</span>
        <span>{totalPages}</span>
      </div>
    </div>
  );
};

export default ButtonPagination;
