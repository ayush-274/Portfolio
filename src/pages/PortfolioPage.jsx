import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { skillGroups } from "../data/skills.js";
import { experience } from "../data/experience.js";
import { projects } from "../data/projects.js";
import { research } from "../data/research.js";
import { certifications, education } from "../data/credentials.js";

import "./PortfolioPage.css";

const resumes = [
  { label: "AI & Machine Learning", file: "AI&ML_Resume_Ayush_Agarwal.pdf", code: "01" },
  { label: "Data Analyst", file: "DA_Resume_Ayush_Agarwal.pdf", code: "02" },
  { label: "Data Engineer", file: "DE_Resume_Ayush_Agarwal.pdf", code: "03" },
  { label: "Data Scientist", file: "DS_Resume_Ayush_Agarwal.pdf", code: "04" },
];

const projectVisuals = {
  blue: {
    icon: Database,
    label: "DATA SYSTEMS",
    className: "visual-blue",
  },
  violet: {
    icon: Sparkles,
    label: "INTELLIGENT TOOLS",
    className: "visual-violet",
  },
  green: {
    icon: Layers3,
    label: "PREDICTIVE SIGNALS",
    className: "visual-green",
  },
  amber: {
    icon: Code2,
    label: "DATA WORKFLOWS",
    className: "visual-amber",
  },
};

