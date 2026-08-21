import Image from "next/image";
import PlusWhite from "../../assets/icon/plus-white.svg";
import XIcon from "../../assets/icon/X.svg";
import CheckIcon from "../../assets/icon/check.svg";

interface BtnProps extends React.HTMLAttributes<HTMLDivElement> {
  size: "Large" | "Small";
  type: "Add" | "Delete" | "Edit";
  state?: "Default" | "Active";
  disabled?: boolean;
}

export default function Btn({
  size = "Large",
  type = "Add",
  state = "Default",
  disabled,
  className = "",
  onClick,
  ...props
}: BtnProps) {
  const isLarge = size === "Large";

  // Active 상태
  const isDelete = type === "Delete";
  const currentActive = isDelete || state === "Active";

  // disabled 지정 ( Default 상태이거나 명시적으로 disabled일 때 비활성화 처리 )
  const isDisabled = disabled ?? !currentActive;

  //크기 별 클래스
  const sizeClass = isLarge ? "w-[164.35px] h-[52px]" : "w-[54.78px] h-[52px]";
  const paddingClass = isLarge ? " pl-[42.5px] py-[17px]" : "p-[18px]";

  //state와 type에 따른 배경색 및 글자색 설정
  //type에 따른 텍스트 및 아이콘 분기
  let bgClass = "bg-slate-200 text-slate-900";
  let textLabel = "추가하기";
  let icon = PlusWhite;

  if (type === "Add" && currentActive) {
    bgClass = "bg-violet-600 text-white";
  }

  if (type === "Delete") {
    bgClass = "bg-rose-500 text-white";
    textLabel = "삭제하기";
    icon = XIcon;
  } else if (type === "Edit") {
    textLabel = "수정완료";
    icon = CheckIcon;
    if (currentActive) {
      bgClass = "bg-lime-300";
    }
  }

  // 비활성화 클릭 방지
  const disabledClass = isDisabled
    ? "cursor-not-allowed pointer-events-none"
    : "cursor-pointer";
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    onClick?.(e);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative inline-block ${className} ${disabledClass}`}
      {...props}
    >
      <div
        className={`relative z-10 ${sizeClass} flex items-center border-[2px] border-slate-900 ${bgClass} rounded-[24px] ${paddingClass}`}
      >
        <div className="w-full h-[18px] flex flex-row items-center gap-[4px]">
          <Image
            src={icon}
            alt="Icon"
            height={16}
            className={type === "Add" && !currentActive ? "brightness-0" : ""}
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
