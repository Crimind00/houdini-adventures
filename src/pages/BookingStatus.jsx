import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

export function BookingConfirmationPage() {
  return (
    <>
      <PageIntro eyebrow="Booking status" title="No booking has been confirmed here.">
        This frontend cannot verify payments, availability or booking status.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <h2>Check the confirmation from your operator</h2>
        <p>Use the contact details on the confirmation you received from the booking provider. Do not send payment details or sensitive information through this demo website.</p>
        <Link className="button button-dark" to="/contact">Contact details <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}

export function BookingLookupPage() {
  return (
    <>
      <PageIntro eyebrow="Private booking information" title="Booking lookup is not connected.">
        This website has no secure booking-management system.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <p>Booking details are not shown here. Please contact the provider using the details in your original booking confirmation.</p>
        <Link className="button button-dark" to="/contact">Contact us <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
