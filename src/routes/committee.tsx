import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { useState } from "react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";

type Member = { name: string; role?: string; photo?: string };
type CommitteeGroup = { title: string; members: Member[] };

const committeePhotos: Record<string, string> = {
  "Prof. Binod Kumar Kanaujia": "/committee/binod-kanaujia.jpg",
  "Prof. Anish Kumar Sachdeva": "/committee/anish-sachdeva.jpg",
  "Prof. A. L. Sangal": "/committee/al-sangal.jpg",
  "Prof. Rohit Mehra": "/committee/rohit-mehra.jpg",
  "Mr. D. K. Gupta": "/committee/dk-gupta.jpg",
  "Dr. Vijay Kumar": "/committee/vijay-kumar.jpg",
  "Prof. Harsh Verma": "/committee/harsh-verma.jpg",
  "Dr. Rajneesh Rani": "/committee/rajneesh-rani.jpg",
  "Dr. Amritpal Singh": "/committee/amritpal-singh.jpg",
  "Dr. K. P. Sharma": "/committee/kp-sharma.jpg",
  "Dr. Muktesh Gupta": "/committee/muktesh-gupta.jpg",
  "Dr. Himanshu Verma": "/committee/himanshu-verma.png",
  "Dr. Pranjal Kumar": "/committee/pranjal-kumar.jpg",
  "Dr. Samayveer Singh": "/committee/samayveer-singh.jpg",
  "Dr. Prashant Kumar": "/committee/prashant-kumar.jpg",
  "Dr. Urvashi": "/committee/urvashi.jpg",
  "Dr. Kunwar Pal": "/committee/kunwar-pal.jpg",
  "Dr. Naina Yadav": "/committee/naina-yadav.jpeg",
  "Dr. Prashant Shukla": "/committee/prashant-shukla.jpg",
  "Dr. Swarnima Singh Gautam": "/committee/swarnima-gautam.jpg",
  "Dr. Deepeti Kakar": "/committee/deepti-kakkar.jpg",
  "Dr. Abhishek Narwaria": "/committee/abhishek-narwaria.png",
  "Dr. Aruna Malik": "/committee/aruna-malik.png",
  "Dr. Indu Saini": "/committee/indu-saini.png",
  "Dr. Lalatendu Behera": "/committee/lalatendu-behera.jpg",
  "Dr. Jagdeep Kaur": "/committee/jagdeep-kaur.jpg",
  "Dr. Avani Vyas": "/committee/avani-vyas.jpeg",
  "Dr. Nagendra Pratap Singh": "/committee/nagendra-singh.jpg",
  "Dr. N. P. Singh": "/committee/nagendra-singh.jpg",
  "Dr. Ranjeet Kumar Rout": "/committee/ranjeet-rout.jpeg",
  "Dr. Shefali Arora": "/committee/shefali-arora.jpeg",
  "Dr. Shveta Mahajan": "/committee/shveta-mahajan.jpg",
  "Mr. Rahul Aggarwal": "/committee/rahul-aggarwal.jpeg",
  "Dr. Gopendra": "/committee/gopendra.jpeg",
  "Dr. Madhurima Buragohain": "/committee/madhurima-buragohain.jpg",
  "Dr. Afzal Sikander": "/committee/afzal-sikander.png",
  "Dr. Ravi Verma": "/committee/ravi-verma.jpg",
  "Dr. Kusum Bharti": "/committee/kusum-bharti.jpg",
  "Dr. Avtar Singh": "/committee/avtar-singh.jpg",
  "Dr. Neeraj Kumar": "/committee/neeraj-kumar.jpeg",
  "Dr. Nisha Chaurasia": "/committee/nisha-chaurasia.jpeg",
  "Dr. Puneet Kumar Jain": "/committee/puneet-jain.jpeg",
  "Dr. Armaan Garg": "/committee/armaan-garg.jpg",
  "Dr. Jaspal Kaur Saini": "/committee/jaspal-saini.jpg",
  "Dr. Banalaxmi": "/committee/banalaxmi.jpg",
  "Dr. Naveen Kumar Gupta": "/committee/naveen-gupta.jpeg",
  "Dr. Sumit Kumar": "/committee/sumit-kumar.jpg",
  "Dr. Mohit Kumar": "/committee/mohit-kumar.jpg",
  "Dr. Mahesh Patel": "/committee/mahesh-patel.jpeg",
  "Dr. Rakesh Kumar": "/committee/rakesh-kumar.jpeg",
  "Dr. O. P. Verma": "/committee/op-verma.jpg",
};

const group = (title: string, names: (string | [string, string])[]): CommitteeGroup => ({
  title,
  members: names.map((entry) => {
    const member = typeof entry === "string" ? { name: entry } : { name: entry[0], role: entry[1] };
    const photo = committeePhotos[member.name];
    return photo ? { ...member, photo } : member;
  }),
});

