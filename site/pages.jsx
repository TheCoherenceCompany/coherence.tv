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
      title='Humans and AI,<br/><em>wiser together.</em>'
      sub="The Coherence Company offers Coherence Conversations, AI guides and collaboration tools that turn dialogue into shared intelligence, the right relationships and coordinated action."
      primaryCTA={{ label: "Explore Coherence Conversations", href: "coherenceconversations.html" }}
      secondaryCTA={{ label: "Join the Build", href: "join.html" }}
      meta={["Early-stage · Building in public", "Pilots open", "Remote · global"]}
      calli="calligraphy-31.jpg"
    />

    {/* 1.2 Coordination Gap */}
    <Section tone="white" calli={{ file: "calligraphy-23.jpg", cls: "v-edge-right" }}>
      <SectionHead
        eyebrow="The coordination gap"
        title="More connected,<br/><em>less coordinated.</em>"
        dek="We have built extraordinary tools for communication. People can gather across continents and reach thousands in seconds. The harder question is what happens after the signal arrives."
      />
      <div className="two-col">
        <div>
          <p>Connection does not automatically become understanding. Understanding does not automatically become trust. Trust does not automatically become action.</p>
          <p>Events bring valuable people into the same room, but still leave too many important conversations to chance. Organisations contain deep knowledge, but often hear only the loudest, safest, or most senior voices.</p>
        </div>
        <div>
          <p>Networks hold enormous relational capital, but many become directories, newsletters, or occasional gatherings. Civic ecosystems collect concern, but struggle to turn it into shared priorities, accountability, and local action.</p>
          <p>The problem is not a lack of people, platforms, or information. The missing layer is coordination: the human and technological infrastructure that helps groups make sense together, find the right relationships, and move from intention to action.</p>
        </div>
      </div>
    </Section>

    {/* 1.3 What We Build */}
    <Section tone="off" calli={{ file: "calligraphy-29.jpg", cls: "faint v-corner-bl" }}>
      <SectionHead
        eyebrow="What we build"
        title="What turns talk<br/><em>into traction?</em>"
        dek="We build the conditions for collective intelligence to become practical. That means guided conversations, AI Guides, synthesis tools, matchmaking flows, facilitation patterns, and collaboration practices that help groups move from first contact into shared action."
      />
      <CardGrid cols={3} items={[
        { icon: "message-circle", title: "Guided dialogue",
          body: "Structured one-to-one and small-group conversations that help people speak from real context, not just polished profiles. No dead forms. No forced networking theatre. People talk, listen, reflect, and become visible to one another." },
        { icon: "sparkles", title: "AI Guides",
          body: "AI Guides help people orient, prepare, remember, connect, and act. They hold context, surface patterns, suggest relevant introductions, capture commitments, and help people see what is emerging. They support the journey without taking it over." },
        { icon: "git-merge", title: "Sensemaking from many voices",
          body: "When many conversations happen, patterns begin to appear. Themes emerge. Shared questions become visible. Needs and offers become easier to match. Hosts and community stewards can see the living pattern underneath the noise.",
          link: { label: "See Coherence Conversations", href: "coherenceconversations.html" } },
      ]} />
    </Section>

    {/* 1.4 The Coherence Journey */}
    <Section id="journey" tone="teal" calli={{ file: "calligraphy-11.jpg", cls: "subtle v-wide-top" }}>
      <SectionHead
        eyebrow="The Coherence Journey"
        title="From first contact to<br/><em>shared action.</em>"
        dek="The Coherence Journey maps how groups move from 'Who is here?' to 'What can we build?' — beyond passive attendance, shallow networking, and endless discussion into clearer relationships, shared direction, and practical movement."
      />
      <JourneyTrack steps={[
        { name: "Discover", note: "See who is here and what is alive in the field." },
        { name: "Connect",  note: "Create meaningful encounters between relevant people." },
        { name: "Converge", note: "Find shared patterns, tensions, and areas of mutual interest.", highlight: true },
        { name: "Seed",     note: "Turn possibility into early commitments and next steps." },
        { name: "Build",    note: "Support sustained action, learning, and follow-through." },
      ]} />
    </Section>

    {/* 1.5 Who It's For */}
    <Section tone="white">
      <SectionHead
        eyebrow="Who it's for"
        title="Built for people who<br/><em>bring others together.</em>"
        dek="Coherence Conversations is for people responsible for helping groups become more than a list of names, a room full of attendees, an org chart, or a mailing list. The first four markets are different, but the pattern is the same: valuable people are already present. Their insight, relationships, and capacity to act are under-activated."
      />
      <CardGrid cols={4} items={[
        { icon: "calendar", title: "Purpose-driven event organisers",
          body: "From scheduled programme to activated human network. For conferences, summits, retreats, and high-intent events where the real value is who meets whom and what becomes possible afterwards.",
          link: { label: "Read more", href: "who-for-events.html" } },
        { icon: "building-2", title: "Companies & organisations",
          body: "From employee voice to organisational intelligence. For companies, HR leaders, and transformation teams that need to hear more of the organisation's real intelligence.",
          link: { label: "Read more", href: "who-for-companies.html" } },
        { icon: "users", title: "Networks & professional communities",
          body: "From member list to living network. For associations, founder communities, alumni networks, and curated communities that already gather valuable people but struggle to activate them.",
          link: { label: "Read more", href: "who-for-networks.html" } },
        { icon: "globe", title: "Civic & civil society ecosystems",
          body: "From scattered concern to civic action. For municipalities, NGOs, foundations, and civic movements trying to make participation more useful, trusted, and action-oriented.",
          link: { label: "Read more", href: "who-for-civic.html" } },
      ]} />
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a className="btn btn-secondary" href="who-for.html">Explore Who It's For <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* 1.6 Coherence Conversations */}
    <Section tone="off">
      <SectionHead
        eyebrow="Coherence Conversations"
        title="What happens<br/><em>before people gather?</em>"
        dek="Instead of asking people to complete another static profile, we invite them into guided conversations that reveal what they care about, why they are showing up, who they hope to meet, what they need, and what they can offer."
      />
      <div className="flow-steps">
        <div className="flow-step">
          <h4>Conversations before the moment</h4>
          <p>Participants join structured conversations designed to uncover intentions, interests, questions, needs, offers, and context — in a more human way.</p>
        </div>
        <div className="flow-step">
          <h4>Synthesis by AI Guides</h4>
          <p>AI Guides help identify themes, participant patterns, possible matches, shared questions, and insights that hosts can use before everyone gathers.</p>
        </div>
        <div className="flow-step">
          <h4>Better prepared, better connected</h4>
          <p>People arrive with more context. Hosts understand the field before it gathers. The experience becomes less random, more relational, and more useful.</p>
        </div>
      </div>
      <div style={{ marginTop: 48, textAlign: "center" }}>
        <a className="btn btn-primary btn-lg" href="conversations.html">See How It Works <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* 1.7 Why Now */}
    <Section tone="white">
      <SectionHead
        eyebrow="Why now"
        title="What can AI do<br/><em>for groups?</em>"
        dek="AI is already changing how individuals write, code, analyse, plan, and create. The deeper opportunity is collective: AI Guides that help groups listen better, remember more, translate across perspectives, detect patterns, build trust, and coordinate action across complexity."
      />
      <CardGrid cols={4} items={[
        { icon: "calendar-check", title: "Events",
          body: "Networking is often one of the main promises of an event, but too much is still left to luck. Coherence Conversations helps participants arrive with clearer intentions and more relevant connections already forming." },
        { icon: "building-2", title: "Organisations",
          body: "Transformation fails when leaders cannot hear what people really know, feel, resist, or see. Coherence Conversations helps surface trusted insight and connect it to culture, strategy, and change." },
        { icon: "network", title: "Networks",
          body: "Many communities contain enormous dormant value. People have skills, questions, offers, projects, and relationships that remain invisible because the network does not help them find one another intelligently." },
        { icon: "globe", title: "Civic ecosystems",
          body: "Public dialogue often produces energy, insight, and goodwill, then loses momentum when the room dissolves. Coherence Conversations can help communities turn many voices into visible priorities and shared pathways for action." },
      ]} />
    </Section>

    {/* 1.8 The Bigger Dream */}
    <Section tone="off" calli={{ file: "calligraphy-26.jpg", cls: "faint v-corner-br" }}>
      <SectionHead
        eyebrow="The bigger dream"
        title="Where is<br/><em>this going?</em>"
        dek="Coherence Conversations is the first product, not the final horizon. The bigger dream is to build collaboration infrastructure for the AI age: a living ecosystem of conversations, AI Guides, practices, protocols, and shared memory that helps people and groups move from intention to action with less friction and more wisdom."
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Horizon 1 · Coherence Conversations",
          body: "Guided dialogue becomes sensemaking, matchmaking, and practical next steps for events, organisations, networks, and civic ecosystems." },
        { num: "02", title: "Horizon 2 · AI Guides for the full journey",
          body: "AI Guides support discovery, connection, convergence, seeding, building, and follow-through across many kinds of collaboration." },
        { num: "03", title: "Horizon 3 · A wider coherence ecosystem",
          body: "Personal and group Coherence accounts. Shared memory across contexts. Agent-to-agent collaboration. A wider field of people building AI for sensemaking, collaboration, and wisdom at scale." },
      ]} />
    </Section>

    {/* 1.9 Join the Build */}
    <Section tone="ink" calli={{ file: "calligraphy-29.jpg", cls: "on-dark v-corner-br" }}>
      <SectionHead
        eyebrow="Join the build"
        title="Help build the product, the company,<br/><em>and the field.</em>"
        dek="The Coherence Company is early-stage. We are developing Coherence Conversations, shaping the wider Coherence Journey, and building the operating model needed for an AI-native collaboration company. We are inviting people who want to help build the product, the company, the field, and the operating model. This is early. The shape is still forming. Good. Clay is more useful before it becomes ceramic."
      />
      <div style={{ marginTop: 40 }}>
        <a className="btn btn-accent btn-lg" href="join.html">Join the Build <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* 1.10 Start a Conversation */}
    <CTABand
      calli={{ file: "calligraphy-22.jpg", cls: "faint v-corner-br" }}
      eyebrow="Start a conversation"
      title="What are you trying<br/><em>to coordinate?</em>"
      body="Are you building an event, company gathering, transformation programme, member network, civic process, community, partnership, or ecosystem where the right conversations matter? Start with a conversation. That seems appropriate."
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   1V. VISION
   ==================================================================== */
