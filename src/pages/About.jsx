import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Malta · Gozo · Comino" title="A good island day starts with a good plan.">
        This website concept is focused on cruises, boat hire and travel planning around Malta and its neighbouring islands.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <h2>Built around the water</h2>
        <p>Houdini Adventures is the brand name present in the starter project. Verified operating areas, company history, team details, qualifications, partners and customer reviews were not provided, so this concept does not make claims about them.</p>
        <h2>Clear details before you book</h2>
        <p>All vessel listings, routes and prices are sample content. Confirm availability, departure point, permitted routes, safety details, inclusions, deposits and terms directly with the operator before making a booking.</p>
        <Link className="button button-dark" to="/boats">Explore boat hire <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
