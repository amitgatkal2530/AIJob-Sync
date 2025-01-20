import React from "react";
import { companyData } from "../Data/Company";

const About = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 bg-mine-shaft-900 rounded-lg shadow-lg">
      {companyData.map((company, index) => (
        <div key={index} className="mb-8">
          <div className="flex gap-4 items-center mb-6 p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-3xl text-white hover:text-bright-sun-400 transition-all duration-300 ease-in-out">
                {company.name}
              </div>
              <div className="text-xl text-gray-300 hover:text-gray-200 transition-all duration-300 ease-in-out">
                {company.industry}
              </div>
            </div>
          </div>

          <div className="text-lg text-gray-400 mb-8">
            <p className="animate__animated animate__fadeIn animate__delay-0.2s">
              <strong className="text-white text-xl block">Overview:</strong>
              <span className="text-gray-300">{company.overview}</span>
            </p>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
              <strong className="text-white text-xl block">Size:</strong>
              <span className="text-gray-300">{company.size}</span>
            </p>
            <p className="animate__animated animate__fadeIn animate__delay-1.5s">
              <strong className="text-white text-xl block">Headquarters:</strong>
              <span className="text-gray-300">{company.headquarters}</span>
            </p>
            <p className="item-center animate__animated animate__fadeIn animate__delay-2s">
              <strong className="text-white text-xl block">Specialties:</strong>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                {company.specialties.map((specialty, idx) => (
                  <li
                    key={idx}
                    className="text-lg text-gray-400 animate__animated animate__fadeIn animate__delay-4s"
                    style={{ animationDuration: `${0.5 + idx * 0.2}s` }}
                  >
                    {specialty}
                  </li>
                ))}
              </ul>
            </p>
          </div>

          {/* Bullet Point Animation */}
          <div className="flex gap-4 items-center">
            <p>
              <strong>Website:</strong>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bright-sun-400 hover:text-bright-sun-500 transition-all ease-in-out duration-300"
              >
                {company.website}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
