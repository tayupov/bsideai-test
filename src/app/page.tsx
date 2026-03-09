'use client';

export default function Home() {
  const bsideVariant = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('bside_variant') : null;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className={bsideVariant === 'treatment' ? 'text-2xl font-semibold text-red-600' : 'text-2xl font-semibold'}>
        Welcome to Next.js
      </h1>
    </div>
  );
}