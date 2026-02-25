import { FiInfo, FiArrowRight, FiLock } from "react-icons/fi";

export default function OrderSummary() {
  return (
    <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
      <div className="p-6 bg-gradient-to-br from-white to-background-light border-b border-gray-100">
        <h3 className="text-lg font-bold mb-4">Investment Summary</h3>

        <div className="flex gap-4 mb-4">
          <div
            className="w-20 h-20 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAU_aS6DaRrFDF62Gnwxa5D-cjkZXpiI9AUbI_xF9yXsBlsiLypq79VOt4aH7hs6wZeHxJimgDBVHioe8R9hHq2HfvNXdYyNNoJ9mzAoDaARQAkPU1jwDomIv9Nfsgm2GerOJFdvoGiP5lHeHzmvJepjvDoNSNbP5p1EGaGK4UTfTJFIJZQOqjl31RfxydrqiQTfVTZEqkopI_fVSX6lKWxW4vOQ8W55-6dAFi6jYlShFLmHbAKVS5lqa_j8kwsnCnJEJhGYtHf8Aw)",
            }}
          />

          <div>
            <p className="text-sm font-bold text-primary">
              Cycle 2 • 12 Months
            </p>
            <p className="font-bold">Cassava Plantation - Zone B</p>
            <p className="text-xs text-gray-500">Projected ROI: 18%</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4 text-sm">
        <Row label="Unit Price" value="$50.00" />
        <Row label="Quantity" value="30 Units" />
        <Divider />
        <Row label="Subtotal" value="$1,500.00" />
        <Row
          label={
            <span className="flex items-center gap-1">
              Processing Fee <FiInfo size={14} />
            </span>
          }
          value="$15.00"
        />
        <Row label="Eco-Discount" value="- $5.00" highlight />
        <Divider />

        <div className="flex justify-between items-end pb-2">
          <span className="text-base font-bold text-gray-800">
            Total to Pay
          </span>
          <span className="text-2xl font-black font-mono">$1,510.00</span>
        </div>

        <div className="flex items-start gap-3 py-2">
          <input type="checkbox" className="mt-1" />
          <div className="text-xs text-gray-500">
            <label className="font-medium text-gray-700">
              I agree to the Terms of Investment
            </label>
            <p>
              By continuing, you agree to Agrofund's{" "}
              <a className="text-primary hover:underline" href="#">
                Conditions of Use
              </a>{" "}
              and{" "}
              <a className="text-primary hover:underline" href="#">
                Privacy Notice
              </a>
              .
            </p>
          </div>
        </div>

        <button className="w-full bg-primary hover:bg-green-500 text-black font-bold py-4 px-6 rounded-xl shadow-lg shadow-green-500/20 transition flex items-center justify-center gap-2">
          Confirm & Pay $1,510.00
          <FiArrowRight />
        </button>

        <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
          <FiLock size={14} /> Payments are secure and encrypted
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: React.ReactNode;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center ${
        highlight ? "text-primary text-xs font-semibold" : "text-gray-600"
      }`}
    >
      <span>{label}</span>
      <span className="font-mono font-medium">{value}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-gray-200 my-2" />;
}
