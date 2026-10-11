import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { motion } from "framer-motion";
import FlipCard from "./FlipCard";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <FlipCard
          front={<RiReactjsLine className="text-7xl text-cyan-400" />}
          back={<div>React JS</div>}
        />
        <FlipCard
          front={<RiNextjsLine className="text-7xl" />}
          back={<div>Next JS</div>}
        />
        <FlipCard
          front={<FaNodeJs className="text-7xl text-green-900" />}
          back={<div>Node JS</div>}
        />
        <FlipCard
          front={<DiAngularSimple className="text-7xl text-red-500" />}
          back={<div>Angular</div>}
        />
        <FlipCard
          front={<FaVuejs className="text-7xl text-green-900" />}
          back={<div>Vue JS</div>}
        />
        <FlipCard
          front={<SiMongodb className="text-7xl text-green-500" />}
          back={<div>MongoDB</div>}
        />
        <FlipCard
          front={<SiTypescript className="text-7xl text-blue-500" />}
          back={<div>Typescript</div>}
        />
        <FlipCard
          front={<DiJavascript className="text-7xl text-yellow-400" />}
          back={<div>Javascript</div>}
        />
      </motion.div>
    </div>
  );
};

export default Technologies;