const PageVision = () => (
  <>
    {/* 2.1 Hero */}
    <HeroLight
      eyebrow="Vision"
      title='Humans and AI,<br/><em>wiser together.</em>'
      sub="The Coherence Company exists to help people, organisations, communities, and AI Guides become more capable together. The next chapter of AI should not only make individuals faster — it should help groups listen better, make sense of complexity, build trust, and turn good intentions into action."
      primaryCTA={{ label: "Explore Coherence Conversations", href: "coherenceconversations.html" }}
      secondaryCTA={{ label: "Join the Build", href: "join.html" }}
      meta={["Collaboration infrastructure for the AI age", "Building in public", "Remote · global"]}
      calli="calligraphy-24.jpg"
    />

    {/* 2.2 The missing layer is coordination */}
    <Section tone="white" calli={{ file: "calligraphy-01.jpg", cls: "v-edge-left" }}>
      <SectionHead
        eyebrow="The missing layer"
        title="The missing layer is <em>coordination.</em>"
        dek="We live in an age of extraordinary communication. A message can cross the planet instantly. A hundred people can gather on a call in a day. A community can form around an idea before any institution notices it exists. And still, collaboration remains strangely hard."
      />
      <div className="two-col">
        <div>
          <p>Communication, connection, and computation have scaled — but our ability to coordinate human effort has not kept pace. The result is fragmentation at the very moment when working together well has become essential.</p>
          <p>People can meet, but not know how to build trust. Teams can talk, but lose shared context. Networks can grow, but fail to become useful. Civic groups can gather concern, but struggle to create action. Organisations can collect feedback, but still fail to hear themselves.</p>
        </div>
        <div>
          <p>The missing layer is not another communication tool.</p>
          <p>It is coordination infrastructure: the practices, AI Guides, shared memory, sensemaking, trust structures, and collaboration pathways that help groups move from first contact into meaningful action.</p>
        </div>
      </div>
    </Section>

    {/* 2.3 From intelligence to wisdom */}
    <Section tone="off">
      <SectionHead
        eyebrow="From intelligence to wisdom"
        title="What should AI <em>help us become?</em>"
        dek="Much of today's AI conversation focuses on intelligence: faster answers, cheaper production, more automation, higher individual productivity. These things matter. But intelligence alone is not the destination."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--ink-500)" }}>Intelligence</h4>
          <p>Faster answers, cheaper production, more automation, higher individual output. Useful, but not the point. Knowing more is not the same as relating, deciding, and coordinating well.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-800)" }}>Wisdom</h4>
          <p>Context, judgement, care, timing, responsibility, and the ability to act well inside complexity. Not just knowing more — relating better, deciding better, and coordinating action without losing sight of what matters.</p>
        </div>
      </div>
      <div className="manifesto">
        <p>We are not building merely better AI tools. We are defining a different model for how humans and AI collaborate at scale — one centred on trust, learning, empathy, and coordination rather than surveillance, automation, and centralised control. <em>Humans and AI, wiser together.</em></p>
      </div>
    </Section>

    {/* 2.4 AI as collaboration infrastructure */}
    <Section tone="white">
      <SectionHead
        eyebrow="Collaboration infrastructure"
        title="AI should help groups <em>think together.</em>"
        dek="The first wave of AI has largely been aimed at the individual: write faster, code faster, summarise faster, produce faster. Useful, certainly. But the larger opportunity is collective. AI Guides can help groups do what no individual tool can."
      />
      <ul className="trust-list">
        <li>Remember what has already been said</li>
        <li>Surface patterns across many voices</li>
        <li>Translate between different contexts</li>
        <li>Reveal shared questions and tensions</li>
        <li>Identify relevant relationships</li>
        <li>Support commitment and follow-through</li>
      </ul>
      <div className="manifesto">
        <p>This is AI as collaboration infrastructure. Not a control tower. Not a surveillance layer. Not a replacement for human judgement — <em>a support layer for collective intelligence.</em></p>
      </div>
    </Section>

    {/* 2.5 Coherence Conversations is the first product */}
    <Section tone="teal">
      <SectionHead
        eyebrow="The first product"
        title="The first doorway: <em>conversation.</em>"
        dek="The larger dream begins with something very old and very human. Conversation is where trust begins, context appears, and possibility becomes visible. In Coherence Conversations, people enter guided one-to-one dialogue — exploring what matters, why they are present, what they need, what they can offer, and who they may need to meet."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>People speak</h4><p>Guided one-to-one dialogue surfaces intent, context, needs, offers, and the people each person hopes to meet.</p></div>
        <div className="flow-step"><h4>AI Guides synthesise</h4><p>Conversations become shared themes, richer profiles, relevant matches, collective insight, and possible collaborations.</p></div>
        <div className="flow-step"><h4>Groups act</h4><p>Commitments and next steps emerge — practical, simple, and usable today across events, organisations, networks, and civic ecosystems.</p></div>
      </div>
      <div className="manifesto">
        <p>Coherence Conversations is not the whole company. <em>It is the first doorway into a larger architecture.</em></p>
      </div>
    </Section>

    {/* 2.6 The Coherence Journey */}
    <Section id="journey" tone="white" calli={{ file: "calligraphy-32.jpg", cls: "subtle v-wide-top" }}>
      <SectionHead
        eyebrow="The Coherence Journey"
        title="From connection <em>to action.</em>"
        dek="The Coherence Journey is our map for how groups become capable together. Not a single platform or method, but a shared vocabulary for practitioners, tool builders, and communities — including the fragile middle where many collaborations die, between 'nice to meet you' and 'we are actually doing this together.'"
      />
      <JourneyTrack steps={[
        { name: "Discover", note: "Who is here? What matters? What is alive in the field?" },
        { name: "Connect",  note: "Who should meet whom? Where is there trust, relevance, or shared possibility?" },
        { name: "Converge", note: "What patterns, questions, and tensions are becoming clear?", highlight: true },
        { name: "Seed",     note: "What commitments, experiments, roles, or collaborations are ready to form?" },
        { name: "Build",    note: "What support, rhythm, memory, and accountability help the work continue?" },
      ]} />
    </Section>

    {/* 2.7 Agency at the edge */}
    <Section tone="off" calli={{ file: "calligraphy-03.jpg", cls: "faint v-corner-bl" }}>
      <SectionHead
        eyebrow="Agency at the edge"
        title="More people should be <em>able to act.</em>"
        dek="The bigger dream is not only better collaboration for people who already have power, capital, and institutional access. People often care deeply, see clearly, and hold useful knowledge — but lack the infrastructure to find others, understand the wider context, and act together."
      />
      <ul className="trust-list">
        <li>See the field more clearly</li>
        <li>Find others who care</li>
        <li>Understand shared context</li>
        <li>Form trust</li>
        <li>Coordinate action</li>
        <li>Learn from what happens</li>
      </ul>
      <div className="manifesto">
        <p>Our role is not to define everyone's agenda — that would be the old control pattern in softer clothes. <em>Agency is care becoming capable.</em> That is the deeper promise of coherence.</p>
      </div>
    </Section>

    {/* 2.8 The company as proof */}
    <Section tone="teal">
      <SectionHead
        eyebrow="The company as proof"
        title="The how is part of <em>the why.</em>"
        dek="We cannot sell collaboration while operating through confusion. We cannot speak about trust and then build through extraction. The company itself must become an early proof of the thesis: the product emerges from the kind of company being built."
      />
      <ul className="trust-list">
        <li>Commercially serious</li>
        <li>Globally distributed</li>
        <li>Humane without becoming vague</li>
        <li>Values-led without becoming naïve</li>
        <li>AI-native without becoming less human</li>
        <li>Disciplined without becoming extractive</li>
        <li>Open enough to invite contribution</li>
        <li>Clear enough to produce real work</li>
      </ul>
    </Section>

    {/* 2.9 A public field for wiser AI */}
    <Section tone="white">
      <SectionHead
        eyebrow="A public field for wiser AI"
        title="We cannot build <em>this alone.</em>"
        dek="The future of AI is not already decided. Our work sits inside a wider field of builders, researchers, organisers, artists, technologists, facilitators, civic practitioners, funders, and communities asking what AI could become if it were designed for wisdom rather than domination."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--ink-500)" }}>One path</h4>
          <p>Surveillance, extraction, manipulation, and centralised control. The default trajectory if no one builds an alternative.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-800)" }}>Another path</h4>
          <p>Collaboration, learning, agency, regeneration, and wiser social systems. This path will not be built by one company acting alone. Public voice, shared learning, and field-building are strategic infrastructure, not decoration.</p>
        </div>
      </div>
      <div className="manifesto">
        <p>The aim is not "look at us." <em>The aim is "look at what becomes possible."</em></p>
      </div>
    </Section>

    {/* 2.10 Three horizons of the dream */}
    <Section tone="off">
      <SectionHead
        eyebrow="Three horizons"
        title="The dream <em>needs rails.</em>"
        dek="A large vision is useful only if it helps us act. The Coherence Company needs wings and landing gear — a larger narrative brings the right people, capital, and partners into the room, but the danger is letting the dream replace movement. So we hold the work in three horizons."
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Horizon 1 · Coherence Conversations",
          body: "Our first product. Guided dialogue becomes sensemaking, matchmaking, and practical next steps for events, organisations, networks, and civic ecosystems. The wedge: concrete, testable, useful now." },
        { num: "02", title: "Horizon 2 · AI Guides for the full journey",
          body: "AI Guides help groups move through discovery, connection, convergence, seeding, building, and follow-through — expanding Coherence from a conversation product into a repeatable collaboration layer." },
        { num: "03", title: "Horizon 3 · A wider coherence ecosystem",
          body: "Personal and group Coherence accounts. Shared memory across contexts. Agent-to-agent collaboration. Trust, consent, and identity protocols. A venture family and partner ecosystem. The North Star." },
      ]} />
    </Section>

    {/* 2.11 What we will not become */}
    <Section tone="white">
      <SectionHead
        eyebrow="Clear centre, open edges"
        title="What we <em>will not become.</em>"
        dek="Ambition needs boundaries. We are building infrastructure for coherence — clear purpose, open participation, strong trust design, practical products, and deep respect for human agency."
      />
      <ul className="trust-list">
        <li>Not AI to replace human judgement</li>
        <li>Not surveillance infrastructure</li>
        <li>Not a content company competing with the facilitators and partners we serve</li>
        <li>Not another platform that captures relationships and calls it community</li>
        <li>Not a productivity wrapper for isolated individuals</li>
        <li>Not a closed ideology with software attached</li>
      </ul>
      <div className="manifesto">
        <p>Coherence is not sameness. <em>It is the capacity to work across difference without fragmentation.</em></p>
      </div>
    </Section>

    {/* 2.12 Invitation */}
    <Section tone="ink" calli={{ file: "calligraphy-07.jpg", cls: "on-dark v-full" }}>
      <SectionHead
        eyebrow="Invitation"
        title="Help build <em>what comes next.</em>"
        dek="The future of AI will be shaped by the people willing to build alternatives. We are looking for product builders, engineers, designers, facilitators, organisers, investors, researchers, writers, civic practitioners, community builders, and anyone who has seen the cost of poor coordination from the inside. The door is a conversation. That feels right."
      />
      <div style={{ marginTop: 40 }}>
        <a className="btn btn-accent btn-lg" href="join.html">Join the Build <Icon name="arrow-right" /></a>
      </div>
    </Section>

    <CTABand
      calli={{ file: "calligraphy-26.jpg", cls: "faint v-corner-bl" }}
      eyebrow="Start a conversation"
      title="The door is <em>a conversation.</em>"
      body="Whether you want to join the build, pilot Coherence Conversations, partner, or invest — the best next step is the same."
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   1C. COHERENCE CONVERSATIONS (main product page)
   ==================================================================== */
