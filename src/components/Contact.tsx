import { motion } from "framer-motion";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane, FaList } from "react-icons/fa";

const data = [
  {
    link: "https://github.com/Koloru",
    icon: <AiFillGithub />,
  },
  {
    link: "https://www.instagram.com/colorspectacle/",
    icon: <AiFillInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/infanteneil/",
    icon: <AiFillLinkedin />,
  },
  {
    link: "https://t.me/Koloruuu",
    icon: <FaTelegramPlane />,
  }
];

const Contact = () => {

  return (
    <motion.div className="pointer-events-auto flex gap-4">
      {data.map((e, idx) => (
        <motion.a
          href={e.link}
          key={idx}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 * idx, duration: 0.4 * idx }}
          className="cursor-pointer text-4xl hover:text-red-500"
        >
          {e.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};
export default Contact;
