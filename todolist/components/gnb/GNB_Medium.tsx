import Image from "next/image";
import ImgLarge from "../../assets/images/img-large.svg";
export default function GNB_Medium() {
  return (
    <div className="w-full h-[60px] flex pl-[24px]">
      <Image src={ImgLarge} alt="로고" height={40}></Image>
    </div>
  );
}
