import Link from "next/link";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={diagonal ? "arrow diagonal" : "arrow"}
    >
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Hiram Dev home">
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 5v22M25 5v22M7 16h18"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path d="m12 24 8-16" stroke="var(--blue)" strokeWidth="4" />
      </svg>
      <span>
        hiram<span className="brand-dot">.</span>dev
      </span>
    </Link>
  );
}
