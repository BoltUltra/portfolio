import { MusicVisualizer } from "@/components/interactive/music-visualizer";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 py-10 text-sm text-gray-400">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Mayowa Sunusi Usman · Lagos, Nigeria</p>
        <MusicVisualizer />
      </div>
    </footer>
  );
}

