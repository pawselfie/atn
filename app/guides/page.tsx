import GuideCard from "@/components/GuideCard";
import { data } from "@/lib/data";

export const metadata = {
  title: "BSS Guides ⋅ Hive Guides, Progression, Macro Setups & Strategy",
  description:
    "Complete Bee Swarm Simulator guides — blue, red, and white hive builds, earlygame progression, macro setups, RBC strategy, stick bug, pop gum, and more.",
};

export default function GuidesPage() {
  return (
    <section className="page-section">
      <h1 className="section-title">Guides</h1>
      <p className="section-subtitle">
        In-depth guides covering strategies, setups, and progression.
      </p>
      <div className="card-grid">
        {data.guides.map((guide) => (
          <GuideCard key={guide.name} guide={guide} />
        ))}
      </div>
    </section>
  );
}
