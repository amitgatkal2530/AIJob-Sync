import React from "react";
import TalentCard from "../FindTalent/TalentCard";
import { talents } from "../Data/TalentData";

const RecommendedTalent = () => {
    return (
      <div className="bg-mine-shaft-900 p-4 rounded-lg shadow-md">
        <div className="text-xl font-semibold mb-4 text-white">
          Recommended Talent
        </div>
        <div className="flex flex-col gap-4">
          {talents.slice(0, 4).map((talent, index) => (
            <div
              key={index}
              className="p-3 rounded-lg shadow-md border border-gray-700 bg-mine-shaft-800"
            >
              <TalentCard {...talent} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default RecommendedTalent;
