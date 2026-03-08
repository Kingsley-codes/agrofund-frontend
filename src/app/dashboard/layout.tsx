"use client";

import DashboardNav from "@/components/dashboard/DashboardNav";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import Sidebar, { UserData } from "@/components/dashboard/Sidebar";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 768; // open by default on md+, closed on mobile
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) setUser(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 w-full overflow-y-auto">
      <Sidebar
        user={user}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
        <DashboardNav
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen((prev) => !prev)}
        />
        {children}
        <DashboardFooter />
      </main>
    </div>
  );
}
