import { useState } from "react";

import pages from "./pages";

function Payment(props: any) {
  const [activePage, setActivePage] = useState(0);

  const handleNavbarClick = (index: any) => {
    setActivePage(index);
  };

  const handleNext = () => {
    setActivePage((prevPage) =>
      prevPage === pages.length - 1 ? prevPage : prevPage + 1
    );
  };

  const handlePrevious = () => {
    setActivePage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
  };

  return (
    <div className="shadow-lg max-w-[1270px] relative top-[100px] left-[130px] border rounded-md">
      <div className="p-7">
        <div>
          <div className="flex">
            <div>
              <ul className="">
                {pages.map((page, index) => (
                  <div
                    key={index}
                    style={{
                      marginTop: "10px",
                      position: "relative",
                      bottom: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleNavbarClick(index)}
                  >
                    <li
                      className={`p-1 mx-[100px] relative right-[100px]
                                            ${
                                              activePage === index
                                                ? "bg-[#002157]"
                                                : "bg-[#f1f0f2]"
                                            }
                                            rounded-md cursor-pointer duration-500`}
                      style={{
                        transition: "background-color 0.5s",
                        backgroundImage: "none",
                      }}
                    >
                      <div>
                        <img
                          src={page.imagePath}
                          alt={page.alt}
                          className={
                            activePage === index ? "" : "inactive-image"
                          }
                        />
                      </div>
                    </li>
                    <button className="text-left relative left-[50px] bottom-[40px]">
                      <p className="font-semibold text-[18px] text-[#4B465C]">
                        {page.text}
                      </p>
                      <p className="font-normal text-[14px] text-[#bebbc0]">
                        {page.description}
                      </p>
                    </button>
                  </div>
                ))}
              </ul>
            </div>
            <div className="p-3 border-r-2 ml-6"></div>
            {/* <div>
              {pages.map((page, index) => (
                <div
                  key={index}
                  style={{ display: activePage === index ? "block" : "none" }}
                >
                  <Packagesection
                    key={index}
                    index={index}
                    activePage={activePage}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                  <PersonalInfoSection
                    key={index}
                    index={index}
                    activePage={activePage}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                  <PaymentMethod
                    key={index}
                    index={index}
                    activePage={activePage}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                  />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
