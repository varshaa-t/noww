import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/JotaiProvider";

export const metadata: Metadata = {
  title: "Noww"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
