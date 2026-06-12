import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/icons";

const variants = {
  info: {
    icon: "info",
    className: "border-sapphire-500/30 bg-sapphire-500/5 text-sapphire-400",
  },
  warning: {
    icon: "alert",
    className: "border-warning/30 bg-warning/5 text-warning",
  },
  tip: {
    icon: "check",
    className: "border-success/30 bg-success/5 text-success",
  },
} satisfies Record<string, { icon: IconName; className: string }>;

interface CalloutProps {
  type?: keyof typeof variants;
  children: React.ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const variant = variants[type];

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        variant.className
      )}
    >
      <span className="shrink-0 mt-0.5">
        <Icon name={variant.icon} size={20} />
      </span>
      <div className="text-sm text-ink-300 leading-relaxed [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}
