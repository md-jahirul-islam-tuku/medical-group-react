import React from "react";
import { FaRegRegistered } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctors = useLoaderData();
  const doctorDetails = doctors.find((doctor) => doctor.id === Number(id));

  const {
    doctorImage,
    name,
    education,
    registrationNumber,
    workingAt,
    fee,
    availability,
    experience,
  } = doctorDetails;
  return (
    <div className="pt-20 bg-base-300 max-w-[1170px] mx-auto">
      <div className="text-center py-16 px-20 bg-white rounded-xl">
        <h1 className="text-4xl font-bold">{name}'s Profile Details</h1>
        <p className="py-3">
          <span className="text-lg font-semibold">Dr. Jonathan Smith</span> {experience} years experienced. A
          trusted medical professional committed to providing expert care with
          compassion.
        </p>
      </div>
      <div className="card card-side bg-base-100 mt-10">
        <figure className="rounded-xl">
          <img src={doctorImage} alt="Movie" className="p-5" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{name}</h2>
          <p className="text-lg text-gray-500 font-bold">{education}</p>
          <p className="text-lg text-gray-500 font-semibold">Working at:</p>
          <h4 className="text-lg font-bold">{workingAt}</h4>
          <hr className="border-gray-300 border-dashed mt-2" />
          <p className="text-lg text-gray-400 font-semibold flex items-center">
            <FaRegRegistered className="mr-2" /> Reg No: {registrationNumber}
          </p>
          <hr className="border-gray-300 border-dashed mb-2" />
          <p>
            <span className="text-lg mr-3 font-semibold">Availability :</span>
            <span className="bg-green-100 px-3 rounded-full border border-green-300 text-green-600 font-semibold">
              Available
            </span>
            <span className="bg-green-100 px-3 rounded-full border border-green-300 text-green-600 font-semibold">
              Available
            </span>
            <span className="bg-green-100 px-3 rounded-full border border-green-300 text-green-600 font-semibold">
              Available
            </span>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Consultation Fee:</span>
            <span className="text-blue-700 font-bold px-2">
              Taka : {fee}
            </span>{" "}
            <span className="font-semibold text-gray-500">(Incl. Vat)</span>{" "}
            <span className="font-semibold text-blue-700">
              Per Consultation
            </span>
          </p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>
      <div className="mt-10 mb-20 bg-white p-7 rounded-xl">
        <h1 className="text-2xl text-center mb-5 font-semibold">
          Book an Appointment
        </h1>
        <hr className="border-gray-300 border-dashed" />
        <div className="flex justify-between py-5">
          <span className="font-bold">Availability</span>
          <span className="bg-green-100 px-3 rounded-full border border-green-300 text-green-600 font-semibold">
            Available
          </span>
        </div>
        <hr className="border-gray-300 border-dashed" />
        <div className="py-5 text-center">
          <span className="lg:bg-yellow-100 py-1 px-3 rounded-full lg:border lg:border-yellow-300 text-yellow-500 font-semibold">
            ! Due to high patient volume, we are currently accepting
            appointments for today only. We appreciate your understanding and
            cooperation.
          </span>
        </div>
        <div className="text-center">
          <button className="btn btn-primary shadow-none rounded-full w-full text-xl my-7">
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
