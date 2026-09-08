import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, Section } from "@/components/site/PageLayout";

export const Route = createFileRoute("/author-guidelines")({
  head: () => ({
    meta: [
      { title: "Author Guidelines | NITCOM-2027" },
      {
        name: "description",
        content:
          "Submission rules for NITCOM-2027: Microsoft CMT portal, recommended conference proceedings template, 12-page limit and Turnitin plagiarism check.",
      },
      { property: "og:title", content: "Author Guidelines | NITCOM-2027" },
      {
        property: "og:description",
        content: "How to prepare and submit your paper to NITCOM-2027 at NIT Jalandhar.",
      },
    ],
  }),
  component: AuthorGuidelines,
});

const guidelines = [
  "Paper submission is handled through the Microsoft CMT portal, which manages the peer-review process for this conference.",
  "All papers must be written in English with a maximum length of 12 printed pages, including references.",
  "Submissions must strictly follow the recommended conference proceedings template.",
  "Submitted papers must contain original, unpublished work. Simultaneous submissions to other conferences or journals are not allowed.",
  "All manuscripts are screened for plagiarism using Turnitin; a similarity index above 19% may lead to rejection at any stage.",
  "The decision regarding acceptance of a paper rests with the Technical Program Committee.",
  "Proceedings will be submitted to a reputed international publisher; indexing is subject to publisher approval.",
];

function AuthorGuidelines() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Author Guidelines"
        title="Preparing and submitting your manuscript"
        description="Please read these requirements carefully before submitting to NITCOM-2027."
      />

      <Section>
        <ol className="max-w-4xl space-y-4">
          {guidelines.map((g, i) => (
            <li key={g} className="card-elevated flex gap-4 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-navy-foreground">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{g}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-surface py-4">
        <Section title="Useful Links">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
              target="_blank"
              rel="noreferrer"
              className="card-elevated block p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold text-navy">Paper Template</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Conference proceedings guidelines and LaTeX/Word templates.
              </p>
            </a>
            <a
              href="https://cmt3.research.microsoft.com/"
              target="_blank"
              rel="noreferrer"
              className="card-elevated block p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-display text-lg font-semibold text-navy">Microsoft CMT Portal</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Create an account and submit your manuscript for peer review.
              </p>
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            The Microsoft CMT service is used for managing the peer-review process for this
            conference. The service is provided free of charge by Microsoft, which bears all
            expenses including Azure cloud services, software development and support.
          </p>
        </Section>
      </section>
    </PageLayout>
  );
}

