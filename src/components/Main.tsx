"use client"
import { motion } from "framer-motion";
import ImageToggle from "@/components/ImageToggle";
import Contact from "@/components/Contact";
import { cn } from "@/utils/cn";

const initial = {
  y: 50,
  opacity: 0,
};
const animate = {
  y: 0,
  opacity: 100,
};

const Main = () => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 0.4, type: "spring", damping: 10 }}
      className="z-40 flex h-full min-h-screen flex-col items-center justify-center gap-4 "
    >
      <ImageToggle />
      <motion.h1
        initial={initial}
        animate={animate}
        transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        className="text-4xl md:text-6xl font-bold tracking-wider text-center"
      >
        Neil / Koloru
      </motion.h1>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="md:text-md text-center font-light text-sm"
      >
        Frontend Developer who likes to take random pictures
        <p className="font-bold">Manila, Philippines</p>
      </motion.div>
      <motion.h2
        initial={initial}
        animate={animate}
        transition={{ duration: 0.4, delay: 0.5 }}
        className={cn("mb-2 mt-6 text-2xl font-light capitalize text-center")}
      >
        I randomly make things on a whim.
      </motion.h2>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="text-xs"
      >
        Feel free to contact me through the links below
      </motion.div>
      <Contact />
    </motion.div>
  );
};
export default Main;