const PageConversations = () => (
  <>
    {/* 3.1 Hero */}
    <HeroLight
      eyebrow="The first product · Coherence Conversations"
      title='Dialogue that becomes <em>sensemaking matchmaking &amp; action</em>'
      sub="Coherence Conversations turns guided one-to-one dialogue into shared intelligence, relevant connections, and practical next steps. People speak with each other; AI Guides help reveal the patterns, themes, needs, offers, and matches emerging across those conversations; hosts receive a clearer view of the human field they are convening."
      primaryCTA={{ label: "Start a Conversation", href: "start.html" }}
      secondaryCTA={{ label: "Explore Use Cases", href: "who-for.html" }}
      meta={["Pilots open", "Consent-based", "Designed with hosts"]}
      calli="calligraphy-28.jpg"
    />

    {/* 3.G Visual flow */}
    <Section tone="white">
      <SectionHead
        eyebrow="The flow"
        title="From a single conversation to <em>shared intelligence.</em>"
        dek="Better conversations before the moment that matters, and better coordination after it."
      />
      <JourneyTrack steps={[
        { name: "Invite",       note: "People are invited into guided one-to-one dialogue." },
        { name: "Converse",     note: "Structured prompts surface intent, needs, offers, and questions." },
        { name: "Synthesise",   note: "AI Guides reveal themes, patterns, and matches.", highlight: true },
        { name: "Profile",      note: "Richer profiles and reflections for each participant." },
        { name: "Match",        note: "Relevant introductions, not random proximity." },
        { name: "Act",          note: "Practical next steps, commitments, and follow-through." },
      ]} />
    </Section>

    {/* 3.2 What it is */}
    <Section tone="off" calli={{ file: "calligraphy-34.jpg", cls: "faint v-corner-br" }}>
      <SectionHead
        eyebrow="What it is"
        title="A guided dialogue format for groups that need <em>more than attendance.</em>"
        dek="Instead of asking people to fill out another profile, survey, or networking form, Coherence Conversations starts with something more natural: a meaningful conversation that helps people discover one another, clarify why they are present, and connect around real possibilities for action."
      />
      <ul className="trust-list">
        <li>What they care about</li>
        <li>Why they are showing up</li>
        <li>What they are working on</li>
        <li>What they need</li>
        <li>What they can offer</li>
        <li>Who they may want to meet</li>
        <li>What questions or possibilities they are holding</li>
      </ul>
      <div className="manifesto">
        <p>Coherence Conversations begins with one-to-one dialogue, but its purpose is <em>collective intelligence.</em> A conversation is the doorway. Coherence is what becomes possible beyond it.</p>
      </div>
    </Section>

    {/* 3.3 Why it matters */}
    <Section tone="white" calli={{ file: "calligraphy-35.jpg", cls: "v-edge-right" }}>
      <SectionHead
        eyebrow="Why start with conversation"
        title="Because conversation is where <em>trust begins.</em>"
        dek="Most coordination tools assume the important work has already happened — that people know what they want, who to speak to, what they can offer, and how to move together. Often, they do not."
      />
      <div className="two-col">
        <div>
          <p>Events bring valuable people into a room, but leave too many important encounters to chance. Organisations ask for feedback, but rarely create enough trust for people to speak honestly.</p>
          <p>Networks gather members, but do not always know what members care about or who should meet whom. Civic processes invite participation, but struggle to turn scattered concern into shared priorities and action.</p>
        </div>
        <div>
          <p>Communication and connection have scaled, but human coordination has not kept pace. The fragile middle between "nice to meet you" and "we are building together" remains under-supported.</p>
          <p>Coherence Conversations works in that middle — helping groups move from presence to relationship, from relationship to insight, and from insight to action.</p>
        </div>
      </div>
    </Section>

    {/* 3.4 How it works */}
    <Section tone="off">
      <SectionHead
        eyebrow="How it works"
        title="Six movements, <em>before or inside the moment.</em>"
        dek="Coherence Conversations can be used before an event, inside an organisation, across a network, or within a civic process. The basic flow is simple."
      />
      <Timeline steps={[
        { title: "Invite people into guided dialogue",
          body: "Structured one-to-one conversations with prompts that go beyond small talk without becoming heavy or artificial — context, intentions, questions, needs, offers, and possible directions." },
        { title: "Capture the meaning, not just the transcript",
          body: "The conversation is treated as a human exchange with consent and purpose. AI Guides identify what matters: themes, intentions, connections, useful signals, and follow-up opportunities." },
        { title: "Generate participant insight",
          body: "Each participant can receive a richer profile or reflection — their interests, current work, questions, offers, collaboration needs, and suggested ways to connect." },
        { title: "Reveal group-level patterns",
          body: "Across many conversations, AI Guides surface what is emerging: common themes, shared concerns, demand signals, collaboration opportunities, and clusters of interest." },
        { title: "Suggest relevant matches",
          body: "The goal is not generic networking. It is relevance — connecting people whose intentions, needs, offers, experience, timing, or questions make a conversation genuinely useful." },
        { title: "Support next steps",
          body: "Coherence Conversations should not end with 'that was nice.' It helps identify people to meet, questions to explore, commitments to remember, and opportunities to carry forward." },
      ]} />
    </Section>

    {/* 3.5 What AI Guides do */}
    <Section tone="teal">
      <SectionHead
        eyebrow="AI Guides"
        title="AI Guides are not the centre. <em>People are.</em>"
        dek="The Guides support the human process — memory, synthesis, pattern recognition, matchmaking, and follow-through. They help participants prepare and reflect, and help hosts see what is emerging across many conversations without flattening everyone into a simplistic survey result."
      />
      <ul className="trust-list">
        <li>Conversation preparation</li>
        <li>Prompt design</li>
        <li>Profile generation</li>
        <li>Theme detection</li>
        <li>Pattern recognition</li>
        <li>Relevant introductions</li>
        <li>Commitment capture</li>
        <li>Follow-up suggestions</li>
        <li>Group-level synthesis</li>
      </ul>
      <div className="manifesto">
        <p>A spreadsheet can store names. A directory can list members. A chatbot can answer questions. <em>Coherence Conversations helps a group begin to understand itself.</em></p>
      </div>
    </Section>

    {/* 3.6 What participants experience */}
    <Section tone="white">
      <SectionHead
        eyebrow="Participant experience"
        title="A conversation that is <em>useful in itself.</em>"
        dek="Participants are not just feeding a platform. They are meeting another person, clarifying their own intentions, and becoming more visible to the group. A participant may come away with clarity, a richer profile, useful reflections, suggested people to meet, shared themes, possible collaborations, and practical next steps."
      />
      <CardGrid cols={4} items={[
        { icon: "calendar", title: "For an event participant",
          body: "Arriving with more context and warmer connections already forming, instead of starting cold." },
        { icon: "building-2", title: "For an employee",
          body: "Being heard in a more human way than a survey allows, with room for nuance and honesty." },
        { icon: "users", title: "For a network member",
          body: "Finding relevant peers, collaborators, mentors, partners, or shared questions across the community." },
        { icon: "globe", title: "For a citizen",
          body: "Seeing that their concern may be part of a wider pattern — and that others may be ready to act." },
      ]} />
      <div className="manifesto">
        <p>No forced networking theatre. No dead profile form. <em>Just a better way to begin.</em></p>
      </div>
    </Section>

    {/* 3.7 What hosts receive */}
    <Section tone="off" calli={{ file: "calligraphy-30.jpg", cls: "faint v-corner-bl" }}>
      <SectionHead
        eyebrow="Host experience"
        title="A clearer view of the people and <em>possibilities in your field.</em>"
        dek="Depending on the context, hosts receive a synthesis of who is present and what is emerging — built from guided conversation rather than static self-description."
      />
      <CardGrid cols={3} items={[
        { icon: "user-check", title: "Participant profiles",
          body: "Richer, more human profiles based on guided conversation rather than static self-description." },
        { icon: "git-merge", title: "Themes and patterns",
          body: "A synthesis of what participants care about, which questions recur, and where energy is gathering." },
        { icon: "shuffle", title: "Matchmaking insight",
          body: "Suggested introductions based on relevance, not random proximity or shallow tags." },
        { icon: "target", title: "Needs and offers",
          body: "A clearer map of what people are looking for and what they can contribute." },
        { icon: "bar-chart-3", title: "Demand intelligence",
          body: "Insight into what the group actually wants or needs before a gathering or programme begins." },
        { icon: "arrow-right-circle", title: "Follow-up opportunities",
          body: "A view of possible collaborations, commitments, next steps, and where further facilitation may help." },
      ]} />
    </Section>

    {/* 3.8 Core outputs · three layers of value */}
    <Section tone="white">
      <SectionHead
        eyebrow="Core outputs"
        title="Three layers of value, <em>from one conversation.</em>"
        dek="The exact outputs depend on the use case, but the core product generates value at the level of the individual, the relationship, and the group — with host-level synthesis on top."
      />
      <JourneyTrack steps={[
        { name: "Individual clarity",     note: "Reflections, richer profiles, personal themes, suggested next steps." },
        { name: "Relationship relevance", note: "Relevant matches, intro prompts, complementary needs and offers.", highlight: true },
        { name: "Group intelligence",     note: "Emerging themes, shared questions, tensions, clusters, demand signals." },
      ]} />
      <div style={{ marginTop: 48 }}>
        <CardGrid cols={2} items={[
          { num: "01", title: "Host outputs",
            body: "Participant intelligence, matchmaking maps, programme insights, communication assets, follow-up opportunities, and reporting for sponsors, leaders, partners, or civic stakeholders." },
          { num: "02", title: "Future outputs",
            body: "Over time, part of a larger Coherence layer: shared memory, commitment tracking, group profiles, personal Coherence accounts, and AI Guides that support more of the Coherence Journey." },
        ]} />
      </div>
    </Section>

    {/* 3.9 Use cases */}
    <Section tone="off">
      <SectionHead
        eyebrow="Use cases"
        title="Wherever people need to become <em>more capable together.</em>"
      />
      <CardGrid cols={2} items={[
        { icon: "calendar", title: "Events",
          body: "Conferences, summits, retreats, investor gatherings, and ecosystem convenings. Participants arrive with clearer intentions; organisers understand what the audience cares about before the room opens.",
          link: { label: "For event organisers", href: "who-for-events.html" } },
        { icon: "building-2", title: "Organisations",
          body: "Culture transformation, AI adoption, leadership development, and employee voice. Surfaces real intelligence across the organisation — handled with the care that trust-sensitive work requires.",
          link: { label: "For companies", href: "who-for-companies.html" } },
        { icon: "users", title: "Networks & communities",
          body: "Associations, founder communities, investor circles, and alumni networks. Helps members feel heard, discover one another, and move from passive membership into meaningful participation.",
          link: { label: "For networks", href: "who-for-networks.html" } },
        { icon: "globe", title: "Civic & civil society",
          body: "Municipalities, coalitions, NGOs, and foundations. Helps communities listen to themselves and act — making participation more continuous and useful between elections.",
          link: { label: "For civic ecosystems", href: "who-for-civic.html" } },
      ]} />
    </Section>

    {/* 3.10 Trust, privacy, and consent */}
    <Section tone="ink" calli={{ file: "calligraphy-30.jpg", cls: "on-dark v-corner-bl" }}>
      <SectionHead
        eyebrow="Trust, privacy, and consent"
        title="Trust is not a feature. <em>It is the foundation.</em>"
        dek="Coherence Conversations works with human voice, context, relationships, and group-level insight. That means trust, privacy, and consent cannot be afterthoughts — they shape the product from the beginning. People need to know:"
      />
      <ul className="trust-list">
        <li>Why they are being invited</li>
        <li>What will be recorded or captured</li>
        <li>How their words will be used</li>
        <li>What is private and what may be shared</li>
        <li>What hosts will see</li>
        <li>How AI Guides are involved</li>
        <li>How they can opt out or correct information</li>
        <li>What boundaries protect them from misuse</li>
      </ul>
    </Section>

    {/* 3.11 Why this is different */}
    <Section tone="white">
      <SectionHead
        eyebrow="Why this is different"
        title="Beyond surveys, networking apps, <em>and meeting notes.</em>"
        dek="Coherence Conversations is not just another form, chatbot, survey, networking app, or transcription tool."
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "More human than a survey",
          body: "Surveys flatten people into predefined questions. Coherence Conversations allows nuance, story, emotion, context, contradiction, and surprise." },
        { num: "02", title: "More intentional than networking",
          body: "Networking depends on luck, status, or whoever stands near the coffee. Coherence Conversations helps people find relevance before the room becomes noisy." },
        { num: "03", title: "More collective than meeting intelligence",
          body: "Most meeting tools summarise individual calls. Coherence Conversations reveals patterns across many conversations — local dialogue becomes group-level insight." },
        { num: "04", title: "More action-oriented than discussion",
          body: "Many communities can talk forever without moving. Coherence Conversations surfaces next steps, possible matches, and commitments." },
        { num: "05", title: "More trustworthy than extraction",
          body: "The purpose is not to mine conversation for hidden control. It is to help people and groups see themselves clearly, connect intelligently, and act with shared context." },
      ]} />
    </Section>

    {/* 3.12 How it fits the bigger vision */}
    <Section tone="teal">
      <SectionHead
        eyebrow="The bigger vision"
        title="The first product, <em>not the final horizon.</em>"
        dek="Coherence Conversations is the wedge, not the whole company. The Coherence Company is building towards collaboration infrastructure for the AI age: conversations, AI Guides, practices, shared memory, protocols, and future products that help groups move through the full Coherence Journey."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>Today</h4><p>We begin with guided conversations — the most human doorway into trust.</p></div>
        <div className="flow-step"><h4>Next</h4><p>AI Guides support more of the journey: discovery, connection, convergence, seeding, building, and follow-through.</p></div>
        <div className="flow-step"><h4>Later</h4><p>A wider coherence ecosystem: personal and group accounts, shared memory, agent-to-agent collaboration, and trust protocols.</p></div>
      </div>
      <div style={{ marginTop: 40 }}>
        <a className="btn btn-secondary" href="vision.html">Read the full vision <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* 3.13 Start with a pilot */}
    <Section tone="white">
      <SectionHead
        eyebrow="Start with a pilot"
        title="Where could this <em>help your group?</em>"
        dek="Coherence Conversations is best tested where the need for meaningful connection is already visible — a purpose-driven event, a leadership retreat, an AI adoption programme, a member network, a civic listening process, or a coalition trying to move from concern to action."
      />
      <FitCompare
        strong={[
          "A clear host or steward",
          "A defined participant group",
          "A meaningful reason to connect",
          "Enough trust to invite honest participation",
          "A real need for sensemaking or matchmaking",
          "Willingness to act on what emerges",
        ]}
        poor={[
          "No one accountable for follow-through",
          "Participation with no real reason to connect",
          "Contexts where honest dialogue is unsafe",
          "Groups unwilling to act on what surfaces",
        ]}
      />
      <div className="manifesto">
        <p>The first step is not a demo theatre ritual. <em>The first step is a conversation about what you are trying to coordinate.</em></p>
      </div>
    </Section>

    <CTABand
      calli={{ file: "calligraphy-24.jpg", cls: "faint v-corner-br" }}
      eyebrow="Start a conversation"
      title="What are you trying <em>to coordinate?</em>"
      body="Tell us about your event, organisation, network, or civic process — and we'll suggest the most relevant next step."
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
    {/* 2.1 Hero */}
    <HeroLight
      eyebrow="Who it's for"
      title='Different groups.<br/><em>Same coordination gap.</em>'
      sub="Coherence Conversations helps people who bring others together turn dialogue into shared intelligence, relevant connections, and coordinated action. The contexts vary — an event, a company, a member network, a civic process — but the pattern is often the same."
      primaryCTA={{ label: "Find Your Context", href: "#find-context" }}
      secondaryCTA={{ label: "Start a Conversation", href: "start.html" }}
      meta={["Events · Organisations · Networks · Civic"]}
      calli="calligraphy-25.jpg"
    />

    {/* 2.2 Shared Problem */}
    <Section tone="white" calli={{ file: "calligraphy-03.jpg", cls: "v-edge-left" }}>
      <SectionHead
        eyebrow="The shared problem"
        title="Why do good groups <em>still get stuck?</em>"
        dek="Most groups do not fail because nobody cares. They fail because care does not automatically become coordination."
      />
      <div className="two-col">
        <div>
          <p>People arrive with questions, projects, needs, experience, frustration, hope, and goodwill. But the system around them often does not help them see one another clearly enough to act.</p>
          <p>An event may have the right people in the room, but the wrong conversations happen. A company may have deep internal intelligence, but only hear the safest voices.</p>
        </div>
        <div>
          <p>A network may have valuable members, but no living sense of what the membership knows, needs, or could do together. A civic ecosystem may have public concern and local capacity, but weak pathways from voice to priority, from priority to action.</p>
          <p>The shared challenge is not simply engagement. It is turning scattered human intelligence into visible patterns, useful relationships, and practical movement.</p>
        </div>
      </div>
    </Section>

    {/* 2.3 Four First Markets */}
    <Section tone="off" calli={{ file: "calligraphy-10.jpg", cls: "faint v-corner-br" }}>
      <SectionHead
        eyebrow="Four first markets"
        title="Where coherence <em>begins.</em>"
        dek="Each one has a clear coordination gap. Each one already gathers people with shared context or shared purpose. Each one needs better sensemaking, matchmaking, and follow-through."
      />
      <CardGrid cols={2} items={[
        { icon: "calendar", title: "Purpose-driven event organisers",
          body: "From scheduled programme to activated human network. For conferences, summits, retreats, investor gatherings, and high-intent events where the real value is who meets whom and what becomes possible — before the room even opens.",
          link: { label: "Explore Coherence for Events", href: "who-for-events.html" } },
        { icon: "building-2", title: "Companies and organisational transformation",
          body: "From employee voice to organisational intelligence. For companies, HR leaders, and transformation teams that need to hear more of the organisation's real intelligence — safely and usefully.",
          link: { label: "Explore Coherence for Organisations", href: "who-for-companies.html" } },
        { icon: "users", title: "Networks and professional communities",
          body: "From member list to living network. For associations, founder communities, alumni networks, and curated communities that already gather valuable people but struggle to activate the intelligence between them.",
          link: { label: "Explore Coherence for Networks", href: "who-for-networks.html" } },
        { icon: "globe", title: "Civic and civil society ecosystems",
          body: "From scattered concern to civic action. For municipalities, NGOs, foundations, and civic movements trying to turn participation into structured understanding, visible accountability, and practical local action.",
          link: { label: "Explore Coherence for Civic Ecosystems", href: "who-for-civic.html" } },
      ]} />
    </Section>

    {/* 2.4 Common Journey */}
    <Section tone="teal" calli={{ file: "calligraphy-33.jpg", cls: "subtle v-wide-top" }}>
      <SectionHead
        eyebrow="The Coherence Journey"
        title="Different contexts, <em>one shared movement.</em>"
        dek="Events, organisations, networks, and civic ecosystems are different worlds. But the movement they need is strikingly similar."
      />
      <JourneyTrack steps={[
        { name: "Discover", note: "Who is here? What matters? What is alive in this field?" },
        { name: "Connect",  note: "Who should meet whom? Where is there relevance or complementary capacity?" },
        { name: "Converge", note: "What patterns, themes, needs, and possibilities are becoming visible?", highlight: true },
        { name: "Seed",     note: "What commitments, experiments, working groups, or next steps are ready to form?" },
        { name: "Build",    note: "How do we sustain action, learning, memory, and accountability?" },
      ]} />
      <div className="manifesto">
        <p>Coherence Conversations begins with dialogue, but the aim is not conversation for its own sake. <em>The aim is to help groups move from connection to action.</em></p>
      </div>
    </Section>

    {/* 2.5 Which context is yours */}
    <Section id="find-context" tone="white">
      <SectionHead
        eyebrow="Find your context"
        title="Where are you trying to <em>create movement?</em>"
        dek="Choose the path that best describes your current challenge."
      />
      <div className="routing-list">
        <a className="routing-card" href="who-for-events.html">
          <span className="routing-q">You are organising a gathering — a conference, summit, retreat, or high-intent event — and need participants to arrive prepared, meet more intelligently, and leave with relationships that continue.</span>
          <span className="routing-a">Purpose-driven event organisers <Icon name="arrow-right" /></span>
        </a>
        <a className="routing-card" href="who-for-companies.html">
          <span className="routing-q">You are leading change inside an organisation — culture, transformation, AI adoption, leadership — and need to hear more of the organisation's real intelligence, safely and usefully.</span>
          <span className="routing-a">Companies and organisational transformation <Icon name="arrow-right" /></span>
        </a>
        <a className="routing-card" href="who-for-networks.html">
          <span className="routing-q">You steward a network or community with members, goodwill, and shared purpose — but engagement is uneven, and members are not finding one another or acting together.</span>
          <span className="routing-a">Networks and professional communities <Icon name="arrow-right" /></span>
        </a>
        <a className="routing-card" href="who-for-civic.html">
          <span className="routing-q">You are part of a municipality, civic coalition, foundation, NGO, or community movement that needs better listening, accountability, participation, and local action.</span>
          <span className="routing-a">Civic and civil society ecosystems <Icon name="arrow-right" /></span>
        </a>
      </div>
      <div className="manifesto" style={{ marginTop: 48 }}>
        <p>You do not fit neatly into one segment? Good. Reality often refuses tidy drawers. Start with the coordination challenge: what are you trying to bring together? What is stuck? Who needs to find whom? <em>What action is trying to form?</em></p>
      </div>
    </Section>

    {/* 2.6 Why this works across fields */}
    <Section tone="off">
      <SectionHead
        eyebrow="The common pattern"
        title="The same pattern <em>keeps appearing.</em>"
        dek="Coherence Conversations can serve different markets not because it tries to be everything to everyone — but because many groups face the same underlying coordination pattern. They already have people, knowledge, and care. What they lack is a reliable way to turn that into shared intelligence and action."
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Make people visible to one another",
          body: "Not as static profiles or database entries, but as humans with context, intentions, questions, needs, offers, and capacity." },
        { num: "02", title: "Make the field visible to itself",
          body: "Not as a pile of transcripts or survey charts, but as emerging themes, patterns, tensions, opportunities, and possible connections." },
        { num: "03", title: "Make next steps easier to form",
          body: "Not by forcing premature consensus, but by helping people see where action is ready: a meeting, working group, pilot, collaboration, or next conversation." },
      ]} />
    </Section>

    {/* 2.7 Pilot fit */}
    <Section tone="white">
      <SectionHead
        eyebrow="What we look for in a good pilot"
        title="Is this <em>a good fit?</em>"
        dek="Coherence Conversations is best tested where there is a real group, a real purpose, and a real need for sensemaking or matchmaking."
      />
      <FitCompare
        strong={[
          "A clear host, steward, organiser, or sponsor",
          "A defined participant group with enough shared context",
          "Enough trust to invite meaningful conversation",
          "A reason for people to connect now",
          "A need for insight, matching, or follow-through",
          "Willingness to learn from what emerges",
          "A practical next step after the conversations",
        ]}
        poor={[
          "A purely logistical event with no community ambition",
          "A company seeking surveillance disguised as listening",
          "A network with no real shared purpose",
          "A civic process designed only for appearances",
          "A host who wants participation but not consequences",
        ]}
      />
      <div className="manifesto">
        <p>Coherence Conversations works best when people genuinely want the intelligence of the group — <em>not just the optics of consultation.</em></p>
      </div>
    </Section>

    <CTABand
      calli={{ file: "calligraphy-27.jpg", cls: "faint v-corner-bl" }}
      eyebrow="Start a conversation"
      title="What are you trying <em>to coordinate?</em>"
      body="The first conversation is not about selling you software. It is about understanding the system you are trying to activate. Tell us what you are bringing together and we will suggest the most relevant next step."
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   2A. WHO FOR · Event Organisers
   ==================================================================== */
