// Icon Imports
import { BiSolidHomeHeart, BiUser, BiImageAlt } from "react-icons/bi";
import { AiOutlineProfile } from "react-icons/ai";
import { PiSquaresFour } from "react-icons/pi";

// Component imports
import NavItem from "@/components/NavItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="phone:w-full phone:bg-slate-900 phone:rounded-lg phone:p-4  fixed z-50 flex md:flex-col items-center justify-center md:min-h-screen gap-6 md:pl-3 md:pr-2 md:border-r-2">
      <Link href='/#top'>
        <NavItem
          text={"Home"}
          icon={<BiSolidHomeHeart size="40" />}
          className="rotate-12 hover:rotate-0"
        />
      </Link>
      <Link href='/#about'>
        <NavItem
          text={"About"}
          icon={<BiUser size="40" />}
          className="rotate-0 hover:rotate-12"
        />
      </Link>
      <Link href='/#projects'>
        <NavItem
          text={"Projects"}
          icon={<PiSquaresFour size="40" />}
          className="rotate-0 hover:rotate-12"
        />
      </Link>
      <Link href='gallery'>
        <NavItem
          text={"Gallery"}
          icon={<BiImageAlt size="40" />}
          className="rotate-12 hover:rotate-0"
        />
      </Link>
      <a href="https://resume.koloru.dev/" target="_blank">
        <NavItem
          text={"Resume"}
          icon={<AiOutlineProfile size="40" />}
          className="rotate-12 hover:rotate-0"
        />
      </a>
      
    </div>
  );
};

export default Navbar;
