import DataSheetCard from "@/components/DataSheetCard";
import { data } from "@/lib/data";

export const metadata = {
  title: "BSS Data Sheets ⋅ Beequip Stats, Planter Data & Spreadsheets",
  description:
    "Bee Swarm Simulator data spreadsheets — beequip statistics, upgrade weight calculator, planter stats, ability tokens, sticker drops, and seeker quest rewards.",
};

export default function DataSheetsPage() {
  return (
    <section className="page-section">
      <h1 className="section-title">Data Sheets</h1>
      <p className="section-subtitle">
        Comprehensive spreadsheets with stats, calculations, and reference data.
      </p>
      <div className="card-grid">
        {data.dataSheets.map((sheet) => (
          <DataSheetCard key={sheet.name} sheet={sheet} />
        ))}
      </div>
    </section>
  );
}
