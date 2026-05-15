import type { Dictionary } from "@/lib/i18n/dictionaries";

export function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section className="section reveal" id="about">
      <div className="section-rail">
        <span className="rail-num">01</span>
        <span className="rail-label">{dict.rail}</span>
      </div>
      <div className="narrative-body">
        <h2 className="sec-h">
          {dict.head.pre}
          <span className="ac">{dict.head.ac}</span>
          {dict.head.post}
        </h2>
        <p>{dict.p1}</p>
        <p>{dict.p2}</p>
        <p dangerouslySetInnerHTML={{ __html: dict.p3 }} />
      </div>
    </section>
  );
}
