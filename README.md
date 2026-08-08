# 🎬 CineMind AI

CineMind AI is an intelligent movie recommendation platform that combines AI-powered mood analysis with The Movie Database (TMDB) to deliver personalized movie recommendations in a modern cinematic interface.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Groq AI**, and the **TMDB API**.

---

## ✨ Features

### 🤖 AI Movie Recommendations
- Understands natural language prompts
- Detects mood and preferred genres using Groq LLM
- Returns personalized movie recommendations
- AI-generated explanation for every recommendation

### 🎥 Movie Details
- Beautiful cinematic movie modal
- High-resolution backdrop & poster
- Movie overview
- Rating
- Runtime
- Genres
- Cast
- Similar movies
- Trailer playback
- Streaming provider information (where available)

### 🔥 Trending Movies
- Trending this week
- Interactive movie cards
- Smooth hover animations
- One-click movie details

### 🎞 Modern UI
- Netflix-inspired interface
- Glassmorphism design
- Framer Motion animations
- Responsive layout
- Dark cinematic theme

---

# 🛠 Tech Stack

## Frontend

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## AI

- Groq API
- Llama 3.3 70B Versatile

## Movie Data

- TMDB API

---

# 📂 Project Structure

```
app/
components/
  ai/
  landing/
  layout/
  movie/
  scene/
hooks/
lib/
  ai/
  api/
  tmdb/
services/
types/
public/
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/cinemind-ai.git

cd cinemind-ai
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env.local` file.

```env
TMDB_API_KEY=your_tmdb_api_key
GROQ_API_KEY=your_groq_api_key
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🔑 API Keys

## TMDB

https://developer.themoviedb.org/

## Groq

https://console.groq.com/keys

---

# 📸 Screens

- Landing Page
- AI Recommendation Engine
- Trending Movies
- Movie Details Modal
- Trailer Player
- Similar Movies
- Cast Section

*(Screenshots coming soon)*

---

# 🧠 How CineMind Works

```
User Prompt
      │
      ▼
Groq AI
(Mood Analysis)
      │
      ▼
Genre Extraction
      │
      ▼
TMDB Discover API
      │
      ▼
Movie Ranking
      │
      ▼
Personalized Recommendations
```

---

# 🌟 Upcoming Features

- User Authentication
- Personal Watchlist
- Global Movie Search
- AI Chat Movie Assistant
- User Profiles
- Favorite Movies
- Movie Reviews
- Streaming Platform Filtering
- Advanced AI Recommendation Pipeline
- Global Movie Modal
- Recently Viewed Movies

---

# 📦 Build

```bash
npm run build
```

---

# 🚀 Deploy

Recommended platform:

- Vercel

Deployment steps:

1. Push repository to GitHub
2. Import project into Vercel
3. Add environment variables:
   - TMDB_API_KEY
   - GROQ_API_KEY
4. Deploy

---

# 👨‍💻 Author

**Kanishk Bansal**

Aspiring Full Stack Developer passionate about building AI-powered web applications using modern technologies.

---

# 📄 License

This project is licensed under the MIT License.

---

## ⭐ If you like this project

Please consider giving the repository a star!
