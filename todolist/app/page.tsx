//메인 페이지
import Image from "next/image";
import CheckBox from "@/components/common/icon/checkbox";
import GNB_Large from "@/components/gnb/GNB_Large";
import GNB_Medium from "@/components/gnb/GNB_Medium";
import CheckList from "@/components/check-list/CheckList";
import Search from "@/components/search/Search";
import Btn from "@/components/buttons/Btn";
import Btn_Small from "@/components/buttons/Btn_Small";
import CheckList_Detail from "@/components/check-list/CheckList_Detail";
import Todo from "@/assets/images/todo.svg";
import Done from "@/assets/images/done.svg";

import Link from "next/link";

export default function Home() {
  return (
    <div className="py-[24px] flex flex-col items-center gap-[40px]">
      <div className="flex gap-[16px]">
        <Search></Search>
        <Btn type="Add" size="Large"></Btn>
      </div>
      <div className="flex flex-row gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <Image src={Todo} alt="todo" height={36}></Image>
          <Link href={`/items/1`}>
            <CheckList label="비타민 챙겨 먹기"></CheckList>
          </Link>
          <CheckList label="맥주 마시기"></CheckList>
        </div>
        <div className="flex flex-col gap-[16px]">
          <Image src={Done} alt="todo" height={36}></Image>
          <CheckList label="비타민 챙겨 먹기" checked></CheckList>
          <CheckList label="맥주 마시기" checked></CheckList>
        </div>
      </div>
    </div>
  );
}
