/* The Coherence Company · App
   Mounts the page component identified by window.PAGE. */

const PAGES = {
  "home":               () => window.PageHome,
  "vision":             () => window.PageVision,
  "conversations":      () => window.PageConversations,
  "who-for":            () => window.PageWhoFor,
  "who-for-events":     () => window.PageWhoForEvents,
  "who-for-companies":  () => window.PageWhoForCompanies,
  "who-for-networks":   () => window.PageWhoForNetworks,
  "who-for-civic":      () => window.PageWhoForCivic,
  "event":              () => window.PageEvent,
  "join":               () => window.PageJoin,
  "start":              () => window.PageStart,
  "about":              () => window.PageAbout,
  "coherence-journey":  () => window.PageCoherenceJourney,
  "closedbeta2026":     () => window.PageClosedBeta,
};

const App = () => {
  const key = window.PAGE || "home";
  const PageComponent = (PAGES[key] || PAGES["home"])();

  return (
    <div className="page">
      <Nav />
      {PageComponent ? <PageComponent /> : <div style={{ padding: 80 }}>Page not found.</div>}
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
