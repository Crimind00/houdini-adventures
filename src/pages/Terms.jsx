import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Terms · not supplied" title="Booking terms need operator approval.">
        No approved terms and conditions were provided for this project.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <p>This frontend is a concept, not an offer to sell or a booking contract. No reservation, price, deposit, cancellation condition or refund is created or promised by using the demo forms.</p>
        <p>The business owner must supply and approve applicable customer terms, including operator responsibilities, payment schedules, cancellation, weather and complaints, before commercial use.</p>
        <Link className="button button-dark" to="/contact">Contact <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
