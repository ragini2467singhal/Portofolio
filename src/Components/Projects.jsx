import React, { useEffect, useRef, useState } from "react";
import parakh from "../Assets/parakh.png";
import amazon_clone from "../Assets/amazon_clone.png";
import routedecisionsystem from "../Assets/routedecisionsystem.png";
import {
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { Element } from "react-scroll";
const fadeInAnimationSkills = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};
const ProjectsData = [
  {
    Image: parakh,
    Topic: "Parakh-AI Document Analysis System",
    //GithubLink: "",
    //HostLink: "",
    Language_Used: [
      { Text: "Python", Color: "b08039" },
      { Text: "FastAPI", Color: "5CCFEE" },
      { Text: "AI/ML", Color: "3E9837" },
      { Text: "OCR", Color: "FFE600" },
      { Text: "Full-Stack", Color: "fff" },
    ],
  },
  {
    Image: amazon_clone,
    Topic: "Amazon Clone",
    //GithubLink: "",
    //HostLink: null,
    Language_Used: [
      { Text: "HTML", Color: "b08039" },
      { Text: "CSS", Color: "5CCFEE" },
    ],
  },
  {
    Image: routedecisionsystem,
    Topic: "Smart Route Decision System",
    //GithubLink: "",
    //HostLink: "",
    Language_Used: [
      { Text: "HTML", Color: "b08039" },
      { Text: "CSS", Color: "5CCFEE" },
      { Text: "FASTAPT", Color: "3E9837" },
      { Text: "JAVASCRIPT", Color: "FFE600" },
      { Text: "Python", Color: "3E9837" },
    ],
  }
]
    

const Projects = ({ setActiveNavbar }) => {
  const [centerImageIndex, setCenterImageIndex] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".imageItem");
      const centerScreen = window.innerWidth / 2;

      images.forEach((image, index) => {
        const rect = image.getBoundingClientRect();
        const imageCenter = rect.left + rect.width / 2;
        if (Math.abs(imageCenter - centerScreen) < 100) {
          setCenterImageIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-90%"]);

  return (
    <>
      <Element name="Projects" id="Projects">
        <section id="Projects" ref={targetRef}
        // onMouseEnter={() => setActiveNavbar("Projects")}
        >
          <div className="contentContainer">
            <div id="headerCarousel">
              <SectionHeader
                heading={"My Projects"}
                description={"The following projects showcase my skills through practical, real-world applications. Each project reflects my experience with different technologies, problem-solving, and building effective solutions."                }
              />
            </div>
            <motion.div className="images" style={{ x }}>
              {ProjectsData.map((curr, id) => {
                // console.log(curr);
                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="imageItem"
                    style={{
                      // borderColor: id === centerImageIndex ? "red" : "",
                      transition: "scale 0.5s ease",
                    }}
                  >
                    <div className="image-container">
                      <img className="image" src={curr.Image} alt="" />
                      <div id="details">
                        <div id="Topic-Links">
                          <h3 className="topic">{curr.Topic}</h3>
                          <div >
                            <a
                              href={curr.GithubLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaGithub />
                            </a>
                            {
                              curr.HostLink &&
                              <a
                                href={curr.HostLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaLink />
                              </a>
                            }
                          </div>
                        </div>
                        <div id="languagesUsed">
                          {curr.Language_Used.map((curr2, ids2) => {
                            return (
                              <span
                                style={{ color: `#${curr2.Color}` }}
                                key={ids2}
                              >
                                #{curr2.Text}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default Projects;