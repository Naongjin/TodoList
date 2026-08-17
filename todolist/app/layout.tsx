import "./globals.css";
import GNB_Large from "@/components/gnb/GNB_Large";
import GNB_Medium from "@/components/gnb/GNB_Medium";
import GNB_Small from "@/components/gnb/GNB_Small";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* 네비게이션바 영역 (반응형 분기) */}
        <header className="w-full">
          {/* 모바일 화면에서 보이는 GNB */}
          <div className="block md:hidden w-full">
            <GNB_Small />
          </div>

          {/* 태블릿 화면에서 보이는 GNB */}
          <div className="hidden md:block lg:hidden w-full">
            <GNB_Medium />
          </div>

          {/* 데스크탑 화면에서 보이는 GNB */}
          <div className="hidden lg:block w-full">
            <GNB_Large />
          </div>
        </header>

        {/* 메인 컨텐츠 영역 */}
        <main className="flex-1 bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
