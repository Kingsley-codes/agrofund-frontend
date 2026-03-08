"use client";

import DashboardNav from "@/components/dashboard/DashboardNav";
import Sidebar, { UserData } from "@/components/dashboard/Sidebar";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) setUser(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 w-full overflow-hidden">
      <Sidebar
        user={user}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <DashboardNav
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen((prev) => !prev)}
        />
        {children}
      </main>
    </div>
  );
}
