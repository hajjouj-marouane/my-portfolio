import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiEye  } from "react-icons/hi"; 
import { IoClose } from "react-icons/io5";


import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, certificates } from "../constants"; // Assuming certificates is imported
import { fadeIn, textVariant } from "../utils/motion";
import { Experience } from "../components";

// ProjectCard Component
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  openSource,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col justify-between"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={live} className="h-1/2 w-1/2 object-contain" alt="" />
            </div>
            {openSource && (
              <div
                onClick={() =>
                  window.open("https://github.com/hajjouj-marouane", "_blank")
                }
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  className="h-1/2 w-1/2 object-contain"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[15px] font-semibold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// CertificateCard Component
const CertificateCard = ({ name, organization, date, description, icon }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const toggleImage = () => {
    setIsImageOpen(!isImageOpen);
  };

  return (
<div className="w-full flex flex-wrap gap-6">
{isImageOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={toggleImage}
        >
          <div className="relative bg-white p-5 rounded-lg">
            <img
              src={icon}
              alt="icon"
              className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain"
            />
            <button
              onClick={toggleImage} // Ferme l'image agrandie
              className="absolute top-4 right-4 text-black text-3xl p-2 bg-white rounded-full hover:bg-gray-200"
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="bg-tertiary p-2 rounded-2xl w-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <div className="relative mb-4">
        <button
            onClick={toggleImage} // Affiche l'image en grand
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl p-2 bg-dark rounded-full hover:bg-gray-200"
            >
            <HiEye className="text-white text-3xl" />
          </button>
          <img
            src={icon}
            alt="icon"
            className="w-100% h-100% object-cover rounded-lg mb-4"
          />
        </div>
        <div className="text-center">
          <h3 className="text-white font-semibold text-[22px]">{name}</h3>
          <p className="mt-2 text-secondary text-[16px]">{organization}</p>
          <p className="mt-1 text-secondary text-[14px] italic">{date}</p>
        </div>
        <p className="text-secondary text-[15px] leading-[1.8] mt-4">{description}</p>
      </motion.div>
    </div>
  );
};
// Works Component
const Works = () => {
  return (
    <>
      <Experience />
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos. They reflect my ability to solve
          complex problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-5 justify-between">
      {projects.map((project, index) => (
    <div className="lg:w-[32%] sm:w-[49%] w-full flex" key={`project-${index}`}>
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Certifications</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-5 justify-between">
      {certificates.map((certificate, index) => (
    <div className="lg:w-[32%] sm:w-[49%] w-full flex" key={`certificate-${index}`}>
            <CertificateCard {...certificate} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
