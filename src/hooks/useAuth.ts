// src/hooks/useAuth.ts
"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Role = "user" | "admin" | "super-admin";

const ROLE_STORAGE_KEY: Record<Role, string> = {
  user: "user",
  admin: "admin",
  "super-admin": "admin", // super-admin shares the admin key
};

export function useAuth({ allowedRoles }: { allowedRoles: Role[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const rolesRef = useRef(allowedRoles);

  useEffect(() => {
    const checkAuth = () => {
      // Determine which storage key(s) to check based on allowedRoles
      const keysToCheck = [
        ...new Set(rolesRef.current.map((r) => ROLE_STORAGE_KEY[r])),
      ];

      const parsed =
        keysToCheck
          .map((key) => localStorage.getItem(key))
          .filter(Boolean)
          .map((data) => JSON.parse(data!))
          .find(Boolean) ?? null;

      if (!parsed) {
        const isAdminRoute =
          rolesRef.current.includes("super-admin") ||
          rolesRef.current.includes("admin");
        router.replace(isAdminRoute ? "/admin/login" : "/login");
        return;
      }

      const userRole = (parsed?.role ?? "user").toLowerCase() as Role;
      const allowed = rolesRef.current.map((r) => r.toLowerCase());

      if (!allowed.includes(userRole)) {
        const isAdminRoute =
          rolesRef.current.includes("super-admin") ||
          rolesRef.current.includes("admin");
        router.replace(isAdminRoute ? "/admin/login" : "/login");
        return;
      }

      setLoading(false);
    };

    checkAuth();
  }, [router]);

  return { loading };
}
