import { useState } from "react";

const tools = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    color: "#10a37f",
    accent: "#0d8c6d",
    icon: "◆",
    strengths: [
      "Multimodal — text, image, audio, video input",
      "94.6% AIME 2025 (math), 74.9% SWE-bench (coding)",
      "~80% fewer hallucinations than previous gen (with thinking)",
      "Best-in-class health/medical answers (HealthBench)",
      "Strong creative writing with literary depth",
      "Codex agent for parallel coding tasks",
      "Deep Research for multi-source reports",
      "256K total context window (128K in + 128K out)",
    ],
    limitations: [
      "Massive user base can mean rate limits & throttling",
      "Ads coming to free tier — may affect trust",
      "Writing can lean verbose or generic without steering",
      "Not the top performer on agentic coding benchmarks",
      "Closed ecosystem — limited MCP/external tool integration",
      "Enterprise pricing can escalate quickly",
    ],
    sdlcPhases: [
      { phase: "Requirements", score: 4, note: "Deep Research + multimodal input" },
      { phase: "Design", score: 3, note: "Good reasoning, not the deepest" },
      { phase: "Development", score: 4, note: "Codex + strong code generation" },
      { phase: "Testing", score: 4, note: "Multi-system test scenario reasoning" },
      { phase: "Deployment", score: 3, note: "Decent but not terminal-native" },
      { phase: "Maintenance", score: 3, note: "Good but less precise than Opus" },
      { phase: "Documentation", score: 5, note: "Best writing collaborator claim" },
    ],
  },
  {
    name: "Claude",
    company: "Anthropic",
    color: "#D97757",
    accent: "#c2613f",
    icon: "●",
    strengths: [
      "54% coding market share (Dec 2025) — #1 in coding",
      "Autonomous multi-hour coding sessions (Claude Code)",
      "Low hallucination rate, high accuracy on long docs",
      "200K–1M token context window",
      "Constitutional AI — safety-first enterprise trust",
      "Computer use approaching human-level (spreadsheets, forms)",
      "Opus excels at multi-system bug diagnosis",
      "Used by NASA, Norway's sovereign wealth fund",
    ],
    limitations: [
      "Smaller consumer user base vs ChatGPT",
      "Can be overly cautious / refuse reasonable tasks",
      "Opus models historically expensive (now $5/$25 per MTok)",
      "No native image/video generation",
      "Limited multimodal output (text only)",
      "Slower response times on Opus for complex tasks",
    ],
    sdlcPhases: [
      { phase: "Requirements", score: 4, note: "Excellent long-doc analysis" },
      { phase: "Design", score: 5, note: "Best tradeoff reasoning (Opus)" },
      { phase: "Development", score: 5, note: "#1 coding — Claude Code dominance" },
      { phase: "Testing", score: 4, note: "Thorough edge-case generation" },
      { phase: "Deployment", score: 4, note: "Terminal-native Claude Code" },
      { phase: "Maintenance", score: 5, note: "Multi-system bug diagnosis" },
      { phase: "Documentation", score: 4, note: "Precise technical writing" },
    ],
  },
  {
    name: "Gemini",
    company: "Google",
    color: "#4285F4",
    accent: "#3367d6",
    icon: "▲",
    strengths: [
      "1M–2M token context (largest available)",
      "#1 on WebDev Arena for web development",
      "Native multimodal: text + image + video + audio + code",
      "Deep Think — parallel reasoning streams",
      "Deep Google ecosystem integration (Workspace, Maps, etc.)",
      "Gemini Live with real-time camera visual guidance",
      "Veo 3.1 video generation built in",
      "State-of-the-art video understanding (84.8% VideoMME)",
    ],
    limitations: [
      "Some features US-only / English-only initially",
      "Complex pricing tiers — can confuse new users",
      "Less dominant in pure coding benchmarks vs Claude",
      "Knowledge cutoff lag compared to competitors",
      "Heavy dependence on Google ecosystem for full value",
      "Deep Think responses can take several minutes",
    ],
    sdlcPhases: [
      { phase: "Requirements", score: 4, note: "Massive context + multimodal input" },
      { phase: "Design", score: 4, note: "Huge context for codebase analysis" },
      { phase: "Development", score: 4, note: "#1 WebDev Arena + vibe coding" },
      { phase: "Testing", score: 3, note: "Good but not specialized" },
      { phase: "Deployment", score: 3, note: "Strong in GCP-native workflows" },
      { phase: "Maintenance", score: 3, note: "Good multimodal log analysis" },
      { phase: "Documentation", score: 4, note: "Multimodal docs + video understanding" },
    ],
  },
  {
    name: "Devin",
    company: "Cognition Labs",
    color: "#8B5CF6",
    accent: "#7C3AED",
    icon: "■",
    strengths: [
      "Fully autonomous software engineering agent",
      "End-to-end: code, debug, test, deploy independently",
      "8–12x faster migrations (Nubank case study)",
      "20x+ cost savings on delegated engineering tasks",
      "Multi-agent operation — dispatches sub-tasks",
      "Self-assessed confidence — asks when uncertain",
      "Devin Wiki — auto-generated code documentation",
      "Learns from examples, improves with fine-tuning",
    ],
    limitations: [
      "Struggles with highly creative / novel architectures",
      "Subscription-based — expensive for small teams",
      "Skepticism around real-world accuracy after promo scrutiny",
      "Not ideal for quick inline code suggestions",
      "Limited to software engineering tasks only",
      "Still requires human review for production-critical code",
    ],
    sdlcPhases: [
      { phase: "Requirements", score: 2, note: "Not designed for research/analysis" },
      { phase: "Design", score: 2, note: "Executes plans, doesn't architect" },
      { phase: "Development", score: 5, note: "Autonomous end-to-end coding" },
      { phase: "Testing", score: 4, note: "Writes & runs tests autonomously" },
      { phase: "Deployment", score: 4, note: "Can deploy apps independently" },
      { phase: "Maintenance", score: 4, note: "Bug repro + fix autonomously" },
      { phase: "Documentation", score: 3, note: "Devin Wiki auto-docs" },
    ],
  },
  {
    name: "Perplexity",
    company: "Perplexity AI",
    color: "#0891B2",
    accent: "#0E7490",
    icon: "◇",
    strengths: [
      "Citation-backed answers — every claim traceable",
      "Deep Research: hundreds of sources in 2–4 minutes",
      "Multi-model orchestration (19 models via Computer)",
      "Real-time web search built into every query",
      "Model selector — pick GPT-5, Claude, etc. per query",
      "Perplexity Computer — end-to-end workflow execution",
      "780M+ monthly queries — proven at scale",
      "Best for verifiable, source-linked research",
    ],
    limitations: [
      "Not a coding tool — no IDE integration",
      "Legal scrutiny over content scraping practices",
      "Heavy reliance on third-party models (not own LLM)",
      "Computer feature locked to $200/mo Max tier",
      "Cannot directly edit or write code in editor",
      "Output quality depends on which model is routed",
    ],
    sdlcPhases: [
      { phase: "Requirements", score: 5, note: "Best research + citations" },
      { phase: "Design", score: 3, note: "Can research patterns, not design" },
      { phase: "Development", score: 2, note: "Not a coding tool" },
      { phase: "Testing", score: 2, note: "Research test strategies only" },
      { phase: "Deployment", score: 1, note: "Not applicable" },
      { phase: "Maintenance", score: 4, note: "Bug lookup + real-time docs" },
      { phase: "Documentation", score: 3, note: "Research-backed content" },
    ],
  },
  {
    name: "GitHub Copilot",
    company: "Microsoft / GitHub",
    color: "#D97706",
    accent: "#B45309",
    icon: "✦",
    strengths: [
      "46% of code contributed for active users",
      "Agent mode — handles issues end-to-end with PRs",
      "Works across VS Code, JetBrains, Neovim, CLI",
      "Native GitHub integration (PRs, issues, repo context)",
      "Enterprise-grade privacy (no code retention option)",
      "AI commit messages and code review",
      "Largest installed base of any AI coding tool",
      "IP indemnity on business/enterprise plans",
    ],
    limitations: [
      "Less autonomous than Claude Code or Devin",
      "Can default to older code patterns without prompting",
      "Slowest at raw code generation in comparisons",
      "Agent mode requires expensive Pro+ tier",
      "Plugin-based — not an AI-native IDE experience",
      "Complex tasks may take 3–4 prompts vs 1 on competitors",
    ],
    sdlcPhases: [
      { phase: "Requirements", score: 2, note: "Not designed for research" },
      { phase: "Design", score: 2, note: "Assists, doesn't architect" },
      { phase: "Development", score: 4, note: "Best inline autocomplete experience" },
      { phase: "Testing", score: 3, note: "Can generate tests in-editor" },
      { phase: "Deployment", score: 4, note: "Native GitHub Actions integration" },
      { phase: "Maintenance", score: 3, note: "Good for quick fixes in-editor" },
      { phase: "Documentation", score: 3, note: "Auto commit messages + comments" },
    ],
  },
  {
    name: "Cursor",
    company: "Anysphere",
    color: "#DB2777",
    accent: "#BE185D",
    icon: "⬡",
    strengths: [
      "$1B ARR — fastest growing AI coding tool",
      "AI-native IDE built from ground up on VS Code fork",
      "Agent mode: multi-file edits, terminal, auto-fix",
      "Best UI generation quality in comparisons",
      "Cursor Tab predicts entire functions",
      "Custom AI models trained specifically on code",
      "200K context window for project understanding",
      "Strongest rated for team/enterprise collaboration",
    ],
    limitations: [
      "Costs 2x GitHub Copilot ($20/mo vs $10/mo)",
      "200K context often hits ~70K effective limits",
      "Requires switching to a new editor (VS Code fork)",
      "Verbose commit messages without custom rules",
      "Agent mode only works with Claude models",
      "Heavy users may exhaust quotas quickly",
    ],
    sdlcPhases: [
      { phase: "Requirements", score: 2, note: "Not a research tool" },
      { phase: "Design", score: 3, note: "Good codebase exploration" },
      { phase: "Development", score: 5, note: "Best AI-native IDE experience" },
      { phase: "Testing", score: 4, note: "Agent can write + run tests" },
      { phase: "Deployment", score: 3, note: "Terminal access but not specialized" },
      { phase: "Maintenance", score: 4, note: "Multi-file debugging + auto-fix" },
      { phase: "Documentation", score: 3, note: "In-editor doc generation" },
    ],
  },
  {
    name: "Windsurf",
    company: "Codeium",
    color: "#059669",
    accent: "#047857",
    icon: "◈",
    strengths: [
      "Handles repos with 1M+ lines of code",
      "Riptide search — scans millions of lines in seconds",
      "Cascade agent — deep cross-file context awareness",
      "Cascade Memories — persists context between sessions",
      "Live preview + click-to-edit in browser",
      "One-click deploy from editor",
      "Zero data retention — code never stored/trained on",
      "FedRAMP High certification for enterprise",
    ],
    limitations: [
      "No AI-generated commit messages",
      "Cascade flow context can degrade after ~30 min",
      "Credit-based model — heavy users pay more",
      "Smaller community than Copilot or Cursor",
      "May contradict itself on long sessions",
      "Less polished agent mode than competitors",
    ],
    sdlcPhases: [
      { phase: "Requirements", score: 1, note: "Not applicable" },
      { phase: "Design", score: 3, note: "Great codebase navigation" },
      { phase: "Development", score: 4, note: "Best for massive codebases" },
      { phase: "Testing", score: 3, note: "Cross-file test awareness" },
      { phase: "Deployment", score: 4, note: "One-click deploy built in" },
      { phase: "Maintenance", score: 4, note: "Million-line repo navigation" },
      { phase: "Documentation", score: 2, note: "Basic doc support" },
    ],
  },
];

