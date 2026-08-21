import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-navy-foreground/75">{description}</p>
        )}
      </div>
    </section>
  );
}

export function Section({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-12 ${className}`}>
      {title && (
        <h2 className="mb-6 border-l-4 border-gold pl-4 font-display text-2xl font-semibold text-navy">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
