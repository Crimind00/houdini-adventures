import { Link } from "react-router";
import { PageIntro } from "./PageComponents.jsx";

export default function NotFoundPage() {
  return (
    <>
      <PageIntro eyebrow="A little off course" title="We can’t find that page.">
        The page may have moved or the link may be out of date.
      </PageIntro>
      <section className="container content-section not-found-actions">
        <Link className="button button-dark" to="/">Back to the home page <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
