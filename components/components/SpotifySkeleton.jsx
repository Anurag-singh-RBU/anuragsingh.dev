export function SpotifySkeleton() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 shadow-inner w-full mb-6 animate-pulse">
      <div className="w-12 h-12 rounded-md bg-muted/60"/>
      <div className="flex flex-col gap-2 flex-1">
        <div className="h-3 w-24 bg-muted/60 rounded"/>
        <div className="h-3 w-48 bg-muted/60 rounded"/>
        <div className="h-2 w-32 bg-muted/50 rounded"/>
      </div>
    </div>
  );
}
