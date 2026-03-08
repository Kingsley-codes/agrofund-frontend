"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiPieChart,
  FiShoppingBag,
  FiCreditCard,
  FiSettings,
} from "react-icons/fi";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { GrowIcon } from "@/components/GrowIcon";
import Image from "next/image";

export interface UserData {
  firstName?: string;
  lastName?: string;
  name?: string;
  profilePhoto?: string;
  email?: string;
  role?: string;
}

interface SidebarProps {
  user: UserData | null;
  isOpen: boolean;
  onToggle: () => void;
}

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: FiGrid },
  { href: "/dashboard/investments", label: "My Investments", icon: FiPieChart },
  { href: "/opportunities", label: "New Investments", icon: FiShoppingBag },
  { href: "/dashboard/wallet", label: "Wallet", icon: FiCreditCard },
  { href: "/dashboard/chat", label: "Chat", icon: FiCreditCard },
];

function getInitials(user: UserData | null): string {
  if (!user) return "?";
  if (user.firstName && user.lastName)
    return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  if (user.name) {
    const parts = user.name.trim().split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return parts[0][0].toUpperCase();
  }
  return "?";
}

function getDisplayName(user: UserData | null): string {
  if (!user) return "User";
  if (user.firstName && user.lastName)
    return `${user.firstName} ${user.lastName[0]}.`;
  if (user.name) return user.name;
  return "User";
}

export default function Sidebar({ user, isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const initials = getInitials(user);
  const displayName = getDisplayName(user);
  const profilePhoto = user?.profilePhoto;

  return (
    <>
      <aside
        className={`
          flex flex-col justify-between border-r border-gray-200 bg-gray-200 h-full
          transition-all duration-300 ease-in-out overflow-hidden
          fixed z-50
          md:relative md:z-auto

          ${isOpen ? "translate-x-0 w-72 p-6" : "-translate-x-full w-72 p-6"}

          md:translate-x-0
          ${isOpen ? "md:w-72 md:p-6" : "md:w-16 md:p-3 md:items-center"}
        `}
      >
        <div className={`flex flex-col ${isOpen ? "gap-8" : "gap-6"} w-full`}>
          {/* Logo + toggle */}
          <div
            className={`flex items-center ${isOpen ? "justify-between" : "justify-center"}`}
          >
            {isOpen ? (
              <>
                <Image
                  src="/grow-logo.svg"
                  alt="Grow logo"
                  width={120}
                  height={40}
                />
                <button
                  onClick={onToggle}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 shrink-0"
                  aria-label="Collapse sidebar"
                >
                  <GoSidebarExpand size={20} />
                </button>
              </>
            ) : (
              <button
                onClick={onToggle}
                className="group hidden md:flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 shrink-0 text-primary"
                aria-label="Expand sidebar"
              >
                <span className="group-hover:hidden">
                  <GrowIcon
                    size={32}
                    rayColor="currentColor"
                    centerColor="white"
                  />
                </span>
                <span className="hidden group-hover:block text-gray-500">
                  <GoSidebarCollapse size={24} />
                </span>
              </button>
            )}
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2 w-full">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive =
                href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  title={!isOpen ? label : undefined}
                  className={`flex items-center gap-3 rounded-xl text-sm font-bold transition-colors whitespace-nowrap
                    ${isOpen ? "px-4 py-3" : "p-3 justify-center"}
                    ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon size={18} />
                  {isOpen && label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: settings + user */}
        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/settings"
            title={!isOpen ? "Settings" : undefined}
            className={`flex items-center gap-3 rounded-xl text-sm transition-colors whitespace-nowrap
              ${isOpen ? "px-4 py-3" : "p-3 justify-center"}
              ${
                pathname === "/settings"
                  ? "bg-primary text-white font-bold shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }
            `}
          >
            <FiSettings size={18} />
            {isOpen && "Settings"}
          </Link>

          <div
            className={`flex items-center gap-3 border-t pt-4 ${isOpen ? "px-2 py-2" : "justify-center"}`}
          >
            {profilePhoto ? (
              <div
                className="h-10 w-10 rounded-full bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url(${profilePhoto})` }}
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                {initials}
              </div>
            )}
            {isOpen && (
              <div>
                <p className="text-sm font-bold">{displayName}</p>
                <p className="text-xs text-gray-500 capitalize">
                  {user?.role ?? "Investor"}
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Mobile toggle button — always visible, outside sidebar */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-white shadow-md text-primary"
          aria-label="Toggle sidebar"
        >
          <GoSidebarCollapse size={20} />
        </button>
      )}
    </>
  );
}
