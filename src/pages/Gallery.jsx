import { useState } from "react";
import { events, boats, tours } from "../data/offerings.js";
import { Image, PageIntro } from "./PageComponents.jsx";

const galleryImages = [
  ...tours.slice(0, 4).map((item) => ({ ...item, category: "Cruises" })),
  ...boats.slice(0, 3).map((item) => ({ ...item, title: item.name, category: "Boat hire" })),
  ...events.map((item) => ({ ...item, category: "Gatherings" })),
];

export default function GalleryPage() {
  const [category, setCategory] = useState("All scenes");
  const categories = ["All scenes", "Cruises", "Boat hire", "Gatherings"];
  const shown = galleryImages.filter((image) => category === "All scenes" || image.category === category);
  return (
    <>
      <PageIntro eyebrow="Malta & the islands" title="A little inspiration from the water.">
        Browse illustrative coastal scenes and imagine where your next cruise might take you.
      </PageIntro>
      <section className="container content-section">
        <div className="filter-tabs" role="group" aria-label="Filter gallery">
          {categories.map((item) => <button key={item} type="button" className={category === item ? "filter-tab active" : "filter-tab"} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div className="gallery-grid">
          {shown.map((image, index) => (
            <figure className={`gallery-tile gallery-tile-${index % 5}`} key={`${image.category}-${image.id}`}>
              <Image id={image.image} alt={image.imageAlt} width={1000} className="gallery-image" />
              <figcaption><span>{image.category}</span><strong>{image.title || image.name}</strong></figcaption>
            </figure>
          ))}
        </div>
        <p className="photo-disclaimer">Illustrative imagery loaded from Unsplash. Confirm media usage rights and replace with approved company photography before launch.</p>
      </section>
    </>
  );
}
