import { Link } from "react-router";
import { photoUrl } from "../data/offerings.js";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export function PageIntro({ eyebrow, title, children }) {
  const description = typeof children === "string" ? children : title;
  usePageMetadata(title, description);
  return (
    <section className="page-intro">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p className="intro-copy">{children}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children, action }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
      {action}
    </div>
  );
}

export function Image({ id, alt, width = 900, className = "", loading = "lazy" }) {
  return <img className={className} src={photoUrl(id, width)} alt={alt} loading={loading} />;
}

export function SampleNotice({ children = "Sample route and product concepts only. Pricing, capacity, availability, inclusions and terms require operator confirmation." }) {
  return <p className="sample-inline">{children}</p>;
}

export function OfferingCard({ item, kind = "tour" }) {
  const title = item.title || item.name;
  const href = kind === "tour" ? `/tours/${item.slug || item.id}` :
    kind === "boat" ? `/boats/${item.id}` :
      kind === "event" ? `/events/${item.id}` :
        kind === "guide" ? `/guides/${item.id}` : "#";
  return (
    <article className="offering-card">
      <Link to={href} className="card-image-link" aria-label={`View ${title}`}>
        <Image id={item.image} alt={item.imageAlt} className="card-image" />
        {(item.tag || item.type) && <span className="image-tag">{item.tag || item.type}</span>}
        <span className="image-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="card-content">
        <span className="card-kicker">{item.place || item.category || item.type}</span>
        <h3><Link to={href}>{title}</Link></h3>
        {item.description && <p>{item.description}</p>}
        <div className="card-meta">
          <span>{item.duration || item.capacity}</span>
          <span>{item.price || "Request a quote"}</span>
        </div>
        <small>{item.basis || "Sample content · details confirmed on enquiry"}</small>
      </div>
    </article>
  );
}
