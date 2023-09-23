import { FaReact, FaFigma, FaSass } from "react-icons/fa";

import {
  SiAdobephotoshop,
  SiNextdotjs,
  SiVite,
  SiFramer,
  SiPostgresql,
  SiMysql,
  SiStyledcomponents,
  SiPug,
  SiPrisma,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import {DiMongodb} from 'react-icons/di'

export const techData = [
  { name: "React", link: "https://reactjs.org/", icon: FaReact },
  { name: "Vite", link: "https://vitejs.dev/", icon: SiVite },
  { name: "Nextjs", link: "https://nextjs.org/", icon: SiNextdotjs },
  { name: "Pug/Jade", link: "https://pugjs.org/", icon: SiPug },

  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  {
    name: "Zustand",
    link: "https://github.com/pmndrs/zustand",
    icon: GiBearFace,
  },
  { name: "Express", link: "https://expressjs.com/", icon: SiExpress },

  { name: "SCSS", link: "https://sass-lang.com/", icon: FaSass },
  { name: "Tailwind", link: "https://tailwindcss.com/", icon: SiTailwindcss },
  {
    name: "Styled Components",
    link: "https://styled-components.com/",
    icon: SiStyledcomponents,
  },
  {
    name: "Framer Motion",
    link: "https://www.framer.com/api/motion/",
    icon: SiFramer,
  },
  { name: "Figma", link: "https://www.figma.com/", icon: FaFigma },
  {
    name: "Photoshop",
    link: "https://www.adobe.com/products/photoshop.html",
    icon: SiAdobephotoshop,
  },
  { name: "Prisma", link: "https://www.prisma.io/", icon: SiPrisma },
  { name: "Mysql", link: "https://www.mysql.com/", icon: SiMysql },
  {"name": "MongoDB", "link": "https://www.mongodb.com/", "icon": DiMongodb},
  {
    name: "Postgresql",
    link: "https://www.postgresql.org/",
    icon: SiPostgresql,
  },
];
