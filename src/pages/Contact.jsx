import { Link } from "react-router";
import RequestForm from "./RequestForm.jsx";
import { PageIntro } from "./PageComponents.jsx";

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Malta boat trips & travel" title="Let’s talk about your island plans.">
        Questions about a cruise, boat hire or a route around Malta? Send us a note.
      </PageIntro>
      <section className="container content-section">
        <div className="form-layout">
          <div className="form-aside"><span className="eyebrow">Contact details</span><h2>Tell us what you’re planning.</h2><p>Verified phone, email, messaging, operating hours and location details were not supplied for this project.</p><div className="contact-placeholder"><span aria-hidden="true">✳</span><p><strong>Business contact information</strong><br />Placeholder — add verified public contact details before launch.</p></div><Link className="text-link" to="/enquiry?type=boat">Already have a route in mind? <span aria-hidden="true">↗</span></Link></div>
          <RequestForm kind="Contact message" submitLabel="Send a message" />
        </div>
      </section>
    </>
  );
}
