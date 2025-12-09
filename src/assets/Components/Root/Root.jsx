import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Root = () => {
  return (
    <div
      className="bg-base-300 min-h-screen flex flex-col caret-transparent"
    >
      <ScrollToTop />
      <Navbar />
      <main className="grow transition">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
