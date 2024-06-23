import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[720px] text-foreground">
      <div className="max-w-md px-4 text-center">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Oops, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
