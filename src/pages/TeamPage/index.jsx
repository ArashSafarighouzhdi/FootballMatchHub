import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchTeamDetails, fetchTeamMatches } from "../../api/nationalTeamsApi";
import TeamProfile from "../../components/TeamProfile";
import Loader from "../../components/Loader";
import { ErrorMessage } from "../../components/ErrorMessages";

const TeamPage = () => {
  const { teamId } = useParams();
  const [data, setData] = useState({ details: null, matches: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const lastFetchedId = useRef(null);

  const fetchFullTeamData = async () => {
    try {
      setIsLoading(true);
      const [details, matches] = await Promise.all([
        fetchTeamDetails(teamId),
        fetchTeamMatches(teamId),
      ]);

      setData({ details, matches });
      lastFetchedId.current = teamId;
    } catch (error) {
      console.error("fetch error:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (lastFetchedId.current !== teamId) {
      fetchFullTeamData();
    }
  }, [teamId]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;

  return <TeamProfile info={data.details} recentMatches={data.matches} />;
};

export default TeamPage;
