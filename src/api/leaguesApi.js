const API_KEY = import.meta.env.VITE_FOOTBALL_DATA_API_KEY;

const headers = {
  "X-Auth-Token": API_KEY,
};
export const topLeagues = ["PL", "PD", "BL1", "SA", "FL1", "DED", "PPL", "BSA"];

export const fetchTopLeagues = async () => {
  const response = await fetch(`/api/football/competitions`, {
    headers,
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch leagues: ${response.status}`);
  }
  const data = await response.json();

  return data?.competitions
    .filter((comp) => topLeagues.includes(comp.code))
    .map((league) => ({
      id: league.id,
      name: league.name,
      code: league.code,
      emblem: league.emblem,
      countryName: league.area.name,
      countryFlag: league.area.flag,
    }));
};

export const fetchStanding = async (competitionCode) => {
  const response = await fetch(
    `/api/football/competitions/${competitionCode}/standings`,
    { headers },
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch standings for ${competitionCode}: ${response.status}`,
    );
  }

  const data = await response.json();
  return {
    table: data?.standings?.[0]?.table ?? [],
    season: {
      startDate: data?.season?.startDate,
      endDate: data?.season?.endDate,
      currentMatchday: data?.season?.currentMatchday,
    },
  };
};
