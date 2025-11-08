"use client";
import { useState } from "react";

export default function SignupPage() {
  const [openTo, setOpenTo] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-pink-700 mb-4">Ishqline Signup</h1>
        <p className="text-sm text-gray-600 mb-6">
          Tell people what you’re here for. Your choices can be shown on your profile.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              What are you open to?
            </label>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { id: "marriage", label: "💍 Marriage" },
                { id: "serious", label: "💗 Serious / Nikah" },
                { id: "romantic", label: "🌸 Romantic Connection" },
                { id: "wedding-fund", label: "💰 Wedding Fund" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setOpenTo(item.id)}
                  className={`border rounded-full px-3 py-1 text-sm ${
                    openTo === item.id
                      ? "bg-pink-600 text-white"
                      : "bg-white text-pink-600 border-pink-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 모든 설명 항상 표시 */}
          <div className="mt-6 text-left text-sm space-y-3 text-pink-800">
            <div>
              💍 <strong>Marriage</strong>: You’re looking for a lifelong partner and want a meaningful connection.
            </div>
            <div>
              💗 <strong>Serious / Nikah</strong>: You’re open to a serious relationship that may lead to Nikah.
            </div>
            <div>
              🌸 <strong>Romantic Connection</strong>: You’d like to explore emotional compatibility and connection.
            </div>
            <div>
              💰 <strong>Wedding Fund</strong>: You want people to support your journey toward marriage through your story.
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md mt-6 hover:bg-pink-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
