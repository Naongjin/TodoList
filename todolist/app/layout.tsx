import "./globals.css";
import GNB_Large from "@/components/gnb/GNB_Large";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <GNB_Large></GNB_Large>
        <main className="h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
