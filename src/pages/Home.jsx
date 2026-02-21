import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Card from '../components/Card'
import { universities } from '../data/universities'
import './Home.css'

function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <main className="home">
      <div className="container">
        <Hero />
      </div>

      <Section id="universities" title="Universities" subtitle="SELECT YOUR UNIVERSITY">
        <div className="universities-grid">
          {universities.map(uni => (
            <Card
              key={uni.id}
              title={uni.name}
              description={`${uni.location} • ${uni.courses.length} courses`}
              link={`/university/${uni.id}`}
              meta={`${uni.courses.reduce((acc, course) => acc + course.pyqs.length, 0)} PYQs available`}
            />
          ))}
        </div>
      </Section>

      <Section id="pyqs" title="Previous Year Questions" subtitle="EXAM PREPARATION">
        <div className="pyqs-grid">
          {universities.flatMap(uni =>
            uni.courses.flatMap(course =>
              course.pyqs.map(pyq => (
                <Card
                  key={pyq.id}
                  title={`${pyq.subject} - ${pyq.year}`}
                  description={pyq.description}
                  meta={`${uni.name} • ${course.name} • ${pyq.semester}`}
                />
              ))
            )
          )}
        </div>
      </Section>

      <Section id="notes" title="Study Notes" subtitle="CURATED CONTENT">
        <div className="notes-grid">
          {universities.flatMap(uni =>
            uni.courses.flatMap(course =>
              course.notes.map(note => (
                <Card
                  key={note.id}
                  title={note.topic}
                  description={note.description}
                  meta={`${uni.name} • ${course.name} • ${note.subject}`}
                />
              ))
            )
          )}
        </div>
      </Section>

      <Section id="playlists" title="Curated Playlists" subtitle="VIDEO LEARNING">
        <div className="playlists-grid">
          {universities.flatMap(uni =>
            uni.courses.flatMap(course =>
              course.playlists.map(playlist => (
                <Card
                  key={playlist.id}
                  title={playlist.title}
                  description={playlist.description}
                  meta={`${uni.name} • ${course.name} • ${playlist.videoCount} videos`}
                />
              ))
            )
          )}
        </div>
      </Section>
    </main>
  )
}

export default Home
