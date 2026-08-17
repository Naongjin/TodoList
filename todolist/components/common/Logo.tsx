import Link from "next/link";
import Image from "next/image";
import ImgLarge from "../../assets/images/img-large.svg";

export default function Logo() {
  return (
    <Link href={`/`}>
      <Image src={ImgLarge} alt="로고" height={40}></Image>
    </Link>
  );
}
