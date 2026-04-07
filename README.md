# ⚽ Football Match Hub

A multi-page React application that displays football matches, leagues, and national teams using real-time data from external APIs.
---

## 🌐 Live Demo 👉 https://football-match-hub.vercel.app
---

## 📌 Features
* View upcoming and recent football matches
* Explore leagues and standings
* Browse national teams and team profiles
* Add and manage favorite teams
* Responsive design for desktop and mobile
* Loading states and user feedback messages
* Handles API limitations (rate limits, missing data)
---

## 🧠 Project Plan
This project was developed based on a structured plan and adapted according to real-world API limitations.

👉 [View Project Plan](project-plan.md)
---

## 🛠 Tech Stack
* React
* React Router (Routing, Layout, Outlet)
* CSS Modules
* Local Storage
* football-data.org API
---

## 🧩 Project Structure
* Multi-page routing with 4 main pages
* Sub-routes for leagues and team profiles
* Component-based architecture
* Clean data flow from API → pages → components
---

## ⚙️ Challenges & Solutions
### API Limitations
* Limited free data and rate limits
* Solution: fallback data, delay handling, and user messages

### No Live Matches
* Some time periods had no live games
* Solution: replaced with upcoming matches

### Slow Data Loading
* Large data fetch caused delays
* Solution: loading animations and improved UX

### Missing Team Data
* No full squad data available
* Solution: external federation links + combined datasets
---

## 📱 User Experience Improvements
* Static Home page for better first impression
* Loading indicators with feedback messages
* Clear error and empty states
* Simplified navigation (no hamburger menu)
---

## 🚀 Future Improvements
* AI-based match prediction
* More leagues and competitions
---

## 👨‍💻 Author
Arash Safari
Frontend Developer (React, TypeScript, JavaScript)
---
