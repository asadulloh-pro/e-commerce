import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/layouts/main-layout";
import { Toaster } from "@/components/ui/sonner";
import NextAuthProvider from "@/context/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "It's a test e-commerce project in nextjs & drizzle ORM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  pageProps: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
