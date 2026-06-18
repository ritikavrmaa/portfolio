import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>Ritika Verma</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#highlights">Highlights</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <h1>Ritika Verma</h1>
          <h2>Aspiring Software Engineer</h2>
          <p>Full-Stack Developer · IoT Enthusiast · AI/ML Learner</p>
          <p className="location">📍 Bengaluru, Karnataka</p>

          <div className="social-buttons">
            <a
              href="https://github.com/ritikavrmaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ritikavrma"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>

            <a
              href="/Ritika_Verma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="profile-circle">
          <span>RV</span>
        </div>
      </section>

      <section className="highlights" id="highlights">
        <h2>Quick Highlights</h2>

        <ul>
          <li>
            🎓 CSE IoT Student with CGPA 8.8 at Cambridge Institute of
            Technology
          </li>
          <li>
            🚀 Building practical projects in IoT, full-stack development, and
            automation
          </li>
          <li>
            🤖 Interested in AI/ML, Java DSA, REST APIs, and real-world software
            systems
          </li>
          <li>
            💧 Developed HydroSense, a smart water monitoring and motor cut-off
            system
          </li>
          <li>
            🚨 Created CrashGuard AI for accident detection and emergency SOS
            alerts
          </li>
        </ul>

        <a className="main-btn" href="#projects">
          See My Projects
        </a>
      </section>

      <section className="skills-section" id="skills">
        <h2>Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build practical projects:
        </p>

        <div className="skills-grid">
          <span>Java</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Firebase</span>
          <span>REST APIs</span>
          <span>IoT</span>
          <span>ESP32</span>
          <span>Artificial Intelligence</span>
          <span>Machine Learning</span>
          <span>Data Structures</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>AWS IoT Core</span>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Some things I have built recently:</p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>AutoReach Automation</h3>

            <div className="tags">
              <span>Python</span>
              <span>REST APIs</span>
              <span>CSV</span>
              <span>Automation</span>
            </div>

            <p>
              A CLI-based cold outreach automation pipeline that converts one
              company domain into similar companies, decision-maker contacts,
              verified emails, and CSV-ready prospect records.
            </p>

            <p className="tech">
              <b>Tech Stack:</b> Python, REST APIs, CSV, Email Automation
            </p>

            <div className="card-buttons">
              <a
                href="https://github.com/ritikavrmaa/outreach-automation"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>HydroSense</h3>

            <div className="tags">
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>React</span>
              <span>IoT</span>
            </div>

            <p>
              An IoT-based smart underground water management system with
              real-time monitoring, daily usage limits, alerts, and automatic
              motor control.
            </p>

            <p className="tech">
              <b>Tech Stack:</b> ESP32, Node.js, React, WebSocket, IoT
            </p>

            <div className="card-buttons">
              <a
                href="https://github.com/ritikavrmaa/hydrosense-underground-water-management"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>CrashGuard AI</h3>

            <div className="tags">
              <span>React</span>
              <span>Firebase</span>
              <span>Node.js</span>
              <span>Telegram API</span>
            </div>

            <p>
              An AI-based emergency response system that detects accident
              scenarios, captures GPS location, sends SOS alerts, and helps
              hospitals view emergency cases through a dashboard.
            </p>

            <p className="tech">
              <b>Tech Stack:</b> React, Node.js, Firebase, Telegram API
            </p>

            <div className="card-buttons">
              <a
                href="https://github.com/ritikavrmaa/crashguard-ai-emergency-response"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Smart Campus</h3>

            <div className="tags">
              <span>IoT</span>
              <span>Dashboard</span>
              <span>Automation</span>
              <span>Under Development</span>
            </div>

            <p>
              An IoT-based smart campus solution designed to improve monitoring,
              automation, and real-time access to important campus data using
              connected devices.
            </p>

            <p className="tech">
              <b>Status:</b> Under Development
            </p>

            <p className="tech">
              <b>Tech Stack:</b> IoT, Web Dashboard, Automation
            </p>
          </div>

          <div className="project-card">
            <h3>SafeZone AI</h3>

            <div className="tags">
              <span>Arduino</span>
              <span>NodeMCU</span>
              <span>Firebase</span>
              <span>IoT</span>
            </div>

            <p>
              A blind-spot accident prevention system for construction vehicles
              that detects worker proximity using sensors, gives real-time
              safety alerts, and logs critical accident data.
            </p>

            <p className="tech">
              <b>Tech Stack:</b> Arduino, NodeMCU, Sensors, Firebase, Dashboard
            </p>

            <div className="card-buttons">
              <a
                href="https://github.com/ritikavrmaa/safezone-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>

        <a className="main-btn" href="#contact">
          Contact Me
        </a>
      </section>

      <section className="contact" id="contact">
        <h2>Let's Connect</h2>
        <p>
          Looking to collaborate, discuss tech ideas, or hire for an internship?
          I would love to connect.
        </p>

        <div className="contact-buttons">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vritika042@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a>

          <a
            href="https://github.com/ritikavrmaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ritikavrma"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="/Ritika_Verma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Ritika Verma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;