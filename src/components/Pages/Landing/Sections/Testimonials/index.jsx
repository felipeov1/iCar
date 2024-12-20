import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../../../../data/testimonials";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O Que Os Clientes</h2>
          <h2 className="text-4xl font-bold mb-4">Falam da Plataforma</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="flex-shrink-0 mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="rounded-lg w-52 h-52 object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              "{testimonials[activeIndex].quote}"
            </p>
            <h3 className="font-bold text-lg">
              {testimonials[activeIndex].name}
            </h3>
            <p className="text-gray-500">{testimonials[activeIndex].title}</p>
          </motion.div>

          <div className="flex lg:flex-col md:flex-row gap-1  lg:space-y-0 ml-8 items-center justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  activeIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
