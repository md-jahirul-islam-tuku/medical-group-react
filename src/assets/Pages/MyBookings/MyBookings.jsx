import React, { useEffect, useState } from "react";
import { getIds } from "../../Utilities/addToDB";
import BookingDoctor from "../BookingDoctor/BookingDoctor";
import { toast, ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

const MyBookings = () => {
  const [allDoctors, setAllDoctors] = useState([]); // all data
  const [filtered, setFiltered] = useState([]); // visible data

  useEffect(() => {
    const storedIds = getIds();

    fetch("doctorsData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllDoctors(data); // save all doctors

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
      <AnimatePresence>
        {filtered.map((bookingDoctor) => (
          <motion.div
            key={bookingDoctor.doctorId}
            initial={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }} // slide left + fade
            transition={{ duration: 0.7 }}
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
