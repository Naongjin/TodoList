//메인 페이지
"use client";

import Image from "next/image";
import CheckList from "@/components/check-list/CheckList";
import Search from "@/components/search/Search";
import Btn from "@/components/buttons/Btn";
import Todo from "@/assets/images/todo.svg";
import Done from "@/assets/images/done.svg";
import EmptyDone from "@/assets/images/empty-done-large.svg";
import EmptyTodo from "@/assets/images/empty-todo-large.svg";

import { useEffect, useState } from "react";
import { getItems, createItem, updateItem } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // 상세 페이지 이동
  const handleGoToDetail = (id: number) => {
    router.push(`/items/${id}`);
  };

  const [todos, setTodos] = useState<Item[]>([]);
  const [keyword, setKeyword] = useState(""); // 입력창 상태

  const fetchTodos = () => {
    getItems()
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // 할 일 추가
  const handleCreateItem = async () => {
    if (!keyword.trim()) {
      alert("할 일을 입력해주세요.");
      return;
    }

    try {
      await createItem(keyword);
      setKeyword("");
      fetchTodos();
    } catch (err) {
      console.error("등록 실패", err);
      alert("등록에 실패했습니다.");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Enter 키로 할 일 추가
    if (e.key === "Enter") {
      handleCreateItem();
    }
  };

  // 할 일 입력이 된 경우에만 Active
  const addBtnState = keyword.trim() ? "Active" : "Default";

  // Todo와 Done 분리
  const todoList = todos.filter((item) => !item.isCompleted);
  const doneList = todos.filter((item) => item.isCompleted);

  // 할 일 완료 토글
  const handleToggle = async (todo: any) => {
    try {
      await updateItem(todo.id, {
        isCompleted: !todo.isCompleted,
      });
      fetchTodos();
    } catch (err) {
      console.error("토글 실패", err);
    }
  };

  return (
    <div className="w-full max-w-[1200px] py-6 px-4 mx-auto flex flex-col items-center gap-10">
      <div className="w-full flex flex-row gap-4">
        <Search
          value={keyword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
          onKeyDown={handleKeyDown}
        ></Search>
        {/* 추가 버튼 (모바일과 데스크탑 사이즈 반응형 분기) */}
        <div onClick={handleCreateItem} className="cursor-pointer shrink-0">
          {/* 모바일 화면에서는 Small 사이즈 */}
          <div className="block md:hidden">
            <Btn type="Add" size="Small" state={addBtnState}></Btn>
          </div>
          {/* 태블릿/데스크탑 화면에서는 Large 사이즈 */}
          <div className="hidden md:block">
            <Btn type="Add" size="Large" state={addBtnState}></Btn>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
        {/* Todo 영역 */}
        <div className="w-full flex flex-col gap-4">
          <Image src={Todo} alt="todo" height={36}></Image>
          {todoList.length === 0 ? (
            <div className="flex flex-col items-center">
              <Image src={EmptyTodo} alt="emptyTodo" height={240} />
              <div className="text-bold text-slate-400 text-center">
                할 일이 없어요.
                <br />
                TODO를 새롭게 추가해주세요!
              </div>
            </div>
          ) : (
            todoList.map((todo: any) => (
              <div key={todo.id} onClick={() => handleGoToDetail(todo.id)}>
                <CheckList
                  label={todo.name}
                  key={todo.id}
                  checked={todo.isCompleted}
                  onToggle={() => handleToggle(todo)}
                ></CheckList>
              </div>
            ))
          )}
        </div>
        {/* Done 영역 */}
        <div className="w-full flex flex-col gap-4">
          <Image src={Done} alt="todo" height={36}></Image>
          {doneList.length === 0 ? (
            <div className="flex flex-col items-center">
              <Image src={EmptyDone} alt="emptyTodo" height={240} />
              <div className="text-bold text-slate-400 text-center">
                아직 다 한 일이 없어요.
                <br />
                해야 할 일을 체크해보세요!
              </div>
            </div>
          ) : (
            doneList.map((todo: any) => (
              <div key={todo.id} onClick={() => handleGoToDetail(todo.id)}>
                <CheckList
                  label={todo.name}
                  key={todo.id}
                  checked={todo.isCompleted}
                  onToggle={(e) => {
                    e.stopPropagation();
                    handleToggle(todo);
                  }}
                ></CheckList>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
