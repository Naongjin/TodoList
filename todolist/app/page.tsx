//메인 페이지
"use client";

import Image from "next/image";
import CheckList from "@/components/check-list/CheckList";
import Search from "@/components/search/Search";
import Btn from "@/components/buttons/Btn";
import Todo from "@/assets/images/todo.svg";
import Done from "@/assets/images/done.svg";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getItems, createItem } from "@/utils/api";

export default function Home() {
  const [todos, setTodos] = useState<Item[]>([]);

  const fetchTodos = () => {
    getItems()
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTestItem = async () => {
    try {
      await createItem("테스트 할 일");
      fetchTodos();
    } catch (err) {
      console.error("등록 실패", err);
    }
  };

  const todoList = todos.filter((item) => !item.isCompleted);
  const doneList = todos.filter((item) => item.isCompleted);

  return (
    <div className="py-6 flex flex-col items-center gap-10">
      <div className="flex gap-4">
        <Search></Search>
        <div onClick={handleAddTestItem} className="cursor-pointer">
          <Btn type="Add" size="Large"></Btn>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-4">
          <Image src={Todo} alt="todo" height={36}></Image>
          {todoList.map((todo: any) => (
            <Link href={`/items/${todo.id}`} key={todo.id}>
              <CheckList
                label={todo.name}
                key={todo.id}
                checked={false}
              ></CheckList>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Image src={Done} alt="todo" height={36}></Image>
          {doneList.map((todo: any) => (
            <Link href={`/items/${todo.id}`} key={todo.id}>
              <CheckList
                label={todo.name}
                key={todo.id}
                checked={true}
              ></CheckList>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
