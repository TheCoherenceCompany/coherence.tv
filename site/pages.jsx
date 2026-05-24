/* The Coherence Company · page components
   One component per page; App mounts the right one based on window.PAGE. */

/* ====================================================================
   1. HOME
   ==================================================================== */
const PageHome = () => (
  <>
    {/* 1.1 Hero */}
    <HeroLight
      eyebrow="The Coherence Company"
      title='Activate the people in your event<br/><em>before they arrive.</em>'
      sub="Coherence Conversations Event is the first product from The Coherence Company: AI-supported collaboration infrastructure that helps people discover one another, make sense together, and move from connection to coordinated action."
      primaryCTA={{ label: "Explore Coherence Conversations Event", href: "event.html" }}
      secondaryCTA={{ label: "Start a Conversation", href: "start.html" }}
      meta={["Early-stage · Building in public", "Pilots open", "Remote · global"]}
      calli="calligraphy-30.png"
    />

    {/* 1.2 Coordination Gap */}
    <Section tone="white" calli={{ file: "calligraphy-23.png", style: { width: 720, height: 720, right: -180, top: "20%" } }}>
      <SectionHead
        eyebrow="The coordination gap"
        title="We are more connected than ever.<br/><em>We are not yet better coordinated.</em>"
        dek="Events, organisations, networks, and civic ecosystems gather people, but often fail to create the conditions for meaningful connection, shared understanding, and coordinated action."
      />
      <div className="two-col">
        <div>
          <p>{LOREM}</p>
          <p>{LOREM_SHORT}</p>
        </div>
        <div>
          <p><strong>Connection</strong> — {LOREM_SHORT}</p>
          <p><strong>Coordination</strong> — {LOREM_SHORT}</p>
        </div>
      </div>
    </Section>

    {/* 1.3 What We Build */}
    <Section tone="off">
      <SectionHead
        eyebrow="What we build"
        title="AI-supported systems for<br/><em>collaborative intelligence.</em>"
        dek="We build AI agents, guided conversations, synthesis tools, and collaboration processes that support the Coherence Journey: from discovery and connection to sensemaking, commitment, and action."
      />
      <CardGrid cols={3} items={[
        { num: "01", icon: "compass", title: "AI Agents for the Coherence Journey",
          body: "Agents that help people and groups move through discovery, connection, convergence, seeding, and building." },
        { num: "02", icon: "git-merge", title: "Collective Sensemaking",
          body: "Systems that turn many voices, needs, offers, and questions into shared patterns and useful insight." },
        { num: "03", icon: "sparkles", title: "Coherence Conversations Event",
          body: "Our first product: pre-event network activation for gatherings where meaningful connection matters.",
          link: { label: "See the product", href: "event.html" } },
      ]} />
    </Section>

    {/* 1.4 The Coherence Journey */}
    <Section id="journey" tone="teal" calli={{ file: "calligraphy-32.png", cls: "subtle",
      style: { width: 1400, height: 480, left: "50%", top: "38%", transform: "translateX(-50%)" } }}>
      <SectionHead
        eyebrow="The Coherence Journey"
        title="From first contact to <em>shared action.</em>"
        dek="The Coherence Journey maps how groups move from discovering who is here, to connecting meaningfully, converging around possibility, seeding commitments, and building together."
      />
      <JourneyTrack steps={[
        { name: "Discover" },
        { name: "Connect" },
        { name: "Converge", highlight: true },
        { name: "Seed" },
        { name: "Build" },
      ]} />
    </Section>

    {/* 1.5 Who It's For */}
    <Section tone="white">
      <SectionHead
        eyebrow="Who it's for"
        title="Built for people who <em>bring others together.</em>"
        dek={LOREM_SHORT}
      />
      <CardGrid cols={4} items={[
        { icon: "calendar", title: "Event Organisers",
          body: "Activate participant networks before the event begins.",
          link: { label: "Read more", href: "who-for-events.html" } },
        { icon: "building-2", title: "Companies & AI-Native Orgs",
          body: "For offsites, onboarding, mission alignment, and company gatherings.",
          link: { label: "Read more", href: "who-for-companies.html" } },
        { icon: "users", title: "Networks & Communities",
          body: "Activate members before gatherings, programmes, and community moments.",
          link: { label: "Read more", href: "who-for-networks.html" } },
        { icon: "globe", title: "Civic Ecosystems",
          body: "Support public dialogue, stakeholder convening, and civic sensemaking.",
          link: { label: "Read more", href: "who-for-civic.html" } },
      ]} />
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a className="btn btn-secondary" href="who-for.html">Explore Who It's For <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* 1.6 Coherence Conversations Event */}
    <Section tone="off">
      <SectionHead
        eyebrow="Coherence Conversations Event"
        title="Your event starts <em>before the first session.</em>"
        dek="Coherence Conversations Event helps participants clarify why they are attending, discover relevant people, generate richer profiles, and arrive with better context. Organisers gain insight into the network they are convening."
      />
      <div className="flow-steps">
        <div className="flow-step">
          <h4>Guided conversations</h4>
          <p>Participants join structured pre-event conversations to surface intent, context, and questions.</p>
        </div>
        <div className="flow-step">
          <h4>AI-supported synthesis</h4>
          <p>Themes, intentions, offers, needs, and matches emerge across the participant field.</p>
        </div>
        <div className="flow-step">
          <h4>A warmer, smarter event</h4>
          <p>Participants arrive with shared context. Organisers see the field they are about to host.</p>
        </div>
      </div>
      <div style={{ marginTop: 48, textAlign: "center" }}>
        <a className="btn btn-primary btn-lg" href="event.html">See how it works <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* 1.7 Why Now */}
    <Section tone="white">
      <SectionHead
        eyebrow="Why now"
        title="AI is changing what <em>collaboration can become.</em>"
        dek="Most AI is focused on individual productivity. The larger opportunity is collective: helping groups make sense, build trust, coordinate action, and work with AI agents as part of shared intelligence systems."
      />
      <CardGrid cols={3} items={[
        { icon: "calendar-check", title: "Events", body: "need better pre-event network activation, not louder app notifications." },
        { icon: "network", title: "Organisations", body: "need new ways to coordinate distributed and AI-native work." },
        { icon: "compass", title: "Communities", body: "need shared memory, sensemaking, and follow-through across gatherings." },
      ]} />
    </Section>

    {/* 1.8 Join the Build */}
    <Section tone="ink">
      <SectionHead
        eyebrow="Join the build"
        title="We are building the company <em>while building the product.</em>"
        dek="The Coherence Company is early-stage, developing Coherence Conversations Event, working toward a planned fundraise in autumn, and inviting people who want to help build the product, company, field, and operating model."
      />
      <div style={{ marginTop: 40 }}>
        <a className="btn btn-accent btn-lg" href="join.html">Join the Build <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* 1.9 Start a Conversation */}
    <CTABand
      eyebrow="Start a conversation"
      title="Tell us what you are <em>trying to coordinate.</em>"
      body="Whether you're planning an event, activating a network, or convening stakeholders — start with a conversation."
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   2. WHO FOR (overview)
   ==================================================================== */
