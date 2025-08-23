import type {Metadata} from "next";
import "./globals.css";
import {Plus_Jakarta_Sans} from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "RegAgro - Animal Identification & Livestock Management",
    description: "Revolutionize animal identification with our one-stop platform from a leading global manufacturer. Professional livestock management solutions.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={plusJakarta.className}>
        {children}
        </body>
        </html>
    );
}
