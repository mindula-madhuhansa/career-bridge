export default function Loading() {
  return (
    <div className="flex min-h-[720px] w-full flex-col items-center justify-center space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Loading...</h1>
        <p className="text-muted-foreground">
          Please wait while we fetch the jobs for you.
        </p>
      </div>
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}
