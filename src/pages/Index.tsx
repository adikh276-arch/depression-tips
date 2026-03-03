import { tips } from "@/data/tips";
import TipCard from "@/components/TipCard";

export default function Index() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="mx-auto max-w-md px-5 py-10 pb-16">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-1">You're not alone 💛</p>
          <h1 className="text-2xl font-extrabold text-foreground leading-tight">
            Support for Low Mood
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Gentle steps to help you move forward, one day at a time.
          </p>
        </div>

        {/* Section title */}
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
          Daily Support Tips
        </h2>

        {/* Tip cards */}
        <div className="flex flex-col gap-3">
          {tips.map((tip, i) => (
            <TipCard key={tip.id} tip={tip} index={i} />
          ))}
        </div>

        {/* Bottom support message */}
        <p className="mt-10 text-center text-xs text-muted-foreground leading-relaxed px-2">
          If you're struggling deeply, consider reaching out to someone you
          trust or a mental health professional.
        </p>
      </div>
    </div>
  );
}
