import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import {
  FaGlobe,
  FaMobileAlt,
  FaBolt,
  FaPaintBrush,
  FaRocket,
  FaLink,
} from "react-icons/fa"; // Importing icons from react-icons

export const services = [
  {
    icon: <FaGlobe className="text-5xl text-pink-500" />, // Replacing emoji with icon
    name: "توسعه وبسایت شخصی",
    description:
      "من وبسایت های کاملا سفارشی سازی شده با استفاده از فناوری های مدرن با تضمین عملکرد، امنیت و تجربه ای منحصر به فرد ایجاد میکنم.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-pink-500" />,
    name: " طراحی وبسایت ریسپانسیو",
    description:
      " با ارائه یک تجربه کاربری بهینه وبسایت شما در همه دستگاه ها و صفحه نمایش ها عالی به نظر می رسد.",
  },
  {
    icon: <FaBolt className="text-5xl text-pink-500" />,
    name: "اپلیکیشن های تک صفحه ای",
    description: "ساخت برنامه های تک صفحه ای پویا، مقیاس پذیر و سریع",
  },
  {
    icon: <FaPaintBrush className="text-5xl text-pink-500" />,
    name: "طراحی تجربه کاربری و رابط کاربری",
    description:
      "پیاده سازی دقیق طرح های کاربر پسند با اطمینان از قابلیت استفاده و دسترسی",
  },
  {
    icon: <FaRocket className="text-5xl text-pink-500" />,
    name: "بهینه سازی وبسایت",
    description:
      "بهبود سرعت، سئو و عملکرد کلی وبسایت شما به وسیله بهینه سازی کد برای تجربه کاربری بهتر",
  },
  {
    icon: <FaLink className="text-5xl text-pink-500" />,
    name: "یکپارچه سازی API",
    description:
      "یکپارچه سازی API برای ارائه محتوای پویا و خدمات به وبسایت شما",
  },
];

export const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    description: "Markup language used for structuring and presenting content",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    description:
      "Styling language used for designing visually engaging web pages",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500 text-4xl" />,
    description:
      "Programming language for creating dynamic and interactive content",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500 text-4xl" />,
    description:
      "Utility-first CSS framework for rapidly building modern designs",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400 text-4xl" />,
    description:
      "JavaScript library for building user interfaces with components",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black text-4xl" />,
    description:
      "React framework for server-side rendering and building full-stack applications",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-4xl" />,
    description:
      "Superset of JavaScript adding static types for enhanced development",
  },
];

export const navLinks = [
  { href: "#intro", label: "خانه" },
  { href: "#about", label: "درباره من" },
  { href: "#skills", label: "مهارت ها" },
  { href: "#services", label: "خدمات" },
  { href: "#projects", label: "پروژه ها" },
  { href: "#contact", label: "تماس با ما" },
];
