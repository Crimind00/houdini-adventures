import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

const answers = [
  {
    question: "Can I book or pay through this website?",
    answer: "No. This is a frontend concept without a booking or payment integration. You can preview enquiry and quote forms, but they do not send or store information.",
  },
  {
    question: "Are the boat listings, routes and prices live?",
    answer: "No. All listings and example prices are illustrative. Ask the operator to confirm the actual vessel, route, departure point, inclusions, availability and final price.",
  },
  {
    question: "Which destinations can I ask about?",
    answer: "The sample site covers Malta, Valletta Grand Harbour, Sliema and St Julian's, Comino, Gozo, Marsaxlokk and the Blue Grotto, Mellieha and St Paul's Bay. These are planning examples, not a guarantee of service.",
  },
  {
    question: "What happens if the weather is unsuitable?",
    answer: "Marine conditions can affect a trip. The operator must explain its safety decision process, rescheduling options and applicable terms before you agree to a booking. This site does not promise that any trip will operate or guarantee a refund.",
  },
  {
    question: "What should I confirm before agreeing to a boat trip?",
    answer: "Confirm the departure point, date and time, maximum passenger capacity, route, duration, skipper or crew, safety equipment, inclusions and exclusions, extra charges, deposit and cancellation or weather terms.",
  },
  {
    question: "Can I request a private charter or longer-term boat hire?",
    answer: "Yes, the demo includes enquiry and quote pathways for private charters and longer-term hire. Vessel suitability, availability and contract terms are not verified or managed by this frontend.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <PageIntro eyebrow="Before your trip" title="Frequently asked questions.">
        Straight answers about what this concept site does—and what must be confirmed with the boat operator.
      </PageIntro>
      <section className="container content-section faq-list">
        {answers.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}
        <div className="faq-contact"><div><span className="eyebrow">Still planning?</span><h2>Tell us what you have in mind.</h2></div><Link className="button button-dark" to="/enquiry?type=boat">Make an enquiry <span aria-hidden="true">↗</span></Link></div>
      </section>
    </>
  );
}
