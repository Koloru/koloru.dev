"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const About = () => {
  const waveVariants = {
    animate: {
        rotate: [0, 14, -8, 14, -4, 10, 0, 0],
        transition: {
            duration: 2.5,
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
            repeat: Infinity,  // Corrected here
            ease: "linear"  // The animation seems to have a constant speed, hence linear
        },
    }
};

  return (
    <div className="z-40 flex h-full w-full flex-col items-center justify-center">
      <div className=" z-40 flex flex-col items-start justify-center gap-4">
        <h1 className="relative mx-auto text-6xl font-bold">
          <motion.div
            initial={{rotate: 0}}
            animate="animate"
            variants={waveVariants}
            style={{
              transformOrigin: "center 70%",
            }}
            className="absolute -top-[130%] -z-30 w-full text-[8rem]"
          >
            👋
          </motion.div>
          Hi there!
        </h1>

        <h2 className="mx-auto text-center text-4xl font-semibold">
          It's nice to meet you
        </h2>

        <div className="mt-4 max-w-lg text-justify text-lg phone:text-left">
          I'm a web developer based in <b>The Philippines</b>. I like to play around
          with technologies and try to build things with them.
        </div>

        <div className="max-w-lg text-justify text-lg phone:text-left">
          I mainly specialize in <b>Frontend Development</b> while also grasping
          backend concepts and technologies.
        </div>

        <div className="max-w-lg text-justify text-lg phone:text-left">
          I love animals mainly dogs, <b>Anime</b> or <b>Japanese Culture</b> in general, and
          taking pictures of random surroundings that I come across. I sometimes
          play <b>Japanese Mahjong</b> so if you want to play hit me up too!
        </div>
        <div className="max-w-lg text-justify text-lg phone:text-left">
          I sometimes play Japanese Mahjong so if you want to play hit me up
          too!🀄🀄
        </div>

        <a
          className="pointer-events-auto mx-auto mt-8 cursor-pointer border-b pb-1 text-2xl font-bold hover:border-b-green-300 hover:text-green-300 text-center phone:border-2"
          href="mailto:neilinfante120@gmail.com"
        >
          Let's have a conversation!
        </a>
      </div>
    </div>
  );
};
export default About;
