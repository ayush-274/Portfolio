
export const projects = [
  {
    slug: "quickbite-express",
    title: "QuickBite Express",
    subtitle: "Delivery Optimization Engine",
    category: "Machine Learning",
    summary:
      "An operational optimization concept using predictive models to support delivery dispatching and routing decisions.",
    problem:
      "Delivery operations need to account for changing demand and operational constraints when making dispatch decisions.",
    approach: [
      "Developed predictive modelling workflows to estimate demand surges and changing constraints.",
      "Explored how machine learning outputs could inform dispatching and routing decisions.",
    ],
    technologies: ["Python", "Streamlit", "scikit-learn"],
    type: "Project",
    featured: true,
  },
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
    slug: "insightiq-schema-mapping",
    title: "InsightIQ — Automated Data Ingestion & Schema Mapping Engine",
    subtitle: "Schema Mapping & Query Validation",
    category: "Data Engineering",
    summary:
      "An automated metadata extraction and schema-mapping engine that prepares structured database context for downstream processing.",
    problem:
      "Database structures and schema exceptions can complicate automated query execution and downstream data workflows.",
    approach: [
      "Built an automated metadata extraction framework to map physical database schemas into structured system contexts.",
      "Developed query-execution validation workflows to handle structural exceptions and protect downstream data processing.",
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "Git"],
    type: "Data Engineering Project",
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
