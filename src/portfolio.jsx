import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code2, Sparkles, Briefcase, GraduationCap, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data - Replace with your own information
  const projects = [
    {
      title: "Smart Expense Tracker",
      description: "A full-stack personal finance tracker with budget alerts and interactive analytics. Features real-time expense tracking, category-based budgeting, and visual spending patterns. Improved mobile responsiveness to 100% and reduced page rendering time by ~25%.",
      tech: ["React", "JavaScript", "CSS", "Vite"],
      github: "https://github.com/FaisalMubeen2001/smart-expense-tracker",
      live: "https://smart-expense-tracker-personal.netlify.app/",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop"
    },
    {
      title: "Movie List App",
      description: "A React-based movie discovery application allowing users to search through 500+ movies and mark favorites. Optimized performance with Vite build tool, reducing load time by ~40% compared to traditional CRA setup. Features 5+ reusable React components for scalability and clean code structure.",
      tech: ["React", "JavaScript", "HTML", "CSS", "API"],
      github: "https://github.com/FaisalMubeen2001/movie-list-app",
      live: "https://movielistjsx.netlify.app/",
      image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&h=500&fit=crop"
    },
    {
      title: "Football Player Match Rating Predictor",
      description: "A machine learning system comparing 5 regression algorithms to predict player rating performance. Models evaluated based on R², RMSE, and MAE scores to determine the best-fit model. Technologies used include Python, scikit-learn, pandas, numpy, matplotlib, and seaborn.",
      tech: ["Python", "Machine Learning", "scikit-learn", "pandas", "numpy", "matplotlib"],
      github: "https://github.com/FaisalMubeen2001/football-rating-predictor",
      live: null,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop"
    },
  ];

  const skills = {
    "ServiceNow & ITSM": ["ServiceNow CSA", "ITSM", "Flow Designer", "User Administration", "Incident Management", "Knowledge Base"],
    "Frontend Development": ["React", "JavaScript", "HTML", "CSS", "Vite", "Responsive Design"],
    "Backend & Database": ["Python", "Flask", "Node.js", "MySQL", "REST APIs", "SQL"],
    "Cloud, AWS & ML/AI": ["AWS EC2", "AWS S3", "CloudFormation", "AWS Lex", "AWS Comprehend", "numpy", "matplotlib", "seaborn", "Data Analysis"],
    "Programming Languages": ["Python", "JavaScript", "Java", "C++", "C"],
    "Tools & Platforms": ["Git", "VS Code", "Jupyter Notebook", "Agile/Scrum", "ServiceNow Platform"]
  };

  const experiences = [
  {
    role: "Trainee Associate",
    company: "TechnoGen India, Hyderabad",
    period: "May 2025 - Present",
    description: "Currently a TL of a 5-member ServiceNow Team. \nServiceNow Administration: Configured platform modules and managed user administration, groups and roles.\nFull-stack Development: Developed web applications using React & JS, reducing load times by 40%.\nCloud Architecture: Built hands-on projects demonstrating scalable frontend and AWS-based architecture.\nAgile Collaboration: Delivered full-stack modules within sprint timelines in a 3-member team."
  }
  // Add more experiences here if needed
  // {
  //   role: "Your Previous Role",
  //   company: "Company Name",
  //   period: "Start - End",
  //   description: "What you did..."
  // }
];

  return (
    <div className="portfolio-container">
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <Code2 size={24} />
            <span>Faisal Mubeen</span>
          </div>
          <div className="nav-links">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>TechnoGen India Pvt. Ltd.</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Faisal</span>
          </h1>
          <h2 className="hero-subtitle">Trainee Associate - ServiceNow</h2>
          <p className="hero-description">
            Certified ServiceNow System Administrator (CSA) and Trainee Associate with a strong background in full-stack development, cloud technologies, and machine learning. Experienced in building scalable web applications with React and AWS, and skilled in Python and JavaScript. Proven track record of optimizing performance and collaborating in Agile environments to deliver high-quality technical solutions.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              Get In Touch
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com/FaisalMubeen2001" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/faisal-mubeen-984b681bb/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:faisalmubeen2001@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Trainee Associate who values clarity, discipline, and continuous improvement. I'm naturally analytical and prefer depth over noise, whether that's in my work, the way I learn, or how I spend my time. I'm comfortable working independently, taking ownership of tasks, and figuring things out without needing constant direction.
              </p>
              <p>
                Outside of work, I closely follow football and cricket, with a growing interest in tennis and Formula 1. These aren't just casual interests, they reflect how I think: strategy, performance under pressure, and marginal gains matter to me. I also spend time watching English-language films and TV shows and listening to music, as these help me in relaxing.
              </p>
              <p>
                I'm intentionally building my skill set and professional identity step by step. I don't chase shortcuts or surface-level success because I want to focus on learning properly, executing well, and becoming better than I was yesterday.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">9</div>
                  <div className="stat-label">Months Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Technologies Used</div>
                </div>
              </div>
              <a 
  href="/Faisal_Mubeen_Resume.pdf" 
  download="Faisal_Mubeen_Resume.pdf"
  className="btn-download"
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <Download size={18} />
  Download Resume
</a>
            </div>
            <div className="about-image">
              <div className="image-frame">
                <img
                  src="/images/1900540100069-new.jpg"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, techs], index) => (
              <div key={category} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-tags">
                  {techs.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
            <div className="section-line"></div>
          </div>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <div className="timeline-period">{exp.period}</div>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Let's Work Together</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-content">
            <p className="contact-description">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-methods">
              <a href="mailto:faisalmubeen2001@gmail.com" className="contact-card">
                <Mail size={32} />
                <h3>Email Me</h3>
                <p>faisalmubeen2001@gmail.com</p>
              </a>
              <a href="https://www.linkedin.com/in/faisal-mubeen-984b681bb/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <Linkedin size={32} />
                <h3>LinkedIn</h3>
                <p>Connect with me</p>
              </a>
              <a href="https://github.com/FaisalMubeen2001" target="_blank" rel="noopener noreferrer" className="contact-card">
                <Github size={32} />
                <h3>GitHub</h3>
                <p>Check out my project codes</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Designed & Built by Faisal</p>
          <p className="footer-year">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-container {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0a0a0f;
          color: #e4e4e7;
          overflow-x: hidden;
          cursor: none;
        }

        /* Custom Cursor */
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid #7c3aed;
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: none;
          mix-blend-mode: difference;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .nav.scrolled {
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);
          padding: 1rem 0;
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: #7c3aed;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          background: none;
          border: none;
          color: #a1a1aa;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #a855f7);
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #e4e4e7;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s infinite ease-in-out;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #7c3aed, transparent);
          top: -200px;
          left: -200px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #a855f7, transparent);
          bottom: -150px;
          right: -150px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #6366f1, transparent);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(100px, -100px) scale(1.1); }
          66% { transform: translate(-100px, 100px) scale(0.9); }
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          z-index: 1;
          text-align: center;
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 2rem;
          color: #a855f7;
          font-size: 0.875rem;
          margin-bottom: 2rem;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #e4e4e7, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight {
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          color: #a1a1aa;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.125rem;
          color: #71717a;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
        }

        .btn-secondary {
          padding: 1rem 2rem;
          background: transparent;
          color: #e4e4e7;
          border: 2px solid #7c3aed;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .btn-secondary:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a855f7;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-link:hover {
          background: #7c3aed;
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
        }

        /* Section Styles */
        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #e4e4e7, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-line {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #7c3aed, #a855f7);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* About Section */
        .about-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #14141f 100%);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #a1a1aa;
          margin-bottom: 1.5rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat {
          text-align: center;
          padding: 1.5rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .stat:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #a1a1aa;
          font-size: 0.875rem;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          margin-top: 1rem;
        }

        .btn-download:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
        }

        .about-image {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        .image-frame {
  width: 400px;
  height: 400px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(124, 58, 237, 0.3);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.3);
}

