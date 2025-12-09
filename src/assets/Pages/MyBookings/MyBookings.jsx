import React, { useEffect, useState } from "react";
import { getIds } from "../../Utilities/addToDB";
import BookingDoctor from "../BookingDoctor/BookingDoctor";
import { toast, ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";

const MyBookings = () => {
  const navigate = useNavigate();
  const [allDoctors, setAllDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // control when to show Empty State: only after all exits complete
  const [showEmpty, setShowEmpty] = useState(false);
  useEffect(() => {
    document.title = "Appointments | MedicalGroup";
  }, []);

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

        // If initially empty, show immediately
        if (visible.length === 0) setShowEmpty(true);
      });
  }, []);

  // Remove Appointment
  const removeId = (id) => {
    const currentIds = getIds();
    const updatedIds = currentIds.filter((i) => i !== String(id));

    localStorage.setItem("DrId", JSON.stringify(updatedIds));

    const newVisible = allDoctors.filter((doctor) =>
      updatedIds.includes(String(doctor.doctorId))
    );

    // When removing, hide empty until exit animations finish
    if (newVisible.length === 0) {
      setShowEmpty(false); // wait for onExitComplete to set true
    }

    setFiltered(newVisible);
    toast.success("Appointment Cancelled ✅");
  };

  return (
    <div className="pt-28 pb-14 max-w-[1170px] mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Today Appointments</h1>
        <p className="px-2 mt-4">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {/* AnimatePresence handles list item exits.
          onExitComplete will be called after all leaving children finish.
          We use it to show the empty state only AFTER exits complete. */}
      <AnimatePresence
        onExitComplete={() => {
          // if currently filtered is empty after exits, show the empty UI
          if (filtered.length === 0) {
            setShowEmpty(true);
          }
        }}
      >
        {filtered.map((bookingDoctor) => (
          <motion.div
            key={bookingDoctor.doctorId}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.6 }}
            layout
          >
            <BookingDoctor
              bookingDoctor={bookingDoctor}
              removeId={removeId}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Empty State: only render after exit animations complete (showEmpty === true) */}
      {showEmpty && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800 py-10 rounded-xl mt-6">
          <h2 className="text-red-500 text-8xl mb-8">⚠️</h2>

          <h2 className="text-3xl font-bold mb-4 text-red-600">
            No Appointments Available
          </h2>
          <p className="mb-8 text-center max-w-md">
            Looks like you don't have any appointments. Start exploring doctors
            and book your visit in just a few clicks.
          </p>

          <button
            onClick={() => navigate("/#bestDoctors")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer font-bold text-lg"
          >
            Go Home
          </button>
        </div>
      )}

      <ToastContainer autoClose={1000} position="top-right" />
    </div>
  );
};

export default MyBookings;
