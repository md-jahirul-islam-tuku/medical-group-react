import React from "react";
import Doctor from "../Doctor/Doctor";

const BestDoctors = ({ data }) => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Our Best Doctors</h1>
        <p className="lg:px-20 py-5">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default BestDoctors;
