"use client";

import Image from "next/image";
import CheckBox from "../../assets/icon/checkbox-default.svg";
import CheckBox_Checked from "../../assets/icon/checkbox-checked.svg";

interface CheckListProps {
  onToggle?: (e: React.MouseEvent) => void;
  label?: string;
  checked?: boolean;
}

export default function CheckList({
  label,
  checked = false,
  onToggle,
}: CheckListProps) {
  const bgClass = checked ? "bg-violet-100" : "bg-white";
  const typoClass = checked ? "line-through text-slate-800" : "text-slate-900";

  return (
    <div
      className={`w-full h-[50px] flex items-center border-2 rounded-[27px] px-3 py-[9px] ${bgClass}`}
    >
      <div className="h-8 flex gap-4 items-center">
        <Image
          src={checked ? CheckBox_Checked : CheckBox}
          alt="체크"
          height={32}
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.(e);
          }}
          className="cursor-pointer"
        ></Image>
        <div className={`font-weight-400 ${typoClass}`}>{label}</div>
      </div>
    </div>
  );
}
