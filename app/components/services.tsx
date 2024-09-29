"use client";

import { motion } from "framer-motion";
import {
  FaGlobe,
  FaMobileAlt,
  FaBolt,
  FaPaintBrush,
  FaRocket,
  FaLink,
} from "react-icons/fa"; // Importing icons from react-icons

const services = [
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

export default function Services() {
  return (
    <motion.div
      className="leading-[1.5] mb-10 px-4 text-xl font-medium sm:text-2xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="services"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-center mb-8">خدمات من</h2>
        <p className="text-lg text-gray-600 mb-12">
          کارهایی که میتوانم انجام دهم
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              {service.name}
            </h3>
            <p className="text-gray-600 mt-2 text-center text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
