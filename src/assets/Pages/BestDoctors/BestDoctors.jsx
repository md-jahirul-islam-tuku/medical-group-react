import React, { useState } from "react";
import Doctor from "../Doctor/Doctor";

const BestDoctors = ({ data, searchTerm }) => {
  const [showAll, setShowAll] = useState(false);

  // Filter doctors based on searchTerm
  const filteredDoctors = data.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Decide which doctors to show
  const visibleDoctors = showAll ? filteredDoctors : filteredDoctors.slice(0, 6);

  return (
    <div id="bestDoctors" className="py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Our Best Doctors</h1>
        <p className="lg:px-20 py-5">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className={` 
        ${visibleDoctors.length === 1 ? "grid-cols-1 justify-items-center" : "grid gap-4"}
        ${visibleDoctors.length === 2 ? "grid-cols-2 justify-items-stretch px-40" : "grid-cols-3 md:grid-cols-3"} 
      `}>
        {visibleDoctors.length > 0 ? (
          visibleDoctors.map((doctor) => (
            <Doctor key={doctor.doctorId} doctor={doctor} />
          ))
        ) : (
          <p className="text-center col-span-full text-red-500 font-semibold p-20 bg-white rounded-2xl">
            No doctors found for "{searchTerm}"
          </p>
        )}
      </div>

      {filteredDoctors.length > 6 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-primary mx-auto text-xl rounded-full mt-10 px-8"
          >
            {showAll ? "View Less" : "View All Doctors"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BestDoctors;
