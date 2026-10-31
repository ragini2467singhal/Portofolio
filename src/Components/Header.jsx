/**import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import HeaderImage1 from "../Assets/Certificate.png";
import HeaderImage2 from "../Assets/Contact.png";
import HeaderImage3 from "../Assets/Group of Projects (2).png";
import HeaderImage4 from "../Assets/Home (2).png";
import HeaderImage5 from "../Assets/More Info.png";
import HeaderImage6 from "../Assets/Resume.png";
import RSLogo from "../Assets/RSLogo.png";
import FrontRaginiDP from "../Assets/FrontRaginiDP.png";
import { motion } from "framer-motion";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

const variants = {
  open: {
    clipPath: "circle(120vh at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
  close: {
    clipPath: "circle(20px at 45px 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variantsMenu = {
  open: {
    clipPath: "circle(100vh at 40px 40px)",
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const menuData = [
  { text: "Home", img: HeaderImage4, keyword: "FrontPage" },
  { text: "Skills", img: HeaderImage6, keyword: "Skills" },
  { text: "Projects", img: HeaderImage3, keyword: "Projects" },
  { text: "Cerificates", img: HeaderImage1, keyword: "Certificate" },
  { text: "Contact", img: HeaderImage2, keyword: "Contact" },
];

const headerData = [
  { text: "Home", img: HeaderImage4, keyword: "FrontPage" },
  { text: "Skills", img: HeaderImage6, keyword: "Skills" },
  { text: "Projects", img: HeaderImage3, keyword: "Projects" },
  { text: "Contact", img: HeaderImage2, keyword: "Contact" },
];

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const handleNavbar = () => {
    window.scrollY >= 100
      ? (document.getElementById("OnscrollHeader").style.top = "0")
      : (document.getElementById("OnscrollHeader").style.top = "-150px");
  };

  window.addEventListener("scroll", handleNavbar);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  const scrollMore = () => {
    scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
  };

  // const handleSetActive = (to) => {
  // setDisplayMenu(false);
  // };

  return (
    <header>
      <motion.div className="sidebar" animate={displayMenu ? "open" : "close"}>
        <motion.div className="bg" variants={variants}>
          <motion.div className="links" variants={variantsMenu}>
            <div id="headerMY_DP">
              <img src={FrontRaginiDP} alt="DP" id="MY_DP" />
              <h3>Ms. Ragini  Singhal</h3>
            </div>

            {menuData.map((curr, id) => {
              return (
                <motion.div variants={itemVariants} key={id}>
                  <Link
                    activeClass="active"
                    to={curr.keyword}
                    spy={true}
                    smooth={true}
                    // offset={50}
                    // duration={500}
                    // onSetActive={handleSetActive}
                    onClick={() => setDisplayMenu(false)}
                  >
                    <img src={curr.img} alt="HeaderImage" /> {curr.text}
                  </Link>
                </motion.div>
              );
            })}
            <button id="resumeBTN">
              <a
                href="https://drive.google.com/file/d/170t40CWF0c0pLFkfXWJmqu7MMjPYWeO6/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </button>
          </motion.div>
        </motion.div>

        <button
          onClick={() => setDisplayMenu(!displayMenu)}
          className="menuHandleBtn"
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              variants={{
                close: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                close: { opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              variants={{
                close: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </motion.div>

      <ul>
        {headerData.map((curr, id) => {
          return (
            <Link
              key={id}
              activeClass="active"
              to={curr.keyword}
              spy={true}
              smooth={true}
              onClick={() => setDisplayMenu(false)}
            >
              <li>
                {curr.text}
              </li>
            </Link>
          );
        })}
        <li>
          <a
            href="https://drive.google.com/file/d/170t40CWF0c0pLFkfXWJmqu7MMjPYWeO6/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
          </a>
        </li>
      </ul>
<div id="OnscrollHeader">
  <a href="#FrontPage">
    <img
      src={RSLogo}
      alt="Ragini Singhal Logo"
      style={{
        width: "150px",
        height: "auto",
        display: "block",
      }}
    />
  </a>

  <ul>
    {headerData.map((curr, id) => {
      return (
        <Link
          key={id}
          activeClass="active"
          to={curr.keyword}
          spy={true}
          smooth={true}
          onClick={() => setDisplayMenu(false)}
        >
          <li>{curr.text}</li>
        </Link>
      );
    })}

    <li>
      <a href="#" target="_blank" rel="noreferrer">
        RESUME
      </a>
    </li>
  </ul>
</div>

export default Header;
**/
import React, { useState } from "react";
import HeaderImage1 from "../Assets/Certificate.png";
import HeaderImage2 from "../Assets/Contact.png";
import HeaderImage3 from "../Assets/Group of Projects (2).png";
import HeaderImage4 from "../Assets/Home (2).png";
import HeaderImage6 from "../Assets/Resume.png";
import RSLogo from "../Assets/RSLogo.png";
import FrontRaginiDP from "../Assets/FrontRaginiDP.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    clipPath: "circle(120vh at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
  close: {
    clipPath: "circle(20px at 45px 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variantsMenu = {
  open: {
    clipPath: "circle(100vh at 40px 40px)",
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const menuData = [
  {
    text: "Home",
    img: HeaderImage4,
    keyword: "FrontPage",
  },
  {
    text: "Skills",
    img: HeaderImage6,
    keyword: "Skills",
  },
  {
    text: "Projects",
    img: HeaderImage3,
    keyword: "Projects",
  },
  {
    text: "Certificates",
    img: HeaderImage1,
    keyword: "Certificate",
  },
  {
    text: "Contact",
    img: HeaderImage2,
    keyword: "Contact",
  },
];

const headerData = [
  {
    text: "Home",
    img: HeaderImage4,
    keyword: "FrontPage",
  },
  {
    text: "Skills",
    img: HeaderImage6,
    keyword: "Skills",
  },
  {
    text: "Projects",
    img: HeaderImage3,
    keyword: "Projects",
  },
  {
    text: "Contact",
    img: HeaderImage2,
    keyword: "Contact",
  },
];

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleNavbar = () => {
    const navbar = document.getElementById("OnscrollHeader");

    if (navbar) {
      if (window.scrollY >= 100) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-150px";
      }
    }
  };

  window.onscroll = handleNavbar;

  return (
    <header>

      {/* ================= SIDEBAR / MOBILE MENU ================= */}
      <motion.div
        className="sidebar"
        animate={displayMenu ? "open" : "close"}
      >
        <motion.div className="bg" variants={variants}>
          <motion.div className="links" variants={variantsMenu}>

            {/* PROFILE */}
            <div id="headerMY_DP">
              <img
                src={FrontRaginiDP}
                alt="Ragini Singhal"
                id="MY_DP"
              />

              <h3>Ms. Ragini Singhal</h3>
            </div>

            {/* MENU ITEMS */}
            {menuData.map((curr, id) => {
              return (
                <motion.div
                  variants={itemVariants}
                  key={id}
                >
                  <Link
                    activeClass="active"
                    to={curr.keyword}
                    spy={true}
                    smooth={true}
                    onClick={() => setDisplayMenu(false)}
                  >
                    <img
                      src={curr.img}
                      alt={curr.text}
                    />

                    {curr.text}
                  </Link>
                </motion.div>
              );
            })}

            {/* RESUME */}
            <button id="resumeBTN">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </button>

          </motion.div>
        </motion.div>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setDisplayMenu(!displayMenu)}
          className="menuHandleBtn"
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
          >
            <motion.path
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              variants={{
                close: {
                  d: "M 2 2.5 L 20 2.5",
                },
                open: {
                  d: "M 3 16.5 L 17 2.5",
                },
              }}
            />

            <motion.path
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                close: {
                  opacity: 1,
                },
                open: {
                  opacity: 0,
                },
              }}
            />

            <motion.path
              strokeWidth="3"
              stroke="white"
              strokeLinecap="round"
              variants={{
                close: {
                  d: "M 2 16.346 L 20 16.346",
                },
                open: {
                  d: "M 3 2.5 L 17 16.346",
                },
              }}
            />
          </svg>
        </button>

      </motion.div>


      {/* ================= MAIN HEADER ================= */}

      <ul>
        {headerData.map((curr, id) => {
          return (
            <Link
              key={id}
              activeClass="active"
              to={curr.keyword}
              spy={true}
              smooth={true}
              onClick={() => setDisplayMenu(false)}
            >
              <li>
                {curr.text}
              </li>
            </Link>
          );
        })}

        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
          </a>
        </li>
      </ul>


      {/* ================= SCROLL HEADER ================= */}

      <div id="OnscrollHeader">

        {/* LOGO */}
        <a
          href="#FrontPage"
          className="myLogo"
        >
          <img
            src={RSLogo}
            alt="Ragini Singhal Logo"
            style={{
                    width: "200px",
                    height: "auto",
                    display: "block",}}
          />
        </a>


        {/* SCROLL NAVIGATION */}
        <ul>
          {headerData.map((curr, id) => {
            return (
              <Link
                key={id}
                activeClass="active"
                to={curr.keyword}
                spy={true}
                smooth={true}
                onClick={() => setDisplayMenu(false)}
              >
                <li>
                  {curr.text}
                </li>
              </Link>
            );
          })}

          <li>
          <a href="https://drive.google.com/file/d/1LBIicbPUxcNj-MN7nJ1MogcpxniU67mz/" target='_blank' rel="noreferrer">
                        RESUME
            </a>
          </li>
        </ul>

      </div>

    </header>
  );
};

export default Header;