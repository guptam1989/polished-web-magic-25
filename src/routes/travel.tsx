import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, Section } from "@/components/site/PageLayout";
import travelImg from "@/assets/travel.jpg.asset.json";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel & Visa | NITCOM-2025" },
      {
        name: "description",
        content:
          "Travel, visa and accommodation guidance for delegates attending NITCOM-2025 at NIT Jalandhar, Punjab, India.",
      },
      { property: "og:title", content: "Travel & Visa | NITCOM-2025" },
      {
        property: "og:description",
        content: "How to reach NIT Jalandhar, visa guidance and nearby attractions.",
      },
    ],
  }),
  component: Travel,
});

function Travel() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Travel"
        title="Getting to Jalandhar"
        description="Practical guidance on visas, travel routes and what to explore during your stay."
      />

      <Section title="Visa Information">
        <div className="card-elevated max-w-4xl space-y-3 p-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Conference organisers are not responsible for the acceptance or rejection of a visa
            application. Authors and delegates are advised to make their visa arrangements
            themselves and well in advance.
          </p>
          <p>
            Indian visit visa details can be checked at{" "}
            <a
              className="font-medium text-navy underline"
              href="https://indianvisaonline.gov.in/"
              target="_blank"
              rel="noreferrer"
            >
              indianvisaonline.gov.in
            </a>
            .
          </p>
        </div>
      </Section>

      <section className="bg-surface py-4">
        <Section title="Reaching the Campus">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "By Air",
                body: "Sri Guru Ram Dass Jee International Airport, Amritsar (about 90 km) and Chandigarh International Airport (about 150 km) are the nearest airports.",
              },
              {
                title: "By Rail",
                body: "Jalandhar City and Jalandhar Cantt railway stations are well connected to Delhi, Amritsar and other major cities.",
              },
              {
                title: "By Road",
                body: "The institute is on the NH-44 corridor with regular bus and taxi services from Delhi, Chandigarh and Amritsar.",
              },
            ].map((c) => (
              <div key={c.title} className="card-elevated p-6">
                <h3 className="font-display text-lg font-semibold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section title="Nearby Attractions">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <img
            src={travelImg.url}
            alt="Landmark near Jalandhar, Punjab"
            className="h-72 w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            {[
              "Golden Temple and Jallianwala Bagh, Amritsar",
              "Wagah Border retreat ceremony",
              "Devi Talab Mandir and Rangla Punjab Haveli, Jalandhar",
              "Kangra Valley and Dharamshala hill stations",
            ].map((a) => (
              <li key={a} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageLayout>
  );
}
