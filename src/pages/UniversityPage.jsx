import { useParams } from 'react-router-dom'
import { getUniversityById } from '../data/universities'
import Section from '../components/Section'
import Card from '../components/Card'
import './UniversityPage.css'

function UniversityPage() {
  const { universityId } = useParams()
  const university = getUniversityById(universityId)

  if (!university) {
    return (
      <div className="university-page">
        <div className="container">
          <h1>University not found</h1>
        </div>
      </div>
    )
  }

  return (
    <main className="university-page">
      <div className="university-header">
        <div className="container">
          <span className="university-location">{university.location}</span>
          <h1 className="university-name">{university.name}</h1>
          <p className="university-description">{university.description}</p>
        </div>
      </div>

      {university.courses.map(course => (
        <div key={course.id} className="course-section">
          <Section
            title={course.name}
            subtitle="COURSE"
            className="course-section-content"
          >
            <div className="course-tabs">
              <div className="tab-section">
                <h3 className="tab-title">Previous Year Questions</h3>
                <div className="course-items-grid">
                  {course.pyqs.map(pyq => (
                    <Card
                      key={pyq.id}
                      title={`${pyq.subject} - ${pyq.year}`}
                      description={pyq.description}
                      meta={`${pyq.semester} Semester`}
                    />
                  ))}
                </div>
              </div>

              <div className="tab-section">
                <h3 className="tab-title">Study Notes</h3>
                <div className="course-items-grid">
                  {course.notes.map(note => (
                    <Card
                      key={note.id}
                      title={note.topic}
                      description={note.description}
                      meta={note.subject}
                    />
                  ))}
                </div>
              </div>

              <div className="tab-section">
                <h3 className="tab-title">Playlists</h3>
                <div className="course-items-grid">
                  {course.playlists.map(playlist => (
                    <Card
                      key={playlist.id}
                      title={playlist.title}
                      description={playlist.description}
                      meta={`${playlist.videoCount} videos`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      ))}
    </main>
  )
}

export default UniversityPage
