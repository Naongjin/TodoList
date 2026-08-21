// Todo 아이템 데이터 구조(인터페이스) 정의

interface Item {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}
