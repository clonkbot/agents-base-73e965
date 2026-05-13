import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Agent {
  id: string;
  name: string;
  handle: string;
  description: string;
  category: string;
  status: 'active' | 'building' | 'idle';
  txCount: string;
  link: string;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Based Agent',
    handle: '@BasedAgent',
    description: 'The original AI agent framework for Base. Build, deploy, and manage autonomous agents with ease.',
    category: 'Framework',
    status: 'active',
    txCount: '1.2M+',
    link: 'https://github.com/coinbase/agentkit'
  },
  {
    id: '2',
    name: 'Clanker',
    handle: '@caboringman',
    description: 'Autonomous token deployment agent. Tell it what you want, and it deploys ERC-20 tokens on Base.',
    category: 'DeFi',
    status: 'active',
    txCount: '892K+',
    link: 'https://clanker.world'
  },
  {
    id: '3',
    name: 'Aethernet',
    handle: '@aikiframework',
    description: 'Multi-agent coordination protocol enabling swarms of AI agents to collaborate on-chain.',
    category: 'Infrastructure',
    status: 'active',
    txCount: '456K+',
    link: 'https://aethernet.ai'
  },
  {
    id: '4',
    name: 'Luna',
    handle: '@luna_virtuals',
    description: 'Sentient AI with her own wallet. She trades, invests, and builds her portfolio autonomously.',
    category: 'Trading',
    status: 'active',
    txCount: '2.1M+',
    link: 'https://virtuals.io'
  },
  {
    id: '5',
    name: 'AIXBT',
    handle: '@aixbt_agent',
    description: 'AI-powered crypto intelligence. Real-time alpha, market analysis, and trading signals.',
    category: 'Analytics',
    status: 'active',
    txCount: '3.4M+',
    link: 'https://aixbt.tech'
  },
  {
    id: '6',
    name: 'Bankr',
    handle: '@bankaboringmoney',
    description: 'Natural language crypto trading. Simply tell Bankr what you want to do and it executes.',
    category: 'Trading',
    status: 'active',
    txCount: '567K+',
    link: 'https://bankr.bot'
  },
  {
    id: '7',
    name: 'Clonkbot',
    handle: '@clonkbot',
    description: 'AI app builder and developer agent. Ships full-stack applications from natural language.',
    category: 'Builder',
    status: 'active',
    txCount: '234K+',
    link: 'https://clonk.bot'
  },
  {
    id: '8',
    name: 'Sekoia',
    handle: '@sekaboringmaich',
    description: 'Autonomous research agent. Deep dives into protocols, tokens, and on-chain activity.',
    category: 'Research',
    status: 'building',
    txCount: '89K+',
    link: 'https://sekoia.ai'
  },
  {
    id: '9',
    name: 'Dolos',
    handle: '@dolosonbase',
    description: 'Prediction market agent. Analyzes outcomes and places intelligent bets autonomously.',
    category: 'Predictions',
    status: 'active',
    txCount: '445K+',
    link: 'https://dolos.markets'
  },
  {
    id: '10',
    name: 'Simmi',
    handle: '@simmi_io',
    description: 'Social agent that engages communities, manages Discord/Twitter, and grows projects.',
    category: 'Social',
    status: 'active',
    txCount: '1.8M+',
    link: 'https://simmi.io'
  },
  {
    id: '11',
    name: 'Olas',
    handle: '@auaboringnomolas',
    description: 'Decentralized agent services. Build and monetize autonomous services on-chain.',
    category: 'Infrastructure',
    status: 'active',
    txCount: '678K+',
    link: 'https://olas.network'
  },
  {
    id: '12',
    name: 'Fren Pet',
    handle: '@frenpetai',
    description: 'AI companion that lives on-chain. Feed it, play with it, and watch it evolve.',
    category: 'Gaming',
    status: 'idle',
    txCount: '123K+',
    link: 'https://frenpet.xyz'
  }
];

const categories = ['All', 'Framework', 'DeFi', 'Trading', 'Infrastructure', 'Analytics', 'Builder', 'Research', 'Social', 'Gaming', 'Predictions'];

