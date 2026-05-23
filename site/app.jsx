/* The Coherence Company · App
   Mounts the page component identified by window.PAGE. */

const PAGES = {
  "home":               () => window.PageHome,
  "who-for":            () => window.PageWhoFor,
  "who-for-events":     () => window.PageWhoForEvents,
  "who-for-companies":  () => window.PageWhoForCompanies,
  "who-for-networks":   () => window.PageWhoForNetworks,
  "who-for-civic":      () => window.PageWhoForCivic,
  "what-we-do":         () => window.PageWhatWeDo,
  "event":              () => window.PageEvent,
  "join":               () => window.PageJoin,
  "start":              () => window.PageStart,
};

const App = () => {
  const key = window.PAGE || "home";
  const PageComponent = (PAGES[key] || PAGES["home"])();

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });

  return (
    <div className="page">
      <Nav />
      {PageComponent ? <PageComponent /> : <div style={{ padding: 80 }}>Page not found.</div>}
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
