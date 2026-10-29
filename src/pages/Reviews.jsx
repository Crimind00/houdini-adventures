import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

export default function ReviewsPage() {
  return (
    <>
      <PageIntro eyebrow="Customer feedback" title="Real experiences deserve real voices.">
        No verified customer reviews or testimonials were provided for this project, so none are published here.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <h2>Reviews will appear when verified</h2>
        <p>Before publishing customer feedback, obtain permission, retain a verifiable source, and show enough context to avoid implying a broader rating or endorsement than the evidence supports.</p>
        <Link className="button button-dark" to="/contact">Ask a question <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
