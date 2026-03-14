export default function CheckoutLoading() {
  return (
    <div className="flex items-center min-h-screen justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-gray-500">Loading checkout…</p>
      </div>
    </div>
  );
}
