"use client";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-end">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuP3CYXX8bs926POTlb2pm7kHt_48MaJMNZcKW4GGpTNcm7_Af4ZmE56RiPvHYBPJOGe072kDO_mZG0566Z5lD06ZqGco3vwESupxL8tAnxjxhzFHlgilXo2pnO1xmdvycYgozXZ5uXd34JBpOXNWqpOmchUEfP0pj_IzYOn5JKNazjhqUuVOH9SborgsNVxQ70AwJZDgKGWI513hLpFbq1nEUU5Wah4eANzNhcT8-o8ViiGlckqqjqoXdutIUwS9_wruvIjRAfZ2v"
          alt="Cassava plantation"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pb-16 w-full">
        <span className="inline-block bg-terracotta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Our Roots</span>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl">
          Bridging Urban Wealth with Rural Productivity
        </h2>
      </div>
    </section>
  );
}