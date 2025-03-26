import { FaFilePdf } from "react-icons/fa";

export function Resume(){
  const resumeLink = "https://drive.google.com/file/d/1SY1mRwyAuPPtasj4U9h8CHW8_GexmZrd/view?usp=sharing";

  return (
    <div id="resume" className="py-12 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-white">My Resume</h2>
      <p className="text-white mt-2">Click below to view or download my resume.</p>

      <div className="mt-6">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <FaFilePdf size={20} />
          <span>View Resume</span>
        </a>
      </div>
    </div>
  );
};

