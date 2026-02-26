export default function BillingInformation() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
          1
        </div>
        <h3 className="text-xl font-semibold">Billing Information</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            First Name
          </label>
          <input
            placeholder="First name"
            className="w-full rounded-lg py-1 pl-5 border border-gray-200 focus:border-gray-400 focus:ring-primary"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            Last Name
          </label>
          <input
            placeholder="Last name"
            className="w-full rounded-lg py-1 pl-5 border border-gray-200 focus:border-gray-400 focus:ring-primary"
          />
        </div>

        <div className="space-y-1 md:col-span-2">
          <label className="text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg py-1 pl-5 border border-gray-200 focus:border-gray-400 focus:ring-primary"
          />
        </div>
      </div>
    </section>
  );
}