export default function PortfolioPage() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const hasEducation = Boolean(
    education.institution &&
      education.branch &&
      education.cgpa
  );

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-container portfolio-hero-grid">
          <div className="portfolio-hero-copy">
            <p className="portfolio-kicker">
              <span className="portfolio-status-dot" />
              TECHNICAL PORTFOLIO
            </p>

            <h1>
              Turning data into
              <br />
              <span>useful decisions.</span>
            </h1>

            <p className="portfolio-hero-lead">
              I work at the intersection of data engineering, analytics,
              and AI—building workflows and tools that make complex
              information easier to use.
            </p>

            <div className="portfolio-hero-actions">
              <a
                className="portfolio-button portfolio-button-primary"
                href="#selected-work"
              >
                Explore selected work
                <ArrowDownToLine size={17} />
              </a>

              <a
                className="portfolio-text-button"
                href="#experience"
              >
                Experience
                <ArrowRight size={16} />
              </a>
            </div>

            <div
              className="portfolio-hero-tags"
              aria-label="Areas of focus"
            >
              <span>Data engineering</span>
              <span>Analytics</span>
              <span>AI / ML</span>
            </div>
          </div>

          {/* CSS-built hero illustration */}
          <div
            className="portfolio-hero-art"
            aria-label="Data to insight visual"
          >
            <div className="hero-art-orbit orbit-one" />
            <div className="hero-art-orbit orbit-two" />

            <div className="hero-art-card hero-art-card-top">
              <span className="hero-art-icon">
                <Database size={17} />
              </span>

              <span>
                <strong>Data pipelines</strong>
                <small>Structured · Reliable</small>
              </span>

              <span className="hero-art-mini-bars">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>

            <div className="hero-art-core">
              <div className="hero-art-core-mark">
                <Sparkles size={28} />
              </div>

              <span>DATA → INSIGHT</span>
              <small>Build. Analyze. Improve.</small>
            </div>

            <div className="hero-art-card hero-art-card-bottom">
              <span className="hero-art-icon hero-art-icon-alt">
                <Layers3 size={17} />
              </span>

              <span>
                <strong>Intelligent tools</strong>
                <small>Models · Automation</small>
              </span>

              <ArrowUpRight size={17} />
            </div>

            <span className="hero-art-coordinate coordinate-one">
              01 / ANALYZE
            </span>

            <span className="hero-art-coordinate coordinate-two">
              02 / BUILD
            </span>
          </div>
        </div>
      </section>

      {/* Areas of focus */}
      <section className="portfolio-section portfolio-intro-strip">
        <div className="portfolio-container intro-strip-inner">
          <p className="portfolio-section-label">AREAS I WORK IN</p>

          <div className="intro-strip-items">
            <span>
              <Database size={17} />
              Data engineering
            </span>

            <span>
              <Layers3 size={17} />
              Analytics & BI
            </span>

            <span>
              <Sparkles size={17} />
              Machine learning & GenAI
            </span>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section
        className="portfolio-section"
        id="selected-work"
      >
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <div>
              <p className="portfolio-section-label">
                SELECTED WORK <span>01 — 03</span>
              </p>

              <h2>Projects with a purpose.</h2>
            </div>

            <p className="portfolio-section-aside">
              A few examples of how I explore data, models,
              and practical tools.
            </p>
          </div>

          <div className="portfolio-project-grid">
            {featuredProjects.map((project, index) => {
              const visual =
                projectVisuals[project.accent] ||
                projectVisuals.blue;

              const VisualIcon = visual.icon;

              return (
                <article
                  className="portfolio-project-card"
                  key={project.slug}
                >
                  <div
                    className={`portfolio-project-visual ${visual.className}`}
                  >
                    <div className="project-visual-top">
                      <span>{project.category}</span>

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="project-visual-center">
                      <span className="project-visual-icon">
                        <VisualIcon size={27} />
                      </span>

                      <span className="project-visual-lines">
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>

                    <span className="project-visual-bottom">
                      {visual.label}
                    </span>
                  </div>

                  <div className="portfolio-project-content">
                    <p className="portfolio-project-type">
                      {project.subtitle}
                    </p>

                    <h3>{project.title}</h3>

                    <p className="portfolio-project-summary">
                      {project.summary}
                    </p>

                    <div className="portfolio-chip-row">
                      {project.technologies
                        .slice(0, 4)
                        .map((technology) => (
                          <span
                            className="portfolio-chip"
                            key={technology}
                          >
                            {technology}
                          </span>
                        ))}
                    </div>

                    <Link
                      className="portfolio-card-link"
                      to={`/portfolio/projects/${project.slug}`}
                      aria-label={`View ${project.title} case study`}
                    >
                      View case study
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="portfolio-more-projects">
            <p>
              More work across data engineering, analytics,
              and modelling.
            </p>

            <span>
              {projects.length} projects & concepts in the portfolio
            </span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        className="portfolio-section portfolio-skills-section"
        id="skills"
      >
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <div>
              <p className="portfolio-section-label">
                TOOLS & METHODS <span>02</span>
              </p>

              <h2>A toolkit built around the problem.</h2>
            </div>

            <p className="portfolio-section-aside">
              Practical technologies across data workflows
              and intelligent applications.
            </p>
          </div>

          <div className="portfolio-skill-grid">
            {skillGroups.map((group, index) => (
              <article
                className="portfolio-skill-card"
                key={group.title}
              >
                <div className="portfolio-skill-card-top">
                  <span className="portfolio-skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight size={17} />
                </div>

                <h3>{group.title}</h3>

                <p>
                  {group.short || group.description}
                </p>

                <div className="portfolio-chip-row">
                  {group.skills.map((skill) => (
                    <span
                      className="portfolio-chip"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        className="portfolio-section"
        id="experience"
      >
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <div>
              <p className="portfolio-section-label">
                EXPERIENCE <span>03</span>
              </p>

              <h2>Learning by working with real data.</h2>
            </div>
          </div>

          <div className="portfolio-experience-list">
            {experience.map((item) => (
              <article
                className="portfolio-experience-card"
                key={`${item.role}-${item.company}`}
              >
                <div className="portfolio-experience-brand">
                  <span className="portfolio-experience-mark">
                    <BriefcaseBusiness size={22} />
                  </span>

                  <span className="portfolio-experience-period">
                    {item.period}
                  </span>
                </div>

                <div className="portfolio-experience-main">
                  <p className="portfolio-experience-company">
                    {item.company} · {item.location}
                  </p>

                  <h3>{item.role}</h3>

                  <p className="portfolio-experience-summary">
                    {item.description}
                  </p>

                  <ul>
                    {item.highlights
                      .slice(0, 3)
                      .map((highlight) => (
                        <li key={highlight}>
                          {highlight}
                        </li>
                      ))}
                  </ul>

                  <div className="portfolio-chip-row">
                    {item.technologies
                      .slice(0, 6)
                      .map((technology) => (
                        <span
                          className="portfolio-chip"
                          key={technology}
                        >
                          {technology}
                        </span>
                      ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section
        className="portfolio-section portfolio-research-section"
        id="research"
      >
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <div>
              <p className="portfolio-section-label">
                RESEARCH & PUBLICATIONS <span>04</span>
              </p>

              <h2>Curiosity beyond the product.</h2>
            </div>

            <p className="portfolio-section-aside">
              Research in predictive modelling and data-driven
              decision frameworks.
            </p>
          </div>

          <div className="portfolio-research-grid">
            {research.map((item, index) => (
              <article
                className="portfolio-research-card"
                key={item.slug}
              >
                <div className="portfolio-research-card-top">
                  <span className="portfolio-research-icon">
                    <BookOpen size={19} />
                  </span>

                  <span className="portfolio-section-label">
                    0{index + 1}
                  </span>
                </div>

                <p className="portfolio-research-area">
                  {item.area}
                </p>

                <h3>{item.title}</h3>

                <p className="portfolio-research-summary">
                  {item.summary}
                </p>

                <p className="portfolio-research-publication">
                  {item.publication}
                </p>

                <div className="portfolio-chip-row">
                  {item.methods
                    .slice(0, 3)
                    .map((method) => (
                      <span
                        className="portfolio-chip"
                        key={method}
                      >
                        {method}
                      </span>
                    ))}
                </div>

                {item.link && (
                  <a
                    className="portfolio-card-link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read publication
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education and certifications */}
      <section
        className="portfolio-section portfolio-background-section"
        id="background"
      >
        <div className="portfolio-container portfolio-background-grid">
          <div>
            <p className="portfolio-section-label">
              CONTINUOUS LEARNING <span>05</span>
            </p>

            <h2 className="portfolio-subsection-title">
              Learning, one layer at a time.
            </h2>

            <div className="portfolio-cert-list">
              {certifications.map((certification) => (
                <article
                  className="portfolio-cert-item"
                  key={certification.name}
                >
                  <span className="portfolio-cert-icon">
                    <GraduationCap size={18} />
                  </span>

                  <span>
                    <strong>{certification.name}</strong>

                    <small>
                      {certification.issuer ||
                        certification.description}
                    </small>
                  </span>

                  <ArrowUpRight size={16} />
                </article>
              ))}
            </div>
          </div>

          {hasEducation && (
            <div className="portfolio-education-panel">
              <p className="portfolio-section-label">
                EDUCATION
              </p>

              <GraduationCap size={25} />

              <h3>{education.degree}</h3>
              <p>{education.institution}</p>
              <p>{education.branch}</p>

              {education.period && (
                <small>{education.period}</small>
              )}

              <p className="portfolio-education-score">
                CGPA <strong>{education.cgpa}</strong>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Resume downloads */}
      <section
        className="portfolio-section portfolio-resume-section"
        id="resumes"
      >
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <div>
              <p className="portfolio-section-label">
                RÉSUMÉ <span>06</span>
              </p>

              <h2>Looking for a specific angle?</h2>
            </div>

            <p className="portfolio-section-aside">
              Choose the version that best matches the opportunity.
            </p>
          </div>

          <div className="portfolio-resume-grid">
            {resumes.map((resume) => (
              <a
                className="portfolio-resume-link"
                href={`/documents/${resume.file}`}
                download
                key={resume.file}
              >
                <span className="portfolio-resume-number">
                  {resume.code}
                </span>

                <span>{resume.label}</span>

                <ArrowDownToLine size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact call to action */}
      <section className="portfolio-contact-section">
        <div className="portfolio-container portfolio-contact-inner">
          <div>
            <p className="portfolio-section-label">
              HAVE A PROBLEM TO SOLVE?
            </p>

            <h2>Let's make something useful.</h2>

            <p>
              Open to conversations around data, analytics,
              and practical AI solutions.
            </p>
          </div>

          <Link
            className="portfolio-button portfolio-button-light"
            to="/contact"
          >
            Get in touch
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}