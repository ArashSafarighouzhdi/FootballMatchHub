export const MatchHubIcon = ({ size = "42", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="matchhubGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#58A464" />
        <stop offset="50%" stopColor="#60AF6A" />
        <stop offset="100%" stopColor="#6BC174" />
      </linearGradient>
    </defs>

    <path d="M6 12L9 8L12 12L9 16L6 12Z" fill="url(#matchhubGradient)" />
    <path
      d="M13 8L17 12L13 16"
      stroke="url(#matchhubGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
