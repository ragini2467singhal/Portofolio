import Instagram from "../Assets/Instagram (2).png";
import LeetCode from "../Assets/LeetCode (2).png";
import Github from "../Assets/Github2.png";
import Twitter from "../Assets/Twitter.png";
import Linkedin from "../Assets/LinkedIn (2).png";

import { Link } from "react-scroll";

const footerData = [
  { text: "Home", keyword: "FrontPage" },
  { text: "Skills", keyword: "Skills" },
  { text: "Projects", keyword: "Projects" },
  { text: "Cerificates", keyword: "Certificate" },
  { text: "Contact", keyword: "Contact" },
];

const Footer = ({ activeNavbar }) => {
  return (
    <section id="Footer">
      <div id="SocialMedia">
        <div id="SocialMedia1">
          <h1>Follow me</h1>
          <h2>...................................................</h2>
        </div>
        <div id="SocialLOGO">
          <div>
            <a
              href="https://leetcode.com/u/ragini_2467/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LeetCode} alt="Social Logo" />
            </a>
            <a
              href="https://github.com/ragini2467singhal"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="Social Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/ragini-singhal-a74a14376"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Social Logo" />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/ragini2467_?obrf=anQxMDBhcHhncjZs"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Instagram} alt="Social Logo" />
            </a>
            <a
              href="https://x.com/RaginiSing7722"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="Social Logo" />
            </a>
          </div>
        </div>
      </div>
      <footer>
        <h2>Ragini Singhal</h2>
        <ul>
          {footerData.map((curr, id) => {
            return (
              <Link
                key={id}
                activeClass="active"
                to={curr.keyword}
                spy={true}
                smooth={true}
              >
                <li>{curr.text}</li>
              </Link>
            );
          })}
        </ul>
      </footer>
      <div id="rightsFooter">
        <p>@2026 Ragini Singhal</p>
        <p>All right reserved</p>
        <p>Privacy Policy</p>
      </div>
    </section>
  );
};

export default Footer;
