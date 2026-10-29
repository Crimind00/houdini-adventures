import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "../pages/HomePage.jsx";
import { ToursDirectory, TourDetail, ToursIndex } from "../pages/Tours.jsx";
import { BoatsDirectory, BoatDetail } from "../pages/Boats.jsx";
import TravelPage from "../pages/Travel.jsx";
import { EventsDirectory, EventsIndex } from "../pages/Events.jsx";
import GalleryPage from "../pages/Gallery.jsx";
import { GuidesDirectory, GuidesIndex, GuideDetail } from "../pages/Guides.jsx";
import ContactPage from "../pages/Contact.jsx";
import EnquiryPage from "../pages/Enquiry.jsx";
import QuotePage from "../pages/Quote.jsx";
import BookingPage from "../pages/Booking.jsx";
import AboutPage from "../pages/About.jsx";
import NotFoundPage from "../pages/NotFound.jsx";
import { DestinationDetail, DestinationsIndex } from "../pages/Destinations.jsx";
import FAQsPage from "../pages/FAQs.jsx";
import ReviewsPage from "../pages/Reviews.jsx";
import SafetyPage from "../pages/Safety.jsx";
import WhyBookPage from "../pages/WhyBook.jsx";
import { BookingConfirmationPage, BookingLookupPage } from "../pages/BookingStatus.jsx";
import PrivacyPolicyPage from "../pages/PrivacyPolicy.jsx";
import CookiePolicyPage from "../pages/CookiePolicy.jsx";
import TermsPage from "../pages/Terms.jsx";
import { SiteLayout } from "../components/SiteLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "tours",
        element: <ToursDirectory />,
        children: [
          { index: true, element: <ToursIndex /> },
          { path: "tour1", element: <Navigate to="/tours/valletta-grand-harbour-three-cities" replace /> },
          { path: "tour2", element: <Navigate to="/tours/comino-blue-lagoon" replace /> },
          { path: "tour3", element: <Navigate to="/tours/gozo-by-sea" replace /> },
          { path: "tour4", element: <Navigate to="/tours/south-coast-blue-grotto" replace /> },
          { path: ":tourSlug", element: <TourDetail /> },
        ],
      },
      { path: "travel", element: <TravelPage /> },
      { path: "travel/plan", element: <TravelPage /> },
      { path: "boats", element: <BoatsDirectory /> },
      { path: "boats/:boatId", element: <BoatDetail /> },
      { path: "destinations", element: <DestinationsIndex /> },
      { path: "destinations/:destinationSlug", element: <DestinationDetail /> },
      {
        path: "events",
        element: <EventsDirectory />,
        children: [
          { index: true, element: <EventsIndex /> },
          { path: ":eventId", element: <EventsIndex /> },
        ],
      },
      { path: "galleries", element: <GalleryPage /> },
      { path: "galleries/:gallerySlug", element: <Navigate to="/galleries" replace /> },
      {
        path: "guides",
        element: <GuidesDirectory />,
        children: [
          { index: true, element: <GuidesIndex /> },
          { path: ":guideId", element: <GuideDetail /> },
        ],
      },
      { path: "about", element: <AboutPage /> },
      { path: "why-book-with-us", element: <WhyBookPage /> },
      { path: "faq", element: <FAQsPage /> },
      { path: "reviews", element: <ReviewsPage /> },
      { path: "weather-safety", element: <SafetyPage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "cookie-policy", element: <CookiePolicyPage /> },
      { path: "terms-and-conditions", element: <TermsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "enquiry", element: <EnquiryPage /> },
      { path: "quote", element: <QuotePage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "booking/confirmation", element: <BookingConfirmationPage /> },
      { path: "bookings/:bookingReference", element: <BookingLookupPage /> },
      { path: "bookings", element: <Navigate to="/booking" replace /> },
      { path: "gallery", element: <Navigate to="/galleries" replace /> },
      { path: "blog", element: <Navigate to="/guides" replace /> },
      { path: "404", element: <NotFoundPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
