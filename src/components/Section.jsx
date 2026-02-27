import './Section.css'

function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-header">
        {subtitle && <span className="section-subtitle">{subtitle}</span>}
        {title && <h2 className="section-title">{title}</h2>}
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  )
}

export default Section
