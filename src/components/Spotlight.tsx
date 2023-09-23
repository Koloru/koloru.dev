"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const Spotlight = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouseMove({
    clientX,
    clientY,
  }: React.MouseEvent) {
    let xPosition = clientX;
    let yPosition = clientY;

    x.set(xPosition);
    y.set(yPosition);
  }
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="fixed inset-0"
      style={{
        background: useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, #f78b83,  transparent, transparent)`,
      }}
    >
    </motion.div>
  );
};

export default Spotlight;
