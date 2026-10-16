import { Geist, Geist_Mono } from "next/font/google";

// Fontes desta página (equivalentes livres às da referência mikes.cv).
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function SystemDesignLayout({ children }: LayoutProps<"/system-design">) {
  return (
    <div
      className={`${geist.variable} ${geistMono.variable} min-h-screen bg-[#faf5f5] text-[#17160f] [--font-mono:var(--font-geist-mono)] [font-family:var(--font-geist),system-ui,sans-serif]`}
    >
      {children}
    </div>
  );
}
