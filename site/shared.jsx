/* The Coherence Company · shared primitives
   Nav, Footer, Section, HeroLight/Dark, CardGrid, JourneyTrack,
   Timeline, FitCompare, ProblemCards, CTABand, JoinModal */

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

/* ---------- Icon system — Iconoir via Iconify ---------- */
const ICON_MAP = {
  'arrow-right':      'arrow-tr',
  'check':            'check',
  'check-circle-2':   'check-circle',
  'circle-slash':     'xmark-circle',
  'info':             'info-circle',
  'compass':          'compass',
  'git-merge':        'git-merge',
  'sparkles':         'spark-solid',
  'calendar-check':   'calendar',
  'calendar':         'calendar',
  'network':          'network-left',
  'building-2':       'building',
  'users':            'community',
  'globe':            'globe',
  'pen-tool':         'design-pencil',
  'layers':           'layers-plus',
  'cpu':              'cpu',
  'microscope':       'microscope',
  'trending-up':      'trending-up',
  'bar-chart-3':      'bar-chart',
  'mic':              'mic',
  'handshake':        'handshake',
  'smile':            'emoji-satisfied-solid',
  'search':           'search',
  'message-circle':   'chat-bubble',
  'clock':            'clock',
  'user-plus':        'user-plus',
  'target':           'target',
  'git-branch':       'git-branch',
  'rocket':           'rocket',
  'alert-triangle':   'warning-triangle',
  'heart-handshake':  'handshake',
  'brain':            'brain',
  'shuffle':          'shuffle',
  'ear':              'sound-high',
  'heart':            'heart',
  'message-square':   'chat-lines',
  'flag':             'flag',
  'book-open':        'book',
  'eye':              'eye',
  'link':             'link',
  'fast-forward':     'fast-arrow-right',
  'trees':            'tree',
  'mail':             'mail',
  'linkedin':         'linkedin',
  'send':             'send-diagonal',
};

const Icon = ({ name }) => (
  <iconify-icon icon={`iconoir:${ICON_MAP[name] || name}`}></iconify-icon>
);

