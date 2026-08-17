"use client";

import Image from "next/image";
import CheckBox from "../../assets/icon/checkbox-default.svg";
import CheckBox_Checked from "../../assets/icon/checkbox-checked.svg";
import { useState } from "react";

interface CheckListProps extends React.HTMLAttributes<HTMLDivElement> {
  onToggle?: () => void;
  label?: string;
  checked: boolean;
}

export default function CheckList_Detail({
  label = "비타민",
  checked,
  onToggle,
  className = "",
  ...props
}: CheckListProps) {
  const bgClass = checked ? "bg-violet-100" : "bg-white";
  const typoClass = checked ? "underline text-slate-800" : "text-slate-900";

  return (
    <div
      onClick={onToggle}
      className={`w-full h-[50px] flex items-center justify-center border-2 rounded-[27px] py-4 ${bgClass}`}
    >
      <div className="h-8 flex flex-row gap-4 items-center">
        <Image
          src={checked ? CheckBox_Checked : CheckBox}
          alt="로고"
          height={32}
        ></Image>
        <div className={`font-bold ${typoClass}`}>{label}</div>
      </div>
    </div>
  );
}
