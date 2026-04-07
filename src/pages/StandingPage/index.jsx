import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchStanding } from "../../api/leaguesApi";
import StandingTable from "../../components/StandingTable";
import Loader from "../../components/Loader";
import { ErrorMessage } from "../../components/ErrorMessages";

const StandingPage = () => {
  const { leagueCode } = useParams();
  const [data, setData] = useState({ table: [], season: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const lastFetchedCode = useRef(null);

  const fetchStandingTable = async () => {
    try {
      const result = await fetchStanding(leagueCode);

      setData(result);
      lastFetchedCode.current = leagueCode;
    } catch (error) {
      console.error("fetch error:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (lastFetchedCode.current !== leagueCode) {
      fetchStandingTable();
    }
  }, [leagueCode]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;

  return <StandingTable standings={data.table} season={data.season} />;
};
export default StandingPage;
