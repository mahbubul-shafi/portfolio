import './Projects.css'
import portfolio_image from '../../assets/images/portfolio.png'
import ecommerce_image from '../../assets/images/ecom.jpg'

export const Projects = () => {
  return (
    <div className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-items">
            <div className="project-item">
                <img src={ecommerce_image} alt="" />
                <ul>
                    <li>Node</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
                <p>Ecommerce website</p>
                <a href="https://github.com/mahbubul-shafi/e-commerce" target="_blank"><button>view code</button></a>
            </div>
            <div className="project-item">
                <img src={portfolio_image} alt="" />
                <ul>
                    <li>Node</li>
                    <li>React</li>
                </ul>
                <p>Portfolio</p>
                <a href="https://github.com/mahbubul-shafi/portfolio" target="_blank"><button>view code</button></a>
            </div>
        </div>
    </div>
  )
}
