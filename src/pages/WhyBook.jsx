import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

export default function WhyBookPage() {
  return (
    <>
      <PageIntro eyebrow="Clear information, better choices" title="Know what to ask before you sail.">
        This concept helps organise cruise and boat-hire enquiries. It does not claim to verify operators, boats or availability.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <h2>Compare the details that matter</h2>
        <p>Use destination, duration, capacity and trip type to narrow down sample ideas. For every real trip, confirm the operator, departure point, vessel, inclusions, pricing basis, safety details and terms.</p>
        <h2>Understand the next step</h2>
        <p>Sending an enquiry requests information. A quote is a proposed price. Neither is a confirmed booking or a payment. This site has no live availability or checkout.</p>
        <h2>Ask for verified policies</h2>
        <p>Request the current cancellation, rescheduling, deposit and weather policies directly from the operator before agreeing to any trip.</p>
        <Link className="button button-dark" to="/faq">Read frequently asked questions <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
