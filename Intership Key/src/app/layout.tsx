import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Portal del Estudiante',
  description: 'Portal del Estudiante de Key Institute',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
