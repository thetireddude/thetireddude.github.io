// Project rank controls the compact project timeline on the cover. Lower numbers appear first.
// Set rank to null to show a project only in the full Projects section.
export const projects = [
  {
    id: "improv-faceoff",
    title: "Improv Faceoff",
    type: "Hackathon Project",
    period: "September 2026",
    coverLabel: "SEPT. 2026 · REAL-TIME AI IMPROV GAME",
    sfx: "ACTION!",
    summary: "A real-time 1v1 improv game where players perform timed scenes with live video, speech transcription, AI-generated prompts, Switch mechanics, and AI feedback.",
    tags: ["REACT", "FLASK-SOCKETIO", "REDIS", "LIVEKIT", "GEMINI", "DEEPGRAM", "POSTGRESQL"],
    links: [
      { label: "Devpost", url: "https://devpost.com/software/improv-faceoff" },
      { label: "GitHub", url: "https://github.com/thetireddude/codeboxhacks-2026" },
      { label: "Live Demo", url: "https://codeboxhacks-2026.onrender.com/" },
      { label: "Demo Video", url: "https://www.youtube.com/watch?v=6Kexo-iAo3s" }
    ],
    paragraphs: [
      "Improv Faceoff is a two-player, arcade-inspired game for practicing quick thinking, collaboration, and confident speaking in a low-pressure social setting.",
      "Players enter a real-time queue, receive shared AI-generated scenarios and roles, perform a timed scene with live media and transcription, use Switch mechanics, then receive an AI-evaluated scorecard and coaching.",
      "I came up with the idea, built the backend, and implemented the leaderboard plus match-score history graph with AI-assisted tips for improvement."
    ],
    artwork: "marketplace",
    rank: 1,
    images: [
      { src: "assets/images/projects/improv-faceoff/home-screen.jpg", alt: "Improv Faceoff home screen" },
      { src: "assets/images/projects/improv-faceoff/game-info.jpg", alt: "Improv Faceoff game information and rules" },
      { src: "assets/images/projects/improv-faceoff/matchmaking-queue.jpg", alt: "Improv Faceoff real-time matchmaking queue" },
      { src: "assets/images/projects/improv-faceoff/in-game.jpg", alt: "Live Improv Faceoff scene with video and captions" },
      { src: "assets/images/projects/improv-faceoff/switch-mechanic.jpg", alt: "Improv Faceoff Switch mechanic during a round" },
      { src: "assets/images/projects/improv-faceoff/result-scoring.jpg", alt: "Improv Faceoff results, scoring, and AI feedback" },
      { src: "assets/images/projects/improv-faceoff/progress-tracker.jpg", alt: "Improv Faceoff progress tracker and AI suggestions" },
      { src: "assets/images/projects/improv-faceoff/leaderboard.jpg", alt: "Improv Faceoff leaderboard" }
    ]
  },
  {
    id: "new-news-ai",
    title: "New News AI",
    type: "Hackathon Project",
    period: "May 2026",
    coverLabel: "MAY 2026 - MULTI-AGENT NEWS PLATFORM",
    sfx: "BREAKING!",
    summary: "A multi-agent news platform that discovers and validates breaking stories, then lets users explore them through real-time voice conversations.",
    tags: ["NEXT.JS", "TYPESCRIPT", "OPENAI REALTIME API", "WEBRTC", "TAVILY MCP"],
    links: [
      { label: "Devpost", url: "https://devpost.com/software/the-new-news" },
      { label: "GitHub", url: "https://github.com/thetireddude/kiro-hacks-2026" },
      { label: "Live Demo", url: "https://new-news-ai.vercel.app/" },
      { label: "Demo Video", url: "https://vimeo.com/1188750605" }
    ],
    paragraphs: [
      "New News AI is a multi-agent platform for discovering, validating, discussing, and explaining breaking news through real-time voice conversations.",
      "Built and deployed to Vercel in 13 hours with a two-person team for Kiro Hacks 2026, the project pairs an autonomous discovery agent with a context-aware voice agent.",
      "I engineered both agents end-to-end and built the backend data handling, API routes, and agent integration layer. The discovery agent uses GPT-4o-mini, OpenAI tool calling, and Tavily MCP for iterative retrieval and validation; the voice agent uses the OpenAI Realtime API and WebRTC to preserve conversation context and trigger live follow-up searches."
    ],
    artwork: "marketplace",
    rank: 3,
    images: []
  },
  {
    id: "kitchlog",
    title: "KitchLog",
    type: "Capstone Project",
    period: "July 2026",
    coverLabel: "JULY 2026 - FULL-STACK RECIPE APP",
    sfx: "YUM!",
    summary: "A full-stack recipe and meal-planning app for importing and organizing recipes, creating cooking plans, and generating combined grocery lists.",
    tags: ["REACT", "VITE", "NODE.JS", "EXPRESS", "POSTGRESQL", "REST APIS"],
    links: [
      { label: "GitHub", url: "https://github.com/KitchLog/KitchLog" },
      { label: "Live Demo", url: "https://kitchlog-uyc4.onrender.com" }
    ],
    paragraphs: [
      "KitchLog is a full-stack recipe and meal-planning application that helps users save recipes from the web or create them manually, organize what they want to cook, and generate a combined grocery list.",
      "Built over two weeks as a four-person CodePath WEB103 capstone, it uses React, React Router, and Vite on the frontend with a Node.js, Express, and PostgreSQL backend exposing 16 RESTful endpoints.",
      "I built the recipe-import interface and the cooking-plan experience, including create, view, update, and delete flows; recipe selection and linking; a dedicated details page; and loading, error, and not-found states. I also co-deployed the frontend, backend, and database to Render, contributing about 2,100 lines across 11 commits and 3 pull requests."
    ],
    artwork: "project",
    rank: 2,
    images: [
      { src: "assets/images/projects/kitchlog/recipes-tab.png", alt: "KitchLog saved recipes page" },
      { src: "assets/images/projects/kitchlog/add-recipe-1.png", alt: "KitchLog add recipe form" },
      { src: "assets/images/projects/kitchlog/add-recipe-2.png", alt: "KitchLog recipe details entered in the add recipe form" },
      { src: "assets/images/projects/kitchlog/recipe-details.png", alt: "KitchLog recipe details page" },
      { src: "assets/images/projects/kitchlog/favorites-filter.png", alt: "KitchLog favorite recipes filter" },
      { src: "assets/images/projects/kitchlog/search-recipes.png", alt: "KitchLog recipe search results" },
      { src: "assets/images/projects/kitchlog/search-recipes-not-found.png", alt: "KitchLog no recipe search results state" },
      { src: "assets/images/projects/kitchlog/cooking-plans-tab.png", alt: "KitchLog cooking plans page" },
      { src: "assets/images/projects/kitchlog/create-cooking-plan.png", alt: "KitchLog create cooking plan form" },
      { src: "assets/images/projects/kitchlog/add-recipe-to-cooking-plan.png", alt: "KitchLog add recipes to a cooking plan" },
      { src: "assets/images/projects/kitchlog/cooking-plan-details.png", alt: "KitchLog cooking plan details page" },
      { src: "assets/images/projects/kitchlog/search-cooking-plans.png", alt: "KitchLog cooking plan search results" },
      { src: "assets/images/projects/kitchlog/search-cooking-plans-not-found.png", alt: "KitchLog no cooking plan search results state" },
      { src: "assets/images/projects/kitchlog/grocery-list.png", alt: "KitchLog combined grocery list" }
    ]
  },
  {
    id: "polysync",
    title: "PolySync",
    type: "Hackathon Project",
    period: "March 2026",
    coverLabel: "MARCH 2026 - AI EVENT-TO-CALENDAR TOOL",
    sfx: "SYNC!",
    summary: "An AI-powered Chrome extension and dashboard that turn event details from webpages into editable, calendar-ready entries in seconds.",
    tags: ["JAVASCRIPT", "NEXT.JS", "OPENAI RESPONSES API", "SUPABASE", "GOOGLE OAUTH", "CHROME EXTENSION"],
    links: [
      { label: "GitHub", url: "https://github.com/thetireddude/polysync-chrome-extension-polyprompt" },
      { label: "Website", url: "https://polysync.dev" },
      { label: "Demo Video", url: "https://drive.google.com/file/d/1xc23FR5QGmBhK-4OJII7eaFdJeAZHSUv/view?usp=sharing" }
    ],
    paragraphs: [
      "PolySync helps students turn event details from social posts, flyers, emails, and webpages into structured calendar entries. With one click, the Chrome extension captures the active tab, extracts an event's details, and lets users review, edit, save, export, or sync the result.",
      "Built for the College Life category at OpenAI Poly Prompt 2026, the five-person team paired a Manifest V3 JavaScript Chrome extension with a Next.js dashboard, Supabase storage, Google OAuth, Google Calendar integration, and ICS export.",
      "As Product Lead and developer, I helped define the product vision, feature set, and user flow; built the initial MVP; architected the Supabase database; integrated Google authentication; managed pull requests and merges; and refined the final UI/UX. The AI workflow uses the OpenAI Responses API with vision and gpt-4o-mini to extract structured event data from user-triggered screenshots."
    ],
    artwork: "project",
    rank: 4,
    images: [
      { src: "assets/images/projects/poly-sync/logo.jpg", alt: "PolySync project logo" },
      { src: "assets/images/projects/poly-sync/team.jpg", alt: "PolySync hackathon team" },
      { src: "assets/images/projects/poly-sync/extension-pop-up.png", alt: "PolySync Chrome extension popup" },
      { src: "assets/images/projects/poly-sync/capturing-event.png", alt: "PolySync capturing an event from the current browser tab" },
      { src: "assets/images/projects/poly-sync/captured-event.png", alt: "PolySync extracted event details ready for review" },
      { src: "assets/images/projects/poly-sync/google-log-in.png", alt: "PolySync Google sign-in screen" },
      { src: "assets/images/projects/poly-sync/successful-login.png", alt: "PolySync successful Google sign-in" },
      { src: "assets/images/projects/poly-sync/dashboard.png", alt: "PolySync event dashboard" },
      { src: "assets/images/projects/poly-sync/dashboard-event-details.png", alt: "PolySync dashboard event details" },
      { src: "assets/images/projects/poly-sync/dashboard-calendar-view.png", alt: "PolySync calendar view in the dashboard" },
      { src: "assets/images/projects/poly-sync/google-calendar-integration.png", alt: "PolySync Google Calendar integration" },
      { src: "assets/images/projects/poly-sync/invite-friends.png", alt: "PolySync invite friends interface" },
      { src: "assets/images/projects/poly-sync/light-mode.png", alt: "PolySync dashboard in light mode" },
    ]
  },
  {
    id: "kayo",
    title: "Kayo",
    type: "Personal Project",
    period: "April - May 2026",
    coverLabel: "APRIL - MAY 2026 - AGENTIC CODING CLI",
    sfx: "EXECUTE!",
    summary: "A lightweight Python CLI coding agent that plans multi-step work, autonomously uses tools, evaluates results, and iterates toward a solution.",
    tags: ["PYTHON", "GOOGLE GENAI SDK", "GEMINI", "TOOL CALLING", "CLI"],
    links: [
      { label: "GitHub", url: "https://github.com/thetireddude/kayo-agent" }
    ],
    paragraphs: [
      "Kayo is an agentic AI coding assistant that works from the command line. Given a natural-language prompt, it explores a configured codebase, reads and writes files, executes Python scripts, and iterates through multi-step tasks.",
      "The Python application uses the Google GenAI SDK and Gemini function calling to drive a structured tool-calling loop. Each tool result is returned to the model so it can plan the next action within the same run.",
      "I built four autonomous tools for file inspection, content reading, file creation or modification, and Python execution. Kayo also includes within-run context memory, configurable working-directory, read-limit, timeout, verbosity, and loop-limit controls, plus path validation and error handling for safer iterative execution."
    ],
    artwork: "project",
    rank: null,
    images: []
  },  {
    id: "haggle",
    title: "Haggle",
    type: "Personal Project",
    period: "2024 — Present",
    coverLabel: "2024 — PRESENT · FREELANCE PLATFORM",
    sfx: "BAM!",
    summary: "A full-stack marketplace that connects clients with freelancers — profiles, proposals, escrow-style payments, and real-time messaging. Built with Next.js, TypeScript, and PostgreSQL.",
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "STRIPE", "WEBSOCKETS"],
    links: [
      { label: "GitHub", url: "https://github.com/omar-dev/haggle" },
      { label: "Live Demo", url: "https://haggle.omar.dev" }
    ],
    paragraphs: [
      "Haggle is a full-stack marketplace built to connect clients with freelancers — but instead of a rigid accept-or-reject flow, proposals are a back-and-forth thread with counter-offers, scoped deliverables, and milestone-based payouts.",
      "I own the frontend end-to-end: a shared design system, optimistic UI for real-time messaging, and a proposal builder that turns a wall of requirements into a structured, editable quote in minutes.",
      "Highlights: proposal creation got roughly 40% faster after a redesign of the builder flow, chat runs over WebSockets for instant delivery, and the escrow-style payment flow is built on Stripe Connect."
    ],
    artwork: "marketplace",
    rank: null
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    type: "Client Project",
    period: "2023 — 2024",
    coverLabel: "2023 — 2024 · REAL-TIME METRICS",
    sfx: "WHOOSH!",
    summary: "Real-time analytics dashboard for businesses to visualize key metrics — live charts, alerts, and drill-downs that stay fast under heavy data. Built with React, Chart.js, and Node.js.",
    tags: ["REACT", "CHART.JS", "NODE.JS", "WEBSOCKETS", "REDIS"],
    links: [
      { label: "GitHub", url: "https://github.com/omar-dev/analytics-dashboard" },
      { label: "Live Demo", url: "https://analytics-demo.omar.dev" }
    ],
    paragraphs: [
      "A real-time analytics dashboard built from scratch so businesses could turn a firehose of raw event data into decisions — live charts, threshold alerts, and drill-downs that stay responsive even under heavy load.",
      "The frontend streams updates over WebSockets and batches re-renders so charts stay smooth at high update frequency, while a Redis-backed cache on the Node.js API keeps query latency low.",
      "Highlights: initial load time cut by roughly 40% through code-splitting and smarter data fetching, plus a drill-down view that lets teams go from a top-line metric to the underlying records in two clicks."
    ],
    artwork: "analytics",
    rank: null
  },
  {
    id: "taskforce",
    title: "Task Force",
    type: "Team Project",
    period: "2022 — 2023",
    coverLabel: "2022 — 2023 · PRODUCTIVITY APP",
    sfx: "SNAP!",
    summary: "A productivity app for teams to plan, track, and ship work faster — boards, sprints, and a keyboard-first workflow. Built with React, Firebase, and Tailwind CSS.",
    tags: ["REACT", "FIREBASE", "TAILWIND CSS"],
    links: [{ label: "GitHub", url: "https://github.com/omar-dev/task-force" }],
    paragraphs: [
      "Task Force is a productivity app for teams to plan, track, and ship work faster — boards, sprints, and a keyboard-first workflow so you rarely need to touch the mouse.",
      "This was my first project on a real team: my first code reviews, my first time writing tests that mattered, and the project where accessibility and performance stopped being afterthoughts.",
      "Firebase handles realtime sync across boards so changes from teammates show up instantly, and the whole UI was built on a small, reusable set of Tailwind components."
    ],
    artwork: "taskboard",
    rank: null
  }
];

