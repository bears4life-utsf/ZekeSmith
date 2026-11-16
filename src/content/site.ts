export const site = {
  name: "Zeke S. Smith",
  title:
    "Zeke S. Smith — Leading people, building software, and making the tradeoffs that matter.",
  description:
    "Zeke S. Smith — Leading people, building software, and making the tradeoffs that matter.",
  url: "https://zekesmith.dev",
  email: "zssmith@gmail.com",
  linkedIn: "https://www.linkedin.com/in/zekes/",
  ogImage: "/images/og-default-card.jpg",
  bigSandLabs: {
    name: "Big Sand Labs",
    url: "https://www.bigsandlabs.com",
  },
  nav: [
    { label: "Writing", href: "/writing" },
    { label: "Speaking", href: "/#speaking" },
    { label: "About", href: "/#about" },
    { label: "Tradeoffs", href: "/#tradeoffs" },
  ],
  hero: {
    eyebrow: "VP of Product · Speaker · Writer",
    headline: "I lead people and build software.",
    supporting:
      "Nearly 30 years turning hard tradeoffs into products that work — most recently as VP of Product at Verisk, building for one of the most complex industries there is: insurance claims.",
    primaryCta: {
      label: "Read my writing",
      href: "/writing",
    },
    headshot: {
      src: "/images/zeke-headshot.jpg",
      alt: "Professional portrait of Zeke S. Smith",
    },
  },
  latestWriting: {
    eyebrow: "Latest Writing",
    title: "Recent essays",
    allLabel: "All essays",
    allHref: "/writing",
  },
  speaking: {
    eyebrow: "Speaking",
    title: "Talks and panels",
    intro:
      "I speak on leadership, AI, and how software really gets built — for product leaders and for the insurance and restoration industry.",
    yearLabel: "2026",
    talks: [
      "Verisk Elevate 2026 — New Xactware Innovations",
      "AdminStrat Claims Conference — Expert AI Panelist",
      "Paul Davis Conference — Guest Speaker, The Future of AI",
      "Paul Davis Conference — Expert AI Panelist",
      "The CRDN Conference — Guest Speaker, AI and the Future of Claims",
      "PLRB Knowledge Exchange — Guest Speaker, Rules-Driven Estimation",
      "The PuroClean Conference — Guest Speaker",
    ],
    topicsLabel: "Topics",
    topics: [
      "Leading people through change",
      "AI and the economics of building",
      "Product tradeoffs",
      "AI in claims and restoration",
    ],
    cta: {
      label: "Invite me to speak",
      href: "mailto:zssmith@gmail.com?subject=Speaking%20inquiry",
    },
  },
  writing: {
    eyebrow: "Writing",
    headline:
      "Leading people, building software, and making the tradeoffs that matter.",
    intro: "Lessons learned from experience, not just frameworks.",
  },
  projects: {
    eyebrow: "Building",
    headline: "Experiments & side projects",
    intro:
      "Building is how I test ideas. Every project is an experiment in understanding how software, AI, and product thinking intersect.",
    aside:
      "Side projects that keep curiosity honest about what is easy in theory and hard in practice.",
  },
  about: {
    title: "About",
    pullQuote:
      "Software is increasingly about systems, human behavior, and the quiet constraints that decide whether something succeeds.",
    paragraphs: [
      "I've spent nearly three decades leading software organizations — shaping strategy, working beside engineers and designers, and sitting with the decisions that never show up on a roadmap slide.",
      "I still build because curiosity is how I learn. Small experiments keep me honest about what is easy in theory and hard in practice. Writing helps me pressure-test the ideas that keep returning: systems, incentives, craft, and judgment.",
      "What fascinates me now is how AI is changing the economics of building products — not by removing tradeoffs, but by rearranging them.",
    ],
    buildingOutside: {
      eyebrow: "Building outside of work",
      lead: "Leading software teams is my profession. Building software is how I continue learning.",
      supporting:
        "Big Sand Labs is home to the experiments, tools, and products that grow out of that curiosity.",
      ctaLabel: "Explore Big Sand Labs",
    },
  },
  tradeoffs: {
    leadIn: "Want to see how I think? Try the model.",
  },
  footer: {
    tagline: "Building products. Exploring AI. Thinking in systems.",
  },
} as const;
