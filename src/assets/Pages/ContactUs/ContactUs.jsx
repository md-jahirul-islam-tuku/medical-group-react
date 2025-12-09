import React, { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Simulate sending form data (replace with API call)
    console.log("Form Submitted:", formData);
    toast.success("Message sent successfully ✅");

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-[900px] mx-auto px-4 py-12 mt-10">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-lg space-y-4"
        >
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows={5}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +966 50 716 99 39
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> tuku.ksa@gmail.com
          </p>
          <p className="mb-2">
            <span className="font-semibold">Address:</span> Al Medina, Saudi
            Arabia
          </p>

          <div className="mt-4 flex items-center">
            <h4 className="font-semibold">Follow Us :</h4>
            <div className="navbar-center">
              <ul className="menu menu-horizontal text-3xl">
                <li>
                  <a href="">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaSquareXTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutubeSquare />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer autoClose={1500} position="top-right" />
    </div>
  );
}
