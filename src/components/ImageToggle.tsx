"use client";
import Image from "next/image";
import kita from "@/assets/kita.jpg";
import kitaPeace from "@/assets/kitaPeace.gif";
import { useState } from "react";

const ImageToggle = () => {
  const [toggle, setToggle] = useState(false);

  setTimeout(() => setToggle((prev) => !prev), 1500);
  const imageUrl = toggle ? kita.src : kitaPeace.src;

  return (
    <div className="max-h-[300px] max-w-[300px] overflow-hidden">
        <Image
          src={imageUrl}
          alt="kita chan"
          width={200}
          height={200}
          className="rounded-xl"
        />
    </div>
  );
};

export default ImageToggle;
