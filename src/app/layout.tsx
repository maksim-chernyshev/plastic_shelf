import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Plastic shelf",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {



    return (
        <html lang="ru">
            <body>
                {children}
            </body>
        </html>
    );
}
