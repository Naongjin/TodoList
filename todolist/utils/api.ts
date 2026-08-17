const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TENANT_ID = process.env.NEXT_PUBLIC_TENANT_ID;

// 1. 목록 조회 (GET)
export async function getItems() {
  const res = await fetch(`${BASE_URL}/api/${TENANT_ID}/items`);
  if (!res.ok) {
    const errorText = await res.text();
    console.error("서버 에러 응답:", errorText);
    throw new Error("목록 조회 실패");
  }
  return res.json();
}

// 2. 항목 등록 (POST)
export async function createItem(name: string) {
  const res = await fetch(`${BASE_URL}/api/${TENANT_ID}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("등록 실패");
  return res.json();
}

// 3. 상세 조회 (GET)
export async function getItemDetail(itemId: number) {
  const res = await fetch(`${BASE_URL}/api/${TENANT_ID}/items/${itemId}`);
  if (!res.ok) throw new Error("상세 조회 실패");
  return res.json();
}

// 4. 수정 (PATCH)
export async function updateItem(
  itemId: number,
  data: {
    name?: string;
    memo?: string;
    imageUrl?: string | null;
    isCompleted?: boolean;
  },
) {
  // imageUrl이 null이거나 비어있으면 객체에서 제거하여 서버 유효성 검사 우회
  const payload: any = { ...data };
  if (!payload.imageUrl) {
    delete payload.imageUrl;
  }

  const res = await fetch(`${BASE_URL}/api/${TENANT_ID}/items/${itemId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const errorText = await res.text();
    console.error("서버 수정 실패 상세 에러:", errorText);
    throw new Error("수정 실패");
  }
  return res.json();
}

// 5. 삭제 (DELETE)
export async function deleteItem(itemId: number) {
  const res = await fetch(`${BASE_URL}/api/${TENANT_ID}/items/${itemId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("삭제 실패");
  return res.json();
}

// 6. 이미지 업로드 (POST)
export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${BASE_URL}/api/${TENANT_ID}/images/upload`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("이미지 업로드 실패");
  const data = await res.json();
  return data.url;
}
