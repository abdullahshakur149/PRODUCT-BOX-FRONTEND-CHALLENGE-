'use client';

export default function Hero({ headline, subheadline, imageSrc }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl mx-auto py-12 px-4 md:px-8">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight">{headline}</h1>
        <p className="text-xl text-gray-700 max-w-xl">{subheadline}</p>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={imageSrc}
          alt="RandoStore Hero"
          className="w-72 h-72 object-contain rounded-xl shadow-lg bg-white"
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>
    </section>
  );
} 