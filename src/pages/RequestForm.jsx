import { useState } from "react";
import { Link } from "react-router";

export default function RequestForm({ kind = "Enquiry", submitLabel = "Send enquiry", initialProduct = "", initialPrice = "", initialSkipper = "", initialVessel = "" }) {
  const [reference, setReference] = useState("");
  const normalizedKind = kind.toLowerCase();
  const isTravelRequest = normalizedKind.includes("travel");
  const isBoatRequest = normalizedKind.includes("boat") || normalizedKind.includes("cruise") || normalizedKind.includes("leasing");
  const isEventRequest = normalizedKind.includes("event");

  function handleSubmit(event) {
    event.preventDefault();
    setReference(`HD-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
  }

  if (reference) {
    return (
      <div className="success-panel" role="status" aria-live="polite">
        <span className="success-icon" aria-hidden="true">✓</span>
        <span className="eyebrow">Demo confirmation</span>
        <h2>Your {kind.toLowerCase()} is ready for the next step.</h2>
        <p>Reference <strong>{reference}</strong>. This frontend demo has not sent or stored your details, and no booking or quote has been created.</p>
        <Link className="text-link" to="/">Back to the home page <span aria-hidden="true">↗</span></Link>
      </div>
    );
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required maxLength={100} /></label>
        <label>Email address <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      </div>
      <div className="form-row">
        <label>What are you planning?
          <select name="requestType" defaultValue={kind}>
            {[kind, "Cruise or boat hire", "Boat leasing", "Travel planning", "Event", "Something else"].filter((value, index, values) => values.indexOf(value) === index).map((value) => <option key={value}>{value}</option>)}
          </select>
        </label>
        <label>Preferred date <span className="optional">(optional)</span><input name="date" type="date" /></label>
      </div>
      {isTravelRequest && (
        <>
          <div className="form-row">
            <label>Destination ideas <span className="optional">(optional)</span><input name="destinations" maxLength={180} placeholder="Malta, Comino, Gozo…" /></label>
            <label>Return date <span className="optional">(if known)</span><input name="returnDate" type="date" /></label>
          </div>
          <label>Accommodation or transport needs <span className="optional">(optional)</span><input name="travelNeeds" maxLength={240} placeholder="For example, accommodation style or transport" /></label>
        </>
      )}
      {isBoatRequest && (
        <>
          <div className="form-row">
            <label>Skipper preference
              <select name="skipperPreference" defaultValue={initialSkipper}>
                <option value="">Not sure / please advise</option>
                <option value="with">I’d like a skipper</option>
                <option value="without">I’d like to ask about self-drive / no skipper</option>
              </select>
            </label>
            <label>Boat or vessel type
              <select name="vesselType" defaultValue={initialVessel}>
                <option value="">Not sure / please advise</option>
                <option>Motorboat</option>
                <option>Sailing yacht</option>
                <option>Catamaran</option>
                <option>Shared passenger cruise</option>
                <option>Other / recommend an option</option>
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>Preferred start time <span className="optional">(optional)</span><input name="startTime" type="time" /></label>
            <label>Trip duration
              <select name="tripDuration" defaultValue=""><option value="">Not sure yet</option><option>Harbour cruise</option><option>Half day</option><option>Full day</option><option>Long-term hire</option></select>
            </label>
          </div>
          <div className="form-row">
            <label>Route or destination <span className="optional">(optional)</span><input name="route" maxLength={180} placeholder="Comino, Gozo, Grand Harbour…" /></label>
            <label>Skipper or crew
              <select name="crew" defaultValue=""><option value="">Let’s discuss</option><option>Skipper needed</option><option>Crew needed</option><option>No crew requested</option></select>
            </label>
          </div>
        </>
      )}
      {isEventRequest && (
        <>
          <div className="form-row">
            <label>Event type <span className="optional">(optional)</span><input name="eventType" maxLength={120} placeholder="Celebration, team day…" /></label>
            <label>Venue preference <span className="optional">(optional)</span><input name="venue" maxLength={180} placeholder="Harbour, Comino, flexible…" /></label>
          </div>
          <div className="form-row">
            <label>Date flexibility
              <select name="dateFlexibility" defaultValue="Exact date"><option>Exact date</option><option>Flexible by a few days</option><option>Flexible month</option><option>Not decided</option></select>
            </label>
            <label>Requested extras <span className="optional">(optional)</span><input name="eventExtras" maxLength={180} placeholder="Catering, decorations, entertainment…" /></label>
          </div>
        </>
      )}
      {(initialProduct || initialPrice) && (
        <div className="context-summary">
          <span className="eyebrow">Your selection</span>
          {initialProduct && <strong>{initialProduct}</strong>}
          {initialPrice && <span>{initialPrice} · indicative only</span>}
        </div>
      )}
      <div className="form-row">
        <label>Group size <span className="optional">(if known)</span><input name="groupSize" type="number" min="1" max="500" inputMode="numeric" /></label>
        <label>Approximate budget <span className="optional">(optional, EUR)</span><input name="budget" type="text" maxLength={60} placeholder="If useful for your request" /></label>
      </div>
      <label>Anything else we should know? <span className="optional">(optional)</span><textarea name="notes" rows="4" maxLength={1200} placeholder="Your preferences, accessibility needs or questions…" /></label>
      <p className="privacy-note">We ask for your name and email so a team member could respond to your request. Do not include sensitive personal information.</p>
      <button className="button button-orange" type="submit">{submitLabel} <span aria-hidden="true">↗</span></button>
      <p className="form-disclaimer">Demo only: this form validates in your browser and does not transmit or save data.</p>
    </form>
  );
}
