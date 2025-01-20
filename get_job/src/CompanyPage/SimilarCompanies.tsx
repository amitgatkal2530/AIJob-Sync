import React from "react";
import { similar } from "../Data/Company";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = () => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
      <div className="text-xl font-semibold mb-4 text-white">
        Similar Companies
      </div>

      <div className="flex flex-col gap-5">
        {similar.map((company, index) => (
          <div
            key={index}
            className="p-4 rounded-xl shadow-xl border border-gray-700 bg-mine-shaft-800 hover:bg-mine-shaft-700 transition-all duration-300 ease-in-out transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.3s"
          >
            <CompanyCard {...company} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarCompanies;
