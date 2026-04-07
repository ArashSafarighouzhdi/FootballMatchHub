import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";
import Matches from "./pages/Matches";
import NationalTeams from "./pages/NationalTeamsPage";
import Leagues from "./pages/LeaguesPage";
import Favorites from "./pages/FavoritesPage";
import StandingPage from "./pages/StandingPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/leagues" element={<Leagues />}>
          <Route path=":leagueCode" element={<StandingPage />} />
        </Route>
        <Route path="/national-teams" element={<NationalTeams />}>
          <Route path=":teamId" element={<TeamPage />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
