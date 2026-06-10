import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function CounterNum({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'scale(1.4)'
    el.style.color = '#f72585'
    el.style.textShadow = '0 0 20px #f72585'
    const t = setTimeout(() => {
      el.style.transform = 'scale(1)'
      el.style.color = ''
      el.style.textShadow = ''
    }, 200)
    return () => clearTimeout(t)
  }, [value])

  return (
    <span ref={ref} className="inline-block transition-all duration-200">
      {value}
    </span>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen flex flex-col p-4 md:p-8 lg:p-12 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-overlay animate-grid-scroll pointer-events-none" />
      <div className="fixed inset-0 scanlines pointer-events-none opacity-20" />
      
      {/* Top Navigation / Status */}
      <header className="z-10 flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#f72585]" />
          <span className="font-heading text-xs tracking-[0.2em] text-primary">SYSTEM: ONLINE</span>
        </div>
        <div className="text-[10px] font-heading text-muted uppercase tracking-tighter">
          v1.33.0 // 2026.05.30
        </div>
      </header>

      {/* Main Bento Grid */}
      <main className="z-10 flex-grow grid grid-cols-1 md:grid-cols-12 gap-4 max-w-7xl mx-auto w-full">
        
        {/* Hero Card - Large */}
        <section className="md:col-span-8 bento-card flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src={heroImg} className="w-64 h-64 grayscale invert" alt="" />
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-4 animate-neon-pulse text-primary leading-none">
              DRIVE
            </h1>
            <p className="text-xl md:text-2xl font-body text-text max-w-md">
              Outrun the future with next-gen UI generation.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <div className="flex -space-x-2">
              <img src={viteLogo} className="w-10 h-10 p-2 bg-background/80 rounded-full border border-primary/20" alt="Vite" />
              <img src={reactLogo} className="w-10 h-10 p-2 bg-background/80 rounded-full border border-primary/20 animate-spin-slow" alt="React" />
            </div>
            <div className="text-[10px] font-heading flex flex-col justify-center">
              <span className="text-primary">POWERED BY</span>
              <span className="text-text/50">VITE + REACT</span>
            </div>
          </div>
        </section>

        {/* Counter Card - Square-ish */}
        <section className="md:col-span-4 bento-card flex flex-col items-center justify-center text-center bg-primary/10 border-primary/40">
          <div className="mb-4 p-4 rounded-full bg-primary/20 text-primary">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-sm font-heading mb-6 text-primary">ENERGY CORE</h2>
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="relative py-4 px-12 text-background text-xl font-heading overflow-hidden bg-primary rounded-xl transition-all duration-400 ease-in-out shadow-[0_0_20px_rgba(247,37,133,0.4)] hover:scale-105 hover:shadow-[0_0_35px_rgba(247,37,133,0.6)] active:scale-95 cursor-pointer"
          >
            IGNITE_ <CounterNum value={count} />
          </button>
        </section>

        {/* Documentation Card - Vertical */}
        <section className="md:col-span-4 bento-card">
          <h2 className="text-lg mb-6 flex items-center gap-3 text-primary font-heading">
            <span className="w-2 h-2 bg-primary rounded-full" />
            DOCS
          </h2>
          <div className="space-y-4">
            <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-background/40 hover:bg-primary/10 transition-colors group">
              <span className="font-body">Vite Framework</span>
              <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="https://react.dev/" target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-background/40 hover:bg-primary/10 transition-colors group">
              <span className="font-body">React Library</span>
              <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </section>

        {/* Social Card - Wide */}
        <section className="md:col-span-8 bento-card">
          <h2 className="text-lg mb-6 text-primary font-heading">CONNECT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'GitHub', url: 'https://github.com/Ex2-Axon/x-template', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { name: 'Discord', url: 'https://discord.gg/8Zeq8VCU', icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z' },
              { name: 'X.com', url: 'https://x.com/Microtronic2', icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' },
              { name: 'Bluesky', url: 'https://bsky.app/profile/microtronic.bsky.social', icon: 'M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C3.405 1.447 2 2.18 2 4.022c0 1.081.54 4.545 1.2 5.57.8 1.246 2.308 1.768 3.5 1.637-2.228.328-4.7.77-4.7 3.57 0 2.8 1.405 3.553 3.202 3.553 2.752 0 5.711-3.94 6.798-6.054 1.087 2.114 4.046 6.053 6.798 6.053 1.797 0 3.202-.753 3.202-3.554 0-2.8-2.472-3.242-4.7-3.57 1.192.13 2.7.39 3.5-1.637.66-1.025 1.2-4.489 1.2-5.57 0-1.841-1.405-2.575-3.202-1.217-2.752 1.942-5.711 5.881-6.798 7.995z' },
            ].map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-4 rounded-xl bg-background/60 hover:text-primary transition-all hover:scale-105 border border-transparent hover:border-primary/30 group">
                <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon}/></svg>
                <span className="text-[10px] font-heading uppercase tracking-widest">{social.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="z-10 mt-8 py-4 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-[10px] font-heading tracking-widest">
          © 2026 MICROTRONIC. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <span className="text-primary text-[10px] font-heading tracking-widest animate-pulse">CONNECTION SECURE</span>
          <span className="text-muted text-[10px] font-heading tracking-widest">LATENCY: 12ms</span>
        </div>
      </footer>
    </div>
  )
}

export default App
