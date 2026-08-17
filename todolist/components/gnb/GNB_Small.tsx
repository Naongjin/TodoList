import Image from "next/image";
import ImgSmall from "../../assets/images/img-small.svg";
export default function GNB_Medium() {
  return (
    <div className="w-full h-[60px] flex pl-[24px]">
      <Image src={ImgSmall} alt="로고" height={40}></Image>
    </div>
  );
}
