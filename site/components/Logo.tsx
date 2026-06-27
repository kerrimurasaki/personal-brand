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
        <path
          d="M 75 12 L 129 43.5 L 129 106.5 L 75 138 L 21 106.5 L 21 43.5 Z"
          fill="#612295"
        />
        <g transform="rotate(-9.7 75 75)">
          <circle cx="52" cy="55" r="14" fill="#ffffff" />
          <circle cx="98" cy="55" r="14" fill="#CD52B8" />
          <circle cx="75" cy="100" r="14" fill="#ffffff" />
          <path d="M 63 63 L 87 63 L 75 87 Z" fill="#ffffff" opacity="0.92" />
        </g>
      </svg>
      {withWordmark && (
        <span
          className="text-lg font-semibold tracking-tight"
          style={{ color: wordmarkColor, letterSpacing: "-0.02em" }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
