import "./HomePage.css";
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    number: "01",
    title: "Data & Analytics",
    description:
      "Building reliable data workflows and turning complex information into useful insights.",
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "Exploring practical ways to automate repetitive work and build intelligent solutions.",
  },
  {
    number: "03",
    title: "Business Problem Solving",
    description:
      "Connecting technical execution with business goals, measurable outcomes, and better decisions.",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="container home-hero">
        <p className="eyebrow">DATA · TECHNOLOGY · BUSINESS</p>

        <h1>
          I turn data into decisions
          <br />
          and ideas into <span>solutions.</span>
        </h1>

        <p className="home-intro">
          I'm a data professional working across analytics and data
          engineering, with a growing focus on AI automation and
          solving real-world business problems.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/portfolio">
            Explore my work <ArrowUpRight size={18} />
          </Link>

          <Link className="button button-secondary" to="/freelance">
            <BriefcaseBusiness size={17} />
            Work with me
          </Link>
        </div>

        <a className="scroll-link" href="#what-i-do">
          Discover what I do <ArrowDownRight size={16} />
        </a>
      </section>

      <section className="home-capabilities" id="what-i-do">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">AREAS OF FOCUS</p>
            <h2>Where I create value.</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.number}>
                <p className="capability-number">{item.number}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container home-cta">
        <p className="eyebrow">HAVE A PROBLEM TO SOLVE?</p>
        <h2>Let's build something useful.</h2>
        <p>
          Whether you're exploring my work or have a business challenge
          in mind, let's start a conversation.
        </p>
        <Link className="button button-primary" to="/contact">
          Get in touch <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
