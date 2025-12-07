import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold">
              Dependable Care, Backed by Trusted Professionals.
            </h1>
            <p className="py-6">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
            <div className="md:flex justify-center">
              <div>
                <label className="input validator join-item md:rounded-l-full w-108">
                  <input
                    type="text"
                    placeholder="Search any doctor..."
                    required
                  />
                </label>
                {/* <div className="validator-hint hidden">
                  Enter valid email address
                </div> */}
              </div>
              <button className="btn btn-primary md:rounded-r-full join-item shadow-none mt-3 md:mt-0">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Image 1 */}
        <div className="w-full lg:w-1/2">
          <img
            src={"../../../../public/banner-img-2.jpg"}
            alt="Image 1"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full lg:w-1/2">
          <img
            src={"../../../../public/banner-img-3.jpg"}
            alt="Image 2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
