import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

export default function SafetyPage() {
  return (
    <>
      <PageIntro eyebrow="Weather & safety" title="Conditions come before the itinerary.">
        Marine conditions can change. Decisions about whether a trip operates belong to the responsible operator and skipper.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <h2>Confirm the operator’s current guidance</h2>
        <p>Before agreeing to a trip, request the operator’s safety information, passenger limits, equipment details, weather decision process, alternative arrangements, cancellation terms and emergency contact procedure.</p>
        <h2>Policies have not been supplied</h2>
        <p>This concept site does not state licensing, insurance, refund, rescheduling or cancellation policies. The business owner must provide and approve these details before the page is used commercially.</p>
        <Link className="button button-dark" to="/enquiry?type=boat">Ask about a trip <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
