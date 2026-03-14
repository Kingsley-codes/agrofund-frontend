"use client";

import { useState } from "react";
import { MdSearch, MdDownload, MdExpandMore, MdMoreVert } from "react-icons/md";

type Role = "Investor" | "Farmer" | "Admin";
type Status = "Active" | "Pending" | "Suspended";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: Role;
  balance: string;
  status: Status;
  lastLogin: string;
  lastLoginTime?: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgW6FHygniBW89kFh5kl6jkJboJc5oFjCgmV8SzdJ-wB8hjNNIKxN_cTrsBs8hvank505yUmhpa9iZeDpxGzEUlH6oBDTlxPqtyvylzGvvEV-ksOSSlBUytQqBgKlcPUW0EiQ4G8fHVAmkrFHyWXHQ9N2hzXSv6Cxen0hHSLeJS-XHkgsjPNNNutEq2WB2i3j2MQcgApxzUV1suy9n1lBHmn89GiIgs-FYDW9dCqvbUFho8gmwC2vOfFf6fOyTgktDo7dVYYN3xOg",
    role: "Investor",
    balance: "$12,450.00",
    status: "Active",
    lastLogin: "Oct 24, 2023",
    lastLoginTime: "10:45 AM",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@agrifarm.co",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC41-fB9kuaWSbmZGfpbxb6xeXID_nNNrMaK_u9PmIYfT_MU_zGgLx809_NyfuUK8tW5shi2DI4U-lR5LCOyUFjMHRJJfr6DrJB6rAnkBV-uJBxTWxhruOY68x9CE_efidD9PfnaYSO7L16wTV2cOTbY7mys-7qQ4-RWLSrXbYf1fxxSTf64WWLxwauokQRLq5JbvXIoS70y00ZpFmf4h3l-ygcI2YEwAO3mL1g6sLdyzCdX8oSHKKuNmPdWRPJ2FX7bw8jWV0wbZI",
    role: "Farmer",
    balance: "$3,200.00",
    status: "Pending",
    lastLogin: "Never",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.d@example.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBv5NK0Od2aiT7vwCIVD2rGNsv2hlGzMtV9epfVNLSysB5l_iYrgQM6P_kaCP2WN13qFxHm5fhBTKIQUebzmYoieHWBd2WK7DaJVY9a1zpKO7wIBB1UXoLdhsIq7lsIP8ClyuJ8U0C8StvDt8NJSdRcYOLVu6osupOPlox_OYVdmuW9GEcRcOIcmKQlSZRC3_PmkueyR--SoyHIlPvxRlcapEGG7DQ5FkeWwa2sXZImM1WUuGUFuCUPLFZiR3vXtx65uvtUCj_M0j8",
    role: "Investor",
    balance: "$8,940.50",
    status: "Active",
    lastLogin: "Oct 23, 2023",
    lastLoginTime: "2:15 PM",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "j.wilson@demo.com",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjZ20CIDXAFso2OL7w3o3F3t6lCVCwMaoJKW8EY2GyMcLmn7S5Fi-lpv53IQs_bepEQXXeJn2jya4st1_i8n_Qj1BSoa8TnPlACako_5kvno5yhzNdnpPs0eR--t9sSzK69DZcmfHBH62CTWXgscTP2Kzav-bcwq2UBVblsc-jbv1INslR0sagBYjzHVj0wvhA3tMESitqhEGxaVUf9BVbXtJq_RknahBlbTJPMIasusrTL7vkntGioFswAky8ysqn7wSCCZwrHa8",
    role: "Investor",
    balance: "$0.00",
    status: "Suspended",
    lastLogin: "Sep 12, 2023",
  },
  {
    id: 5,
    name: "Maria Garcia",
    email: "maria.g@grow.io",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrFKDThP_AjU4Ioj3dR7bO-Jtvi7iqeYWBt1fNI8I0ZCTpr59q4x07dBj_vJaIzxrjtMIGGcYhsjXmDejoBLJsA_kDo9J9zJSxuEzmY-catQ1p4AF2FiD5NyMU6Qu2FWq6LcZ-vsEmu6J4N411QZAXqztLo0CkyqnkDUPYktXLWyHNjvkF4H0q_0KrLfRhKkT5mhdo08mlQKBmbbHC3PmS4teaLRl3k9nCPHDgj8fkLtaXj2ugAES1nR_jkOE90GHbUffYIy_socM",
    role: "Farmer",
    balance: "$5,600.00",
    status: "Active",
    lastLogin: "Today",
    lastLoginTime: "9:00 AM",
  },
];

