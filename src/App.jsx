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
  GraduationCap,
  Route,
} from "lucide-react";
import profileImg from "./img/profile.jpg";
import resumeUrl from "./resume/pankaj_resume.pdf";
import iitroparLogo from "./img/iitropar.jpg";
import heroImage from "./img/hero.jpeg";
import ncertLogo from "./img/NCERT_Logo.webp";
import drNur from "./img/drNur.jpg";
import grad from "./img/grad.jpg";
import schoolImg from "./img/school.jpg";
import College from "./img/college.jpg";

const githubUrl = "https://github.com/Pankajjsuthar";
const linkedinUrl = "https://www.linkedin.com/in/pankajjsuthar/";
const leetcodeUrl = "https://leetcode.com/u/pankajjsuthar/";
const codeforcesUrl = "https://codeforces.com/profile/pankajjsuthar";
const codechefUrl = "https://www.codechef.com/users/pankajjsuthar";
const twitterUrl = "https://x.com/pankajjjsuthar";
const youtubeUrl = "https://www.youtube.com/@iitian_pankaj";

// const profileImg = './img/profile.jpg';
// const resumeUrl = './resume/pankaj_resume.pdf';

// components
import ProjectCard from "./components/ProjectSection";
import ProjectsSection from "./components/ProjectSection";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("psuthar27302@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode == true ? "dark" : ""}>
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
                  {copied ? "Copied!" : "psuthar27302@gmail.com"}
                </span>
              </button>

              {/* <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button> */}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:min-h-[100vh] px-4 pb-16">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Hero Background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            {/* FLEX WRAPPER */}
            <div className="flex flex-col justify-between md:flex-row items-center md:items-center gap-12 md:gap-16">
              {/* IMAGE LEFT */}
              <div
                className="w-40 h-40 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br 
                      from-blue-400 to-purple-500 shadow-2xl flex-shrink-0 overflow-hidden"
              >
                <img
                  src={profileImg}
                  alt="Pankaj Suthar"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* CONTENT RIGHT */}
              <div className="flex-1 text-center md:text-left max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Pankaj Suthar
                </h1>

                <p className="text-md md:text-xl text-blue-300 font-medium mb-4">
                  Software Engineer | IIT Ropar
                </p>

                <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-6">
                  Full-Stack Dev with experience building scalable apps. JEE Adv{" "}
                  <strong>AIR 9956</strong> | JEE Mains 2020
                  <strong> 99.63 %tile</strong> | MITACS Research Intern @
                  Dalhousie Univ, Canada | Phy, Math Faculty @ K12 Techno
                  Services. Passionate about clean code, system design & solving
                  real-world problems.
                </p>

                {/* SOCIAL LINKS */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <SocialLink
                    href={githubUrl}
                    icon={<Github size={15} />}
                    label="GitHub"
                  />
                  <SocialLink
                    href={linkedinUrl}
                    icon={<Linkedin size={15} />}
                    label="LinkedIn"
                  />
                  <SocialLink
                    href={leetcodeUrl}
                    icon={<Code2 size={15} />}
                    label="LeetCode"
                  />
                  <SocialLink
                    href={codeforcesUrl}
                    icon={<Award size={15} />}
                    label="Codeforces"
                  />
                  <SocialLink
                    href={codechefUrl}
                    icon={<Award size={15} />}
                    label="CodeChef"
                  />
                  <SocialLink
                    href={twitterUrl}
                    icon={<Award size={15} />}
                    label="X"
                  />
                  <SocialLink
                    href={youtubeUrl}
                    icon={<Award size={15} />}
                    label="YouTube"
                  />
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 
                       text-white rounded-lg font-medium text-sm md:text-lg"
                  >
                    View Projects
                  </button>

                  <a
                    href={resumeUrl}
                    download="Pankaj_Suthar_Resume.pdf"
                    className="px-4 py-2 md:px-6 md:py-3 bg-gray-200/20 hover:bg-gray-200/30 
                       text-white rounded-lg font-medium text-sm md:text-lg inline-block"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Journey
              </h2>
              <Route size={32} className="text-blue-600 dark:text-blue-400" />
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

              <div className="space-y-8 md:space-y-13">
                <TimelineItem
                  year="2018"
                  title="The Spark"
                  description="Cleared NTSE scholarship — Top 1000 in India. Started the journey of excellence."
                  image={ncertLogo}
                  alt="📚"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2020"
                  title="IIT Ropar"
                  description={
                    <>
                      JEE Mains 99.63%ile | JEE Advanced AIR 9956. Admitted to
                      IIT Ropar, Electrical Engineering. Created a YouTube
                      channel for cryptocurrency knowledge —{" "}
                      <a
                        href="https://www.youtube.com/watch?v=BUDexT54TKk&t=25s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        Visit Channel
                      </a>
                      .
                    </>
                  }
                  image={iitroparLogo}
                  alt="📚"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2022"
                  title="Sports & Leadership"
                  description="Represented IIT Ropar in Inter-IIT Weightlifting. Elected Sports Secretary."
                  image={College}
                  alt="🏋️"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2023"
                  title="Research in Canada"
                  description={
                    <>
                      MITACS Globalink Research Intern at Dalhousie University.
                      Worked with Dr. Nur Zincir-Heywood on network security
                      analysis. Created some vlogs{" "}
                      <a
                        href="https://www.youtube.com/watch?v=Q6nHKfpONrI" // ← add your link here
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        Here
                      </a>
                      .
                    </>
                  }
                  image={drNur}
                  alt="🔬"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2024"
                  title="Building & Freelancing"
                  description={`Graduated from IIT Ropar and continued my Software internship with US client (Golden Sparrow LLC). Grabbed 1 Lakh Freelance project and finished it. Cracked SSC CGL out of 26 lac candidates. Explored multiple domains.`}
                  image={grad}
                  alt="💼"
                  darkMode={darkMode}
                />

                <TimelineItem
                  year="2025"
                  title="Teaching & Development"
                  description={
                    <>
                      Faculty at K12 Techno Services (Physics & Maths).{" "}
                      <a
                        href="https://x.com/pankajjjsuthar/status/1989311773644599400?s=20"
                        className="text-blue-600 underline"
                        target="_blank"
                      >
                        Video
                      </a>
                      . Building this portfolio to transition to full-time
                      Software Engineering.
                    </>
                  }
                  image={schoolImg}
                  alt="👨‍🏫"
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center tracking-wide">
              Technical Skills
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
                  className="relative group p-5 rounded-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 text-center text-gray-900 dark:text-white font-semibold shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                  <span className="relative z-10">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />

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

const TimelineItem = ({ year, title, description, image, alt }) => {
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
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
    >
      {/* ------------ MOBILE VIEW ------------ */}
      <div className="md:hidden">
        <div className="flex gap-4 items-start">
          {/* Left: Year Badge + Vertical Line */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
              {year.slice(2)}
            </div>

            <div className="w-1 h-20 bg-gradient-to-b from-blue-500 via-gray-300 to-transparent dark:from-blue-400 dark:via-gray-600 dark:to-transparent mt-2"></div>
          </div>

          {/* Right: Card */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all">
              {image && (
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}

              <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-2 tracking-wider">
                {year}
              </span>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ DESKTOP VIEW (image-left layout) ------------ */}
      <div className="hidden md:flex relative pl-32">
        {/* Year + Horizontal Line */}
        <div className="absolute left-0 top-6 flex items-center gap-0">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-bold text-lg flex items-center justify-center shadow-lg">
            {year.slice(2)}
          </div>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-gray-300 dark:from-blue-500 dark:via-blue-400 dark:to-gray-700"></div>
        </div>

        {/* Card With Image Left & Content Right */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-7 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all flex items-center gap-8 w-full">
          {/* Left: Image */}
          {image && (
            <div className="w-48 h-48 rounded-xl overflow-hidden shadow-md flex-shrink-0">
              <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Right: Content */}
          <div className="flex-1">
            <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full mb-3 tracking-wider">
              {year}
            </span>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex text-xs md:text-md items-center gap-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default App;
