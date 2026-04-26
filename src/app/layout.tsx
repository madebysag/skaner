import type { Metadata } from "next";
import "./globals.css";

import { Header} from "@/src/components/Header";

export const metadata: Metadata = {
  title: "Skaner - Record Keeper",
  description: "An app for keeping phone sale record",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full text-sm">
        <Header username="Junior" storeName="Saheed Shop"/>
        {children}
        </body>
    </html>
  );
}
