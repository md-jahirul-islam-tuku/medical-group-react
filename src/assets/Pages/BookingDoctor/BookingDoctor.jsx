import React from "react";

const BookingDoctor = ({ bookingDoctor, removeId }) => {
  const { doctorId, name, education, fee } = bookingDoctor;
  return (
    <div className="bg-white mb-7 rounded-2xl p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="font-semibold text-gray-400">{education}</p>
        </div>
        <div>
          <p>Appointment Fee: {fee} Taka+Vat</p>
        </div>
      </div>
      <hr className="mt-4 border-gray-400 border border-dashed" />
      <button
        onClick={() => removeId(doctorId)}
        className="btn btn-outline btn-secondary rounded-full w-full my-5 font-bold"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default BookingDoctor;
