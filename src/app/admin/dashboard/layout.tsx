"use client";

import DashboardFooter from "@/components/dashboard/DashboardFooter";
import AdminSidebar, { UserData } from "@/components/adminDashboard/Sidebar";
import { useEffect, useCallback, useState } from "react";
import AdminDashboardNav from "@/components/adminDashboard/DashboardNav";

export default function DashboardLayout({
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
    const fetchUser = async () => {
      try {
        const stored = localStorage.getItem("admin");
        if (stored) setUser(JSON.parse(stored));
      } catch {
        // ignore parse errors
      }
    };

    fetchUser();
  }, []);

  // Replace the inline arrow function:
  const handleSidebarToggle = useCallback(
    () => setSidebarOpen((prev) => !prev),
    [],
  );

  return (
    <div className="flex h-screen bg-gray-50 w-full overflow-y-auto">
      <AdminSidebar
        user={user}
        isOpen={sidebarOpen}
        onToggle={handleSidebarToggle}
      />
      <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
        <AdminDashboardNav
          isOpen={sidebarOpen}
          onToggle={handleSidebarToggle}
        />
        {children}
        <DashboardFooter />
      </main>
    </div>
  );
}