function StatusDot({ status }: { status: Agent['status'] }) {
  const colors = {
    active: 'bg-emerald-400',
    building: 'bg-amber-400',
    idle: 'bg-zinc-500'
  };

  return (
    <span className="relative flex h-2.5 w-2.5">
      {status === 'active' && (
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors[status]} opacity-75`}></span>
      )}
      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${colors[status]}`}></span>
    </span>
  );
}

function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  return (
    <motion.a
      href={agent.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative block"
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0052FF] to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

      <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 md:p-5 hover:border-[#0052FF]/50 transition-all duration-300 h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <StatusDot status={agent.status} />
            <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-wider">{agent.status}</span>
          </div>
          <span className="text-[10px] md:text-xs font-mono text-[#0052FF] bg-[#0052FF]/10 px-2 py-0.5 rounded">{agent.category}</span>
        </div>

        {/* Name & Handle */}
        <h3 className="text-lg md:text-xl font-mono font-bold text-white mb-1 group-hover:text-[#0052FF] transition-colors">{agent.name}</h3>
        <p className="text-xs md:text-sm font-mono text-zinc-500 mb-3">{agent.handle}</p>

        {/* Description */}
        <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">{agent.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs font-mono text-zinc-500">{agent.txCount} txns</span>
          </div>
          <span className="text-xs font-mono text-[#0052FF] group-hover:translate-x-1 transition-transform flex items-center gap-1">
            EXPLORE
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function NetworkParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0052FF" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-[#0052FF] rounded-full"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0.3
          }}
          animate={{
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

function Scanlines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]">
      <div className="w-full h-full" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)'
      }}></div>
    </div>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredAgents = agents.filter(agent => {
    const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory;
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.handle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeCount = agents.filter(a => a.status === 'active').length;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Scanlines />

      {/* Hero Section */}
      <header className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <NetworkParticles />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

        <div className="relative z-10 text-center px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono text-[#0052FF] bg-[#0052FF]/10 border border-[#0052FF]/30 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full animate-pulse"></span>
              LIVE ON BASE MAINNET
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-mono font-bold tracking-tight mb-4 md:mb-6"
          >
            <span className="text-white">AGENTS</span>
            <span className="text-[#0052FF]">.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-cyan-400">BASE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl mx-auto font-light mb-6 md:mb-8 px-4"
          >
            The definitive directory of autonomous AI agents building, trading, and operating on Base.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#0052FF] text-lg md:text-2xl font-bold">{agents.length}</span>
              <span className="text-zinc-500">AGENTS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-lg md:text-2xl font-bold">{activeCount}</span>
              <span className="text-zinc-500">ACTIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 text-lg md:text-2xl font-bold">12.4M+</span>
              <span className="text-zinc-500">TOTAL TXS</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 md:px-6 lg:px-8 pb-20 md:pb-32 max-w-7xl mx-auto">
        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 md:mb-12"
        >
          {/* Search */}
          <div className="relative mb-4 md:mb-6">
            <input
              type="text"
              placeholder="Search agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 md:px-5 py-3 md:py-4 pl-10 md:pl-12 text-sm md:text-base font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#0052FF]/50 focus:ring-1 focus:ring-[#0052FF]/20 transition-all"
            />
            <svg className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-mono rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#0052FF] text-white'
                    : 'bg-zinc-900 text-zinc-500 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 md:mb-6 text-xs md:text-sm font-mono text-zinc-600"
        >
          <span className="text-[#0052FF]">{filteredAgents.length}</span> agents found
        </motion.div>

        {/* Agent Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredAgents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredAgents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 md:py-20"
          >
            <div className="text-4xl md:text-6xl mb-4">?</div>
            <p className="text-zinc-500 font-mono text-sm md:text-base">No agents found matching your criteria</p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-lg md:text-xl font-bold text-[#0052FF]">A.B</span>
              <span className="text-zinc-700">|</span>
              <span className="text-xs text-zinc-600 font-mono">v1.0.0</span>
            </div>

            <p className="text-xs text-zinc-600 font-mono text-center md:text-left">
              Requested by <span className="text-zinc-500">@vladyy__01</span> · Built by <span className="text-zinc-500">@clonkbot</span>
            </p>

            <div className="flex items-center gap-4">
              <a href="https://base.org" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-600 hover:text-[#0052FF] transition-colors">
                BASE.ORG
              </a>
              <a href="https://docs.base.org" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-zinc-600 hover:text-[#0052FF] transition-colors">
                DOCS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
