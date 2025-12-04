import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Moon,
  Sun,
  Code2,
  Award,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import profileImg from "./img/profile.jpg";
import resumeUrl from "./resume/pankaj_resume.pdf";
import iitroparLogo from "./img/iitropar.jpg";
import heroImage from "./img/hero.jpeg";

const githubUrl = "https://github.com/Pankajjsuthar";
const linkedinUrl = "https://www.linkedin.com/in/pankajjsuthar/";
const leetcodeUrl = "https://leetcode.com/u/pankajjsuthar/";
const codeforcesUrl = "https://codeforces.com/profile/pankajjsuthar";
const codechefUrl = "https://www.codechef.com/users/pankajjsuthar";
const twitterUrl = "https://x.com/pankajjjsuthar";
const youtubeUrl = "https://www.youtube.com/@iitian_pankaj";

// const profileImg = './img/profile.jpg';
// const resumeUrl = './resume/pankaj_resume.pdf';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("pankaj@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Pankaj Suthar
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Click to copy email"
              >
                {copied ? <Check size={20} /> : <Mail size={20} />}
                <span className="hidden sm:inline text-sm">
                  {copied ? "Copied!" : "pankaj@example.com"}
                </span>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Hero Background"
              className="w-full h-full/3 object-cover"
              loading="lazy"
            />
            {/* Perfect Dark Overlay – text always readable */}
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
              {/* Profile Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-8xl shadow-xl flex-shrink-0">
                <img
                  src={profileImg}
                  alt="Pankaj Suthar"
                  className="rounded-2xl object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                  Pankaj Suthar
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                  Software Engineer | IIT Ropar
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">
                  Full-stack developer with experience building scalable
                  applications. JEE Advanced AIR 9956 | MITACS Research Intern @
                  Dalhousie University | Former Faculty @ K12 Techno Services.
                  Passionate about clean code, system design, and solving
                  real-world problems.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <SocialLink
                    href={githubUrl}
                    icon={<Github size={20} />}
                    label="GitHub"
                  />
                  <SocialLink
                    href={linkedinUrl}
                    icon={<Linkedin size={20} />}
                    label="LinkedIn"
                  />
                  <SocialLink
                    href={leetcodeUrl}
                    icon={<Code2 size={20} />}
                    label="LeetCode"
                  />
                  <SocialLink
                    href={codeforcesUrl}
                    icon={<Award size={20} />}
                    label="Codeforces"
                  />
                  <SocialLink
                    href={codechefUrl}
                    icon={<Award size={20} />}
                    label="CodeChef"
                  />
                  <SocialLink
                    href={twitterUrl}
                    icon={<Award size={20} />}
                    label="X"
                  />
                  <SocialLink
                    href={youtubeUrl}
                    icon={<Award size={20} />}
                    label="YouTube"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    View Projects
                  </button>
                  <a
                    href={resumeUrl}
                    download="Pankaj_Suthar_Resume.pdf"
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors inline-block"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </section>


        {/* Timeline Section */}
        <section className="py-12 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Journey
            </h2>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

              <div className="space-y-12">
                <TimelineItem
                  year="2018"
                  title="The Spark"
                  description="Cleared NTSE scholarship — Top 1000 in India. Started the journey of excellence."
                  image="📚"
                  alt="📚"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2020"
                  title="IIT Ropar"
                  description="JEE Mains 99.63%ile | JEE Advanced AIR 9956. Admitted to IIT Ropar, Electrical Engineering."
                  image={iitroparLogo}
                  alt="📚"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2022"
                  title="Sports & Leadership"
                  description="Represented IIT Ropar in Inter-IIT Weightlifting. Elected Sports Secretary."
                  image="🏋️"
                  alt="🏋️"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2023"
                  title="Research in Canada"
                  description="MITACS Globalink Research Intern at Dalhousie University. Worked with Dr. Nur Zincir-Heywood on network security analysis."
                  image="🔬"
                  alt="🔬"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2024"
                  title="Building & Freelancing"
                  description="Software internship with US client. Freelance projects. Cracked SSC CGL. Explored multiple domains."
                  image="💼"
                  alt="💼"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2025"
                  title="Teaching & Development"
                  description="Faculty at K12 Techno Services (Physics & Maths). Building this portfolio to transition to full-time Software Engineering."
                  image="👨‍🏫"
                  alt="👨‍🏫"
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Technical Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "React.js",
                "Node.js",
                "TypeScript",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "Docker",
                "AWS",
                "Git",
                "System Design",
                "DSA",
                "REST APIs",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center text-gray-900 dark:text-white font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="US Client Web Platform"
                description="Full-stack application with React, Node.js, and PostgreSQL. Implemented authentication, payment integration, and real-time features."
                tags={["React", "Node.js", "PostgreSQL", "Stripe"]}
                darkMode={darkMode}
              />

              <ProjectCard
                title="CA Firm Management System"
                description="Custom ERP solution for a Noida-based CA firm. Automated workflows, document management, and reporting."
                tags={["Python", "FastAPI", "React", "PDF"]}
                darkMode={darkMode}
              />

              <ProjectCard
                title="Network Security Analysis"
                description="Research project analyzing messaging app network patterns at Dalhousie University. Data processing and visualization."
                tags={["Python", "Wireshark", "Data Analysis"]}
                darkMode={darkMode}
              />

              <ProjectCard
                title="Educational Tools"
                description="Internal platform for K12 with lesson planning, student tracking, and performance analytics for JEE/NEET prep."
                tags={["React", "Node.js", "Charts.js"]}
                darkMode={darkMode}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Open to full-time Software Engineering roles. Let's build
              something great.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={copyEmail}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                {copied ? "Email Copied!" : "Copy Email"}
              </button>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 Pankaj Suthar. 💼</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const TimelineItem = ({ year, title, description, image, alt, darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`timeline-${year}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [year]);

  return (
    <div
      id={`timeline-${year}`}
      className={`relative pl-20 md:pl-28 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
    >
      {/* Year Marker */}
      <div className="absolute left-0 flex items-center">
        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-sm md:text-base z-10">
          {year.slice(2)}
        </div>
        <div className="w-8 md:w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all">
        <div className="flex gap-4 items-start">
          {/* Image Placeholder */}
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-3xl flex-shrink-0">
            <img src={image} alt={alt} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
              {year}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, darkMode }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium">
        View Details <ExternalLink size={16} />
      </button>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default App;
