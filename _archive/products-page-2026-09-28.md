# Archived: Products page

Archived 2026-09-28, when the three-product overview was folded into a condensed
"Roadmap" section on the Vision page (`site/pages.jsx`, `PageVision`, `id="roadmap"`).

Reason: a "Products" page format sets the expectation that everything listed is
equally available today. Two of the three items here (Audax OS, the
ecosystem-weaving agent) are still in development, which made the page read as
confusing rather than commercial. The condensed Roadmap section on Vision keeps
the status distinction visible (Live vs. In development) without implying a
shopping menu.

Kept here in full so the richer content — the Audax OS "why this, why now"
comparison, the ecosystem-weaving agent's three capability cards, the ARKo
callout, the "what's next" exploratory directions — can be pulled into a future
dedicated Services page (once the Ecosystem Weaving Agent details come back
from Victor) or elsewhere, without having to reconstruct it from git history.

---

## Page shell (`products.html`)

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Products · The Coherence Company</title>
  <meta name="description" content="Three products, one coherence journey: Coherence Conversations and an event-building agent, the Audax OS agent for agentic-native organizations, and an ecosystem-weaving agent for networks that want to act together.">
  <link rel="icon" type="image/svg+xml" href="assets/coherence-logo.svg">
  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://coherence.tv/products.html">
  <meta property="og:site_name" content="The Coherence Company">
  <meta property="og:title" content="Products · The Coherence Company">
  <meta property="og:description" content="Three products, one coherence journey: Coherence Conversations, the Audax OS agent, and an ecosystem-weaving agent.">
  <meta property="og:image" content="https://coherence.tv/assets/social/og-default.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="The Coherence Company — Humans and AI, wiser together.">

  <!-- Twitter / X Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@coherencetv">
  <meta name="twitter:title" content="Products · The Coherence Company">
  <meta name="twitter:description" content="Three products, one coherence journey: Coherence Conversations, the Audax OS agent, and an ecosystem-weaving agent.">
  <meta name="twitter:image" content="https://coherence.tv/assets/social/twitter-default.png">
  <meta name="twitter:image:alt" content="The Coherence Company — Humans and AI, wiser together.">
  <link rel="stylesheet" href="site/styles.css">

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js"></script>
  <script>window.PAGE = "products";</script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel" src="site/shared.jsx"></script>
  <script type="text/babel" src="site/pages.jsx"></script>
  <script type="text/babel" src="site/app.jsx"></script>
</body>
</html>
```

## Routing / nav wiring (for reference, already removed from live files)

`site/app.jsx`:
```js
"products":                       () => window.PageProducts,
```

`site/shared.jsx` — `NAV_LINKS` entry:
```js
{ href: "products.html",      label: "Products",                match: ["products"] },
```

`site/shared.jsx` — footer "Explore" column:
```jsx
<a href="products.html">Products</a>
```

## Full component source (`PageProducts`, from `site/pages.jsx`)

```jsx
/* ====================================================================
   PRODUCTS — Chapter 3 overview: three product lines, one journey
   ==================================================================== */
