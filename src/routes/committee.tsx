import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, Section } from "@/components/site/PageLayout";
import {
  internationalAdvisory,
  leadership,
  nationalAdvisory,
  organisingGroups,
} from "@/data/conference";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Committee | NITCOM-2025" },
      {
        name: "description",
        content:
          "Patrons, chairs, advisory committees and organising committees of NITCOM-2025 at NIT Jalandhar.",
      },
      { property: "og:title", content: "Committee | NITCOM-2025" },
      {
        property: "og:description",
        content: "Meet the patrons, general chairs and committees organising NITCOM-2025.",
      },
    ],
  }),
  component: Committee,
});

function NameList({ title, members }: { title: string; members: string[] }) {
  return (
    <div className="card-elevated p-6">
      <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
      <ul className="mt-3 space-y-2">
        {members.map((m) => (
          <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Committee() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Committee"
        title="Organising and advisory committees"
        description="NITCOM-2025 is guided by a global advisory board and organised by faculty of the CSE department at NIT Jalandhar."
      />

      <Section title="Leadership">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((g) => (
            <NameList key={g.title} title={g.title} members={g.members} />
          ))}
        </div>
      </Section>

      <section className="bg-surface py-4">
        <Section title="Advisory Committees">
          <div className="grid gap-5 lg:grid-cols-2">
            <NameList title="International Advisory Committee" members={internationalAdvisory} />
            <NameList title="National Advisory Committee" members={nationalAdvisory} />
          </div>
        </Section>
      </section>

      <Section title="Organising Committees">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {organisingGroups.map((g) => (
            <NameList key={g.title} title={g.title} members={g.members} />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
