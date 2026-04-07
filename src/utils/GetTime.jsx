export const GetTime = (utcDate) => {
  const now = new Date();
  const kickoff = new Date(utcDate);

  const diffMs = kickoff - now;

  if (diffMs <= 0) return "Starting soon";

  const totalMinutes = Math.floor(diffMs / 1000 / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  return `${hours}h ${minutes}m`;
};
