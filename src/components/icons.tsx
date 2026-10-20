export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export function Mark() {
  return (
    <svg
      className="brand-mark"
      width="25"
      height="28"
      viewBox="0 0 25 28"
      fill="none"
      aria-hidden="true"
    >
      <path d="m2 8 10.5-6L23 8 12.5 14 2 8Z" />
      <path d="m2 14 10.5 6L23 14M2 20l10.5 6L23 20" />
    </svg>
  );
}
