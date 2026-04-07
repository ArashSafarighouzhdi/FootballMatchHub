import { useEffect, useState, useRef } from "react";
import { Outlet, useParams } from "react-router-dom";
import NationalTeams from "../../components/NationalTeams";
import { getAllNationalTeams } from "../../api/nationalTeamsApi";
import Loader from "../../components/Loader/";
import { ErrorMessage } from "../../components/ErrorMessages";

const NationalTeamsPage = () => {
  const { teamId } = useParams();
  const [nationalTeams, setNationalTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  const fetchNationalTeams = async () => {
    try {
      const teams = await getAllNationalTeams();

      setNationalTeams(teams);
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

    fetchNationalTeams();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      {!teamId ? <NationalTeams nationalTeams={nationalTeams} /> : <Outlet />}
    </>
  );
};

export default NationalTeamsPage;
