type Props = {
  size?: number;
  variant?: "dark" | "light";
  withWordmark?: boolean;
  label?: string;
};

export default function Logo({
  size = 32,
  variant = "dark",
  withWordmark = true,
  label = "Kerri Murasaki",
}: Props) {
  const wordmarkColor = variant === "light" ? "#ffffff" : "var(--fg-heading)";
  const innerLight = "#ffffff";

  return (
    <span className="inline-flex items-center gap-3" aria-label={label}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 150 150"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{label} mark</title>
        {/* Hexagon */}
        <path
          d="M 75 12 L 129 43.5 L 129 106.5 L 75 138 L 21 106.5 L 21 43.5 Z"
          fill="#2179BD"
        />
        {/* Node mark — three circles + triangle */}
        <g transform="rotate(-4.4 75 75)">
          <circle cx="52" cy="55" r="14" fill={innerLight} />
          <circle cx="98" cy="55" r="14" fill="#B254D4" />
          <circle cx="75" cy="100" r="14" fill={innerLight} />
          <path
            d="M 63 63 L 87 63 L 75 87 Z"
            fill={innerLight}
            opacity="0.92"
          />
        </g>
      </svg>
      {withWordmark && (
        <span
          className="font-serif text-lg font-semibold tracking-tight"
          style={{ color: wordmarkColor }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
