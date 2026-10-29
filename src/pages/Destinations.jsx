import { Link, useParams } from "react-router";
import { destinationPages } from "../data/offerings.js";
import { Image, OfferingCard, PageIntro, SampleNotice } from "./PageComponents.jsx";
import NotFoundPage from "./NotFound.jsx";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export function DestinationsIndex() {
  usePageMetadata("Malta boat trip destinations", "Explore sample boat-trip destination ideas around Malta, Valletta, Comino, Gozo and the coast.");
  return (
    <>
      <PageIntro eyebrow="Malta · Gozo · Comino" title="Choose where your boat day begins.">
        Explore destination ideas around the Maltese islands. Routes, meeting points and access details must be checked with the operator before travel.
      </PageIntro>
      <section className="container content-section">
        <div className="destination-grid">
          {destinationPages.map((destination, index) => (
            <Link className={`destination-card destination-card-${index % 3}`} to={`/destinations/${destination.slug}`} key={destination.slug}>
              <span>0{index + 1}</span><strong>{destination.name}</strong><i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
        <SampleNotice />
      </section>
    </>
  );
}

export function DestinationDetail() {
  const { destinationSlug } = useParams();
  const destination = destinationPages.find((item) => item.slug === destinationSlug);
  usePageMetadata(destination ? `${destination.name} boat trips` : "Destination not found", destination?.summary || "This destination page could not be found.");
  if (!destination) return <NotFoundPage />;
  return (
    <>
      <section className="destination-hero">
        <Image id={destination.image} alt={destination.imageAlt} width={1800} className="destination-hero-image" />
        <div className="detail-hero-shade" />
        <div className="container destination-hero-content">
          <Link className="back-link back-link-light" to="/destinations">← All destinations</Link>
          <span className="eyebrow eyebrow-light">Malta & the islands</span>
          <h1>{destination.name}</h1>
          <p>{destination.summary}</p>
        </div>
      </section>
      <section className="container content-section">
        <div className="destination-planning">
          <div><span className="eyebrow">Plan ahead</span><h2>Confirm the practical details.</h2><p>Departure locations, transit time, landing access, current local restrictions, weather plans and available facilities are not provided in this concept. Verify these details with the operator and relevant local authorities before your trip.</p></div>
          <Link className="button button-dark" to={`/enquiry?${new URLSearchParams({ type: "boat", product: destination.name })}`}>Enquire about this destination <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="section-heading destination-related-heading"><div><span className="eyebrow">Sample route ideas</span><h2>Experiences to explore</h2></div></div>
        {destination.routes.length ? <div className="card-grid card-grid-three">{destination.routes.map((tour) => <OfferingCard item={tour} key={tour.id} />)}</div> : <p className="sample-inline">No specific sample routes are listed for this destination yet.</p>}
        <SampleNotice />
      </section>
    </>
  );
}
