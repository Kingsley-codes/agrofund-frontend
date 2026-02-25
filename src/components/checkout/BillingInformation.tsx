export default function BillingInformation() {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
          1
        </div>
        <h3 className="text-xl font-bold">Billing Information</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            First Name
          </label>
          <input
            className="w-full rounded-lg border-gray-200 bg-background-light focus:border-primary focus:ring-primary"
            defaultValue="Alex"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            Last Name
          </label>
          <input
            className="w-full rounded-lg border-gray-200 bg-background-light focus:border-primary focus:ring-primary"
            defaultValue="Morgan"
          />
        </div>

        <div className="space-y-1 md:col-span-2">
          <label className="text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 bg-background-light focus:border-primary focus:ring-primary"
            defaultValue="alex.morgan@example.com"
          />
        </div>
      </div>
    </section>
  );
}
