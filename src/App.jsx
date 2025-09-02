import { FaPython, FaJsSquare, FaReact, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiDocker, SiPostman, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";

export default function App() {
  const skills = [
    { icon: <FaPython size={35}/>, name: "Python" },
    { icon: <FaJsSquare size={35}/>, name: "JavaScript" },
    { icon: <SiTypescript size={35}/>, name: "TypeScript" },
    { icon: <FaReact size={35}/>, name: "React" },
    { icon: <SiNextdotjs size={35}/>, name: "Next.js" },
    { icon: <SiTailwindcss size={35}/>, name: "TailwindCSS" },
    { icon: <SiMysql size={35}/>, name: "MySQL" },
    { icon: <SiPostgresql size={35}/>, name: "PostgreSQL" },
    { icon: <SiMongodb size={35}/>, name: "MongoDB" },
    { icon: <SiDocker size={35}/>, name: "Docker" },
    { icon: <SiPostman size={35}/>, name: "Postman" },
  ];

  const projects = [
    {
      title: "Postly",
      img: "https://placehold.co/600x400",
      live: "#",
      github: "https://github.com/pigglegiggle/Blog-NextJS",
      desc: [
        "A Next.js blog application using Prisma ORM for database management and CRUD operations, featuring user authentication, dynamic routing, and a responsive UI built with Tailwind CSS.",
      ]
    },
    {
      title: "Chattr",
      img: "https://placehold.co/600x400",
      live: "#",
      github: "https://github.com/pigglegiggle/chatapp-WebSocket",
      desc: [
        "A platform for instant messaging in group chats, with real-time communication enabled through WebSocket integration.",
      ]
    },
    {
      title: "TraitRoller",
      img: "https://placehold.co/600x400",
      live: "https://reroll-sim.netlify.app/",
      github: "#",
      desc: [
        "A React application simulating anime-style trait rerolling with gacha mechanics, featuring a clean, responsive UI built with Tailwind CSS and Framer Motion animations.",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto p-6 flex flex-col gap-6">
        {/* Top columns */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column */}
          <div className="bg-white md:w-1/3 p-6 rounded-lg shadow flex-shrink-0 flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Patcharaphon Thepwijit</h1>
              <p className="flex items-center text-gray-600 mb-2"><FaMapMarkerAlt className="mr-2"/> Bangkok, Thailand</p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">Contact</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2"><FaEnvelope size={20}/> sinpw782@gmail.com</li>
                <li className="flex items-center gap-2"><FaPhone size={20}/> 0952653077</li>
                <li className="flex items-center gap-2"><FaGithub size={20}/> <a href="https://github.com/pigglegiggle" className="text-blue-600">GitHub</a></li>
              </ul>
            </div>

            {/* Skills icons */}
            <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">Skills</h2>
              <div className="grid grid-cols-6 gap-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="flex justify-center items-center relative group cursor-pointer">
                    <div className="text-4xl text-gray-700 hover:text-blue-600 transition">
                      {skill.icon}
                    </div>
                    <span className="absolute bottom-[-1.5rem] opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">Certifications</h2>
              <div className="flex items-center justify-between">
                <p className="text-gray-700">Hult Prize OnCampus Competition at KMITL</p>
                <a href="/certs/hultprize.pdf" download className="bg-blue-600 text-white px-2 py-1 rounded flex items-center gap-1">
                  <FaFileDownload />
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="bg-white flex-1 p-6 rounded-lg shadow flex flex-col gap-6">
            {/* Summary */}
            <div>
              <h2 className="text-2xl font-semibold mb-2 border-b border-gray-300 pb-1">Summary</h2>
              <p className="text-gray-700">
                Full-stack developer with experience in JavaScript, Python, and SQL, and familiarity with business intelligence tools like Power BI and Tableau. I combine coding and data visualization to deliver actionable insights and support data-driven decisions.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">Education</h2>
              <p className="text-gray-700 font-semibold">Business Information Technology (International Program)</p>
              <p className="text-gray-600">King Mongkut's Institute of Technology Ladkrabang, Bangkok, Thailand | 2022 - Present</p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xl font-semibold mb-2 border-b border-gray-200 pb-1">Work Experience</h2>
              <p className="text-gray-700 font-semibold">Freelance Web Developer (Fiverr) | 2025 - Present</p>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>Designed and developed responsive landing pages tailored to client requirements.</li>
                <li>Implemented email form submission systems to capture and manage user inquiries.</li>
              </ul>
            </div>

            {/* GIF at bottom */}
            <div className="mt-auto flex justify-center">
              <img src="https://media.tenor.com/ipuTozw3PXsAAAAj/pixel-cat.gif" alt="Animated" className="h-48 object-contain"/>
            </div>
          </div>
        </div>

        {/* Projects 3-column grid */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover"/>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold mb-2 text-lg">{project.title}</h3>
                  <ul className="text-gray-700 mb-4 flex-1">
                    {project.desc.map((d,i) => <p key={i}>{d}</p>)}
                  </ul>
                  <div className="mt-auto flex gap-2">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      <FaExternalLinkAlt/> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900">
                      <FaGithub/> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
