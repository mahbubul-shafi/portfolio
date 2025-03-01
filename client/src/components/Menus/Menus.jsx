import "./Menus.css";
import {
  FcHome,
  FcBusinessman,
  FcCellPhone,
  FcAddDatabase,
  FcAndroidOs,
} from "react-icons/fc";
import { IoSchoolOutline } from "react-icons/io5";
import { Link } from "react-scroll";

export const Menus = () => {
  return (
    <div className="menus">
      <div className="items">
        {/*Link to home*/}
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="item">
            <div className="icon">
              <FcHome />
            </div>
            <div className="name">
              <p>Home</p>
            </div>
          </div>
        </Link>
        {/*Link for about*/}
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          <div className="item">
            <div className="icon">
              <FcBusinessman />
            </div>
            <div className="name">
              <p>About</p>
            </div>
          </div>
        </Link>

        {/*Link for techstack*/}
        <Link to="techstack" spy={true} smooth={true} offset={-100} duration={500}>
        <div className="item">
          <div className="icon">
            <FcAddDatabase />
          </div>
          <div className="name">
            <p>Tech Stack</p>
          </div>
        </div>
        </Link>
        {/*Link for projects*/}
        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>
        <div className="item">
          <div className="icon">
            <FcAndroidOs />
          </div>
          <div className="name">
            <p>Projects</p>
          </div>
        </div>
        </Link>
        {/*Link for education*/}
        <Link to="education" spy={true} smooth={true} offset={-100} duration={500}>
        <div className="item">
          <div className="icon">
            <IoSchoolOutline />
          </div>
          <div className="name">
            <p>Education</p>
          </div>
        </div>
        </Link>
        {/*Link for contact*/}
        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
        <div className="item">
          <div className="icon">
            <FcCellPhone />
          </div>
          <div className="name">
            <p>Contact</p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};
