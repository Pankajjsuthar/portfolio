import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

import Project1 from '../img/project1.png'
import Project2 from '../img/project2.png'
import Project3 from '../img/project3.png'
import Project4 from '../img/project4.png'

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  darkMode,
  fullDetails = {}, 
  image = null 
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card Preview */}
      <div className={`relative rounded-2xl overflow-hidden h-64 cursor-pointer group transition-transform hover:scale-105 ${
        image ? '' : 'bg-gradient-to-br from-blue-400 to-purple-500'
      }`}>
        {/* Background Image */}
        {image && (
          <img 
            src={image} 
            alt={title}
            className="absolute bg-black opacity-45 inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Top Section - Title */}
          <div>
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              {title}
            </h3>
          </div>

          {/* Bottom Section - Description & Button */}
          <div className="space-y-4">
            {/* Brief Description */}
            <p className="text-white/90 text-sm drop-shadow leading-relaxed line-clamp-2">
              {typeof description === 'string' 
                ? description.replace(/<[^>]*>/g, '') 
                : description[0]?.replace(/<[^>]*>/g, '')}
            </p>

            {/* Tags Preview */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                  +{tags.length - 3}
                </span>
              )}
            </div>

            {/* View Details Button */}
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-gray-500 text-gray-900 font-semibold py-2 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 drop-shadow-lg"
            >
              View Details
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
            
            {/* Modal Header */}
            <div className={`${
              image ? '' : 'bg-gradient-to-r from-blue-400 to-purple-500'
            } relative h-48 flex items-end p-6`}>
              {image && (
                <img 
                  src={image} 
                  alt={title}
                  className="absolute bg-black inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="relative z-10 w-full flex justify-between items-end">
                <h2 className="text-3xl font-bold text-white drop-shadow">{title}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all backdrop-blur-sm"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className={`p-8 space-y-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Overview</h3>
                {Array.isArray(description) ? (
                  <ul className={`space-y-3 list-disc list-inside ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {description.map((point, index) => (
                      <li 
                        key={index} 
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    ))}
                  </ul>
                ) : (
                  <p 
                    className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                )}
              </div>

              {/* Technologies/Tags */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        darkMode
                          ? 'bg-blue-900/50 text-blue-300 border border-blue-700'
                          : 'bg-blue-100 text-blue-700 border border-blue-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Details */}
              {fullDetails && Object.keys(fullDetails).length > 0 && (
                <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                  {fullDetails.lessons && (
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📚</span>
                      <div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Lessons</p>
                        <p className="font-semibold">{fullDetails.lessons}</p>
                      </div>
                    </div>
                  )}
                  {fullDetails.duration && (
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⏱️</span>
                      <div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                        <p className="font-semibold">{fullDetails.duration}</p>
                      </div>
                    </div>
                  )}
                  {fullDetails.level && (
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📈</span>
                      <div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Level</p>
                        <p className="font-semibold">{fullDetails.level}</p>
                      </div>
                    </div>
                  )}
                  {fullDetails.link && (
                    <a
                      href={fullDetails.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all"
                    >
                      Visit Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Projects Section
export default function ProjectsSection() {
  const darkMode = false; // Change this based on your state

  return (
    <section id="projects" className="py-12 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="DSP-MDM Enterprise Mobility Management"
            description={[
              "Built & deployed a scalable EMM platform managing 200+ drivers with dashboards, APIs & automated workflows. <a href='https://dspmdm.com' target='_blank' class='text-blue-500 underline'>Live Demo</a>.",
              "Exposed high-performance REST APIs (Node.js, Express, Flask) for compliance & employee tracking.",
              "Developed driver scheduling app with Google Apps Script & JS, fully FMCSA DoT compliant.",
              "Enhanced reliability with logging, monitoring dashboards & automated scheduling.",
            ]}
            tags={[
              "Node.js",
              "Python",
              "MongoDB",
              "Firebase",
              "Docker",
              "EMM",
            ]}
            darkMode={darkMode}
            image={Project1} // Add your image URL here
            fullDetails={{
              // Optional: Add additional details if needed
              // link: "https://dspmdm.com"
            }}
          />

          <ProjectCard
            title="Automation & Web Dev - Golden Sparrow LLC"
            description={[
              "Automated US Govt claim form PDF processing, boosting business efficiency by 80%.",
              "Upgraded client websites (<a href='https://bluejaydsp.com/' target='_blank' class='text-blue-500 underline'>Bluejay Delivery </a>, <a href='https://www.goldensparrow.us/' target='_blank' class='text-blue-500 underline'>Golden Sparrow LLC </a>, <a href='https://magicwheel.us/' target='_blank' class='text-blue-500 underline'>MagicWheel US </a>) with modern JS, HTML, CSS & EmailJS.",
              "Implemented real-time workflows and optimized backend services for speed & scalability.",
              "Tech Stack: Node.js, Python, Firebase, Docker, Google Apps Script, Linux CLI.",
            ]}
            tags={[
              "JavaScript",
              "Node.js",
              "Python",
              "HTML",
              "CSS",
              "Firebase",
              "Automation",
              "WebDev",
            ]}
            darkMode={darkMode}
            image={Project2} // Add your image URL here
          />

          <ProjectCard
            title="Network Security Analysis"
            description="Research project analyzing messaging app network patterns at Dalhousie University. Data processing and visualization."
            tags={["Python", "Wireshark", "Data Analysis"]}
            darkMode={darkMode}
            image={Project4} // Add your image URL here
          />

          <ProjectCard
            title="Educational Tools"
            description="Internal platform for K12 with lesson planning, student tracking, and performance analytics for JEE/NEET prep."
            tags={["React", "Node.js", "Charts.js"]}
            darkMode={darkMode}
            image={Project3} // Add your image URL here
          />
        </div>
      </div>
    </section>
  );
}