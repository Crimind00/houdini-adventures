import { Link } from "react-router";
import { boats, destinationPages, photoUrl, tours } from "../data/offerings.js";
import { SectionHeading } from "./PageComponents.jsx";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

function HomePage() {
  usePageMetadata("Malta Cruises & Boat Hire", "Explore Malta boat cruises, private charters and island routes around Malta, Comino and Gozo.");
  return (
    <>
      <section className="home-hero">
        <img className="home-hero-image" src={photoUrl("photo-1519046904884-53103b34b206", 2000)} alt="Clear Mediterranean water beside a small island shore" fetchPriority="high" />
        <div className="home-hero-overlay" />
        <div className="container home-hero-content">
          <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Malta · Gozo · Comino</span>
          <h1>Malta is better<br /><em>from the water.</em></h1>
          <p>Find your cruise, charter a boat, and explore the islands at your own pace—from Valletta's harbour to Comino and Gozo.</p>
          <div className="hero-actions">
            <Link className="button button-orange" to="/boats">Explore boat hire <span aria-hidden="true">↗</span></Link>
            <Link className="hero-text-link" to="/tours">Browse cruises <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-caption"><span>Malta & its islands</span><span>Find a little more out there</span><span className="caption-line" /></div>
        </div>
        <div className="hero-side-note">CRUISES · CHARTERS · ISLAND DAYS</div>
      </section>

      <section className="service-strip" aria-label="Explore boat and travel experiences">
        <div className="container service-strip-inner">
          <span className="strip-label">Choose your day</span>
          <Link className="service-link" to="/tours"><span className="service-number">01</span><span><strong>Scenic cruises</strong><small>Harbours, coastlines and island routes</small></span><span className="service-arrow" aria-hidden="true">↗</span></Link>
          <Link className="service-link" to="/boats"><span className="service-number">02</span><span><strong>Private boat hire</strong><small>Plan a charter around your group</small></span><span className="service-arrow" aria-hidden="true">↗</span></Link>
          <Link className="service-link" to="/quote?type=leasing"><span className="service-number">03</span><span><strong>Longer-term hire</strong><small>Discuss a tailored quote</small></span><span className="service-arrow" aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="container content-section featured-section">
        <SectionHeading eyebrow="Cruises around the islands" title="Where will the water take you?" action={<Link className="text-link" to="/tours">All cruise routes <span aria-hidden="true">↗</span></Link>}>
          Explore sample routes around Malta, Comino and Gozo. Choose a destination to begin planning.
        </SectionHeading>
        <div className="card-grid card-grid-three">
          {tours.slice(0, 3).map((tour) => (
            <Link className="home-feature-card" key={tour.id} to={`/tours/${tour.slug}`}>
              <img src={photoUrl(tour.image, 900)} alt={tour.imageAlt} loading="lazy" />
              <span className="feature-card-index">{tour.duration}</span>
              <div><span className="eyebrow eyebrow-light">{tour.place}</span><h3>{tour.title}</h3><span className="feature-card-cta">Explore route <span aria-hidden="true">↗</span></span></div>
            </Link>
          ))}
        </div>
        <p className="sample-inline">Sample itineraries and illustrative imagery. Routes, schedules, availability and prices need confirmation.</p>
      </section>

      <section className="home-about-band">
        <div className="container home-about-layout">
          <div className="about-image-wrap">
            <img src={photoUrl("photo-1567899378494-47b22a2ae96a", 1100)} alt="A boat offshore on clear Mediterranean water" loading="lazy" />
            <div className="image-stamp"><span>GO</span><strong>by<br />boat</strong></div>
          </div>
          <div className="home-about-copy">
            <span className="eyebrow">Private charters & boat hire</span>
            <h2>Pick a coastline.<br /><em>Make the day your own.</em></h2>
            <p>Looking for a harbour cruise, a private boat around Comino, a Gozo day trip or a longer hire? Browse the sample options and send an enquiry with your date, group size and preferred route.</p>
            <Link className="text-link" to="/boats">Explore boats & charters <span aria-hidden="true">↗</span></Link>
            <div className="values-row"><div><strong>01</strong><span>Shared cruises</span></div><div><strong>02</strong><span>Private charters</span></div><div><strong>03</strong><span>Longer-term hire</span></div></div>
          </div>
        </div>
      </section>

      <section className="container content-section destination-section">
        <SectionHeading eyebrow="One island, many ways to explore" title="Choose your starting point." />
        <div className="destination-grid">
          {destinationPages.slice(0, 6).map((destination, index) => (
            <Link className={`destination-card destination-card-${index % 3}`} to={`/destinations/${destination.slug}`} key={destination.slug}>
              <span>0{index + 1}</span><strong>{destination.name}</strong><i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
        <p className="sample-inline">Destination names are itinerary examples, not statements of current service or departure availability.</p>
      </section>

      <section className="container content-section event-feature-section">
        <div className="event-feature-image">
          <img src={photoUrl(boats[1].image, 1300)} alt={boats[1].imageAlt} loading="lazy" />
          <span className="image-tag">Private charter · sample</span>
        </div>
        <div className="event-feature-copy">
          <span className="eyebrow">A boat for your kind of day</span>
          <h2>Small group.<br /><em>Big blue horizon.</em></h2>
          <p>Compare shared and private options, then tell us your intended date, departure area, guest count and route. Every charter detail must be confirmed before booking.</p>
          <Link className="button button-dark" to="/boats">Find boat hire <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="process-band">
        <div className="container">
          <SectionHeading eyebrow="Clear steps, no guesswork" title="From first idea to confirmed plan." />
          <div className="process-grid">
            <div className="process-item"><span>01</span><h3>Choose a route or boat</h3><p>Start with Malta, Comino, Gozo or a harbour cruise idea.</p></div>
            <div className="process-item"><span>02</span><h3>Share your trip details</h3><p>Dates, group size, duration and crew preferences help shape the enquiry.</p></div>
            <div className="process-item"><span>03</span><h3>Confirm before you commit</h3><p>Availability, safety details, inclusions, pricing and terms must be agreed separately.</p></div>
          </div>
          <p className="process-disclaimer">Concept site: enquiries do not create bookings or confirm real-time availability.</p>
        </div>
      </section>

      <section className="container content-section gallery-preview">
        <div>
          <span className="eyebrow">Malta from the water</span>
          <h2>Follow the coastline.</h2>
          <p>Browse illustrative scenes and find inspiration for your island day.</p>
          <Link className="text-link" to="/galleries">Open the gallery <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="preview-images">
          <img src={photoUrl("photo-1507525428034-b723cf961d3e", 850)} alt="A sunlit coastal cove with clear water" loading="lazy" />
          <img src={photoUrl("photo-1519046904884-53103b34b206", 650)} alt="A quiet Mediterranean island bay" loading="lazy" />
          <span className="preview-caption">Sample imagery · actual locations vary</span>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div><span className="eyebrow eyebrow-light">Start with the details you know</span><h2>Your Malta boat day starts here.</h2><p>Tell us the date, group size and places you’d love to see. We’ll use that context for your enquiry.</p></div>
          <Link className="button button-light" to="/enquiry?type=boat">Plan a boat trip <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
