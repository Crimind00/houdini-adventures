import { PageIntro } from "./PageComponents.jsx";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro eyebrow="Privacy information · draft" title="How this demo handles information.">
        This is a technical summary of the current frontend, not a complete legal privacy notice.
      </PageIntro>
      <section className="container content-section narrow-content about-copy">
        <h2>Enquiry forms</h2>
        <p>In this frontend, form values are validated in the browser and are not submitted to a server or saved by the application. Do not enter real personal or payment information.</p>
        <h2>Third-party assets</h2>
        <p>Images and fonts are requested from Unsplash and Google Fonts. Those providers may receive ordinary connection data when your browser loads those resources. Replace or review external assets and update this notice before a commercial launch.</p>
        <h2>Before this site goes live</h2>
        <p>The business owner must confirm the data controller, hosting and form providers, retention periods, lawful basis, user rights and contact channel with appropriate legal advice.</p>
      </section>
    </>
  );
}
