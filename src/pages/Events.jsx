import { Link, Outlet, useParams, useSearchParams } from "react-router";
import { events } from "../data/offerings.js";
import { Image, OfferingCard, PageIntro, SampleNotice } from "./PageComponents.jsx";
import NotFoundPage from "./NotFound.jsx";

const eventCategories = events.map((item) => item.category);

export function EventsDirectory() {
  return <Outlet />;
}

export function EventsIndex() {
  const { eventId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const category = eventCategories.includes(requestedCategory) ? requestedCategory : "All event styles";
  function updateCategory(value) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      if (value === "All event styles") next.delete("category");
      else next.set("category", value);
      return next;
    });
  }
  const selected = events.find((item) => item.id === eventId);
  if (eventId && !selected) return <NotFoundPage />;
  if (selected) {
    return (
      <>
        <PageIntro eyebrow={selected.category} title={selected.title}>{selected.description}</PageIntro>
        <section className="container detail-layout content-section">
          <div className="detail-copy">
            <Image id={selected.image} alt={selected.imageAlt} width={1200} className="event-detail-image" />
            <span className="eyebrow">A starting point, not a package promise</span>
            <h2>Make the occasion your own.</h2>
            <p>Final venue or route, setup and teardown, inclusions, restrictions, pricing and cancellation terms need to be agreed for your event.</p>
            <div className="detail-facts"><div><span>Guest capacity</span><strong>{selected.capacity}</strong></div><div><span>Duration</span><strong>{selected.duration}</strong></div><div><span>Venue / route</span><strong>Preference by enquiry</strong></div><div><span>Pricing basis</span><strong>Tailored quote</strong></div></div>
            <SampleNotice />
          </div>
          <aside className="booking-card"><span className="eyebrow">Plan your event</span><strong className="booking-price">Request a quote</strong><p>Scope and final pricing depend on your plans.</p><Link className="button button-orange button-full" to={`/enquiry?${new URLSearchParams({ type: "event", product: selected.title })}`}>Enquire about this event <span aria-hidden="true">↗</span></Link><small>An enquiry is not a confirmed event booking.</small></aside>
        </section>
      </>
    );
  }
  const shown = events.filter((item) => category === "All event styles" || item.category === category);
  return (
    <>
      <PageIntro eyebrow="Gather in Malta" title="Bring your people together.">
        Explore sample ideas for private celebrations and group outings around Malta and the islands.
      </PageIntro>
      <section className="container content-section">
        <div className="filter-bar"><label>Event style<select value={category} onChange={(event) => updateCategory(event.target.value)}>{["All event styles", ...eventCategories].map((item) => <option key={item}>{item}</option>)}</select></label><span className="result-count" aria-live="polite">{shown.length} ideas</span></div>
        <SampleNotice />
        <div className="card-grid card-grid-three">{shown.map((event) => <OfferingCard key={event.id} item={{ ...event, price: "Request a quote" }} kind="event" />)}</div>
        <div className="event-cta"><div><span className="eyebrow">Have another idea?</span><h2>Start with your occasion and group.</h2></div><Link className="button button-orange" to="/enquiry?type=event">Plan an event <span aria-hidden="true">↗</span></Link></div>
      </section>
    </>
  );
}

export default EventsDirectory;
