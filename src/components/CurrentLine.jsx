export default function CurrentLine({ dark = false }) {
  const line = dark ? "#1C4E76" : "#D8E2E9";
  return (
    <div className="relative w-full h-10 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <line x1="0" y1="20" x2="1200" y2="20" stroke={line} strokeWidth="2" />
        {[120, 360, 600, 840, 1080].map((x) => (
          <circle key={x} cx={x} cy="20" r="4" fill={line} />
        ))}
        <circle r="5" fill="#8FD13F">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M0,20 L1200,20"
          />
        </circle>
      </svg>
    </div>
  );
}
