"use client";

import Image from "next/image";
import CheckBox from "../../assets/icon/checkbox-default.svg";
import CheckBox_Checked from "../../assets/icon/checkbox-checked.svg";
import { useState } from "react";
export default function CheckList() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className={`relative z-10 w-[996px] h-[52.5px] flex items-center border-[2px] border-slate-900 bg-white rounded-[24px] px-[24px] py-[17px]`}
      >
        <div className="w-full h-[32px] flex items-center">
          <input
            placeholder="할 일을 입력해주세요"
            className="w-full outline-none placeholder:slate-500"
          ></input>
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-slate-900 w-[1000px] border-[2px] border-slate-900 rounded-[24px] h-[56px] translate-x-[4px] translate-y-[3.5px]"></div>
    </div>
  );
}
