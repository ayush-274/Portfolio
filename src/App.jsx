import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Database, Github, Linkedin, Mail, ChevronRight, ChevronLeft, 
  Download, Code, Terminal, Cpu, BookOpen, Layers, Brain, CheckCircle, 
  BarChart, PieChart, TrendingUp, DollarSign, Activity, Filter, Server, 
  Workflow, MapPin, Calculator, ArrowRight
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'service-data'

  // Scroll Spy Logic
  useEffect(() => {
    if (currentView !== 'home') return;
    const handleScroll = () => {
      const sections = ['home', 'services', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (viewId) => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(viewId);
  };

  const scrollToSection = (sectionId) => {
    if (currentView !== 'home') {
      navigateTo('home');
      // Small timeout to allow the view to switch before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setIsMenuOpen(false);
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const personalInfo = {
    name: "Ayush Agarwal",
    title: "Data Scientist & Data Engineer",
    tagline: "Architecting scalable data pipelines and deploying intelligent AI solutions.",
    email: "asagarwal04@gmail.com",
    github: "github.com/ayush-274",
    linkedin: "www.linkedin.com/in/ayush-agarwal-195922274"
  };

  // --- COMPONENT: SALES DASHBOARD PREVIEW ---
  const SalesDashboardPreview = () => (
    <div className="bg-white text-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700 font-sans my-8 animate-fadeIn">
      <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded text-white"><BarChart size={18} /></div>
          <div>
            <h4 className="font-bold text-slate-800 text-sm">Sales Pipeline Analytics</h4>
            <p className="text-xs text-slate-500">Tableau Workbook Preview</p>
          </div>
        </div>
        <div className="flex gap-2">
            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 flex items-center gap-1"><Filter size={10}/> Global</span>
            <span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 flex items-center gap-1">FY 2024-25</span>
        </div>
      </div>
      <div className="p-6 bg-slate-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
                { label: "Total Pipeline", value: "$4.2M", icon: DollarSign, color: "text-green-600", trend: "+12%" },
                { label: "Active Deals", value: "142", icon: Layers, color: "text-blue-600", trend: "+5" },
                { label: "Win Rate", value: "32%", icon: Activity, color: "text-purple-600", trend: "+1.5%" },
                { label: "Avg Deal Size", value: "$28k", icon: PieChart, color: "text-orange-600", trend: "+8%" }
            ].map((kpi, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase">{kpi.label}</span>
                        <kpi.icon size={16} className={kpi.color} />
                    </div>
                    <div className="text-2xl font-bold text-slate-800">{kpi.value}</div>
                    <div className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
                        <TrendingUp size={10} /> {kpi.trend}
                    </div>
                </div>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <h5 className="font-bold text-slate-800 text-sm mb-4">Opportunity Stage Funnel</h5>
                <div className="space-y-3">
                    {[
                        { stage: "Prospecting", count: 65, width: "100%", color: "bg-blue-200" },
                        { stage: "Qualification", count: 42, width: "75%", color: "bg-blue-300" },
                        { stage: "Proposal", count: 28, width: "50%", color: "bg-blue-400" },
                        { stage: "Negotiation", count: 15, width: "30%", color: "bg-blue-500" },
                        { stage: "Closed Won", count: 8, width: "15%", color: "bg-blue-600" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-xs">
                            <span className="w-24 text-slate-600 font-medium text-right">{item.stage}</span>
                            <div className="flex-1">
                                <div className={`h-6 rounded-r-md ${item.color} flex items-center px-2 text-slate-900 font-bold`} style={{ width: item.width }}>
                                    {item.count}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                <h5 className="font-bold text-slate-800 text-sm mb-4">Revenue by Sector</h5>
                <div className="relative h-40 w-40 mx-auto rounded-full border-[16px] border-emerald-500 border-t-blue-500 border-r-purple-500 flex items-center justify-center">
                    <div className="text-center">
                        <span className="block text-xl font-bold text-slate-800">Top 3</span>
                        <span className="text-[10px] text-slate-500">Tech, Retail, Health</span>
                    </div>
                </div>
                <div className="mt-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Tech</span> <span className="font-bold">45%</span></div>
                    <div className="flex items-center justify-between"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Retail</span> <span className="font-bold">30%</span></div>
                    <div className="flex items-center justify-between"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Health</span> <span className="font-bold">25%</span></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );

  // --- COMPONENT: RENTAL ROI CALCULATOR ---
  const RentalCalculator = () => {
    const [rent, setRent] = useState(2500);
    const [nightlyRate, setNightlyRate] = useState(150);
    const [occupancy, setOccupancy] = useState(70);
    
    const monthlyRevenue = nightlyRate * 30 * (occupancy / 100);
    const profit = monthlyRevenue - rent;
    const roi = (profit / rent) * 100;

    return (
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-xl max-w-lg mx-auto md:mx-0">
            <div className="flex items-center gap-2 mb-4">
                <Calculator className="text-emerald-400" size={20} />
                <h4 className="text-white font-bold">Live ROI Calculator</h4>
            </div>
            <p className="text-slate-400 text-sm mb-6">
                Interactive component demonstrating the logic behind the Rental Arbitrage Engine.
            </p>
            <div className="space-y-4 mb-6">
                <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Monthly Rent Cost</span>
                        <span>${rent}</span>
                    </div>
                    <input type="range" min="1000" max="5000" step="100" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="w-full accent-emerald-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Avg Nightly Rate</span>
                        <span>${nightlyRate}</span>
                    </div>
                    <input type="range" min="50" max="500" step="10" value={nightlyRate} onChange={(e) => setNightlyRate(Number(e.target.value))} className="w-full accent-emerald-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Occupancy Rate</span>
                        <span>{occupancy}%</span>
                    </div>
                    <input type="range" min="0" max="100" step="5" value={occupancy} onChange={(e) => setOccupancy(Number(e.target.value))} className="w-full accent-emerald-500 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
                </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">Est. Revenue</span>
                    <span className="text-white font-mono">${Math.round(monthlyRevenue)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-700">
                    <span className="text-emerald-400 font-bold">Est. Monthly Profit</span>
                    <span className={`font-bold font-mono text-xl ${profit > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {profit > 0 ? '+' : ''}${Math.round(profit)}
                    </span>
                </div>
                <div className="text-right mt-1">
                    <span className={`text-xs ${roi > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                        {Math.round(roi)}% ROI
                    </span>
                </div>
            </div>
        </div>
    );
  };

  const DataServicePage = () => (
    <div className="pt-24 pb-12 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigateTo('home')} className="flex items-center text-slate-400 hover:text-emerald-400 mb-8 transition-colors">
          <ChevronLeft size={20} /> Back to Home
        </button>
        
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-emerald-500/10 mb-4">
            <Database className="w-12 h-12 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Data Pipelining & AI Solutions</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I architect robust data ecosystems and deploy intelligent models that drive business decisions.
          </p>
        </div>

        {/* Project 1: Sales Pipeline */}
        <div className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-800 pb-4">
                 <div>
                     <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2 block">Project 01</span>
                     <h3 className="text-3xl font-bold text-white mb-2">Sales Data Pipeline & Analytics</h3>
                     <p className="text-slate-400 max-w-2xl">
                         Transforming raw CRM data into strategic insights. This pipeline ingests data from multiple sources, cleanses it, and feeds a live Tableau dashboard.
                     </p>
                 </div>
                 <div className="mt-4 md:mt-0 flex gap-2">
                     <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">Python</span>
                     <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">SQL</span>
                     <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">Tableau</span>
                 </div>
            </div>
            
            <SalesDashboardPreview />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Workflow size={16} className="text-emerald-400"/> Architecture</h4>
                    <p className="text-slate-400 text-sm">Automated ETL extracting data from Salesforce API, normalizing with Pandas, and loading into PostgreSQL.</p>
                </div>
                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle size={16} className="text-emerald-400"/> Quality</h4>
                    <p className="text-slate-400 text-sm">Strict validation rules handle missing values and duplicates, ensuring 99.9% accuracy.</p>
                </div>
                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Activity size={16} className="text-emerald-400"/> Impact</h4>
                    <p className="text-slate-400 text-sm">Enabled leadership to forecast revenue with 15% higher accuracy compared to legacy Excel methods.</p>
                </div>
            </div>
        </div>

        {/* Project 2: Rental Arbitrage */}
        <div className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-800 pb-4">
                 <div>
                     <span className="text-purple-400 font-mono text-xs uppercase tracking-wider mb-2 block">Project 02</span>
                     <h3 className="text-3xl font-bold text-white mb-2">Rental Arbitrage Engine</h3>
                     <p className="text-slate-400 max-w-2xl">
                         A data-driven engine identifying high-profit rental arbitrage opportunities by scraping listings from Airbnb & Zillow.
                     </p>
                 </div>
                 <div className="mt-4 md:mt-0 flex gap-2">
                     <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">Selenium</span>
                     <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">Pandas</span>
                     <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">ROI Analysis</span>
                 </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="bg-slate-800 p-3 h-fit rounded-lg border border-slate-700">
                            <Database className="text-purple-400" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Data Ingestion</h4>
                            <p className="text-slate-400 text-sm mt-1">Built custom scrapers using Python/Selenium to fetch nightly rates and occupancy calendars for 500+ properties.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-slate-800 p-3 h-fit rounded-lg border border-slate-700">
                            <MapPin className="text-purple-400" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Location Analysis</h4>
                            <p className="text-slate-400 text-sm mt-1">Cross-referenced scraped data with crime rates and walkability scores to filter for low-risk neighborhoods.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-slate-800 p-3 h-fit rounded-lg border border-slate-700">
                            <TrendingUp className="text-purple-400" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Profitability Algorithm</h4>
                            <p className="text-slate-400 text-sm mt-1">Developed a scoring model that calculates projected ROI by factoring in seasonality and dynamic pricing.</p>
                        </div>
                    </div>
                </div>
                {/* Interactive Calculator */}
                <RentalCalculator />
            </div>
        </div>

        <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to optimize your data flow?</h3>
          <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="animate-fadeIn">
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Data Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Transforming Data into <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            {personalInfo.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Let's Talk
            </button>
            <button 
              onClick={() => scrollToSection('resume')}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              View Resume
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Specialized engineering services to handle your data infrastructure, analysis, and AI implementation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Service Cards pointing to the same Data View */}
             {[
               { id: 'etl', title: "ETL & Pipeline Architecture", icon: Server, desc: "Designing robust systems that collect, clean, and transform raw data into ready-to-use assets." },
               { id: 'ai', title: "Predictive AI Models", icon: Brain, desc: "Deploying machine learning models (Regression, YOLOv8) to automate decisions." },
               { id: 'viz', title: "Business Intelligence", icon: BarChart, desc: "Creating interactive Tableau dashboards for executive decision-making." }
             ].map((feature) => (
                <div key={feature.id} onClick={() => navigateTo('service-data')} className="bg-slate-900 border border-slate-700 p-8 rounded-2xl hover:border-emerald-500/50 transition-all hover:-translate-y-1 group flex flex-col h-full cursor-pointer">
                    <div className="bg-slate-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className={`w-8 h-8 ${feature.id === 'ai' ? 'text-purple-400' : feature.id === 'viz' ? 'text-blue-400' : 'text-emerald-400'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed flex-grow">{feature.desc}</p>
                    <div className="flex items-center text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
                        View Details <ChevronRight size={16} />
                    </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section id="resume" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Journey</h2>
              <p className="text-slate-400">Education, Experience & Research</p>
            </div>
            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg flex items-center gap-2 transition-colors">
              <Download size={18} /> Download Full Resume
            </button>
          </div>
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-semibold text-emerald-400 mb-8 flex items-center gap-2">Professional Experience</h3>
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/30 transition-colors">
                <div className="flex justify-between">
                    <div><h4 className="text-xl font-bold text-white">Web Developer Intern</h4><p className="text-emerald-400">Afame Technologies</p></div>
                    <span className="text-slate-500 text-sm">Apr 2024 - May 2024</span>
                </div>
                <p className="text-slate-400 mt-4">Developed responsive pages and refined frontend integration for data-driven applications.</p>
              </div>
            </div>
            {/* Added Education Section */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-8 flex items-center gap-2">Education</h3>
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-colors">
                <div className="flex justify-between">
                    <div><h4 className="text-xl font-bold text-white">B.Tech in Computer Science (AI & ML)</h4><p className="text-blue-400">Vellore Institute of Technology, Chennai</p></div>
                    <span className="text-slate-500 text-sm">2022 - Present</span>
                </div>
                <p className="text-slate-400 mt-4">Specialization in Artificial Intelligence and Machine Learning. CGPA: 8.72</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Let's Collaborate</h2>
            {/* Netlify Form */}
            <form className="space-y-6" name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                
              <div className="grid grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Your Name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" required />
                <input type="email" name="email" placeholder="your@email.com" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" required />
              </div>
              <textarea name="message" rows={4} placeholder="Project Details..." className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500" required></textarea>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-lg transition-all">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-center border-t border-slate-800">
        <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
      </footer>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500 selection:text-white">
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => navigateTo('home')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Ayush.</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {currentView === 'home' ? ['Home', 'Services', 'Resume', 'Contact'].map((item) => (
                    <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{item}</button>
                )) : (
                    <button onClick={() => navigateTo('home')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Back to Home</button>
                )}
                <button onClick={() => scrollToSection('contact')} className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">Hire Me <ChevronRight size={16} /></button>
              </div>
            </div>
             <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 text-slate-400">{isMenuOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Services', 'Resume', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-slate-300 block px-3 py-2 rounded-md text-base font-medium w-full text-left">{item}</button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {currentView === 'home' && <HomeView />}
      {currentView === 'service-data' && <DataServicePage />}
    </div>
  );
};

export default Portfolio;