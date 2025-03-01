import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import { Menus } from "./components/Menus/Menus";
import { ProfilePic } from "./components/ProfilePic/ProfilePic";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { TechStack } from "./pages/TechStack/TechStack";
import { Projects } from "./pages/Projects/Projects";
import { Education } from "./pages/Education/Education";
import { Contact } from "./pages/Contact/Contact";
function App() {
  return (
    <div className="app">
      <div className="app-left">
        <ProfilePic />
        <Menus />
      </div>
      <div className="app-right">
        <Home />
        <About />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </div>
      <ScrollToTop
        smooth
        style={{
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          paddingRight: "40px"
        }}
      />
    </div>
  );
}

export default App;
