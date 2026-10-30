import React, { useState } from "react";
import { animate, delay, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Element } from "react-scroll";

const SkillsData = [
  {
    Text: "PYTHON",
    Color: "61DBFB",
    knowledgePercent: 75,
  },
  {
    Text: "JAVA",
    Color: "3c873a",
    knowledgePercent: 65,
  },
  {
    Text: "HTML",
    Color: "f0cf90",
    knowledgePercent: 80,
  },
  {
    Text: "JAVASCRIPT",
    Color: "efd81d",
    knowledgePercent: 65,
  },
  {
    Text: "CSS",
    Color: "00684a",
    knowledgePercent: 85,
  },
  {
    Text: "REACT JS",
    Color: "264de4",
    knowledgePercent: 60,
  },
  {
    Text: "MYSQL",
    Color: "4584b6",
    knowledgePercent: 80,
  },
  {
    Text: "DSA",
    Color: "f6820d",
    knowledgePercent: 65,
  },
  {
    Text: "GIT & GITHUB",
    Color: "FAFBFC",
    knowledgePercent: 75,
  },
  {
    Text: "C",
    Color:"E91E63",
    knowledgePercent: 80,
  },
  {
    Text: "C++",
    Color:"00BFA6",
    knowledgePercent: 85,
  },
  {
    Text: "CANVA",
    Color:"795548",
    knowledgePercent: 85,
  },
];

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

const fadeInAnimationSkills = {
  initial: {
    opacity: 0,
    width: 0,
  },
  animate: ({ knowledgePercent, ids }) => ({
    opacity: 1,
    width: `${knowledgePercent}%`,
    transition: {
      delay: 0.25 * ids,
    },
  }),
};

const Skills = ({ setActiveNavbar, fadeInAnimationSection }) => {
  return (
    <Element name="Skills" id="Skills">
      {/* <section id="Skills" onMouseEnter={() => setActiveNavbar("Skills")}> */}
      <motion.div
        variants={fadeInAnimationSection}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <SectionHeader
          heading={"Skills"}
          description={"Passionate about programming and problem-solving, with skills in Python, Java, C/C++, JavaScript, HTML, CSS, React JS, MySQL, DSA, and Git & GitHub."}
        />
        <div id="cardsCollection">
          {SkillsData.map((curr, ids) => {
            return (
              <motion.div
                key={ids}
                variants={animationSkills}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={ids}
              >
                <div id="SkillInfo">
                  <p>{curr.Text}</p>
                  <p>{curr.knowledgePercent}%</p>
                </div>
                <div id="progress-bar-wrap">
                  <motion.div
                    id="progress-bar"
                    style={{
                      backgroundColor: `#${curr.Color}`,
                    }}
                    variants={fadeInAnimationSkills}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={{ knowledgePercent: curr.knowledgePercent, ids }}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      {/* </section> */}
    </Element>
  );
};

export default Skills;
