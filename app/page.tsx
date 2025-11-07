"use client";

import { useState } from "react";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [relationshipTypes, setRelationshipTypes] = useState<string[]>([]);

  // 우리가 보여줄 선택지들
  const options = [
    { id: "marriage", label: "💍 Marriage" },
    { id: "serious", label: "💗 Serious / Nikah" },
    { id: "romantic", label: "💫 Romantic Connection" },
    { id: "wedding-fund", label: "💸 Wedding Fund" }, // 새로 추가한 옵션
  ];

  function toggleType(id: string) {
    setRelationshipTypes((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // 여기서 API 호출하거나 next/server action 연결하시면 됩니다.
    console.log({
      fullName,
      email,
      relationshipTypes,
    });
  }

  return (
    <main className="min-h-screen bg-pink-50">
      <section className="max-w-md mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-pink-600 mb-2">
          Ishqline Signup
        </h1>
        <p className="text-gray-500 mb-6">
          Tell people what you&apos;re here for. Your choices can be shown on
          your profile.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl shadow-sm p-5">
          {/* name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
              placeholder="Your name"
              required
            />
          </div>

          {/* email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* open to */}
          <div>
            <h3 className="font-semibold mb-2">What are you open to?</h3>
            <p className="text-xs text-gray-400 mb-3">
              You can select more than one.
            </p>
            <div className="flex flex-wrap gap-2">
              {options.map((opt) => (
                <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleType(opt.id)}
                    className={`px-3 py-1 rounded-full border text-sm transition ${
                      relationshipTypes.includes(opt.id)
                        ? "bg-pink-600 text-white border-pink-600"
                        : "bg-white"
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 선택된 것 보여주기 */}
          <div className="text-xs text-gray-400">
            Selected:{" "}
            {relationshipTypes.length > 0
              ? relationshipTypes.join(", ")
              : "none"}
          </div>

          {/* 안내: Wedding Fund 선택 시 설명 */}
          {relationshipTypes.includes("wedding-fund") && (
            <div className="bg-pink-50 border border-pink-100 rounded-lg p-3 text-xs text-pink-900">
              You chose <strong>Wedding Fund</strong>. This means you want to
              get married but may seek financial help for wedding expenses. This
              can be shown on your profile so others can support you.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition"
          >
            Continue
          </button>
        </form>
      </section>
    </main>
  );
}
