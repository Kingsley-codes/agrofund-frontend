// src/hooks/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Role = "user" | "admin" | "super-admin";

export function useAuth({ allowedRoles }: { allowedRoles: Role[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const storedData = localStorage.getItem("user") || localStorage.getItem("admin");
      const parsed = storedData ? JSON.parse(storedData) : null;

      if (!parsed || !allowedRoles.includes(parsed.role)) {
        if (allowedRoles.includes("super-admin") || allowedRoles.includes("admin")) {
          router.replace("/admin/login");
        } else {
          router.replace("/login");
        }
      }

      // Schedule setLoading after effect to avoid synchronous state update
      setTimeout(() => setLoading(false), 0);
    };

    checkAuth();
  }, [allowedRoles, router]);

  return { loading };
}