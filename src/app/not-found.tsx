import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[720px]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-rose-500 mb-4">
        404 - Page Not Found!
      </h1>

      <Link href="/" className="text-lg text-rose-500 mt-4 underline">
        Go back to home
      </Link>
    </div>
  );
}
