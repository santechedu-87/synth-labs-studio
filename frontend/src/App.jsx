import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BadgeDollarSign,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clipboard,
  Code2,
  Copy,
  ExternalLink,
  FileText,
  Gauge,
  Globe2,
  Home,
  KeyRound,
  Laptop,
  Lightbulb,
  Layers3,
  Lock,
  Mail,
  Menu,
  MessageCircleQuestion,
  Moon,
  Search,
  SearchCheck,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Target,
  Terminal,
  Unlock,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import "@/App.css";

const navItems = [
  ["Home", "home"],
  ["Tools Suite", "tools"],
  ["Agency Services", "services"],
  ["SynthBudget App", "synthbudget"],
  ["Pricing", "pricing"],
  ["About", "about"],
];

const toolMeta = [
  { id: "prompt", label: "Prompt Engineer", icon: WandSparkles, short: "Prompt" },
  { id: "seo", label: "SERP Preview", icon: Search, short: "SEO" },
  { id: "hooks", label: "Hook Studio", icon: Sparkles, short: "Hooks" },
  { id: "density", label: "Readability", icon: BarChart3, short: "Analyze" },
  { id: "intent", label: "Search Intent", icon: SearchCheck, short: "Intent", pro: true },
  { id: "topical", label: "Authority Mapper", icon: Layers3, short: "Topics", pro: true },
  { id: "entity", label: "Entity Auditor", icon: BrainCircuit, short: "Entities", pro: true },
];

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Custom Web & App Development",
    text: "Fast, accessible web products and mobile-ready experiences designed around real business goals.",
    tags: ["React", "Responsive", "Conversion"],
  },
  {
    icon: Search,
    number: "02",
    title: "SEO & Search Console Indexing",
    text: "Technical audits, structured metadata, sitemap setup, and practical indexing guidance.",
    tags: ["Technical SEO", "Indexing", "SERP"],
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "AdSense Approval Consultation",
    text: "Policy-aware content, navigation, trust signals, and ad placement readiness reviews.",
    tags: ["Compliance", "UX Audit", "Content"],
  },
  {
    icon: Laptop,
    number: "04",
    title: "Client-Side SaaS Architecture",
    text: "Privacy-first utility products that run directly in the browser without costly API dependencies.",
    tags: ["Privacy", "Performance", "No API"],
  },
];

const stopWords = new Set([
  "the", "and", "for", "that", "with", "this", "from", "your", "you", "are", "was", "were", "have", "has", "had", "but", "not", "all", "can", "our", "their", "they", "will", "would", "about", "into", "than", "then", "when", "what", "which", "who", "how", "why", "where", "also", "just", "more", "some", "any", "each", "its", "it's", "use", "using", "used", "over", "under", "out", "too", "very", "a", "an", "of", "to", "in", "on", "is", "it", "as", "at", "be", "by", "or", "if", "we", "i",
]);

const saveLocal = (key, value) => {
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  localStorage.setItem(key, JSON.stringify([...existing, value]));
};

const mailDraft = (subject, lines) => {
  window.location.href = `mailto:support@synthlabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
};

const scrollToSection = (id, behavior = "smooth") => {
  if (id === "home") {
    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    forceTop();
    window.requestAnimationFrame(forceTop);
    window.setTimeout(forceTop, 120);
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
};

function IconButton({ label, testId, onClick, children, className = "" }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      data-testid={testId}
      onClick={onClick}
      className={`icon-button ${className}`}
    >
      {children}
    </button>
  );
}

function Modal({ open, onClose, title, eyebrow, children, testId }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" data-testid={`${testId}-backdrop`} role="presentation" onMouseDown={onClose}>
      <section
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${testId}-title`}
        data-testid={testId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <div>
            <p className="eyebrow" data-testid={`${testId}-eyebrow`}>{eyebrow}</p>
            <h2 id={`${testId}-title`} data-testid={`${testId}-title`}>{title}</h2>
          </div>
          <IconButton label="Close modal" testId={`${testId}-close-button`} onClick={onClose}>
            <X size={20} />
          </IconButton>
        </div>
        <div className="modal-content">{children}</div>
      </section>
    </div>
  );
}

function AdSlot({ children, variant = "wide", id }) {
  return (
    <aside className={`ad-slot ad-slot-${variant}`} aria-label="Advertisement placeholder" data-testid={id}>
      <span>AD PLACEHOLDER</span>
      <p>{children}</p>
    </aside>
  );
}

