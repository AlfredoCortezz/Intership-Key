import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal del Estudiante | Key Institute",
  description: "Expediente académico integral del estudiante Key Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
