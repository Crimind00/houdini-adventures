import { useSearchParams } from "react-router";
import RequestForm from "./RequestForm.jsx";
import { PageIntro } from "./PageComponents.jsx";

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product") || "";
  const requestType = searchParams.get("type");
  const kind = requestType === "leasing" ? "Boat leasing quote" :
    requestType === "event" ? "Event quote" : "Cruise quote";
  return (
    <>
      <PageIntro eyebrow="A tailored estimate" title="Request a Malta boat hire quote.">
        Share your destination, date and group size. A quote is not a reservation, deposit or confirmed booking.
      </PageIntro>
      <section className="container content-section">
        <div className="form-layout">
          <div className="form-aside"><span className="eyebrow">How it works</span><h2>Agree the details before you decide.</h2><ol className="process-list"><li><span>01</span><div><strong>Share your trip outline</strong><p>Route, dates, number of guests, duration and crew needs.</p></div></li><li><span>02</span><div><strong>Review the proposed terms</strong><p>Availability, scope, pricing, deposits and conditions need confirmation.</p></div></li><li><span>03</span><div><strong>Choose what works for you</strong><p>Sending this demo request creates no commitment or contract.</p></div></li></ol></div>
          <RequestForm kind={kind} submitLabel="Request a quote" initialProduct={product} />
        </div>
      </section>
    </>
  );
}
