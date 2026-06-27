import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-neutral-primary-soft)",
        borderTop: "1px solid var(--border-default-subtle)",
      }}
    >
      <div className="container-refined flex flex-wrap items-center justify-between gap-4 py-10 text-sm" style={{ color: "var(--fg-body-subtle)" }}>
        <div className="flex items-center gap-3">
          <Logo size={20} withWordmark={false} />
          <p>© {new Date().getFullYear()} Kerri Murasaki. Built with Premium Purple.</p>
        </div>
        <p>Singapore</p>
      </div>
    </footer>
  );
}
