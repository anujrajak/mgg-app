"use client";
// Layout components
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer/Footer";
import { getActiveNavbar, getActiveRoute } from "@/utils/navigation";
import routes from "@/routes";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Admin({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // states and functions
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  console.log("session ===>", session);

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading

    if (!session) {
      router.push("/auth/sign-in"); // Redirect to sign-in page if not authenticated
    }
  }, [session, status, router]);

  if (status === "loading" || !session) {
    return <div>Loading...</div>; // Optionally show a loading state
  }

  return (
    <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" />
      {/* Navbar & Main Content */}
      <div className="h-full w-full font-dm dark:bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-2.5 flex-none transition-all dark:bg-navy-900 
              md:pr-2 xl:ml-[260px]`}
        >
          {/* Routes */}
          <div>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="mx-auto min-h-screen p-2 !pt-[10px] md:p-2">
              {children}
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
