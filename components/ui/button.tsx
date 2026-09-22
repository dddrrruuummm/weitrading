import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const styles = cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-3 border px-6 py-3 text-sm font-bold transition",
    variant === "primary" && "border-signal bg-signal text-ink hover:border-white hover:bg-white",
    variant === "secondary" && "border-white bg-transparent text-white hover:bg-white hover:text-ink",
    variant === "ghost" && "border-ink bg-transparent text-ink hover:border-cobalt hover:bg-cobalt hover:text-white",
    className,
  );

  if (href) return <Link href={href} className={styles}>{children}</Link>;
  return <button className={styles}>{children}</button>;
}
