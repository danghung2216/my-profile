import { Fragment, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

import "./Sass/styles.scss";
import IMG_BG from "./assets/image-bg.jpg";
import AVATAR from "./assets/avatar.jpg";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { FaAngleDown, FaArrowRightToBracket } from "react-icons/fa6";
import { BsGearWideConnected } from "react-icons/bs";
import I_HTML from "./assets/HTML.png";
import I_CSS from "./assets/CSS.png";
import I_JS from "./assets/js.png";
import I_MUI from "./assets/png-transparent-material-ui-hd-logo.png";
import I_TAILWIND from "./assets/png-transparent-tailwind-css-hd-logo.png";
import I_SASS from "./assets/SASS.png";
import I_REACT from "./assets/react.png";
import I_TS from "./assets/ts.png";
import I_BOOTSTRAP from "./assets/BOOTSTRAP.png";
import { GiSkills } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import { RiPresentationFill } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";

function App() {
  const [isOpen, setIsOpen] = useState({
    pertional: true,
    education: false,
    projects: false,
    techStack: false,
    skills: false,
  }); // State object to track open/closed sections

  const handleClick = (section: any) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section], // Toggle state for clicked section
    }));
  };
  return (
    <Fragment>
      <div className="container-profile">
        <div className="im-bg-profile">
          <img src={IMG_BG} alt="background" />
          <div className="avatar-profile">
            <img src={AVATAR} alt="avatar" />
          </div>
        </div>
        <div className="wrap-infor">
          <div className="name">
            <h1>Nguyễn Đăng Hưng</h1>
          </div>
          <div className="title" onClick={() => handleClick("pertional")}>
            <p className="flex items-center">
              <span className="pr-2">
                <BsFillInfoCircleFill />
              </span>
              Thông tin cơ bản:
            </p>
            <p>{isOpen.pertional ? <FaAngleDown /> : <FaAngleRight />}</p>
          </div>
          {isOpen.pertional && (
            <div className="pertional-infor">
              <p>Ngày sinh: 17/06/1999</p>
              <p>Quê quán: Sóc Sơn - Hà Nội</p>
              <p>
                Số Điện Thoại: <a href="tel:+84966182216">0966182216</a>
              </p>
            </div>
          )}
          {/* education */}
          <div
            className="title education"
            onClick={() => handleClick("education")}
          >
            <p className="flex items-center">
              <span className="pr-2">
                <IoSchool />
              </span>
              Học Vấn:
            </p>
            <p>{isOpen.education ? <FaAngleDown /> : <FaAngleRight />}</p>
          </div>
          {isOpen.education && (
            <div className="education-infor flex items-center justify-around">
              <div className="fpt">
                <p>FPT SOFTWARE ACADEMY</p>
                <p>The Pertional React Developer</p>
                <p>11/2023 - 05/2024</p>
              </div>
              <div className="haui">
                <p>Đại học Công Ngiệp Hà Nội</p>
                <p>Công Nghệ Kỹ Thuật Cơ Khí</p>
                <p>2017 - 05/2022</p>
              </div>
            </div>
          )}
          {/* Projects */}
          <div className="title" onClick={() => handleClick("projects")}>
            <p className="flex items-center">
              <span className="pr-2">
                <GoProjectRoadmap />
              </span>
              Projects:
            </p>
            <p>{isOpen.projects ? <FaAngleDown /> : <FaAngleRight />}</p>
          </div>
          {isOpen.projects && (
            <div className="wrap-project">
              <div className="projects-infor">
                <a
                  href="https://github.com/annann2812/Mock-Project_1.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6"
                >
                  LOOP SHOPPING <FaArrowRightToBracket />
                </a>
              </div>

              <div className="projects-infor">
                <a
                  href="https://github.com/danghung2216/React-Film-F10.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6"
                >
                  WEB PHIM F10 <FaArrowRightToBracket />
                </a>
                <p className="px-6">
                  Link Demo: https://danghung2216.github.io/React-Film-F10/
                </p>
              </div>
              <div className="projects-infor">
                <a
                  href="https://github.com/danghung2216/React-Drawing.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6"
                >
                  DRAWING WEB APP <FaArrowRightToBracket />
                </a>
                <p className="px-6">
                  Link Demo:{" "}
                  <a
                    href="https://danghung2216.github.io/React-Drawing/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://danghung2216.github.io/React-Drawing/
                  </a>
                </p>
              </div>
              <div className="projects-infor">
                <a
                  href="https://github.com/danghung2216/weather-app-react.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6"
                >
                  WEATHER WEB APP <FaArrowRightToBracket />
                </a>
                <p className="px-6">
                  Link Demo:{" "}
                  <a
                    href="https://danghung2216.github.io/weather-app-react/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://danghung2216.github.io/weather-app-react/
                  </a>
                </p>
              </div>
            </div>
          )}
          {/* tech stack */}
          <div className="title" onClick={() => handleClick("techStack")}>
            <p className="flex items-center">
              <span className="pr-2">
                <BsGearWideConnected />
              </span>
              CÔNG NGHỆ:
            </p>
            <p>{isOpen.techStack ? <FaAngleDown /> : <FaAngleRight />}</p>
          </div>
          {isOpen.techStack && (
            <div className="tech-infor flex-col">
              <p className="text-center text-3xl font-bold mb-2">Front-End</p>
              <div className="frontend">
                <div className="tech-img">
                  <img src={I_REACT} alt="react" />
                  <p>React</p>
                </div>
                <div className="tech-img">
                  <img src={I_HTML} alt="html" />
                  <p>HTML</p>
                </div>
                <div className="tech-img">
                  <img src={I_TS} alt="typescript" />
                  <p>TypeScript</p>
                </div>

                <div className="tech-img">
                  <img src={I_CSS} alt="css" />
                  <p>CSS</p>
                </div>
                <div className="tech-img">
                  <img src={I_JS} alt="javascript" />
                  <p>JavaScript</p>
                </div>
                <div className="tech-img">
                  <img src={I_MUI} alt="material-ui" />
                  <p>Material-UI</p>
                </div>
                <div className="tech-img">
                  <img src={I_TAILWIND} alt="tailwind-css" />
                  <p>Tailwind CSS</p>
                </div>
                <div className="tech-img">
                  <img src={I_SASS} alt="sass" />
                  <p>SASS</p>
                </div>
                <div className="tech-img">
                  <img src={I_BOOTSTRAP} alt="bootstrap" />
                  <p>Bootstrap</p>
                </div>
              </div>
              <p className="text-center text-gray-500 my-2">Loading....</p>
              <p className="text-center text-3xl font-bold mb-2">Back-End</p>
              <p className="text-center  text-gray-500 my-2">Loading...</p>
            </div>
          )}
          <div className="title" onClick={() => handleClick("skills")}>
            <p className="flex items-center">
              <span className="pr-2">
                <GiSkills />
              </span>
              Kỹ Năng:
            </p>
            <p>{isOpen.skills ? <FaAngleDown /> : <FaAngleRight />}</p>
          </div>
          {isOpen.skills && (
            <div className="skill-infor">
              <p className="flex items-center">
                <span className="pr-2">
                  <MdGroups2 />
                </span>
                Làm việc nhóm.
              </p>
              <p className="flex items-center">
                <span className="pr-2">
                  <RiPresentationFill />
                </span>
                Thuyết trình - Đàm Phán
              </p>
              <p className="flex items-center">
                <span className="pr-2">
                  <LiaEditSolid />
                </span>
                Giải quyết vấn đề
              </p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
