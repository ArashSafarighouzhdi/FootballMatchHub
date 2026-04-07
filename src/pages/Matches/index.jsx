import { useEffect, useState, useRef } from "react";
import LiveMatches from "../../components/LiveMatches";
import Loader from "../../components/Loader/";
import {
  getLiveMatches,
  getRecentMatches,
  getUpcomingMatches,
} from "../../api/matchesApi";
import RecentMatches from "../../components/RecentMatches";
import { MatchesErrorMessage } from "../../components/ErrorMessages";

const Matches = () => {
  const [liveMatches, setLiveMatches] = useState([]);
  const [recentMatches, setRecentMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  const fetchInfoMatches = async () => {
    try {
      const live = await getLiveMatches();

      const recent = await getRecentMatches();

      const upcoming = await getUpcomingMatches();

      setLiveMatches(live);
      setRecentMatches(recent);
      setUpcomingMatches(upcoming);
    } catch (error) {
      console.error("fetch error:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetchInfoMatches();
  }, []);

  const latestRecentMatches = recentMatches.slice(-4);
  const nextUpcomingMatches = upcomingMatches.slice(0, 4);

  const matchesToShow =
    liveMatches.length > 0 ? liveMatches : nextUpcomingMatches;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <MatchesErrorMessage />;
  }

  return (
    <div>
      <LiveMatches matches={matchesToShow} />
      <RecentMatches matches={latestRecentMatches} />
    </div>
  );
};

export default Matches;
