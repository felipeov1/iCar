import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CirclePlay } from "lucide-react";
import HeroImage from "/src/images/car-1-1.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full bg-[#fcfcfc] pt-[3.6rem]"
    >
      <div className="container-fluid mx-auto h-full w-full flex flex-col-reverse lg:flex-row items-center lg:justify-between">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-full lg:max-w-[650px] md:ml-5 p-6 lg:ml-48"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            Mais Praticidade
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            Para <span className="text-blue-600">o Cuidado</span>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4 lg:mb-6">
            do Seu Veículo
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8">
            Com nossa plataforma, agendar lavagens nunca foi tão fácil. Encontre os melhores lava-rápidos da
            sua região e agende uma lavagem com apenas alguns cliques. Tenha mais agilidade e comodidade na palma da sua mão, economize tempo e aproveite serviços de alta qualidade de forma prática e rápida!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Agendar Lavagem
            </button>
            <button className="bg-transparent text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors flex items-center group">
              <CirclePlay className="text-orange-500 mr-2 text-xl group-hover:text-white" />
              Assistir Vídeo
            </button>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <img
            src={HeroImage}
            alt="ICAR Platform"
            className="w-full h-full object-fill max-h-[calc(100vh-3.6rem)]"
          />
        </motion.div>
      </div>


      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDownIcon className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
