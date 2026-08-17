"use client";

import Image from "next/image";
import CheckBox from "../../assets/icon/checkbox-default.svg";
import CheckBox_Checked from "../../assets/icon/checkbox-checked.svg";
import { useState } from "react";

interface CheckListProps {
  onToggle?: () => void;
  label?: string;
  checked?: boolean;
}

export default function CheckList({
  label = "비타민",
  checked,
  onToggle,
}: CheckListProps) {
  const bgClass = checked ? "bg-violet-100" : "bg-white";
  const typoClass = checked ? "line-through text-slate-800" : "text-slate-900";

  return (
    <div
      onClick={onToggle}
      className={`w-[527px] h-[50px] flex items-center border-2 rounded-[27px] px-3 py-[9px] ${bgClass}`}
    >
      <div className="h-8 flex gap-4 items-center">
        <Image
          src={checked ? CheckBox_Checked : CheckBox}
          alt="로고"
          height={32}
        ></Image>
        <div className={`font-weight-400 ${typoClass}`}>{label}</div>
      </div>
    </div>
  );
}
