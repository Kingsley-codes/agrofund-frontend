// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useAuth({ role }: { role: "admin" | "user" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(
          role === "admin" ? "/api/admin/me" : "/api/user/me",
          { credentials: "include" }
        );
        if (!res.ok) throw new Error("Unauthorized");
      } catch {
        router.replace(role === "admin" ? "/admin/login" : "/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [role, router]);

  return { loading };
}