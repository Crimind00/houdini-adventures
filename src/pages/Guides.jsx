import { Link, Outlet, useParams } from "react-router";
import { guides } from "../data/offerings.js";
import { Image, OfferingCard, PageIntro } from "./PageComponents.jsx";
import NotFoundPage from "./NotFound.jsx";
import { usePageMetadata } from "../hooks/usePageMetadata.js";

export function GuidesDirectory() {
  return <Outlet />;
}

export function GuidesIndex() {
  usePageMetadata("Malta boat trip guides", "Practical planning guides for Malta cruises, Comino, Gozo and boat hire. Sample editorial content requires review.");
  return (
    <>
      <PageIntro eyebrow="Malta by boat" title="Notes for a better island day.">
        Practical starting points for choosing a cruise, planning an island route and preparing for time on the water.
      </PageIntro>
      <section className="container content-section">
        <div className="card-grid card-grid-three">{guides.map((guide) => <OfferingCard key={guide.id} item={{ ...guide, price: guide.date, duration: guide.category }} kind="guide" />)}</div>
        <p className="photo-disclaimer">Guide articles are sample concepts and need editorial review and operator verification before publication.</p>
      </section>
    </>
  );
}

export function GuideDetail() {
  const { guideId } = useParams();
  const guide = guides.find((item) => item.id === guideId);
  usePageMetadata(guide ? guide.title : "Guide not found", guide ? guide.description : "This guide could not be found.");
  if (!guide) return <NotFoundPage />;
  return (
    <>
      <section className="article-hero">
        <div className="container article-header"><Link className="back-link" to="/guides">← All guides</Link><span className="eyebrow">{guide.category} · {guide.date}</span><h1>{guide.title}</h1><p>{guide.description}</p></div>
        <Image id={guide.image} alt={guide.imageAlt} width={1600} className="article-image" />
      </section>
      <article className="article-body">
        <span className="article-note">Sample article concept · details require verification</span>
        <h2>Start with your destination</h2>
        <p>Malta, Comino and Gozo each offer a different kind of day on the water. Start with where you’d like to go, then check the departure point, time available and route options with your operator.</p>
        <h2>Confirm practical details</h2>
        <p>Before you travel, confirm the meeting point, vessel capacity, inclusions, safety information, weather alternatives and cancellation terms. Routes and landing access can depend on current conditions and permissions.</p>
        <Link className="text-link" to="/boats">Explore boat hire <span aria-hidden="true">↗</span></Link>
      </article>
    </>
  );
}

export default GuidesDirectory;