function Header({ dark, toggleTheme, openSupport, drawerOpen, setDrawerOpen, openPricing, openSection }) {
  const navigate = (id) => {
    const wasOpen = drawerOpen;
    setDrawerOpen(false);
    const runNavigation = () => id === "pricing" ? openPricing() : openSection(id);
    if (wasOpen) setTimeout(runNavigation, 360);
    else runNavigation();
  };

  return (
    <>
      <header className="site-header" data-testid="site-header">
        <button className="brand" data-testid="header-brand-button" onClick={() => navigate("home")}>
          <span className="brand-mark"><Zap size={19} fill="currentColor" /></span>
          <span className="brand-copy"><strong>SYNTH LABS</strong><small>Digital Agency</small></span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation" data-testid="desktop-navigation">
          {navItems.map(([label, id]) => (
            <button key={id} data-testid={`desktop-nav-${id}`} onClick={() => navigate(id)}>{label}</button>
          ))}
        </nav>
        <div className="header-actions">
          <IconButton label={`Switch to ${dark ? "light" : "dark"} mode`} testId="header-theme-toggle" onClick={toggleTheme} className="desktop-theme">
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </IconButton>
          <button className="button primary compact desktop-support" data-testid="header-support-button" onClick={openSupport}>
            <MessageCircleQuestion size={17} /> Contact Support
          </button>
          <IconButton label="Open navigation" testId="mobile-menu-open-button" onClick={() => setDrawerOpen(true)} className="mobile-menu-button">
            <Menu size={22} />
          </IconButton>
        </div>
      </header>

      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`} data-testid="mobile-navigation-drawer" aria-hidden={!drawerOpen}>
        <div className="drawer-top">
          <div className="brand" data-testid="drawer-brand">
            <span className="brand-mark"><Zap size={19} fill="currentColor" /></span>
            <span className="brand-copy"><strong>SYNTH LABS</strong><small>Digital Agency</small></span>
          </div>
          <IconButton label="Close navigation" testId="mobile-menu-close-button" onClick={() => setDrawerOpen(false)}>
            <X size={24} />
          </IconButton>
        </div>
        <nav className="drawer-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id], index) => (
            <button key={id} data-testid={`mobile-nav-${id}`} onClick={() => navigate(id)}>
              <span>0{index + 1}</span>{label}<ChevronRight size={19} />
            </button>
          ))}
        </nav>
        <div className="drawer-actions">
          <button className="theme-row" data-testid="drawer-theme-toggle" onClick={toggleTheme}>
            {dark ? <Sun size={19} /> : <Moon size={19} />}
            <span>{dark ? "Light interface" : "Dark interface"}</span>
            <span className={`theme-switch ${dark ? "active" : ""}`}><i /></span>
          </button>
          <button className="button primary" data-testid="drawer-support-button" onClick={() => { setDrawerOpen(false); openSupport(); }}>
            <MessageCircleQuestion size={18} /> Contact Support
          </button>
        </div>
      </div>
      {drawerOpen && <button className="drawer-scrim" aria-label="Close navigation" data-testid="mobile-drawer-scrim" onClick={() => setDrawerOpen(false)} />}
    </>
  );
}

function Hero({ onSupport }) {
  const [terminalLine, setTerminalLine] = useState(0);
  const terminal = [
    ["role", "Senior SEO strategist"],
    ["task", "Build a topical content map"],
    ["tone", "Clear, authoritative, useful"],
    ["status", "Prompt ready — 0 API calls"],
  ];

  useEffect(() => {
    const timer = setInterval(() => setTerminalLine((line) => (line + 1) % terminal.length), 1800);
    return () => clearInterval(timer);
  }, [terminal.length]);

  return (
    <section className="hero section-shell" id="home" data-testid="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="signal-badge" data-testid="hero-badge"><Zap size={14} /> Next-Gen AI & SEO Studio</div>
          <h1 data-testid="hero-heading">
            Precision AI Tools <span>•</span> Web Development <span>•</span> Digital Growth
          </h1>
          <p className="hero-description" data-testid="hero-description">
            Practical browser-based micro-tools, custom digital products, and honest growth consulting—built for creators and teams who value clarity over hype.
          </p>
          <div className="hero-actions">
            <button className="button primary" data-testid="hero-launch-tools-button" onClick={() => scrollToSection("tools")}>
              <Zap size={18} fill="currentColor" /> Launch Free Tools
            </button>
            <button className="button soft" data-testid="hero-budget-button" onClick={() => scrollToSection("synthbudget")}>
              <CircleDollarSign size={18} /> Explore SynthBudget <span className="mini-badge">BETA</span>
            </button>
            <button className="button outline" data-testid="hero-hire-button" onClick={() => scrollToSection("services")}>
              <BriefcaseBusiness size={18} /> Hire Agency
            </button>
          </div>
          <div className="trust-line" data-testid="hero-trust-line">
            <span><ShieldCheck size={16} /> Privacy-first</span>
            <span><KeyRound size={16} /> No API keys</span>
            <span><Gauge size={16} /> Instant results</span>
          </div>
        </div>

        <div className="terminal-wrap" data-testid="live-tool-preview">
          <div className="terminal-topbar">
            <div className="window-dots"><i /><i /><i /></div>
            <span><Terminal size={15} /> live_tool_preview.sh</span>
            <span className="live-chip"><i /> LIVE</span>
          </div>
          <div className="terminal-body">
            <p className="comment">// Build a production-ready instruction</p>
            <p><b>const</b> prompt = <em>engineer</em>({`{`}</p>
            {terminal.map(([key, value], index) => (
              <p key={key} className={terminalLine === index ? "active-line" : ""} data-testid={`terminal-${key}-line`}>
                <span>{key}:</span> “{value}”{index < terminal.length - 1 ? "," : ""}
              </p>
            ))}
            <p>{`}`});</p>
            <div className="terminal-result" data-testid="terminal-result">
              <Check size={18} /> Structured prompt generated locally
            </div>
          </div>
          <div className="terminal-footer">
            <span>CLIENT-SIDE ENGINE</span><span>v1.0</span>
          </div>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true">01 / STUDIO</div>
    </section>
  );
}

function Metrics() {
  const metrics = [
    ["7", "Built-In Micro-Tools", "4 free + 3 Pro tools"],
    ["100%", "Client-Side Engine", "Runs in your browser"],
    ["0", "API Keys Required", "No setup or account"],
    ["<1s", "Instant Processing", "Results without waiting"],
  ];
  return (
    <section className="metrics-band" aria-label="Product facts" data-testid="metrics-section">
      <div className="metrics-grid section-shell">
        {metrics.map(([value, title, detail], index) => (
          <article key={title} className="metric" data-testid={`metric-card-${index + 1}`}>
            <strong data-testid={`metric-value-${index + 1}`}>{value}</strong>
            <div><h3 data-testid={`metric-title-${index + 1}`}>{title}</h3><p>{detail}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PromptTool({ copy }) {
  const [fields, setFields] = useState({ role: "Senior content strategist", goal: "Create a 30-day organic growth plan", tone: "Clear and authoritative", format: "Numbered action plan" });
  const update = (key, value) => setFields((current) => ({ ...current, [key]: value }));
  const output = `SYSTEM ROLE\nYou are a ${fields.role || "skilled specialist"}.\n\nPRIMARY OBJECTIVE\n${fields.goal || "Complete the requested task with precision."}\n\nCOMMUNICATION STYLE\nUse a ${fields.tone || "clear and useful"} tone. Avoid unsupported claims. Ask for missing context when it materially affects the result.\n\nOUTPUT REQUIREMENTS\nDeliver the response as a ${fields.format || "structured response"}. Include practical next steps, identify assumptions, and prioritize accuracy over filler.\n\nQUALITY CHECK\nBefore responding, verify that the output directly addresses the objective, follows the requested format, and contains no fabricated facts.`;
  const inputClass = "tool-input";
  return (
    <div className="tool-workspace" data-testid="prompt-tool-panel">
      <div className="tool-form">
        <div className="field"><label htmlFor="prompt-role">Role / Persona</label><input id="prompt-role" data-testid="prompt-role-input" className={inputClass} value={fields.role} onChange={(e) => update("role", e.target.value)} /></div>
        <div className="field"><label htmlFor="prompt-goal">Task Goal</label><textarea id="prompt-goal" data-testid="prompt-goal-input" className={inputClass} value={fields.goal} onChange={(e) => update("goal", e.target.value)} rows="3" /></div>
        <div className="two-fields">
          <div className="field"><label htmlFor="prompt-tone">Tone</label><select id="prompt-tone" data-testid="prompt-tone-select" className={inputClass} value={fields.tone} onChange={(e) => update("tone", e.target.value)}><option>Clear and authoritative</option><option>Friendly and conversational</option><option>Concise and technical</option><option>Persuasive but credible</option></select></div>
          <div className="field"><label htmlFor="prompt-format">Format</label><select id="prompt-format" data-testid="prompt-format-select" className={inputClass} value={fields.format} onChange={(e) => update("format", e.target.value)}><option>Numbered action plan</option><option>Markdown report</option><option>Step-by-step guide</option><option>JSON structure</option></select></div>
        </div>
      </div>
      <div className="tool-output">
        <div className="output-head"><span><Terminal size={16} /> Generated system prompt</span><button data-testid="prompt-copy-button" onClick={() => copy(output, "System prompt copied")}><Copy size={15} /> Copy</button></div>
        <pre data-testid="prompt-output">{output}</pre>
      </div>
    </div>
  );
}

function SeoTool() {
  const [title, setTitle] = useState("Client-Side SEO Tools for Smarter Content");
  const [url, setUrl] = useState("https://synthlabs.com/tools/seo-preview");
  const [description, setDescription] = useState("Preview and improve your search metadata instantly with a privacy-first tool that runs entirely in your browser.");
  return (
    <div className="tool-workspace seo-workspace" data-testid="seo-tool-panel">
      <div className="tool-form">
        <div className="field"><div className="label-row"><label htmlFor="seo-title">Page title</label><span className={title.length > 60 ? "limit" : ""} data-testid="seo-title-count">{title.length}/60</span></div><input id="seo-title" data-testid="seo-title-input" className="tool-input" maxLength="90" value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        <div className="field"><label htmlFor="seo-url">Page URL</label><input id="seo-url" data-testid="seo-url-input" className="tool-input" value={url} onChange={(e) => setUrl(e.target.value)} /></div>
        <div className="field"><div className="label-row"><label htmlFor="seo-description">Meta description</label><span className={description.length > 160 ? "limit" : ""} data-testid="seo-description-count">{description.length}/160</span></div><textarea id="seo-description" data-testid="seo-description-input" className="tool-input" rows="4" maxLength="220" value={description} onChange={(e) => setDescription(e.target.value)} /></div>
        <div className="length-guides" data-testid="seo-length-guides"><span className={title.length <= 60 ? "good" : "warn"}><i /> Title {title.length <= 60 ? "fits" : "may truncate"}</span><span className={description.length <= 160 ? "good" : "warn"}><i /> Description {description.length <= 160 ? "fits" : "may truncate"}</span></div>
      </div>
      <div className="serp-area">
        <div className="preview-label"><span>Google preview</span><span>DESKTOP</span></div>
        <div className="serp-card desktop-serp" data-testid="seo-desktop-preview">
          <div className="serp-site"><span>S</span><div><strong>Synth Labs</strong><small>{url || "https://example.com"}</small></div><i>⋮</i></div>
          <h3>{title.slice(0, 62) || "Your page title will appear here"}</h3>
          <p>{description.slice(0, 162) || "Add a helpful description to preview your search result."}</p>
        </div>
        <div className="preview-label mobile-label"><span>Mobile crop check</span><span>MOBILE</span></div>
        <div className="serp-card mobile-serp" data-testid="seo-mobile-preview"><div className="serp-site"><span>S</span><div><strong>Synth Labs</strong><small>{url || "https://example.com"}</small></div></div><h3>{title.slice(0, 54)}</h3><p>{description.slice(0, 120)}…</p></div>
      </div>
    </div>
  );
}

function HooksTool({ copy }) {
  const [topic, setTopic] = useState("building a personal brand with AI");
  const cleanTopic = topic.trim() || "your topic";
  const hooks = [
    { network: "YouTube", text: `I tested 7 ways to approach ${cleanTopic}—only these 3 worked` },
    { network: "LinkedIn", text: `Most advice about ${cleanTopic} skips the hardest part. Here’s the practical version:` },
    { network: "X", text: `${cleanTopic.charAt(0).toUpperCase() + cleanTopic.slice(1)} isn't complicated. Your system is. A simpler playbook:` },
    { network: "YouTube", text: `Before you spend another hour on ${cleanTopic}, watch this` },
    { network: "LinkedIn", text: `A zero-hype framework for ${cleanTopic} that you can use this week:` },
  ];
  return (
    <div className="tool-workspace hooks-workspace" data-testid="hooks-tool-panel">
      <div className="tool-form hook-intro">
        <div className="field"><label htmlFor="hook-topic">Topic or niche</label><textarea id="hook-topic" data-testid="hook-topic-input" className="tool-input" rows="5" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. sustainable travel for busy founders" /></div>
        <div className="formula-note" data-testid="hook-formula-note"><Lightbulb size={20} /><div><strong>Built around proven structures</strong><p>Specificity, open loops, contrast, and a clear promise—without misleading clickbait.</p></div></div>
      </div>
      <div className="hooks-list" data-testid="generated-hooks-list">
        {hooks.map((hook, index) => (
          <article key={`${hook.network}-${index}`} className="hook-row" data-testid={`generated-hook-${index + 1}`}>
            <span className={`network network-${hook.network.toLowerCase()}`}>{hook.network}</span>
            <p>{hook.text}</p>
            <IconButton label={`Copy hook ${index + 1}`} testId={`copy-hook-${index + 1}-button`} onClick={() => copy(hook.text, `Hook ${index + 1} copied`)}><Copy size={16} /></IconButton>
          </article>
        ))}
      </div>
    </div>
  );
}

