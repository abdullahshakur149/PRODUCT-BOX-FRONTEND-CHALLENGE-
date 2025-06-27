const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-1-4H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" /></svg>
    ),
    title: "Marketplace",
    description: "Browse and discover a wide variety of random items from sellers everywhere."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Easy Checkout",
    description: "Add items to your cart and checkout in just a few clicks. Simple and fast!"
  },
  {
    icon: (
      <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
    ),
    title: "Add Your Own",
    description: "List your own random items for sale and reach buyers instantly."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-7.13a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
    title: "Community",
    description: "Join a growing community of buyers and sellers. Everyone is welcome!"
  }
];

export default function Features() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why RandoStore?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-6 gap-4 border border-gray-100">
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>
            <p className="text-gray-500 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 