const phases = ["Requirements", "Design", "Development", "Testing", "Deployment", "Maintenance", "Documentation"];

const phaseIcons = {
  Requirements: "📋",
  Design: "🏗️",
  Development: "⌨️",
  Testing: "🧪",
  Deployment: "🚀",
  Maintenance: "🔧",
  Documentation: "📝",
};

function ScoreBar({ score, color, delay }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <div style={{ display: "flex", gap: "3px" }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "3px",
              background: i <= score ? color : "#e5e7eb",
              border: i <= score ? "none" : "1px solid #d1d5db",
              transition: `all 0.4s ease ${delay + i * 0.05}s`,
              transform: i <= score ? "scale(1)" : "scale(0.85)",
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace", minWidth: "20px" }}>
        {score}/5
      </span>
    </div>
  );
}

export default function AIToolsComparison() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [viewMode, setViewMode] = useState("cards");
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const selectedData = selectedTool !== null ? tools[selectedTool] : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111827",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        padding: "0",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:wght@700;800;900&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f3f4f6; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }
        
        .tool-card {
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .tool-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }
        .tool-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .tool-card:hover::before { opacity: 1; }
        .tool-card.active::before { opacity: 1; }
        
        .view-btn {
          cursor: pointer;
          padding: 8px 20px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          background: transparent;
          color: #6b7280;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }
        .view-btn:hover { border-color: #9ca3af; color: #374151; }
        .view-btn.active { 
          background: #f3f4f6; 
          border-color: #9ca3af; 
          color: #111827; 
          font-weight: 600;
        }
        
        .matrix-cell {
          transition: all 0.2s ease;
          cursor: default;
        }
        .matrix-cell:hover {
          background: #f9fafb !important;
        }
        
        .phase-pill {
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .phase-pill:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "40px 32px 24px",
        borderBottom: "1px solid #e5e7eb",
        background: "linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", color: "#9ca3af", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>
                SDLC × AI Tools — 2025/2026
              </p>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#111827",
              }}>
                AI Tools Comparison
              </h1>
              <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "6px", maxWidth: "500px" }}>
                Model strengths, limitations & SDLC fit — based on official claims
              </p>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <button className={`view-btn ${viewMode === "cards" ? "active" : ""}`} onClick={() => setViewMode("cards")}>Cards</button>
              <button className={`view-btn ${viewMode === "matrix" ? "active" : ""}`} onClick={() => setViewMode("matrix")}>Matrix</button>
              <button className={`view-btn ${viewMode === "phases" ? "active" : ""}`} onClick={() => setViewMode("phases")}>By Phase</button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "24px 32px 60px" }}>

        {/* === CARDS VIEW === */}
        {viewMode === "cards" && (
          <div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "8px",
              marginBottom: "28px",
            }}>
              {tools.map((tool, i) => (
                <div
                  key={tool.name}
                  className={`tool-card ${selectedTool === i ? "active" : ""}`}
                  onClick={() => setSelectedTool(selectedTool === i ? null : i)}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "10px",
                    background: selectedTool === i ? `${tool.color}08` : "#fafafa",
                    border: selectedTool === i ? `2px solid ${tool.color}60` : "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: tool.color }} />
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "16px", color: tool.color }}>{tool.icon}</span>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{tool.name}</div>
                      <div style={{ fontSize: "10px", color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace" }}>{tool.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedData ? (
              <div style={{ animation: "slideUp 0.35s ease" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
                  {/* Strengths */}
                  <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16a34a" }} />
                      <h3 style={{ fontSize: "13px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "1.5px", textTransform: "uppercase", color: "#166534" }}>Strengths</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {selectedData.strengths.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", animation: `fadeIn 0.3s ease ${i * 0.04}s both` }}>
                          <span style={{ color: "#16a34a", fontSize: "8px", marginTop: "6px", flexShrink: 0 }}>●</span>
                          <span style={{ fontSize: "13px", lineHeight: 1.5, color: "#1f2937" }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Limitations */}
                  <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "12px", padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#dc2626" }} />
                      <h3 style={{ fontSize: "13px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "1.5px", textTransform: "uppercase", color: "#991b1b" }}>Limitations</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {selectedData.limitations.map((l, i) => (
                        <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", animation: `fadeIn 0.3s ease ${i * 0.04}s both` }}>
                          <span style={{ color: "#dc2626", fontSize: "8px", marginTop: "6px", flexShrink: 0 }}>●</span>
                          <span style={{ fontSize: "13px", lineHeight: 1.5, color: "#450a0a" }}>{l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SDLC Scores */}
                <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px" }}>
                  <h3 style={{ fontSize: "13px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "1.5px", textTransform: "uppercase", color: "#6b7280", marginBottom: "20px" }}>
                    SDLC Phase Fit
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
                    {selectedData.sdlcPhases.map((p, i) => (
                      <div key={p.phase} style={{
                        display: "flex", alignItems: "center", gap: "12px",
                        padding: "10px 14px", borderRadius: "8px",
                        background: "#ffffff", border: "1px solid #f3f4f6",
                        animation: `fadeIn 0.3s ease ${i * 0.05}s both`,
                      }}>
                        <span style={{ fontSize: "18px" }}>{phaseIcons[p.phase]}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "12px", fontWeight: 600, color: "#374151", marginBottom: "4px" }}>{p.phase}</div>
                          <ScoreBar score={p.score} color={selectedData.color} delay={i * 0.05} />
                        </div>
                        <span style={{ fontSize: "11px", color: "#9ca3af", maxWidth: "140px", textAlign: "right", lineHeight: 1.3 }}>{p.note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "80px 20px", color: "#9ca3af", fontSize: "15px" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px", opacity: 0.4 }}>↑</div>
                Select a tool above to explore its strengths, limitations & SDLC fit
              </div>
            )}
          </div>
        )}

        {/* === MATRIX VIEW === */}
        {viewMode === "matrix" && (
          <div style={{ overflowX: "auto", animation: "fadeIn 0.35s ease" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0", fontSize: "13px" }}>
              <thead>
                <tr>
                  <th style={{
                    textAlign: "left", padding: "14px 16px",
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
                    letterSpacing: "1.5px", textTransform: "uppercase", color: "#6b7280",
                    borderBottom: "2px solid #e5e7eb", position: "sticky", left: 0,
                    background: "#ffffff", zIndex: 1, minWidth: "130px",
                  }}>Model</th>
                  {phases.map((phase) => (
                    <th key={phase} style={{
                      textAlign: "center", padding: "14px 8px",
                      fontFamily: "'JetBrains Mono', monospace", fontSize: "10px",
                      letterSpacing: "1px", textTransform: "uppercase", color: "#6b7280",
                      borderBottom: "2px solid #e5e7eb", minWidth: "100px",
                    }}>
                      <div>{phaseIcons[phase]}</div>
                      <div style={{ marginTop: "4px" }}>{phase}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, ti) => (
                  <tr key={tool.name}>
                    <td className="matrix-cell" style={{
                      padding: "12px 16px", borderBottom: "1px solid #f3f4f6",
                      position: "sticky", left: 0,
                      background: ti % 2 === 0 ? "#fafafa" : "#ffffff", zIndex: 1,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: tool.color, fontSize: "14px" }}>{tool.icon}</span>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: "13px", color: "#111827" }}>{tool.name}</div>
                          <div style={{ fontSize: "10px", color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace" }}>{tool.company}</div>
                        </div>
                      </div>
                    </td>
                    {phases.map((phase) => {
                      const phaseData = tool.sdlcPhases.find((p) => p.phase === phase);
                      const score = phaseData?.score || 0;
                      const bg = score >= 5 ? `${tool.color}18` : score >= 4 ? `${tool.color}0d` : score >= 3 ? `${tool.color}06` : ti % 2 === 0 ? "#fafafa" : "#ffffff";
                      return (
                        <td key={phase} className="matrix-cell" title={phaseData?.note || ""} style={{
                          textAlign: "center", padding: "12px 8px",
                          borderBottom: "1px solid #f3f4f6", background: bg,
                        }}>
                          <div style={{ fontWeight: 700, fontSize: "18px", color: score >= 4 ? tool.color : "#d1d5db", fontFamily: "'JetBrains Mono', monospace" }}>
                            {score}
                          </div>
                          <div style={{ fontSize: "9px", color: "#9ca3af", marginTop: "2px", lineHeight: 1.2, maxWidth: "100px", margin: "2px auto 0" }}>
                            {phaseData?.note}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* === PHASES VIEW === */}
        {viewMode === "phases" && (
          <div style={{ animation: "fadeIn 0.35s ease" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
              {phases.map((phase) => (
                <div key={phase} className="phase-pill"
                  onClick={() => setHoveredPhase(hoveredPhase === phase ? null : phase)}
                  style={{
                    padding: "10px 18px", borderRadius: "8px",
                    background: hoveredPhase === phase ? "#f3f4f6" : "#ffffff",
                    border: hoveredPhase === phase ? "1px solid #9ca3af" : "1px solid #e5e7eb",
                    fontSize: "13px", fontWeight: 500,
                    color: hoveredPhase === phase ? "#111827" : "#6b7280",
                    display: "flex", alignItems: "center", gap: "6px",
                  }}
                >
                  <span>{phaseIcons[phase]}</span>
                  {phase}
                </div>
              ))}
            </div>

            {hoveredPhase ? (
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, marginBottom: "20px", color: "#111827" }}>
                  {phaseIcons[hoveredPhase]} {hoveredPhase}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[...tools]
                    .sort((a, b) => {
                      const sa = a.sdlcPhases.find((p) => p.phase === hoveredPhase)?.score || 0;
                      const sb = b.sdlcPhases.find((p) => p.phase === hoveredPhase)?.score || 0;
                      return sb - sa;
                    })
                    .map((tool, i) => {
                      const phaseData = tool.sdlcPhases.find((p) => p.phase === hoveredPhase);
                      const score = phaseData?.score || 0;
                      return (
                        <div key={tool.name} style={{
                          display: "flex", alignItems: "center", gap: "16px",
                          padding: "14px 20px", borderRadius: "10px",
                          background: i === 0 ? `${tool.color}08` : "#fafafa",
                          border: i === 0 ? `2px solid ${tool.color}40` : "1px solid #f3f4f6",
                          animation: `slideUp 0.3s ease ${i * 0.05}s both`,
                        }}>
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace", fontSize: "14px",
                            fontWeight: 700, color: i === 0 ? tool.color : "#d1d5db", width: "24px",
                          }}>#{i + 1}</span>
                          <span style={{ color: tool.color, fontSize: "16px" }}>{tool.icon}</span>
                          <div style={{ flex: 1, minWidth: "100px" }}>
                            <div style={{ fontWeight: 600, fontSize: "14px", color: "#111827" }}>{tool.name}</div>
                            <div style={{ fontSize: "10px", color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace" }}>{tool.company}</div>
                          </div>
                          <div style={{ flex: 2, minWidth: "140px" }}>
                            <ScoreBar score={score} color={tool.color} delay={i * 0.05} />
                          </div>
                          <div style={{ fontSize: "12px", color: "#6b7280", flex: 2, textAlign: "right" }}>
                            {phaseData?.note}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "80px 20px", color: "#9ca3af", fontSize: "15px" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px", opacity: 0.4 }}>↑</div>
                Select an SDLC phase above to see ranked tool recommendations
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: "40px", padding: "16px 20px", borderRadius: "8px",
          background: "#f9fafb", border: "1px solid #e5e7eb",
          fontSize: "11px", color: "#6b7280",
          fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6,
        }}>
          <strong style={{ color: "#374151" }}>Note:</strong> All data reflects official claims from each company as of early 2026. Scores are based on claimed capabilities, benchmark results, and documented use cases — not independent testing. Real-world performance varies by task, team, and context.
        </div>
      </div>
    </div>
  );
}