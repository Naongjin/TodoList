import Image from "next/image";
import PlusIcon from "../../assets/icon/plus-gray.svg";
import EditIcon from "../../assets/icon/edit.svg";
import React from "react";

interface BtnSmallProps {
  type: "Plus" | "Edit";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Btn_Small({ type = "Plus", onChange }: BtnSmallProps) {
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
    <label
      className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center cursor-pointer`}
    >
      <input
        type="file"
        className="hidden"
        accept="image/*"
        onChange={onChange}
      />
      <Image src={imgSrc} alt="icon" height={24}></Image>
    </label>
  );
}