const SegmentHero = ({ eyebrow, title, sub, primaryCTA, calli = "calligraphy-26.jpg" }) => (
  <section className="page-hero">
    <div className="calli in-gradient"
      style={{ backgroundImage: `url('assets/backgrounds/${calli}')`,
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
      calli="calligraphy-26.jpg"
      eyebrow="Segment 2A · Event Organisers"
      title="Activate your participant network <em>before anyone enters the room.</em>"
      sub="For conferences, summits, retreats, and gatherings where the real value is not only content, but who meets whom and what becomes possible afterwards."
      primaryCTA={{ label: "Start a Pilot", href: "start.html" }}
    />

    <Section tone="white">
      <SectionHead
        eyebrow="Segment overview"
        title="For gatherings where <em>connection is the real value.</em>"
        dek="Coherence Conversations Event is built for gatherings where who meets whom is as important as what is said — and where the real work of connection begins before anyone enters the room."
      />
      <TagList items={[
        "Business conferences", "Industry summits", "Innovation gatherings",
        "Founder & investor events", "Professional conferences",
        "Leadership retreats", "Regenerative & ecosystem gatherings"
      ]} />
    </Section>

    <Section tone="off" calli={{ file: "calligraphy-35.jpg", cls: "faint v-corner-bl" }}>
      <SectionHead
        eyebrow="The problem"
        title="Events promise connection. Too often, <em>connection is left to chance.</em>"
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Weak pre-event engagement", body: "Participants arrive having done nothing to prepare for who else is in the room. A pre-event webinar with forty people is technically engagement — but it does not create relational energy." },
        { num: "02", title: "Generic participant profiles", body: "Short bios and job titles reveal almost nothing about what participants actually need, offer, or want to explore. Nobody fills in another form carefully." },
        { num: "03", title: "Missed high-value connections", body: "For large events, the probability of finding the right person becomes lottery-ticket level. That is a structural failure, not a UX inconvenience." },
        { num: "04", title: "Unsure who they should meet", body: "Participants scan a list of names with no way to judge relevance, and default to whoever is easiest to reach or already known." },
        { num: "05", title: "No insight into participant interests", body: "Organisers walk into the event knowing less about their audience than a short structured conversation round would reveal." },
        { num: "06", title: "Dead or transactional networking apps", body: "Most event networking tools are either unused or reduce connection to a badge-scan — without the context that makes an introduction worth having." },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="What we do"
        title="Pre-event network activation through <em>guided conversations.</em>"
        dek="Coherence Conversations Event helps participants have useful guided conversations before the event. AI-supported synthesis turns those into profiles, themes, matching signals, and event-level insight."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>Guided conversations</h4><p>Participants receive guided prompts — not another form to fill in, but a conversation worth having. They surface intent, context, expertise, and what they most hope the gathering makes possible.</p></div>
        <div className="flow-step"><h4>Synthesis & matching</h4><p>AI-supported synthesis turns many individual conversations into patterns: shared themes, relevant matches, offers, needs, and collective intelligence the organiser can actually use.</p></div>
        <div className="flow-step"><h4>Insight to organisers</h4><p>Organisers receive a clear picture of the field before the doors open — what participants care about, who should meet whom, and where the most generative moments might happen.</p></div>
      </div>
    </Section>

    <Section tone="teal">
      <SectionHead
        eyebrow="Benefits for organisers"
        title="More insight, more relevance, <em>more value from the same room.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "trending-up", title: "Stronger pre-event engagement", body: "Guided conversations give participants a reason to engage before the event opens. Unlike a webinar or a poll, the conversation itself is worth having." },
        { icon: "users-round", title: "Better participant matching", body: "Matches are built from real context — what someone is actually working on, seeking, or offering — not just a job title and a headshot." },
        { icon: "bar-chart-3", title: "Richer audience intelligence", body: "Organisers gain demand intelligence for live curation: what participants actually care about, in time to shape the programme around it." },
        { icon: "mic", title: "More authentic event content", body: "Participants talking about why they are attending creates far more useful pre-event signal than generic reposts of event marketing." },
        { icon: "handshake", title: "Improved sponsor value", body: "Clearer audience insight means sponsors can see real relevance — not just attendance numbers, but who is in the room and what they are there for." },
        { icon: "smile", title: "Higher participant satisfaction", body: "Participants who arrive with shared context and a short list of people worth meeting leave with more to show for the time they invested." },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Benefits for participants"
        title="Less random networking. <em>More useful connection.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "compass", title: "Clarify their intention before the event", body: "A guided conversation helps participants name what they are actually there for — not just the topic, but the specific conversation, person, or outcome they are hoping to find." },
        { icon: "search", title: "Discover relevant people earlier", body: "AI-supported synthesis surfaces people worth meeting based on real intent, shared context, and complementary needs or offers — not just titles." },
        { icon: "message-circle", title: "Move beyond first-contact small talk", body: "With shared context established before the event, conversations can begin at second- or third-conversation depth — no credentials exchange, no wasted first hour." },
        { icon: "user-check", title: "Build visibility through better profiles", body: "Profiles built from conversation give other participants a real reason to reach out — and a clearer basis for the first conversation." },
        { icon: "clock", title: "Use event time more intelligently", body: "Arriving with a short list of relevant people and questions turns event time from luck into intention." },
        { icon: "arrow-right-circle", title: "Stronger follow-up pathways", body: "Context established before the event creates a thread worth continuing — rather than a business card in a pile and a fading memory." },
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
        { title: "Event discovery",          body: "A focused conversation to understand your gathering, your participant cohort, your goals, and where the connection layer currently fails." },
        { title: "Participant journey design", body: "We design the pre-event arc: what participants are invited to do, when, and how — shaped around your event's timeline and audience." },
        { title: "Conversation design",      body: "We build the guided conversation prompts tailored to your cohort — what they are likely holding, what you want the field to reveal." },
        { title: "Pre-event activation",     body: "Participants receive a clear, consent-based invitation to a conversation they can complete in under twenty minutes — on their own time, before the event opens." },
        { title: "AI-supported synthesis",   body: "We synthesise the field and prepare host-facing insight: themes, matches, emerging questions, and a picture of who is actually in the room." },
        { title: "Event support",            body: "We stay close through the event — available to hosts, responsive to what the field reveals, ready to surface patterns as the gathering unfolds." },
        { title: "Post-event learning report", body: "A structured debrief on what worked, what the field revealed, and what a next iteration could test." },
      ]} />
    </Section>

    <CTABand
      calli={{ file: "calligraphy-28.jpg", cls: "faint v-corner-br" }}
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
      calli="calligraphy-27.jpg"
      eyebrow="Segment 2B · Companies & AI-Native Organisations"
      title="Use company gatherings to create <em>real alignment</em> before people enter the room."
      sub="Coherence Conversations Event helps teams clarify context, surface priorities, build trust, and arrive at offsites, onboarding moments, and strategy sessions ready for better decisions and deeper collaboration."
      primaryCTA={{ label: "Start a Conversation", href: "start.html" }}
    />

    <Section tone="white">
      <SectionHead
        eyebrow="Segment overview"
        title="For organisations trying to <em>coordinate across complexity.</em>"
        dek="Coherence Conversations Event helps companies prepare their people to gather well — surfacing context, priorities, tensions, and trust before the live moment has to carry all of it."
      />
      <TagList items={[
        "Distributed teams", "AI-native startups", "Fractional organisations",
        "Purpose-led companies", "Founder teams", "Project-based teams",
        "Organisations preparing for change or growth"
      ]} />
    </Section>

    <Section tone="off" calli={{ file: "calligraphy-22.jpg", cls: "faint v-corner-br" }}>
      <SectionHead
        eyebrow="The problem"
        title="Most company gatherings <em>start too late.</em>"
        dek="Offsites, onboarding sessions, and strategy gatherings often begin with people carrying unspoken assumptions, unclear priorities, uneven context, and hidden tensions. The live moment is then forced to do too much."
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Different assumptions on arrival", body: "When team members enter the room holding different versions of the situation, the first day is spent discovering that — not making progress." },
        { num: "02", title: "Tensions discovered too late", body: "Unspoken friction surfaces in the room when there is no time to address it carefully, leading to sessions that stall or close prematurely." },
        { num: "03", title: "Onboarding is context-light", body: "New contributors often arrive without a clear picture of what the company is actually holding, creating a slow and costly orientation period." },
        { num: "04", title: "Strategy without shared field awareness", body: "Strategy conversations produce better outcomes when participants have already shared what they are seeing, what they doubt, and where they feel energy or concern." },
        { num: "05", title: "Lost trust between distributed gatherings", body: "In distributed teams, connection erodes between live moments. The rare gathering is then asked to repair as well as progress." },
        { num: "06", title: "AI used individually, not collectively", body: "Most AI use in companies is individual. The opportunity to use AI to support shared memory, synthesis, and orientation remains largely untouched." },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="What we help with"
        title="Prepare the human field <em>before the company gathers.</em>"
        dek="Coherence Conversations Event helps company participants clarify what they are holding, what they need, what they see, and where they feel energy or tension — before the live gathering begins."
      />
      <CardGrid cols={3} items={[
        { icon: "calendar", title: "Pre-offsite conversations", body: "Guided conversations before an offsite help participants surface what they are holding, what they need from the gathering, and where they feel energy or tension." },
        { icon: "user-plus", title: "Onboarding conversations", body: "A structured conversation before a new contributor's first week surfaces context, culture, and connection — reducing the time it takes to feel genuinely oriented." },
        { icon: "target", title: "Mission alignment dialogues", body: "Guided conversations help teams explore whether they share a real understanding of the mission — and where the gaps, doubts, or divergences sit." },
        { icon: "layers", title: "Team sensemaking", body: "AI-supported synthesis helps teams see the patterns across individual perspectives — surfacing shared concerns, emerging priorities, and overlooked tensions." },
        { icon: "git-branch", title: "Priority & tension mapping", body: "Before a strategy session, a guided conversation round helps map where priorities converge, where they conflict, and what needs to be named before the live discussion begins." },
        { icon: "arrow-right-circle", title: "Follow-through pathways", body: "After a gathering, guided conversation rounds help teams maintain connection, track commitments, and surface what has shifted since the room closed." },
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
          <p>Judgement, relationship, accountability, meaning, and consent. These are not processes you can automate. They require human presence, discretion, and lived context — and they determine whether organisational change actually takes hold.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-800)" }}>Agents support</h4>
          <p>Memory, synthesis, pattern-finding, translation, and orientation. AI earns its place here not by replacing human work, but by making it possible for more of the organisation's real intelligence to surface and become useful.</p>
        </div>
      </div>
    </Section>

    <Section tone="off">
      <SectionHead
        eyebrow="Organisational benefits"
        title="Better gatherings. Clearer missions. <em>Stronger follow-through.</em>"
      />
      <CardGrid cols={3} items={[
        { icon: "calendar-check", title: "Better offsite preparation", body: "Teams arrive at offsites with shared context, named tensions, and a clearer picture of the field — so live time can be spent making progress, not catching up." },
        { icon: "rocket", title: "Faster onboarding", body: "New contributors who have already gone through a guided conversation arrive with more context, clearer anchors, and a warmer sense of where they fit." },
        { icon: "list-checks", title: "Clearer shared priorities", body: "AI-supported synthesis turns individual perspectives into a visible shared map — so strategy conversations start from a more honest foundation." },
        { icon: "alert-triangle", title: "More visible tensions & opportunities", body: "What is unspoken becomes visible before it becomes a problem. Teams can address friction early, when it is easier to work with." },
        { icon: "heart-handshake", title: "Stronger team trust", body: "The practice of sharing honestly — even briefly — builds the kind of trust that makes distributed teams more coherent between live gatherings." },
        { icon: "brain", title: "Useful AI-supported memory", body: "AI can hold and synthesise what has been said, decided, and shifted across gatherings — reducing the costly repetition of shared context." },
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
      calli={{ file: "calligraphy-10.jpg", cls: "faint v-corner-bl" }}
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
      calli="calligraphy-10.jpg"
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

    <Section tone="off" calli={{ file: "calligraphy-29.jpg", cls: "faint v-corner-bl" }}>
      <SectionHead
        eyebrow="The problem"
        title="Many networks have members. <em>Fewer have activation.</em>"
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Stale or underused directories", body: "Member directories capture what people were doing when they joined. They rarely reflect what members are actually seeking or offering now." },
        { num: "02", title: "New members struggle to orient", body: "Without a structured way to understand the landscape of the community, new members default to the loudest voices or the easiest connections." },
        { num: "03", title: "No insight into member needs", body: "Network leaders rarely have a live picture of what their members most need, find difficult, or wish the community would offer." },
        { num: "04", title: "Engagement clusters around the same few", body: "In most networks, a small core is highly active and the majority remains peripheral — not for lack of interest, but lack of a useful entry point." },
        { num: "05", title: "Invisible collaboration opportunities", body: "The most valuable collaborations in a network are often the ones no one knew were possible — because the right context was never surfaced." },
        { num: "06", title: "Event energy that fades afterwards", body: "Gatherings generate momentum, but without shared context and follow-through infrastructure, the energy dissipates within days." },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="What we help with"
        title="From passive membership to <em>active network intelligence.</em>"
        dek="Guided conversations and AI-supported synthesis help surface what members care about, who should meet, and what themes or opportunities are emerging across the community."
      />
      <div className="flow-steps">
        <div className="flow-step"><h4>Invite & guide</h4><p>Members receive a short guided conversation invitation — not another form or forum post, but a conversation worth having that surfaces what they actually care about right now.</p></div>
        <div className="flow-step"><h4>Capture context</h4><p>Each conversation captures interests, needs, offers, questions, expertise, and collaboration intentions — in the member's own words. No form, no dropdown, no shallow profile.</p></div>
        <div className="flow-step"><h4>Synthesise & match</h4><p>AI-supported synthesis reveals what the network is actually holding: emerging themes, relevant matches, and patterns that help leaders understand and activate the community.</p></div>
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
        { icon: "user-plus", title: "Better member onboarding", body: "A guided conversation on joining gives new members an early way to be heard, find relevant others, and understand where they fit — rather than absorbing culture from the edges." },
        { icon: "shuffle", title: "More relevant introductions", body: "Introductions built from real context — shared interests, complementary needs, specific offers — have a reason to happen and a foundation to build on." },
        { icon: "calendar", title: "Stronger event & programme design", body: "Understanding what members are actually holding and seeking lets programmes respond to real community needs rather than what the organiser assumes matters." },
        { icon: "git-merge", title: "Clearer collaboration opportunities", body: "The most valuable collaborations in a network are often the ones nobody knew were possible. AI-supported synthesis helps make them visible." },
        { icon: "ear", title: "Better understanding of needs", body: "Network leaders gain a live picture of member concerns, frustrations, and opportunities — beyond what usage data, event attendance, or annual surveys can reveal." },
        { icon: "heart", title: "Increased retention & belonging", body: "Members who feel heard, matched well, and connected to others who share their concerns are more likely to stay, contribute, and bring others in." },
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
      calli={{ file: "calligraphy-34.jpg", cls: "faint v-corner-br" }}
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
      calli="calligraphy-34.jpg"
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

    <Section tone="off" calli={{ file: "calligraphy-26.jpg", cls: "faint v-corner-br" }}>
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
        { icon: "users-round", title: "Stakeholder discovery", body: "Guided conversations help map who is in the field — concerns, capacities, intentions, and connections — before any convening begins." },
        { icon: "message-square", title: "Guided civic conversations", body: "Structured, consent-based conversations give each stakeholder a way to share what they are actually holding — beyond what meetings, consultations, or surveys can capture." },
        { icon: "git-merge", title: "Thematic synthesis", body: "AI-supported synthesis surfaces shared priorities, contested terrain, and emerging concerns across many distinct voices — without flattening the differences." },
        { icon: "heart-handshake", title: "Relationship & trust mapping", body: "Coherence helps reveal where trust already exists, where it is absent, and where relationship-building matters most before the room can do real work." },
        { icon: "layers", title: "Participatory sensemaking", body: "Instead of collecting input and processing it invisibly, the emerging patterns are made visible to the participants who created them." },
        { icon: "flag", title: "Working group formation", body: "The platform helps civic actors discover who else cares about the same concern — and whether there is enough shared energy to begin doing something about it." },
        { icon: "book-open", title: "Public learning outputs", body: "Synthesised insights can be shared publicly, creating transparency about what the process found and inviting broader civic engagement." },
        { icon: "arrow-right-circle", title: "Follow-through pathways", body: "After a convening, guided rounds help participants stay connected to each other and to the commitments that emerged — reducing the evaporation that follows most civic gatherings." },
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
        { icon: "ear", title: "Better stakeholder understanding", body: "Civic leaders gain a more honest map of the field — who is present, what they actually hold, and where the real tensions run — rather than only hearing from the loudest or most organised voices." },
        { icon: "users", title: "Inclusive, structured participation", body: "Guided conversations give every participant a way to contribute that does not privilege those who can travel, speak publicly, or are already inside the room." },
        { icon: "eye", title: "Visibility of shared concerns", body: "Synthesis helps stakeholders see what they share — which is often significantly more than the most visible conflicts suggest." },
        { icon: "heart-handshake", title: "Stronger inter-group trust", body: "Being heard, synthesised fairly, and connected to others builds inter-group trust more reliably than statements of commitment alone." },
        { icon: "link", title: "Continuity between meetings", body: "Guided follow-through rounds help civic processes maintain momentum between live gatherings — reducing the fade that turns participation into performance." },
        { icon: "book-open", title: "Actionable public learning", body: "Well-synthesised civic conversations produce outputs that can inform policy, funding priorities, and future programme design — not just reports that are filed and forgotten." },
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
      calli={{ file: "calligraphy-03.jpg", cls: "faint v-corner-bl" }}
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
        style={{ backgroundImage: "url('assets/backgrounds/calligraphy-35.jpg')",
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
          <a className="btn btn-primary btn-lg" href="conversations.html">See the product <Icon name="arrow-right" /></a>
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
          <p>Individual AI tools help each person think, produce, and move faster. Genuinely useful. But they optimise at the individual level. When everyone uses AI separately, each person becomes more capable in isolation — while the organisation's collective coherence may actually decrease.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-800)" }}>Collaborative AI</h4>
          <p>Collaborative AI is designed to help groups, not just individuals. It holds shared memory across conversations, surfaces patterns across many perspectives, identifies relevant connections, and helps groups move from distributed understanding toward shared commitment. The result is not faster individuals. It is a more capable collective.</p>
        </div>
      </div>
    </Section>

    <Section tone="off" calli={{ file: "calligraphy-03.jpg", cls: "faint v-corner-bl" }}>
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
        <a className="btn btn-primary btn-lg" href="conversations.html">Explore Coherence Conversations Event <Icon name="arrow-right" /></a>
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
        { title: "Discovery conversation", body: "A focused conversation to understand the work, the people involved, the coordination challenge, and what a pilot might usefully test." },
        { title: "Context mapping",        body: "We map the relevant field — participants, relationships, dynamics, existing practices — to understand where the system needs to fit." },
        { title: "Conversation design",    body: "We design the guided conversation prompts and participant journey, calibrated to the specific coordination challenge and cohort." },
        { title: "Activation",             body: "Participants are invited into the experience — with clear framing, consent, and a guided structure that fits their context and time." },
        { title: "Synthesis & insight",    body: "We synthesise the field — themes, patterns, needs, offers, matches, and tensions — and prepare insight that participants and leaders can act on." },
        { title: "Live support",           body: "We stay close during the live moment — available to hosts, responsive to emerging questions, and ready to surface what the field is showing." },
        { title: "Learning report",        body: "A structured reflection on what the pilot revealed — about the tool, the field, the design, and what a next iteration might explore." },
      ]} />
    </Section>

    <CTABand
      calli={{ file: "calligraphy-35.jpg", cls: "faint v-corner-br" }}
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
      sub="Coherence Conversations help event participants clarify their intent, find the right people, and arrive with shared context before the gathering begins."
      primaryCTA={{ label: "Start a Pilot", href: "start.html" }}
      secondaryCTA={{ label: "Talk to us", href: "start.html" }}
      meta={["Pilots open", "Designed with hosts", "Consent-based"]}
      calli="calligraphy-25.jpg"
    />

    <Section tone="white">
      <SectionHead
        eyebrow="What it is"
        title="A pre-event <em>conversation and sensemaking layer.</em>"
        dek="Coherence Conversations Event combines guided participant conversations, AI-supported synthesis, and host-facing insight to make gatherings more intentional, relevant, and alive."
      />
    </Section>

    <Section tone="off" calli={{ file: "calligraphy-34.jpg", cls: "faint v-corner-br" }}>
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
        { icon: "compass", title: "Clarify why they are attending", body: "A guided conversation helps participants name what they are actually there for — not just the topic, but the specific person, conversation, or outcome they are hoping to find." },
        { icon: "search", title: "Discover relevant people", body: "AI-supported synthesis surfaces people worth meeting based on real intent, shared context, and complementary needs or offers — not just titles." },
        { icon: "message-circle", title: "Share more meaningful context", body: "Participants share what a bio cannot hold: what they are working on now, what they are questioning, and what they would value most from the gathering." },
        { icon: "user-check", title: "Generate better profiles & intros", body: "Profiles built from conversation give other participants a real reason to reach out — and a clearer foundation for the first conversation." },
        { icon: "fast-forward", title: "Move faster into useful conversations", body: "With shared context established before the event, conversations can begin at second- or third-conversation depth — no credentials exchange, no wasted first hour." },
        { icon: "arrow-right-circle", title: "Stronger pathways after the event", body: "Context established before the event creates a thread worth continuing — rather than a business card in a pile and a fading memory." },
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
        { icon: "calendar", title: "Conferences", body: "High-intent professional gatherings where who meets whom is as strategically important as what is said from the stage." },
        { icon: "flag", title: "Summits", body: "High-stakes convenings where arriving with shared context and aligned intentions allows the room to do real work rather than catch up." },
        { icon: "trees", title: "Retreats", body: "Small, high-trust gatherings where the depth of connection is the work — and where shared context before arrival transforms what becomes possible." },
        { icon: "rocket", title: "Founder & investor events", body: "Curated gatherings where the right introduction, at the right moment, can shift a company's trajectory." },
        { icon: "building-2", title: "Company offsites", body: "Strategic gatherings where surfacing assumptions, tensions, and priorities before arrival means live time can be spent making progress." },
        { icon: "users", title: "Community gatherings", body: "Events where the community is the product — and where activation, belonging, and member-to-member relevance determine whether the gathering created anything lasting." },
        { icon: "network", title: "Professional networks", body: "Network events where value depends entirely on participant relevance, and where meaningful connection requires more than a badge and a room." },
        { icon: "globe", title: "Civic convenings", body: "Multi-stakeholder gatherings where structured listening and shared synthesis across difference are the preconditions for anything useful happening afterwards." },
      ]} />
    </Section>

    <Section tone="white">
      <SectionHead
        eyebrow="Pilot pathway"
        title="Start with a <em>focused pilot.</em>"
      />
      <Timeline steps={[
        { title: "Discovery conversation",  body: "A focused conversation to understand your event, your participant cohort, your goals, and where the connection layer currently breaks down." },
        { title: "Event context mapping",   body: "We map your audience, the event arc, and the key coordination gaps — so what we build fits your gathering specifically, not a generic template." },
        { title: "Conversation design",     body: "We write the guided prompts and design the participant journey for your specific cohort — calibrated to what they are likely holding and what you want the field to reveal." },
        { title: "Participant activation",  body: "Participants receive a clear, consent-based invitation to a conversation they can complete in under twenty minutes — before the event, on their own time." },
        { title: "Synthesis & insight",     body: "We synthesise the field — themes, matches, offers, needs, and host-facing insight — and deliver it before the event opens." },
        { title: "Event support",           body: "We remain available through the event to support hosts, respond to emerging field questions, and help surface what the cohort is showing." },
        { title: "Learning report",         body: "A structured debrief on what the pilot revealed — about the tool, the audience, the design, and what a next iteration could test." },
      ]} />
    </Section>

    <Section tone="ink" calli={{ file: "calligraphy-34.jpg", cls: "on-dark v-corner-br" }}>
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
      calli={{ file: "calligraphy-33.jpg", cls: "faint v-corner-bl" }}
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
        style={{ backgroundImage: "url('assets/backgrounds/calligraphy-36.jpg')",
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

    <Section tone="off" calli={{ file: "calligraphy-30.jpg", cls: "faint v-corner-bl" }}>
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

    {/* Current quests — intro */}
    <Section tone="white">
      <SectionHead
        eyebrow="Current quests"
        title="Enter through a mission, <em>not vague enthusiasm.</em>"
        dek="Our current quests are First Revenue Path, Internal Beta, and Audax OS v0.1. Together, they focus the company on revenue learning, product readiness, and the operating system needed to onboard the first 20 collaborators."
      />
      <CardGrid cols={3} items={[
        { num: "Q1", icon: "trending-up", title: "First Revenue Path",
          body: "Develop the first revenue path by speaking with first clients and users, shaping the sales approach, and designing the path towards first revenue.",
          link: { label: "See this quest", href: "#q1" } },
        { num: "Q2", icon: "sparkles", title: "Internal Beta",
          body: "Get the product, experience, prompts, outputs, and flows ready for external beta testing. Not perfect — ready.",
          link: { label: "See this quest", href: "#q2" } },
        { num: "Q3", icon: "layers", title: "Audax OS v0.1",
          body: "Create a thriving operating system for the current team, quests, mission-based collaborators, and contractors — enabling onboarding of the first 20 collaborators.",
          link: { label: "See this quest", href: "#q3" } },
      ]} />
      <div className="manifesto">
        <p>These three quests are one system: <em>talk to the market, ready the product, build the operating system.</em> That is the current edge.</p>
      </div>
    </Section>

    {/* Quest 1 */}
    <Section id="q1" tone="off">
      <SectionHead
        eyebrow="Quest 1 · Owner: Antonio"
        title="First Revenue Path"
        dek="Develop the first revenue path by speaking with first clients and users, shaping the sales approach, and designing the path towards first revenue. The task is not to perfect the theory — it is to get close enough to customers that we learn what they actually value, what they might pay for, and what kind of beta path can lead to revenue."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>Key missions</h4>
          <ul className="trust-list">
            <li>Find potential users for beta testing</li>
            <li>Onboard collaborators for beta testing and potential sales</li>
            <li>Run beta tests with first users</li>
            <li>Structure feedback from first beta testers</li>
            <li>Develop the sales conversation and first customer pathway</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What this quest needs</h4>
          <ul className="trust-list">
            <li>Commercial instinct and customer discovery skills</li>
            <li>Sales confidence and market research ability</li>
            <li>Enough product understanding to talk to early users</li>
            <li>Curious, direct, adaptive — comfortable learning in the open</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>First revenue is not only money. It is proof that someone outside the founding field has a real enough problem, enough trust, and enough perceived value to engage. <em>Without this quest, the company risks becoming clear in theory but vague in the market.</em></p>
      </div>
    </Section>

    {/* Quest 2 */}
    <Section id="q2" tone="white">
      <SectionHead
        eyebrow="Quest 2 · Owner: Christine · ~1.5 months"
        title="Internal Beta"
        dek="Get the product ready for external beta. Test live settings, training flows, prompts, AI Guide outputs, and the full internal experience until it is strong enough to invite external users with confidence. Not perfect — ready."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>Key missions</h4>
          <ul className="trust-list">
            <li>Test live settings, training flows, and internal experience</li>
            <li>Test and iterate prompts and AI Guide outputs</li>
            <li>Upgrade and test relevant versions, menus, forms, and flows</li>
            <li>Prepare consent forms and beta onboarding flow</li>
            <li>Refine the internal testing process before external beta</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What this quest needs</h4>
          <ul className="trust-list">
            <li>Product testing and UX thinking</li>
            <li>Facilitation sensitivity and prompt iteration</li>
            <li>Documentation and consent awareness</li>
            <li>Technical coordination with the product team</li>
            <li>Ability to turn messy learning into a usable beta flow</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>External beta is a trust moment. If people are going to enter meaningful conversations and allow AI Guides to support synthesis, the experience must feel coherent, respectful, and useful from the beginning. <em>This quest protects the first impression.</em></p>
      </div>
    </Section>

    {/* Quest 3 */}
    <Section id="q3" tone="off">
      <SectionHead
        eyebrow="Quest 3 · Owner: Victor · ~1.5 months"
        title="Audax OS v0.1"
        dek="Create a thriving operating system for the current team, quests, mission-based collaborators, and contractors — enabling onboarding of the first 20 collaborators. The goal is not bureaucracy. It is enough structure for people to join, understand the work, find their place, and contribute without founders repeating context by hand."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>Key missions</h4>
          <ul className="trust-list">
            <li>Culture and human connection through online experiences and rituals</li>
            <li>Tech Team Manual</li>
            <li>Fundraising Roadmap</li>
            <li>Effective Slicing Pie implementation — process and culture</li>
            <li>OS Agents v0.001</li>
            <li>Contributor onboarding system</li>
            <li>Internal coordination rhythms and quest operating practices</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What this quest needs</h4>
          <ul className="trust-list">
            <li>Organisational design and operations</li>
            <li>Documentation and culture design</li>
            <li>AI workflow design and contributor onboarding</li>
            <li>Governance thinking and practical discipline</li>
            <li>Build the minimum OS — not the beautiful one nobody uses</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>If The Coherence Company is serious about becoming evidence of its own thesis, its internal operating system is not admin. <em>It is product R&D, culture infrastructure, and strategic proof.</em></p>
      </div>
    </Section>

    {/* Open invitation */}
    <Section tone="teal">
      <SectionHead
        eyebrow="Open invitation"
        title="Which quest can <em>you help move?</em>"
        dek="We are looking for contributors who can help one of these three quests move. The best contribution is not 'I support the vision.' The best contribution is specific."
      />
      <CardGrid cols={3} items={[
        { icon: "trending-up", title: "Help Antonio",
          body: "Open first customer conversations, test the sales approach, discover what early users actually value, and help design the path to first revenue." },
        { icon: "sparkles", title: "Help Christine",
          body: "Test and refine the internal beta, iterate prompts and AI Guide outputs, prepare consent flows, and get the product ready for external users." },
        { icon: "layers", title: "Help Victor",
          body: "Build the operating system for contributors and quests — onboarding, coordination rhythms, Slicing Pie culture, OS Agents, and internal documentation." },
      ]} />
      <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <a className="btn btn-secondary btn-lg" href="start.html">Start a Conversation <Icon name="arrow-right" /></a>
      </div>
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
        { icon: "cpu", title: "Product & AI builders", body: "Engineers, product thinkers, and AI practitioners who can help build the guided conversation experience, synthesis layer, and the infrastructure that turns many conversations into shared intelligence." },
        { icon: "calendar", title: "Event & community builders", body: "Practitioners who have run real gatherings, activated communities, or designed participant journeys — and understand from experience where the connection layer breaks down." },
        { icon: "compass", title: "Strategic operators", body: "People who can hold multiple threads simultaneously — across market, product, organisation, and field — and who are comfortable building in conditions where almost nothing is settled." },
        { icon: "pen-tool", title: "Designers & storytellers", body: "Designers and communicators who can give form to genuinely new work — and understand that making it clear is the hardest design problem here." },
        { icon: "microscope", title: "Researchers & sensemakers", body: "People drawn to the harder questions behind the product: collective intelligence, AI and human agency, trust as infrastructure, and what better coordination actually requires." },
        { icon: "git-merge", title: "Partnership & ecosystem builders", body: "Relationship holders who can open doors in the markets and communities where Coherence belongs — and who understand that this field is built through trust, not reach." },
      ]} />
    </Section>

    <Section tone="off" calli={{ file: "calligraphy-10.jpg", cls: "faint v-corner-br" }}>
      <SectionHead
        eyebrow="Team & collaborators"
        title="The people currently <em>holding the centre.</em>"
      />
      <div className="profile-grid">
        {[
          { initials: "—", name: "Name pending", role: "Founder · Product", bio: "Building the product vision, the participant experience, and the conversation design layer that makes Coherence real." },
          { initials: "—", name: "Name pending", role: "Co-founder · AI", bio: "Leading the AI synthesis architecture, the agent design, and the technical infrastructure that turns conversations into shared intelligence." },
          { initials: "—", name: "Name pending", role: "Field & partnerships", bio: "Holding the network of pilots, partners, and early adopters — and translating field learning back into product and company." },
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
      calli={{ file: "calligraphy-29.jpg", cls: "faint v-corner-br" }}
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
          style={{ backgroundImage: "url('assets/backgrounds/calligraphy-30.jpg')",
                   width: 820, height: 820, right: -160, top: 0 }}
          aria-hidden="true" />
        <div className="container">
          <Eyebrow>Start a conversation</Eyebrow>
          <h1>Start a Coherence Conversations event, <em>or tell us what you are trying to coordinate.</em></h1>
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
              <a className="btn btn-ghost btn-lg" href="https://www.linkedin.com/company/the-coherence-company/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
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
          { title: "We review your context", body: "We read what you have shared carefully — not to qualify you, but to understand the real coordination challenge and whether Coherence is the right tool for it." },
          { title: "We suggest the most relevant next conversation", body: "We come back with a proposed conversation type, a question or two we want to explore, and a suggested next step shaped around your context." },
          { title: "We explore fit, timing, and possible pathways", body: "A focused conversation to understand the coordination challenge in more depth, the timeline, and which pathway — pilot, partnership, or contribution — makes most sense." },
          { title: "If useful, we shape a pilot, partnership, or contribution pathway", body: "If there is a real fit, we propose a concrete next step and move from there." },
        ]} />
      </Section>

      <Section tone="off" calli={{ file: "calligraphy-35.jpg", cls: "faint v-corner-bl" }}>
        <SectionHead
          eyebrow="Alternative ways to connect"
          title="Prefer <em>another channel?</em>"
        />
        <CardGrid cols={2} items={[
          { icon: "linkedin", title: "LinkedIn",
            body: "Follow the build in public — updates, thinking, and progress from The Coherence Company.",
            link: { label: "Follow on LinkedIn", href: "https://www.linkedin.com/company/the-coherence-company/" } },
          { icon: "send", title: "Newsletter",
            body: "Occasional field notes, product updates, and thinking on collaboration, AI, and coordination.",
            link: { label: "Subscribe", href: "https://luma.com/thecoherenceco" } },
        ]} />
      </Section>
    </>
  );
};

