export default function Section({ id, index, title, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-header">
          <span className="section-index" aria-hidden="true">{index}</span>
          <h2 id={`${id}-title`}>{title}</h2>
          <span className="section-rule" aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  );
}
