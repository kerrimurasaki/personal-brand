import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "#0b1220", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-refined flex flex-wrap items-center justify-between gap-4 py-10 text-sm text-white/50">
        <div className="flex items-center gap-3">
          <Logo variant="light" size={24} withWordmark={false} />
          <p>© {new Date().getFullYear()} Kerri Murasaki. Built with Refined.</p>
        </div>
        <p>Singapore</p>
      </div>
    </footer>
  );
}
