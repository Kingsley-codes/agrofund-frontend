"use client";

export default function MissionSection() {
  return (
    <section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-primary text-3xl font-extrabold mb-6">Our Mission</h3>
          <p className="text-lg leading-relaxed mb-6 opacity-90">
            At Agrofund Hub, we empower remote farmers and local producers by providing capital and resources to scale.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            Our mission is to create a sustainable ecosystem where urban investors and rural farmers thrive together.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-8 rounded-md shadow text-center border-t-4 border-primary">
            <div className="text-3xl font-black text-primary mb-2">5k+</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Farmers Empowered</p>
          </div>
          <div className="bg-white p-8 rounded-md shadow text-center border-t-4 border-terracotta">
            <div className="text-3xl font-black text-terracotta mb-2">12k+</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hectares Cultivated</p>
          </div>
          <div className="bg-white p-8 rounded-md shadow text-center border-t-4 border-ochre">
            <div className="text-3xl font-black text-ochre mb-2">24%</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Avg. Annual Yield</p>
          </div>
          <div className="bg-white p-8 rounded-md shadow text-center border-t-4 border-primary">
            <div className="text-3xl font-black text-primary mb-2">₦2B+</div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Capital Deployed</p>
          </div>
        </div>
      </div>
    </section>
  );
}