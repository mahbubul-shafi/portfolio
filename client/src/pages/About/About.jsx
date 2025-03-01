import './About.css'
import about_pic from '../../assets/images/about-pic.jpg'
export const About = () => {
  return (
    <div className="about" id="about">
        <div className="about-box">
            <div className="about-left">
                <img src={about_pic} alt="" />
            </div>
            <div className="about-right">
              <h1>About Me</h1>
              <p>I am a fresh graduate in CSE from RUET, with strong skills in the MERN stack. I have hands-on experience in both frontend and backend development, and I enjoy solving problems. A quick learner, I adapt easily to new technologies and thrive in fast-paced environments. I'm passionate about building efficient, scalable solutions and eager to contribute to impactful projects.</p>
            </div>
        </div>
    </div>
  )
}
