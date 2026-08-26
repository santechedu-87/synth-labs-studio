import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Share2, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight, 
  Check, 
  Copy, 
  Layers, 
  Zap, 
  ExternalLink,
  Code2,
  Lock,
  ChevronRight,
  Menu,
  X,
  CreditCard,
  FileText,
  HelpCircle,
  Mail,
  Send,
  CheckCircle2,
  Cpu,
  BookOpen,
  Sliders,
  DollarSign,
  Globe,
  Terminal,
  Activity,
  Award,
  Users
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'tools', 'posts', 'synthbudget', 'services', 'pricing', 'about', 'privacy', 'terms', 'contact'
  const [activeTool, setActiveTool] = useState('prompt');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedState, setCopiedState] = useState('');

  // Tool 1: AI Prompt Engineer
  const [promptRole, setPromptRole] = useState('Senior SEO Strategist');
  const [promptTask, setPromptTask] = useState('Build a topical cluster content map with search intent');
  const [promptTone, setPromptTone] = useState('Clear, data-driven, and authoritative');
  const [promptAudience, setPromptAudience] = useState('B2B Founders and Content Marketers');

  // Tool 2: SEO SERP Previewer
  const [metaTitle, setMetaTitle] = useState('Synth Labs Studio | Precision AI Tools & Web Development');
  const [metaDesc, setMetaDesc] = useState('Practical browser-based micro-tools, custom digital products, and honest growth consulting—built for creators and teams who value clarity over hype.');
  const [metaSlug, setMetaSlug] = useState('ai-growth-suite');

  // Tool 3: Social Viral Hook Generator
  const [hookTopic, setHookTopic] = useState('AI workflows for small business owners');
  const [hookStyle, setHookStyle] = useState('Curiosity Gap');
  const [generatedHooks, setGeneratedHooks] = useState([
    "Most business owners waste 15 hours a week doing this manually. Here is the 3-step automated setup:",
    "Why 90% of AI implementations fail (and the 1 prompt constraint that fixes it):",
    "Stop buying overpriced SaaS subscriptions. Here is how we built a streamlined workflow in 1 afternoon:"
  ]);

  // Tool 4: Keyword Density Counter
  const [densityText, setDensityText] = useState('Synth Labs Studio provides fast digital tools, SEO snippet previewers, and prompt engineering utilities. Our goal is to make web optimization simple and accessible.');

  // Tool 5: JSON Schema & Meta Tag Generator
  const [schemaName, setSchemaName] = useState('Synth Labs Studio');
  const [schemaUrl, setSchemaUrl] = useState('https://synthlabsstudio.com');
  const [schemaDesc, setSchemaDesc] = useState('Precision web tools and modern frontend engineering.');
  const [schemaType, setSchemaType] = useState('Organization');

  // Tool 6: Budget & Ad ROI Estimator
  const [monthlyTraffic, setMonthlyTraffic] = useState(25000);
  const [estimatedCpm, setEstimatedCpm] = useState(3.2);
  const [appSubscribers, setAppSubscribers] = useState(40);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  // Calculations
  const getWordStats = (text) => {
    const clean = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
    const words = clean.split(/\s+/).filter(w => w.length > 2);
    const totalWords = words.length;
    const freq = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 6);
    return { totalWords, topWords: sorted };
  };

  const wordStats = getWordStats(densityText);

  const generateNewHooks = () => {
    if (hookStyle === 'Curiosity Gap') {
      setGeneratedHooks([
        `The biggest mistake people make with ${hookTopic.toLowerCase()} (and how to avoid it):`,
        `I tested 10 different ways to handle ${hookTopic.toLowerCase()}. Here is the only one that worked:`,
        `Everyone talks about ${hookTopic.toLowerCase()}, but almost no one mentions this critical rule:`
      ]);
    } else if (hookStyle === 'Data-Backed') {
      setGeneratedHooks([
        `How we improved efficiency by 240% using this structured ${hookTopic.toLowerCase()} framework:`,
        `5 core metrics you must check before launching any ${hookTopic.toLowerCase()} campaign:`,
        `Case study: How structured prompts cut turnaround time by 60% in under 7 days:`
      ]);
    } else {
      setGeneratedHooks([
        `Unpopular opinion: Traditional approaches to ${hookTopic.toLowerCase()} are outdated.`,
        `Why you should stop overpaying for ${hookTopic.toLowerCase()}:`,
        `3 simple shifts that completely simplified our approach to ${hookTopic.toLowerCase()}:`
      ]);
    }
  };

  const handleCopy = (text, id) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedState(id);
      setTimeout(() => setCopiedState(''), 2000);
    } catch (err) {
      console.error('Copy fallback failed', err);
    }
    document.body.removeChild(textArea);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactName('');
      setContactEmail('');
      setContactMsg('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-neutral-100 font-sans antialiased selection:bg-emerald-500 selection:text-black flex flex-col justify-between">
      
      {/* Top Bar Announcement */}
      <div>
        <div className="bg-neutral-900/90 border-b border-neutral-800/80 text-xs text-neutral-400 py-2 px-4 text-center">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Official Live Studio: <strong className="text-neutral-200">synthlabsstudio.com</strong>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="hidden sm:inline text-neutral-400">Zero-API Client Tools & High-Performance Engineering</span>
          </span>
        </div>

        {/* Global Navigation Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/90 border-b border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            
            {/* Logo */}
            <div 
              onClick={() => setActiveTab('home')} 
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-neutral-950 flex items-center justify-center font-black text-lg shadow-lg shadow-emerald-500/20 border border-emerald-300/40">
                ⚡
              </div>
              <div>
                <span className="font-extrabold tracking-tight text-white block text-base leading-tight">SYNTH LABS</span>
                <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">Digital Agency & Tools</span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-2xl border border-neutral-800">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'home' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'tools' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Tools Suite (6)
              </button>
              <button
                onClick={() => setActiveTab('posts')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'posts' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Guides & SEO
              </button>
              <button
                onClick={() => setActiveTab('synthbudget')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'synthbudget' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                SynthBudget App
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'services' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Agency Services
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'pricing' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'about' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                About
              </button>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-400/20 flex items-center gap-1.5"
              >
                Contact Support <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Nav Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-b border-neutral-800 bg-[#07090e] px-4 py-4 space-y-1.5">
              <button
                onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${activeTab === 'home' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                ⚡ Home Overview
              </button>
              <button
                onClick={() => { setActiveTab('tools'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${activeTab === 'tools' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                🛠 Tools Suite (6 Client Utilities)
              </button>
              <button
                onClick={() => { setActiveTab('posts'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${activeTab === 'posts' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                📖 Guides & Content Documentation
              </button>
              <button
                onClick={() => { setActiveTab('synthbudget'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${activeTab === 'synthbudget' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                📱 SynthBudget Android App
              </button>
              <button
                onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${activeTab === 'services' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                💼 Agency & Micro Services ($49 - $199)
              </button>
              <button
                onClick={() => { setActiveTab('pricing'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${activeTab === 'pricing' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                💳 Pricing & Plans
              </button>
              <button
                onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${activeTab === 'about' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                🏢 About Synth Labs
              </button>
              <button
                onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium ${activeTab === 'contact' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                ✉️ Contact & Inquiries
              </button>
            </div>
          )}
        </header>

        {/* Ad Placement Container (AdSense Header Leaderboard) */}
        <div className="max-w-6xl mx-auto px-4 pt-4">
          <div className="w-full py-3.5 px-4 bg-neutral-900/40 border border-dashed border-neutral-800/90 rounded-2xl flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-500/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              Ad Area
            </span>
            <span className="text-neutral-400 font-mono text-[11px] text-center">
              Google AdSense Responsive Unit (Header Leaderboard 728x90 / Mobile 320x50)
            </span>
            <span className="text-[10px] text-neutral-600 font-mono">synthlabsstudio.com</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI & SEO Studio
              </div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Precision AI Tools <span className="text-emerald-400">•</span> Web Development <span className="text-cyan-400">•</span> Digital Growth
              </h1>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                Practical browser-based micro-tools, custom digital products, and honest growth consulting—built for creators and teams who value clarity over hype.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('tools')}
                  className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all shadow-lg shadow-emerald-400/20 flex items-center gap-2"
                >
                  Explore Tools Suite <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('synthbudget')}
                  className="bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4 text-emerald-400" /> Explore SynthBudget App
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-3 border-t border-neutral-800/80">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Client-Side Processing</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 0 API Charges</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified HTTPS on Vercel</span>
              </div>
            </div>

            {/* Right Live Visual Code Window */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-950/20">
                <div className="bg-neutral-950 px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">live_tool_preview.sh</span>
                </div>
                <div className="p-5 font-mono text-xs text-neutral-300 space-y-3 bg-[#0a0d14]">
                  <p className="text-neutral-500">// Build a production-ready instruction</p>
                  <p><span className="text-purple-400 font-semibold">const</span> <span className="text-cyan-300">prompt</span> = <span className="text-emerald-400 font-semibold">engineer</span>({'{'}</p>
                  <p className="pl-4"><span className="text-neutral-400">role:</span> <span className="text-amber-300">"Senior SEO Strategist"</span>,</p>
                  <p className="pl-4"><span className="text-neutral-400">task:</span> <span className="text-amber-300">"Build a topical content map"</span>,</p>
                  <p className="pl-4"><span className="text-neutral-400">tone:</span> <span className="text-amber-300">"Clear, authoritative, useful"</span>,</p>
                  <p className="pl-4"><span className="text-neutral-400">status:</span> <span className="text-emerald-300">"Prompt ready — 0 API calls"</span></p>
                  <p>{'})'};</p>
                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] text-emerald-400">
                    <span>✓ Structured prompt generated locally</span>
                    <span className="text-neutral-500">0ms</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* MAIN PAGE VIEWS */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          
          {/* VIEW: HOME & TOOLS SUITE */}
          {(activeTab === 'home' || activeTab === 'tools') && (
            <div className="space-y-8">
              
              {/* Tool Header & Selector */}
              <div className="border-b border-neutral-800 pb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-6 h-6 text-emerald-400" /> Interactive Browser Suite
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1">
                    Select a tool below. Everything runs instant client-side with 0 API cost.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 bg-neutral-900/90 p-1.5 rounded-2xl border border-neutral-800">
                  <button
                    onClick={() => setActiveTool('prompt')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTool === 'prompt' ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-400/20 font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Prompt Architect
                  </button>
                  <button
                    onClick={() => setActiveTool('serp')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTool === 'serp' ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-400/20 font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    SERP Previewer
                  </button>
                  <button
                    onClick={() => setActiveTool('hooks')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTool === 'hooks' ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-400/20 font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Viral Hook Studio
                  </button>
                  <button
                    onClick={() => setActiveTool('density')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTool === 'density' ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-400/20 font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Keyword Density
                  </button>
                  <button
                    onClick={() => setActiveTool('schema')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTool === 'schema' ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-400/20 font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Schema Generator
                  </button>
                  <button
                    onClick={() => setActiveTool('estimator')}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeTool === 'estimator' ? 'bg-emerald-400 text-neutral-950 shadow-md shadow-emerald-400/20 font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    ROI Calculator
                  </button>
                </div>
              </div>

              {/* TOOL 1: PROMPT ARCHITECT */}
              {activeTool === 'prompt' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center justify-between">
                      <span>System Prompt Architect</span>
                      <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-0.5 rounded-full font-mono">
                        Universal LLM
                      </span>
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Target AI Persona / Role</label>
                      <input
                        type="text"
                        value={promptRole}
                        onChange={(e) => setPromptRole(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Target Audience & Intent</label>
                      <input
                        type="text"
                        value={promptAudience}
                        onChange={(e) => setPromptAudience(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Task Instructions & Constraints</label>
                      <textarea
                        rows={3}
                        value={promptTask}
                        onChange={(e) => setPromptTask(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Tone & Formatting Style</label>
                      <input
                        type="text"
                        value={promptTone}
                        onChange={(e) => setPromptTone(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Compiled Output</span>
                      <button
                        onClick={() => handleCopy(`Act as a ${promptRole}.\n\nTarget Audience: ${promptAudience}\n\nTask:\n${promptTask}\n\nTone & Style:\n${promptTone}\n\nOutput Guidelines:\n- Structure your response using markdown headings and bullet points.\n- Eliminate introductory conversational filler.`, 'prompt')}
                        className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white bg-neutral-800 px-3.5 py-1.5 rounded-xl border border-neutral-700 font-semibold transition-colors"
                      >
                        {copiedState === 'prompt' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedState === 'prompt' ? 'Copied Prompt!' : 'Copy Prompt'}
                      </button>
                    </div>

                    <pre className="bg-neutral-950 p-5 rounded-2xl text-xs text-neutral-300 font-mono whitespace-pre-wrap border border-neutral-800 leading-relaxed overflow-x-auto">
{`Act as a ${promptRole}.

Target Audience:
${promptAudience}

Task:
${promptTask}

Tone & Style:
${promptTone}

Output Guidelines:
- Structure your response using markdown headings and bullet points.
- Eliminate introductory conversational filler.`}
                    </pre>

                    <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-800 flex items-center justify-between">
                      <span>Ready for GPT-4o, Claude 3.5 Sonnet, & Gemini Pro</span>
                      <span className="text-emerald-400 font-mono">Instant local compile</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 2: SERP PREVIEWER */}
              {activeTool === 'serp' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">Google SERP Snippet Previewer</h3>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-neutral-400 font-semibold">Page Title</span>
                        <span className={`${metaTitle.length > 60 ? 'text-amber-400' : 'text-neutral-500'}`}>
                          {metaTitle.length}/60 chars
                        </span>
                      </div>
                      <input
                        type="text"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-neutral-400 font-semibold">URL Path Slug</span>
                        <span className="text-neutral-500">synthlabsstudio.com/{metaSlug}</span>
                      </div>
                      <input
                        type="text"
                        value={metaSlug}
                        onChange={(e) => setMetaSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-neutral-400 font-semibold">Meta Description</span>
                        <span className={`${metaDesc.length > 160 ? 'text-amber-400' : 'text-neutral-500'}`}>
                          {metaDesc.length}/160 chars
                        </span>
                      </div>
                      <textarea
                        rows={3}
                        value={metaDesc}
                        onChange={(e) => setMetaDesc(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Live Google SERP Appearance</span>
                    <div className="bg-[#12151c] p-5 rounded-2xl border border-neutral-800 space-y-2 font-sans shadow-inner">
                      <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-[10px]">🌐</div>
                        <span className="text-neutral-200 font-medium">https://synthlabsstudio.com</span>
                        <span className="text-neutral-500">› {metaSlug}</span>
                      </div>
                      <h4 className="text-blue-400 hover:underline cursor-pointer text-base font-semibold line-clamp-1">
                        {metaTitle || 'Synth Labs Studio'}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                        {metaDesc || 'Enter your custom meta description to test Google search snippet presentation in real time.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 3: VIRAL HOOKS */}
              {activeTool === 'hooks' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">Viral Content Hook Generator</h3>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Topic / Problem Statement</label>
                      <input
                        type="text"
                        value={hookTopic}
                        onChange={(e) => setHookTopic(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Psychological Hook Angle</label>
                      <select
                        value={hookStyle}
                        onChange={(e) => setHookStyle(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      >
                        <option>Curiosity Gap</option>
                        <option>Data-Backed</option>
                        <option>Contrarian</option>
                      </select>
                    </div>
                    <button
                      onClick={generateNewHooks}
                      className="w-full bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold py-3 rounded-xl text-xs transition-all shadow-md shadow-emerald-400/20 flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4" /> Generate Fresh Angles
                    </button>
                  </div>

                  <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 space-y-3">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Generated Angles for Social & Blogs</span>
                    {generatedHooks.map((h, i) => (
                      <div key={i} className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 flex items-center justify-between gap-3 text-xs text-neutral-300">
                        <span className="leading-relaxed font-medium">"{h}"</span>
                        <button
                          onClick={() => handleCopy(h, `hook-${i}`)}
                          className="text-neutral-500 hover:text-emerald-400 shrink-0 p-1.5 bg-neutral-900 rounded-lg border border-neutral-800 transition-colors"
                        >
                          {copiedState === `hook-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TOOL 4: KEYWORD DENSITY */}
              {activeTool === 'density' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">Content Keyword Density Analyzer</h3>
                    <textarea
                      rows={6}
                      value={densityText}
                      onChange={(e) => setDensityText(e.target.value)}
                      placeholder="Paste article, description, or content body..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none font-sans leading-relaxed"
                    />
                  </div>
                  <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Frequency Summary</span>
                      <span className="text-xs bg-neutral-800 text-emerald-400 px-3 py-1 rounded-full font-mono font-bold">
                        {wordStats.totalWords} Total Significant Words
                      </span>
                    </div>
                    <div className="space-y-2">
                      {wordStats.topWords.map(([w, c], i) => {
                        const pct = ((c / (wordStats.totalWords || 1)) * 100).toFixed(1);
                        return (
                          <div key={i} className="bg-neutral-950 p-3 rounded-xl border border-neutral-800/90 flex items-center justify-between text-xs">
                            <span className="font-mono text-neutral-200 capitalize font-medium">"{w}"</span>
                            <span className="text-neutral-400 font-mono">{c} times ({pct}%)</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* TOOL 5: SCHEMA GENERATOR */}
              {activeTool === 'schema' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">Structured JSON-LD Schema Generator</h3>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Schema Entity Type</label>
                      <select
                        value={schemaType}
                        onChange={(e) => setSchemaType(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      >
                        <option>Organization</option>
                        <option>WebSite</option>
                        <option>SoftwareApplication</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Entity / Brand Name</label>
                      <input
                        type="text"
                        value={schemaName}
                        onChange={(e) => setSchemaName(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Canonical Domain URL</label>
                      <input
                        type="text"
                        value={schemaUrl}
                        onChange={(e) => setSchemaUrl(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Entity Description</label>
                      <input
                        type="text"
                        value={schemaDesc}
                        onChange={(e) => setSchemaDesc(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Valid JSON-LD Markup</span>
                      <button
                        onClick={() => handleCopy(`<script type="application/ld+json">\n${JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": schemaType,
                          "name": schemaName,
                          "url": schemaUrl,
                          "description": schemaDesc
                        }, null, 2)}\n</script>`, 'schema')}
                        className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white bg-neutral-800 px-3.5 py-1.5 rounded-xl border border-neutral-700 font-semibold"
                      >
                        {copiedState === 'schema' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedState === 'schema' ? 'Copied' : 'Copy Schema'}
                      </button>
                    </div>
                    <pre className="bg-neutral-950 p-5 rounded-2xl text-xs text-neutral-300 font-mono whitespace-pre-wrap border border-neutral-800 leading-relaxed overflow-x-auto">
{`<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": schemaType,
  "name": schemaName,
  "url": schemaUrl,
  "description": schemaDesc
}, null, 2)}
</script>`}
                    </pre>
                  </div>
                </div>
              )}

              {/* TOOL 6: ROI ESTIMATOR */}
              {activeTool === 'estimator' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 space-y-5">
                    <h3 className="text-base font-bold text-white">AdSense, AdMob & App Revenue Forecast</h3>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-neutral-400">Monthly Website Traffic (Pageviews):</span>
                        <span className="font-mono text-emerald-400 font-bold">{monthlyTraffic.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="250000"
                        step="2500"
                        value={monthlyTraffic}
                        onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                        className="w-full accent-emerald-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-neutral-400">Estimated Average CPM ($):</span>
                        <span className="font-mono text-emerald-400 font-bold">${estimatedCpm.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="10"
                        step="0.25"
                        value={estimatedCpm}
                        onChange={(e) => setEstimatedCpm(Number(e.target.value))}
                        className="w-full accent-emerald-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-neutral-400">SynthBudget App Pro Subscribers ($4.99/mo):</span>
                        <span className="font-mono text-emerald-400 font-bold">{appSubscribers} users</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="300"
                        step="5"
                        value={appSubscribers}
                        onChange={(e) => setAppSubscribers(Number(e.target.value))}
                        className="w-full accent-emerald-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Projected Monthly Digital Income</span>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 text-center">
                        <span className="text-[11px] text-neutral-500 block">AdSense Web CPM</span>
                        <span className="text-2xl font-black text-white">
                          ${((monthlyTraffic / 1000) * estimatedCpm).toFixed(2)}
                        </span>
                      </div>
                      <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 text-center">
                        <span className="text-[11px] text-neutral-500 block">Mobile App Pro</span>
                        <span className="text-2xl font-black text-white">
                          ${(appSubscribers * 4.99).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="bg-emerald-950/40 border border-emerald-800/80 p-5 rounded-2xl text-center shadow-lg shadow-emerald-500/5">
                      <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">Combined Recurring Income</span>
                      <span className="text-3xl font-black text-emerald-300">
                        ${(((monthlyTraffic / 1000) * estimatedCpm) + (appSubscribers * 4.99)).toFixed(2)}/mo
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* VIEW: ARTICLES & GUIDES (FULL ADSENSE VALUE CONTENT) */}
          {activeTab === 'posts' && (
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="text-2xl font-extrabold text-white">Guides, Research & Technical Tutorials</h2>
                <p className="text-xs text-neutral-400 mt-1">
                  In-depth documentation covering algorithmic prompt design, Core Web Vitals, and scalable monetization architectures.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Article 1 */}
                <article className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/60 font-semibold">
                      Prompt Engineering • 6 Min Read
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">Updated: 2026</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    How System Constraints and Persona Framing Prevent LLM Hallucinations
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Large language models (LLMs) operate probabilistically, generating next-token completions based on statistical weights. When prompts are vague or open-ended, the model fills context gaps with plausible-sounding inaccuracies.
                  </p>
                  <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
                    <div className="font-bold text-neutral-200">The 3 Structural Rules for Reliable Outputs:</div>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-neutral-300">
                      <li><strong>Negative Constraints:</strong> Explicitly forbid conversational fluff (e.g., "Do not include introductory commentary").</li>
                      <li><strong>Schema Definition:</strong> Force outputs into Markdown tables, bullet lists, or valid JSON payloads.</li>
                      <li><strong>Domain Calibration:</strong> Assign a specific senior persona to narrow the probability distribution of generated tokens.</li>
                    </ul>
                  </div>
                </article>

                {/* Article 2 */}
                <article className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800/60 font-semibold">
                      Technical SEO • 5 Min Read
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">Updated: 2026</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    Mastering Core Web Vitals for React Single Page Applications
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Single Page Applications (SPAs) built with React or Vite provide fast client interactions, but without careful asset loading, they risk failing Google's Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) thresholds.
                  </p>
                  <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 text-xs text-neutral-400 space-y-2">
                    <div className="font-bold text-neutral-200">Core Optimization Techniques Applied on Synth Labs:</div>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-neutral-300">
                      <li><strong>Preconnecting Google Fonts:</strong> Eliminates font rendering delay during initial page load.</li>
                      <li><strong>Zero-Dependency Client State:</strong> Reduces bundle payloads by executing parsing locally inside standard Web APIs.</li>
                      <li><strong>Edge CDN Hosting:</strong> Utilizing Anycast Vercel Edge networks to deliver sub-100ms TTFB globally.</li>
                    </ul>
                  </div>
                </article>

                {/* Article 3 */}
                <article className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800/60 font-semibold">
                      Monetization • 8 Min Read
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">Updated: 2026</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    The Modern Hybrid Revenue Blueprint: AdSense + AdMob + Micro-Services
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Relying exclusively on client freelance work produces unpredictable revenue fluctuations. By integrating web-based utility traffic with Google AdSense, Android mobile applications powered by AdMob, and micro-service consulting packages, modern digital builders create resilient multi-stream income engines.
                  </p>
                </article>

              </div>
            </div>
          )}

          {/* VIEW: SYNTHBUDGET APP */}
          {activeTab === 'synthbudget' && (
            <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-8">
              <div className="space-y-3">
                <span className="text-xs bg-emerald-950 border border-emerald-800 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                  Mobile Product in Active Testing
                </span>
                <h2 className="text-3xl font-black text-white">SynthBudget Android App</h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
                  Intelligent expense tracker, cashflow analyzer, and budget forecaster engineered for privacy-conscious individuals and freelancers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Fast offline-first entry with instant local SQLite storage
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Automated cashflow breakdown and predictive month-end balance
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Optional ad-free subscription ($4.99/mo) with cloud backup
                  </div>
                  <div className="pt-3">
                    <button 
                      onClick={() => setActiveTab('pricing')}
                      className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md shadow-emerald-400/20"
                    >
                      View Subscription Pricing
                    </button>
                  </div>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center space-y-3">
                  <div className="text-4xl">📱</div>
                  <h4 className="text-sm font-bold text-white">Google Play Store Closed Testing</h4>
                  <p className="text-xs text-neutral-400">
                    The app is undergoing closed tester group review. The direct Google Play Store download link will be published here upon completion of store compliance.
                  </p>
                  <div className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800/60">
                    Target: Google Play Store Release
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: ACCESSIBLE SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-8 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-black text-white">Accessible Micro-Engineering Services</h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Honest, transparent pricing for domain configuration, SEO audits, and custom web builds.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 font-extrabold text-sm">
                      $49
                    </div>
                    <h3 className="text-base font-bold text-white">DNS & Domain Integration</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Complete custom domain linking, SSL verification, Vercel/GitHub integration, and Namecheap DNS configuration.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white border border-neutral-700 transition-colors">
                    Request DNS Setup
                  </button>
                </div>

                <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400 font-extrabold text-sm">
                      $99
                    </div>
                    <h3 className="text-base font-bold text-white">SEO & Performance Audit</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Detailed Core Web Vitals report, title and description optimization, structured JSON-LD schema setup, and Google indexing review.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white border border-neutral-700 transition-colors">
                    Request SEO Audit
                  </button>
                </div>

                <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-950 border border-indigo-800/80 flex items-center justify-center text-indigo-400 font-extrabold text-sm">
                      $199
                    </div>
                    <h3 className="text-base font-bold text-white">Single-Page React App</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Fully responsive, high-speed landing page built with React and Tailwind CSS, tailored for modern web utility tools or app releases.
                    </p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white border border-neutral-700 transition-colors">
                    Order Landing Page
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: PRICING */}
          {activeTab === 'pricing' && (
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-black text-white">Clear & Honest Pricing Tiers</h2>
                <p className="text-xs text-neutral-400">
                  Select free browser utilities, affordable micro-services, or app subscriptions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* Free Tier */}
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase">Starter Tools</span>
                    <div>
                      <span className="text-3xl font-black text-white">$0</span>
                      <span className="text-xs text-neutral-500 ml-1">/ lifetime</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> All 6 browser tools</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> No account creation needed</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Ad-supported experience</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setActiveTab('tools')}
                    className="w-full py-2.5 rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition-all"
                  >
                    Use Free Tools
                  </button>
                </div>

                {/* SynthBudget Pro */}
                <div className="bg-neutral-900 border-2 border-emerald-500/80 rounded-3xl p-6 flex flex-col justify-between space-y-6 relative shadow-xl shadow-emerald-500/10">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-400 text-neutral-950 font-black text-[10px] uppercase tracking-wider px-3.5 py-0.5 rounded-full">
                    Mobile App
                  </div>
                  <div className="space-y-4 pt-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase">SynthBudget Pro</span>
                    <div>
                      <span className="text-3xl font-black text-white">$4.99</span>
                      <span className="text-xs text-neutral-500 ml-1">/ month</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Ad-free mobile experience</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Unlimited budget allocations</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Cloud sync & data backup</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setActiveTab('synthbudget')}
                    className="w-full py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-xs font-black text-neutral-950 transition-all shadow-md shadow-emerald-400/20"
                  >
                    Explore App Pro
                  </button>
                </div>

                {/* Micro-Services Tier */}
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase">Micro Services</span>
                    <div>
                      <span className="text-3xl font-black text-white">$49 - $199</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Custom DNS & SSL setups</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> React / Tailwind development</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Core Web Vitals speed tuning</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="w-full py-2.5 rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition-all"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: ABOUT US */}
          {activeTab === 'about' && (
            <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6">
              <div className="space-y-2 border-b border-neutral-800 pb-4">
                <h2 className="text-2xl font-black text-white">About Synth Labs Studio</h2>
                <p className="text-xs text-neutral-400">
                  Building streamlined digital products, client utilities, and high-performance applications.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <p>
                  <strong>Synth Labs Studio</strong> is an independent software development and digital tools platform. We believe high-utility software shouldn't be hidden behind heavy paywalls or bogged down by slow server roundtrips.
                </p>
                <p>
                  Our interactive suite runs 100% locally within modern browser engines, enabling instant prompt structuring, SEO previewing, and density analysis with complete privacy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800 text-xs">
                <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
                  <div className="text-emerald-400 font-bold mb-1">Architecture</div>
                  <div className="text-neutral-300">Vite, React, Tailwind CSS, Vercel Edge</div>
                </div>
                <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
                  <div className="text-cyan-400 font-bold mb-1">Primary Domain</div>
                  <div className="text-neutral-300 font-mono">synthlabsstudio.com</div>
                </div>
                <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800">
                  <div className="text-indigo-400 font-bold mb-1">Core Mission</div>
                  <div className="text-neutral-300">Practical utility over marketing hype</div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW: PRIVACY POLICY (COMPREHENSIVE FOR GOOGLE ADSENSE) */}
          {activeTab === 'privacy' && (
            <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6 text-xs text-neutral-300 leading-relaxed">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="text-2xl font-black text-white">Privacy Policy</h2>
                <p className="text-neutral-500 text-[11px] font-mono mt-1">Effective Date: January 1, 2026 | Last Updated: 2026</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-neutral-100">1. Overview & Information Collection</h3>
                <p>
                  Synth Labs Studio (accessible from <strong>synthlabsstudio.com</strong>) respects the privacy of our visitors. This Privacy Policy outlines the types of information we collect and how we utilize and safeguard your data.
                </p>

                <h3 className="text-sm font-bold text-neutral-100">2. Client-Side Browser Utilities</h3>
                <p>
                  All interactive tools on Synth Labs Studio—including the Prompt Architect, SERP Previewer, Viral Hook Studio, Keyword Density Analyzer, and Schema Generator—operate <strong>entirely on the client side</strong> within your web browser. Any text or inputs you submit into these tools are processed in memory and are never transmitted to, logged in, or stored on external backend servers.
                </p>

                <h3 className="text-sm font-bold text-neutral-100">3. Cookies, Web Beacons & Third-Party Advertising</h3>
                <p>
                  We partner with third-party advertising networks, including <strong>Google AdSense</strong> and <strong>Google AdMob</strong>, to display contextual advertisements when you visit our website or use our mobile applications.
                </p>
                <p>
                  Google uses cookies (such as the DoubleClick cookie) to serve ads to users based on their visits to synthlabsstudio.com and other websites on the internet. You may opt out of personalized advertising by visiting <span className="text-emerald-400">Google Ads Settings</span> (www.aboutads.info).
                </p>

                <h3 className="text-sm font-bold text-neutral-100">4. Direct Contact Information</h3>
                <p>
                  When you submit inquiries via our Contact Form, your name, email address, and message contents are utilized solely to respond to your specific request. We never sell, rent, or trade contact records to third-party data brokers.
                </p>
              </div>
            </div>
          )}

          {/* VIEW: TERMS OF SERVICE (COMPREHENSIVE) */}
          {activeTab === 'terms' && (
            <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6 text-xs text-neutral-300 leading-relaxed">
              <div className="border-b border-neutral-800 pb-4">
                <h2 className="text-2xl font-black text-white">Terms of Service</h2>
                <p className="text-neutral-500 text-[11px] font-mono mt-1">Effective Date: 2026</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-neutral-100">1. Acceptance of Terms</h3>
                <p>
                  By accessing and using <strong>synthlabsstudio.com</strong>, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services.
                </p>

                <h3 className="text-sm font-bold text-neutral-100">2. Intellectual Property & Tool Output</h3>
                <p>
                  All code, templates, and output generated by our browser utilities (including prompts, schema markups, and viral hooks) are free for both commercial and personal use without attribution requirements. The brand name, interface design, and custom code of Synth Labs Studio remain the intellectual property of Synth Labs.
                </p>

                <h3 className="text-sm font-bold text-neutral-100">3. Disclaimer of Warranties</h3>
                <p>
                  The tools and calculators provided on this site are for informational and workflow-acceleration purposes only. We make no guarantees regarding search engine rank improvements, revenue projections, or third-party platform policies. All utilities are provided "as is" without warranty of any kind.
                </p>
              </div>
            </div>
          )}

          {/* VIEW: CONTACT & SUPPORT */}
          {activeTab === 'contact' && (
            <div className="max-w-xl mx-auto bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white">Contact & Support</h2>
                <p className="text-xs text-neutral-400 mt-1">
                  Have a question about Synth Labs Studio or need assistance with custom engineering? Send a message below.
                </p>
              </div>

              {contactSuccess ? (
                <div className="p-4 bg-emerald-950/80 border border-emerald-800 rounded-2xl text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been received. We will get back to you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1.5">Message / Inquiry Details</label>
                    <textarea
                      rows={4}
                      required
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none leading-relaxed"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold py-3 rounded-xl text-xs transition-all shadow-md shadow-emerald-400/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Direct Message
                  </button>
                </form>
              )}
            </div>
          )}

        </main>
      </div>

      {/* Global Footer (Full Compliance Links) */}
      <footer className="border-t border-neutral-800/80 bg-[#07090e] text-neutral-500 text-xs py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="font-bold text-neutral-300 text-sm flex items-center justify-center md:justify-start gap-2">
              <span>⚡ SYNTH LABS STUDIO</span>
            </div>
            <p className="text-[11px] text-neutral-500">
              © {new Date().getFullYear()} Synth Labs Studio (<span className="text-neutral-400">synthlabsstudio.com</span>). All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
            <button onClick={() => setActiveTab('home')} className="hover:text-emerald-400 transition-colors">Home</button>
            <button onClick={() => setActiveTab('tools')} className="hover:text-emerald-400 transition-colors">Tools</button>
            <button onClick={() => setActiveTab('posts')} className="hover:text-emerald-400 transition-colors">Guides</button>
            <button onClick={() => setActiveTab('synthbudget')} className="hover:text-emerald-400 transition-colors">SynthBudget</button>
            <button onClick={() => setActiveTab('services')} className="hover:text-emerald-400 transition-colors">Services</button>
            <button onClick={() => setActiveTab('pricing')} className="hover:text-emerald-400 transition-colors">Pricing</button>
            <button onClick={() => setActiveTab('about')} className="hover:text-emerald-400 transition-colors">About</button>
            <button onClick={() => setActiveTab('privacy')} className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
            <button onClick={() => setActiveTab('terms')} className="hover:text-emerald-400 transition-colors">Terms of Service</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-emerald-400 transition-colors">Contact</button>
          </div>
        </div>
      </footer>

    </div>
  );
}


