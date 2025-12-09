import React from "react";

const Faq = () => {
  const faqs = [
    {
      q: "How do I book an appointment with a doctor?",
      a: "You can easily book an appointment by selecting your preferred doctor and clicking the “Book Appointment” button. Fill in your details and confirm your schedule.",
    },
    {
      q: "Do I need to create an account to book a doctor?",
      a: "Yes. Creating an account helps you manage appointments, view prescriptions, and store your medical history securely.",
    },
    {
      q: "Can I reschedule or cancel a booked appointment?",
      a: "Yes. Go to the “My Bookings” page where you can cancel or reschedule your appointment based on availability.",
    },
    {
      q: "Are the doctors verified and licensed?",
      a: "Yes, all doctors on our platform are verified and licensed professionals with years of experience.",
    },
    {
      q: "Do you offer online or video consultations?",
      a: "Yes. Many doctors provide live video consultations that you can book directly from their profiles.",
    },
    {
      q: "What if the doctor I want is unavailable?",
      a: "You can join the waiting list or choose another specialist. We notify you if your selected doctor becomes available.",
    },
    {
      q: "Are my medical details and records secure?",
      a: "Yes. We use encrypted systems and follow strict privacy policies to protect your medical data.",
    },
    {
      q: "Do you accept insurance for appointments?",
      a: "Some doctors accept insurance depending on their clinic policies. Check each doctor’s profile for insurance details.",
    },
    {
      q: "Can I get a prescription after an online consultation?",
      a: "Yes. Doctors can issue digital prescriptions, which you can download or access anytime from your account.",
    },
    {
      q: "How do I know which doctor is right for me?",
      a: "Every doctor profile includes specialization, experience, reviews, and consultation types to help you choose the best fit.",
    },
  ];
  return (
    <div className="max-w-[900px] mx-auto px-4 py-12 mt-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-200 rounded-lg"
          >
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">{item.q}</div>
            <div className="collapse-content text-gray-600">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
