"use client";

import { useState } from "react";

interface SearchProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Search({
  value = "",
  onChange,
  onKeyDown,
}: SearchProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full relative inline-block">
      <div
        className={`relative z-10 w-full h-[52.5px] flex items-center border-[2px] border-slate-900 bg-white rounded-[24px] px-[24px] py-[17px]`}
      >
        <div className="w-full h-[32px] flex items-center">
          <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="할 일을 입력해주세요"
            className="w-full outline-none placeholder:slate-500"
          ></input>
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-slate-900 w-full border-[2px] border-slate-900 rounded-[24px] h-[56px] translate-x-[4px] translate-y-[3.5px]"></div>
    </div>
  );
}
