export default function Gallery() {
  const items = [
    {
      title: "Hand stitched lapel",
      src: "https://images.unsplash.com/photo-1516763296043-f676c1105999?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-2 row-span-2",
    },
    {
      title: "Bridal detail",
      src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Measuring for fit",
      src: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Button detail",
      src: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-2 row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Atelier Showcase</h2>
          <p className="mt-3 text-gray-600">A glimpse into the details, textures, and craft behind every garment.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-4">
          {items.map((item) => (
            <figure key={item.title} className={`${item.span} relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm`}>
              <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs sm:text-sm text-white bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
