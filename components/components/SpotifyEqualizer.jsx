export function SpotifyEqualizer() {
  return (
    <div className="flex items-end gap-[2px] h-4">
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-sm bg-green-500 animate-eq"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}
