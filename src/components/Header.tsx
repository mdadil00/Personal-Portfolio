import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md p-4 z-50">
                <div className="container mx-auto flex justify-between items-center">

                    <h1 className="text-xl font-bold text-white">Mohd Adil (IIT Kanpur)</h1>
                    <div className="hidden md:flex space-x-6">

                        <a href="#intro" className="text-gray-300 hover:text-blue-400 transition-all">About me</a>
                        <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-all">Skills</a>
                        <a href="#resume" className="text-gray-300 hover:text-blue-400 transition-all">Resume</a>
                        <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all">Contact</a>
                    </div>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-2 bg-gray-800 shadow-lg rounded-lg text-center py-4 space-y-4">
                        <a href="#intro" className="block text-gray-300 hover:text-blue-400 transition-all">About Me</a>
                        <a href="#skills" className="block text-gray-300 hover:text-blue-400 transition-all">Skills</a>
                        <a href="#resume" className="block text-gray-300 hover:text-blue-400 transition-all">Resume</a>
                        <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-all">Contact</a>
                    </div>
                )}
            </nav>
        </div>
    );
}
