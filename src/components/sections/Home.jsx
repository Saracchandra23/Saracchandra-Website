import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const aboutMe = [
    "Full Stack Web Developer",
    "Software Engineer", 
    "Otaku",
    "Soccer Lover",
    "Technology Enthusiast",
    "Traveler",
    "Cooking Enthusiast",
    "One Piece Series Fan"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex items-center justify-center z-10 px-4 space-x-8">
          {/* Text Section */}
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Saracchandra Cheedella
            </h1>
            <div className="flex flex-wrap gap-2">
              {aboutMe.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition mb-4"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <a
                href="#workexperience"
                className=" text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Work Experience
              </a>

              <a
                href="#contact"
                className=" text-white py-3 px-6 rounded font-medium transition-all duration-200 
                 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/Saracchandra-Website/src/assets/luffy.jpg" // Replace with your image path
              alt="Saracchandra Cheedella"
              className="w-150 h-150  object-cover" // Set the image size and rounded corners
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
