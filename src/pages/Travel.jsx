import RequestForm from "./RequestForm.jsx";
import { PageIntro } from "./PageComponents.jsx";

export default function TravelPage() {
  return (
    <>
      <PageIntro eyebrow="Island days, thoughtfully planned" title="Plan your Malta escape.">
        Share your dates, group size and the places you’d love to see. Build a trip around Malta, Comino, Gozo and nearby coastlines.
      </PageIntro>
      <section className="container content-section">
        <div className="form-layout">
          <div className="form-aside"><span className="eyebrow">Start with the outline</span><h2>Harbour, island or a little of everything.</h2><p>Tell us about your trip, preferred destinations, budget and what you need help arranging. A tailored itinerary requires a separate conversation.</p><div className="aside-note"><span aria-hidden="true">✳</span><p>We ask for your name and email so a team member could follow up. This demo stores and sends nothing.</p></div></div>
          <RequestForm kind="Travel planning" submitLabel="Send trip enquiry" />
        </div>
      </section>
    </>
  );
}
