export default function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center h-full">
      <svg
        className="animate-spin h-8 w-8 text-blue-500" // Spinner size and color
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12c0-1.66 1.34-3 3-3h1.5a6.493 6.493 0 0 0-4.5 4.5C4 12 4 12 4 12zm0 0c0 1.66 1.34 3 3 3h1.5a6.493 6.493 0 0 0 4.5-4.5H12c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3zm12 0c0 1.66-1.34 3-3 3h-1.5c1.16-1.77 1.5-3.84 0-5.5H12c1.66 0 3 1.34 3 3zm0 0c0-1.66 1.34-3 3-3h1.5C18.84 9.16 17 11.68 17 14h-1c0-1.66-1.34-3-3-3h-1.5z"
        ></path>
      </svg>
    </div>
  );
}
