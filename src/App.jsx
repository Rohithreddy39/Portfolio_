import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, BarChart3, Brain, Cloud, Terminal, ChevronDown, Award, TrendingUp, Users, Zap, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectDetails = {
    1: {
      overview: "This Tableau dashboard provides a complete analysis of sales, profits, and product performance using the Superstore dataset. It helps business users quickly understand revenue trends, identify high- and low-performing categories, and view regional performance across the U.S.",
      features: [
        "KPI cards for Sales, Profit, Profit Ratio",
        "Monthly Sales Trend with regression line",
        "Sales by Category",
        "Profit by Sub-Category (with negative profit highlights)",
        "Geographic Sales Map",
        "Drill-down insights and clean layout"
      ],
      tools: ["Tableau Public", "Excel Superstore Dataset"],
      liveLink: "https://public.tableau.com/app/profile/rohith.reddy.alluri5441/vizzes",
      linkText: "View Live Dashboard"
    },
    2: {
      overview: "A Streamlit-based application that analyzes your resume against a job description and produces a keyword match score. It highlights skill gaps and strengths and logs all evaluations to a job tracker file.",
      features: [
        "Upload resume (PDF, DOCX, TXT)",
        "Extract relevant keywords",
        "Compare with JD using keyword matching",
        "Match percentage score",
        "Missing vs. present keywords section",
        "CSV-based job tracker",
        "Expandable architecture for ML-powered matching"
      ],
      tools: ["Python", "Streamlit", "Pandas", "PyPDF2", "python-docx"],
      howToRun: [
        "pip install -r requirements.txt",
        "streamlit run app.py"
      ],
      liveLink: "https://github.com/Rohithreddy39/resume-match-assistant",
      linkText: "View on GitHub"
    },
    3: {
      overview: "A machine learning project that predicts house prices using multiple regression models and displays results through an interactive Tkinter GUI. Designed as an end-to-end ML pipeline from data processing to deployment.",
      features: [
        "Preprocessing: handling missing values, encoding, scaling",
        "Multiple ML models: Linear Regression, Random Forest, XGBoost",
        "Model comparison using RMSE, MAE, R²",
        "Tkinter GUI for real-time predicted outputs",
        "Feature importance plot",
        "Modular Python code structure"
      ],
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Tkinter"],
      howToRun: [
        "python gui_app.py"
      ],
      liveLink: "https://github.com/Rohithreddy39/Python-ML_Project",
      linkText: "View on GitHub"
    },
    4: {
      overview: "A Tableau dashboard designed to provide revenue, cancellation, occupancy, and booking insights for hotels using the Hotel Booking dataset. Perfect for hospitality teams to monitor business trends and optimize revenue management.",
      features: [
        "Total revenue insights",
        "ADR (Average Daily Rate)",
        "Cancellation behavior analysis",
        "Booking lead time visualization",
        "Customer type segmentation",
        "Channel performance",
        "Clean and interactive Tableau filters"
      ],
      tools: ["Tableau Public", "Kaggle Hotel Booking Dataset"],
      liveLink: "https://public.tableau.com/app/profile/rohith.reddy.alluri5441/vizzes",
      linkText: "View Live Dashboard"
    }
  };

  const projects = [
    {
      id: 1,
      title: "Superstore Sales Performance Dashboard",
      shortDesc: "Interactive Tableau dashboard analyzing sales trends, profitability, and customer segments across regions and product categories.",
      tags: ["Tableau", "Data Visualization", "Business Intelligence"],
      gradient: "from-orange-500 to-pink-600",
      icon: BarChart3,
      metrics: "Multi-dimensional Analysis",
      category: "Data Visualization"
    },
    {
      id: 2,
      title: "Resume ↔ Job Description Match Assistant",
      shortDesc: "AI-powered tool that analyzes resume-job fit using NLP, providing match scores and actionable improvement suggestions.",
      tags: ["Python", "Streamlit", "NLP", "Machine Learning"],
      gradient: "from-purple-600 to-indigo-600",
      icon: Brain,
      metrics: "Smart Matching",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "House Price Prediction DSS",
      shortDesc: "Decision support system with ML regression models and interactive GUI for real-time house price predictions and analysis.",
      tags: ["Python", "Machine Learning", "Scikit-learn", "GUI"],
      gradient: "from-cyan-500 to-blue-600",
      icon: TrendingUp,
      metrics: "Predictive Modeling",
      category: "Machine Learning"
    },
    {
      id: 4,
      title: "Hotel Booking Revenue Analysis Dashboard",
      shortDesc: "Comprehensive Tableau dashboard tracking booking patterns, revenue trends, and guest behavior for hospitality optimization.",
      tags: ["Tableau", "Data Analytics", "SQL"],
      gradient: "from-emerald-500 to-teal-600",
      icon: BarChart3,
      metrics: "Revenue Insights",
      category: "Data Visualization"
    }
  ];

  const experiences = [
    { metric: "4+", label: "Projects Completed" },
    { metric: "7+", label: "Technical Skills" },
    { metric: "92%", label: "Model Accuracy" },
    { metric: "1M+", label: "Data Points Analyzed" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rohith Reddy Alluri
            </div>
            
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-slate-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden md:flex gap-4">
              <a href="https://github.com/Rohithreddy39" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rohith-reddy-alluri-7a828a199/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all">
                <Linkedin size={20} />
              </a>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-base font-semibold backdrop-blur-sm">
              Data Analyst • Python Developer • Cloud & ML Practitioner
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rohith Reddy Alluri
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
            I build 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold"> data-driven solutions </span>
            using Python, SQL, Tableau, and cloud technologies to turn complex datasets into actionable insights.
          </p>

          <p className="text-base text-slate-400 mb-10 max-w-2xl mx-auto">
            Specializing in analyzing, visualizing, and automating data workflows to help teams make smarter, faster decisions.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a href="https://www.linkedin.com/in/rohith-reddy-alluri-7a828a199/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full hover:border-blue-500 transition-all">
              <Linkedin size={18} className="text-blue-400" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/Rohithreddy39" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full hover:border-slate-400 transition-all">
              <Github size={18} className="text-slate-400" />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="https://public.tableau.com/app/profile/rohith.reddy.alluri5441/vizzes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full hover:border-orange-500 transition-all">
              <BarChart3 size={18} className="text-orange-400" />
              <span className="text-sm">Tableau</span>
            </a>
            <a href="mailto:allurirohithreddy23@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-full hover:border-purple-500 transition-all">
              <Mail size={18} className="text-purple-400" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button onClick={() => scrollToSection('projects')} className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold shadow-lg hover:shadow-purple-500/50 transition-all">
              View Projects
              <ExternalLink className="inline ml-2" size={20} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-10 py-4 border-2 border-slate-600 rounded-full font-bold hover:border-purple-500 transition-all">
              Let's Connect
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {exp.metric}
                </div>
                <div className="text-sm text-slate-400">{exp.label}</div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-purple-400" size={32} />
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-purple-500/30 transition-all">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I'm <span className="text-purple-400 font-semibold">Rohith Reddy Alluri</span>, a Data Analyst and Python Developer specializing in transforming raw data into meaningful insights and real-world solutions. I recently completed my <span className="text-purple-400 font-semibold">Master's in Information Technology</span> at the University of Massachusetts Boston.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I enjoy building <span className="text-purple-400 font-semibold">interactive dashboards, predictive models, and data-driven applications</span> that help businesses solve problems and make smarter decisions.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Beyond academic projects, I bring <span className="text-purple-400 font-semibold">industry experience as a Data Analyst at Cognizant</span>, where I worked on data cleaning, ETL, reporting, and supporting large-scale data processes.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm passionate about continuous learning and currently focused on expanding my expertise in <span className="text-purple-400 font-semibold">cloud services, machine learning, and advanced analytics</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a href="mailto:allurirohithreddy23@gmail.com" className="flex items-center gap-3 p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-purple-500 transition-all">
                  <Mail className="text-purple-400" size={24} />
                  <span className="font-medium">Email me</span>
                </a>
                <a href="https://public.tableau.com/app/profile/rohith.reddy.alluri5441/vizzes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-orange-500 transition-all">
                  <BarChart3 className="text-orange-400" size={24} />
                  <span className="font-medium">Tableau</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 hover:border-purple-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Education</h3>
                    <p className="text-slate-400 text-sm">Master's in IT</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">University of Massachusetts Boston</p>
                <p className="text-purple-400 text-xs mt-2 font-semibold">Analytics • Programming • Cloud</p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 hover:border-blue-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Experience</h3>
                    <p className="text-slate-400 text-sm">Data Analyst</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-2">Cognizant</p>
                <p className="text-blue-400 text-xs font-semibold">ETL • Data Cleaning • Reporting</p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 hover:border-orange-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-600 to-pink-600 rounded-xl">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Core Strengths</h3>
                    <p className="text-slate-400 text-sm">Technical Toolkit</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Tableau', 'AWS', 'Excel', 'ML'].map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/30 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Currently Exploring</h3>
                    <p className="text-slate-400 text-sm">Growth Areas</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    Cloud Services (AWS)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    Advanced Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-slate-400 text-lg">Tools and technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-800 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold">Programming</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-purple-400 font-semibold mb-2">Python</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'].map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold mb-2">SQL</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['MySQL', 'SQLite', 'Joins', 'Window Functions'].map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-800 hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-600 to-pink-600 rounded-xl">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-bold">Data Analytics</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-orange-400 font-semibold mb-2">Tableau</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Dashboards', 'LODs', 'Filters'].map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-orange-400 font-semibold mb-2">Excel</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Pivot Tables', 'VLOOKUP', 'Power Query'].map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-800 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold">Machine Learning</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-purple-400 font-semibold mb-2">Models</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Linear Regression', 'Random Forest', 'XGBoost'].map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-800 hover:border-yellow-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl">
                  <Cloud size={24} />
                </div>
                <h3 className="text-xl font-bold">Cloud & DevOps</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-yellow-400 font-semibold mb-2">AWS</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['EC2', 'S3', 'Lambda', 'IAM'].map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">{item}</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-2">✓ Cloud Practitioner Certified</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-800 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">