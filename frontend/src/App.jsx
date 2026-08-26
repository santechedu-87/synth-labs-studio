import React, { useState } from 'react';
import { 
  Sparkles, 
  BarChart3, 
  Smartphone, 
  ArrowRight, 
  Check, 
  Copy, 
  Layers, 
  Zap, 
  Code2, 
  ChevronRight, 
  Menu, 
  X, 
  BookOpen, 
  Send, 
  CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('tools'); 
  const [activeTool, setActiveTool] = useState('prompt');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedState, setCopiedState] = useState('');

  // Tool 1: AI Prompt Engineer
  const [promptRole, setPromptRole] = useState('Senior SEO Strategist');
  const [promptTask, setPromptTask] = useState('Build a topical cluster content map with search intent');
  const [promptTone, setPromptTone] = useState('Clear, data-driven, and authoritative');
  const [promptAudience, setPromptAudience] = useState('B2B Founders and Content Marketers');

  // Tool 2: SEO SERP Previewer
  const [metaTitle, setMetaTitle] = useState('Synth Labs Studio | AI Tools & Web Growth');
  const [metaDesc, setMetaDesc] = useState('Explore precision AI tools, custom digital products, and high-performance web engineering for modern teams.');
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

  // Tool 5: JSON Schema Generator
  const [schemaName, setSchemaName] = useState('Synth Labs Studio');
  const [schemaUrl, setSchemaUrl] = useState('https://synthlabsstudio.com');
  const [schemaDesc, setSchemaDesc] = useState('Precision web tools and modern frontend engineering.');
  const [schemaType, setSchemaType] = useState('Organization');

  // Tool 6: ROI Estimator
  const [monthlyTraffic, setMonthlyTraffic] = useState(10000);
  const [estimatedCpm, setEstimatedCpm] = useState(2.5);
  const [appSubscribers, setAppSubscribers] = useState(25);

  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  const getWordStats = (text) => {
    const clean = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
    const words = clean.split(/\s+/).filter(w => w.length > 2);
    const totalWords = words.length;
    const freq = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 5);
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-emerald-500 selection:text-black flex flex-col justify-between">
      <div>
        {/* Banner */}
        <div className="bg-neutral-900/90 border-b border-neutral-800 text-xs text-neutral-400 py-2 px-4 text-center">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Official Live Domain: <strong className="text-neutral-200">synthlabsstudio.com</strong>
          </span>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-neutral-950/90 border-b border-neutral-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div 
              onClick={() => setActiveTab('tools')} 
              className="flex items-center gap-2.5 cursor-pointer select-none"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-400 text-neutral-950 flex items-center justify-center font-black text-lg shadow-sm shadow-emerald-400/20">
                ⚡
              </div>
              <div>
                <span className="font-bold tracking-tight text-white block text-base leading-none">SYNTH LABS</span>
                <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">Studio & Apps</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1 bg-neutral-900/70 p-1 rounded-xl border border-neutral-800">
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'tools' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Tools Suite (6)
              </button>
              <button
                onClick={() => setActiveTab('posts')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'posts' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Guides & Articles
              </button>
              <button
                onClick={() => setActiveTab('synthbudget')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'synthbudget' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                SynthBudget App
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'services' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'pricing' ? 'bg-neutral-800 text-emerald-400 shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Pricing
              </button>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setActiveTab('pricing')}
                className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-sm shadow-emerald-400/20 flex items-center gap-1.5"
              >
                Get Started <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-b border-neutral-800 bg-neutral-950 px-4 py-4 space-y-1.5">
              <button
                onClick={() => { setActiveTab('tools'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'tools' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                🛠 Tools Suite (6 Micro-Tools)
              </button>
              <button
                onClick={() => { setActiveTab('posts'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'posts' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                📖 Guides & SEO Articles
              </button>
              <button
                onClick={() => { setActiveTab('synthbudget'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'synthbudget' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                📱 SynthBudget Android App
              </button>
              <button
                onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'services' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                💼 Affordable Services ($49 - $199)
              </button>
              <button
                onClick={() => { setActiveTab('pricing'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'pricing' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                💳 Pricing & Plans
              </button>
              <button
                onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${activeTab === 'contact' ? 'bg-neutral-900 text-emerald-400' : 'text-neutral-300'}`}
              >
                ✉️ Contact & Support
              </button>
            </div>
          )}
        </header>

        {/* Ad Unit Placeholder */}
        <div className="max-w-5xl mx-auto px-4 pt-4">
          <div className="w-full py-3 px-4 bg-neutral-900/40 border border-neutral-800/80 rounded-xl flex items-center justify-between text-xs text-neutral-500">
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500">Ad Placement</span>
            <span className="text-neutral-400 font-mono text-[11px]">Google AdSense Responsive Unit</span>
            <span className="text-[10px] text-neutral-600">synthlabsstudio.com</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI & SEO Toolkit
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Precision AI Tools <span className="text-emerald-400">•</span> Web Engineering <span className="text-cyan-400">•</span> Growth
            </h1>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Browser-based AI utilities, organic SEO calculators, and accessible digital solutions crafted for founders, writers, and developer teams.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('tools')}
                className="bg-emerald-400 hover:bg-emerald-300 text-neutral-950 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-400/20 flex items-center gap-2"
              >
                Explore Tools Suite <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveTab('posts')}
                className="bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" /> Read Guides
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          
          {/* TAB 1: TOOLS SUITE */}
          {activeTab === 'tools' && (
            <div className="space-y-8">
              <div className="border-b border-neutral-800 pb-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-emerald-400" /> Interactive Browser Suite
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Fast client-side utilities. No API keys or account registration required.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 bg-neutral-900 p-1.5 rounded-xl border border-neutral-800">
                  {['prompt', 'serp', 'hooks', 'density', 'schema', 'estimator'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveTool(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                        activeTool === t ? 'bg-emerald-400 text-neutral-950' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {t === 'prompt' ? 'Prompt Architect' : t === 'serp' ? 'SERP Previewer' : t === 'hooks' ? 'Social Hooks' : t === 'density' ? 'Keyword Density' : t === 'schema' ? 'Schema Generator' : 'ROI Calculator'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tool 1 */}
              {activeTool === 'prompt' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center justify-between">
                      <span>System Prompt Architect</span>
                      <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">Multi-LLM</span>
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Target AI Role / Persona</label>
                      <input
                        type="text"
                        value={promptRole}
                        onChange={(e) => setPromptRole(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Audience / User Context</label>
                      <input
                        type="text"
                        value={promptAudience}
                        onChange={(e) => setPromptAudience(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Specific Task & Constraints</label>
                      <textarea
                        rows={3}
                        value={promptTask}
                        onChange={(e) => setPromptTask(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Tone & Voice</label>
                      <input
                        type="text"
                        value={promptTone}
                        onChange={(e) => setPromptTone(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Compiled Output</span>
                      <button
                        onClick={() => handleCopy(`Act as a ${promptRole}.\n\nTarget Audience: ${promptAudience}\n\nTask:\n${promptTask}\n\nTone & Style:\n${promptTone}\n\nGuidelines:\n- Present structured answers with headings.\n- Prioritize direct, production-ready instructions.`, 'prompt')}
                        className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-700"
                      >
                        {copiedState === 'prompt' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedState === 'prompt' ? 'Copied!' : 'Copy Prompt'}
                      </button>
                    </div>

                    <pre className="bg-neutral-950 p-4 rounded-xl text-xs text-neutral-300 font-mono whitespace-pre-wrap border border-neutral-800 leading-relaxed">
{`Act as a ${promptRole}.

Target Audience:
${promptAudience}

Task:
${promptTask}

Tone & Style:
${promptTone}

Guidelines:
- Present structured answers with clear headings.
- Avoid filler explanations; deliver direct actionable output.`}
                    </pre>
                  </div>
                </div>
              )}

              {/* Tool 2 */}
              {activeTool === 'serp' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">Google SERP Snippet Previewer</h3>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400 font-semibold">Title Tag</span>
                        <span className={metaTitle.length > 60 ? 'text-amber-400' : 'text-neutral-500'}>
                          {metaTitle.length}/60 chars
                        </span>
                      </div>
                      <input
                        type="text"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400 font-semibold">URL Path</span>
                        <span className="text-neutral-500">synthlabsstudio.com/{metaSlug}</span>
                      </div>
                      <input
                        type="text"
                        value={metaSlug}
                        onChange={(e) => setMetaSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400 font-semibold">Meta Description</span>
                        <span className={metaDesc.length > 160 ? 'text-amber-400' : 'text-neutral-500'}>
                          {metaDesc.length}/160 chars
                        </span>
                      </div>
                      <textarea
                        rows={3}
                        value={metaDesc}
                        onChange={(e) => setMetaDesc(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none"
                      />
                    </div>
                  </div>

                  <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Live Google SERP Card</span>
                    <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1.5 font-sans">
                      <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <div className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center text-[10px]">🌐</div>
                        <span className="text-neutral-300">https://synthlabsstudio.com</span>
                        <span className="text-neutral-500">› {metaSlug}</span>
                      </div>
                      <h4 className="text-blue-400 hover:underline cursor-pointer text-base font-medium line-clamp-1">
                        {metaTitle || 'Synth Labs Studio'}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                        {metaDesc || 'Enter meta description to preview how your page appears in Google search engine result pages.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 3 */}
              {activeTool === 'hooks' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">Social Hook Generator</h3>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Topic / Angle</label>
                      <input
                        type="text"
                        value={hookTopic}
                        onChange={(e) => setHookTopic(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Hook Style</label>
                      <select
                        value={hookStyle}
                        onChange={(e) => setHookStyle(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      >
                        <option>Curiosity Gap</option>
                        <option>Data-Backed</option>
                        <option>Contrarian</option>
                      </select>
                    </div>
                    <button
                      onClick={generateNewHooks}
                      className="w-full bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Zap className="w-3.5 h-3.5" /> Generate Angles
                    </button>
                  </div>

                  <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-3">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Generated Hook Angles</span>
                    {generatedHooks.map((h, i) => (
                      <div key={i} className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800 flex items-center justify-between gap-3 text-xs text-neutral-300">
                        <span className="leading-relaxed">"{h}"</span>
                        <button
                          onClick={() => handleCopy(h, `hook-${i}`)}
                          className="text-neutral-500 hover:text-emerald-400 shrink-0 p-1"
                        >
                          {copiedState === `hook-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tool 4 */}
              {activeTool === 'density' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">Content Keyword Density Analyzer</h3>
                    <textarea
                      rows={6}
                      value={densityText}
                      onChange={(e) => setDensityText(e.target.value)}
                      placeholder="Paste your content or article text here..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none"
                    />
                  </div>
                  <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Analysis Metrics</span>
                      <span className="text-xs bg-neutral-800 text-emerald-400 px-2.5 py-1 rounded-md font-mono">
                        {wordStats.totalWords} Total Words
                      </span>
                    </div>
                    <div className="space-y-2">
                      {wordStats.topWords.map(([w, c], i) => {
                        const pct = ((c / (wordStats.totalWords || 1)) * 100).toFixed(1);
                        return (
                          <div key={i} className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800 flex items-center justify-between text-xs">
                            <span className="font-mono text-neutral-200 capitalize">"{w}"</span>
                            <span className="text-neutral-400 font-mono">{c} times ({pct}%)</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Tool 5 */}
              {activeTool === 'schema' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">JSON-LD Schema Markup Generator</h3>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Entity Type</label>
                      <select
                        value={schemaType}
                        onChange={(e) => setSchemaType(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      >
                        <option>Organization</option>
                        <option>WebSite</option>
                        <option>SoftwareApplication</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Name / Brand</label>
                      <input
                        type="text"
                        value={schemaName}
                        onChange={(e) => setSchemaName(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Website URL</label>
                      <input
                        type="text"
                        value={schemaUrl}
                        onChange={(e) => setSchemaUrl(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1">Description</label>
                      <input
                        type="text"
                        value={schemaDesc}
                        onChange={(e) => setSchemaDesc(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Valid JSON-LD</span>
                      <button
                        onClick={() => handleCopy(`<script type="application/ld+json">\n${JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": schemaType,
                          "name": schemaName,
                          "url": schemaUrl,
                          "description": schemaDesc
                        }, null, 2)}\n</script>`, 'schema')}
                        className="text-xs flex items-center gap-1.5 text-neutral-300 hover:text-white bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-700"
                      >
                        {copiedState === 'schema' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedState === 'schema' ? 'Copied' : 'Copy Schema'}
                      </button>
                    </div>
                    <pre className="bg-neutral-950 p-4 rounded-xl text-xs text-neutral-300 font-mono overflow-x-auto whitespace-pre-wrap border border-neutral-800 leading-relaxed">
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

              {/* Tool 6 */}
              {activeTool === 'estimator' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-base font-bold text-white">AdSense & App Monetization Estimator</h3>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400">Monthly Pageviews:</span>
                        <span className="font-mono text-emerald-400 font-bold">{monthlyTraffic.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="200000"
                        step="1000"
                        value={monthlyTraffic}
                        onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                        className="w-full accent-emerald-400"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400">Estimated CPM ($):</span>
                        <span className="font-mono text-emerald-400 font-bold">${estimatedCpm.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="10"
                        step="0.5"
                        value={estimatedCpm}
                        onChange={(e) => setEstimatedCpm(Number(e.target.value))}
                        className="w-full accent-emerald-400"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-neutral-400">SynthBudget Pro Users ($4.99/mo):</span>
                        <span className="font-mono text-emerald-400 font-bold">{appSubscribers} users</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="5"
                        value={appSubscribers}
                        onChange={(e) => setAppSubscribers(Number(e.target.value))}
                        className="w-full accent-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Estimated Monthly Revenue</span>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 text-center">
                        <span className="text-[11px] text-neutral-500 block">AdSense / AdMob</span>
                        <span className="text-xl font-extrabold text-white">
                          ${((monthlyTraffic / 1000) * estimatedCpm).toFixed(2)}
                        </span>
                      </div>
                      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 text-center">
                        <span className="text-[11px] text-neutral-500 block">App Subscriptions</span>
                        <span className="text-xl font-extrabold text-white">
                          ${(appSubscribers * 4.99).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="bg-emerald-950/40 border border-emerald-800/80 p-4 rounded-xl text-center">
                      <span className="text-xs text-emerald-400 font-semibold block">Combined Monthly Projection</span>
                      <span className="text-2xl font-black text-emerald-300">
                        ${(((monthlyTraffic / 1000) * estimatedCpm) + (appSubscribers * 4.99)).toFixed(2)}/mo
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: ARTICLES */}
          {activeTab === 'posts' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Articles & Optimization Guides</h2>
                <p className="text-xs text-neutral-400 mt-1">Helpful documentation on prompt architecture and monetization.</p>
              </div>

              <div className="space-y-4">
                <article className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/50">Prompt Engineering</span>
                  <h3 className="text-lg font-bold text-white">How System Constraints Prevent LLM Hallucinations</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    By explicitly defining persona, strict task boundaries, and required output formatting, you increase reasoning reliability across AI models.
                  </p>
                </article>

                <article className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/50">Technical SEO</span>
                  <h3 className="text-lg font-bold text-white">Mastering Core Web Vitals for React Applications</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Optimizing font displays with preconnect headers and utilizing zero-dependency CSS utilities helps guarantee sub-second load times.
                  </p>
                </article>
              </div>
            </div>
          )}

          {/* TAB 3: APP */}
          {activeTab === 'synthbudget' && (
            <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 lg:p-12 space-y-8 max-w-4xl mx-auto">
              <div className="space-y-3">
                <span className="text-xs bg-emerald-950 border border-emerald-800 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                  Mobile Product in Active Testing
                </span>
                <h2 className="text-3xl font-extrabold text-white">SynthBudget Mobile App</h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Personal expense tracker, automated categorization, and cashflow forecast tool engineered for quick offline entry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400" /> Multi-account budget allocations
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400" /> Automated cashflow breakdown
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400" /> Optional ad-free subscription ($4.99/mo)
                  </div>
                </div>

                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center space-y-2">
                  <div className="text-3xl">📱</div>
                  <h4 className="text-sm font-bold text-white">Google Play Store Testing</h4>
                  <p className="text-xs text-neutral-400">Undergoing closed tester reviews. Public build will link here upon store release.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-white">Accessible Micro-Services</h2>
                <p className="text-xs text-neutral-400 mt-1">Budget-friendly engineering and SEO setups.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 font-bold text-xs">$49</div>
                    <h3 className="text-base font-bold text-white">DNS & Domain Setup</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">Custom domain linking, SSL verification, and Namecheap DNS configuration.</p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white border border-neutral-700">Request Setup</button>
                </div>

                <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold text-xs">$99</div>
                    <h3 className="text-base font-bold text-white">SEO & Speed Audit</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">Core Web Vitals audit, meta tag optimization, and indexing assistance.</p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white border border-neutral-700">Request Audit</button>
                </div>

                <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400 font-bold text-xs">$199</div>
                    <h3 className="text-base font-bold text-white">Custom Landing Page</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">Fully responsive single-page application customized for your app launch.</p>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white border border-neutral-700">Get Started</button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PRICING */}
          {activeTab === 'pricing' && (
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-extrabold text-white">Clear & Honest Pricing</h2>
                <p className="text-xs text-neutral-400">Select free browser utilities or micro-services.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase">Starter Tools</span>
                    <div><span className="text-3xl font-black text-white">$0</span></div>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> All 6 browser tools</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Ad-supported experience</li>
                    </ul>
                  </div>
                  <button onClick={() => setActiveTab('tools')} className="w-full py-2.5 rounded-xl border border-neutral-700 bg-neutral-800 text-xs font-bold text-white">Use Browser Tools</button>
                </div>

                <div className="bg-neutral-900 border-2 border-emerald-500/80 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-emerald-400 uppercase">SynthBudget Pro</span>
                    <div><span className="text-3xl font-black text-white">$4.99</span><span className="text-xs text-neutral-500 ml-1">/ month</span></div>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Ad-free mobile experience</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Cloud sync & backup</li>
                    </ul>
                  </div>
                  <button onClick={() => setActiveTab('synthbudget')} className="w-full py-2.5 rounded-xl bg-emerald-400 text-xs font-black text-neutral-950">Learn More</button>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase">Micro Services</span>
                    <div><span className="text-3xl font-black text-white">$49 - $199</span></div>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> DNS troubleshooting</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400" /> Single-page dev</li>
                    </ul>
                  </div>
                  <button onClick={() => setActiveTab('contact')} className="w-full py-2.5 rounded-xl border border-neutral-700 bg-neutral-800 text-xs font-bold text-white">Contact Support</button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: CONTACT */}
          {activeTab === 'contact' && (
            <div className="max-w-xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white">Contact & Support</h2>
                <p className="text-xs text-neutral-400 mt-1">Have a question or request? Send a message below.</p>
              </div>

              {contactSuccess ? (
                <div className="p-4 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Message submitted successfully!
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2">
                    <Send className="w-3.5 h-3.5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 7 & 8: LEGAL */}
          {activeTab === 'privacy' && (
            <div className="max-w-3xl mx-auto bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4 text-xs text-neutral-300 leading-relaxed">
              <h2 className="text-xl font-bold text-white">Privacy Policy</h2>
              <p>Synth Labs Studio respects your privacy. All interactive prompt tools process data locally in your browser.</p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="max-w-3xl mx-auto bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4 text-xs text-neutral-300 leading-relaxed">
              <h2 className="text-xl font-bold text-white">Terms of Service</h2>
              <p>By accessing synthlabsstudio.com, you agree to use our digital tools for lawful purposes.</p>
            </div>
          )}

        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-500 text-xs py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Synth Labs Studio (<span className="text-neutral-300">synthlabsstudio.com</span>). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button onClick={() => setActiveTab('tools')} className="hover:text-white">Tools</button>
            <button onClick={() => setActiveTab('posts')} className="hover:text-white">Guides</button>
            <button onClick={() => setActiveTab('services')} className="hover:text-white">Services</button>
            <button onClick={() => setActiveTab('pricing')} className="hover:text-white">Pricing</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-white">Contact</button>
            <button onClick={() => setActiveTab('privacy')} className="hover:text-white">Privacy Policy</button>
            <button onClick={() => setActiveTab('terms')} className="hover:text-white">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