const roleBadge: Record<Role, string> = {
  Investor: "bg-blue-50 text-blue-700 border border-blue-100",
  Farmer: "bg-amber-50 text-amber-700 border border-amber-100",
  Admin: "bg-purple-50 text-purple-700 border border-purple-100",
};

const statusBadge: Record<Status, { wrapper: string; dot: string }> = {
  Active: {
    wrapper: "bg-green-50 text-green-700 border border-green-100",
    dot: "bg-green-500",
  },
  Pending: {
    wrapper: "bg-orange-50 text-orange-700 border border-orange-100",
    dot: "bg-orange-500",
  },
  Suspended: {
    wrapper: "bg-red-50 text-red-700 border border-red-100",
    dot: "bg-red-500",
  },
};

// ── Mobile card ─────────────────────────────────────────────────────────────
function UserCard({ user }: { user: User }) {
  const role = roleBadge[user.role];
  const status = statusBadge[user.status];

  return (
    <div className="flex items-start gap-3 p-4 border-b border-[#eaf3e7] last:border-0 hover:bg-[#f9fcf8] transition-colors">
      <input
        type="checkbox"
        className="mt-1 rounded border-[#d5e7cf] text-[#46ec13] focus:ring-[#46ec13]/50 h-4 w-4 shrink-0"
      />
      <div
        className="size-10 rounded-full bg-cover bg-center shrink-0"
        style={{ backgroundImage: `url('${user.avatar}')` }}
      />
      <div className="flex-1 min-w-0">
        {/* Name + action */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-bold text-[#111b0d] text-md truncate">
            {user.name}
          </span>
          <button className="text-[#5e9a4c] hover:text-[#111b0d] transition-colors p-1 rounded hover:bg-gray-100 shrink-0">
            <MdMoreVert className="text-xl" />
          </button>
        </div>
        {/* Email */}
        <p className="text-xs text-[#5e9a4c] truncate mb-2">{user.email}</p>
        {/* Badges + balance */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${role}`}
          >
            {user.role}
          </span>
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${status.wrapper}`}
          >
            <span className={`size-1.5 rounded-full ${status.dot}`} />
            {user.status}
          </span>
          <span className="text-xs font-semibold text-[#111b0d]">
            {user.balance}
          </span>
        </div>
        {/* Last login */}
        <p className="text-xs text-[#5e9a4c] mt-1.5">
          Last login:{" "}
          <span className="text-[#111b0d]">
            {user.lastLogin}
            {user.lastLoginTime ? ` · ${user.lastLoginTime}` : ""}
          </span>
        </p>
      </div>
    </div>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────
export default function UsersTable() {
  const [search, setSearch] = useState("");

  return (
    <div>
      {/* ── Toolbar ── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-between items-stretch sm:items-center">
        {/* Search */}
        <label className="relative flex items-center w-full sm:max-w-xs group">
          <MdSearch className="absolute left-4 text-xl text-[#5e9a4c] group-focus-within:text-[#46ec13] transition-colors" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email or ID..."
            className="w-full h-11 pl-12 pr-4 bg-white border border-[#d5e7cf] rounded-xl text-sm text-[#111b0d] placeholder:text-[#5e9a4c] focus:ring-2 focus:ring-[#46ec13]/50 focus:border-[#46ec13] focus:outline-none transition-all"
          />
        </label>

        {/* Filters + Export */}
        <div className="flex gap-2 flex-wrap">
          <div className="relative flex-1 sm:flex-none">
            <select className="w-full h-11 pl-3 pr-9 bg-white border border-[#d5e7cf] rounded-lg text-sm font-medium text-[#111b0d] focus:ring-1 focus:ring-[#46ec13] focus:border-[#46ec13] appearance-none cursor-pointer hover:bg-gray-50 transition-colors">
              <option>All Roles</option>
              <option>Investor</option>
              <option>Farmer</option>
              <option>Admin</option>
            </select>
            <MdExpandMore className="absolute right-2.5 top-3 text-[#5e9a4c] pointer-events-none text-xl" />
          </div>

          <div className="relative flex-1 sm:flex-none">
            <select className="w-full h-11 pl-3 pr-9 bg-white border border-[#d5e7cf] rounded-lg text-sm font-medium text-[#111b0d] focus:ring-1 focus:ring-[#46ec13] focus:border-[#46ec13] appearance-none cursor-pointer hover:bg-gray-50 transition-colors">
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Deactivated</option>
            </select>
            <MdExpandMore className="absolute right-2.5 top-3 text-[#5e9a4c] pointer-events-none text-xl" />
          </div>

          <button className="h-11 px-4 flex items-center gap-2 bg-white border border-[#d5e7cf] rounded-lg text-sm font-bold text-[#111b0d] hover:bg-gray-50 transition-colors shrink-0">
            <MdDownload className="text-lg" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* ── Table / Cards ── */}
      <div className="bg-white border border-[#d5e7cf] rounded-xl overflow-hidden shadow-sm">
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f9fcf8] border-b border-[#d5e7cf]">
                <th className="p-4 pl-6 w-12">
                  <input
                    type="checkbox"
                    className="rounded border-[#d5e7cf] text-[#46ec13] focus:ring-[#46ec13]/50 h-4 w-4"
                  />
                </th>
                {[
                  "User",
                  "Role",
                  "Wallet Balance",
                  "Status",
                  "Last Login",
                  "Actions",
                ].map((col) => (
                  <th
                    key={col}
                    className={`p-4 text-xs font-bold text-[#5e9a4c] uppercase tracking-wider ${
                      col === "Actions" ? "text-right pr-6" : ""
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eaf3e7]">
              {users.map((user) => {
                const role = roleBadge[user.role];
                const status = statusBadge[user.status];
                return (
                  <tr
                    key={user.id}
                    className="hover:bg-[#f9fcf8] transition-colors"
                  >
                    <td className="p-4 pl-6">
                      <input
                        type="checkbox"
                        className="rounded border-[#d5e7cf] text-[#46ec13] focus:ring-[#46ec13]/50 h-4 w-4"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="size-10 rounded-full bg-cover bg-center shrink-0"
                          style={{ backgroundImage: `url('${user.avatar}')` }}
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-[#111b0d] text-sm">
                            {user.name}
                          </span>
                          <span className="text-xs text-[#5e9a4c]">
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${role}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm font-medium text-[#111b0d]">
                        {user.balance}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${status.wrapper}`}
                      >
                        <span
                          className={`size-1.5 rounded-full ${status.dot}`}
                        />
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-[#111b0d]">
                        {user.lastLogin}
                      </span>
                      {user.lastLoginTime && (
                        <span className="text-xs text-[#5e9a4c] block">
                          {user.lastLoginTime}
                        </span>
                      )}
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <button className="text-[#5e9a4c] hover:text-[#111b0d] transition-colors p-1 rounded hover:bg-gray-100">
                        <MdMoreVert className="text-xl" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile card list */}
        <div className="md:hidden">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-[#d5e7cf] bg-[#f9fcf8]">
          <p className="text-sm text-[#5e9a4c]">
            <span className="font-bold text-[#111b0d]">1–5</span>
            <span className="hidden sm:inline">
              {" "}
              of <span className="font-bold text-[#111b0d]">1,240</span> results
            </span>
          </p>
          <div className="flex gap-2">
            <button
              disabled
              className="px-3 py-1.5 rounded-lg border border-[#d5e7cf] text-sm font-medium text-[#5e9a4c] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-[#d5e7cf] text-sm font-medium text-[#5e9a4c] hover:bg-white hover:text-[#46ec13] transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
