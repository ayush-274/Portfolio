
export const projects = [
  {
    slug: "insightiq-text-to-sql",
    title: "InsightIQ",
    subtitle: "Agentic Text-to-SQL LLM Engine",
    category: "Generative AI",
    summary:
      "A natural-language-to-SQL assistant designed to help non-technical users query structured data.",
    problem:
      "Users without SQL expertise may struggle to translate analytical questions into executable database queries.",
    approach: [
      "Designed a retrieval-augmented workflow for translating natural-language questions into SQL.",
      "Explored schema metadata retrieval and query self-correction to improve query generation.",
    ],
    technologies: [
      "Python",
      "LangChain",
      "Gemini API",
      "RAG",
      "Vector Databases",
    ],
    type: "AI Project",
    featured: true,
  },
  {
    slug: "scm-optima",
    title: "SCM-Optima",
    subtitle: "AI Supply Chain Control Tower",
    category: "Predictive Analytics",
    summary:
      "A supply chain analytics concept combining demand forecasting and shipment-risk assessment.",
    problem:
      "Supply chain teams need forward-looking visibility into demand fluctuations and potential shipment delays.",
    approach: [
      "Combined forecasting and classification-oriented modelling approaches for demand and risk analysis.",
      "Designed an interactive dashboard concept to present risk scores for operational decisions.",
    ],
    technologies: ["Python", "Prophet", "Random Forest", "Streamlit"],
    type: "Analytics Project",
    featured: true,
  },
  {
    slug: "nyc-rental-arbitrage",
    title: "NYC Rental Arbitrage Engine",
    subtitle: "Real Estate Market Analytics",
    category: "Data Science",
    summary:
      "A real estate analytics project exploring market opportunities, profitability drivers, and risk across geographic clusters.",
    problem:
      "Comparing investment opportunities requires integrating market data with predictive and financial analysis.",
    approach: [
      "Prepared market datasets for downstream analysis and predictive modelling.",
      "Explored XGBoost-based modelling and feature interpretation to investigate profitability drivers.",
      "Used visual analytics to communicate projected returns and risk distributions.",
    ],
    technologies: ["Python", "SQL", "ETL", "XGBoost", "SHAP", "Tableau"],
    type: "Data Science Project",
    featured: true,
  },
];