.image-frame::before {
  content: '';
  position: absolute;
  inset: -3px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), transparent);
  z-index: -1;
  border-radius: 2rem;
}

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-frame:hover img {
          transform: scale(1.05);
        }

        /* Skills Section */
        .skills-section {
          background: #0a0a0f;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          padding: 2rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .skill-category:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
        }

        .skill-category-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #e4e4e7;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 0.5rem;
          color: #a855f7;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: #7c3aed;
          color: white;
          transform: translateY(-2px);
        }

        /* Projects Section */
        .projects-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #14141f 100%);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 15, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #7c3aed;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: #a855f7;
          transform: scale(1.1);
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e4e4e7;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #a1a1aa;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          padding: 0.375rem 0.75rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 0.375rem;
          color: #a855f7;
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* Experience Section */
        .experience-section {
          background: #0a0a0f;
        }

        .timeline {
          position: relative;
          padding-left: 3rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #7c3aed, #a855f7);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -3.5rem;
          top: 0;
          width: 16px;
          height: 16px;
          background: #7c3aed;
          border: 4px solid #0a0a0f;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.2);
        }

        .timeline-content {
          padding: 2rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateX(10px);
        }

        .timeline-icon {
          display: inline-flex;
          padding: 0.75rem;
          background: rgba(124, 58, 237, 0.2);
          border-radius: 0.5rem;
          color: #a855f7;
          margin-bottom: 1rem;
        }

        .timeline-role {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e4e4e7;
          margin-bottom: 0.5rem;
        }

        .timeline-company {
          font-size: 1.125rem;
          color: #a855f7;
          margin-bottom: 0.5rem;
        }

        .timeline-period {
          color: #71717a;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .timeline-description {
  color: #a1a1aa;
  line-height: 1.6;
  white-space: pre-line;
}

        /* Contact Section */
        .contact-section {
          background: linear-gradient(180deg, #14141f 0%, #0a0a0f 100%);
        }

        .contact-content {
          text-align: center;
        }

        .contact-description {
          font-size: 1.25rem;
          color: #a1a1aa;
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.8;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-card {
          padding: 3rem 2rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          text-align: center;
          color: inherit;
          text-decoration: none;
        }

        .contact-card:hover {
          background: rgba(124, 58, 237, 0.1);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
        }

        .contact-card svg {
          color: #a855f7;
          margin-bottom: 1.5rem;
        }

        .contact-card h3 {
          font-size: 1.5rem;
          color: #e4e4e7;
          margin-bottom: 0.5rem;
        }

        .contact-card p {
          color: #a1a1aa;
          font-size: 1rem;
        }

        /* Footer */
        .footer {
          background: #0a0a0f;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          padding: 2rem;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
          color: #71717a;
        }

        .footer-content p {
          margin-bottom: 0.5rem;
        }

        .footer-year {
          font-size: 0.875rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .image-frame {
            width: 100%;
            max-width: 400px;
          }

          .nav-links {
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .timeline {
            padding-left: 2rem;
          }

          .timeline-dot {
            left: -2.5rem;
          }

          .custom-cursor {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-container {
            padding: 4rem 1rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;