"use client";
import Link from "next/link";

const globalError = () => {
  return (
    <html>
      <body>
        <main className="grid min-h-[100vh] place-items-center px-8">
          <div className="text-center">
            <p className="text-9xl font-semibold text-primary">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-lg leading-7">
              Sorry, we could not find the page you are looking for.
            </p>
            <div className="mt-10">
              <Link href="/" className="btn btn-secondary">
                Go back home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default globalError;
