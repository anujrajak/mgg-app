"use client";

import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";

import { ThemeProvider } from "./Providers/ThemeProvider";
import ReactQueryProvider from "./Providers/ReactQueryProvider";
import { ToastContainer, toast } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id={"root"}>
        <ThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
