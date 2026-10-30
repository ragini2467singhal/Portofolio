import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { SlLocationPin } from "react-icons/sl";

const animationSkills = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (ids) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * ids,
    },
  }),
};

const Div = ({ MainHeading, data }) => {
  return (
    <div id="resumeSection">
      <motion.h3
        variants={animationSkills}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        {MainHeading}
      </motion.h3>
      <div id="content">
        {data.map((curr, id) => {
          return (
            <div id="content-inner" key={curr.id + id}>
              <motion.h4
                variants={animationSkills}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                {curr.head}
              </motion.h4>
              {curr.description.map((desc, index) => {
                return (
                  <motion.p
                    key={index}
                    variants={animationSkills}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                  >
                    {desc}
                  </motion.p>
                );
              })}
              {curr.location && (
                <motion.p
                  id="location"
                  variants={animationSkills}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  <SlLocationPin />
                  {curr.location}
                </motion.p>
              )}

              {curr.duration && (
                <motion.span
                  id="duration"
                  variants={animationSkills}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                >
                  {curr.duration}
                </motion.span>
              )}
              <ul>
                {curr.list.map((li, index) => {
                  return (
                    <motion.li
                      key={"id" + index}
                      variants={animationSkills}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                    >
                      {li}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Resume = ({ setActiveNavbar }) => {
  const data1 = [
    {
      id: "adfaf",
      head: "Ragini Singhal",
      duration: "",
      location: "",
      description: ["I'm a 2nd-year B.Tech student pursuing Artificial Intelligence and Machine Learning at Vivekananda Institute of Professional Studies (VIPS), GGSIPU. I'm passionate about software development, AI/ML, and problem-solving. I enjoy building practical projects and continuously improving my skills in Java, Python, C/C++, JavaScript, React, MySQL, Git and GitHub.",      ],
      list: [
        "New Delhi, INDIA",
        "+91-8448968259",
        "ragini2467singhal@gmail.com",
      ],
    },
  ];
  const data2 = [
    {
      id: "aadeer",
      head: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "2025 - 2029",
      location: "Pitampura, New Delhi - 110034",
      description: [ "Vivekananda Institute of Professional Studies - TC",
      "CGPA: 9.2",
      ],
      list: [],
    },
    {
      id: "aadeew",
      head: "Senior Secondary Education (Class XII)- Non-Medical",
      duration: "2024 - 2025",
      location: "Rohini, New Delhi-110085",
      description: [
        "Orleans The School",
        "CBSE",
      "Percentage: 90%",
      ],
      list: [],
    },
    {
      id: "aadeew",
      head: "Secondary Education (Class X)",
      duration: "2022 - 2023",
      location: "Rohini, New Delhi-110085",
      description: [
        "Tecnia International School",
        "CBSE",
      "Percentage: 93%",
      ],
      list: [],
    },
  ];
  const data3 = [
    {
      id: "weqrw",
      head: "Python Programming Intern - IncodeVision",
      duration: "July 2026 - Aug 2026",
      location: "",
      description: ["Python Programming Internship"],
      list: [
      "Developed a Strong Random Password Generator with customizable password length and character types including uppercase, lowercase, numbers, and special characters.",
      "Built a Simple To-Do List application with features to add, view, mark tasks as completed, and delete tasks.",
      "Applied Python programming concepts including loops, conditional statements, lists, strings, user input, and basic problem-solving.",
      ],
    },
    {
      id: "gjdff",
      head: "Cluster-Data Science Club (TISEC)",
      duration: "",
      location: "",
      description: ["Technical Society, VSE&T (VIPS-TC)"],
      list: [],
    },
  ];
  return (
    <Element name="AboutME" id="Resume">
      {/* <section id="Resume" onMouseEnter={() => setActiveNavbar("AboutME")}> */}
      <SectionHeader heading={"Resume"} />
      <div id="ResumeContainer">
        <div>
          <Div MainHeading={"Summary"} data={data1} />
          <Div MainHeading={"Education"} data={data2} />
        </div>
        <Div MainHeading={"Professional Experience"} data={data3} />
      </div>
      {/* </section> */}
    </Element>
  );
};

export default Resume;


