import React from "react";
import DataAnalytics from "../Assets/DataAnalytics.png";
import fullstack from "../Assets/fullstack.png";
import ShowMoreCertificate from "./ShowMoreCertificate";
import hacknfinity from "../Assets/hacknfinity.png";
import cousera from "../Assets/cousera.png";
import ieee_innerve from "../Assets/ieee_innerve.png";
import incodevision from "../Assets/incodevision.png";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Element } from "react-scroll";

const CertificateArr = [
  {
    Name: "Data Analytics",
    Image:DataAnalytics,
    
  },
  {
    Name: "Full stack Development",
    Image: fullstack,
  },
  {
    Name: "Hacknfinity",
    Image: hacknfinity,
   },
    {
    Name: "Incodevision internship",
    Image:incodevision,
   },
    {
    Name: "Cousera",
    Image: cousera,
   },
    {
    Name: "IEEE innerve hackathon",
    Image: ieee_innerve,
   }
   
  
];

const fadeInAnimationSkills = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (id) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 * id,
    },
  }),
};

const Certificate = () => {
  const [isHovered, setIsHovered] = useState(0);
  return (
    <Element name="Certificate" id="Certificate">
      <SectionHeader heading="Certificates" />
      <div id="AllCertificates">
        {CertificateArr.map((curr, ids, arr) => {
          // console.log(ids)
          return (
            <motion.div
              id="certificates"
              key={ids}
              // style={ids < Math.floor(arr.length % 2) ? {scrollSnapAlign:"start"}:{scrollSnapAlign:"end"}}
              className={ids === isHovered ? "IsHovered" : ""}
              onMouseEnter={() => setIsHovered(ids)}
              variants={fadeInAnimationSkills}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={ids}
            >
              <img
                src={curr.Image}
                alt="Certificate"
                // onClick={() => window.open(curr.Link, "_blank")}
              />
            </motion.div>
          );
        })}
      </div>
    </Element>
  );
};

export default Certificate;
