import React from "react";

const Doctor = ({ doctor }) => {
  const { doctorImage, name, education, registrationNumber, experience } =
    doctor;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-5 pt-5">
        <img src={doctorImage} alt="Shoes" className="rounded-lg" />
      </figure>
      <div className="card-body items-center text-center">
        <p><span className="bg-green-100 px-3 py-1 rounded-full border border-green-300 text-green-600 font-semibold">Available</span> <span>{experience} Years Experience</span></p>
        <h2 className="card-title">{name}</h2>
        <p>{education}</p>
        <p>{registrationNumber}</p>
        <div className="card-actions w-full">
          <button className="btn btn-outline rounded-full btn-primary w-full shadow-none text-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