export const experiences = [
  {
    periodStart: "JUL. 2026", periodEnd: "AUG. 2026", title: "Software Engineering Intern", organization: "Sandbar Health · Remote", sfx: "KAPOW!",
    highlights: [
      "Architected and shipped a production AI-powered broker tool, automating document extraction, renewal analysis, plan comparison, and carrier outreach across 28 API endpoints using Next.js, TypeScript, and PostgreSQL.",
      "Re-engineered the broker platform authentication flow, reducing observed sign-in failures from 80–90% to zero by rebuilding invite/callback handling and secure multi-factor routing using WorkOS AuthKit, OAuth 2.0, and PKCE.",
      "Built LLM extraction pipelines supporting 2–5 plans per insurance document, transforming unstructured quotes and PDFs into structured comparison data using Claude API, schema validation, background processing, and cached results."
    ],
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "WORKOS", "CLAUDE API"]
  },
  {
    periodStart: "MAR. 2026", periodEnd: "JUL. 2026", title: "Machine Learning Researcher", organization: "Algoverse · Remote", sfx: "CRASH!",
    highlights: [
      "Improved HumanEval pass@1 from 43.3% to 60.4% (+17.1 points) by implementing and evaluating On-Policy Distillation on Qwen2.5-Coder-1.5B using PyTorch, Transformers, PEFT, and QLoRA.",
      "Improved Simple Self-Distillation HumanEval performance from 70/164 to 77/164 (+4.3 points) by designing ablation studies that identified noisy self-generated targets and introducing a code-extraction preprocessing pipeline.",
      "Co-authored an ML research manuscript on LLM self-improvement while building reproducible single-GPU training and evaluation pipelines on Colab (T4), including debugging benchmark failures that restored HumanEval results from 0/164 to 72/164."
    ],
    tags: ["PYTORCH", "TRANSFORMERS", "PEFT", "QLORA", "COLAB"]
  },
  {
    periodStart: "AUG. 2026", periodEnd: "PRESENT", title: "Director of Meetings", organization: "CS+AI Club · San Luis Obispo, California", sfx: "ZOOM!",
    highlights: [],
    tags: ["LEADERSHIP", "AI COMMUNITY"]
  },
  {
    periodStart: "SEP. 2025", periodEnd: "MAY 2026", title: "Meeting Facilitator", organization: "CS+AI Club · San Luis Obispo, California", sfx: "ZAP!",
    highlights: [
      "Designed and led 3 AI workshops for roughly 40 students, creating Google Colab demos and coding exercises using Gemini, LangChain, ChromaDB, pandas, and scikit-learn to teach prompt engineering, RAG, and applied AI workflows."
    ],
    tags: ["GEMINI", "LANGCHAIN", "CHROMADB", "PANDAS", "SCIKIT-LEARN"]
  },
  {
    periodStart: "FALL 2025", periodEnd: "WINTER 2025", title: "Tech Lead", organization: "Google Developer Student Club · San Luis Obispo, California", sfx: "WHAM!",
    highlights: [
      "Led 1–1.5 hour live coding workshops for roughly 20 students on Google developer tools, creating GitHub-hosted resources and providing debugging support during hands-on sessions."
    ],
    tags: ["GOOGLE DEVELOPER TOOLS", "GITHUB", "WORKSHOPS"]
  },
  {
    periodStart: "2024", periodEnd: "NOW", title: "Senior Frontend Developer", organization: "Haggle · Remote", sfx: "KAPOW!",
    highlights: ["Leading the frontend of a freelance marketplace used by thousands of clients and freelancers", "Own the design system end-to-end and ship features from concept to production", "Keep Lighthouse scores in the green while the product grows fast"],
    tags: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "DESIGN SYSTEMS"]
  },
  {
    periodStart: "2023", periodEnd: "2024", title: "Frontend Developer", organization: "DataPulse Analytics", sfx: "CRASH!",
    highlights: ["Built a real-time analytics dashboard from a blank canvas", "Shipped live charts and streaming updates that turn raw metrics into decisions", "Cut initial load time by 40% with code-splitting and smarter data fetching"],
    tags: ["REACT", "CHART.JS", "NODE.JS", "WEBSOCKETS"]
  },
  {
    periodStart: "2022", periodEnd: "2023", title: "Junior Developer", organization: "Task Force Studio", sfx: "BOOM!",
    highlights: ["First panel of the story — shipped a productivity app for teams to plan, track, and ship work faster", "Learned the craft: code reviews, testing, and accessibility", "Where I learned how good software actually gets made"],
    tags: ["REACT", "FIREBASE", "TAILWIND CSS"]
  }
];
// `rank` controls the compact skill list on the cover. Lower numbers appear first;
// use `null` to show a skill only in the full Skills section.
export const skills = [
  { name: "JavaScript", category: "Languages", glyph: "JS", level: 4, rank: null },
  { name: "TypeScript", category: "Languages", glyph: "TS", level: 4, rank: 1 },
  { name: "Python", category: "Languages", glyph: "Py", level: 4, rank: 2 },
  { name: "Java", category: "Languages", glyph: "J", level: 3, rank: null },
  { name: "C++", category: "Languages", glyph: "C++", level: 3, rank: null },
  { name: "SQL", category: "Languages", glyph: "SQL", level: 3, rank: null },

  { name: "HTML", category: "Frontend", glyph: "5", level: 5, rank: null },
  { name: "CSS", category: "Frontend", glyph: "3", level: 5, rank: null },
  { name: "React", category: "Frontend", glyph: "⚛", level: 5, rank: 3 },
  { name: "Next.js", category: "Frontend", glyph: "▲", level: 4, rank: 4 },
  { name: "Tailwind", category: "Frontend", glyph: "〜", level: 4, rank: null },

  { name: "Node.js", category: "Backend & APIs", glyph: "⬢", level: 4, rank: 5 },
  { name: "Express", category: "Backend & APIs", glyph: "Ex", level: 3, rank: 7 },
  { name: "PostgreSQL", category: "Backend & APIs", glyph: "PG", level: 3, rank: 6 },
  { name: "MySQL", category: "Backend & APIs", glyph: "MY", level: 3, rank: null },
  { name: "Redis", category: "Backend & APIs", glyph: "R", level: 3, rank: null },
  { name: "REST APIs", category: "Backend & APIs", glyph: "API", level: 4, rank: null },
  { name: "OAuth 2.0 / OIDC", category: "Backend & APIs", glyph: "OA", level: 3, rank: null },
  { name: "PKCE", category: "Backend & APIs", glyph: "PK", level: 3, rank: null },
  { name: "Schema Validation", category: "Backend & APIs", glyph: "SV", level: 3, rank: null },
  { name: "Background Processing", category: "Backend & APIs", glyph: "BP", level: 3, rank: null },
  { name: "Unit Testing", category: "Backend & APIs", glyph: "UT", level: 3, rank: null },

  { name: "PyTorch", category: "AI & ML", glyph: "PT", level: 3, rank: null },
  { name: "Hugging Face Transformers", category: "AI & ML", glyph: "HF", level: 3, rank: null },
  { name: "PEFT", category: "AI & ML", glyph: "PE", level: 3, rank: null },
  { name: "QLoRA", category: "AI & ML", glyph: "QL", level: 3, rank: null },
  { name: "Claude API", category: "AI & ML", glyph: "CA", level: 3, rank: null },
  { name: "Gemini API", category: "AI & ML", glyph: "GM", level: 3, rank: null },
  { name: "OpenAI API", category: "AI & ML", glyph: "AI", level: 3, rank: null },
  { name: "LangChain", category: "AI & ML", glyph: "LC", level: 3, rank: null },
  { name: "ChromaDB", category: "AI & ML", glyph: "CD", level: 3, rank: null },
  { name: "scikit-learn", category: "AI & ML", glyph: "SK", level: 3, rank: null },
  { name: "pandas", category: "AI & ML", glyph: "pd", level: 3, rank: null },

  { name: "Git", category: "Tools & Deployment", glyph: "⎇", level: 4, rank: null },
  { name: "GitHub", category: "Tools & Deployment", glyph: "GH", level: 4, rank: null },
  { name: "Vercel", category: "Tools & Deployment", glyph: "V", level: 3, rank: null },
{ name: "Render", category: "Tools & Deployment", glyph: "Re", level: 3, rank: null },
  { name: "Claude Code", category: "Tools & Deployment", glyph: "CC", level: 3, rank: 8 },
  { name: "Netlify", category: "Tools & Deployment", glyph: "N", level: 3, rank: null },
  { name: "Codex", category: "Tools & Deployment", glyph: "CX", level: 3, rank: 9 }
];
export const about = {
  abstract: [
    "I'm a junior at Cal Poly SLO majoring in CS, who is driven by passion and the curiosity to understand different tech. I am an artist that sees code as a form of creative expression where I can build anything I imagine.",
  ],
  description: [
    "I build ideas and applications that are fun, practical, and built to make an impact.",
    "I am an artist that sees code as a form of creative expression where I can build anything I imagine. My interests lie in AI Engineering, Mobile and Web Development and I've pursued these through internships, self-learning and projects.",
    "Feel free to check out my GitHub! If anything interests you in any way, do not hesitate to reach out!"
  ],
  details: [
    { label: "Location", value: "San Luis Obispo" },
    { label: "Studying", value: "CS @ Cal Poly SLO" },
    { label: "Year", value: "Class of 2028" },
    { label: "Currently doing", value: "Diving headfirst into recruiting season" }
  ]
};
export const contact = {
  links: [
    { label: "LinkedIn", display: "linkedin.com/in/omar2006", href: "https://linkedin.com/in/omar2006", icon: "in", external: true },
    { label: "GitHub", display: "github.com/thetireddude", href: "https://github.com/thetireddude", icon: "&lt;/&gt;", external: true },
    { label: "Email", display: "omaralim.md@gmail.com", href: "mailto:omaralim.md@gmail.com", icon: "✉", external: false }
  ]
};
