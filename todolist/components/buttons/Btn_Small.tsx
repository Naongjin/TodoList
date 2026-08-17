import Image from "next/image";
import PlusIcon from "../../assets/icon/plus-gray.svg";
import EditIcon from "../../assets/icon/edit.svg";

interface BtnSmallProps {
  type: "Plus" | "Edit";
}

export default function Btn_Small({ type = "Plus" }: BtnSmallProps) {
  const config = {
    Plus: {
      imgSrc: PlusIcon,
      colorClass: "bg-slate-200 border-none",
    },
    Edit: {
      imgSrc: EditIcon,
      colorClass: "bg-slate-900/50 border-2 border-slate-900 backdrop-blur-sm",
    },
  };

  const { imgSrc, colorClass } = config[type] || config.Plus;

  return (
    <div
      className={`w-[64px] h-[64px] ${colorClass} rounded-full flex items-center justify-center`}
    >
      <Image src={imgSrc} alt="icon" height={24}></Image>
    </div>
  );
}
