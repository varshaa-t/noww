import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Noww Advisory"
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
