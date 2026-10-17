import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Major_Mono_Display } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

// Fonte só do monograma "AM" (dock e rodapé).
const majorMono = Major_Mono_Display({
  variable: "--font-major-mono",
  subsets: ["latin"],
  weight: "400",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `Portfólio de ${profile.name}, ${profile.role.toLowerCase()} com foco em TypeScript, Next.js, NestJS, APIs REST, PostgreSQL, MongoDB, performance e SEO.`,
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

// Marca a página como "com JS" antes da primeira pintura, para que os
// elementos animados comecem ocultos sem piscar (sem JS, tudo fica visível).
// Também fixa --app-h (altura da tela) no carregamento e só a atualiza quando a LARGURA muda
// (girar o celular). Assim a barra de endereço do mobile, que muda só a altura durante a
// rolagem, não redimensiona as pastas nem faz a página "pular".
const jsFlag = `(function(){var d=document.documentElement;d.classList.add('js');var w=innerWidth;function h(){d.style.setProperty('--app-h',innerHeight+'px')}h();addEventListener('resize',function(){if(innerWidth!==w){w=innerWidth;h()}})})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${majorMono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
