import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { destinationPages } from "../data/offerings.js";

const navigation = [
  {
    label: "Cruises",
    to: "/tours",
    items: [
      { label: "All cruises", to: "/tours" },
      { label: "Harbour cruises", to: "/tours?style=Harbour%20cruise" },
      { label: "Island cruises", to: "/tours?style=Island%20cruise" },
      { label: "Sunset cruises", to: "/tours?style=Sunset%20cruise" },
      { label: "Private boat trips", to: "/tours?style=Private%20boat%20trip" },
    ],
  },
  {
    label: "Boat hire",
    to: "/boats",
    items: [
      { label: "Browse boat hire", to: "/boats" },
      { label: "Shared cruises", to: "/boats?hire=Shared%20cruise" },
      { label: "Private charters", to: "/boats?hire=Private%20charter" },
      { label: "Boat hire with skipper", to: "/enquiry?type=boat&skipper=with" },
      { label: "Self-drive / without skipper (ask availability)", to: "/enquiry?type=boat&skipper=without" },
      { label: "Motorboat enquiry", to: "/enquiry?type=boat&vessel=Motorboat" },
      { label: "Sailing yacht enquiry", to: "/enquiry?type=boat&vessel=Sailing%20yacht" },
      { label: "Catamaran enquiry", to: "/enquiry?type=boat&vessel=Catamaran" },
      { label: "Passenger cruise enquiry", to: "/enquiry?type=boat&vessel=Shared%20passenger%20cruise" },
      { label: "Long-term hire", to: "/quote?type=leasing" },
    ],
  },
  {
    label: "Destinations",
    to: "/destinations",
    items: destinationPages.map((destination) => ({
      label: destination.name,
      to: `/destinations/${destination.slug}`,
    })),
  },
  {
    label: "Events",
    to: "/events",
    items: [
      { label: "All event ideas", to: "/events" },
      { label: "Private celebrations", to: "/events?category=Private%20celebrations" },
      { label: "Corporate & groups", to: "/events?category=Corporate%20%26%20groups" },
      { label: "Boat-based events", to: "/events?category=Boat-based%20events" },
    ],
  },
  {
    label: "Plan",
    to: "/travel",
    items: [
      { label: "Plan a Malta trip", to: "/travel" },
      { label: "Request a quote", to: "/quote" },
      { label: "Island guides", to: "/guides" },
      { label: "Frequently asked questions", to: "/faq" },
      { label: "Weather & safety", to: "/weather-safety" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const navigationRef = useRef(null);
  const menuToggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenDropdown("");
        setMenuOpen(false);
      }
    }

    function handlePointerDown(event) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navigationRef.current?.contains(target) || menuToggleRef.current?.contains(target)) return;
      setOpenDropdown("");
      setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  function closeNavigation() {
    setOpenDropdown("");
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Houdini Adventures home" onClick={closeNavigation}>
            <span className="brand-mark" aria-hidden="true">h</span>
            <span className="brand-name">houdini<span>adventures</span></span>
          </Link>
          <button
            ref={menuToggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className={`menu-icon${menuOpen ? " is-open" : ""}`} aria-hidden="true"><i /><i /></span>
          </button>
          <nav
            ref={navigationRef}
            id="primary-navigation"
            className={`primary-nav${menuOpen ? " is-open" : ""}`}
            aria-label="Main navigation"
            onMouseLeave={() => setOpenDropdown("")}
          >
            {navigation.map((item) => {
              const isOpen = openDropdown === item.label;
              const dropdownId = `nav-dropdown-${item.label.toLowerCase().replaceAll(" ", "-")}`;
              return (
                <div
                  className={`nav-group${isOpen ? " dropdown-open" : ""}`}
                  key={item.to}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onFocus={() => setOpenDropdown(item.label)}
                >
                  <div className="nav-group-heading">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                      onClick={closeNavigation}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      className="nav-dropdown-toggle"
                      type="button"
                      aria-label={`${isOpen ? "Close" : "Open"} ${item.label} menu`}
                      aria-expanded={isOpen}
                      aria-controls={dropdownId}
                      onClick={() => setOpenDropdown(isOpen ? "" : item.label)}
                    >
                      <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                    </button>
                  </div>
                  <div className={`nav-dropdown${isOpen ? " is-open" : ""}`} id={dropdownId} aria-hidden={!isOpen}>
                    {item.items.map((child) => (
                      <Link key={child.to} to={child.to} onClick={closeNavigation}>{child.label}</Link>
                    ))}
                  </div>
                </div>
              );
            })}
            <NavLink className="header-contact" to="/contact" onClick={closeNavigation}>Get in touch <span aria-hidden="true">↗</span></NavLink>
          </nav>
        </div>
      </header>
      <main id="main-content">
        <div className="route-transition" key={location.pathname}><Outlet /></div>
      </main>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand brand-light" to="/">
              <span className="brand-mark" aria-hidden="true">h</span>
              <span className="brand-name">houdini<span>adventures</span></span>
            </Link>
            <p>Malta, Gozo and Comino—best explored at your own pace.</p>
            <p className="sample-note">Illustrative concept site. Business details and listings are sample content.</p>
          </div>
          <div className="footer-links">
            <h2>Explore</h2>
            <Link to="/tours">Malta cruises</Link>
            <Link to="/boats">Boat hire & charters</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/events">Boat-based events</Link>
            <Link to="/galleries">Gallery</Link>
          </div>
          <div className="footer-links">
            <h2>Plan with us</h2>
            <Link to="/travel">Plan a Malta trip</Link>
            <Link to="/guides">Island guides</Link>
            <Link to="/quote">Request a quote</Link>
            <Link to="/about">About this experience</Link>
            <Link to="/why-book-with-us">What to expect</Link>
            <Link to="/faq">Frequently asked questions</Link>
            <Link to="/weather-safety">Weather & safety</Link>
            <Link to="/reviews">Customer feedback</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-note">
            <span className="eyebrow eyebrow-light">Your next story starts here</span>
            <h2>Have something special in mind?</h2>
            <Link className="button button-light" to="/enquiry">Tell us about it <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Houdini Adventures · Concept experience</span>
          <span>Privacy-minded by design. No requests are sent or stored.</span>
        </div>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/cookie-policy">Cookies</Link>
          <Link to="/terms-and-conditions">Terms</Link>
        </div>
      </footer>
    </>
  );
}
