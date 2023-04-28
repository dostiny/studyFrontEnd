"use client";
export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <button
        onClick={() => {
          console.log(123);
        }}
      >
        버튼
      </button>
    </main>
  );
}
