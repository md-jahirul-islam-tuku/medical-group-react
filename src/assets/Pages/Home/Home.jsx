import React from "react";
import BestDoctors from "../BestDoctors/BestDoctors";
import MedicalServices from "../MedicalServices/MedicalServices";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div className="pt-20">
      <div className="max-w-[1370px] mx-auto border-3 rounded-4xl border-white pt-10 pb-20 bg-gradient-to-b from-base-300 to-white px-2 lg:px-0">
        <Banner />
      </div>
      <div className="max-w-[1170px] mx-auto px-2 lg:px-0">
        <BestDoctors />
        <MedicalServices />
      </div>
    </div>
  );
};

export default Home;
