import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack.jsx';

export default function PlatformStackSection() {
  const cards = [
    {
      tag: "FEATURE 01",
      title: "Real-World AI Inference",
      description: "Deploy sub-5ms latency AI vision and telemetry reasoning models directly to edge gateways, physical machinery, and robotics.",
      iconBg: "#F6EAFB",
      iconColor: "#CB6CE6",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      metrics: [
        { label: "Edge Latency", value: "4.2 ms avg" },
        { label: "Active Inference", value: "99.94% Uptime" }
      ]
    },
    {
      tag: "FEATURE 02",
      title: "Universal Hardware Mesh",
      description: "Connect legacy industrial equipment, microcontrollers, and modern sensors through zero-driver automated device discovery.",
      iconBg: "#EEECFB",
      iconColor: "#5B3AC4",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
        </svg>
      ),
      metrics: [
        { label: "Connected Nodes", value: "1,428 devices" },
        { label: "Protocol Adapter", value: "Modbus / OPC UA / CAN" }
      ]
    },
    {
      tag: "FEATURE 03",
      title: "Zero-Copy Data Ingestion",
      description: "Stream high-frequency sensor telemetry with zero buffer loss. Aggregate millions of ops/sec across distributed clusters.",
      iconBg: "#FDF5FF",
      iconColor: "#C759E1",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M12 2v20M2 12h20M17 7l-10 10M7 7l10 10"/>
          <circle cx="12" cy="12" r="4"/>
        </svg>
      ),
      metrics: [
        { label: "Ingestion Throughput", value: "84.2k ops/sec" },
        { label: "Stream Latency", value: "Sub-millisecond" }
      ]
    },
    {
      tag: "FEATURE 04",
      title: "Autonomous Closed-Loop Workflows",
      description: "Automate safety interventions, equipment parameter tuning, and operational cascades driven by continuous AI inference.",
      iconBg: "#F6EAFB",
      iconColor: "#9A4DC1",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      metrics: [
        { label: "Active Rules", value: "168 rules" },
        { label: "Fault Triggers", value: "0 unhandled" }
      ]
    },
    {
      tag: "FEATURE 05",
      title: "Operational Safety & Compliance",
      description: "Enforce real-world physical safety constraints and audit logs across all connected autonomous machinery.",
      iconBg: "#EEECFB",
      iconColor: "#5B3AC4",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
          <polyline points="4 8 10 4 16 9 22 3"/>
        </svg>
      ),
      metrics: [
        { label: "Safety Isolation", value: "Hardware Air-gap" },
        { label: "Audit Compliance", value: "SOC 2 Type II" }
      ]
    },
    {
      tag: "FEATURE 06",
      title: "Unified Fleet & Mesh Insights",
      description: "Comprehensive operational dashboard giving real-time visibility into machine health, predictive maintenance, and energy usage.",
      iconBg: "#FDF5FF",
      iconColor: "#DB97F5",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
        </svg>
      ),
      metrics: [
        { label: "Fleet Intelligence", value: "Global Live Mesh" },
        { label: "Model Updates", value: "OTA Mesh Deploy" }
      ]
    }
  ];

  return (
    <section className="platform-stack-section" id="platform-stack">
      <ScrollStack 
        scrubDamping={1.0}
        topOffsetStep={18}
        header={
          <div className="section-header-container">
            <span className="section-badge">THE PLATFORM</span>
            <h2 className="section-heading">Get to know our capabilities</h2>
            <p className="section-subheading">
              Explore how EmbryoOne brings AI, hardware, IoT, and automated control into one continuous real-world operational stack.
            </p>
          </div>
        }
      >
        {cards.map((card, idx) => (
          <ScrollStackItem key={idx}>
            <div className="stack-card-content">
              <div className="stack-card-left">
                <div className="stack-card-header">
                  <div className="stack-card-icon" style={{ backgroundColor: card.iconBg, color: card.iconColor }}>
                    {card.icon}
                  </div>
                  <span className="stack-card-tag" style={{ color: card.iconColor }}>{card.tag}</span>
                </div>
                <h3 className="stack-card-title">{card.title}</h3>
                <p className="stack-card-desc">{card.description}</p>
                
                <div className="stack-card-metrics">
                  {card.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="metric-pill">
                      <span className="metric-label">{m.label}:</span>
                      <span className="metric-value">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="stack-card-right">
                <div className="card-ui-preview">
                  <div className="ui-header-bar">
                    <span className="ui-dot red"></span>
                    <span className="ui-dot yellow"></span>
                    <span className="ui-dot green"></span>
                    <span className="ui-title">EmbryoOne Console — {card.title}</span>
                  </div>
                  <div className="ui-body-preview">
                    <div className="ui-stat-row">
                      <div className="stat-box">
                        <div className="stat-title">{card.metrics[0].label}</div>
                        <div className="stat-number">{card.metrics[0].value}</div>
                      </div>
                      <div className="stat-box accent">
                        <div className="stat-title">{card.metrics[1].label}</div>
                        <div className="stat-number">{card.metrics[1].value}</div>
                      </div>
                    </div>
                    <div className="ui-graph-line">
                      <div className="graph-fill"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
