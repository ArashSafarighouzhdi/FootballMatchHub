const API_KEY = import.meta.env.VITE_FOOTBALL_DATA_API_KEY;

const headers = {
  "X-Auth-Token": API_KEY,
};

export const fetchTeamsByCompetition = async (competitionCode) => {
  const response = await fetch(
    `/api/football/competitions/${competitionCode}/teams`,
    { headers },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch teams: ${response.status}`);
  }

  const data = await response.json();
  return data?.teams ?? [];
};

export const getWorldCupTeams = () => {
  return fetchTeamsByCompetition("WC");
};

export const getEuroCupTeams = () => {
  return fetchTeamsByCompetition("EC");
};

export const getAllNationalTeams = async () => {
  const [wcTeams, ecTeams] = await Promise.all([
    getWorldCupTeams(),
    getEuroCupTeams(),
  ]);

  const nationalTeams = Array.from(
    new Map([...wcTeams, ...ecTeams].map((t) => [t.id, t])).values(),
  );

  return nationalTeams.map((team) => ({
    id: team.id,
    name: team.name,
    tla: team.tla,
    crest: team.crest,
  }));
};

export const fetchTeamDetails = async (teamId) => {
  const response = await fetch(`/api/football/teams/${teamId}`, { headers });

  if (!response.ok) throw new Error("Failed to fetch team details");

  const data = await response.json();
  return data;
};

export const fetchTeamMatches = async (teamId) => {
  const response = await fetch(
    `/api/football/teams/${teamId}/matches?limit=10`,
    { headers },
  );

  if (!response.ok) throw new Error("Failed to fetch matches");

  const data = await response.json();
  return data.matches;
};
