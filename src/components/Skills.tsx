export function Skills() {
  const skills = [
    "C++", "Python", "JavaScript", "TypeScript",
    "React", "TailwindCSS", "Node.js", "Express.js",
    "MongoDB", "SQL", "Git",
    "Machine Learning",
  ];

  const projects = [
    {
      title: "Brainly",
      description: "'Your Brain'—a type of personal knowledge management (PKM) tool that helps store important links, documents, and ideas in an organized way",
      github: "https://github.com/mdadil00/Brainly",
    },
    {
      title: "Movie Recommendation System",
      description: "Implemented item-based collaborative filtering to generate the top five movie recommendations.",
      github: "https://github.com/mdadil00/Movie-RecSys",
    },
    {
      title: "Quantifying-Investors-Emotions-for-Stock-Market-Prediction",
      description: "This project explores how investor emotions influence market behavior and predict daily stock price movements.",
      github: "https://github.com/mdadil00/Quantifying-Investors-Emotions-for-Stock-Market-Prediction",
    }
  ];

  return (
    <div className="bg-gray-900 text-white border-t border-gray-800 py-12">
      <div id="skills" className="text-center">
        
        <h2 className="text-3xl font-bold text-white">My Skills</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-3 rounded-lg shadow-md hover:bg-blue-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mt-12">Projects</h2>
        <div className="mt-6 space-y-6 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md text-left">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-400 font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
