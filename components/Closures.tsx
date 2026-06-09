type Closure = { name: string; date: string; status: string };

const CLOSURES: Closure[] = [
  { name: "New Year’s Day", date: "1 Jan 2026", status: "Closed" },
  { name: "Australia Day", date: "26 Jan 2026", status: "Closed" },
  { name: "Good Friday", date: "3 Apr 2026", status: "Closed" },
  { name: "Easter Saturday", date: "4 Apr 2026", status: "Open from 1.00pm" },
  { name: "Easter Sunday", date: "5 Apr 2026", status: "Open from 1.00pm" },
  { name: "Easter Monday", date: "6 Apr 2026", status: "Closed" },
  { name: "ANZAC Day", date: "25 Apr 2026", status: "Closed" },
  { name: "Labour Day", date: "4 May 2026", status: "Open from 1.00pm" },
  { name: "King’s Birthday", date: "5 Oct 2026", status: "Closed" },
  { name: "Christmas Day", date: "25 Dec 2026", status: "Closed" },
  { name: "Boxing Day", date: "26 Dec 2026", status: "Open from 1.00pm" },
];

export default function Closures() {
  return (
    <section className="section closures">
      <div className="wrap">
        <span className="eyebrow center reveal">Public holidays 2026</span>
        <h3 className="reveal" data-delay="1">
          Holiday operating dates
        </h3>
        <p className="sub reveal" data-delay="1">
          Please note the following closures and reduced hours.
        </p>
        <div className="closure-grid reveal" data-delay="2">
          {CLOSURES.map((c) => {
            const open = c.status.toLowerCase().startsWith("open");
            return (
              <div key={c.name} className="closure-item">
                <span className="c-name">{c.name}</span>
                <span className={`c-date ${open ? "open" : "closed"}`}>
                  {c.status} · {c.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
