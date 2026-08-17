import Image from "next/image";
import PlusWhite from "../../assets/icon/plus-white.svg";
import XIcon from "../../assets/icon/X.svg";
import CheckIcon from "../../assets/icon/check.svg";

interface BtnProps {
  size: "Large" | "Small";
  type: "Add" | "Delete" | "Edit";
  state?: "Default" | "Active";
}

export default function Btn({
  size = "Large",
  type = "Add",
  state = "Default",
}: BtnProps) {
  const isLarge = size === "Large";
  const isActive = state === "Active";

  //크기 별 클래스
  const sizeClass = isLarge ? "w-[164.35px] h-[52px]" : "w-[54.78px] h-[52px]";
  const paddingClass = isLarge ? " pl-[42.5px] py-[17px]" : "p-[18px]";

  //state와 type에 따른 배경색 및 글자색 설정
  //type에 따른 텍스트 및 아이콘 분기
  let bgClass = "bg-slate-200 text-slate-900";
  let textLabel = "추가하기";
  let icon = PlusWhite;
  if (type === "Add" && isActive) {
    bgClass = "bg-violet-600 text-white";
  }

  if (type === "Delete") {
    bgClass = "bg-rose-500 text-white";
    textLabel = "삭제하기";
    icon = XIcon;
  } else if (type === "Edit") {
    textLabel = "수정완료";
    icon = CheckIcon;
    if (isActive) {
      bgClass = "bg-lime-300";
    }
  }

  return (
    <div className="relative inline-block">
      <div
        className={`relative z-10 ${sizeClass} flex items-center border-[2px] border-slate-900 ${bgClass} rounded-[24px] ${paddingClass}`}
      >
        <div className="w-full h-[18px] flex flex-row items-center gap-[4px]">
          <Image
            src={icon}
            alt="Icon"
            height={16}
            className={
              type === "Add" && state === "Default" ? "brightness-0" : ""
            }
          ></Image>
          {isLarge && <div className="font-bold">{textLabel}</div>}
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 bg-slate-900 ${sizeClass} border-[2px] border-slate-900 rounded-[24px] h-[52px] translate-x-[4px] translate-y-[3.65px]`}
      ></div>
    </div>
  );
}
