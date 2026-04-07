import { useEffect, useState, useRef } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchTopLeagues } from "../../api/leaguesApi";
import Leagues from "../../components/Leagues";
import Loader from "../../components/Loader/";
import { ErrorMessage } from "../../components/ErrorMessages";

const LeaguesPage = () => {
  const { leagueCode } = useParams();
  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  const fetchLeagues = async () => {
    try {
      const leagues = await fetchTopLeagues();

      setLeagues(leagues);
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

    fetchLeagues();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      {!leagueCode && <Leagues leagues={leagues} />}

      <Outlet />
    </div>
  );
};

export default LeaguesPage;
