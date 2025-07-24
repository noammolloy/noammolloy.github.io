import { Container } from "./styles";

export function About() {
  return (
    <Container id="about">
      <div className="background-wrapper">
        <div className="about-text">
          <h2>Hi, I'm Noam. Nice to meet you.</h2>

          <p>
            I'm a Software Engineer with a passion for crafting engaging, user-friendly, and visually appealing web experiences. 
            I specialize in bringing designs to life while ensuring seamless functionality 
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
            <h3>Frontend Developer</h3>
              <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
            <h4>Languages & Frameworks:</h4>
              <p>React, Angular, TypeScript, HTML, SCSS</p>
            <h4>Tools:</h4>
            <ul>
              <li>Tailwind CSS</li>
              <li>Redux</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Component Libraries</li>
            </ul>
          </div>

          <div className="column">
            <h3>Backend Developer</h3>
             <p>I build scalable, reliable backend systems with a focus on architecture and maintainability.</p>
            <h4>Languages & Frameworks:</h4>
              <p>Ruby on Rails, Springboot, Python, Java, SQL</p>
            <h4>Tools & Databases:</h4>
            <ul>
              <li>Redis</li>
              <li>Flask</li>
              <li>MongoDB</li>
              <li>Jira</li>
              <li>Postman</li>
            </ul>
          </div>

          <div className="column">
            <h3>Beyond Code</h3>
              <p>Beyond frontend and backend, I have experience in design, data science, and teaching CS</p>
            <h4>What I design:</h4>
              <p>UX, UI, Web, Apps, Logos</p>
            <h4>Design Tools:</h4>
            <ul>
              <li>Figma</li>
              <li>Pen & Paper</li>
              <li>Photoshop</li>
            </ul>
            <h4>Other Areas:</h4>
            <ul>
              <li>Data Analysis (R, Python, SQL)</li>
              <li>Teaching & Mentorship</li>
            </ul>
          </div>

        </div>
      </div>
      
    </Container>
  )
}