const committeeGroups: CommitteeGroup[] = [
  group("Chief Patron", [["Prof. Binod Kumar Kanaujia", "Director, NIT Jalandhar"]]),
  group("Patron", [
    ["Prof. Anish Kumar Sachdeva", "Registrar, NIT Jalandhar"],
    ["Prof. A. L. Sangal", "Head, CSE, NIT Jalandhar"],
    ["Prof. Rohit Mehra", "Dean R & C, NIT Jalandhar"],
  ]),
  group("Co-Patron", [
    ["Mr. D. K. Gupta", "Head, Computer Center"],
    ["Dr. Vijay Kumar", "HoD, IT"],
  ]),
  group("General Chairs", [
    ["Prof. Harsh Verma", "CSED, NIT Jalandhar"],
    ["Dr. Rajneesh Rani", "Associate Professor, CSED, NIT Jalandhar"],
  ]),
  group("Organizing Chairs", ["Dr. Amritpal Singh", "Dr. K. P. Sharma"]),
  group("Conference Secretary", ["Dr. Muktesh Gupta", "Dr. Himanshu Verma", "Dr. Pranjal Kumar"]),
  group("Conference Convener", ["Dr. Samayveer Singh", "Dr. Prashant Kumar", "Dr. Urvashi"]),
  group("Publication Chairs", [
    "Dr. Kunwar Pal",
    "Dr. Naina Yadav",
    "Dr. Prashant Shukla",
    "Dr. Swarnima Singh Gautam",
    "Dr. Deepeti Kakar",
    "Dr. Abhishek Narwaria",
  ]),
  group("Publicity and Media Chairs", [
    "Dr. Aruna Malik",
    "Dr. Indu Saini",
    "Dr. Lalatendu Behera",
    "Dr. Jagdeep Kaur",
    "Dr. Avani Vyas",
  ]),
  group("Registration and Hospitality Chairs", [
    "Dr. Nagendra Pratap Singh",
    "Dr. Ranjeet Kumar Rout",
    "Dr. Shefali Arora",
    "Dr. Shveta Mahajan",
    "Mr. Rahul Aggarwal",
    "Dr. Gopendra",
    "Dr. Madhurima Buragohain",
    "Dr. Simranjit Singh",
  ]),
  group("Planetary Chairs", [
    "Dr. Afzal Sikander",
    "Dr. Ravi Verma",
    "Dr. Kusum Bharti",
    "Dr. Avtar Singh",
    "Dr. Neeraj Kumar",
  ]),
  group("Finance Committee Chairs", [
    "Dr. Amritpal Singh",
    "Dr. Muktesh Gupta",
    "Dr. Nisha Chaurasia",
    "Dr. N. P. Singh",
  ]),
  group("Accommodation and Transportation Committee Chairs", [
    "Dr. Samayveer Singh",
    "Dr. Puneet Kumar Jain",
    "Dr. Armaan Garg",
    "Dr. Jaspal Kaur Saini",
    "Dr. Banalaxmi",
    "Dr. Naveen Kumar Gupta",
    "Dr. Sumit Kumar",
  ]),
  group("Technical Program Chairs", [
    "Dr. Mohit Kumar",
    "Dr. Nisha Chaurasia",
    "Dr. Mahesh Patel",
    "Dr. Rakesh Kumar",
    "Dr. Afzal Sikander",
    "Dr. O. P. Verma",
  ]),
];

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Committee | NITCOM-2027" },
      {
        name: "description",
        content: "Meet the conference committee organising NITCOM-2027 at NIT Jalandhar.",
      },
      { property: "og:title", content: "Committee | NITCOM-2027" },
      { property: "og:description", content: "Meet the NITCOM-2027 conference committee." },
    ],
  }),
  component: Committee,
});

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="card-elevated flex min-h-64 w-full max-w-80 flex-col items-center justify-center p-7 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {member.photo ? (
        <img
          src={`${import.meta.env.BASE_URL}${member.photo.replace(/^\//, "")}`}
          alt={member.name}
          className="h-28 w-28 shrink-0 rounded-full border-4 border-gold/60 object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-dashed border-gold/60 bg-secondary text-gold"
          aria-label={`Image placeholder for ${member.name}`}
        >
          <UserRound className="h-12 w-12" aria-hidden="true" />
        </div>
      )}
      <div className="mt-6">
        <h4 className="font-display text-lg font-semibold text-navy">{member.name}</h4>
        {member.role && <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>}
      </div>
    </article>
  );
}

function Committee() {
  const defaultGroup = committeeGroups[0]!;
  const [activeTitle, setActiveTitle] = useState(defaultGroup.title);
  const activeGroup = committeeGroups.find(({ title }) => title === activeTitle) ?? defaultGroup;

  return (
    <PageLayout>
      <PageHero
        eyebrow="Committee"
        title="Conference committee"
        description="Explore the people organising NITCOM-2027 at NIT Jalandhar."
      />
      <section className="bg-surface px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-3xl font-semibold text-navy sm:text-4xl">
            Conference Chairs
          </h2>

          <div
            className="mt-10 flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label="Conference committee categories"
          >
            {committeeGroups.map(({ title }) => {
              const isActive = title === activeGroup.title;
              return (
                <button
                  key={title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTitle(title)}
                  onMouseEnter={() => setActiveTitle(title)}
                  onFocus={() => setActiveTitle(title)}
                  className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-200 sm:text-base ${
                    isActive
                      ? "border-navy bg-navy text-navy-foreground shadow-md"
                      : "border-border bg-background text-navy hover:border-gold hover:bg-secondary"
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>

          <div
            className="mt-14 flex flex-wrap justify-center gap-7"
            role="tabpanel"
            aria-label={activeGroup.title}
          >
            {activeGroup.members.map((member) => (
              <MemberCard key={`${activeGroup.title}-${member.name}`} member={member} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