/* ====================================================================
   5. ABOUT
   ==================================================================== */
const PageAbout = () => (
  <>
    {/* 5.1 Hero */}
    <HeroLight
      eyebrow="About The Coherence Company"
      title='Building coordination infrastructure<br/><em>for the agentic age.</em>'
      sub="Humans and AI, wiser together - the design principle behind everything we build: Coherence Conversations, CoCo AI and collaboration tools that turn dialogue into shared intelligence, the right relationships and coordinated action."
      primaryCTA={{ label: "Explore Coherence Conversations", href: "conversations.html" }}
      secondaryCTA={{ label: "Join the Build", href: "join.html" }}
      meta={["Early-stage · Building in public", "Pilots open", "Remote · global"]}
      calli="calligraphy-21.jpg"
    />

    {/* 5.2 Why We Exist */}
    <Section tone="white" calli={{ file: "calligraphy-29.jpg", cls: "v-edge-right" }}>
      <SectionHead
        eyebrow="Why we exist"
        title="Connection has scaled.<br/><em>Coordination has not.</em>"
        dek="We live in an age of extraordinary connection and persistent fragmentation. People can gather across continents, form distributed teams, launch communities, and speak with AI systems that can write, code, summarise, and advise. And still, meaningful collaboration remains hard."
      />
      <div className="two-col">
        <div>
          <p>The right people do not find each other. Groups lose context between conversations. Organisations fail to hear themselves. Networks become passive. Civic concern struggles to become shared action.</p>
          <p>Good intentions drift because the path from "we should" to "we are doing this" is still too fragile.</p>
        </div>
        <div>
          <p>The Coherence Company exists because the next chapter of technology should not only help individuals produce more. It should help groups understand more, trust more, coordinate better, and act with greater wisdom.</p>
          <p>The problem is not a lack of communication. The problem is the missing infrastructure for collaboration. That is the gap we are building into.</p>
        </div>
      </div>
    </Section>

    {/* 5.3 Our Thesis */}
    <Section tone="off">
      <SectionHead
        eyebrow="Our thesis"
        title="The next great frontier of AI is<br/><em>collaborative intelligence.</em>"
        dek="Most AI is being framed around speed, efficiency, and individual productivity. These uses are real. But they are not the whole story. The deeper opportunity is coordination."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--ink-500)" }}>What AI is doing now</h4>
          <p>Write faster. Code faster. Analyse faster. Produce more with fewer people. Useful. But not the whole story.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-800)" }}>What AI could do next</h4>
          <p>Help groups listen across many voices, remember context, translate between perspectives, reveal patterns, support trust, and make better connections. Help people move from scattered conversation into shared understanding — and from shared understanding into action.</p>
        </div>
      </div>
      <div className="manifesto">
        <p>Not AI replacing humans. Not AI controlling groups from above. Not AI as a surveillance layer in softer clothing. <em>AI as a support layer for human agency, sensemaking, and coordination.</em></p>
      </div>
    </Section>

    {/* 5.4 Humans and AI, Wiser Together */}
    <Section tone="teal" calli={{ file: "calligraphy-32.jpg", cls: "subtle v-wide-top" }}>
      <SectionHead
        eyebrow="The phrase that guides us"
        title="Humans and AI,<br/><em>wiser together.</em>"
        dek="We use this phrase because intelligence alone is not enough. Wisdom includes context, judgement, care, timing, memory, trust, ethics, and the ability to act well inside complexity."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-900)" }}>Humans bring</h4>
          <ul className="trust-list">
            <li>Meaning and ethics</li>
            <li>Courage and care</li>
            <li>Judgement inside complexity</li>
            <li>Relationship and trust</li>
            <li>Accountability and consequence</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, margin: "0 0 12px", color: "var(--teal-900)" }}>AI Guides bring</h4>
          <ul className="trust-list">
            <li>Memory and continuity</li>
            <li>Pattern recognition at scale</li>
            <li>Context across many conversations</li>
            <li>Coordination support</li>
            <li>Follow-through without fatigue</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>Humans bring depth. AI Guides bring continuity. Together, they help groups move through the <a href="coherence-journey.html">Coherence Journey</a> without becoming less human. <em>More capable together.</em></p>
      </div>
    </Section>

    {/* 5.5 What We Are Building */}
    <Section tone="white">
      <SectionHead
        eyebrow="What we are building"
        title="A family of products and practices<br/><em>for collaborative intelligence.</em>"
        dek="We begin with Coherence Conversations because conversation is where trust begins and context becomes visible. The larger architecture is coordination infrastructure for the agentic age."
      />
      <CardGrid cols={3} items={[
        { num: "01", title: "Coherence Conversations",
          body: "Our first product. Guided one-to-one dialogue becomes sensemaking, matchmaking, and practical next steps — for events, organisations, networks, and civic ecosystems.",
          link: { label: "See Coherence Conversations", href: "conversations.html" } },
        { num: "02", title: "AI Guides",
          body: "AI Guides support people and groups through the work of sensemaking and coordination — turning many conversations into useful patterns, matches, insights, commitments, and next steps." },
        { num: "03", title: "Collaboration practices",
          body: "Technology alone is not enough. We design practices, prompts, formats, rituals, and workflows that help people listen better, meet with purpose, build trust, and move from possibility into action." },
        { num: "04", title: "The Coherence Journey",
          body: "Our map for how groups become capable together — from discovery and connection through convergence, seeding, building, and sustained action across many kinds of collaboration.",
          link: { label: "See the journey", href: "coherence-journey.html" } },
        { num: "05", title: "Future infrastructure",
          body: "Shared memory, personal and group Coherence accounts, commitment tracking, agent-to-agent collaboration, and trust and consent protocols. The first doorway is conversation. The larger architecture is coordination infrastructure." },
      ]} />
    </Section>

    {/* 5.6 How We Work */}
    <Section tone="off" calli={{ file: "calligraphy-22.jpg", cls: "faint v-corner-br" }}>
      <SectionHead
        eyebrow="How we work"
        title="Building the company in the same spirit<br/><em>as the products we are creating.</em>"
        dek="We are early-stage, distributed, and still forming. This is not a weakness to hide. It is part of the laboratory. The world we are building for is also distributed, fractional, networked, and AI-supported."
      />
      <CardGrid cols={3} items={[
        { icon: "message-circle", title: "Build through conversations",
          body: "Important ideas should not live only in private heads or scattered documents. We use conversation to discover, clarify, test, and align." },
        { icon: "pen-tool", title: "Turn insight into artefacts",
          body: "Conversations should become useful outputs: essays, product decisions, public learning, onboarding materials, pilot designs, and strategic clarity." },
        { icon: "compass", title: "Work through quests and missions",
          body: "Clearer quests: time-bound arcs of work with champions, milestones, and meaningful entry points for collaborators." },
        { icon: "sparkles", title: "Use AI Guides internally",
          body: "If AI Guides can support coordination, they should help us coordinate too: onboarding, memory, synthesis, mission clarity, and follow-through." },
        { icon: "heart", title: "Stay human while becoming AI-native",
          body: "AI should reduce unnecessary friction, not strip the work of care, judgement, humour, trust, or responsibility." },
        { icon: "target", title: "Keep the dream connected to delivery",
          body: "A large vision is useful only if it helps us build. The dream needs rails. Otherwise it becomes expensive fog." },
      ]} />
    </Section>

    {/* 5.7 Company as Proof */}
    <Section tone="teal">
      <SectionHead
        eyebrow="The company as proof"
        title="The company must become<br/><em>evidence of the thesis.</em>"
        dek="The Coherence Company cannot only talk about coherence. It has to practise it."
      />
      <div className="two-col">
        <div>
          <p>If we say AI can support better collaboration, we need to use AI to coordinate our own work more intelligently.</p>
          <p>If we say distributed teams can become coherent without command-and-control, we need to design a company that proves it.</p>
          <p>If we say conversation can become sensemaking and action, our own conversations need to become decisions, products, partnerships, and visible progress.</p>
        </div>
        <div>
          <p>This does not mean pretending to be perfect. It means treating the company as a living prototype of the future we are building.</p>
          <ul className="trust-list">
            <li>Every contributor journey teaches us something</li>
            <li>Every coordination failure gives us product insight</li>
            <li>Every successful mission becomes a pattern</li>
            <li>Every AI-supported workflow becomes a test</li>
            <li>Every pilot helps us understand what coherence requires in practice</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>The company is not just the container for the product. <em>It is part of the product's evidence.</em></p>
      </div>
    </Section>

    {/* 5.8 Team */}
    <Section tone="white">
      <SectionHead
        eyebrow="Who is behind this"
        title="People at the intersection of AI,<br/><em>collective intelligence, and coordination.</em>"
        dek="The Coherence Company is being formed by people working at the intersection of AI, collective intelligence, facilitation, organisational design, community building, systems thinking, events, civic life, and regenerative futures."
      />
      <div className="manifesto">
        <p>The founding story is still being written in public. What is clear is the shared conviction: AI should not only make isolated individuals faster. <em>It should help people think together, coordinate across difference, and build better futures together.</em></p>
      </div>
      <div className="invite-note" style={{ marginTop: 32 }}>
        <div className="invite-note-icon"><Icon name="info" /></div>
        <p>We are building in public and moving fast. Founding team profiles, collaborator bios, and origin story are being added as the company takes shape. Follow the build at <a href="join.html">Join the Build</a> or connect with us on <a href="https://www.linkedin.com/company/the-coherence-company/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </div>
    </Section>

    {/* 5.9 Partners */}
    <Section tone="off">
      <SectionHead
        eyebrow="Who we build with"
        title="The work needs<br/><em>collaborators, not just customers.</em>"
        dek="The Coherence Company is not designed to build everything alone. We are especially interested in collaborators already working on purposeful gatherings, organisational transformation, AI adoption, professional networks, civic participation, collective intelligence, and human-centred AI."
      />
      <div className="two-col">
        <div>
          <p>Our role is not to replace experienced event organisers, facilitators, community builders, and civic practitioners — or to compete with every experience provider in the field.</p>
          <p>Our role is to build infrastructure that helps them do their work with more coherence, better memory, stronger matchmaking, clearer insight, and more useful follow-through.</p>
        </div>
        <div>
          <TagList items={[
            "Purposeful events and convenings",
            "Organisational transformation",
            "AI adoption and culture change",
            "Professional networks and communities",
            "Civic participation and local action",
            "Collective intelligence",
            "Facilitation and dialogue",
            "Human-centred AI",
            "Trust, identity, and consent",
            "New organisational models",
          ]} />
        </div>
      </div>
      <div className="invite-note" style={{ marginTop: 32 }}>
        <div className="invite-note-icon"><Icon name="info" /></div>
        <p>Named partners, advisors, pilot hosts, and early supporters will be listed here as collaborations are confirmed. Interested in building with us? <a href="start.html">Start a conversation.</a></p>
      </div>
    </Section>

    {/* 5.10 Join the Build */}
    <Section tone="ink" calli={{ file: "calligraphy-10.jpg", cls: "on-dark v-corner-bl" }}>
      <SectionHead
        eyebrow="Join the build"
        title="Help build what<br/><em>comes next.</em>"
        dek="The Coherence Company is early. The product is forming. The company is forming. The field is forming. That is exactly why the invitation matters."
      />
      <div className="two-col">
        <div>
          <p>We are looking for people who want to help build the next generation of collaboration infrastructure — people who care about AI, human agency, sensemaking, coordination, trust, and practical action.</p>
          <p>You might be a product builder, engineer, designer, facilitator, researcher, writer, organiser, community builder, event host, civic practitioner, investor, operator, or transformation partner.</p>
        </div>
        <div>
          <ul className="trust-list">
            <li>Help build the product</li>
            <li>Help run pilots</li>
            <li>Help shape the operating model</li>
            <li>Help open markets</li>
            <li>Help tell the story</li>
            <li>Help fund the next phase</li>
            <li>Start as a thoughtful conversation partner</li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <a className="btn btn-accent btn-lg" href="join.html">Join the Build <Icon name="arrow-right" /></a>
        <a className="btn btn-ghost btn-lg" href="start.html">Start a Conversation</a>
      </div>
    </Section>

    <CTABand
      calli={{ file: "calligraphy-30.jpg", cls: "faint v-corner-bl" }}
      eyebrow="The door is a conversation"
      title="Tell us what you are trying to coordinate,<br/><em>build, or contribute.</em>"
      body="Whether you want to pilot Coherence Conversations, partner, invest, or join the build — the best next step is the same."
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

