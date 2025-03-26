import { motion } from "framer-motion";

export function Intro() {
    return (
        <div>
            <div id="intro" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white p-8">
                
                <motion.div
                    className="md:w-3/5 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl font-bold leading-tight">
                        Hi, I'm <span className="text-blue-400">Mohd Adil</span>
                    </h1>
                    <p className="text-xl mt-6 leading-relaxed">
                        I'm a <span className="text-blue-400">3rd-year undergraduate</span> at{" "}
                        <span className="text-yellow-400">IIT Kanpur</span>, passionate about{" "}
                        <span className="text-green-400">Web Development</span>,{" "}
                        <span className="text-pink-400">Machine Learning</span>, and{" "}
                        <span className="text-purple-400">Competitive Programming</span>.
                    </p>
                    <p className="mt-4 text-lg text-gray-400">
                        Selected for <strong className="text-white">Amazon ML Summer School 2024</strong>
                    </p>
                </motion.div>

                
                <motion.div
                    className="md:w-2/5 flex justify-center mt-8 md:mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                    <img
                        src="https://img.freepik.com/free-vector/programmer-doing-his-job-flat-design_52683-14150.jpg?t=st=1742972696~exp=1742976296~hmac=f7505d4e4aa88b5095fda705e2be4c2de96c5f50f850aa2c0cadd407ff921e2d&w=826"
                        alt="Developer Illustration"
                        className="w-80 md:w-96 rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
}
