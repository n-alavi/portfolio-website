export default function Navbar() {
  return (
    <div className="flex flex-row items-center gap-8 px-6 sticky top-0 z-50 h-12 rounded-full border border-gray-200 border-opacity-40 bg-white/[0.5] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.3rem]">
      <a
        href="#intro"
        className="text-gray-700 px-3 py-1 rounded-full hover:text-white hover:bg-purple-200 transition-all duration-300 ease-in-out"
      >
        خانه
      </a>
      <a
        href="#about"
        className="text-gray-700 px-3 py-1 rounded-full hover:text-white hover:bg-purple-200 transition-all duration-300 ease-in-out"
      >
        درباره من
      </a>
      <a
        href="#skills"
        className="text-gray-700 px-3 py-1 rounded-full hover:text-white hover:bg-purple-200 transition-all duration-300 ease-in-out"
      >
        مهارت ها
      </a>
      <a
        href="#services"
        className="text-gray-700 px-3 py-1 rounded-full hover:text-white hover:bg-purple-200 transition-all duration-300 ease-in-out"
      >
        خدمات
      </a>
      <a
        href="#projects"
        className="text-gray-700 px-3 py-1 rounded-full hover:text-white hover:bg-purple-200 transition-all duration-300 ease-in-out"
      >
        پروژه ها
      </a>
      <a
        href="#contact"
        className="text-gray-700 px-3 py-1 rounded-full hover:text-white hover:bg-purple-200 transition-all duration-300 ease-in-out"
      >
        تماس با ما
      </a>
    </div>
  );
}
