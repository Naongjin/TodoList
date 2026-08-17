//상세 페이지
"use client";

import Image from "next/image";
import CheckList_Detail from "@/components/check-list/CheckList_Detail";
import { use, useEffect, useState } from "react";
import ImageIcon from "@/assets/images/Icon.svg";
import MemoBg from "@/assets/images/memo.svg";
import Btn from "@/components/buttons/Btn";
import Btn_Small from "@/components/buttons/Btn_Small";
import { useRouter } from "next/navigation";
import {
  deleteItem,
  getItemDetail,
  updateItem,
  uploadImage,
} from "@/utils/api";

interface PageProps {
  params: Promise<{ itemId: string }>;
}

export default function ItemDetailPage({ params }: PageProps) {
  const { itemId } = use(params);
  const router = useRouter();
  const numericId = Number(itemId);

  const [itemData, setItemData] = useState<any>(null);
  const [memo, setMemo] = useState("");
  // 수정 중인지 비교하기 위해 원본 메모 기억하기
  const [initialMemo, setInitialMemo] = useState("");

  useEffect(() => {
    getItemDetail(numericId)
      .then((data) => {
        setItemData(data);
        const serverMemo = data.memo || "";
        setMemo(serverMemo);
        setInitialMemo(serverMemo);
      })
      .catch((err) => console.error("상세 조회 실패", err));
  }, [numericId]);

  const isMemoChanged = memo !== initialMemo;
  const editBtnState = isMemoChanged ? "Active" : "Default";

  const handleEdit = async () => {
    try {
      await updateItem(numericId, {
        name: itemData.name,
        memo: memo,
        imageUrl: itemData.imageUrl,
      });
      setInitialMemo(memo);
      alert("메모가 수정되었습니다.");
    } catch (err) {
      console.error("수정 실패", err);
      alert("수정에 실패했습니다.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteItem(numericId);
      router.push("/");
    } catch (err) {
      console.error("삭제 실패", err);
      alert("삭제에 실패했습니다.");
    }
  };
  if (!itemData) {
    return <div className="text-center py-20 font-bold">로딩 중...</div>;
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const imageUrl = await uploadImage(file);

      await updateItem(numericId, {
        name: itemData.name,
        memo: memo,
        imageUrl: imageUrl,
      });

      setItemData((prev: any) => ({ ...prev, imageUrl }));
      alert("이미지가 성공적으로 업로드되었습니다.");
    } catch (err) {
      console.error("이미지 업로드 실패", err);
      alert("이미지 업로드에 실패했습니다.");
    }
  };

  return (
    <main className="max-w-[1200px] mx-auto h-screen px-[102px] py-4 flex flex-col items-center gap-6 bg-white">
      <CheckList_Detail
        label={itemData.name}
        checked={itemData.isCompleted}
      ></CheckList_Detail>
      {/* 이미지 & 메모 */}
      <div className="w-full flex flex-row gap-6 justify-center">
        {/* 이미지 업로드 박스 */}
        <div className="relative w-[384px] h-[311px] rounded-[24px] border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden">
          {/* 데이터에 저장된 이미지가 있는 경우와 없는 경우 */}
          {itemData.imageUrl ? (
            <div className="relative w-full h-full">
              <Image
                src={itemData.imageUrl}
                alt="업로드된 이미지"
                fill
                className="object-cover"
              ></Image>
              <div className="absolute right-4 bottom-4">
                <Btn_Small type="Edit" onChange={handleFileChange}></Btn_Small>
              </div>
            </div>
          ) : (
            <>
              <Image src={ImageIcon} alt="이미지" height={53.97}></Image>
              <div className="absolute right-4 bottom-4">
                <Btn_Small type="Plus" onChange={handleFileChange}></Btn_Small>
              </div>
            </>
          )}
        </div>
        {/* 메모 영역 */}
        <div className="relative w-[588px] h-[311px]">
          <Image
            src={MemoBg}
            alt="메모 배경"
            fill
            className="object-cover rounded-[24px]"
          ></Image>
          <div className="absolute inset-0 p-6 flex flex-col gap-2 items-center">
            <div className="text-amber-800 font-bold">Memo</div>
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className="w-full h-full bg-transparent resize-none outline-none"
              placeholder="메모를 입력하세요..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-end gap-4">
        <Btn
          size="Large"
          type="Edit"
          state={editBtnState}
          onClick={handleEdit}
        ></Btn>
        <Btn size="Large" type="Delete" onClick={handleDelete}></Btn>
      </div>
    </main>
  );
}
