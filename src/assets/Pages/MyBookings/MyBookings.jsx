import React, { useEffect, useState } from "react";
import { getIds } from "../../Utilities/addToDB";
import BookingDoctor from "../BookingDoctor/BookingDoctor";
import { toast, ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";

const MyBookings = () => {
  const navigate = useNavigate();
  const [allDoctors, setAllDoctors] = useState([]); // all data
  const [filtered, setFiltered] = useState([]); // visible data

  useEffect(() => {
    const storedIds = getIds();
    fetch("doctorsData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllDoctors(data);
        const visible = data.filter((doctor) =>
          storedIds.includes(String(doctor.doctorId))
        );
        setFiltered(visible);
      });
  }, []);
  const removeId = (id) => {
    const currentIds = getIds();
    const updatedIds = currentIds.filter((i) => i !== String(id));

    // update localStorage
    localStorage.setItem("DrId", JSON.stringify(updatedIds));

    // filter using ALL doctors (correct!)
    const newVisible = allDoctors.filter((doctor) =>
      updatedIds.includes(String(doctor.doctorId))
    );
    setFiltered(newVisible);
    toast.success("Appointment Cancelled ✅");
  };
  return (
    <div className="pt-28 pb-14 max-w-[1170px] mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Today Appointments</h1>
        <p>
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-10 rounded-xl">
          <h2 className="text-red-500 text-8xl mb-8">⚠️</h2>

          <h2 className="text-3xl font-bold mb-4 text-red-600">
            No Appointments Available
          </h2>
          <p className="mb-8 text-center max-w-md">
            Looks like you don’t have any appointments. Start exploring doctors
            and book your visit in just a few clicks.
          </p>
          <button
            onClick={() => navigate("/#bestDoctors")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer font-bold text-lg"
          >
            Go Home
          </button>
        </div>
      ) : (
        ""
      )}
      <AnimatePresence>
        {filtered.map((bookingDoctor) => (
          <motion.div
            key={bookingDoctor.doctorId}
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }} // slide left + fade
            transition={{ duration: 0.6 }}
          >
            <BookingDoctor bookingDoctor={bookingDoctor} removeId={removeId} />
          </motion.div>
        ))}
        <ToastContainer autoClose={1000} position="top-right" />
      </AnimatePresence>
    </div>
  );
};

export default MyBookings;
