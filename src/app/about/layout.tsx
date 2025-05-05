import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Noww Advisory"
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        {children}
    </>
  );
}
