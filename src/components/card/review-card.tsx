import React from "react";

const ServiceSection = () => {
  return (
    <div className="bg-gray-100 py-8 mt-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-center gap-4">
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src="./images/team.png" className="w-[100px]" alt="Team" />
          </div>
          <h3 className="text-xl font-medium text-center mb-2">
            Didukung oleh Staff Teknisi in-house Berpengalaman
          </h3>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img src="./images/tick.png" className="w-[100px]" alt="Tick" />
          </div>
          <h3 className="text-xl font-medium text-center mb-2">
            Tanpa Rekayasa dalam Pengisian Freon & Pergantian Spare Part
          </h3>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img
              src="./images/security.png"
              className="w-[100px]"
              alt="Security"
            />
          </div>
          <h3 className="text-xl font-medium text-center mb-2">
            30 Hari Garansi Jaminan Uang Kembali
          </h3>
          <p className="text-gray-500 text-center">
            * Syarat & Ketentuan Berlaku *
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="flex items-center justify-center mb-4">
            <img
              src="./images/phone-call.png"
              className="w-[100px]"
              alt="Phone Call"
            />
          </div>
          <h3 className="text-xl font-medium text-center mb-2">
            Layanan Customer Service yang Cepat Memberikan Respons
          </h3>
        </div>
        {/* ... other service boxes */}
      </div>
    </div>
  );
};

export default ServiceSection;
