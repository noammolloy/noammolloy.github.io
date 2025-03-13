import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.webp";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="background-wrapper">
        <div className="about-text">
          <h2>Hi, I'm Noam. Nice to meet you.</h2>

          <p>
            I'm a Frontend Developer with a passion for crafting engaging, user-friendly, and visually appealing web experiences. 
            With expertise in HTML, CSS, TypeScript, and React, I specialize in bringing designs to life while ensuring seamless functionality 
            and responsiveness across devices.
  
          </p>
          <p>
            If you're looking to elevate your digital presence with a focus on clean, modern, and interactive designs, let's connect and 
            create something amazing together!
          </p>
        </div>
      </div>
      
      <div className="skills-wrapper">
        <div className="about-skills">
          <div className="column">
            {/* icon */}
            <h3>Frontend Developer</h3>
              <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h4>My Languages:</h4>
              <p>HTML, SCSS, TypeScript</p>
            <h4>Frameworks & Dev Tools:</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Component Libraries</li>
              <li>JQuery</li>
              <li>Github</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div className="column">
            {/* icon */}
            <h3>Designer</h3>
             <p>I value simple content structure, clean design patterns, and thoughtful interactions</p>
            <h4>What I design:</h4>
              <p>UX, UI, Web, Apps, Logos</p>
            <h4>Design Tools:</h4>
            <ul>
              <li>Figma</li>
              <li>Pen & Paper</li>
              <li>Photoshop</li>
            </ul>
          </div>
          <div className="column">
            {/* icon */}
            <h3>All things coding</h3>
              <p>Beyond front-end and design, I have experience in software development, data science, and teaching CS</p>
            <h4>Other Languages:</h4>
              <p>Python, Java, SQL, R, Ruby on Rails</p>
            <h4>Frameworks, Libraries, Softwares:</h4>
            <ul>
              <li>Flask</li>
              <li>MongoDB</li>
              <li>pandas</li>
              <li>scikit-learn</li>
              <li>REST/SOAP APIs</li>
              <li>Jira</li>
              <li>Kanban</li>
              <li>Postman</li>
            </ul>
          </div>

        </div>
      </div>
      
    </Container>
  )
}
