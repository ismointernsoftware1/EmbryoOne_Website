import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack.jsx';

export default function PlatformStackSection() {
  const cards = [
    {
      tag: "FEATURE 01",
      title: "Real-World AI Inference",
      description: "Deploy sub-5ms latency AI vision and telemetry reasoning models directly to edge gateways, physical machinery, and robotics.",
      iconBg: "#F1F3F0",
      iconColor: "#181330",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      checklist: [
        "Sub-5ms Vision Reasoning",
        "Edge Gateway Micro-Models",
        "Autonomous Sensor Triggering",
        "Zero-Cloud Fallback Execution"
      ],
      metrics: [
        { label: "Edge Latency", value: "4.2 ms avg" },
        { label: "Active Inference", value: "99.94% Uptime" }
      ],
      previewType: "dual-cards"
    },
    {
      tag: "FEATURE 02",
      title: "Universal Hardware Mesh",
      description: "Connect legacy industrial equipment, microcontrollers, and modern sensors through zero-driver automated device discovery.",
      iconBg: "#F1F3F0",
      iconColor: "#181330",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      checklist: [
        "Zero-Driver Auto Discovery",
        "Modbus / CAN / OPC-UA Protocol Bridge",
        "Bidirectional Actuator Control",
        "Legacy PLC Interoperability"
      ],
      metrics: [
        { label: "Connected Nodes", value: "1,428 devices" },
        { label: "Protocol Adapter", value: "Universal Mesh" }
      ],
      previewType: "mesh-nodes"
    },
    {
      tag: "FEATURE 03",
      title: "Zero-Copy Data Ingestion",
      description: "Stream high-frequency sensor telemetry with zero buffer loss. Aggregate millions of ops/sec across distributed clusters.",
      iconBg: "#F1F3F0",
      iconColor: "#181330",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      checklist: [
        "High-Frequency Telemetry Ingestion",
        "Ring Buffer Zero Memory Copy",
        "Microsecond Time-Series Stamping",
        "Lossless Network Burst Resiliency"
      ],
      metrics: [
        { label: "Ingestion Throughput", value: "84.2k ops/sec" },
        { label: "Stream Latency", value: "Sub-millisecond" }
      ],
      previewType: "table-with-drawer"
    },
    {
      tag: "FEATURE 04",
      title: "Autonomous Closed-Loop Workflows",
      description: "Automate safety interventions, equipment parameter tuning, and operational cascades driven by continuous AI inference.",
      iconBg: "#F1F3F0",
      iconColor: "#181330",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      checklist: [
        "Dynamic Machine Parameter Tuning",
        "Deterministic Safety Interventions",
        "Cascading Event Escalations",
        "Hardware Interlock Verification"
      ],
      metrics: [
        { label: "Active Rules", value: "168 rules" },
        { label: "Fault Triggers", value: "0 unhandled" }
      ],
      previewType: "rules-inspector"
    },
    {
      tag: "FEATURE 05",
      title: "Operational Safety & Compliance",
      description: "Enforce real-world physical safety constraints and audit logs across all connected autonomous machinery.",
      iconBg: "#F1F3F0",
      iconColor: "#181330",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      checklist: [
        "Hardware Air-Gap Safety Relays",
        "Cryptographic Audit Ledger",
        "Real-Time Emergency Killswitch",
        "SOC 2 Type II & ISO 27001 Certified"
      ],
      metrics: [
        { label: "Safety Isolation", value: "Hardware Air-gap" },
        { label: "Audit Compliance", value: "SOC 2 Type II" }
      ],
      previewType: "table-with-drawer"
    },
    {
      tag: "FEATURE 06",
      title: "Unified Fleet & Mesh Insights",
      description: "Comprehensive operational dashboard giving real-time visibility into machine health, predictive maintenance, and energy usage.",
      iconBg: "#F1F3F0",
      iconColor: "#181330",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      checklist: [
        "Global Fleet Health Heatmaps",
        "Predictive Failure Forecasting",
        "Over-The-Air Edge Runtime Updates",
        "Energy & Throttle Optimization"
      ],
      metrics: [
        { label: "Fleet Intelligence", value: "Global Live Mesh" },
        { label: "Model Updates", value: "OTA Mesh Deploy" }
      ],
      previewType: "dual-cards"
    }
  ];

  return (
    <section className="platform-stack-section" id="platform-stack">
      <ScrollStack 
        scrubDamping={1.5}
        topOffsetStep={6}
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
              {/* Left Column: Icon + Title + Description + Checklist + Metrics */}
              <div className="stack-card-left">
                <div>
                  <div className="stack-card-header">
                    <div className="stack-card-icon-badge">
                      {card.icon}
                    </div>
                  </div>
                  
                  <h3 className="stack-card-title">{card.title}</h3>
                  <p className="stack-card-desc">{card.description}</p>
                  
                  {/* Checklist matching reference screenshot */}
                  <div className="stack-card-checklist">
                    {card.checklist.map((item, cIdx) => (
                      <div key={cIdx} className="checklist-item">
                        <span className="checklist-check">
                          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Pills */}
                <div className="stack-card-metrics">
                  {card.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="metric-pill">
                      <span className="metric-label">{m.label}:</span>
                      <span className="metric-value">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Soft Sage/Sand Canvas with UI Mockup */}
              <div className="stack-card-right">
                <div className="card-ui-preview">
                  {/* Decorative curved stroke in background */}
                  <svg className="preview-bg-accent" viewBox="0 0 140 48" fill="none">
                    <path d="M5 40 C 35 5, 65 45, 95 15 C 115 -5, 130 18, 135 15" stroke="#37A87A" strokeWidth="3" strokeLinecap="round" />
                  </svg>

                  <div className="preview-mockup-wrapper">
                    {/* Render Type A: Dual Column Provider/Node Cards with Floating Card & Cursor (Screenshot 1) */}
                    {(card.previewType === "dual-cards" || card.previewType === "mesh-nodes") && (
                      <>
                        <div className="preview-columns-grid">
                          {/* Column 1 */}
                          <div className="preview-mini-card">
                            <div className="preview-mini-header">
                              <span className="preview-mini-title">Edge Node Alpha</span>
                              <span className="preview-card-count">3</span>
                            </div>
                            <div className="preview-mini-sub">Inference Gateway</div>
                            
                            <div className="preview-node-item">
                              <div className="node-avatar-circle">RF</div>
                              <div className="node-details">
                                <span className="node-name">Vision-LLM v4.1</span>
                                <span className="node-status-text">Active reasoning • 4.2ms</span>
                              </div>
                            </div>

                            <div className="preview-node-item">
                              <div className="node-avatar-circle">IR</div>
                              <div className="node-details">
                                <span className="node-name">Sensor Telemetry</span>
                                <span className="node-status-text">Streaming 8.4k pkt/s</span>
                              </div>
                            </div>

                            <div className="preview-node-item" style={{ opacity: 0.4 }}>
                              <div className="node-avatar-circle">JC</div>
                              <div className="node-details">
                                <span className="node-name">Micro-Model #12</span>
                                <span className="node-status-text">Standby node</span>
                              </div>
                            </div>
                          </div>

                          {/* Column 2 */}
                          <div className="preview-mini-card">
                            <div className="preview-mini-header">
                              <span className="preview-mini-title">Edge Node Beta</span>
                              <span className="preview-card-count">2</span>
                            </div>
                            <div className="preview-mini-sub">Physical Mesh</div>

                            <div className="preview-node-item">
                              <div className="node-avatar-circle">MS</div>
                              <div className="node-details">
                                <span className="node-name">Modbus Gateway</span>
                                <span className="node-status-text">Synchronized • 2ms</span>
                              </div>
                            </div>

                            <div className="preview-node-item">
                              <div className="node-avatar-circle">SM</div>
                              <div className="node-details">
                                <span className="node-name">CAN Bus Controller</span>
                                <span className="node-status-text">Low latency bus</span>
                              </div>
                            </div>

                            <div className="preview-node-item dashed-placeholder"></div>
                          </div>
                        </div>

                        {/* Floating Draggable Chip (Reference Screenshot 1) */}
                        <div className="preview-floating-widget">
                          <div className="node-avatar-circle" style={{ backgroundColor: '#2C3E50', color: '#FFF' }}>JC</div>
                          <div className="node-details">
                            <span className="node-name" style={{ fontSize: '11.5px' }}>Telemetry Batch #408</span>
                            <span className="node-status-text">Active stream • 4.2ms</span>
                          </div>
                          <span style={{ fontSize: '11px', color: '#8C869E' }}>⌄</span>
                        </div>
                      </>
                    )}

                    {/* Render Type B: Data Table with Floating Filter Drawer (Screenshot 2) */}
                    {(card.previewType === "table-with-drawer" || card.previewType === "rules-inspector") && (
                      <>
                        <div className="preview-white-card">
                          <div className="preview-card-header">
                            <div className="preview-card-title-group">
                              <span className="preview-card-title">Telemetry Ledger</span>
                              <span className="preview-card-count">98</span>
                            </div>
                            <span className="preview-btn-pill">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                              </svg>
                              Export
                            </span>
                          </div>

                          <div className="preview-filter-row">
                            <span className="preview-filter-badge">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              All time ⌄
                            </span>
                            <span className="preview-filter-badge">
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 8v4l3 3"></path>
                              </svg>
                              All nodes ⌄
                            </span>
                          </div>

                          <table className="preview-table">
                            <thead>
                              <tr>
                                <th>Timestamp</th>
                                <th>Stream Node</th>
                                <th>Throughput</th>
                                <th>Latency</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="highlight-row">
                                <td>Mon, Nov 17, 2025</td>
                                <td>Node.Walker</td>
                                <td>84.2k ops/s</td>
                                <td>0.42 ms</td>
                                <td style={{ color: '#27A863' }}>Optimal</td>
                              </tr>
                              <tr>
                                <td>Mon, Nov 17, 2025</td>
                                <td>Node.Parker</td>
                                <td>72.1k ops/s</td>
                                <td>0.58 ms</td>
                                <td style={{ color: '#27A863' }}>Optimal</td>
                              </tr>
                              <tr>
                                <td>Mon, Nov 17, 2025</td>
                                <td>Node.Hernandez</td>
                                <td>91.0k ops/s</td>
                                <td>0.44 ms</td>
                                <td style={{ color: '#27A863' }}>Optimal</td>
                              </tr>
                              <tr>
                                <td>Mon, Nov 17, 2025</td>
                                <td>Node.Finbury</td>
                                <td>68.4k ops/s</td>
                                <td>0.61 ms</td>
                                <td style={{ color: '#27A863' }}>Optimal</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        {/* Floating Drawer widget at bottom left (Reference Screenshot 2) */}
                        <div className="preview-floating-drawer">
                          <div className="drawer-title">Ingest Pipelines</div>
                          <div className="drawer-row">
                            <span>Zero-Copy Stream</span>
                            <span className="drawer-checkbox checked">✓</span>
                          </div>
                          <div className="drawer-row">
                            <span>Ring Buffer</span>
                            <span className="drawer-checkbox checked">✓</span>
                          </div>
                          <div className="drawer-row">
                            <span>Full Audit Log</span>
                            <span className="drawer-checkbox"></span>
                          </div>
                        </div>
                      </>
                    )}
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
