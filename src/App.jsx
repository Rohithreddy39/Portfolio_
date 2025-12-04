import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, BarChart3, Brain, Cloud, Terminal, ChevronDown, Award, TrendingUp, Users, Zap, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      overview: "This Tableau dashboard provides a complete analysis of sales, profits, and product performance using the Superstore dataset.",
      features: ["KPI cards for Sales, Profit, Profit Ratio", "Monthly Sales Trend with regression line", "Sales by Category", "Profit by Sub-Category", "Geographic Sales Map", "Drill-down insights"],
      tools: ["Tableau Public", "Excel Superstore Dataset"],
      liveLink: "https://public.tableau.com/app/profile/rohith.reddy.alluri5441/vizzes",
      linkText: "View Live Dashboard"
    },
    2: {
      overview: "A Streamlit-based application that analyzes your resume against a job description and produces a keyword match score.",
      features: ["Upload resume (PDF, DOCX, TXT)", "Extract relevant keywords", "Compare with JD using keyword matching", "Match percentage score", "Missing vs. present keywords section", "CSV-based job tracker"],
      tools: ["Python", "Streamlit", "Pandas", "PyPDF2", "python-docx"],
      howToRun: ["pip install -r requirements.txt", "streamlit run app.py"],
      liveLink: "https://github.com/Rohithreddy39/resume-match-assistant",
      linkText: "View on GitHub"
    },
    3: {
      overview: "A machine learning project that predicts house prices using multiple regression models and displays results through an interactive Tkinter GUI.",
      features: ["Preprocessing: handling missing values, encoding, scaling", "Multiple ML models: Linear Regression, Random Forest, XGBoost", "Model comparison using RMSE, MAE, R²", "Tkinter GUI for real-time outputs", "Feature importance plot"],
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Tkinter"],
      howToRun: ["python gui_app.py"],
      liveLink: "https://github.com/Rohithreddy39/Python-ML_Project",
      linkText: "View on GitHub"
    },
    4: {
      overview: "A Tableau dashboard designed to provide revenue, cancellation, occupancy, and booking insights for hotels using the Hotel Booking dataset.",
      features: ["Total revenue insights", "ADR (Average Daily Rate)", "Cancellation behavior analysis", "Booking lead time visualization", "Customer type segmentation", "Channel performance"],
      tools: ["Tableau Public", "Kaggle Hotel Booking Dataset"],
      liveLink: "https://public.tableau.com/app/profile/rohith.reddy.alluri5441/vizzes",
      linkText: "View Live Dashboard"
    }
  };

  const projects = [
    { id: 1, title: "Superstore Sales Performance Dashboard", shortDesc: "Interactive Tableau dashboard analyzing sales trends, profitability, and customer segments.", tags: ["Tableau", "Data Visualization", "Business Intelligence"], gradient: "from-orange-500 to-pink-600", icon: BarChart3, metrics: "Multi-dimensional Analysis", category: "Data Visualization" },
    { id: 2, title: "Resume ↔ Job Description Match Assistant", shortDesc: "AI-powered tool that analyzes resume-job fit using NLP, providing match scores and suggestions.", tags: ["Python", "Streamlit", "NLP", "Machine Learning"], gradient: "from-purple-600 to-indigo-600", icon: Brain, metrics: "Smart Matching", category: "Machine Learning" },
    { id: 3, title: "House Price Prediction DSS", shortDesc: "Decision support system with ML regression models and interactive GUI for real-time house price predictions.", tags: ["Python", "Machine Learning", "Scikit-learn", "GUI"], gradient: "from-cyan-500 to-blue-600", icon: TrendingUp, metrics: "Predictive Modeling", category: "Machine Learning" },
    { id: 4, title: "Hotel Booking Revenue Analysis Dashboard", shortDesc: "Comprehensive Tableau dashboard tracking booking patterns, revenue trends, and guest behavior.", tags: ["Tableau", "Data Analytics", "SQL"], gradient: "from-emerald-500 to-teal-600", icon: BarChart3, metrics: "Revenue Insights", category: "Data Visualization" }
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
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rohith Reddy Alluri
            </div>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`text-sm font-medium transition-all ${activeSection === item.toLowerCase() ? 'text-purple-400' : 'text-slate-400'}`}>
                  {item}
                </button>
              ))}
            </div>
            <div className="hidden md:flex gap-4">
              <a href="https://github.com/Rohithreddy39" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/rohith-reddy-alluri-7a828a199/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all"><Linkedin size={20} /></a>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800">{item}</button>
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
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Rohith Reddy Alluri</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">data-driven solutions</span> using Python, SQL, Tableau, and cloud technologies.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a href="https://www.linkedin.com/in/rohith-reddy-alluri-7a828a199/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full hover:border-blue-500 transition-all">
              <Linkedin size={18} className="text-blue-400" /><span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/Rohithreddy39" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full hover:border-slate-400 transition-all">
              <Github size={18} className="text-slate-400" /><span className="text-sm">GitHub</span>
            </a>
            <a href="https://public.tableau.com/app/profile/rohith.reddy.alluri5441/vizzes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full hover:border-orange-500 transition-all">
              <BarChart3 size={18} className="text-orange-400" /><span className="text-sm">Tableau</span>
            </a>
            <a href="mailto:allurirohithreddy23@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-full hover:border-purple-500 transition-all">
              <Mail size={18} className="text-purple-400" /><span className="text-sm">Email</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button onClick={() => scrollToSection('projects')} className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold shadow-lg transition-all">
              View Projects<ExternalLink className="inline ml-2" size={20} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-10 py-4 border-2 border-slate-600 rounded-full font-bold hover:border-purple-500 transition-all">Let's Connect</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{exp.metric}</div>
                <div className="text-sm text-slate-400">{exp.label}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"><ChevronDown className="text-purple-400" size={32} /></div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span></h2>
          </div>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I'm <span className="text-purple-400 font-semibold">Rohith Reddy Alluri</span>, a Data Analyst and Python Developer specializing in transforming raw data into meaningful insights. I recently completed my <span className="text-purple-400 font-semibold">Master's in Information Technology</span> at UMass Boston.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I bring <span className="text-purple-400 font-semibold">industry experience as a Data Analyst at Cognizant</span>, where I worked on data cleaning, ETL, and reporting.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"><Award size={24} /></div>
                  <div><h3 className="font-bold text-lg">Education</h3><p className="text-slate-400 text-sm">Master's in IT - UMass Boston</p></div>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl"><Users size={24} /></div>
                  <div><h3 className="font-bold text-lg">Experience</h3><p className="text-slate-400 text-sm">Data Analyst - Cognizant</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Programming", icon: Code2, color: "from-blue-600 to-cyan-600", items: ["Python", "SQL", "JavaScript"] },
              { title: "Data Analytics", icon: BarChart3, color: "from-orange-600 to-pink-600", items: ["Tableau", "Excel", "Data Cleaning"] },
              { title: "Machine Learning", icon: Brain, color: "from-purple-600 to-pink-600", items: ["Regression", "Classification", "XGBoost"] },
              { title: "Cloud & DevOps", icon: Cloud, color: "from-yellow-600 to-orange-600", items: ["AWS", "Docker", "Git"] },
              { title: "Databases", icon: Database, color: "from-green-600 to-emerald-600", items: ["MySQL", "SQLite", "SQL Server"] },
              { title: "Tools", icon: Terminal, color: "from-cyan-600 to-blue-600", items: ["VS Code", "Streamlit", "Jupyter"] }
            ].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="bg-slate-900/50 rounded-3xl p-6 border border-slate-800 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl`}><Icon size={24} /></div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs border border-slate-700">{item}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div key={project.id} onClick={() => setSelectedProject(project)} className="group relative bg-slate-900/50 rounded-3xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all cursor-pointer transform hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-2xl`}><Icon size={28} className="text-white" /></div>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-semibold">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-slate-300 mb-6">{project.shortDesc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-800 rounded-full text-sm border border-slate-700">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedProject(null)}>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full my-8" onClick={(e) => e.stopPropagation()}>
              <div className="bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-center rounded-t-3xl">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-slate-800 rounded-lg">
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 max-h-[70vh] overflow-y-auto">
                <p className="text-lg text-slate-300 mb-8">{projectDetails[selectedProject.id]?.overview}</p>
                {projectDetails[selectedProject.id]?.features && (
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {projectDetails[selectedProject.id].features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {projectDetails[selectedProject.id]?.liveLink && (
                  <a href={projectDetails[selectedProject.id].liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold">
                    <ExternalLink size={20} />{projectDetails[selectedProject.id].linkText}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="contact" className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span></h2>
          <p className="text-slate-300 mb-12 text-xl">I'm always open to discussing new projects and opportunities!</p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: Mail, label: "Email", value: "allurirohithreddy23@gmail.com", href: "mailto:allurirohithreddy23@gmail.com", color: "from-purple-600 to-pink-600" },
              { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/rohith-reddy-alluri-7a828a199/", color: "from-blue-600 to-cyan-600" },
              { icon: Github, label: "GitHub", value: "Check out my code", href: "https://github.com/Rohithreddy39", color: "from-slate-600 to-slate-700" },
              { icon: BarChart3, label: "Tableau", value: "View visualizations", href: "https://public.tableau.com/app/profile/rohith.reddy.alluri5441/vizzes", color: "from-orange-600 to-pink-600" }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a key={idx} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500 transition-all transform hover:scale-105">
                  <div className={`p-4 bg-gradient-to-r ${contact.color} rounded-xl`}><Icon size={24} /></div>
                  <div className="text-left">
                    <div className="font-bold text-lg">{contact.label}</div>
                    <div className="text-slate-400 text-sm">{contact.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Rohith Reddy Alluri</div>
          <p className="text-slate-400 text-sm mb-4">Data Analyst | Machine Learning Enthusiast</p>
          <p className="text-slate-500 text-sm">© 2025 Rohith Reddy Alluri. Crafted with React.</p>
        </div>
      </footer>
    </div>
  );
}
