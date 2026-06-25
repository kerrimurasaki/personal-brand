export default function Footer() {
  return (
    <footer style={{ background: "#09090b", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container-refined flex flex-wrap items-center justify-between gap-4 py-10 text-sm text-white/50">
        <p>© {new Date().getFullYear()} Kerri Murasaki. Built with Refined.</p>
        <p>Singapore</p>
      </div>
    </footer>
  );
}
