import { Link } from 'react-router-dom'
import './Card.css'

function Card({ title, description, link, meta, onClick }) {
  const content = (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {meta && <span className="card-meta">{meta}</span>}
      </div>
    </div>
  )

  if (onClick) {
    return <div onClick={onClick} style={{ cursor: 'pointer' }}>{content}</div>
  }

  if (link) {
    return <Link to={link} className="card-link">{content}</Link>
  }

  return content
}

export default Card
