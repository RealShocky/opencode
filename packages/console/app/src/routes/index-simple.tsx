import { Title } from "@solidjs/meta"

export default function Home() {
  return (
    <div style={{ 
      background: "#0a0e1a", 
      color: "white", 
      "min-height": "100vh",
      padding: "2rem",
      "font-family": "sans-serif"
    }}>
      <Title>BygHeartCoder Test</Title>
      <h1 style={{ color: "#06b6d4", "font-size": "3rem" }}>BygHeartCoder</h1>
      <p style={{ "font-size": "1.5rem", color: "#94a3b8" }}>AI Coding Agent for the Terminal</p>
      <p>If you see this, the page is rendering! ✅</p>
    </div>
  )
}
