import type {Metadata} from "next";
import "./globals.css";
import {dmSans, plusJakarta} from "@/app/fonts";


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
        <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
        <body className={'font-dm'}>
        {children}
        </body>
        </html>
    );
}