const PageWhoFor = () => (
  <>
    <section className="page-hero">
      <div
        className="calli in-gradient"
        style={{ backgroundImage: "url('assets/backgrounds/calligraphy-25.png')",
                 width: 820, height: 820, right: -120, top: 0 }}
        aria-hidden="true"
      />
      <div className="container">
        <Eyebrow>Who for</Eyebrow>
        <h1>One product, <em>different coordination challenges.</em></h1>
        <p className="page-hero-sub">
          Coherence Conversations Event helps different kinds of groups activate the people they
          bring together: event participants, company teams, network members, stakeholders,
          citizens, partners, and contributors.
        </p>
      </div>
    </section>

    {/* 2.2 Shared Problem */}
    <Section tone="white">
      <SectionHead
        eyebrow="The shared problem"
        title="Most groups do not lack people. They lack the <em>conditions for useful collaboration.</em>"
        dek="Presence is not enough. People need context, trust, relevance, shared understanding, and pathways into action."
      />
      <div className="two-col">
        <div>
          <p>{LOREM}</p>
        </div>
        <div>
          <p>{LOREM_SHORT}</p>
          <p>{LOREM_SHORT}</p>
        </div>
      </div>
    </Section>

    {/* 2.3 Segment Overview */}
    <Section tone="off">
      <SectionHead
        eyebrow="Segments"
        title="Where Coherence Conversations Event <em>creates value.</em>"
      />
      <CardGrid cols={2} items={[
        { num: "2A", icon: "calendar", title: "In-Person Event Organisers",
          body: "For conferences, summits, retreats, and gatherings where connection is a core promise.",
          link: { label: "Explore", href: "who-for-events.html" } },
        { num: "2B", icon: "building-2", title: "Companies & AI-Native Organisations",
          body: "For company gatherings, offsites, onboarding, mission alignment, and distributed team coordination.",
          link: { label: "Explore", href: "who-for-companies.html" } },
        { num: "2C", icon: "users", title: "Networks & Professional Communities",
          body: "For member communities, professional networks, learning communities, and ecosystem groups.",
          link: { label: "Explore", href: "who-for-networks.html" } },
        { num: "2D", icon: "globe", title: "Civic & Civil Society Ecosystems",
          body: "For public dialogue, stakeholder convening, civic participation, and coalition-building.",
          link: { label: "Explore", href: "who-for-civic.html" } },
      ]} />
    </Section>

    {/* 2.4 Common Journey */}
    <Section tone="teal">
      <SectionHead
        eyebrow="The common journey"
        title="Different contexts, <em>one Coherence Journey.</em>"
        dek="Each segment moves through the same underlying process: Discover, Connect, Converge, Seed, Build."
      />
      <JourneyTrack steps={[
        { name: "Discover", note: "Who is in this field?" },
        { name: "Connect",  note: "Who should meet whom?" },
        { name: "Converge", note: "What are we seeing together?", highlight: true },
        { name: "Seed",     note: "What do we commit to?" },
        { name: "Build",    note: "What do we make real?" },
      ]} />
    </Section>

    {/* 2.5 Which Segment */}
    <Section tone="white">
      <SectionHead
        eyebrow="Find your fit"
        title="Start with the <em>coordination problem</em> you are facing."
      />
      <div className="routing-list">
        <a className="routing-card" href="who-for-events.html">
          <span className="routing-q">Are you organising a gathering where people need to meet the right others?</span>
          <span className="routing-a">Event Organisers <Icon name="arrow-right" /></span>
        </a>
        <a className="routing-card" href="who-for-companies.html">
          <span className="routing-q">Are you bringing a company team together for alignment, onboarding, or strategy?</span>
          <span className="routing-a">Companies & AI-Native Orgs <Icon name="arrow-right" /></span>
        </a>
        <a className="routing-card" href="who-for-networks.html">
          <span className="routing-q">Are you activating members before a community moment or programme?</span>
          <span className="routing-a">Networks & Communities <Icon name="arrow-right" /></span>
        </a>
        <a className="routing-card" href="who-for-civic.html">
          <span className="routing-q">Are you convening citizens, stakeholders, or civil society actors?</span>
          <span className="routing-a">Civic Ecosystems <Icon name="arrow-right" /></span>
        </a>
      </div>
    </Section>

    <CTABand
      title="Not sure where you fit? <em>Tell us what you are trying to coordinate.</em>"
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   2A. WHO FOR · Event Organisers
   ==================================================================== */
const SegmentHero = ({ eyebrow, title, sub, primaryCTA }) => (
  <section className="page-hero">
    <div className="calli in-gradient"
      style={{ backgroundImage: "url('assets/backgrounds/calligraphy-21.png')",
               width: 820, height: 820, right: -120, top: 0 }}
      aria-hidden="true" />
    <div className="container">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <p className="page-hero-sub">{sub}</p>
      <div className="page-hero-ctas">
        <a className="btn btn-primary btn-lg" href={primaryCTA.href}>{primaryCTA.label} <Icon name="arrow-right" /></a>
        <a className="btn btn-ghost btn-lg" href="start.html">Start a Conversation</a>
      </div>
    </div>
  </section>
);

const PageWhoForEvents = () => (
  <>
    <SegmentHero
      eyebrow="Segment 2A · Event Organisers"
      title="Activate your participant network <em>before anyone enters the room.</em>"
      sub="For conferences, summits, retreats, and gatherings where the real value is not only content, but who meets whom and what becomes possible afterwards."
      primaryCTA={{ label: "Start a Pilot", href: "start.html" }}
    />

    <Section tone="white">
      <SectionHead
        eyebrow="Segment overview"
        title="For gatherings where <em>connection is the real value.</em>"
        dek={LOREM_SHORT}
      />
      <TagList items={[
        "Business conferences", "Industry summits", "Innovation gatherings",
        "Founder & investor events", "Professional conferences",
        "Leadership retreats", "Regenerative & ecosystem gatherings"
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="The problem"
        title="Events promise connection. Too often, <em>connection is left to chance.</em>"
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Weak pre-event engagement", body: LOREM_SHORT },
        { num: "02", title: "Generic participant profiles", body: LOREM_SHORT },
        { num: "03", title: "Missed high-value connections", body: LOREM_SHORT },
        { num: "04", title: "Unsure who they should meet", body: LOREM_SHORT },
        { num: "05", title: "No insight into participant interests", body: LOREM_SHORT },
        { num: "06", title: "Dead or transactional networking apps", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="What we do"
        title="Pre-event network activation through <em>guided conversations.</em>"
        dek="Coherence Conversations Event helps participants have useful guided conversations before the event. AI-supported synthesis turns those into profiles, themes, matching signals, and event-level insight."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>Guided conversations</h4><p>{LOREM_SHORT}</p></div>
        <div className="flow-step"><h4>Synthesis & matching</h4><p>{LOREM_SHORT}</p></div>
        <div className="flow-step"><h4>Insight to organisers</h4><p>{LOREM_SHORT}</p></div>
      </div>
    </Section>

    <Section tone="teal">
      <SectionHead
        eyebrow="Benefits for organisers"
        title="More insight, more relevance, <em>more value from the same room.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "trending-up", title: "Stronger pre-event engagement", body: LOREM_SHORT },
        { icon: "users-round", title: "Better participant matching", body: LOREM_SHORT },
        { icon: "bar-chart-3", title: "Richer audience intelligence", body: LOREM_SHORT },
        { icon: "mic", title: "More authentic event content", body: LOREM_SHORT },
        { icon: "handshake", title: "Improved sponsor value", body: LOREM_SHORT },
        { icon: "smile", title: "Higher participant satisfaction", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Benefits for participants"
        title="Less random networking. <em>More useful connection.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "compass", title: "Clarify their intention before the event", body: LOREM_SHORT },
        { icon: "search", title: "Discover relevant people earlier", body: LOREM_SHORT },
        { icon: "message-circle", title: "Move beyond first-contact small talk", body: LOREM_SHORT },
        { icon: "user-check", title: "Build visibility through better profiles", body: LOREM_SHORT },
        { icon: "clock", title: "Use event time more intelligently", body: LOREM_SHORT },
        { icon: "arrow-right-circle", title: "Stronger follow-up pathways", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Best fit"
        title="Best for high-intent, <em>relationship-driven events.</em>"
      />
      <FitCompare
        strong={[
          "100 to 5,000 participants",
          "Attendees come to meet collaborators, investors, partners, clients, experts, or peers",
          "Organiser cares about community quality, not just attendance volume",
          "Networking and follow-through are core to event value",
        ]}
        poor={[
          "Purely logistical events",
          "Low-intent mass attendance events",
          "Events where networking does not matter",
          "One-off events with no community ambition",
        ]}
      />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Pilot pathway"
        title="A lightweight pilot, <em>designed around your gathering.</em>"
      />
      <Timeline steps={[
        { title: "Event discovery",          body: LOREM_SHORT },
        { title: "Participant journey design", body: LOREM_SHORT },
        { title: "Conversation design",      body: LOREM_SHORT },
        { title: "Pre-event activation",     body: LOREM_SHORT },
        { title: "AI-supported synthesis",   body: LOREM_SHORT },
        { title: "Event support",            body: LOREM_SHORT },
        { title: "Post-event learning report", body: LOREM_SHORT },
      ]} />
    </Section>

    <CTABand
      title="Bringing the right people into the room is <em>only the beginning.</em>"
      cta={{ label: "Start a Pilot", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   2B. WHO FOR · Companies & AI-Native Orgs
   ==================================================================== */
const PageWhoForCompanies = () => (
  <>
    <SegmentHero
      eyebrow="Segment 2B · Companies & AI-Native Organisations"
      title="Use company gatherings to create <em>real alignment</em> before people enter the room."
      sub="Coherence Conversations Event helps teams clarify context, surface priorities, build trust, and arrive at offsites, onboarding moments, and strategy sessions ready for better decisions and deeper collaboration."
      primaryCTA={{ label: "Start a Conversation", href: "start.html" }}
    />

    <Section tone="white">
      <SectionHead
        eyebrow="Segment overview"
        title="For organisations trying to <em>coordinate across complexity.</em>"
        dek={LOREM_SHORT}
      />
      <TagList items={[
        "Distributed teams", "AI-native startups", "Fractional organisations",
        "Purpose-led companies", "Founder teams", "Project-based teams",
        "Organisations preparing for change or growth"
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="The problem"
        title="Most company gatherings <em>start too late.</em>"
        dek="Offsites, onboarding sessions, and strategy gatherings often begin with people carrying unspoken assumptions, unclear priorities, uneven context, and hidden tensions. The live moment is then forced to do too much."
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Different assumptions on arrival", body: LOREM_SHORT },
        { num: "02", title: "Tensions discovered too late", body: LOREM_SHORT },
        { num: "03", title: "Onboarding is context-light", body: LOREM_SHORT },
        { num: "04", title: "Strategy without shared field awareness", body: LOREM_SHORT },
        { num: "05", title: "Lost trust between distributed gatherings", body: LOREM_SHORT },
        { num: "06", title: "AI used individually, not collectively", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="What we help with"
        title="Prepare the human field <em>before the company gathers.</em>"
        dek="Coherence Conversations Event helps company participants clarify what they are holding, what they need, what they see, and where they feel energy or tension — before the live gathering begins."
      />
      <CardGrid cols={3} items={[
        { icon: "calendar", title: "Pre-offsite conversations", body: LOREM_SHORT },
        { icon: "user-plus", title: "Onboarding conversations", body: LOREM_SHORT },
        { icon: "target", title: "Mission alignment dialogues", body: LOREM_SHORT },
        { icon: "layers", title: "Team sensemaking", body: LOREM_SHORT },
        { icon: "git-branch", title: "Priority & tension mapping", body: LOREM_SHORT },
        { icon: "arrow-right-circle", title: "Follow-through pathways", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="teal">
      <SectionHead
        eyebrow="Audax OS"
        title="Audax OS is how we are <em>building this internally.</em>"
        dek="Audax OS is our emerging operating model for distributed, fractional, AI-native work. It organises company building through purpose, quests, missions, commitments, contribution, learning, and human-agent collaboration."
      />
      <JourneyTrack steps={[
        { name: "Purpose" },
        { name: "Quests" },
        { name: "Missions", highlight: true },
        { name: "Commitments" },
        { name: "Learning" },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Human-agent collaboration"
        title="AI agents should support <em>coherence, not control.</em>"
        dek="In company contexts, AI can support memory, synthesis, onboarding, orientation, translation, and coordination. The goal is not surveillance. The goal is clearer human agency and better shared context."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--ink-900)" }}>Humans hold</h4>
          <p>Judgement, relationship, accountability, meaning, and consent. The AI does not replace these. {LOREM_SHORT}</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-800)" }}>Agents support</h4>
          <p>Memory, synthesis, pattern-finding, translation, and orientation. {LOREM_SHORT}</p>
        </div>
      </div>
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Organisational benefits"
        title="Better gatherings. Clearer missions. <em>Stronger follow-through.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "calendar-check", title: "Better offsite preparation", body: LOREM_SHORT },
        { icon: "rocket", title: "Faster onboarding", body: LOREM_SHORT },
        { icon: "list-checks", title: "Clearer shared priorities", body: LOREM_SHORT },
        { icon: "alert-triangle", title: "More visible tensions & opportunities", body: LOREM_SHORT },
        { icon: "heart-handshake", title: "Stronger team trust", body: LOREM_SHORT },
        { icon: "brain", title: "Useful AI-supported memory", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Best fit"
        title="Best for organisations ready to <em>work on how they work.</em>"
      />
      <FitCompare
        strong={[
          "Distributed or fractional teams",
          "Organisations holding strategic gatherings",
          "Companies onboarding new contributors",
          "Teams preparing for new missions or growth phases",
          "Organisations exploring AI-native ways of working",
        ]}
        poor={[
          "Teams looking only for a meeting app",
          "Organisations unwilling to surface real tensions",
          "Companies seeking AI surveillance rather than collaboration support",
        ]}
      />
    </Section>

    <CTABand
      title="Ready to <em>work on how you work?</em>"
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   2C. WHO FOR · Networks & Communities
   ==================================================================== */
const PageWhoForNetworks = () => (
  <>
    <SegmentHero
      eyebrow="Segment 2C · Networks & Professional Communities"
      title="Turn membership into <em>meaningful connection and shared intelligence.</em>"
      sub="Coherence Conversations Event helps networks and professional communities reveal member interests, needs, offers, and collaboration opportunities before important gatherings or programmes."
      primaryCTA={{ label: "Start a Conversation", href: "start.html" }}
    />

    <Section tone="white">
      <SectionHead
        eyebrow="Segment overview"
        title="For communities where value depends on <em>member-to-member relevance.</em>"
      />
      <TagList items={[
        "Professional associations", "Communities of practice", "Expert networks",
        "Learning communities", "Founder & operator communities",
        "Regenerative & impact networks", "Research & innovation communities"
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="The problem"
        title="Many networks have members. <em>Fewer have activation.</em>"
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Stale or underused directories", body: LOREM_SHORT },
        { num: "02", title: "New members struggle to orient", body: LOREM_SHORT },
        { num: "03", title: "No insight into member needs", body: LOREM_SHORT },
        { num: "04", title: "Engagement clusters around the same few", body: LOREM_SHORT },
        { num: "05", title: "Invisible collaboration opportunities", body: LOREM_SHORT },
        { num: "06", title: "Event energy that fades afterwards", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="What we help with"
        title="From passive membership to <em>active network intelligence.</em>"
        dek="Guided conversations and AI-supported synthesis help surface what members care about, who should meet, and what themes or opportunities are emerging across the community."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>Invite & guide</h4><p>{LOREM_SHORT}</p></div>
        <div className="flow-step"><h4>Capture context</h4><p>{LOREM_SHORT}</p></div>
        <div className="flow-step"><h4>Synthesise & match</h4><p>{LOREM_SHORT}</p></div>
      </div>
    </Section>

    <Section tone="teal">
      <SectionHead
        eyebrow="Member discovery & activation"
        title="Help members <em>find the right others</em> faster."
      />
      <TagList items={["Interests", "Needs", "Offers", "Questions", "Expertise", "Collaboration intentions"]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Community intelligence"
        title="Make the network <em>visible to itself.</em>"
        dek="AI-supported synthesis can help community leaders understand emerging themes, unmet needs, member clusters, potential working groups, and opportunities for future programming."
      />
      <div className="dash-preview">
        <h5>Community lens · sample</h5>
        <div className="dash-grid">
          <div className="dash-tile">
            <div className="dash-tile-label">Active members</div>
            <div className="dash-tile-val">312</div>
            <div className="dash-tile-sub">of 487 invited</div>
          </div>
          <div className="dash-tile">
            <div className="dash-tile-label">Emerging themes</div>
            <div className="dash-tile-val">7</div>
            <div className="dash-tile-sub">across conversations</div>
          </div>
          <div className="dash-tile">
            <div className="dash-tile-label">Suggested matches</div>
            <div className="dash-tile-val">84</div>
            <div className="dash-tile-sub">high-relevance</div>
          </div>
          <div className="dash-tile">
            <div className="dash-tile-label">Working group seeds</div>
            <div className="dash-tile-val">5</div>
            <div className="dash-tile-sub">forming</div>
          </div>
        </div>
      </div>
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Benefits for network leaders"
        title="Stronger engagement, better insight, <em>more useful community moments.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "user-plus", title: "Better member onboarding", body: LOREM_SHORT },
        { icon: "shuffle", title: "More relevant introductions", body: LOREM_SHORT },
        { icon: "calendar", title: "Stronger event & programme design", body: LOREM_SHORT },
        { icon: "git-merge", title: "Clearer collaboration opportunities", body: LOREM_SHORT },
        { icon: "ear", title: "Better understanding of needs", body: LOREM_SHORT },
        { icon: "heart", title: "Increased retention & belonging", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Best fit"
        title="Best for networks that want <em>more than audience management.</em>"
      />
      <FitCompare
        strong={[
          "Communities with high-trust or high-intent members",
          "Networks where members have complementary expertise",
          "Associations seeking stronger member value",
          "Communities moving from content to collaboration",
          "Ecosystem groups trying to map who is doing what",
        ]}
        poor={[
          "Audiences with little shared purpose",
          "Communities that only want broadcast content",
          "Groups treating members primarily as leads or subscribers",
        ]}
      />
    </Section>

    <CTABand
      title="Ready to <em>activate your community?</em>"
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   2D. WHO FOR · Civic & Civil Society
   ==================================================================== */
const PageWhoForCivic = () => (
  <>
    <SegmentHero
      eyebrow="Segment 2D · Civic & Civil Society Ecosystems"
      title="Help civic dialogue become <em>shared sensemaking and action.</em>"
      sub="Coherence Conversations Event helps civic and civil society ecosystems listen across difference, surface shared concerns, map stakeholders, and build pathways from participation to coordinated action."
      primaryCTA={{ label: "Start a Conversation", href: "start.html" }}
    />

    <Section tone="white">
      <SectionHead
        eyebrow="Segment overview"
        title="For public-good ecosystems <em>working across difference.</em>"
      />
      <TagList items={[
        "Civil society organisations", "Civic engagement platforms",
        "Participatory governance initiatives", "Community coalitions",
        "Philanthropic & impact networks", "Regenerative place-based initiatives",
        "Public-interest innovation labs", "Multi-stakeholder alliances"
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="The problem"
        title="Dialogue is not enough if <em>nothing coherent can move afterwards.</em>"
      />
      <TensionsBlock items={[
        { title: "Consultation without coordination",
          body: "People are asked for input, but do not see how it becomes action." },
        { title: "Diversity without shared sensemaking",
          body: "Many perspectives are present, but no one can see the whole." },
        { title: "Engagement without continuity",
          body: "Meetings happen, reports are written, and momentum quietly evaporates." },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="What we help with"
        title="Sensemaking infrastructure for <em>civic collaboration.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "users-round", title: "Stakeholder discovery", body: LOREM_SHORT },
        { icon: "message-square", title: "Guided civic conversations", body: LOREM_SHORT },
        { icon: "git-merge", title: "Thematic synthesis", body: LOREM_SHORT },
        { icon: "heart-handshake", title: "Relationship & trust mapping", body: LOREM_SHORT },
        { icon: "layers", title: "Participatory sensemaking", body: LOREM_SHORT },
        { icon: "flag", title: "Working group formation", body: LOREM_SHORT },
        { icon: "book-open", title: "Public learning outputs", body: LOREM_SHORT },
        { icon: "arrow-right-circle", title: "Follow-through pathways", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="teal">
      <SectionHead
        eyebrow="Stakeholder sensemaking"
        title="Make the field visible <em>without flattening difference.</em>"
        dek="AI-supported synthesis can help civic actors see the patterns across many perspectives while preserving plurality, nuance, and context."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>Voices</h4><p>Many distinct perspectives gathered in their own words.</p></div>
        <div className="flow-step"><h4>Patterns</h4><p>Shared themes, tensions, and possibilities surfaced across voices.</p></div>
        <div className="flow-step"><h4>Commitments</h4><p>Pathways from shared understanding into coordinated action.</p></div>
      </div>
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Participation to action"
        title="Participation should create <em>capacity, not just reports.</em>"
        dek="The goal is to help civic processes move from listening to shared priorities, from shared priorities to working groups, and from working groups to visible action."
      />
      <JourneyTrack steps={[
        { name: "Listen" },
        { name: "Share" },
        { name: "Prioritise", highlight: true },
        { name: "Form" },
        { name: "Act" },
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Benefits for civic ecosystems"
        title="From many voices to <em>shared capacity.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "ear", title: "Better stakeholder understanding", body: LOREM_SHORT },
        { icon: "users", title: "Inclusive, structured participation", body: LOREM_SHORT },
        { icon: "eye", title: "Visibility of shared concerns", body: LOREM_SHORT },
        { icon: "heart-handshake", title: "Stronger inter-group trust", body: LOREM_SHORT },
        { icon: "link", title: "Continuity between meetings", body: LOREM_SHORT },
        { icon: "book-open", title: "Actionable public learning", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Best fit"
        title="Best for civic work that needs <em>shared sensemaking and follow-through.</em>"
      />
      <FitCompare
        strong={[
          "Multi-stakeholder initiatives",
          "Civic coalitions with real coordination needs",
          "Public-good projects where trust matters",
          "Communities seeking more useful participation",
          "Funders wanting to understand ecosystem needs",
          "Initiatives moving from consultation to action",
        ]}
        poor={[
          "Tokenistic participation processes",
          "Groups seeking only sentiment extraction",
          "Highly polarised contexts without facilitation capacity",
          "Projects unwilling to share power or feedback loops",
        ]}
      />
    </Section>

    <CTABand
      title="Ready to move from <em>dialogue to coordinated action?</em>"
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   3. WHAT WE DO
   ==================================================================== */
const PageWhatWeDo = () => (
  <>
    <section className="page-hero">
      <div className="calli in-gradient"
        style={{ backgroundImage: "url('assets/backgrounds/calligraphy-33.png')",
                 width: 900, height: 900, right: -160, top: 0 }}
        aria-hidden="true" />
      <div className="container">
        <Eyebrow>What we do</Eyebrow>
        <h1>We build AI agents <em>for wiser collaboration.</em></h1>
        <p className="page-hero-sub">
          Coherence Conversations Event is the first product expression of a larger mission:
          building AI-supported systems that help groups discover, connect, make sense, commit,
          and act together.
        </p>
        <div className="page-hero-ctas">
          <a className="btn btn-primary btn-lg" href="event.html">See the product <Icon name="arrow-right" /></a>
          <a className="btn btn-ghost btn-lg" href="start.html">Start a Pilot Conversation</a>
        </div>
      </div>
    </section>

    <Section tone="white">
      <SectionHead
        eyebrow="The larger thesis"
        title="AI should help humans become <em>more capable together.</em>"
      />
      <div className="manifesto">
        <p>The real opportunity of AI is not only automation. It is <em>better coordination</em> — helping people, teams, communities, and organisations think together, learn together, and act together.</p>
      </div>
    </Section>

    <Section tone="teal">
      <SectionHead
        eyebrow="The Coherence Journey"
        title="The Coherence Journey is <em>the pattern our agents support.</em>"
        dek="Our agents and products support the journey from discovery and connection to convergence, commitment, and action."
      />
      <JourneyTrack steps={[
        { name: "Discover", note: "Agent surfaces who is here" },
        { name: "Connect",  note: "Agent suggests relevant others" },
        { name: "Converge", note: "Agent synthesises shared patterns", highlight: true },
        { name: "Seed",     note: "Agent supports commitments" },
        { name: "Build",    note: "Agent holds shared memory" },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Collaborative intelligence"
        title="Collaborative intelligence is <em>intelligence between people.</em>"
        dek="We build systems that help groups become more capable together, not just individuals become faster alone."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--ink-500)" }}>Individual AI</h4>
          <p>{LOREM}</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-800)" }}>Collaborative AI</h4>
          <p>{LOREM}</p>
        </div>
      </div>
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Collective sensemaking"
        title="Groups need better ways to <em>see what they know together.</em>"
        dek="Coherence systems help turn conversations, needs, offers, tensions, and questions into shared patterns and useful next steps."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>Conversations</h4><p>Structured, guided, consent-based.</p></div>
        <div className="flow-step"><h4>Synthesis</h4><p>Patterns, themes, offers, needs surfaced.</p></div>
        <div className="flow-step"><h4>Insight</h4><p>Shared maps the group can act on.</p></div>
      </div>
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="The first product"
        title="Coherence Conversations Event <em>activates event networks</em> before people gather."
        dek="It uses guided conversations and AI-supported synthesis to prepare participants, support hosts, and create richer collaboration fields."
      />
      <div style={{ marginTop: 32 }}>
        <a className="btn btn-primary btn-lg" href="event.html">Explore Coherence Conversations Event <Icon name="arrow-right" /></a>
      </div>
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Where this applies"
        title="One collaboration infrastructure, <em>many fields of use.</em>"
      />
      <CardGrid cols={4} items={[
        { icon: "calendar", title: "Events", body: "Conferences, summits, retreats.",
          link: { label: "Read more", href: "who-for-events.html" } },
        { icon: "building-2", title: "Companies", body: "Offsites, onboarding, strategy.",
          link: { label: "Read more", href: "who-for-companies.html" } },
        { icon: "users", title: "Communities", body: "Networks, associations, programmes.",
          link: { label: "Read more", href: "who-for-networks.html" } },
        { icon: "globe", title: "Civic", body: "Stakeholder convening, public dialogue.",
          link: { label: "Read more", href: "who-for-civic.html" } },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Pilots & collaboration design"
        title="We build through pilots with <em>real gatherings, communities, and organisations.</em>"
        dek="The product is developed through practical pilots where real coordination challenges reveal what the system needs to support."
      />
      <Timeline steps={[
        { title: "Discovery conversation", body: LOREM_SHORT },
        { title: "Context mapping",        body: LOREM_SHORT },
        { title: "Conversation design",    body: LOREM_SHORT },
        { title: "Activation",             body: LOREM_SHORT },
        { title: "Synthesis & insight",    body: LOREM_SHORT },
        { title: "Live support",           body: LOREM_SHORT },
        { title: "Learning report",        body: LOREM_SHORT },
      ]} />
    </Section>

    <CTABand
      title="Have a real gathering coming up? <em>Let's design a pilot.</em>"
      cta={{ label: "Start a Pilot Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   4. COHERENCE CONVERSATIONS EVENT
   ==================================================================== */
const PageEvent = () => (
  <>
    <HeroLight
      eyebrow="The product · Coherence Conversations Event"
      title='Activate the people in your event <em>before they arrive.</em>'
      sub="Coherence Conversations Event helps participants clarify intent, discover relevant others, and arrive with shared context before the gathering begins."
      primaryCTA={{ label: "Start a Pilot", href: "start.html" }}
      secondaryCTA={{ label: "Talk to us", href: "start.html" }}
      meta={["Pilots open", "Designed with hosts", "Consent-based"]}
      calli="calligraphy-29.png"
    />

    <Section tone="white">
      <SectionHead
        eyebrow="What it is"
        title="A pre-event <em>conversation and sensemaking layer.</em>"
        dek="Coherence Conversations Event combines guided participant conversations, AI-supported synthesis, and host-facing insight to make gatherings more intentional, relevant, and alive."
      />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="How it works"
        title="Three simple movements <em>before the event begins.</em>"
      />
      <div className="flow-steps">
        <div className="flow-step">
          <h4>Participants join guided conversations</h4>
          <p>Structured prompts surface intent, context, expertise, questions, and what each person hopes the event might make possible.</p>
        </div>
        <div className="flow-step">
          <h4>AI synthesises the field</h4>
          <p>Intentions, themes, offers, needs, and possible matches emerge across the participant cohort.</p>
        </div>
        <div className="flow-step">
          <h4>Hosts and participants arrive prepared</h4>
          <p>Everyone enters the room with shared context, suggested connections, and a clearer map of the gathering.</p>
        </div>
      </div>
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Participant experience"
        title="Participants arrive <em>clearer, warmer, and better connected.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "compass", title: "Clarify why they are attending", body: LOREM_SHORT },
        { icon: "search", title: "Discover relevant people", body: LOREM_SHORT },
        { icon: "message-circle", title: "Share more meaningful context", body: LOREM_SHORT },
        { icon: "user-check", title: "Generate better profiles & intros", body: LOREM_SHORT },
        { icon: "fast-forward", title: "Move faster into useful conversations", body: LOREM_SHORT },
        { icon: "arrow-right-circle", title: "Stronger pathways after the event", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="teal">
      <SectionHead
        eyebrow="Host & organiser experience"
        title="Hosts see the field <em>before they hold the room.</em>"
      />
      <div className="dash-preview">
        <h5>Host lens · sample</h5>
        <div className="dash-grid">
          <div className="dash-tile"><div className="dash-tile-label">Participants</div><div className="dash-tile-val">240</div><div className="dash-tile-sub">activated</div></div>
          <div className="dash-tile"><div className="dash-tile-label">Themes</div><div className="dash-tile-val">9</div><div className="dash-tile-sub">emerging</div></div>
          <div className="dash-tile"><div className="dash-tile-label">Matches</div><div className="dash-tile-val">126</div><div className="dash-tile-sub">suggested</div></div>
          <div className="dash-tile"><div className="dash-tile-label">Questions</div><div className="dash-tile-val">42</div><div className="dash-tile-sub">for programming</div></div>
        </div>
      </div>
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="AI-supported synthesis"
        title="AI helps turn many conversations into <em>shared intelligence.</em>"
        dek="The system helps identify patterns, themes, offers, needs, potential matches, and possible next steps while preserving human judgement and consent."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>Many conversations</h4><p>Each in the participant's own words.</p></div>
        <div className="flow-step"><h4>Synthesis</h4><p>Patterns and themes across the cohort.</p></div>
        <div className="flow-step"><h4>Shared insight</h4><p>Maps and matches everyone can act on.</p></div>
      </div>
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Use cases"
        title="Designed for gatherings where <em>connection matters.</em>"
      />
      <CardGrid cols={4} items={[
        { icon: "calendar", title: "Conferences", body: LOREM_SHORT },
        { icon: "flag", title: "Summits", body: LOREM_SHORT },
        { icon: "trees", title: "Retreats", body: LOREM_SHORT },
        { icon: "rocket", title: "Founder & investor events", body: LOREM_SHORT },
        { icon: "building-2", title: "Company offsites", body: LOREM_SHORT },
        { icon: "users", title: "Community gatherings", body: LOREM_SHORT },
        { icon: "network", title: "Professional networks", body: LOREM_SHORT },
        { icon: "globe", title: "Civic convenings", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Pilot pathway"
        title="Start with a <em>focused pilot.</em>"
      />
      <Timeline steps={[
        { title: "Discovery conversation",  body: LOREM_SHORT },
        { title: "Event context mapping",   body: LOREM_SHORT },
        { title: "Conversation design",     body: LOREM_SHORT },
        { title: "Participant activation",  body: LOREM_SHORT },
        { title: "Synthesis & insight",     body: LOREM_SHORT },
        { title: "Event support",           body: LOREM_SHORT },
        { title: "Learning report",         body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="ink">
      <SectionHead
        eyebrow="Privacy, consent, and trust"
        title="Trust is <em>part of the product.</em>"
        dek="Coherence Conversations Event must be transparent, consent-based, privacy-aware, and designed to support participant agency. AI should support the human field, not extract from it."
      />
      <ul className="trust-list">
        <li>Transparent use of AI</li>
        <li>Clear consent flows</li>
        <li>Participant control over what is shared</li>
        <li>Human oversight</li>
        <li>Privacy-aware synthesis</li>
        <li>No hidden surveillance</li>
      </ul>
    </Section>

    <CTABand
      title="Planning a gathering where <em>connection really matters?</em>"
      cta={{ label: "Start a Pilot", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   5. JOIN US
   ==================================================================== */
const PageJoin = () => (
  <>
    <section className="page-hero">
      <div className="calli in-gradient"
        style={{ backgroundImage: "url('assets/backgrounds/calligraphy-11.png')",
                 width: 820, height: 820, left: -160, top: 0 }}
        aria-hidden="true" />
      <div className="container">
        <Eyebrow>Join us</Eyebrow>
        <h1>Help us build Coherence Conversations Event <em>and the collaboration infrastructure behind it.</em></h1>
        <p className="page-hero-sub">
          The Coherence Company is early-stage, building its first product, developing its
          operating model, and preparing for a planned fundraise in autumn. We are inviting
          aligned contributors to help build the company now.
        </p>
        <div className="page-hero-ctas">
          <a className="btn btn-primary btn-lg" href="start.html">Start a Contributor Conversation <Icon name="arrow-right" /></a>
        </div>
      </div>
    </section>

    <Section tone="white">
      <SectionHead
        eyebrow="Why join now"
        title="Early contributors can still <em>shape what this becomes.</em>"
        dek="We are at the stage where product, culture, systems, field, and market are still being formed. This is a rare window to help shape the company before the structure hardens."
      />
      <JourneyTrack steps={[
        { name: "Now",       note: "Founding contributors" },
        { name: "Pilots",    note: "Real gatherings, real learning" },
        { name: "Fundraise", note: "Autumn", highlight: true },
        { name: "Scale",     note: "Product and team grow" },
        { name: "Field",     note: "Building the broader category" },
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="The company we are building"
        title="A company for <em>AI-supported collective intelligence.</em>"
        dek="We are building a company that uses AI to support human agency, collaborative intelligence, and collective sensemaking — while organising itself through the same principles it offers to others."
      />
    </Section>

    <Section tone="teal">
      <SectionHead
        eyebrow="How we work · Audax OS"
        title="Audax OS is our <em>internal operating model.</em>"
        dek="Audax OS helps us organise distributed, fractional, AI-native work through purpose, quests, missions, commitments, contribution tracking, learning loops, and AI-supported coordination."
      />
      <JourneyTrack steps={[
        { name: "Purpose" },
        { name: "Quests" },
        { name: "Missions", highlight: true },
        { name: "Commitments" },
        { name: "Learning" },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Current quests"
        title="Enter through a mission, <em>not vague enthusiasm.</em>"
      />
      <CardGrid cols={3} items={[
        { num: "Q01", icon: "sparkles", title: "Coherence Conversations Event product",
          body: "Help shape the product itself — design, AI, conversation flows, host tools." },
        { num: "Q02", icon: "calendar", title: "Event pilot design & delivery",
          body: "Bring a gathering. Co-design a pilot. Help us learn through real use." },
        { num: "Q03", icon: "compass", title: "Market segment development",
          body: "Sharpen positioning, ICPs, partnerships, and go-to-market for each segment." },
        { num: "Q04", icon: "pen-tool", title: "Public narrative & storytelling",
          body: "Help articulate the field, the company, and the work in public." },
        { num: "Q05", icon: "git-merge", title: "Partnership & ecosystem building",
          body: "Open doors to organisers, networks, civic actors, and aligned platforms." },
        { num: "Q06", icon: "layers", title: "Audax OS & internal operating model",
          body: "Help us build the way we build — quests, contribution, AI coordination." },
        { num: "Q07", icon: "cpu", title: "AI agent design & prototyping",
          body: "Prototype the agents that support the Coherence Journey." },
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Slicing Pie & future equity"
        title="How contribution is <em>recognised at this stage.</em>"
        dek="At this stage, most contribution is not salaried. We use a Slicing Pie-style contribution model to track early risk and effort so contribution can translate into future equity when the company formalises, raises investment, or reaches the agreed conversion event."
      />
      <div className="invite-note" style={{ marginTop: 32 }}>
        <div className="invite-note-icon"><Icon name="info" /></div>
        <p>
          <strong>Important:</strong> This website copy is not a legal agreement.
          Formal contribution terms are documented separately before meaningful work begins.
        </p>
      </div>
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Who we are looking for"
        title="Builders, operators, sensemakers, designers, facilitators, <em>and field-weavers.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "cpu", title: "Product & AI builders", body: LOREM_SHORT },
        { icon: "calendar", title: "Event & community builders", body: LOREM_SHORT },
        { icon: "compass", title: "Strategic operators", body: LOREM_SHORT },
        { icon: "pen-tool", title: "Designers & storytellers", body: LOREM_SHORT },
        { icon: "microscope", title: "Researchers & sensemakers", body: LOREM_SHORT },
        { icon: "git-merge", title: "Partnership & ecosystem builders", body: LOREM_SHORT },
      ]} />
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Team & collaborators"
        title="The people currently <em>holding the centre.</em>"
      />
      <div className="profile-grid">
        {[
          { initials: "—", name: "Name pending", role: "Founder · Product", bio: LOREM_SHORT },
          { initials: "—", name: "Name pending", role: "Co-founder · AI", bio: LOREM_SHORT },
          { initials: "—", name: "Name pending", role: "Field & partnerships", bio: LOREM_SHORT },
        ].map((p, i) => (
          <div key={i} className="profile-card">
            <div className="profile-avatar">{p.initials}</div>
            <h4>{p.name}</h4>
            <div className="profile-role">{p.role}</div>
            <p className="profile-bio">{p.bio}</p>
          </div>
        ))}
      </div>
    </Section>

    <CTABand
      title="Ready to <em>help us build?</em>"
      cta={{ label: "Start a Contributor Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   6. START A CONVERSATION
   ==================================================================== */
const PageStart = () => {
  const [pathway, setPathway] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  const pathways = [
    "I want to pilot Coherence Conversations Event",
    "I organise events",
    "I lead a company or team",
    "I hold a network or community",
    "I work in civic or civil society ecosystems",
    "I want to contribute",
    "I am interested in investing or partnering",
    "Something else",
  ];

  return (
    <>
      <section className="page-hero">
        <div className="calli in-gradient"
          style={{ backgroundImage: "url('assets/backgrounds/calligraphy-28.png')",
                   width: 820, height: 820, right: -160, top: 0 }}
          aria-hidden="true" />
        <div className="container">
          <Eyebrow>Start a conversation</Eyebrow>
          <h1>Start with Coherence Conversations Event, <em>or tell us what you are trying to coordinate.</em></h1>
          <p className="page-hero-sub">
            Whether you are planning an event, activating a network, bringing a team together,
            convening stakeholders, joining the build, or exploring partnership — the best next
            step is a conversation.
          </p>
        </div>
      </section>

      <Section tone="white">
        <SectionHead
          eyebrow="Choose your path"
          title="What <em>brings you here?</em>"
        />
        <div className="routing-list">
          {pathways.map(p => (
            <button
              key={p}
              type="button"
              className={`routing-card${pathway === p ? " active" : ""}`}
              onClick={() => setPathway(p)}
              style={{
                border: pathway === p ? "1px solid var(--teal-500)" : undefined,
                background: pathway === p ? "var(--teal-050)" : undefined,
                textAlign: "left", cursor: "pointer", font: "inherit",
              }}
            >
              <span className="routing-q">{p}</span>
              <span className="routing-a">
                {pathway === p ? "Selected" : "Choose"} <Icon name={pathway === p ? "check" : "arrow-right"} />
              </span>
            </button>
          ))}
        </div>
      </Section>

      <Section tone="off">
        <SectionHead
          eyebrow="Tell us what you're trying to coordinate"
          title="What are you <em>trying to make possible?</em>"
        />
        {submitted ? (
          <div className="invite-note" style={{ marginTop: 32 }}>
            <div className="invite-note-icon"><Icon name="check" /></div>
            <p><strong>Thank you.</strong> We'll review your context and reply with the most relevant next conversation within a few days.</p>
          </div>
        ) : (
          <form className="conv-form" onSubmit={submit}>
            <div className="field"><label>Your name</label><input required placeholder="How should we address you?" /></div>
            <div className="field"><label>Email</label><input type="email" required placeholder="you@somewhere.org" /></div>
            <div className="field"><label>Organisation</label><input placeholder="If relevant" /></div>
            <div className="field"><label>Role</label><input placeholder="Your role in this work" /></div>
            <div className="field"><label>Pathway</label><input value={pathway} readOnly placeholder="Select a path above, or describe below" /></div>
            <div className="field"><label>What is the context? Who are you bringing together?</label><textarea rows="3" /></div>
            <div className="field"><label>What currently feels hard? What would success look like?</label><textarea rows="3" /></div>
            <div className="field"><label>When is this happening?</label><input placeholder="Rough timeframe" /></div>
            <div className="field"><label>What kind of support are you looking for?</label><textarea rows="2" /></div>
            <div className="conv-form-actions">
              <button type="submit" className="btn btn-primary btn-lg">Send <Icon name="arrow-right" /></button>
              <a className="btn btn-ghost btn-lg" href="mailto:hello@coherence.tv">Email instead</a>
            </div>
          </form>
        )}
      </Section>

      <Section tone="white">
        <SectionHead
          eyebrow="What happens next"
          title="After you <em>reach out.</em>"
        />
        <Timeline steps={[
          { title: "We review your context", body: LOREM_SHORT },
          { title: "We suggest the most relevant next conversation", body: LOREM_SHORT },
          { title: "We explore fit, timing, and possible pathways", body: LOREM_SHORT },
          { title: "If useful, we shape a pilot, partnership, or contribution pathway", body: LOREM_SHORT },
        ]} />
      </Section>

      <Section tone="off">
        <SectionHead
          eyebrow="Alternative ways to connect"
          title="Prefer <em>another channel?</em>"
        />
        <CardGrid cols={3} items={[
          { icon: "mail", title: "Email", body: "hello@coherence.tv",
            link: { label: "Send an email", href: "mailto:hello@coherence.tv" } },
          { icon: "linkedin", title: "LinkedIn", body: "Follow the build in public.",
            link: { label: "Visit profile", href: "#" } },
          { icon: "send", title: "Newsletter", body: "Occasional field notes and updates.",
            link: { label: "Subscribe", href: "#" } },
        ]} />
      </Section>
    </>
  );
};

Object.assign(window, {
  PageHome, PageWhoFor,
  PageWhoForEvents, PageWhoForCompanies, PageWhoForNetworks, PageWhoForCivic,
  PageWhatWeDo, PageEvent, PageJoin, PageStart,
});
