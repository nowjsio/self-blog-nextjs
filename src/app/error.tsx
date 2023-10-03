'use client'; // Error components must be Client Components

import { useEffect } from 'react';
type Props = {
  error: Error;
  reset: () => void;
};
export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      <p className="text-3xl">Something went wrong! </p>
      <button
        className=" mt-6 p-2 bg-black rounded-full text-white"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
