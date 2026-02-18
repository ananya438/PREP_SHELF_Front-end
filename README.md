# PrepShelf

A clean, modern platform for university students providing PYQs (Previous Year Questions), Notes, and Curated Playlists.

## Features

- **PYQs**: Previous year exam questions organized by university, course, and subject
- **Notes**: Curated study notes for exam preparation
- **Playlists**: Video playlists for comprehensive learning
- **University Support**: Currently supports UPES (DIT, Dehradun) and Uttaranchal University

## Design Philosophy

- Editorial/studio-style UI with warm colors (beige, browns, off-white)
- Clean typography with generous whitespace
- Minimal, exam-focused interface
- No flashy cards, gradients, or Bootstrap

## Tech Stack

- React 18 (functional components)
- React Router for navigation
- Plain CSS (no UI libraries)
- Vite for build tooling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Section.jsx
│   └── Card.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   └── UniversityPage.jsx
├── data/            # Dummy data
│   └── universities.js
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Routes

- `/` - Home page with overview of all content
- `/university/:universityId` - University-specific page (e.g., `/university/upes`)

## Data Structure

All data is currently stored in `src/data/universities.js` as dummy data. Each university contains:
- Courses
- PYQs per course
- Notes per course
- Playlists per course

## Future Enhancements

- Backend integration
- User authentication
- YouTube playlist embeds
- Search functionality
- Filtering and sorting
