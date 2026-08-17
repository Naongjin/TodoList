import Image from "next/image";
import ImgLarge from "../../assets/images/img-large.svg";
export default function GNB_Large() {
  return (
    <div className="w-full h-[60px] flex items-center justify-center">
      <div className="w-1/2 flex items-center">
        <Image src={ImgLarge} alt="로고" height={40}></Image>
      </div>
    </div>
  );
}
