import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Yong Lun | Software Engineer",
    description: "Yong Lun — Software Engineer based in Singapore.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`h-full ${geist.className}`}>
            <body className="min-h-full antialiased">{children}</body>
        </html>
    );
}
