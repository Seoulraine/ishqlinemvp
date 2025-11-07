"use client";

import { useState } from "react";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [openTo, setOpenTo] = useState<string | null>(null);

  // 여기서 네 번째 걸 "Wedding Fund" 로 바꿨습니다.
  const options = [
    {
      id: "marriage",
      title: "Marriage",
      emoji: "💍",
      desc: "Ready for marriage, with family blessings and lifelong commitment.",
    },
    {
      id: "serious",
      title: "Serious Relationship / Nikah",
      emoji: "💖",
      desc: "Genuine, long-term connection — marriage can follow.",
    },
    {
      id: "romantic",
      title: "Romantic Connection",
      emoji: "✨",
      desc: "Looking for a warm, romantic connection with trust and chemistry.",
    },
    {
      id: "wedding-fund",
      title: "Wedding Fund",
      emoji: "💸",
      desc:
        "I want to get married but need financial help for wedding expenses.",
    },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({
      fullName,
      gender,
      openTo,
    });
  }

  return (
    <main className="min-h-screen bg-pink-50 flex justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Create your profile
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          We care about trust, culture, and privacy.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* full name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
              placeholder="e.g. Priya Sharma"
              required
            />
            <p className="text-xs text-gray-400 mt-1">
              Please share your full name — your name carries your story.
            </p>
          </div>

          {/* gender */}
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-pink-200"
              required
            >
              <option value="">Select gender...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other / Prefer not to say</option>
            </select>
            <p className="text-xs text-gray-400 mt-1">
              We respect everyone&apos;s identity.
            </p>
          </div>

          {/* what are u open to */}
          <div>
            <h2 className="text-sm font-semibold mb-2">What are you open to?</h2>
            <p className="text-xs text-gray-400 mb-3">
              Choose the one that matches your heart right now.
            </p>
            <div className="space-y-3">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setOpenTo(opt.id)}
                  className={`w-full text-left border rounded-xl px-4 py-3 transition ${
                    openTo === opt.id
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-xl">{opt.emoji}</div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {opt.title}
                      </div>
                      <div className="text-xs text-gray-500">{opt.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 안내: wedding fund 선택했을 때만 보이게 */}
          {openTo === "wedding-fund" && (
            <div className="bg-pink-50 border border-pink-100 rounded-lg p-3 text-xs text-pink-900">
              You chose <strong>Wedding Fund</strong>. People can see that you
              want to get married and may support your wedding through your
              short video.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}
