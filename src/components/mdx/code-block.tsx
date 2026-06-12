import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <div className="relative rounded-lg border border-white/10 bg-bg-1/80 overflow-hidden my-6">
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/10 bg-bg-2/50">
        {/* macOS window-chrome traffic lights — sanctioned literals, shared
            with build-terminal.tsx (not brand colors). */}
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
      </div>
      <pre className={cn("p-4 overflow-x-auto text-sm", className)}>
        <code className="font-[family-name:var(--font-mono)]">{children}</code>
      </pre>
    </div>
  );
}