const NAV_LINKS = [
  { href: "about.html",         label: "About",                   match: ["about", "coherence-journey"] },
  { href: "vision.html",        label: "Vision",                  match: ["vision"] },
  { href: "conversations.html", label: "Coherence Conversations", match: ["conversations", "coherenceconversations"] },
  { href: "who-for.html",       label: "Who Is This For?",        match: ["who-for"],
    sub: [
      { href: "who-for.html",          label: "Overview",         icon: "compass" },
      { href: "who-for-events.html",   label: "Events",           icon: "calendar" },
      { href: "who-for-companies.html",label: "Organisations",    icon: "building-2" },
      { href: "who-for-networks.html", label: "Networks",         icon: "users" },
      { href: "who-for-civic.html",    label: "Civic Ecosystems", icon: "globe" },
    ]
  },
];

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const page = window.PAGE || "home";
  const isActive = (m) => m && m.some(x => page === x || page.startsWith(x + "-"));

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a className="nav-brand" href="index.html">
        <img src="assets/Logo.png" className="nav-logo" alt="The Coherence Company" />
        <span className="nav-brand-tag">Humans &amp; AI<br />Wiser Together</span>
      </a>
      <div className="nav-links">
        {NAV_LINKS.map(l => (
          <div
            key={l.href}
            className="nav-item"
            onMouseEnter={() => l.sub && setOpenMenu(l.href)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href={l.href} className={`nav-link${isActive(l.match) ? " active" : ""}${l.sub ? " has-sub" : ""}`}>
              {l.label}
              {l.sub && <span className="nav-chevron" aria-hidden="true">›</span>}
            </a>
            {l.sub && (
              <div className={`nav-dropdown${openMenu === l.href ? " open" : ""}`}>
                {l.sub.map(s => (
                  <a
                    key={s.href}
                    href={s.href}
                    className={`nav-dropdown-link${page === s.href.replace(".html","") ? " active" : ""}`}
                  >
                    {s.icon && <span className="nav-dropdown-icon"><Icon name={s.icon} /></span>}
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a className="btn btn-primary btn-sm nav-cta" href="join.html">
          Join Us
        </a>
      </div>
    </nav>
  );
};

/* ---------- Section primitives ---------- */

const Eyebrow = ({ children }) => <div className="eyebrow">{children}</div>;

const SectionHead = ({ eyebrow, title, dek, align }) => (
  <div className={`section-head${align === "center" ? " center" : ""}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    {title && <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />}
    {dek && <p className="section-dek">{dek}</p>}
  </div>
);

const Section = ({ id, tone = "white", calli, children }) => {
  const cls = `section section-${tone}`;
  return (
    <section className={cls} id={id}>
      {calli && (
        <div
          className={`calli ${calli.cls || ""}`}
          style={{
            backgroundImage: `url('assets/backgrounds/${calli.file}')`,
            ...(calli.style || {})
          }}
          aria-hidden="true"
        />
      )}
      <div className="container">{children}</div>
    </section>
  );
};

/* ---------- Hero variants ---------- */

const HeroLight = ({ eyebrow, title, sub, primaryCTA, secondaryCTA, meta, calli }) => (
  <section className="hero hero-light">
    {calli && (
      <div
        className="calli in-gradient"
        style={{
          backgroundImage: `url('assets/backgrounds/${calli}')`,
          width: 940, height: 940, right: -160, top: 20
        }}
        aria-hidden="true"
      />
    )}
    <div className="hero-vertical">
      <span className="hero-vertical-text">The Coherence Company · Humans &amp; AI · Wiser Together</span>
    </div>
    <div className="container hero-inner">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="hero-h1 reveal" dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className="hero-sub reveal reveal-2">{sub}</p>}
      <div className="hero-ctas reveal reveal-3">
        {primaryCTA && (
          <a className="btn btn-primary btn-lg" href={primaryCTA.href}>
            {primaryCTA.label} <Icon name="arrow-right" />
          </a>
        )}
        {secondaryCTA && (
          <a className="btn btn-ghost btn-lg" href={secondaryCTA.href}>
            {secondaryCTA.label}
          </a>
        )}
      </div>
      {meta && (
        <div className="hero-meta reveal reveal-4">
          {meta.map((m, i) => (
            <span key={i} className="hero-meta-item">
              <span className="dot"></span> {m}
            </span>
          ))}
        </div>
      )}
    </div>
  </section>
);

/* ---------- Card grids ---------- */

const CardGrid = ({ cols = 3, items, variant = "default" }) => (
  <div className={`card-grid cols-${cols} variant-${variant}`}>
    {items.map((it, i) => (
      <article key={i} className="grid-card">
        {it.num && <span className="grid-card-num">{it.num}</span>}
        {it.icon && (
          <div className="grid-card-icon"><Icon name={it.icon} /></div>
        )}
        <h3>{it.title}</h3>
        {it.body && <p>{it.body}</p>}
        {it.link && (
          <a className="grid-card-link" href={it.link.href}>
            {it.link.label} <Icon name="arrow-right" />
          </a>
        )}
      </article>
    ))}
  </div>
);

const TagList = ({ items }) => (
  <ul className="tag-list">
    {items.map((it, i) => <li key={i}>{it}</li>)}
  </ul>
);

/* ---------- Journey track (5 stages) ---------- */

const JourneyTrack = ({ steps }) => (
  <div className="journey-track">
    {steps.map((s, i) => (
      <div key={i} className={`journey-step${s.highlight ? " void" : ""}`}>
        <div className="journey-num">{String(i + 1).padStart(2, "0")}</div>
        <div className="journey-name">{s.name}</div>
        {s.note && <div className="journey-current">{s.note}</div>}
      </div>
    ))}
  </div>
);

/* ---------- Timeline (vertical numbered) ---------- */

const Timeline = ({ steps }) => (
  <ol className="timeline">
    {steps.map((s, i) => (
      <li key={i} className="timeline-step">
        <div className="timeline-num">{String(i + 1).padStart(2, "0")}</div>
        <div className="timeline-body">
          <h4>{s.title}</h4>
          {s.body && <p>{s.body}</p>}
        </div>
      </li>
    ))}
  </ol>
);

/* ---------- Fit / Poor-fit comparison ---------- */

const FitCompare = ({ strong, poor }) => (
  <div className="fit-compare">
    <div className="fit-col fit-strong">
      <div className="fit-head">
        <Icon name="check-circle-2" />
        <span>Strong fit</span>
      </div>
      <ul>{strong.map((s, i) => <li key={i}>{s}</li>)}</ul>
    </div>
    <div className="fit-col fit-poor">
      <div className="fit-head">
        <Icon name="circle-slash" />
        <span>Poor fit</span>
      </div>
      <ul>{poor.map((s, i) => <li key={i}>{s}</li>)}</ul>
    </div>
  </div>
);

/* ---------- Tensions block (3-column problem with named tensions) ---------- */

const TensionsBlock = ({ items }) => (
  <div className="tensions">
    {items.map((t, i) => (
      <div key={i} className="tension">
        <div className="tension-num">{String(i + 1).padStart(2, "0")}</div>
        <h4>{t.title}</h4>
        <p>{t.body}</p>
      </div>
    ))}
  </div>
);

/* ---------- CTA Band ---------- */

const CTABand = ({ eyebrow, title, body, cta, tone = "sand", calli }) => (
  <section className={`cta-band cta-${tone}`}>
    {calli && (
      <div
        className={`calli ${calli.cls || ""}`}
        style={{ backgroundImage: `url('assets/backgrounds/${calli.file}')` }}
        aria-hidden="true"
      />
    )}
    <div className="container cta-band-inner">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="cta-band-title" dangerouslySetInnerHTML={{ __html: title }} />
      {body && <p className="cta-band-body">{body}</p>}
      {cta && (
        <a className="btn btn-primary btn-lg" href={cta.href}>
          {cta.label} <Icon name="arrow-right" />
        </a>
      )}
    </div>
  </section>
);

/* ---------- Footer ---------- */

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <img src="assets/coherence-logo.svg" width="44" height="44" alt="" />
        <div>
          <div className="footer-brand-name">The Coherence Company</div>
          <div className="footer-brand-tag" style={{ marginTop: 8 }}>
            AI-powered collaboration infrastructure for collective sensemaking,
            coherent gatherings &amp; coordinated action.
          </div>
        </div>
      </div>
      <div className="footer-col">
        <h6>Explore</h6>
        <a href="about.html">About</a>
        <a href="vision.html">Vision</a>
        <a href="conversations.html">Coherence Conversations</a>
        <a href="who-for.html">Who For</a>
        <a href="join.html">Join Us</a>
      </div>
      <div className="footer-col">
        <h6>Get in touch</h6>
        <a href="start.html">Start a Conversation</a>
        <a href="https://www.linkedin.com/company/the-coherence-company/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" onClick={e => e.preventDefault()}>Newsletter</a>
      </div>
      <div className="footer-col">
        <h6>Legal</h6>
        <a href="#" onClick={e => e.preventDefault()}>Privacy &amp; Consent</a>
        <a href="#" onClick={e => e.preventDefault()}>Terms</a>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© 2026 The Coherence Company · Early-stage. Building in public.</span>
      <span>coherence.tv</span>
    </div>
  </footer>
);

/* ---------- Flow Steps (simple list format) ---------- */

const FlowSteps = ({ steps }) => (
  <div className="flow-steps">
    {steps.map((s, i) => (
      <div key={i} className="flow-step-item">
        <div className="flow-step-num">{String(i + 1).padStart(2, "0")}</div>
        <div className="flow-step-content">
          <h4>{s.name}</h4>
          <p>{s.note}</p>
        </div>
      </div>
    ))}
  </div>
);

Object.assign(window, {
  LOREM, LOREM_SHORT, ICON_MAP, Icon,
  Nav, Footer, Eyebrow, SectionHead, Section, HeroLight,
  CardGrid, TagList, JourneyTrack, Timeline, FitCompare,
  TensionsBlock, CTABand, FlowSteps,
});
