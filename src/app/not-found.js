import Link from "next/link";
import { ArrowLeft, Compass, SearchX } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "This page does not exist. Head back to your Repeat dashboard.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-canvas text-white p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-muted text-xs font-semibold uppercase tracking-[0.18em]">
          <SearchX className="w-3.5 h-3.5" />
          404 — Page Not Found
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight leading-tight">
          This Page Doesn&apos;t Exist
        </h1>

        <p className="text-muted text-sm leading-relaxed">
          The link might be mistyped, moved, or the page was never created.
          Everything you need lives on the dashboard.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:opacity-90 text-canvas font-semibold text-sm rounded-full transition-all shadow-lg active:scale-[0.98]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <div className="pt-4 border-t border-white/10 text-[11px] text-muted/60 font-medium uppercase tracking-wider">
          <Compass className="w-3 h-3 inline mr-1" />
          Repeat — Habit &amp; Reminder App
        </div>
      </div>
    </div>
  );
}
