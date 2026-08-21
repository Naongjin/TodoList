"use client";

import Image from "next/image";
import ImgLarge from "../../assets/images/img-large.svg";
import ImgSmall from "../../assets/images/img-small.svg";

interface logoProps {
  size: "Large" | "Small";
}

export default function Logo({ size = "Large" }: logoProps) {
  const logoSrc = size === "Large" ? ImgLarge : ImgSmall;

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <div onClick={handleLogoClick} className="cursor-pointer inline-block">
      <Image src={logoSrc} alt="로고" height={40}></Image>
    </div>
  );
}
