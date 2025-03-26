import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Contact() {

    return <div>
        <div id="contact" className="py-12 bg-gray-900 text-center border">
            <h2 className="text-3xl font-bold text-white">Connect with Me</h2>

            <div className="mt-6 flex justify-center space-x-6">
                <a
                    href="https://www.linkedin.com/in/mohd-adil-5345a524a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    <FaLinkedin size={20} />
                    <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/mdadil00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                </a>

                <a
                    href="mailto:your.email@example.com"
                    className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    <FaEnvelope size={20} />
                    <span>Email</span>
                </a>
            </div>
        </div>
    </div>


}