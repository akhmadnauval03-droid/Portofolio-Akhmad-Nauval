"use client";

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#05070D]">

            {/* ================= GLOW ================= */}
            <div className="bg-orb orb-cyan" />
            <div className="bg-orb orb-blue" />
            <div className="bg-orb orb-purple" />

            {/* ================= GRID ================= */}
            <div className="developer-grid" />

            {/* ================= MOVING LINES ================= */}
            <div className="moving-line line-1" />
            <div className="moving-line line-2" />
            <div className="moving-line line-3" />
            <div className="moving-line line-4" />
            <div className="moving-line line-5" />
            <div className="moving-line line-6" />
            <div className="moving-line line-7" />
            <div className="moving-line line-8" />

            {/* ================= CIRCUIT ================= */}
            <div className="circuit circuit-left">
                <span />
                <span />
                <span />
                <span />
            </div>

            <div className="circuit circuit-right">
                <span />
                <span />
                <span />
                <span />
            </div>

            {/* ================= FLOATING NODES ================= */}
            <div className="node node-1" />
            <div className="node node-2" />
            <div className="node node-3" />
            <div className="node node-4" />
            <div className="node node-5" />
            <div className="node node-6" />

            {/* ================= CONNECTING LINES ================= */}
            <div className="connection connection-1" />
            <div className="connection connection-2" />
            <div className="connection connection-3" />
            <div className="connection connection-4" />

            {/* ================= TECH RINGS ================= */}
            <div className="tech-ring ring-one">
                <span />
            </div>

            <div className="tech-ring ring-two">
                <span />
            </div>

            {/* ================= HEXAGON ================= */}
            <div className="tech-hexagon hex-one" />
            <div className="tech-hexagon hex-two" />

            {/* ================= CODE DECORATION ================= */}
            <div className="code-decoration code-left">
                <span>{"<div>"}</span>
                <span>{"  const developer = true;"}</span>
                <span>{"  build();"} </span>
                <span>{"</div>"}</span>
            </div>

            <div className="code-decoration code-right">
                <span>{"{ ... }"}</span>
                <span>{"=> next.js"}</span>
                <span>{"// portfolio"}</span>
            </div>

            {/* ================= SCAN LINE ================= */}
            <div className="scan-line" />

            {/* ================= PARTICLES ================= */}
            <div className="tiny-particles">
                {Array.from({ length: 18 }).map((_, index) => (
                    <span key={index} />
                ))}
            </div>

            {/* ================= VIGNETTE ================= */}
            <div className="background-vignette" />
        </div>
    );
}