import "./index.css"
import { Title, Meta, Link } from "@solidjs/meta"
import { HttpHeader } from "@solidjs/start"
import { createSignal, onMount, onCleanup, For } from "solid-js"

export default function Home() {
  const [mouseX, setMouseX] = createSignal(0)
  const [mouseY, setMouseY] = createSignal(0)
  let particleCount = 0

  const createParticle = (x: number, y: number) => {
    if (particleCount % 3 !== 0) return // Only create particle every 3rd move
    
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = x + 'px'
    particle.style.top = y + 'px'
    document.body.appendChild(particle)
    
    setTimeout(() => particle.remove(), 1500)
  }

  const handleMouseMove = (e: MouseEvent) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
    particleCount++
    createParticle(e.clientX, e.clientY)
  }

  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })

  onCleanup(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })

  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Native terminal performance" },
    { icon: "🔒", title: "Privacy First", desc: "Your code never leaves your machine" },
    { icon: "🎨", title: "Any Model", desc: "75+ AI providers supported" },
    { icon: "🔧", title: "LSP Enabled", desc: "Intelligent code understanding" },
    { icon: "🌐", title: "Any Editor", desc: "Works with your favorite IDE" },
    { icon: "🔗", title: "Share Sessions", desc: "Collaborate effortlessly" }
  ]

  return (
    <main class="futuristic-page">
      <HttpHeader name="Cache-Control" value="public, max-age=1, s-maxage=3600, stale-while-revalidate=86400" />
      <Title>BygHeartCoder | AI Coding Agent for the Terminal</Title>
      <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <Meta property="og:image" content="/social-share.png" />
      <Meta name="twitter:image" content="/social-share.png" />
      
      <div class="gradient-bg"></div>
      <div class="mouse-glow" style={{ left: `${mouseX()}px`, top: `${mouseY()}px` }}></div>
      <div class="grid-overlay"></div>
      
      <div class="content-wrapper">
        <nav style={{ padding: "2rem", display: "flex", "justify-content": "space-between", "align-items": "center" }}>
          <div style={{ "font-size": "1.5rem", "font-weight": "bold", color: "#06b6d4" }}>BygHeartCoder</div>
          <a href="/auth" style={{ color: "#06b6d4", "text-decoration": "none" }}>Sign In</a>
        </nav>
        
        <section class="hero-section">
          <div class="hero-content">
            <div class="hero-badge">AI-Powered Terminal Agent</div>
            <h1 class="hero-title">
              Code Smarter with
              <span class="gradient-text"> BygHeartCoder</span>
            </h1>
            <p class="hero-description">
              The most powerful open-source AI coding agent built for your terminal.
              Privacy-first, lightning-fast, and infinitely customizable.
            </p>
            <div class="hero-actions">
              <a href="/auth" class="btn-primary">
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m-6-6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="/docs" class="btn-secondary">
                Read Documentation
              </a>
            </div>
            <div class="install-command">
              <code>curl -fsSL https://vibrationrobotics.com/install | bash</code>
              <button class="copy-btn" onClick={() => navigator.clipboard.writeText('curl -fsSL https://vibrationrobotics.com/install | bash')}>
                Copy
              </button>
            </div>
          </div>
        </section>

        <section class="features-section">
          <h2 class="section-title">Powerful Features</h2>
          <div class="features-grid">
            <For each={features}>
              {(feature) => (
                <div class="feature-card">
                  <div class="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              )}
            </For>
          </div>
        </section>

        <section class="stats-section">
          <div class="stat-card">
            <div class="stat-number">26K+</div>
            <div class="stat-label">GitHub Stars</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">188</div>
            <div class="stat-label">Contributors</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">200K+</div>
            <div class="stat-label">Monthly Users</div>
          </div>
        </section>

        <footer style={{ "text-align": "center", padding: "3rem", color: "#94a3b8", "margin-top": "4rem" }}>
          <p>© 2025 BygHeartCoder. Open Source AI Coding Agent.</p>
        </footer>
      </div>
    </main>
  )
}
