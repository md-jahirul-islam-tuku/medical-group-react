import React from "react";
import BestDoctors from "../BestDoctors/BestDoctors";
import MedicalServices from "../MedicalServices/MedicalServices";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="pt-20">
      <div className="max-w-[1370px] mx-auto border-3 rounded-4xl border-white pt-10 pb-20 bg-linear-to-b from-base-300 to-white px-2 lg:px-0">
        <Banner />
      </div>
      <div className="max-w-[1170px] mx-auto px-2 lg:px-0">
        <BestDoctors data={data} />
        <MedicalServices />
      </div>
    </div>
  );
};

export default Home;
