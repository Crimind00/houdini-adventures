import { Link, useParams, useSearchParams } from "react-router";
import { boats, destinations } from "../data/offerings.js";
import { Image, PageIntro, SampleNotice } from "./PageComponents.jsx";
import NotFoundPage from "./NotFound.jsx";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

function BoatCard({ boat }) {
  return (
    <article className="offering-card boat-card">
      <Link to={`/boats/${boat.id}`} className="card-image-link" aria-label={`View ${boat.name}`}>
        <Image id={boat.image} alt={boat.imageAlt} className="card-image" />
        <span className="image-tag">{boat.type}</span><span className="image-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="card-content">
        <span className="card-kicker">{boat.place}</span>
        <h3><Link to={`/boats/${boat.id}`}>{boat.name}</Link></h3>
        <p>{boat.capacity ? `Up to ${boat.capacity} guests` : "Passenger capacity to be confirmed"} · {boat.duration}</p>
        <p className="boat-confirm-label">Details to confirm</p>
        <ul className="feature-pills">{boat.detailsToConfirm.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <div className="card-meta"><span>{boat.price}</span><span>By enquiry</span></div>
        <small>{boat.basis}</small>
      </div>
    </article>
  );
}

export function BoatsDirectory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedDestination = searchParams.get("destination");
  const destination = destinations.includes(requestedDestination) ? requestedDestination : "All destinations";
  const requestedHireType = searchParams.get("hire");
  const hireTypes = ["Shared cruise", "Private charter", "Long-term hire"];
  const vesselType = hireTypes.includes(requestedHireType) ? requestedHireType : "All boat options";
  const useCases = ["Sightseeing", "Private trip", "Island hopping", "Extended hire"];
  const requestedUseCase = searchParams.get("use");
  const useCase = useCases.includes(requestedUseCase) ? requestedUseCase : "Any use";
  function updateFilter(key, value, defaultValue) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      if (value === defaultValue) next.delete(key);
      else next.set(key, value);
      return next;
    });
  }
  const shown = boats.filter((boat) =>
    (destination === "All destinations" || boat.destination === destination) &&
    (vesselType === "All boat options" || boat.type === vesselType) &&
    (useCase === "Any use" || boat.useCase === useCase)
  );
  usePageMetadata("Malta boat hire and private charters", "Explore sample shared cruises, private boat charters and longer-term boat hire around Malta, Comino and Gozo.");

  return (
    <>
      <PageIntro eyebrow="Cruises & boat hire in Malta" title="Choose your boat day.">
        Browse shared cruises, private charters and longer-term hire enquiries around Malta, Comino and Gozo. Listings are examples, not live availability.
      </PageIntro>
      <section className="container content-section">
        <div className="filter-bar" aria-label="Filter cruises and boats">
          <label>Destination
            <select value={destination} onChange={(event) => updateFilter("destination", event.target.value, "All destinations")}>
              {["All destinations", ...destinations].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>Hire type
            <select value={vesselType} onChange={(event) => updateFilter("hire", event.target.value, "All boat options")}>
              {["All boat options", ...hireTypes].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>Use
            <select value={useCase} onChange={(event) => updateFilter("use", event.target.value, "Any use")}>
              {["Any use", ...useCases].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <span className="result-count" aria-live="polite">{shown.length} options</span>
        </div>
        <SampleNotice />
        {shown.length ? <div className="card-grid card-grid-three">{shown.map((boat) => <BoatCard key={boat.id} boat={boat} />)}</div> :
          <div className="empty-state"><h2>No boats match those filters</h2><p>Try a different destination or contact us about your preferred route.</p><Link className="text-link" to="/enquiry?type=boat">Plan a boat trip <span aria-hidden="true">↗</span></Link></div>}
      </section>
      <section className="soft-band"><div className="container split-callout"><div><span className="eyebrow">Longer stays at sea</span><h2>Looking for weekly or seasonal hire?</h2><p>Longer-term hire is a separate quote and approval enquiry, subject to vessel, availability and agreed terms.</p></div><Link className="button button-dark" to="/quote?type=leasing">Ask about longer-term hire <span aria-hidden="true">↗</span></Link></div></section>
    </>
  );
}

export function BoatDetail() {
  const { boatId } = useParams();
  const boat = boats.find((item) => item.id === boatId);
  usePageMetadata(boat ? boat.name : "Boat option not found", boat ? `${boat.type} around ${boat.destination}. Sample listing; enquire to confirm details.` : "This boat option could not be found.");
  if (!boat) return <NotFoundPage />;
  const enquiryType = boat.type === "Long-term hire" ? "leasing" : "boat";
  const enquiryHref = `/enquiry?${new URLSearchParams({ type: enquiryType, product: boat.name, price: boat.price })}`;
  return (
    <>
      <section className="detail-hero">
        <Image id={boat.image} alt={boat.imageAlt} width={1800} className="detail-hero-image" />
        <div className="detail-hero-shade" />
        <div className="container detail-hero-content">
          <Link className="back-link back-link-light" to="/boats">← All cruises & boat hire</Link>
          <span className="eyebrow eyebrow-light">{boat.type} · {boat.place}</span>
          <h1>{boat.name}</h1>
          <p>Explore a sample option for {boat.destination}. Vessel, route and availability details must be confirmed before any booking.</p>
        </div>
      </section>
      <section className="container detail-layout content-section">
        <div className="detail-copy">
          <span className="eyebrow">Trip details</span>
          <h2>Make the Maltese islands part of your plan.</h2>
          <p>Choose your preferred date, duration and destination. The route and meeting point shown are indicative only and must be agreed with the operator.</p>
          <div className="detail-facts">
            <div><span>Destination</span><strong>{boat.destination}</strong></div>
            <div><span>Type</span><strong>{boat.type}</strong></div>
            <div><span>Capacity</span><strong>{boat.capacity ? `Up to ${boat.capacity}` : "To be confirmed"}</strong></div>
            <div><span>Duration</span><strong>{boat.duration}</strong></div>
            <div><span>Departure area</span><strong>{boat.place}</strong></div>
            <div><span>Price basis</span><strong>{boat.basis}</strong></div>
          </div>
          <h3>Crew, equipment & permitted use</h3>
          <p>Ask whether a skipper or crew is included, which safety equipment is provided, what uses and routes are permitted, and whether fuel, food or swim equipment are extra.</p>
          <h3>Safety, deposits & terms</h3>
          <p>Confirm current safety guidance, sea-condition alternatives, deposit, overtime, cancellation terms and extra charges before agreeing. Long-term hire requires a separate quote and approval process.</p>
          <SampleNotice />
        </div>
        <aside className="booking-card"><span className="eyebrow">{boat.type === "Long-term hire" ? "Long-term enquiry" : "Trip enquiry"}</span><strong className="booking-price">{boat.price}</strong><p>{boat.basis}</p><Link className="button button-orange button-full" to={enquiryHref}>{boat.type === "Long-term hire" ? "Request a hire quote" : "Enquire about this boat"} <span aria-hidden="true">↗</span></Link><small>An enquiry is not a reservation or confirmed booking.</small></aside>
      </section>
    </>
  );
}

export default BoatsDirectory;
