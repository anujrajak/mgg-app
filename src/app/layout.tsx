"use client";

import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";

import { ThemeProvider } from "./Providers/ThemeProvider";
import ReactQueryProvider from "./Providers/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id={"root"}>
        <ThemeProvider>
          <ReactQueryProvider>
            <SessionProvider>{children}</SessionProvider>
          </ReactQueryProvider>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}





  






