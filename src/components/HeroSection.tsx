import React, { useEffect, useState, useId } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

/* ─── Node configuration ─── */
interface NodeItem {
  id: string;
  label: string;
  icon: string;
  /** Percentage-based position inside the diagram canvas */
  x: number;
  y: number;
}

const NODES: NodeItem[] = [
  { id: "lab",       label: "Laboratory", icon: "/Blender.svg",    x: 15, y: 15 },
  { id: "devices",   label: "Devices",    icon: "/Drive.svg",      x: 85, y: 15 },
  { id: "inventory", label: "Inventory",  icon: "/Slack.svg",      x: 10, y: 50 },
  { id: "alerts",    label: "Alerts",     icon: "/Stack.svg",      x: 90, y: 50 },
  { id: "cloud",     label: "Cloud",      icon: "/Notion.svg",     x: 15, y: 85 },
  { id: "analytics", label: "Analytics",  icon: "/Salesforce.svg", x: 85, y: 85 },
];

const CENTER = { x: 50, y: 50 };

/* ─── Shooting stars (scoped to right canvas only) ─── */
interface StarData {
  id: number;
  isHorizontal: boolean;
  /** Grid-aligned position (percentage along perpendicular axis) */
  linePos: string;
  duration: number;
  delay: number;
  length: number;
}

function ScopedShootingStars() {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    // Generate grid-aligned shooting stars — strictly 0° and 90° paths
    const gridLines = [12, 24, 36, 48, 60, 72, 84]; // percentage positions aligned to ~36px grid
    const generated: StarData[] = [];

    for (let i = 0; i < 8; i++) {
      const isHorizontal = i % 2 === 0;
      const lineIdx = i % gridLines.length;
      generated.push({
        id: i,
        isHorizontal,
        linePos: `${gridLines[lineIdx]}%`,
        duration: 2.2 + (i % 3) * 0.7,
        delay: i * 1.1,
        length: 60 + (i % 4) * 20,
      });
    }
    setStars(generated);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        maskImage: 'radial-gradient(circle at center, black 50%, transparent 95%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 95%)',
      }}
    >
      {/* Scoped faint square grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* Radial vignette to soften grid edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0a0a0c_95%)]" />

      {/* Horizontal & vertical shooting star streaks */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            ...(star.isHorizontal
              ? { top: star.linePos, left: "-10%" }
              : { left: star.linePos, top: "-10%" }),
            width: star.isHorizontal ? `${star.length}px` : "1.5px",
            height: star.isHorizontal ? "1.5px" : `${star.length}px`,
            background: star.isHorizontal
              ? "linear-gradient(90deg, rgba(168,85,247,0) 0%, rgba(168,85,247,0.6) 50%, rgba(192,132,252,0.9) 100%)"
              : "linear-gradient(180deg, rgba(168,85,247,0) 0%, rgba(168,85,247,0.6) 50%, rgba(192,132,252,0.9) 100%)",
            boxShadow: "0 0 6px rgba(168, 85, 247, 0.5)",
          }}
          animate={{
            ...(star.isHorizontal
              ? { x: ["-20%", "600px"] }
              : { y: ["-20%", "600px"] }),
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Static orthogonal SVG connector lines ─── */
function StaticConnectors() {
  /**
   * Draws clean elbow (L-shaped) connector paths from each node to the center hub.
   * Goes horizontal first, then vertical — producing orthogonal connectors.
   * NO animated dots, NO diagonal dashes, NO traveling beads.
   */
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none z-10"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {NODES.map((node) => {
        // Elbow path: horizontal from node to center X, then vertical to center Y
        const path = `M ${node.x} ${node.y} L ${CENTER.x} ${node.y} L ${CENTER.x} ${CENTER.y}`;
        return (
          <path
            key={node.id}
            d={path}
            fill="none"
            stroke="rgba(168, 85, 247, 0.18)"
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

/* ─── Main Hero Section ─── */
export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#0a0a0c] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ━━━ Left Column: Hero Text Content ━━━
            Pure solid dark background — NO grid lines, NO shooting stars */}
        <div className="flex flex-col items-start max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1 text-xs font-medium tracking-wide text-purple-300 backdrop-blur-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
            Next-Gen Laboratory OS
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Connect the systems that power your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              laboratory
            </span>
          </h1>

          <p className="text-neutral-400 text-base md:text-lg max-w-md mt-4 leading-relaxed">
            EmbryoOne integrates seamlessly with your existing laboratory
            devices, data systems, and clinical workflows. Configured once,
            connected across your entire operation.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="bg-neutral-900 border border-neutral-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-neutral-800 transition flex items-center gap-2 shadow-sm">
              Explore Our Solutions
              <ChevronRight className="h-4 w-4 text-neutral-400" />
            </button>
          </div>
        </div>

        {/* ━━━ Right Column: Scoped Diagram Canvas ━━━
            Grid pattern + shooting stars are STRICTLY inside this box */}
        <div className="relative w-full h-[480px] rounded-3xl overflow-hidden bg-transparent">
          {/* Scoped grid background & shooting stars — contained within overflow-hidden */}
          <ScopedShootingStars />

          {/* Static orthogonal connector lines (no traveling dots) */}
          <StaticConnectors />

          {/* Center Logo Hub — /LOGO_C.avif — seamless, no box border */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex h-20 w-20 items-center justify-center">
            <img
              src="/LOGO_C.avif"
              alt="EmbryoOne Logo"
              className="h-16 w-16 object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            />
          </div>

          {/* 6 Surrounding Icon Nodes — BORDERLESS, clean badges */}
          {NODES.map((node) => (
            <div
              key={node.id}
              title={node.label}
              aria-label={node.label}
              className="absolute z-20 h-12 w-12 rounded-xl bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center shadow-md cursor-pointer"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={node.icon}
                alt={node.label}
                className="h-6 w-6 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
