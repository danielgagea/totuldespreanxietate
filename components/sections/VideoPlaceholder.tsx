type Props = {
  title?: string;
  aspectRatio?: "16/9" | "4/3";
};

export function VideoPlaceholder({
  title = "Video disponibil în curând",
  aspectRatio = "16/9",
}: Props) {
  return (
    <div
      className="w-full rounded-xl flex items-center justify-center"
      style={{
        aspectRatio,
        backgroundColor: "var(--color-secondary-light)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="text-center px-6">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto mb-3"
          style={{ color: "var(--color-secondary)" }}
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <p
          className="text-sm font-medium"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
