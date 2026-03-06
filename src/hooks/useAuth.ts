// src/hooks/useAuth.ts
"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type Role = "user" | "admin" | "super-admin";

export function useAuth({ allowedRoles }: { allowedRoles: Role[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const rolesRef = useRef(allowedRoles);

  useEffect(() => {
    const checkAuth = () => {
      const storedData =
        localStorage.getItem("user") || localStorage.getItem("admin");
      const parsed = storedData ? JSON.parse(storedData) : null;

      if (!parsed) {
        // No user at all → redirect
        if (
          rolesRef.current.includes("super-admin") ||
          rolesRef.current.includes("admin")
        ) {
          router.replace("/admin/login");
        } else {
          router.replace("/login");
        }
        return;
      }

      // If no role field, default to "user"
      const userRole = (parsed?.role ?? "user").toLowerCase() as Role;
      const allowed = rolesRef.current.map((r) => r.toLowerCase());

      if (!allowed.includes(userRole)) {
        if (
          rolesRef.current.includes("super-admin") ||
          rolesRef.current.includes("admin")
        ) {
          router.replace("/admin/login");
        } else {
          router.replace("/login");
        }
        return;
      }

      setLoading(false);
    };

    checkAuth();
  }, [router]);

  return { loading };
}
