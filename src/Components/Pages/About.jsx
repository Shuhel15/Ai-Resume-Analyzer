import { PiNumberSquareOneFill } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import { IoIosPaper } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import Use from "../UI/Use";
const About = () => {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>
          About <span>ResumeIQ</span>
        </h1>

        <p>
          ResumeIQ is an AI powered resume analyzer that helps job seekers
          improve their resumes, optimize keywords, and increase their chances
          of getting shortlisted by recruiters.
        </p>
      </section>

      <section className="about-features">

        <div className="about-card">
          <h2><IoIosPaper /> Resume Analysis</h2>
          <p>
            Our AI scans your resume and identifies mistakes, formatting
            issues, and missing sections that could affect your chances of
            getting an interview.
          </p>
        </div>

        <div className="about-card">
          <h2><FaSearch /> Keyword Optimization</h2>
          <p>
            ResumeIQ checks if your resume contains the right keywords used in
            job descriptions to pass ATS (Applicant Tracking Systems).
          </p>
        </div>

        <div className="about-card">
          <h2><FaBoltLightning /> Instant Suggestions</h2>
          <p>
            Get smart AI suggestions to improve your resume instantly and make
            it more professional and recruiter friendly.
          </p>
        </div>

      </section>

     <Use/>

    </div>
  );
};

export default About