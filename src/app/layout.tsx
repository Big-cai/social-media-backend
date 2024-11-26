import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../../styles/globals.css";
import 'remixicon/fonts/remixicon.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className="container min-h-[100vh] pb-[60px]"
    >

      {children}
      <div className="relative">
        <Navbar/>
      </div>
    </body>
    </html>
  );
}
