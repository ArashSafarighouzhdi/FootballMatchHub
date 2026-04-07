const API_KEY = import.meta.env.VITE_FOOTBALL_DATA_API_KEY;

const headers = {
  "X-Auth-Token": API_KEY,
};

const fetchMatches = async (query = "") => {
  const response = await fetch(`/api/football/matches${query}`, {
    headers,
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch matches: ${response.status}`);
  }

  const data = await response.json();

  return data.matches || [];
};

export const getLiveMatches = async () => {
  return fetchMatches("?status=LIVE");
};

export const getRecentMatches = async () => {
  const recent = new Date();
  const from = new Date();

  from.setDate(recent.getDate() - 10);

  const dateFrom = new Intl.DateTimeFormat("en-CA").format(from);
  const dateTo = new Intl.DateTimeFormat("en-CA").format(recent);

  return fetchMatches(`?dateFrom=${dateFrom}&dateTo=${dateTo}`);
};

export const getUpcomingMatches = async () => {
  const today = new Date();
  const next7Days = new Date();

  next7Days.setDate(today.getDate() + 7);

  const dateFrom = new Intl.DateTimeFormat("en-CA").format(today);
  const dateTo = new Intl.DateTimeFormat("en-CA").format(next7Days);

  return fetchMatches(
    `?dateFrom=${dateFrom}&dateTo=${dateTo}&status=SCHEDULED`,
  );
};
