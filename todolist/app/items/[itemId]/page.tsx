"use client";

import Image from "next/image";
import CheckList_Detail from "@/components/check-list/CheckList_Detail";
import { use } from "react";
import ImageIcon from "@/assets/images/Icon.svg";
import MemoBg from "@/assets/images/memo.svg";
import Btn from "@/components/buttons/Btn";
import Btn_Small from "@/components/buttons/Btn_Small";

interface PageProps {
  params: Promise<{ itemId: string }>;
}

export default function ItemDetailPage({ params }: PageProps) {
  const { itemId } = use(params);

  return (
    <main className="max-w-[1200px] mx-auto py-[24px] flex flex-col items-center gap-[24px] bg-white">
      <CheckList_Detail label=""></CheckList_Detail>
      {/* 이미지 & 메모 */}
      <div className="w-full flex flex-row gap-[24px] justify-center">
        {/* 이미지 업로드 박스 */}
        <div className="relative w-[384px] h-[311px] rounded-[24px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center">
          <Image src={ImageIcon} alt="이미지" height={53.97}></Image>
          <div className="absolute right-[16px] bottom-[16px]">
            <Btn_Small type="Plus"></Btn_Small>
          </div>
        </div>
        {/* 메모 영역 */}
        <div className="relative w-[384px] h-[311px]">
          <Image
            src={MemoBg}
            alt="메모 배경"
            fill
            className="object-cover rounded-[24px]"
          ></Image>
          <div className="absolute inset-0 p-[24px] flex flex-col gap-2 items-center">
            <div className="text-amber-800 font-bold">Memo</div>
            <textarea
              className="w-full h-full bg-transparent resize-none outline-none"
              placeholder="메모를 입력하세요..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end gap-[16px]">
        <Btn size="Large" type="Edit" state="Default"></Btn>
        <Btn size="Large" type="Delete"></Btn>
      </div>
    </main>
  );
}
