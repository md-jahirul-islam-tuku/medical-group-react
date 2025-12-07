import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/bookings"}>My-Bookings</NavLink>
      </li>
      <li>
        <NavLink to={"/faq"}>FAQ</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>ContactUs</NavLink>
      </li>
    </>
  );
  return (
    <footer className="p-10 text-center bg-white">
      <aside>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img
            className="w-10"
            src="../../../../public/medical-logo.png"
            alt=""
          />{" "}
          MedicalGroup
        </Link>
      </aside>
      <div className="navbar-center py-3">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <hr className="max-w-140 mx-auto border-base-300 pb-3" />
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-3xl">
          <li><a href=""><FaFacebookSquare /></a></li>
          <li><a href=""><FaSquareXTwitter /></a></li>
          <li><a href=""><FaLinkedin /></a></li>
          <li><a href=""><FaYoutubeSquare /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
