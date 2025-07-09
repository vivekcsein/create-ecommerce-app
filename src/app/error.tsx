"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section>
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </section>
  );
};

export default Error;
