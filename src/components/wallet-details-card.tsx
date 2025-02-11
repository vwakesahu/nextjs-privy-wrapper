export function WalletDetailsCard({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        {label}
      </h2>
      <p
        className={`font-mono bg-black/[.05] dark:bg-white/[.06] p-3 rounded-lg ${className}`}
      >
        {value}
      </p>
    </div>
  );
}
