import { PageIntro } from "./PageComponents.jsx";

export default function CookiePolicyPage() {
  return (
    <>
      <PageIntro eyebrow="Cookie information · draft" title="Cookie and tracking status.">
        This is a technical note about the current frontend, not a complete legal cookie policy.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <h2>Current frontend</h2>
        <p>No analytics or consent-management package is configured in this client, and the application code does not intentionally set cookies. Hosting, embedded services or future integrations may behave differently.</p>
        <h2>Before launch</h2>
        <p>Review the deployed site and all third-party services, determine consent obligations for the actual audience and jurisdiction, and publish an approved cookie notice before adding non-essential tracking.</p>
      </section>
    </>
  );
}
