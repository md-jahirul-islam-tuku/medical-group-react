import React from "react";

const MedicalServices = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">We Provide Best Medical Services</h1>
        <p className="lg:px-20 py-5">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 md:justify-between pb-14">
        <div className="bg-white p-8 md:p-14 rounded-xl">
          <img src={"../../../../public/success-doctor.png"} alt="" />
          <h1 className="text-7xl font-bold py-4">199+</h1>
          <h3 className="text-2xl">Total Doctors</h3>
        </div>
        <div className="bg-white p-8 md:p-14 rounded-xl">
          <img src={"../../../../public/success-review.png"} alt="" />
          <h1 className="text-7xl font-bold py-4">467+</h1>
          <h3 className="text-2xl">Total Reviews</h3>
        </div>
        <div className="bg-white p-8 md:p-14 rounded-xl">
          <img src={"../../../../public/success-patients.png"} alt="" />
          <h1 className="text-7xl font-bold py-4">1900+</h1>
          <h3 className="text-2xl">Total Patients</h3>
        </div>
        <div className="bg-white p-8 md:p-14 rounded-xl">
          <img src={"../../../../public/success-staffs.png"} alt="" />
          <h1 className="text-7xl font-bold py-4">300+</h1>
          <h3 className="text-2xl">Total Stuffs</h3>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;
