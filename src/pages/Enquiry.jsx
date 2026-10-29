import { useSearchParams } from "react-router";
import RequestForm from "./RequestForm.jsx";
import { PageIntro } from "./PageComponents.jsx";

export default function EnquiryPage() {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product") || "";
  const price = searchParams.get("price") || "";
  const skipper = searchParams.get("skipper") || "";
  const vessel = searchParams.get("vessel") || "";
  const requestType = searchParams.get("type") === "boat" ? "Boat hire enquiry" :
    searchParams.get("type") === "leasing" ? "Boat leasing enquiry" :
      searchParams.get("type") === "event" ? "Event enquiry" : "Cruise enquiry";
  return ( 
    <>
      <PageIntro eyebrow="Malta · Gozo · Comino" title="Tell us about your boat day.">
        Share your destination, date and group size. We’ll use those details to shape your enquiry.
      </PageIntro>
      <section className="container content-section">
        <div className="form-layout">
          <div className="form-aside"><span className="eyebrow">An enquiry, not a booking</span><h2>Start with the details you know.</h2><p>We need to confirm route, departure point, availability, inclusions, safety information and final pricing before any trip is agreed.</p><div className="aside-note"><span aria-hidden="true">✳</span><p>Your selected cruise or boat is carried into this form so you don’t have to start over.</p></div></div>
          <RequestForm kind={requestType} initialProduct={product} initialPrice={price} initialSkipper={skipper} initialVessel={vessel} submitLabel="Send boat enquiry" />
        </div>
      </section>
    </>
  );
}