/* ====================================================================
   6. THE COHERENCE JOURNEY (sub-page of About)
   ==================================================================== */
const PageCoherenceJourney = () => (
  <>
    {/* Hero */}
    <HeroLight
      eyebrow="About · The Coherence Journey"
      title='From first contact<br/><em>to shared action.</em>'
      sub="The Coherence Journey is our map for how groups become capable together. It describes the movement from discovery and connection through convergence, seeding, and sustained action — across events, organisations, networks, and civic ecosystems."
      primaryCTA={{ label: "Explore Coherence Conversations", href: "conversations.html" }}
      secondaryCTA={{ label: "Back to About", href: "about.html" }}
      meta={["Five stages · Discover · Connect · Converge · Seed · Build"]}
      calli="calligraphy-33.jpg"
    />

    {/* What it is */}
    <Section tone="white" calli={{ file: "calligraphy-23.jpg", cls: "v-edge-left" }}>
      <SectionHead
        eyebrow="What it is"
        title="A shared vocabulary for<br/><em>the work of coordination.</em>"
        dek="The Coherence Journey is not a product, a platform, or a methodology. It is a map — a shared vocabulary for practitioners, tool builders, organisers, and communities working on the fragile middle between first contact and real collaboration."
      />
      <div className="two-col">
        <div>
          <p>Most groups know how to gather. Fewer know how to move from gathering into genuine shared action. The energy dissipates. Commitments fade. The momentum between conversations is lost.</p>
          <p>The Coherence Journey describes the stages through which groups naturally move — or fail to move — when trying to become more capable together.</p>
        </div>
        <div>
          <p>By naming these stages, we can design better support for each of them: better conversations, better AI Guides, better practices, better tools, and better follow-through.</p>
          <p>The Journey applies across contexts. Whether you are organising an event, leading a transformation, stewarding a network, or supporting a civic process — the underlying pattern is the same.</p>
        </div>
      </div>
    </Section>

    {/* The track */}
    <Section tone="teal" calli={{ file: "calligraphy-11.jpg", cls: "subtle v-wide-top" }}>
      <SectionHead
        eyebrow="The five stages"
        title="The movement from presence<br/><em>to shared action.</em>"
      />
      <JourneyTrack steps={[
        { name: "Discover", note: "Who is here? What matters? What is alive in this field?" },
        { name: "Connect",  note: "Who should meet whom? Where is there trust, relevance, or shared possibility?" },
        { name: "Converge", note: "What patterns, questions, and tensions are becoming clear?", highlight: true },
        { name: "Seed",     note: "What commitments, experiments, roles, or collaborations are ready to form?" },
        { name: "Build",    note: "What support, rhythm, memory, and accountability help the work continue?" },
      ]} />
      <div className="manifesto">
        <p>The fragile middle — between "nice to meet you" and "we are building together" — is where most groups get stuck. <em>The Coherence Journey is designed to support that middle.</em></p>
      </div>
    </Section>

    {/* Stage 1: Discover */}
    <Section id="discover" tone="white">
      <SectionHead
        eyebrow="Stage 1 · Discover"
        title="Who is here?<br/><em>What is alive in this field?</em>"
        dek="Discovery is about making people and possibilities visible. Before a group can coordinate, it needs to see itself — who is present, what they care about, what they bring, and what they are looking for."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What happens here</h4>
          <ul className="trust-list">
            <li>People express their intentions, questions, and context</li>
            <li>Needs and offers become visible</li>
            <li>The range of the group begins to emerge</li>
            <li>What matters to people starts to surface</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What breaks this stage</h4>
          <ul className="trust-list">
            <li>Thin, static profiles that reveal almost nothing</li>
            <li>No space for context, nuance, or honest expression</li>
            <li>People performing readiness rather than speaking from it</li>
            <li>No one looking at what is actually present</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>Coherence Conversations begins in discovery — with guided dialogue that helps people clarify why they are present, what they are working on, and what would make this moment genuinely useful. <em>Discovery is not a form. It is a conversation.</em></p>
      </div>
    </Section>

    {/* Stage 2: Connect */}
    <Section id="connect" tone="off">
      <SectionHead
        eyebrow="Stage 2 · Connect"
        title="Who should meet whom?<br/><em>Where is there real relevance?</em>"
        dek="Connection is about more than proximity. It is about relevance — helping people find the others whose context, intentions, questions, or capacity make a conversation genuinely worth having."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What happens here</h4>
          <ul className="trust-list">
            <li>Relevant people find each other</li>
            <li>Complementary needs and offers are matched</li>
            <li>Trust begins to form through real conversation</li>
            <li>First contact becomes something more than a business card exchange</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What breaks this stage</h4>
          <ul className="trust-list">
            <li>Networking that depends on luck or social confidence</li>
            <li>Introductions made on seniority rather than relevance</li>
            <li>No infrastructure to move from "nice to meet you" forward</li>
            <li>Relationships that begin warm and fade because no one holds the thread</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>AI Guides can help surface relevant matches — people whose intentions, needs, offers, or questions make an introduction worth making. <em>Not random proximity. Genuine relevance.</em></p>
      </div>
    </Section>

    {/* Stage 3: Converge */}
    <Section id="converge" tone="white">
      <SectionHead
        eyebrow="Stage 3 · Converge"
        title="What are we seeing together?<br/><em>What patterns are becoming clear?</em>"
        dek="Convergence is where a group begins to understand itself — not as a collection of individuals, but as a field with shared questions, shared tensions, shared possibility. This is the hardest and most important stage."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What happens here</h4>
          <ul className="trust-list">
            <li>Shared themes emerge from many individual voices</li>
            <li>Tensions become visible without being suppressed</li>
            <li>Collective priorities begin to form</li>
            <li>The group develops a shared picture of where it is and what it cares about</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What breaks this stage</h4>
          <ul className="trust-list">
            <li>Premature consensus that silences important dissent</li>
            <li>No synthesis layer — many conversations, no shared picture</li>
            <li>The loudest or most senior voices standing in for the whole group</li>
            <li>Analysis without action pathway</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>Convergence is where AI-supported synthesis becomes most valuable — turning many scattered conversations into visible patterns, shared questions, and the emerging possibility of collective movement. <em>Not flattening difference. Making it legible.</em></p>
      </div>
    </Section>

    {/* Stage 4: Seed */}
    <Section id="seed" tone="off">
      <SectionHead
        eyebrow="Stage 4 · Seed"
        title="What is ready to form?<br/><em>What commitments are possible now?</em>"
        dek="Seeding is the moment when possibility becomes intention. A working group forms. A collaboration begins. A commitment is made. A project gets its first real shape. This is where insight becomes action."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What happens here</h4>
          <ul className="trust-list">
            <li>Experiments, working groups, and partnerships take early form</li>
            <li>Commitments are made — and recorded</li>
            <li>First steps become clear and small enough to act on</li>
            <li>The people ready to move find each other and begin</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What breaks this stage</h4>
          <ul className="trust-list">
            <li>Inspiring conversations that produce no next steps</li>
            <li>Commitments made in the room and forgotten afterwards</li>
            <li>Premature structure that kills early energy</li>
            <li>No one holding the thread between the conversation and the action</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>AI Guides can help capture commitments, suggest first steps, and hold the thread between insight and action. <em>The seed stage is where most groups lose momentum. We are building to prevent that.</em></p>
      </div>
    </Section>

    {/* Stage 5: Build */}
    <Section id="build" tone="white">
      <SectionHead
        eyebrow="Stage 5 · Build"
        title="How do we sustain<br/><em>what we have started?</em>"
        dek="Building is about continuity — the support, rhythm, memory, and accountability that help a group keep moving after the first moment of energy. Most collaboration fails here: not for lack of intention, but for lack of infrastructure."
      />
      <div className="two-col">
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What happens here</h4>
          <ul className="trust-list">
            <li>Action continues beyond the founding moment</li>
            <li>Learning is captured and shared</li>
            <li>Memory is maintained — what was decided, who is doing what</li>
            <li>Accountability is visible and human, not punitive</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 20, margin: "0 0 12px", color: "var(--ink-700)" }}>What breaks this stage</h4>
          <ul className="trust-list">
            <li>No shared memory between meetings</li>
            <li>Accountability that depends entirely on individual heroism</li>
            <li>New participants who cannot find context for what has already happened</li>
            <li>Energy that was genuine in the room but evaporated in the weeks that followed</li>
          </ul>
        </div>
      </div>
      <div className="manifesto">
        <p>The Build stage is the long game. It is where the difference between a good conversation and a functioning collaboration becomes clear. <em>AI Guides that hold memory, surface patterns, and support follow-through are collaboration infrastructure — not conversation tools.</em></p>
      </div>
    </Section>

    {/* Across contexts */}
    <Section tone="teal">
      <SectionHead
        eyebrow="Across all contexts"
        title="The same journey, <em>different terrain.</em>"
        dek="The Coherence Journey applies whether you are organising an event, leading organisational transformation, stewarding a network, or supporting a civic process. The stages are the same. The support each stage needs is designed to fit the terrain."
      />
      <CardGrid cols={4} items={[
        { icon: "calendar", title: "Events",
          body: "Participants discover who else is present before the room opens, form relevant connections during and after, and converge on emerging themes and possible collaborations.",
          link: { label: "Events", href: "who-for-events.html" } },
        { icon: "building-2", title: "Organisations",
          body: "Teams discover what people actually think, form working connections across silos, converge on real priorities, seed action, and build cultures of honest communication.",
          link: { label: "Organisations", href: "who-for-companies.html" } },
        { icon: "users", title: "Networks",
          body: "Members discover one another intelligently, form relevant partnerships, converge on shared priorities, seed working groups, and build sustained member value.",
          link: { label: "Networks", href: "who-for-networks.html" } },
        { icon: "globe", title: "Civic ecosystems",
          body: "Citizens discover who else cares, connect across difference, converge on shared concerns, seed practical action, and build accountability and continuity between moments.",
          link: { label: "Civic", href: "who-for-civic.html" } },
      ]} />
    </Section>

    {/* How Coherence Conversations supports it */}
    <Section tone="off" calli={{ file: "calligraphy-29.jpg", cls: "faint v-corner-bl" }}>
      <SectionHead
        eyebrow="How Coherence Conversations helps"
        title="Beginning the journey<br/><em>with guided dialogue.</em>"
        dek="Coherence Conversations is the first product designed to support the early stages of the Coherence Journey — helping groups move from Discover through Connect toward Converge. The later stages are what we are building toward."
      />
      <Timeline steps={[
        { title: "Conversations surface what is real",
          body: "Guided one-to-one dialogue helps people express their intentions, context, needs, and offers — honestly and in their own words. This is the foundation of Discovery." },
        { title: "AI Guides synthesise what is emerging",
          body: "Across many conversations, patterns begin to appear: shared themes, recurring questions, complementary needs and offers, and possible matches. Convergence becomes visible." },
        { title: "Relevant people find each other",
          body: "Matchmaking based on real context rather than job titles or random proximity. Connection becomes more useful — and more likely to continue." },
        { title: "Hosts see the field before they hold it",
          body: "Organisers, community leaders, and facilitators receive insight about the group before the gathering begins — reducing guesswork and increasing the chance of meaningful moments." },
        { title: "Next steps become concrete",
          body: "Commitments, possible collaborations, and practical follow-through are supported from within the process rather than left to chance after it." },
      ]} />
      <div style={{ marginTop: 48, textAlign: "center" }}>
        <a className="btn btn-primary btn-lg" href="conversations.html">See Coherence Conversations <Icon name="arrow-right" /></a>
      </div>
    </Section>

    {/* The bigger picture */}
    <Section tone="white">
      <SectionHead
        eyebrow="The bigger picture"
        title="A map, not a product.<br/><em>A vocabulary, not a methodology.</em>"
        dek="The Coherence Journey is not something we own. It is a description of a pattern that exists in human groups — and a shared language for the people designing support for that pattern."
      />
      <div className="manifesto">
        <p>Facilitators, community builders, event organisers, civic practitioners, organisational designers, researchers, and AI builders all work somewhere along this journey. We are building tools and practices for it. We are also hoping to make the map itself more useful to others — so that more people can build better support for the fragile middle where groups either find their coherence or lose it. <em>The journey belongs to the groups that take it.</em></p>
      </div>
    </Section>

    <CTABand
      calli={{ file: "calligraphy-25.jpg", cls: "faint v-corner-br" }}
      eyebrow="Start the journey"
      title="Where is your group<br/><em>right now?</em>"
      body="Whether you are at the beginning of discovery or trying to sustain what you have already started — the right next step is usually a conversation about what your group needs to move."
      cta={{ label: "Start a Conversation", href: "start.html" }}
      tone="sand"
    />
  </>
);

Object.assign(window, {
  PageHome, PageVision, PageConversations, PageWhoFor,
  PageWhoForEvents, PageWhoForCompanies, PageWhoForNetworks, PageWhoForCivic,
  PageWhatWeDo, PageEvent, PageJoin, PageStart, PageAbout, PageCoherenceJourney,
});
