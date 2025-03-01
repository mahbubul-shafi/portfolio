import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/M_Mahbubul_Alam.pdf'

export const Home = () => {
  return (
    <div className="home" id='home'>
      <h2>Hi 👋 I am a</h2>
      <h1>
      <Typewriter
        options={{
          strings: ["MERN stack developer !"],
          autoStart: true,
          loop: true,
        }}
      />
      </h1>
      <div className="btn">
        <button className="btn-hire">Hire Me</button>
        <a  href={Resume} download><button className="btn-resume">My Resume</button></a>
      </div>
    </div>
  );
};
