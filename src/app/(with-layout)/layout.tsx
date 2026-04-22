import "./globals.css";

import { Header } from "@/components/layout/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col font-sans selection:bg-sky-400 selection:text-slate-950">
      <Header />
      {children}
    </div>
  );
}
