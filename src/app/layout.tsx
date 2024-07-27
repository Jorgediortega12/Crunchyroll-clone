import type { Metadata } from "next";
import "./globals.css";
import { fontBody } from "@/config/font";
import { Provider } from "@/components";

export const metadata: Metadata = {
  title: "Clone - Crunchyroll",
  description: "Pagina dedicada al entretenimiento Japones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es">
        <body className={fontBody.className}>
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
  );
}
