import { Link, Navigate, Outlet, useParams, useSearchParams } from "react-router";
import { destinations, tours } from "../data/offerings.js";
import { Image, OfferingCard, PageIntro, SampleNotice } from "./PageComponents.jsx";
import NotFoundPage from "./NotFound.jsx";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export function ToursDirectory() {
  return <Outlet />;
}

export function ToursIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedDestination = searchParams.get("destination");
  const requestedStyle = searchParams.get("style");
  const destination = destinations.includes(requestedDestination) ? requestedDestination : "All destinations";
  const styleOptions = ["Harbour cruise", "Island cruise", "Sunset cruise", "Private boat trip"];
  const activity = styleOptions.includes(requestedStyle) ? requestedStyle : "Any cruise";
  function updateFilter(key, value, defaultValue) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      if (value === defaultValue) next.delete(key);
      else next.set(key, value);
      return next;
    });
  }
  const filtered = tours.filter((tour) =>
    (destination === "All destinations" || tour.destination === destination) &&
    (activity === "Any cruise" || tour.type === activity)
  );
  const types = ["Any cruise", ...new Set(tours.map((tour) => tour.type))];
  usePageMetadata("Malta boat cruises", "Browse sample Malta cruises to Comino, Gozo, Valletta Harbour and the southern coast. Routes and prices require confirmation.");
  return (
    <>
      <PageIntro eyebrow="Malta · Gozo · Comino" title="Cruise the Maltese islands.">
        Browse sample harbour, coastal and island routes. Select a destination and tell us what kind of day on the water you’re planning.
      </PageIntro>
      <section className="container content-section">
        <div className="filter-bar" aria-label="Filter cruises">
          <label>Destination
            <select value={destination} onChange={(event) => updateFilter("destination", event.target.value, "All destinations")}>
              {["All destinations", ...destinations].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>Cruise style
            <select value={activity} onChange={(event) => updateFilter("style", event.target.value, "Any cruise")}>
              {types.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <span className="result-count" aria-live="polite">{filtered.length} routes</span>
        </div>
        <SampleNotice />
        {filtered.length ? <div className="card-grid card-grid-three">{filtered.map((tour) => <OfferingCard key={tour.id} item={tour} />)}</div> :
          <div className="empty-state"><h2>No routes match those filters</h2><p>Try another destination or send us a custom cruise enquiry.</p><Link className="text-link" to="/enquiry?type=boat">Plan a route <span aria-hidden="true">↗</span></Link></div>}
      </section>
      <section className="soft-band"><div className="container split-callout"><div><span className="eyebrow">A route of your own</span><h2>Want to see more than one island?</h2><p>Share your preferred date, group size, departure area and route ideas for a tailored trip enquiry.</p></div><Link className="button button-dark" to="/enquiry?type=boat">Ask about a cruise <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}

export function TourDetail() {
  const { tourSlug } = useParams();
  const tour = tours.find((item) => item.slug === tourSlug || item.id === tourSlug);
  usePageMetadata(tour ? tour.title : "Cruise not found", tour ? `${tour.description} Sample route; ask the operator to confirm details.` : "This cruise route could not be found.");
  if (!tour) return <NotFoundPage />;
  if (tourSlug === tour.id) return <Navigate to={`/tours/${tour.slug}`} replace />;
  const enquiryHref = `/enquiry?${new URLSearchParams({ type: "boat", product: tour.title, price: tour.price })}`;
  return (
    <>
      <section className="detail-hero">
        <Image id={tour.image} alt={tour.imageAlt} width={1800} className="detail-hero-image" />
        <div className="detail-hero-shade" />
        <div className="container detail-hero-content">
          <Link className="back-link back-link-light" to="/tours">← All cruises</Link>
          <span className="eyebrow eyebrow-light">{tour.place} · {tour.duration}</span>
          <h1>{tour.title}</h1>
          <p>{tour.description}</p>
        </div>
      </section>
      <section className="container detail-layout content-section">
        <div className="detail-copy">
          <span className="eyebrow">The route</span>
          <h2>Malta, seen from the sea.</h2>
          <p>{tour.description} This is an illustrative route only; departure point, stops, itinerary and access depend on operator confirmation and sea conditions.</p>
          <div className="detail-facts">
            <div><span>Destination</span><strong>{tour.destination}</strong></div>
            <div><span>Duration</span><strong>{tour.duration}</strong></div>
            <div><span>Meeting point</span><strong>Confirm before travel</strong></div>
            <div><span>Sample price basis</span><strong>{tour.basis}</strong></div>
          </div>
          <h3>Before you set sail</h3>
          <p>Ask about vessel capacity, the exact route, inclusions, child and group rules, accessibility, safety equipment, weather alternatives, what to bring and cancellation terms.</p>
          <div className="detail-extra-grid">
            <div><span>Route & stops</span><p>Discuss the itinerary and any time ashore before confirming.</p></div>
            <div><span>Included</span><p>Food, equipment, crew and additional charges need confirmation.</p></div>
            <div><span>Safety & terms</span><p>Request current safety guidance, sea-condition plan and cancellation policy.</p></div>
          </div>
          <SampleNotice />
        </div>
        <aside className="booking-card"><span className="eyebrow">Ask about this cruise</span><strong className="booking-price">{tour.price}</strong><p>{tour.basis}</p><Link className="button button-orange button-full" to={enquiryHref}>Enquire about this route <span aria-hidden="true">↗</span></Link><small>An enquiry is not a reservation or confirmed booking.</small></aside>
      </section>
    </>
  );
}

export default ToursDirectory;
