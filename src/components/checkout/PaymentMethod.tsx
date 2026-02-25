"use client";

import { useState } from "react";
import {
  FiCreditCard,
  FiLock,
  FiCheckCircle,
  FiHelpCircle,
} from "react-icons/fi";
import { FaUniversity, FaWallet } from "react-icons/fa";

type Method = "card" | "bank" | "wallet";

export default function PaymentMethod() {
  const [method, setMethod] = useState<Method>("card");

  const box =
    "p-4 rounded-xl border-2 border-gray-200 hover:border-primary/50 transition-all h-full flex flex-col items-center justify-center gap-2 bg-background-light cursor-pointer relative";

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            2
          </div>
          <h3 className="text-xl font-bold">Payment Method</h3>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-xs">
          <FiLock />
          SECURE SSL
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div onClick={() => setMethod("card")} className={box}>
          <FiCreditCard size={28} className="text-gray-600" />
          <span className="font-bold text-sm">Credit Card</span>
          {method === "card" && (
            <FiCheckCircle className="absolute top-2 right-2 text-primary" />
          )}
        </div>

        <div onClick={() => setMethod("bank")} className={box}>
          <FaUniversity size={26} className="text-gray-600" />
          <span className="font-bold text-sm">Bank Transfer</span>
          {method === "bank" && (
            <FiCheckCircle className="absolute top-2 right-2 text-primary" />
          )}
        </div>

        <div onClick={() => setMethod("wallet")} className={box}>
          <FaWallet size={26} className="text-gray-600" />
          <span className="font-bold text-sm">Agro Wallet</span>
          {method === "wallet" && (
            <FiCheckCircle className="absolute top-2 right-2 text-primary" />
          )}
        </div>
      </div>

      {method === "card" && (
        <div className="space-y-4 max-w-2xl">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              Card Number
            </label>

            <div className="relative">
              <input
                className="w-full pl-10 rounded-lg border-gray-200 bg-background-light focus:border-primary focus:ring-primary font-mono"
                placeholder="0000 0000 0000 0000"
              />
              <FiCreditCard className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">
                Expiry Date
              </label>
              <input
                className="w-full rounded-lg border-gray-200 bg-background-light focus:border-primary focus:ring-primary"
                placeholder="MM / YY"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 flex justify-between">
                <span>CVC / CVV</span>
                <FiHelpCircle className="text-gray-400" />
              </label>

              <div className="relative">
                <input
                  className="w-full pl-10 rounded-lg border-gray-200 bg-background-light focus:border-primary focus:ring-primary"
                  placeholder="123"
                />
                <FiLock className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              Cardholder Name
            </label>
            <input
              className="w-full rounded-lg border-gray-200 bg-background-light focus:border-primary focus:ring-primary"
              placeholder="Name exactly as it appears on card"
            />
          </div>

          <div className="pt-4 flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded text-primary focus:ring-primary border-gray-300"
            />
            <label className="text-sm text-gray-600">
              Save card securely for future investments
            </label>
          </div>
        </div>
      )}
    </section>
  );
}
