"use client";

import Image from "next/image";
import CheckBox from "../../assets/icon/checkbox-default.svg";
import CheckBox_Checked from "../../assets/icon/checkbox-checked.svg";
import { useState } from "react";

interface CheckListProps {
  onToggle?: () => void;
  label?: string;
  checked: boolean;
}

export default function CheckList_Detail({
  label = "비타민",
  checked,
  onToggle,
}: CheckListProps) {
  const bgClass = checked ? "bg-violet-100" : "bg-white";
  const typoClass = checked ? "underline text-slate-800" : "text-slate-900";

  return (
    <div
      onClick={onToggle}
      className={`w-[527px] h-[50px] flex items-center border-[2px] rounded-[27px] py-[16px] flex justify-center ${bgClass}`}
    >
      <div className="h-[32px] flex gap-[16px] items-center">
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
