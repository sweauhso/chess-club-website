"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState(""); // ✅ Changed from email to username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        username, // ✅ Changed from email to username
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/admin"); // ✅ Redirects to admin page after login
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-grey shadow-lg p-6 rounded-lg w-80">
        <h1 className="text-2xl font-bold my-4 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-green text-white font-bold cursor-pointer px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-center text-blue-500 hover:underline" href="/">
            Go Back
          </Link>
        </form>
      </div>
    </div>
  );
}
