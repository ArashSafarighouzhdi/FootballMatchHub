# Project Plan – Football Match App

## 1. Idea Exploration

At the beginning of this project, I explored multiple ideas before deciding on the main direction. My goal was to choose a topic that is engaging, feasible with available data, and technically meaningful.

### 1.1 Cryptocurrency Dashboard

This idea could be interesting, as it focuses on real-time data that constantly changes. However, the main challenge was API limitations. Reliable real-time data was not easily accessible for free, which could negatively affect the quality and attractiveness of the project.

### 1.2 Football Data Platform (Selected Idea)

Football is a highly popular topic, and match results attract many users. Initially, I assumed that due to its popularity, there would be many accessible APIs. While this was partially true, I later realized that most high-quality data is behind paid plans. Despite this, football remained a more engaging and suitable choice for this project.

---

## 2. Initial Plan

Before working with APIs, I designed the initial structure of the application:

- **Home Page**
  - Display live match results

- **Leagues Page**
  - List of leagues
  - Subpages for standings

- **National Teams Page**
  - Team list
  - Subpages for team profiles

- **Prediction Feature (Planned)**
  - Use AI to predict match results based on data
  - Required backend integration

- **Favorites Page**
  - Save user-selected teams

- **About Page**
  - Provide project and developer information

---

## 3. API Selection & Testing

I initially selected the football-data.org API. The free version provides:

- Data for 6 major leagues
- Limited national teams data

To better evaluate available options, I tested several alternative APIs using Postman. While some of these APIs offered more comprehensive data, they were either behind paid subscriptions or limited trial access.

During this process, I discovered:

- Many useful endpoints required paid subscriptions ($80–$120/month)
- Some APIs only offered limited 15-day trial access
- Several important data points were not available in free plans

Based on this evaluation, I decided to return to the football-data.org API and adapt the project structure to align with the constraints of the free plan.

---

## 4. Technical Approach

- Data fetched from API layer
- Data managed and processed in page-level files
- Components receive clean and structured data
- Component-based architecture used throughout the project
- Styling implemented using CSS Modules
- Routing handled with React Router
  - Layout and Outlet used for consistent page structure
- Subpages implemented for leagues and team profiles
- Local Storage used to manage Favorites

---

## 5. Challenges Faced

### 5.1 Live Match Availability

Due to API limitations, there were many periods with no live matches.

### 5.2 Data Gaps in Recent Matches

There were long periods without matches, requiring fetching data for up to 10 days.

### 5.3 Slow Loading Time

Fetching large datasets caused delays and negatively impacted user experience.

### 5.4 API Request Limits

Strict rate limits in the free API sometimes caused temporary interruptions.

### 5.5 Missing Team Data

- Limited information about national teams
- No access to full squad data

### 5.6 Prediction Feature Limitation

The AI-based prediction feature required detailed data, which was not available in the free API.

---

## 6. Solutions Implemented

- Replaced **Live Matches** with **Upcoming Matches** when needed
- Added **Recent Matches** section to improve data coverage
- Converted Home page to a **static page** for better first impression
- Implemented **loading animations (Lottie)** to improve user experience
- Handled API limits with:
  - User notifications
  - 60-second delay between requests
- Combined multiple tournaments (World Cup 2026 & Euro) to build a dataset (~59 teams)
- Added links to official federation websites for missing team data
- Implemented **Favorites** using Local Storage
- Simplified navigation for better usability, especially on mobile

---

## 7. Final Changes

- Removed **Prediction feature** due to lack of data
- Removed **About page** (information provided in GitHub and footer) and Improved mobile user experience (no hamburger menu needed)
- Changed **Home page to static**
- Reduced complexity and improved performance

---

## 8. Final Structure

The final structure of the application:

- Home (static)
- Matches
- Leagues
- National Teams
- Favorites

---

## 9. Key Takeaways

- Free APIs require flexibility and adaptation in project design
- Initial plans may change based on real-world limitations
- Testing APIs (e.g., with Postman) is important for making informed decisions
- User experience (loading, navigation, responsiveness) is critical
- Simpler design often leads to better usability, especially on mobile
