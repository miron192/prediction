"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Home() {
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push(`/prediction/${inputVal}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">
          Enter Your Name
        </h1>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your name..."
          value={inputVal}
          className="w-full p-2 border border-gray-300 rounded text-black"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          type="submit"
        >
          Predict Data
        </button>
      </form>
    </div>
  );
}
