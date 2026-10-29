import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

export default function BookingPage() {
  return (
    <>
      <PageIntro eyebrow="Booking information" title="Bookings are not available through this demo.">
        This site has no live inventory, checkout, payment processing or booking confirmation integration.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <h2>Request details before making plans</h2>
        <p>For a cruise or boat hire, use an enquiry to ask the operator about your date, group size, route, departure point, price, inclusions and terms. A quote or enquiry is not a reservation.</p>
        <p>A booking is confirmed only when the responsible operator verifies availability and confirms the booking through an approved process. This frontend cannot verify that status.</p>
        <Link className="button button-dark" to="/enquiry?type=boat">Make a boat enquiry <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
