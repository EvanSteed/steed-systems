"use client";

interface NodeItem {
  id: string;
  title: string;
  description: string;
  position: "top-left" | "bottom-left" | "top-right" | "bottom-right";
}

const NODES: NodeItem[] = [
  {
    id: "visibility",
    title: "Increase Visibility",
    description: "Local search presence & map discovery",
    position: "top-left",
  },
  {
    id: "processes",
    title: "Streamline Business Processes",
    description: "Automated workflows & connected systems",
    position: "bottom-left",
  },
  {
    id: "trust",
    title: "Build Trust",
    description: "Verified ratings, reviews & reliability",
    position: "top-right",
  },
  {
    id: "growth",
    title: "Drive Growth",
    description: "Increased enquiries and better conversion leads to measurable growth",
    position: "bottom-right",
  },
];

function NodeIcon({ id }: { id: NodeItem["id"] }) {
  switch (id) {
    case "visibility":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
          <path
            d="M10 18L24 13L40 19L54 14V46L40 51L24 45L10 50V18Z"
            stroke="#f4f4f5"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M24 13V45M40 19V51" stroke="#3f3f46" strokeWidth="1.8" />
          <path
            d="M32 18C27.58 18 24 21.48 24 25.78C24 31.3 32 39 32 39C32 39 40 31.3 40 25.78C40 21.48 36.42 18 32 18Z"
            fill="#e11d48"
          />
          <circle cx="32" cy="25.8" r="2.6" fill="#141416" />
          <circle
            cx="42"
            cy="40"
            r="9"
            fill="#141416"
            stroke="#f4f4f5"
            strokeWidth="2.2"
          />
          <path
            d="M48.5 46.5L55 53"
            stroke="#e11d48"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "processes":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
          <circle
            cx="22"
            cy="24"
            r="9"
            fill="#141416"
            stroke="#e11d48"
            strokeWidth="2.4"
            strokeDasharray="4 2.5"
          />
          <circle cx="22" cy="24" r="3.5" fill="#f4f4f5" />
          <circle
            cx="42"
            cy="38"
            r="8"
            fill="#141416"
            stroke="#a1a1aa"
            strokeWidth="2.2"
            strokeDasharray="3.5 2.5"
          />
          <circle cx="42" cy="38" r="3" fill="#e11d48" />
          <path
            d="M14 44C22 52 34 50 48 22"
            stroke="#e11d48"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M42 24L48.5 21L50.5 27.5"
            stroke="#e11d48"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "trust":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
          <g fill="#e11d48">
            <polygon points="14,10 15.4,13 18.6,13.4 16.2,15.6 16.8,18.8 14,17.2 11.2,18.8 11.8,15.6 9.4,13.4 12.6,13" />
            <polygon points="23,8.5 24.4,11.5 27.6,11.9 25.2,14.1 25.8,17.3 23,15.7 20.2,17.3 20.8,14.1 18.4,11.9 21.6,11.5" />
            <polygon points="32,8 33.4,11 36.6,11.4 34.2,13.6 34.8,16.8 32,15.2 29.2,16.8 29.8,13.6 27.4,11.4 30.6,11" />
            <polygon points="41,8.5 42.4,11.5 45.6,11.9 43.2,14.1 43.8,17.3 41,15.7 38.2,17.3 38.8,14.1 36.4,11.9 39.6,11.5" />
            <polygon points="50,10 51.4,13 54.6,13.4 52.2,15.6 52.8,18.8 50,17.2 47.2,18.8 47.8,15.6 45.4,13.4 48.6,13" />
          </g>
          <path
            d="M32 22L46 27.5V38.5C46 47.5 39.8 54.2 32 57C24.2 54.2 18 47.5 18 38.5V27.5L32 22Z"
            fill="#f4f4f5"
          />
          <path
            d="M25.5 39.5L30.2 44.2L39.5 34.5"
            stroke="#e11d48"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "growth":
      return (
        <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" aria-hidden="true">
          <rect x="14" y="38" width="7" height="14" rx="1.5" fill="#3f3f46" />
          <rect x="25" y="30" width="7" height="22" rx="1.5" fill="#71717a" />
          <rect x="36" y="22" width="7" height="30" rx="1.5" fill="#f4f4f5" />
          <path
            d="M14 31L28 22L37 27L50 13"
            stroke="#e11d48"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 13H50V21"
            stroke="#e11d48"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function CentralHubIcon() {
  return (
    <svg viewBox="0 0 120 96" className="h-24 w-28" fill="none" aria-hidden="true">
      <rect
        x="16"
        y="14"
        width="68"
        height="46"
        rx="5"
        fill="#18181b"
        stroke="#f4f4f5"
        strokeWidth="2.4"
      />
      <rect x="21" y="19" width="58" height="36" rx="2" fill="#0a0a0b" />
      <rect x="21" y="19" width="58" height="9" fill="#e11d48" />
      <circle cx="25.5" cy="23.5" r="1.4" fill="#f4f4f5" />
      <circle cx="30" cy="23.5" r="1.4" fill="#f4f4f5" />
      <rect x="26" y="33" width="24" height="5" rx="1.5" fill="#f4f4f5" />
      <rect x="26" y="41" width="16" height="3.5" rx="1.5" fill="#a1a1aa" />
      <rect x="55" y="33" width="19" height="16" rx="2" fill="#18181b" stroke="#e11d48" strokeWidth="1.5" />
      <path d="M8 60H92L96 65H4L8 60Z" fill="#f4f4f5" />
      <rect
        x="76"
        y="34"
        width="28"
        height="46"
        rx="5"
        fill="#141416"
        stroke="#f4f4f5"
        strokeWidth="2.4"
      />
      <rect x="80" y="40" width="20" height="32" rx="1.5" fill="#0a0a0b" />
      <rect x="80" y="40" width="20" height="6" fill="#e11d48" />
      <rect x="83" y="50" width="14" height="4" rx="1" fill="#f4f4f5" />
      <rect x="83" y="57" width="10" height="3" rx="1" fill="#a1a1aa" />
      <circle cx="90" cy="76" r="1.5" fill="#e11d48" />
    </svg>
  );
}

export function OnlinePresenceDiagram() {
  const topLeft = NODES.find((n) => n.position === "top-left")!;
  const bottomLeft = NODES.find((n) => n.position === "bottom-left")!;
  const topRight = NODES.find((n) => n.position === "top-right")!;
  const bottomRight = NODES.find((n) => n.position === "bottom-right")!;

  const renderCard = (node: NodeItem, alignRight = false) => (
    <div
      key={node.id}
      className={`group flex items-center gap-4 rounded-xl border border-[#27272a] bg-[#141416]/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e11d48]/70 hover:shadow-[0_0_24px_rgba(225,29,72,0.16)] ${
        alignRight ? "md:flex-row-reverse md:text-right" : ""
      }`}
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[#27272a] bg-[#0a0a0b] transition-transform duration-300 group-hover:scale-105 group-hover:border-[#e11d48]/60">
        <NodeIcon id={node.id} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-[#f4f4f5] transition-colors duration-300 group-hover:text-white md:text-lg">
          {node.title}
        </h3>
        <p className="mt-1 text-sm text-[#d4d4d8]">{node.description}</p>
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto w-full max-w-5xl bg-transparent pt-0 pb-12">
      <div className="relative hidden items-center justify-between gap-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 420"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M330 105L430 175" stroke="#3f3f46" strokeWidth="1.5" />
          <path d="M330 315L430 245" stroke="#3f3f46" strokeWidth="1.5" />
          <path d="M670 105L570 175" stroke="#3f3f46" strokeWidth="1.5" />
          <path d="M670 315L570 245" stroke="#3f3f46" strokeWidth="1.5" />
        </svg>

        <div className="relative z-10 flex flex-col gap-12">
          {renderCard(topLeft, true)}
          {renderCard(bottomLeft, true)}
        </div>

        <div className="relative z-10 flex items-center justify-center px-2">
          <div className="flex h-44 w-44 items-center justify-center rounded-full border border-[#3f3f46] bg-[#141416] shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.03] hover:border-[#e11d48]/60">
            <CentralHubIcon />
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-12">
          {renderCard(topRight, false)}
          {renderCard(bottomRight, false)}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 md:hidden">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border border-[#3f3f46] bg-[#141416]">
          <CentralHubIcon />
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {NODES.map((node) => renderCard(node, false))}
        </div>
      </div>
    </div>
  );
}

export default OnlinePresenceDiagram;