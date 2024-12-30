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
          {/* <ScrollAnimation animateIn="fadeInUp"> */}
            <h2>Hi, I'm Noam. Nice to meet you.</h2>
          {/* </ScrollAnimation> */}
          {/* <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}> */}
            <p>
              I'm a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
            </p>
          {/* </ScrollAnimation> */}
          {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}> */}
            <p>
              But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify, making it easy for my clients to take control of their own websites and keep them up to date.</p>
          {/* </ScrollAnimation> */}
          {/* <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> */}
            <p>
              So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!</p>
          {/* </ScrollAnimation> */}
        </div>
      </div>
      
      <div className="skills-wrapper">
        <div className="about-skills">
          <div className="column">
            {/* icon */}
            <h3>Front-End Developer</h3>
              <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            <h4>My Languages:</h4>
              <p>HTML, CSS, Sass, TypeScript</p>
            <h4>Dev Tools:</h4>
            <ul>
              <li>Bootstrap</li>
              <li>Github</li>
              <li>React</li>
              <li>Tailwind CSS</li>
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
            <h3>Related Experience</h3>
              <p>Beyond front-end and design, I have experience in software development, data science, and teaching CS</p>
            <h4>Other Languages:</h4>
              <p>Python, Java, SQL, R </p>
            <h4>Frameworks, Libraries, Softwares:</h4>
            <ul>
              <li>Express.js</li>
              <li>Flask</li>
              <li>Git</li>
              <li>MongoDB</li>
              <li>Node.js</li>
              <li>pandas</li>
              <li>REST/SOAP APIs</li>
            </ul>
          </div>

        </div>
      </div>
      
    </Container>
  )
}
