import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5G SA 入門ガイド | ドコモ 5G スタンドアローンを視覚的に理解する",
  description:
    "5G SAとNSAの違いを図解・比較で分かりやすく解説。初心者でも通信の進化を体験的に理解できる学習ページ。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
