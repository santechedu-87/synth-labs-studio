```react
import React, { useState } from 'react';
import { 
  Zap, 
  Code2, 
  Search, 
  Share2, 
  Sliders, 
  FileCode2, 
  Calculator, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Copy,
  ChevronRight,
  Menu,
  X,
  Mail,
  ArrowRight,
  BookOpen,
  Info,
  Scale,
  Shield,
  Send,
  Smartphone,
  CheckCircle2,
  Terminal
} from 'lucide-react';

export default function App() {
  // Navigation & Drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Active Interactive Tool ('prompt' | 'serp' | 'hooks' | 'keyword' | 'schema' | 'roi')
  const [activeTool, setActiveTool] = useState('prompt');
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  // Legal & Info Modals: 'about' | 'privacy' | 'terms' | 'contact' | 'guides' | null
  const [activeModal, setActiveModal] = useState(null);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  // =========================================================================
  // LEMON SQUEEZY CHECKOUT LINKS (Replace with your actual product URLs)
  // =========================================================================
  const CHECKOUT_LINKS = {
    synthbudget_pro: "https://synthlabsstudio.lemonsqueezy.com/buy/product-id-synthbudget", // $4.99/mo subscription
    dns_ssl: "https://synthlabsstudio.lemonsqueezy.com/buy/product-id-dns-ssl",             // $49 one-time
    react_ui: "https://synthlabsstudio.lemonsqueezy.com/buy/product-id-react-ui",           // $99 one-time
    speed_tuning: "https://synthlabsstudio.lemonsqueezy.com/buy/product-id-speed-tuning"    // $199 one-time
  };

  // --- TOOL 1: PROMPT ARCHITECT STATE ---
  const [promptPersona, setPromptPersona] = useState('Senior SEO Strategist');
  const [promptAudience, setPromptAudience] = useState('B2B Founders and Content Marketers');
  const [promptTask, setPromptTask] = useState('Build a topical cluster content map with search intent');
  const [promptTone, setPromptTone] = useState('Clear, data-driven, and authoritative');

  // --- TOOL 2: SERP PREVIEWER STATE ---
  const [serpTitle, setSerpTitle] = useState('Synth Labs Studio | Precision AI Tools & Web Development');
  const [serpUrl, setSerpUrl] = useState('https://www.synthlabsstudio.com');
  const [serpDesc, setSerpDesc] = useState('Practical browser-based micro-tools, custom digital products, and honest growth consulting built for creators and teams.');

  // --- TOOL 3: VIRAL HOOK STUDIO STATE ---
  const [hookTopic, setHookTopic] = useState('AI workflows for small business owners');
  const [hookAngle, setHookAngle] = useState('Curiosity Gap');
  const [generatedHooks, setGeneratedHooks] = useState([
    "Most business owners waste 15 hours a week doing this manually. Here is the 3-step automated setup:",
    "Why 90% of AI implementations fail (and the 1 prompt constraint that fixes it):",
    "Stop buying overpriced SaaS subscriptions. Here is how we built a streamlined workflow in 1 afternoon."
  ]);

  // --- TOOL 4: KEYWORD DENSITY ANALYZER STATE ---
  const [kwTarget, setKwTarget] = useState('tools');
  const [kwText, setKwText] = useState('Synth Labs Studio creates precision browser tools and client side engineering utilities for modern developers and creators.');

  // --- TOOL 5: SCHEMA GENERATOR STATE ---
  const [appName, setAppName] = useState('Synth Labs Suite');
  const [schemaType, setSchemaType] = useState('WebApplication');

  // --- TOOL 6: ROI CALCULATOR STATE ---
  const [hoursSaved, setHoursSaved] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(45);

  // Helper: Copy to Clipboard
  const copyToClipboard = (text, index) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  // Helper: Dynamic Hook Generator
  const handleGenerateHooks = () => {
    const topic = hookTopic.trim() || 'your current workflow';
    if (hookAngle === 'Curiosity Gap') {
      setGeneratedHooks([
        `The single fatal flaw in most ${topic} setups that nobody is talking about:`,
        `Why high-performing teams are abandoning traditional methods for ${topic}:`,
        `How to achieve 10x leverage with ${topic} without paying recurring SaaS fees:`
      ]);
    } else if (hookAngle === 'Contrarian') {
      setGeneratedHooks([
        `Unpopular opinion: 95% of advice regarding ${topic} is completely obsolete.`,
        `Stop wasting budget on bloated software for ${topic}. Here is what actually moves the needle:`,
        `Why lightweight client-side tools beat enterprise packages when tackling ${topic}:`
      ]);
    } else {
      setGeneratedHooks([
        `Step-by-step blueprint: How we standardized ${topic} in under 30 minutes.`,
        `The exact production checklist we use for ${topic} every single week:`,
        `3 zero-cost adjustments to optimize ${topic} starting today:`
      ]);
    }
  };

  // Helper: Keyword Density Calculation
  const getKeywordMetrics = () => {
    if (!kwText.trim()) return { count: 0, totalWords: 0, density: 0 };
    const words = kwText.toLowerCase().match(/\b[a-z0-9'-]+\b/g) || [];
    const target = kwTarget.toLowerCase().trim();
    if (!target) return { count: 0, totalWords: words.length, density: 0 };
    const matches = words.filter(w => w === target || w.includes(target));
    const density = words.length > 0 ? ((matches.length / words.length) * 100).toFixed(1) : 0;
    return { count: matches.length, totalWords: words.length, density };
  };

  const kwMetrics = getKeywordMetrics();

  // Contact Form Submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactEmail.trim() || !contactMessage.trim()) return;
    setContactSent(true);
    setTimeout(() => {
      window.location.href = `mailto:sancares87@gmail.com?subject=Synth%20Labs%20Inquiry%20from%20${encodeURIComponent(contactName || 'Website Visitor')}&body=${encodeURIComponent(contactMessage + '\n\nSender Email: ' + contactEmail)}`;
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* 1. TOP LIVE STUDIO STATUS BANNER */}
      <div className="bg-[#051c14] border-b border-emerald-800/40 px-4 py-1.5 text-xs text-center text-emerald-400 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Official Live Studio: <strong className="text-white">synthlabsstudio.com</strong> &bull; Zero-API Client Tools &amp; High-Performance Engineering</span>
      </div>

      {/* 2. STICKY HEADER & NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#030712]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 via-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-950/40">
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-base text-white block leading-tight">SYNTH LABS</span>
              <span className="text-[10px] tracking-widest text-emerald-400 font-bold block uppercase">Digital Agency &amp; Tools</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#overview" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#tools" className="hover:text-emerald-400 transition-colors">Tools Suite</a>
            <a href="#guides" className="hover:text-emerald-400 transition-colors">Guides &amp; Docs</a>
            <a href="#synthbudget" className="hover:text-emerald-400 transition-colors">SynthBudget App</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services ($49-$199)</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing &amp; Plans</a>
            <button onClick={() => setActiveModal('about')} className="hover:text-emerald-400 transition-colors">About</button>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="#pricing"
              className="px-4 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/60 transition-all shadow-sm"
            >
              Get Pro Access
            </a>
          </div>

          {/* Mobile Drawer Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070d18] border-b border-slate-800 px-4 py-4 space-y-2.5">
            <a 
              href="#overview" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 py-1.5"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>⚡ Home Overview</span>
            </a>
            <a 
              href="#tools" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 py-1.5"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>🛠 Tools Suite (6 Client Utilities)</span>
            </a>
            <a 
              href="#guides" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 py-1.5"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>📖 Guides &amp; Content Documentation</span>
            </a>
            <a 
              href="#synthbudget" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-emerald-400 py-1.5"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>📱 SynthBudget Android App</span>
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 py-1.5"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>💼 Agency &amp; Micro Services ($49 - $199)</span>
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 py-1.5"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>💳 Pricing &amp; Plans</span>
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setActiveModal('about'); }} 
              className="w-full flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 py-1.5 text-left"
            >
              <Info className="w-4 h-4 text-emerald-400" />
              <span>ℹ️ About Synth Labs</span>
            </button>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-emerald-400 py-1.5"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>✉️ Contact &amp; Inquiries</span>
            </a>
          </div>
        )}
      </header>

      {/* 3. AD AREA BANNER PLACEHOLDER (Google AdSense Responsive Unit) */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <div className="bg-[#050b14] border border-dashed border-slate-800 rounded-xl p-3 text-center flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <span className="px-2 py-0.5 rounded bg-slate-900 text-emerald-400 font-mono font-bold uppercase text-[9px]">AD AREA</span>
          <span>Google AdSense Responsive Unit (Header Leaderboard 728x90 / Mobile 320x50)</span>
          <span className="text-slate-600 font-mono">synthlabsstudio.com</span>
        </div>
      </div>

      {/* 4. HERO SECTION */}
      <section id="overview" className="relative pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Gen AI &amp; SEO Studio</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none">
          Precision AI Tools <span className="text-emerald-400">&bull;</span> Web Development <span className="text-emerald-400">&bull;</span> Digital Growth
        </h1>

        <p className="mt-5 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Practical browser-based micro-tools, custom digital products, and honest growth consulting—built for creators and teams who value clarity over hype.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#tools"
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
          >
            <span>Explore Tools Suite</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#synthbudget"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>Explore SynthBudget App</span>
          </a>
        </div>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Client-Side Processing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>0 API Charges</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified HTTPS on Vercel</span>
          </div>
        </div>
      </section>

      {/* 5. CODE CONSOLE MOCKUP */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="bg-[#070d18] border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl font-mono text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4 text-slate-500 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span>live_tool_preview.sh</span>
          </div>
          <p className="text-slate-500">// Build a production-ready instruction</p>
          <p className="mt-1">
            <span className="text-indigo-400">const</span> <span className="text-teal-300">prompt</span> = <span className="text-emerald-400">engineer</span>({`{`}
          </p>
          <p className="pl-4">role: <span className="text-amber-300">"{promptPersona}"</span>,</p>
          <p className="pl-4">task: <span className="text-amber-300">"{promptTask}"</span>,</p>
          <p className="pl-4">tone: <span className="text-amber-300">"{promptTone}"</span>,</p>
          <p className="pl-4">status: <span className="text-emerald-400">"Prompt ready — 0 API calls"</span></p>
          <p>{`}`});</p>
          <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between text-emerald-400 text-xs">
            <span>✓ Structured prompt generated locally</span>
            <span className="text-slate-500 font-mono">0ms</span>
          </div>
        </div>
      </div>

      {/* 6. INTERACTIVE BROWSER SUITE (ALL 6 CLIENT UTILITIES) */}
      <section id="tools" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/80">
        <div className="flex items-center gap-2.5 mb-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-black text-white">Interactive Browser Suite</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">Select a tool below. Everything runs instant client-side with 0 API cost.</p>

        {/* Tool Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'prompt', name: 'Prompt Architect' },
            { id: 'serp', name: 'SERP Previewer' },
            { id: 'hooks', name: 'Viral Hook Studio' },
            { id: 'keyword', name: 'Keyword Density' },
            { id: 'schema', name: 'Schema Generator' },
            { id: 'roi', name: 'ROI Calculator' }
          ].map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTool === tool.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tool.name}
            </button>
          ))}
        </div>

        {/* TOOL 1: PROMPT ARCHITECT */}
        {activeTool === 'prompt' && (
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <h3 className="text-base font-bold text-white">System Prompt Architect</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">Universal LLM</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Target AI Persona / Role</label>
                <input 
                  type="text" 
                  value={promptPersona} 
                  onChange={(e) => setPromptPersona(e.target.value)} 
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Target Audience &amp; Intent</label>
                <input 
                  type="text" 
                  value={promptAudience} 
                  onChange={(e) => setPromptAudience(e.target.value)} 
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Task Instructions &amp; Constraints</label>
                <input 
                  type="text" 
                  value={promptTask} 
                  onChange={(e) => setPromptTask(e.target.value)} 
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Tone &amp; Formatting Style</label>
                <input 
                  type="text" 
                  value={promptTone} 
                  onChange={(e) => setPromptTone(e.target.value)} 
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
            </div>

            {/* Compiled Output Block */}
            <div className="mt-4 p-4 rounded-xl bg-[#040811] border border-slate-800 font-mono text-xs text-slate-300">
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800/80">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">COMPILED OUTPUT</span>
                <button 
                  onClick={() => copyToClipboard(`Act as a ${promptPersona}.\n\nTarget Audience:\n${promptAudience}\n\nTask:\n${promptTask}\n\nTone & Style:\n${promptTone}\n\nOutput Guidelines:\n- Structure your response using markdown headings and bullet points.\n- Eliminate introductory conversational filler.`, 'prompt')}
                  className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-700 hover:border-emerald-500 text-emerald-400 rounded-lg text-xs transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 'prompt' ? 'Copied to Clipboard!' : 'Copy Prompt'}</span>
                </button>
              </div>
              <p className="text-slate-300">Act as a <span className="text-emerald-400 font-semibold">{promptPersona}</span>.</p>
              <p className="mt-2 text-slate-400">Target Audience:</p>
              <p className="text-slate-200">{promptAudience}</p>
              <p className="mt-2 text-slate-400">Task:</p>
              <p className="text-slate-200">{promptTask}</p>
              <p className="mt-2 text-slate-400">Tone &amp; Style:</p>
              <p className="text-slate-200">{promptTone}</p>
              <p className="mt-2 text-slate-400">Output Guidelines:</p>
              <p className="text-slate-300">- Structure your response using markdown headings and bullet points.</p>
              <p className="text-slate-300">- Eliminate introductory conversational filler.</p>
              <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between text-[11px] text-slate-500">
                <span>Ready for GPT-4o, Claude 3.5 Sonnet, &amp; Gemini Pro</span>
                <span className="text-emerald-400 font-semibold">Instant local compile</span>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 2: SERP PREVIEWER */}
        {activeTool === 'serp' && (
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4">
            <h3 className="text-base font-bold text-white">Google SERP Snippet Previewer</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">SEO Title Tag ({serpTitle.length} / 60 recommended chars)</label>
                <input 
                  type="text" 
                  value={serpTitle} 
                  onChange={(e) => setSerpTitle(e.target.value)} 
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Target Canonical URL</label>
                <input 
                  type="text" 
                  value={serpUrl} 
                  onChange={(e) => setSerpUrl(e.target.value)} 
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Meta Description ({serpDesc.length} / 160 recommended chars)</label>
                <textarea 
                  rows={2}
                  value={serpDesc} 
                  onChange={(e) => setSerpDesc(e.target.value)} 
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-[#040811] border border-slate-800">
              <span className="text-[11px] text-slate-500 block mb-2 font-mono">Google Desktop &amp; Mobile SERP Simulation</span>
              <div className="text-xs text-slate-400 truncate">{serpUrl}</div>
              <div className="text-base font-medium text-[#8ab4f8] hover:underline cursor-pointer truncate mt-0.5">{serpTitle}</div>
              <div className="text-xs text-slate-300 mt-1 leading-relaxed">{serpDesc}</div>
            </div>
          </div>
        )}

        {/* TOOL 3: VIRAL HOOK STUDIO */}
        {activeTool === 'hooks' && (
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4">
            <h3 className="text-base font-bold text-white">Viral Content Hook Generator</h3>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Topic / Problem Statement</label>
              <input 
                type="text" 
                value={hookTopic}
                onChange={(e) => setHookTopic(e.target.value)}
                className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Psychological Hook Angle</label>
              <select 
                value={hookAngle} 
                onChange={(e) => setHookAngle(e.target.value)}
                className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
              >
                <option value="Curiosity Gap">Curiosity Gap</option>
                <option value="Contrarian">Contrarian / Hot Take</option>
                <option value="Framework">Actionable Framework / Step-by-Step</option>
              </select>
            </div>
            <button 
              onClick={handleGenerateHooks}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate Fresh Angles</span>
            </button>

            <div className="mt-5 space-y-2">
              <label className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">Generated Angles for Social &amp; Blogs</label>
              {generatedHooks.map((hook, idx) => (
                <div key={idx} className="bg-[#070d18] border border-slate-800/90 rounded-xl p-3 flex items-center justify-between gap-3 text-xs text-slate-300">
                  <p className="leading-relaxed font-sans">"{hook}"</p>
                  <button 
                    onClick={() => copyToClipboard(hook, idx)}
                    className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 shrink-0 text-slate-400 transition-colors"
                  >
                    {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TOOL 4: KEYWORD DENSITY */}
        {activeTool === 'keyword' && (
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4">
            <h3 className="text-base font-bold text-white">Client-Side Keyword Density Analyzer</h3>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Target Keyword to Check</label>
              <input 
                type="text" 
                value={kwTarget}
                onChange={(e) => setKwTarget(e.target.value)}
                className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Content Body Text</label>
              <textarea 
                rows={4}
                value={kwText}
                onChange={(e) => setKwText(e.target.value)}
                className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
              />
            </div>
            <div className="p-4 bg-[#070d18] border border-slate-800 rounded-xl flex items-center justify-around text-center">
              <div>
                <span className="text-[11px] text-slate-500 block">Occurrences</span>
                <span className="text-xl font-bold text-emerald-400">{kwMetrics.count}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Total Words</span>
                <span className="text-xl font-bold text-white">{kwMetrics.totalWords}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">Density</span>
                <span className="text-xl font-bold text-teal-300">{kwMetrics.density}%</span>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 5: SCHEMA GENERATOR */}
        {activeTool === 'schema' && (
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4">
            <h3 className="text-base font-bold text-white">JSON-LD Structured Data Generator</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Application Name</label>
                <input 
                  type="text" 
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Schema Type</label>
                <select 
                  value={schemaType}
                  onChange={(e) => setSchemaType(e.target.value)}
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                >
                  <option value="WebApplication">WebApplication</option>
                  <option value="SoftwareApplication">SoftwareApplication</option>
                  <option value="Organization">Organization</option>
                </select>
              </div>
            </div>
            <div className="p-4 bg-[#070d18] border border-slate-800 rounded-xl font-mono text-xs text-emerald-400 relative">
              <div className="flex justify-between items-center mb-2 text-slate-500 text-[11px]">
                <span>Valid JSON-LD Schema</span>
                <button 
                  onClick={() => copyToClipboard(`{\n  "@context": "https://schema.org",\n  "@type": "${schemaType}",\n  "name": "${appName}",\n  "url": "https://www.synthlabsstudio.com",\n  "applicationCategory": "DeveloperApplication"\n}`, 'schema')}
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedIndex === 'schema' ? 'Copied!' : 'Copy Schema'}</span>
                </button>
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap">{`{
  "@context": "https://schema.org",
  "@type": "${schemaType}",
  "name": "${appName}",
  "url": "https://www.synthlabsstudio.com",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  }
}`}</pre>
            </div>
          </div>
        )}

        {/* TOOL 6: ROI CALCULATOR */}
        {activeTool === 'roi' && (
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-4">
            <h3 className="text-base font-bold text-white">Client-Side Automation ROI Calculator</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Hours Saved per Month</label>
                <input 
                  type="number" 
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(Number(e.target.value))}
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Hourly Billing Rate ($)</label>
                <input 
                  type="number" 
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full bg-[#070d18] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:border-emerald-500 outline-none"
                />
              </div>
            </div>
            <div className="p-5 bg-[#070d18] border border-slate-800 rounded-xl text-center">
              <span className="text-xs text-slate-400 block">Estimated Annual Value Unlocked</span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1 block">
                ${(hoursSaved * hourlyRate * 12).toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 block mt-1">Based on client-side efficiency &amp; Zero-API architecture</span>
            </div>
          </div>
        )}
      </section>

      {/* 7. SYNTHBUDGET ANDROID APP SHOWCASE */}
      <section id="synthbudget" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/80">
        <div className="bg-[#0b1322] border border-slate-800 rounded-3xl p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold mb-4">
            <span>Mobile Product in Active Testing</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">SynthBudget Android App</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Intelligent expense tracker, cashflow analyzer, and budget forecaster engineered for privacy-conscious individuals and freelancers.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Fast offline-first entry with instant local SQLite storage</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Automated cashflow breakdown and predictive month-end balance</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Optional ad-free subscription ($4.99/mo) with cloud backup</span>
              </div>
              <div className="pt-3">
                <a 
                  href="#pricing"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                >
                  <span>View Subscription Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Google Play Closed Testing Card */}
            <div className="bg-[#070d18] border border-slate-800 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 mx-auto rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-sm font-bold text-white">Google Play Store Closed Testing</h3>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                The app is undergoing closed tester group review. The direct Google Play Store download link will be published here upon completion of store compliance.
              </p>
              <div className="mt-4 inline-block px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[10px] text-emerald-400 font-mono">
                Target: Google Play Store Release
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GUIDES, RESEARCH & TECHNICAL TUTORIALS (ADSENSE CONTENT DEPTH) */}
      <section id="guides" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/80">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white">Guides, Research &amp; Technical Tutorials</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">In-depth documentation covering algorithmic prompt design, Core Web Vitals, and scalable monetization architectures.</p>
        </div>

        <div className="mt-6 space-y-5">
          {/* Article 1 */}
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                PROMPT ENGINEERING &bull; 6 MIN READ
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Updated: 2026</span>
            </div>
            <h3 className="text-base font-bold text-white">How System Constraints and Persona Framing Prevent LLM Hallucinations</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Large language models (LLMs) operate probabilistically, generating next-token completions based on statistical weights. When prompts are vague or open-ended, the model fills context gaps with plausible-sounding inaccuracies.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-[#070d18] border border-slate-800/90 text-xs text-slate-300 space-y-1.5">
              <span className="text-[11px] font-bold text-slate-200 block mb-1">The 3 Structural Rules for Reliable Outputs:</span>
              <p>&bull; <strong className="text-emerald-400">Negative Constraints:</strong> Explicitly forbid conversational fluff (e.g., "Do not include introductory commentary").</p>
              <p>&bull; <strong className="text-emerald-400">Schema Definition:</strong> Force outputs into Markdown tables, bullet lists, or valid JSON payloads.</p>
              <p>&bull; <strong className="text-emerald-400">Domain Calibration:</strong> Assign a specific senior persona to narrow the probability distribution of generated tokens.</p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-950 border border-teal-500/30 text-teal-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                TECHNICAL SEO &bull; 5 MIN READ
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Updated: 2026</span>
            </div>
            <h3 className="text-base font-bold text-white">Mastering Core Web Vitals for React Single Page Applications</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Single Page Applications (SPAs) built with React or Vite provide fast client interactions, but without careful asset loading, they risk failing Google's Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) thresholds.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-[#070d18] border border-slate-800/90 text-xs text-slate-300 space-y-1.5">
              <span className="text-[11px] font-bold text-slate-200 block mb-1">Core Optimization Techniques Applied on Synth Labs:</span>
              <p>&bull; <strong className="text-teal-300">Preconnecting Google Fonts:</strong> Eliminates font rendering delay during initial page load.</p>
              <p>&bull; <strong className="text-teal-300">Zero-Dependency Client State:</strong> Reduces bundle payloads by executing parsing locally inside standard Web APIs.</p>
              <p>&bull; <strong className="text-teal-300">Edge CDN Hosting:</strong> Utilizing Anycast Vercel Edge networks to deliver sub-100ms TTFB globally.</p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-[#0b1322] border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-400 font-mono text-[10px] uppercase tracking-wider font-bold">
                MONETIZATION &bull; 8 MIN READ
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Updated: 2026</span>
            </div>
            <h3 className="text-base font-bold text-white">The Modern Hybrid Revenue Blueprint: AdSense + AdMob + Micro-Services</h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              Relying exclusively on client freelance work produces unpredictable revenue fluctuations. By integrating web-based utility traffic with Google AdSense, Android mobile applications powered by AdMob, and micro-service consulting packages, modern digital builders create resilient multi-stream income engines.
            </p>
          </div>
        </div>
      </section>

      {/* 9. ON-DEMAND MICRO SERVICES ($49 - $199) */}
      <section id="services" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/80">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-white">On-Demand Micro Services</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Fixed-price engineering setups. No retainers, 24-hour delivery initiation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1: $49 */}
          <div className="bg-[#070d18] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Starter Setup</span>
                <span className="text-2xl font-black text-white">$49</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Custom DNS &amp; SSL Setup</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete setup of custom domain routing, SSL certificate provisioning, Cloudflare/Vercel DNS management, and apex domain redirects.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a 
                href={CHECKOUT_LINKS.dns_ssl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-950/40 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Book Setup ($49)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Service 2: $99 */}
          <div className="bg-[#070d18] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Development</span>
                <span className="text-2xl font-black text-white">$99</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">React / Tailwind UI Component</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Custom client-side single-purpose utility tool, interactive calculator, or responsive frontend component built with React, Vite, and Tailwind CSS.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a 
                href={CHECKOUT_LINKS.react_ui} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-950/40 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Order UI Component ($99)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Service 3: $199 */}
          <div className="bg-[#070d18] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Optimization</span>
                <span className="text-2xl font-black text-white">$199</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Core Web Vitals &amp; Speed Tuning</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                End-to-end performance audit, script debundling, zero-latency caching strategies, SEO metadata schema implementation, and 95+ PageSpeed optimization.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a 
                href={CHECKOUT_LINKS.speed_tuning} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-950/40 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>Order Speed Audit ($199)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLEAR & HONEST PRICING TIERS */}
      <section id="pricing" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Clear &amp; Honest Pricing Tiers</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Select free browser utilities, affordable micro-services, or app subscriptions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Card 1: Starter Tools */}
          <div className="bg-[#070d18] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Starter Tools</span>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">$0</span>
                <span className="text-xs text-slate-400">/ lifetime</span>
              </div>
              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All 6 browser tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No account creation needed</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ad-supported experience</span>
                </li>
              </ul>
            </div>
            <a 
              href="#tools"
              className="mt-8 w-full py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold text-center transition-all block"
            >
              Use Free Tools
            </a>
          </div>

          {/* Card 2: SynthBudget Pro (Featured Center Card) */}
          <div className="bg-[#0b1322] border-2 border-emerald-500/80 rounded-3xl p-6 sm:p-8 relative shadow-2xl shadow-emerald-950/50 flex flex-col justify-between md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider">
              Mobile App
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">SynthBudget Pro</span>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">$4.99</span>
                <span className="text-xs text-slate-400">/ month</span>
              </div>
              <ul className="mt-6 space-y-3 text-xs text-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ad-free mobile experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited budget allocations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cloud sync &amp; data backup</span>
                </li>
              </ul>
            </div>
            <a 
              href={CHECKOUT_LINKS.synthbudget_pro}
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold text-center transition-all shadow-lg shadow-emerald-500/20 block"
            >
              Explore App Pro
            </a>
          </div>

          {/* Card 3: Micro Services */}
          <div className="bg-[#070d18] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Micro Services</span>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">$49 - $199</span>
              </div>
              <ul className="mt-6 space-y-3 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom DNS &amp; SSL setups</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>React / Tailwind development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Core Web Vitals speed tuning</span>
                </li>
              </ul>
            </div>
            <a 
              href="#services"
              className="mt-8 w-full py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold text-center transition-all block"
            >
              View Service Tiers
            </a>
          </div>

        </div>
      </section>

      {/* 11. CONTACT & SUPPORT SECTION */}
      <section id="contact" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/80">
        <div className="bg-[#0b1322] border border-slate-800 rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white">Contact &amp; Support</h2>
          <p className="text-xs text-slate-400 mt-1">Have a question about Synth Labs Studio or need assistance with custom engineering? Send a message below.</p>

          {contactSent ? (
            <div className="mt-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center text-xs text-emerald-400 space-y-2">
              <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-400" />
              <p className="font-bold">Opening your email client...</p>
              <p className="text-slate-300">If your email client didn't open automatically, write directly to <strong className="text-white">sancares87@gmail.com</strong>.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Alex Morgan"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-[#070d18] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-[#070d18] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Message / Inquiry Details</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Describe your technical requirements, question, or project scope..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="w-full bg-[#070d18] border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-emerald-500 outline-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Message</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="border-t border-slate-800/80 bg-[#02050b] py-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-slate-300">SYNTH LABS STUDIO</span>
              <span>&copy; {new Date().getFullYear()} synthlabsstudio.com. All rights reserved.</span>
            </div>
            
            {/* Compliance Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
              <a href="#overview" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#tools" className="hover:text-emerald-400 transition-colors">Tools</a>
              <a href="#guides" className="hover:text-emerald-400 transition-colors">Guides</a>
              <a href="#synthbudget" className="hover:text-emerald-400 transition-colors">SynthBudget</a>
              <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
              <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
              <button onClick={() => setActiveModal('about')} className="hover:text-emerald-400 transition-colors">About</button>
              <button onClick={() => setActiveModal('privacy')} className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
              <button onClick={() => setActiveModal('terms')} className="hover:text-emerald-400 transition-colors">Terms of Service</button>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-900 text-center text-[11px] text-slate-600">
            Payments securely processed by Lemon Squeezy (Merchant of Record). All client tools run locally in your browser.
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 13. FULL NATURAL COMPLIANCE MODALS (ADSENSE & POLICY VERIFIED)            */}
      {/* ========================================================================= */}

      {/* ABOUT US MODAL */}
      {activeModal === 'about' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0b1322] border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <Info className="w-5 h-5" />
                <span>About Synth Labs Studio</span>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            
            <p><strong>Synth Labs Studio</strong> (<a href="https://www.synthlabsstudio.com" className="text-emerald-400 underline">synthlabsstudio.com</a>) is an independent engineering laboratory and digital consultancy founded to build high-performance, privacy-respecting browser utilities, developer tools, and lightweight SaaS architectures.</p>
            
            <h4 className="text-white font-bold text-sm pt-2">Our Philosophy: Zero-API, Maximum Speed</h4>
            <p>Unlike conventional web utilities that harvest user prompts, keywords, or text inputs on centralized cloud databases, all 6 micro-tools inside the Synth Labs Interactive Suite execute <strong>100% client-side in the user's browser</strong>. This ensures zero latency, zero cloud API fees, and absolute user privacy.</p>
            
            <h4 className="text-white font-bold text-sm pt-2">Digital Engineering &amp; Consulting</h4>
            <p>Beyond our open web utilities, Synth Labs provides direct micro-services—including custom domain DNS &amp; SSL hardening, bespoke React/Tailwind frontend interfaces, and Core Web Vitals optimization to help modern creators ship performant web software.</p>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-5 py-2 bg-emerald-500 text-slate-950 font-bold rounded-lg text-xs">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* PRIVACY POLICY MODAL (AdSense & Cookie Compliant) */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0b1322] border border-slate-700 max-w-3xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <Shield className="w-5 h-5" />
                <span>Privacy Policy &amp; Cookie Disclosure</span>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 hover:text-white"><X className="w-5 h-5" /></button>
            </div>

            <p className="text-[11px] text-slate-500">Last updated: {new Date().getFullYear()} &bull; Effective immediately</p>

            <h4 className="text-white font-bold text-sm">1. Information We Do Not Collect</h4>
            <p>Synth Labs Studio prioritizes data minimization. All browser tools (Prompt Architect, SERP Previewer, Hook Generator, Keyword Density Analyzer, Schema Generator, ROI Calculator) process computations locally in JavaScript. We do not store or transmit your inputted queries to any server.</p>

            <h4 className="text-white font-bold text-sm">2. Google AdSense &amp; Third-Party Cookies</h4>
            <p>We use Google AdSense and third-party advertising partners to display advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this website or other sites on the Internet.</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Google's use of advertising cookies (including DoubleClick / DART cookies) enables it and its partners to serve ads to users based on their visits.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-emerald-400 underline">Google Ads Settings</a>.</li>
            </ul>

            <h4 className="text-white font-bold text-sm">3. Payments &amp; Merchant of Record</h4>
            <p>Purchases of SynthBudget Pro and digital micro-services are securely handled by our merchant of record partner, <strong>Lemon Squeezy, LLC</strong>. When making a purchase, your billing details are processed directly by Lemon Squeezy under strict PCI-DSS standards.</p>

            <h4 className="text-white font-bold text-sm">4. Contact Information</h4>
            <p>For inquiries regarding this privacy policy or data requests, contact us directly at <a href="mailto:sancares87@gmail.com" className="text-emerald-400 underline">sancares87@gmail.com</a>.</p>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-5 py-2 bg-emerald-500 text-slate-950 font-bold rounded-lg text-xs">Accept &amp; Close</button>
            </div>
          </div>
        </div>
      )}

      {/* TERMS OF SERVICE MODAL */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0b1322] border border-slate-700 max-w-3xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                <Scale className="w-5 h-5" />
                <span>Terms of Service &amp; Copyright Notice</span>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-1 hover:text-white"><X className="w-5 h-5" /></button>
            </div>

            <h4 className="text-white font-bold text-sm">1. Intellectual Property &amp; Copyright</h4>
            <p>All brand assets, custom code architectures, logos, interfaces, and content published under <strong>synthlabsstudio.com</strong> are the copyrighted property of <strong>Synth Labs Studio &copy; {new Date().getFullYear()}</strong>. Unauthorized reproduction or malicious scraping of client utility architectures is strictly prohibited.</p>

            <h4 className="text-white font-bold text-sm">2. Use of Free Client Utilities</h4>
            <p>All browser-based utilities are provided "as-is" for personal and commercial productivity. While calculated metrics and schema generations follow official technical guidelines, Synth Labs Studio makes no warranties regarding external search engine algorithm shifts or ranking outcomes.</p>

            <h4 className="text-white font-bold text-sm">3. Micro-Service Deliverables &amp; Refunds</h4>
            <p>Micro-service packages ($49, $99, $199) represent dedicated developer hours and configuration audits. Work commences within 24 hours of order confirmation. Digital subscriptions to SynthBudget Pro ($4.99/mo) can be canceled at any time directly through the Lemon Squeezy billing portal.</p>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button onClick={() => setActiveModal(null)} className="px-5 py-2 bg-emerald-500 text-slate-950 font-bold rounded-lg text-xs">Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
```