const PageProducts = () => (
  <>
    {/* Hero + "At a glance" share one continuous background (gradient wash + calligraphy)
        so the artwork isn't hard-clipped at the hero's own boundary. Each section below
        keeps its own markup/content/ids — only the background layer is shared. */}
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, var(--teal-500) 0%, #B1EFEF 14%, #D6F6F6 26%, #EEFBFB 40%, #FFFFFF 58%, #FFFFFF 100%)",
      }} />
      <div className="calli in-gradient"
        style={{ backgroundImage: "url('assets/backgrounds/calligraphy-21.jpg')",
                 position: "absolute", width: 860, height: 860, right: -140, top: 20 }}
        aria-hidden="true" />

      <section className="page-hero" style={{ paddingBottom: 56, background: "transparent" }}>
        <div className="container">
          <Eyebrow>What we're building</Eyebrow>
          <h1 className="lg">Three products.<br/><em>Your coherence journey.</em></h1>
          <p className="page-hero-sub" style={{ marginBottom: 0 }}>
            The Coherence Company builds coordination infrastructure for the AI age, expressed as
            three products. Coherence Conversations is live in Closed Beta and being refined with
            our first cohort of hosts. Audax OS and the ecosystem-weaving agent are in active development.
          </p>
        </div>
      </section>

      {/* Overview: three products at a glance */}
      <section className="section" style={{ background: "transparent" }}>
        <div className="container">
          <SectionHead
            eyebrow="At a glance"
            title="One thesis, <em>three doorways in.</em>"
            dek="Each product stands on its own, applying the same thesis at a different scale: a single conversation, a durable organization, a wider ecosystem. Together, they give the Coherence Journey a shape people can actually plug into, rather than one large, hard-to-explain idea."
          />
          <CardGrid cols={3} items={[
            { num: "01", icon: "message-circle", title: "Coherence Conversations and an event-building agent",
              body: "Live in Closed Beta. Guided one-to-one conversations and the agent that helps you turn them into a full event, for your community, network, or organization.",
              link: { label: "See Coherence Conversations", href: "conversations.html" } },
            { num: "02", icon: "git-branch", title: "Audax OS agent",
              body: "In development. An agent for building a distributed, fractional, purposeful, agentic-native organization and keeping it running once the design session ends.",
              link: { label: "Read more below", href: "#audax" } },
            { num: "03", icon: "network", title: "Ecosystem weaving agent",
              body: "In development. An agent for networks of purpose-aligned organizations that want to sense, remember and act together, not just stay connected.",
              link: { label: "Read more below", href: "#ecosystem" } },
          ]} />
        </div>
      </section>
    </div>

    {/* Product 01 — Coherence Conversations & event-building agent */}
    <Section id="conversations" tone="teal" calli={{ file: "calligraphy-25.jpg", cls: "faint v-corner-br" }}>
      <SectionHead
        eyebrow="Product 01 · Live today"
        title="Coherence Conversations, <em>and an agent for building events with them.</em>"
        dek="Our flagship product. A guided, one-to-one conversation format and the agent that helps a host turn many conversations into an activated community, network, or event."
      />
      <CardGrid cols={3} items={[
        { icon: "mic", title: "A conversation that goes somewhere",
          body: "A shared set of questions, guided by a human host, recorded and synthesized with consent. Nothing to install and nothing to rehearse." },
        { icon: "sparkles", title: "Active synthesis across the whole field",
          body: "Our engine turns many conversations into individual takeaways and a shared view of the themes, matches and openings across a group." },
        { icon: "user-plus", title: "Built to be hosted, not just attended",
          body: "Templates, onboarding and real human support help a host shape their own questions, theme and strategy, rather than run a generic script." },
      ]} />
      <div className="manifesto">
        <p>Underneath, we are building the infrastructure to string richer experiences together: an entry lounge, a consent moment, the conversation itself and a considered close, rather than a single fixed room.</p>
      </div>
      <div style={{ marginTop: 32 }}>
        <a className="btn btn-secondary" href="closedbeta2026.html">Host a Coherence Conversations event <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* Product 01 — what's next (clearly exploratory, not committed) */}
    <Section tone="off">
      <SectionHead
        eyebrow="What's next for this infrastructure"
        title="Directions we're exploring, <em>not commitments yet.</em>"
        dek="Once the underlying room-building infrastructure is in place, the same format opens onto other kinds of guided gatherings. These are live conversations inside our team, not features on a roadmap."
      />
      <TagList items={[
        "Commerce and giving built into an event",
        "Memorial and remembrance experiences",
        "Healing and practice circles",
      ]} />
    </Section>

    {/* Product 02 — Audax OS agent */}
    <Section id="audax" tone="ink" calli={{ file: "calligraphy-07.jpg", cls: "on-dark v-edge-right" }}>
      <SectionHead
        eyebrow="Product 02 · In development"
        title="Audax OS, <em>built for organizations of the agentic age.</em>"
        dek="An agent for building a distributed, fractional, purposeful organization, inward and outward, where AI agents are treated as first class collaborators. The AI capable of building it has only recently arrived."
      />
      <div className="two-col">
        <div>
          <p>Most of what an organization needs already exists somewhere in the world: frameworks for governance, value tracking, onboarding, ritual, conflict resolution. Roughly 90 to 95 percent of it, in some form.</p>
          <p>The real work is assembling that into a coherent whole and then holding the space for it to actually happen: onboarding people, keeping rituals running, following through week by week. That follow-through is what tends to be missing, even after a good design session.</p>
        </div>
        <div>
          <p>We are building Audax OS as something bigger than the Coherence Company itself, so it can grow its own legs: its own beta program, its own client organizations, rather than staying a tool for our internal use only.</p>
          <p>That outside growth is what gives it enough energy to become genuinely robust, more than any one small startup could supply by working only on its own problems.</p>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <a className="btn btn-secondary on-dark" href="https://audax.earth/" target="_blank" rel="noopener noreferrer">Explore Audax OS <Icon name="arrow-right" /></a>
      </div>
      <div className="manifesto" style={{ marginTop: 48 }}>
        <p>The work is not designing everything from scratch. <em>It is assembling what already exists into a coherent whole and holding it to actually happen.</em></p>
      </div>
    </Section>

    {/* Product 02 — why agents force this, old vs. emerging organization */}
    <Section tone="ink" calli={{ file: "calligraphy-30.jpg", cls: "on-dark v-corner-bl" }}>
      <SectionHead
        eyebrow="Why this, why now"
        title="Built for the age of <em>humans and agents,</em> not the office."
        dek="AI agents cannot work well inside fog. They need context, permission, memory, feedback, escalation and human judgment to participate well, and that same need forces a clarity that helps human contributors too."
      />
      <FitCompare
        poor={[
          "Fixed roles",
          "Full-time employment as default",
          "Office-based context",
          "Departmental silos",
          "Managerial supervision, tasks and reporting",
          "Culture as an HR function",
          "AI as a tool added later",
        ]}
        strong={[
          "Fluid contribution",
          "Fractional participation",
          "Distributed context",
          "Mission-based cells",
          "Shared accountability, commitments and learning",
          "Trust as infrastructure",
          "AI agents as collaborators",
        ]}
      />
      <div className="manifesto">
        <p>Technology scales faster than coherence. <em>The missing layer is not another app, it is a shared grammar for collaboration.</em></p>
      </div>
      <div style={{ marginTop: 32 }}>
        <a className="btn btn-secondary on-dark" href="https://audax.earth/" target="_blank" rel="noopener noreferrer">Explore Audax OS in full <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* Product 03 — Ecosystem weaving agent */}
    <Section id="ecosystem" tone="teal">
      <SectionHead
        eyebrow="Product 03 · In development"
        title="An ecosystem-weaving agent <em>for networks that want to act, not just connect.</em>"
        dek="For a group of independent, purpose-aligned organizations who want to move from a network of connected projects to an ecosystem capable of sensing, learning and acting together."
      />
      <CardGrid cols={3} items={[
        { icon: "eye", title: "Makes the field visible",
          body: "Distills public signals from scattered updates, repositories, talks and transcripts into one legible picture of what a distributed community is actually doing." },
        { icon: "search", title: "Surfaces the right match",
          body: "When one organization is looking for a technical partner and another has already built most of what it needs, this agent is what puts them in the same room, before both spend months solving it alone." },
        { icon: "book-open", title: "Remembers what mattered",
          body: "Holds on to the useful insight that would otherwise disappear under the next wave of updates, so it stays findable and actionable long after the post that surfaced it scrolls by." },
      ]} />
      <div className="manifesto">
        <p>This agent closes the gap between finding each other and acting together: sharing relevant context and surfacing needs and offers, with clear attribution throughout, so nobody has to wonder whose work is whose.</p>
      </div>
      <div style={{ marginTop: 32 }}>
        <p style={{ color: "var(--ink-600)", maxWidth: 720 }}>We are building this to be offered to other networks and communities as a standalone service, not only used to support our own ecosystem. The ecosystem worth weaving is bigger than any one company.</p>
      </div>
    </Section>

    {/* Product 03 — ARKo, the first concrete build */}
    <Section tone="off" calli={{ file: "calligraphy-27.jpg", cls: "faint v-corner-br" }}>
      <SectionHead
        eyebrow="Product 03 · First build"
        title="ARKo, <em>the agent putting this to the test.</em>"
        dek="ARKo is our first concrete build inside Audax Lab №1, a bounded challenge: help aligned organizations understand what is happening across the field, discover opportunities for collaboration and develop a more coherent shared narrative."
      />
      <div style={{ marginTop: 32 }}>
        <a className="btn btn-secondary" href="https://ark.audax.earth/index.html" target="_blank" rel="noopener noreferrer">Read more about Audax Lab №1 <Icon name="arrow-right" /></a>
      </div>
    </Section>

    <CTABand
      calli={{ file: "calligraphy-29.jpg", cls: "faint v-corner-br" }}
      eyebrow="Where to start"
      title="Pick the product <em>closest to what you're building.</em>"
      body="Coherence Conversations is open for hosts today. Audax OS and the ecosystem-weaving agent are taking shape alongside the people who join us early. If you want to help build one of them, we are looking for you."
      cta={{ label: "Host a Coherence Conversations event", href: "closedbeta2026.html" }}
      cta2={{ label: "See open roles", href: "join.html" }}
      tone="sand"
    />
  </>
);
```
