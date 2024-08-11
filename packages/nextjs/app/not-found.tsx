import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Oops! The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 text-button-bg hover:underline">
        Go back to Home
      </Link>
    </main>
  );
}