function countSyllables(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  if (cleaned.length <= 3) return 1;
  const groups = cleaned.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/i, "").replace(/^y/, "").match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups?.length || 1);
}

function DensityTool() {
  const [text, setText] = useState("Clear writing earns attention. Useful content answers a real question, explains the answer simply, and gives the reader a practical next step. Strong content respects both the reader's time and their intelligence.");
  const analysis = useMemo(() => {
    const words = text.toLowerCase().match(/[a-z0-9']+/g) || [];
    const sentences = Math.max(1, (text.match(/[.!?]+/g) || []).length);
    const syllables = words.reduce((sum, word) => sum + countSyllables(word), 0);
    const score = words.length ? Math.max(0, Math.min(100, Math.round(206.835 - 1.015 * (words.length / sentences) - 84.6 * (syllables / words.length)))) : 0;
    const counts = words.reduce((map, word) => {
      if (word.length > 2 && !stopWords.has(word)) map[word] = (map[word] || 0) + 1;
      return map;
    }, {});
    const keywords = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8);
    return { words: words.length, chars: text.length, minutes: Math.max(1, Math.ceil(words.length / 220)), score, keywords };
  }, [text]);
  const scoreLabel = analysis.score >= 70 ? "Easy to read" : analysis.score >= 50 ? "Standard" : "Complex";
  return (
    <div className="tool-workspace density-workspace" data-testid="density-tool-panel">
      <div className="tool-form"><div className="field"><label htmlFor="density-text">Paste your content</label><textarea id="density-text" data-testid="density-text-input" className="tool-input analysis-textarea" rows="12" value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste text to analyze..." /></div></div>
      <div className="analysis-output">
        <div className="stat-grid">
          <article data-testid="word-count-stat"><span>Words</span><strong>{analysis.words}</strong></article>
          <article data-testid="character-count-stat"><span>Characters</span><strong>{analysis.chars}</strong></article>
          <article data-testid="reading-time-stat"><span>Read time</span><strong>{analysis.minutes} min</strong></article>
          <article data-testid="readability-stat"><span>Readability</span><strong>{analysis.score}</strong><small>{scoreLabel}</small></article>
        </div>
        <div className="keyword-table" data-testid="keyword-frequency-table">
          <div className="table-head"><span>Keyword</span><span>Count</span><span>Density</span></div>
          {analysis.keywords.length ? analysis.keywords.map(([word, count], index) => (
            <div className="table-row" key={word} data-testid={`keyword-row-${index + 1}`}><strong>{word}</strong><span>{count}</span><span>{analysis.words ? ((count / analysis.words) * 100).toFixed(1) : 0}%</span></div>
          )) : <p className="empty-table" data-testid="keyword-empty-state">Add more text to find meaningful keywords.</p>}
        </div>
      </div>
    </div>
  );
}

function IntentTool() {
  const [queries, setQueries] = useState("best expense tracker for freelancers\nhow to improve topical authority\nSynth Labs login\nhire an SEO consultant");
  const classify = (query) => {
    const value = query.toLowerCase();
    if (/login|official|dashboard|download|website|app store/.test(value)) return ["Navigational", "Known destination", 94];
    if (/buy|price|pricing|cost|subscribe|hire|book|service|agency/.test(value)) return ["Transactional", "Ready to act", 91];
    if (/(?:\bbest\b|\btop\b|\breviews?\b|\bvs\b|\bversus\b|\bcompar(?:e|ison)\b|\balternatives?\b)/.test(value)) return ["Commercial", "Evaluating options", 89];
    return ["Informational", "Learning or solving", 86];
  };
  const rows = queries.split(/\n|,/).map((query) => query.trim()).filter(Boolean).slice(0, 12).map((query) => ({ query, result: classify(query) }));
  return (
    <div className="pro-tool-layout" data-testid="intent-tool-panel">
      <div className="tool-form">
        <div className="field"><label htmlFor="intent-queries">Search queries</label><textarea id="intent-queries" data-testid="intent-queries-input" className="tool-input analysis-textarea" value={queries} onChange={(event) => setQueries(event.target.value)} placeholder="Add one query per line..." /></div>
        <p className="pro-helper" data-testid="intent-helper-text"><SearchCheck size={16}/> Uses transparent phrase-pattern analysis. No search data leaves your device.</p>
      </div>
      <div className="intent-results" data-testid="intent-results">
        <div className="pro-result-head"><span>Query</span><span>Intent signal</span><span>Confidence</span></div>
        {rows.map(({ query, result }, index) => <article key={`${query}-${index}`} data-testid={`intent-result-${index + 1}`}><p>{query}</p><div><strong>{result[0]}</strong><small>{result[1]}</small></div><span>{result[2]}%</span></article>)}
        {!rows.length && <div className="pro-empty" data-testid="intent-empty-state">Add a query to classify its likely search intent.</div>}
      </div>
    </div>
  );
}

function TopicalTool() {
  const [topic, setTopic] = useState("personal finance for freelancers");
  const [audience, setAudience] = useState("independent professionals building stable income");
  const subject = topic.trim() || "your core topic";
  const clusters = [
    ["Foundations", [`What is ${subject}?`, `${subject}: essential terms`, `Common myths about ${subject}`]],
    ["Strategy", [`A practical ${subject} framework`, `${subject} goals and benchmarks`, `Choosing the right approach`]],
    ["Implementation", [`Step-by-step ${subject} workflow`, `Tools and templates to use`, `Mistakes that slow progress`]],
    ["Measurement", [`How to measure ${subject}`, `Signals that your strategy works`, `A monthly review checklist`]],
  ];
  return (
    <div className="topical-layout" data-testid="topical-tool-panel">
      <div className="topical-controls">
        <div className="field"><label htmlFor="topical-topic">Core topic</label><input id="topical-topic" data-testid="topical-topic-input" className="tool-input" value={topic} onChange={(event) => setTopic(event.target.value)} /></div>
        <div className="field"><label htmlFor="topical-audience">Target audience</label><textarea id="topical-audience" data-testid="topical-audience-input" className="tool-input" rows="3" value={audience} onChange={(event) => setAudience(event.target.value)} /></div>
        <div className="hub-page" data-testid="topical-hub-page"><span>CORE HUB PAGE</span><strong>The complete guide to {subject}</strong><p>Built for {audience || "your target reader"}</p></div>
      </div>
      <div className="cluster-grid" data-testid="topical-cluster-grid">
        {clusters.map(([name, ideas], index) => <article key={name} data-testid={`topic-cluster-${index + 1}`}><div><span>0{index + 1}</span><strong>{name}</strong></div><ul>{ideas.map((idea) => <li key={idea}><ChevronRight size={14}/>{idea}</li>)}</ul></article>)}
      </div>
    </div>
  );
}

function EntityTool() {
  const [topic, setTopic] = useState("technical SEO");
  const [content, setContent] = useState("Technical SEO helps search engines crawl and understand a website. A clear site architecture, useful metadata, internal links, and an XML sitemap can improve discoverability. Teams should review indexing and page experience regularly.");
  const libraries = {
    seo: ["search engine", "crawl", "indexing", "metadata", "internal links", "sitemap", "schema", "page experience", "search console", "canonical"],
    finance: ["budget", "income", "expense", "savings", "cash flow", "transaction", "category", "goal", "debt", "emergency fund"],
    ai: ["model", "prompt", "training data", "context", "inference", "automation", "workflow", "accuracy", "evaluation", "privacy"],
  };
  const key = /seo|search/.test(topic.toLowerCase()) ? "seo" : /budget|finance|money/.test(topic.toLowerCase()) ? "finance" : "ai";
  const expected = libraries[key];
  const normalized = content.toLowerCase();
  const present = expected.filter((entity) => normalized.includes(entity));
  const missing = expected.filter((entity) => !normalized.includes(entity));
  const score = Math.round((present.length / expected.length) * 100);
  return (
    <div className="pro-tool-layout entity-layout" data-testid="entity-tool-panel">
      <div className="tool-form">
        <div className="field"><label htmlFor="entity-topic">Primary topic</label><input id="entity-topic" data-testid="entity-topic-input" className="tool-input" value={topic} onChange={(event) => setTopic(event.target.value)} /></div>
        <div className="field"><label htmlFor="entity-content">Draft content</label><textarea id="entity-content" data-testid="entity-content-input" className="tool-input analysis-textarea" value={content} onChange={(event) => setContent(event.target.value)} /></div>
      </div>
      <div className="entity-results">
        <div className="entity-score" data-testid="entity-coverage-score"><div style={{ "--score": `${score * 3.6}deg` }}><strong>{score}</strong><small>/100</small></div><span><b>Entity coverage</b><small>{score >= 70 ? "Strong topical coverage" : score >= 40 ? "Useful foundation" : "Needs more context"}</small></span></div>
        <section data-testid="entity-present-list"><h4><Check size={15}/> Entities found</h4><div className="entity-chips">{present.map((entity) => <span key={entity}>{entity}</span>)}{!present.length && <small>None detected yet</small>}</div></section>
        <section data-testid="entity-missing-list"><h4><Target size={15}/> Context opportunities</h4><div className="entity-chips missing">{missing.map((entity) => <span key={entity}>{entity}</span>)}</div></section>
        <p className="audit-note" data-testid="entity-audit-note">Include relevant entities naturally. Coverage is a writing aid, not a ranking guarantee.</p>
      </div>
    </div>
  );
}

function LockedTool({ title, openPricing }) {
  return (
    <div className="locked-tool" data-testid="pro-tool-locked-state">
      <span className="locked-icon"><Lock size={28}/></span>
      <div className="pro-label" data-testid="locked-pro-label"><Zap size={12}/> SYNTH LABS PRO</div>
      <h3 data-testid="locked-tool-title">Unlock {title}</h3>
      <p>This advanced workflow is included in Synth Labs Pro. Activate the local demo plan to explore it without payment.</p>
      <button className="button primary" data-testid="locked-view-pricing-button" onClick={openPricing}><BadgeDollarSign size={18}/> View Pro pricing</button>
      <small data-testid="locked-demo-note">Demo access is stored only in this browser.</small>
    </div>
  );
}

function ToolsSuite({ copy, proAccess, openPricing }) {
  const [active, setActive] = useState("prompt");
  const activeTool = toolMeta.find((tool) => tool.id === active);
  const locked = activeTool?.pro && !proAccess;
  return (
    <section className="section-shell section-block tools-section" id="tools" data-testid="tools-section">
      <div className="section-heading split-heading">
        <div><p className="eyebrow"><Zap size={14} /> FREE / PRIVATE / INSTANT</p><h2 data-testid="tools-heading">A compact studio for sharper digital work.</h2></div>
        <p data-testid="tools-description">Every tool processes your input locally. Nothing is uploaded, no account is required, and the output is ready immediately.</p>
      </div>
      <div className="tools-shell">
        <div className="tool-tabs" role="tablist" aria-label="Micro-tools" data-testid="tools-tab-list">
          {toolMeta.map((tool, index) => {
            const Icon = tool.icon;
            return <button key={tool.id} role="tab" aria-selected={active === tool.id} className={`${active === tool.id ? "active" : ""} ${tool.pro ? "pro-tab" : ""}`} data-testid={`tool-tab-${tool.id}`} onClick={() => setActive(tool.id)}><span>0{index + 1}</span><Icon size={18} /><b>{tool.label}{tool.pro && <em>PRO</em>}</b><small>{tool.short}{tool.pro && " · PRO"}</small></button>;
          })}
        </div>
        <div className="tool-ad-wrap"><AdSlot id="adsense-between-tools-slot" variant="tool">[ Ad Placeholder · Between Tools Responsive Unit ]</AdSlot></div>
        <div className="tool-panel">
          <div className="tool-panel-heading">
            <div><span className="tool-kicker" data-testid="active-tool-kicker">{activeTool?.pro ? "SYNTH LABS PRO" : "ACTIVE WORKSPACE"}</span><h3 data-testid="active-tool-title">{activeTool?.label}</h3></div>
            <div className="local-status" data-testid="local-processing-status">{activeTool?.pro && (proAccess ? <Unlock size={14}/> : <Lock size={14}/>)}<i /> {activeTool?.pro && proAccess ? "Pro active · " : ""}Local processing</div>
          </div>
          {locked ? <LockedTool title={activeTool.label} openPricing={openPricing}/> : <>
            {active === "prompt" && <PromptTool copy={copy} />}
            {active === "seo" && <SeoTool />}
            {active === "hooks" && <HooksTool copy={copy} />}
            {active === "density" && <DensityTool />}
            {active === "intent" && <IntentTool />}
            {active === "topical" && <TopicalTool />}
            {active === "entity" && <EntityTool />}
          </>}
        </div>
      </div>
    </section>
  );
}

function BudgetShowcase({ openBeta }) {
  return (
    <section className="budget-band" id="synthbudget" data-testid="synthbudget-section">
      <div className="section-shell budget-grid">
        <div className="phone-stage" aria-label="SynthBudget application preview" data-testid="synthbudget-app-preview">
          <div className="phone">
            <div className="phone-status"><span>9:41</span><span>● ● ▰</span></div>
            <div className="phone-app-head"><span className="tiny-brand"><Zap size={13} fill="currentColor" /></span><div><small>Good morning</small><strong>My Budget</strong></div><span className="avatar">SL</span></div>
            <div className="balance"><small>Available this month</small><strong>$2,840.50</strong><span>↑ 8.4% vs last month</span></div>
            <div className="chart" data-testid="budget-chart-preview"><i style={{height:"34%"}}/><i style={{height:"55%"}}/><i style={{height:"44%"}}/><i style={{height:"72%"}}/><i style={{height:"61%"}}/><i style={{height:"86%"}}/><i style={{height:"68%"}}/></div>
            <div className="phone-row-title"><strong>Recent activity</strong><small>See all</small></div>
            {[ ["HO", "Home office", "− $86.20"], ["GR", "Groceries", "− $64.10"], ["IN", "Income", "+ $2,400"] ].map((item) => <div className="transaction" key={item[1]}><span>{item[0]}</span><strong>{item[1]}</strong><small className={item[1] === "Income" ? "income" : ""}>{item[2]}</small></div>)}
            <div className="phone-nav"><Home size={16}/><BarChart3 size={16}/><span>+</span><CircleDollarSign size={16}/><Menu size={16}/></div>
          </div>
          <div className="phone-note note-one"><Check size={15} /> Offline-first</div>
          <div className="phone-note note-two"><ShieldCheck size={15} /> Private by design</div>
        </div>
        <div className="budget-copy">
          <p className="eyebrow"><Smartphone size={14} /> OFFICIAL MOBILE APP</p>
          <div className="beta-status" data-testid="synthbudget-beta-status"><i /> Currently in Closed Beta / Google Play Review</div>
          <h2 data-testid="synthbudget-heading">SynthBudget keeps everyday money decisions clear.</h2>
          <p data-testid="synthbudget-description">A focused personal finance and expense manager by Synth Labs. Track spending, understand monthly patterns, and build better habits without turning your finances into a spreadsheet project.</p>
          <ul data-testid="synthbudget-feature-list">
            <li><Check size={17} /> Simple expense categorization</li>
            <li><Check size={17} /> Monthly budget progress</li>
            <li><Check size={17} /> Clear spending snapshots</li>
          </ul>
          <button className="button primary" data-testid="request-beta-access-button" onClick={openBeta}>Request Beta Access / App Info <ArrowRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function Services({ openInquiry }) {
  return (
    <section className="section-shell section-block services-section" id="services" data-testid="services-section">
      <div className="section-heading split-heading">
        <div><p className="eyebrow"><BriefcaseBusiness size={14} /> HIRE SYNTH LABS</p><h2 data-testid="services-heading">Hands-on digital work, scoped with precision.</h2></div>
        <div><p data-testid="services-description">Need more than a tool? We design and build practical digital systems with clear deliverables and direct communication.</p><button className="text-link" data-testid="services-inquiry-top-button" onClick={() => openInquiry("General project inquiry")}>Start a project <ArrowRight size={16}/></button></div>
      </div>
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.title} data-testid={`service-card-${index + 1}`}>
              <div className="service-top"><span className="service-icon"><Icon size={22}/></span><span>{service.number}</span></div>
              <h3>{service.title}</h3><p>{service.text}</p>
              <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <button data-testid={`service-inquire-${index + 1}-button`} onClick={() => openInquiry(service.title)}>Discuss this service <ArrowRight size={16}/></button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-band" id="about" data-testid="about-section">
      <div className="section-shell about-grid">
        <div><p className="eyebrow"><Target size={14}/> OUR OPERATING PRINCIPLE</p><h2 data-testid="about-heading">Useful beats impressive.<br/>Honest beats inflated.</h2></div>
        <div className="about-copy"><p data-testid="about-description">Synth Labs is an independent digital studio focused on prompt systems, SEO utilities, client-side products, and thoughtful web development. We publish tools that do exactly what they claim—without fabricated customer counts, hidden processing, or vague outcomes.</p><div className="principles"><span><strong>01</strong> Practical by default</span><span><strong>02</strong> Transparent metrics</span><span><strong>03</strong> Privacy-aware builds</span></div></div>
      </div>
    </section>
  );
}

function ContactForm({ type, service, onDone }) {
  const [form, setForm] = useState({ name: "", email: "", message: service || "" });
  const [saved, setSaved] = useState(null);
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event) => {
    event.preventDefault();
    const prefix = type === "support" ? "SL" : type === "beta" ? "SB" : "IN";
    const id = `#${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
    const entry = { ...form, id, type, createdAt: new Date().toISOString() };
    saveLocal(`synthlabs_${type}_submissions`, entry);
    setSaved(entry);
    if (onDone) onDone(id);
  };
  if (saved) return (
    <div className="success-state" data-testid={`${type}-success-state`}>
      <span><Check size={26}/></span><h3>Saved in this browser</h3>
      <p>Your reference is <strong data-testid={`${type}-reference-id`}>{saved.id}</strong>. Keep it for your records or open a prefilled email to send this request to our team.</p>
      <button className="button primary" data-testid={`${type}-email-draft-button`} onClick={() => mailDraft(`${saved.id} — ${type === "beta" ? "SynthBudget beta request" : type === "support" ? "Support request" : "Agency inquiry"}`, [`Reference: ${saved.id}`, `Name: ${saved.name}`, `Email: ${saved.email}`, `Category: ${saved.category || service || type}`, "", saved.message])}><Mail size={17}/> Open email draft</button>
    </div>
  );
  return (
    <form className="contact-form" data-testid={`${type}-form`} onSubmit={submit}>
      <div className="two-fields">
        <div className="field"><label htmlFor={`${type}-name`}>Name</label><input required id={`${type}-name`} data-testid={`${type}-name-input`} className="tool-input" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></div>
        <div className="field"><label htmlFor={`${type}-email`}>Email</label><input required type="email" id={`${type}-email`} data-testid={`${type}-email-input`} className="tool-input" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></div>
      </div>
      {type === "support" && <div className="field"><label htmlFor="support-category">Ticket category</label><select required id="support-category" data-testid="support-category-select" className="tool-input" value={form.category || "General Inquiry"} onChange={(e) => update("category", e.target.value)}><option>General Inquiry</option><option>Technical Support</option><option>SynthBudget App Beta</option><option>Agency Services</option></select></div>}
      <div className="field"><label htmlFor={`${type}-message`}>{type === "beta" ? "What would you like to know?" : "How can we help?"}</label><textarea required id={`${type}-message`} data-testid={`${type}-message-input`} className="tool-input" rows="5" value={form.message} onChange={(e) => update("message", e.target.value)} placeholder={type === "beta" ? "Tell us what interests you about SynthBudget..." : "Share the relevant details..."} /></div>
      <label className="consent"><input required type="checkbox" data-testid={`${type}-consent-checkbox`} /><span>I agree to store this request in this browser. I can clear it through my browser storage settings.</span></label>
      <button className="button primary submit-button" data-testid={`${type}-submit-button`} type="submit"><Send size={17}/> Save request locally</button>
      <p className="form-note" data-testid={`${type}-storage-note`}><ShieldCheck size={14}/> This form does not send data to a server. After saving, you can open a prefilled email draft.</p>
    </form>
  );
}

function Footer({ openSupport, openLegal, openPricing, openSection }) {
  return (
    <footer className="site-footer" data-testid="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand"><div className="brand" data-testid="footer-brand"><span className="brand-mark"><Zap size={19} fill="currentColor" /></span><span className="brand-copy"><strong>SYNTH LABS</strong><small>Digital Agency</small></span></div><p>Prompt engineering, SEO micro-tools, thoughtful digital products, and practical growth systems.</p></div>
        <div className="footer-column"><h3>Explore</h3>{navItems.slice(0,5).map(([label,id]) => <button key={id} data-testid={`footer-nav-${id}`} onClick={() => id === "pricing" ? openPricing() : openSection(id)}>{label}</button>)}</div>
        <div className="footer-column"><h3>Legal & company</h3><button data-testid="footer-privacy-button" onClick={() => openLegal("privacy")}>Privacy Policy</button><button data-testid="footer-terms-button" onClick={() => openLegal("terms")}>Terms of Service</button><button data-testid="footer-about-button" onClick={() => openLegal("about")}>About Us</button><button data-testid="footer-support-button" onClick={openSupport}>Support & Contact</button></div>
        <div className="footer-contact"><h3>Need a human?</h3><a href="mailto:support@synthlabs.com" data-testid="footer-email-link"><Mail size={16}/> support@synthlabs.com</a><button className="button soft" data-testid="footer-open-support-button" onClick={openSupport}>Open support center</button></div>
      </div>
      <div className="section-shell footer-bottom"><p data-testid="footer-copyright">© 2026 Synth Labs Digital Agency. All rights reserved.</p><p data-testid="footer-processing-note"><i/> Tools process data in your browser</p></div>
    </footer>
  );
}

function BottomNav({ dark, toggleTheme, openSupport, openSection }) {
  return (
    <nav className="bottom-nav" aria-label="Quick navigation" data-testid="mobile-bottom-navigation">
      <button data-testid="bottom-nav-home" onClick={() => openSection("home")}><Home size={19}/><span>Home</span></button>
      <button data-testid="bottom-nav-tools" onClick={() => openSection("tools")}><WandSparkles size={19}/><span>Tools</span></button>
      <button data-testid="bottom-nav-theme" onClick={toggleTheme}>{dark ? <Sun size={19}/> : <Moon size={19}/>}<span>Theme</span></button>
      <button data-testid="bottom-nav-support" onClick={openSupport}><MessageCircleQuestion size={19}/><span>Support</span></button>
    </nav>
  );
}

const legalContent = {
  privacy: {
    eyebrow: "LEGAL / PRIVACY",
    title: "Privacy Policy",
    body: [
      ["Local processing", "The tools on this website run in your browser. Text entered into the prompt, SEO, hook, and readability tools is not transmitted to Synth Labs."],
      ["Form information", "Support, beta, and inquiry forms save entries to local browser storage only. You may optionally open a prefilled email in your own email application. No message is sent unless you choose to send it."],
      ["Advertising", "Future advertising placements may use cookies or similar technologies according to the advertising provider’s policies. Current labeled ad areas are placement containers only."],
      ["Your control", "You can remove locally saved requests through your browser’s site data or storage settings."],
    ],
  },
  terms: {
    eyebrow: "LEGAL / TERMS",
    title: "Terms of Service",
    body: [
      ["Use of tools", "These tools are provided for general productivity and informational use. Review generated prompts, metadata, hooks, and readability results before publishing or relying on them."],
      ["No guarantees", "Search performance, advertising approval, audience growth, or financial outcomes are never guaranteed. Results depend on many factors outside the scope of these browser tools."],
      ["Acceptable use", "Do not use the tools or contact forms for unlawful, abusive, or harmful activity."],
      ["Availability", "Features may evolve as we improve accuracy, accessibility, and usability."],
    ],
  },
  about: {
    eyebrow: "COMPANY / STUDIO",
    title: "About Synth Labs",
    body: [
      ["What we build", "Synth Labs Digital Agency creates prompt systems, SEO micro-tools, client-side utilities, and custom web experiences."],
      ["How we work", "We favor focused scope, understandable interfaces, responsible claims, and technology choices that fit the actual problem."],
      ["Our metrics", "Every metric displayed on this site describes a verifiable product capability—not a fabricated customer, revenue, or performance claim."],
      ["Contact", "For questions, product feedback, or project inquiries, email support@synthlabs.com or use the support center."],
    ],
  },
};

function PricingPage({ proAccess, setProAccess, openTools }) {
  const activatePro = () => {
    localStorage.setItem("synthlabs_pro_access", "true");
    setProAccess(true);
  };
  const resetPro = () => {
    localStorage.removeItem("synthlabs_pro_access");
    setProAccess(false);
  };
  const comparison = [
    ["Core browser tools", "4 tools", "All 7 tools"],
    ["Search intent classification", "—", "Included"],
    ["Topical authority maps", "—", "Included"],
    ["Entity content auditing", "—", "Included"],
    ["Client-side processing", "Included", "Included"],
    ["API keys required", "None", "None"],
  ];
  return (
    <section className="pricing-page section-shell" data-testid="pricing-page">
      <div className="pricing-hero">
        <p className="eyebrow"><BadgeDollarSign size={14}/> SIMPLE MONTHLY ACCESS</p>
        <h1 data-testid="pricing-heading">Start free. Unlock deeper strategy for <span>$9 a month.</span></h1>
        <p data-testid="pricing-description">Choose the workspace that fits today. Both plans process tool inputs locally in your browser and require no external API keys.</p>
      </div>

      <div className="pricing-grid" data-testid="pricing-plan-grid">
        <article className="price-card" data-testid="free-plan-card">
          <div className="price-card-top"><span>FREE</span><Zap size={21}/></div>
          <h2>Free workspace</h2>
          <p className="price"><strong>$0</strong><span>/ forever</span></p>
          <p className="price-description">The essential toolkit for everyday content and SEO production.</p>
          <ul>
            <li><Check size={17}/> Prompt Engineer</li>
            <li><Check size={17}/> SEO & SERP Previewer</li>
            <li><Check size={17}/> Viral Hook Studio</li>
            <li><Check size={17}/> Readability Calculator</li>
          </ul>
          <button className="button outline" data-testid="free-plan-continue-button" onClick={openTools}>Continue with Free</button>
        </article>
        <article className="price-card featured" data-testid="pro-plan-card">
          <div className="popular-flag" data-testid="pro-popular-label">MINIMUM PRO PLAN</div>
          <div className="price-card-top"><span>SYNTH LABS PRO</span><BrainCircuit size={21}/></div>
          <h2>Strategy workspace</h2>
          <p className="price"><strong>$9</strong><span>/ month</span></p>
          <p className="price-description">Advanced local analysis for teams building sustainable search visibility.</p>
          <ul>
            <li><Check size={17}/> Everything in Free</li>
            <li><Check size={17}/> AI Search Intent Classifier</li>
            <li><Check size={17}/> Topical Authority Mapper</li>
            <li><Check size={17}/> Entity-Based Content Auditor</li>
          </ul>
          {proAccess ? <button className="button primary" data-testid="pro-open-tools-button" onClick={openTools}><Unlock size={18}/> Pro Active — Open Tools</button> : <button className="button primary" data-testid="pro-activate-demo-button" onClick={activatePro}><Unlock size={18}/> Activate Pro Demo</button>}
          <small data-testid="pro-demo-disclaimer">Demo gate only. No payment or subscription is created.</small>
          {proAccess && <button className="reset-demo" data-testid="pro-reset-demo-button" onClick={resetPro}>Reset demo access</button>}
        </article>
      </div>

      <div className="comparison-section" data-testid="plan-comparison-section">
        <div className="comparison-heading"><p className="eyebrow"><Gauge size={14}/> PLAN COMPARISON</p><h2>Clear differences, no hidden claims.</h2></div>
        <div className="comparison-table" role="table" aria-label="Plan comparison">
          <div className="comparison-header" role="row"><strong>Capability</strong><strong>Free</strong><strong>Pro · $9/mo</strong></div>
          {comparison.map(([feature, free, pro], index) => <div className="comparison-row" role="row" key={feature} data-testid={`comparison-row-${index + 1}`}><strong>{feature}</strong><span data-label="Free">{free}</span><span data-label="Pro · $9/mo">{pro}</span></div>)}
        </div>
      </div>

      <div className="pricing-note" data-testid="pricing-local-note"><ShieldCheck size={21}/><div><strong>Privacy-first by architecture</strong><p>Plan status and tool data remain in this browser for the current demo. The three Pro tools use local rule-based analysis and do not promise rankings or traffic outcomes.</p></div></div>
    </section>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("synthlabs_theme") !== "light");
  const [page, setPage] = useState(() => window.location.pathname === "/pricing" ? "pricing" : "home");
  const [proAccess, setProAccess] = useState(() => localStorage.getItem("synthlabs_pro_access") === "true");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [inquiryService, setInquiryService] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("synthlabs_theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = modal || drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal, drawerOpen]);

  useEffect(() => {
    const handleHistory = () => setPage(window.location.pathname === "/pricing" ? "pricing" : "home");
    window.addEventListener("popstate", handleHistory);
    return () => window.removeEventListener("popstate", handleHistory);
  }, []);

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };
  const copy = async (text, message) => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(text);
      notify(message);
    } catch {
      try {
        const fallback = document.createElement("textarea");
        fallback.value = text;
        fallback.setAttribute("readonly", "");
        fallback.style.position = "fixed";
        fallback.style.opacity = "0";
        document.body.appendChild(fallback);
        fallback.select();
        const copied = document.execCommand("copy");
        document.body.removeChild(fallback);
        notify(copied ? message : "Copy blocked — select the text manually");
      } catch {
        notify("Copy blocked — select the text manually");
      }
    }
  };
  const openInquiry = (service) => { setInquiryService(service); setModal("inquiry"); };
  const openPricing = () => {
    if (window.location.pathname !== "/pricing") window.history.pushState({}, "", "/pricing");
    setPage("pricing");
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const openSection = (id) => {
    if (page === "pricing") {
      window.history.pushState({}, "", "/");
      setPage("home");
      window.setTimeout(() => scrollToSection(id, id === "home" ? "auto" : "smooth"), 80);
    } else {
      scrollToSection(id, id === "home" ? "auto" : "smooth");
    }
  };

  const legal = legalContent[modal];
  return (
    <div className="app-shell" data-testid="synth-labs-app">
      <Header dark={dark} toggleTheme={() => setDark((value) => !value)} openSupport={() => setModal("support")} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} openPricing={openPricing} openSection={openSection} />
      <main>
        <div className="section-shell header-ad-wrap"><AdSlot id="adsense-header-slot">[ Ad Placeholder · Header Leaderboard (728x90 / 320x50) ]</AdSlot></div>
        {page === "pricing" ? <PricingPage proAccess={proAccess} setProAccess={setProAccess} openTools={() => openSection("tools")}/> : <>
          <Hero onSupport={() => setModal("support")} />
          <Metrics />
          <ToolsSuite copy={copy} proAccess={proAccess} openPricing={openPricing} />
          <div className="section-shell content-ad-grid">
            <AdSlot id="adsense-in-article-slot" variant="article">[ Ad Placeholder · AdSense In-Article Native Unit ]</AdSlot>
            <AdSlot id="adsense-sidebar-slot" variant="rectangle">[ Ad Placeholder · AdSense Sidebar Rectangle (300x250) ]</AdSlot>
          </div>
          <div className="section-shell mobile-ad-wrap"><AdSlot id="admob-mobile-slot" variant="mobile">[ Ad Placeholder · Future AdMob Mobile Banner (320x50) ]</AdSlot></div>
          <BudgetShowcase openBeta={() => setModal("beta")} />
          <Services openInquiry={openInquiry} />
          <About />
        </>}
      </main>
      <Footer openSupport={() => setModal("support")} openLegal={setModal} openPricing={openPricing} openSection={openSection} />
      <BottomNav dark={dark} toggleTheme={() => setDark((value) => !value)} openSupport={() => setModal("support")} openSection={openSection} />

      <Modal open={modal === "support"} onClose={() => setModal(null)} eyebrow="HELP CENTER" title="How can we help?" testId="support-modal">
        <p className="modal-intro" data-testid="support-modal-intro">Create a local support ticket, then choose whether to send it through your email app.</p>
        <ContactForm type="support" onDone={(id) => notify(`Ticket ${id} created`)} />
      </Modal>
      <Modal open={modal === "beta"} onClose={() => setModal(null)} eyebrow="SYNTHBUDGET" title="Closed beta access" testId="beta-modal">
        <div className="status-callout" data-testid="beta-status-callout"><Smartphone size={20}/><div><strong>Google Play review in progress</strong><p>SynthBudget is currently available to a limited closed-testing group. Submit your interest to save a local request and prepare an email notification.</p></div></div>
        <ContactForm type="beta" />
      </Modal>
      <Modal open={modal === "inquiry"} onClose={() => setModal(null)} eyebrow="AGENCY INQUIRY" title="Tell us about your project" testId="inquiry-modal">
        <p className="modal-intro" data-testid="inquiry-selected-service">Selected service: <strong>{inquiryService}</strong></p>
        <ContactForm type="inquiry" service={inquiryService} />
      </Modal>
      <Modal open={Boolean(legal)} onClose={() => setModal(null)} eyebrow={legal?.eyebrow || "LEGAL"} title={legal?.title || "Information"} testId="legal-modal">
        <div className="legal-copy" data-testid="legal-modal-content">{legal?.body.map(([heading, copyText], index) => <section key={heading} data-testid={`legal-section-${index + 1}`}><h3>{heading}</h3><p>{copyText}</p></section>)}</div>
      </Modal>
      {toast && <div className="toast" role="status" data-testid="app-toast"><Check size={17}/>{toast}</div>}
    </div>
  );
}