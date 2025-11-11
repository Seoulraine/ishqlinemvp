'use client';
import { useState } from 'react';

export default function SignupPage() {
  const [language, setLanguage] = useState<'en' | 'in' | 'pk' | 'bd' | 'other'>('en');
  const [form, setForm] = useState({
    name: '',
    gender: '',
    age: '',
    location: '',
    relationshipTypes: [] as string[],
    education: '',
    occupation: '',
    income: '',
    religion: '',
    community: '',
    values: '',
    lifestyle: '',
    fundStory: '',
    gifts: { star: 0, heart: 0, diamond: 0, rose: 0, cake: 0, ring: 0 },
  });

  const maxChars = 3000;

  const handleGift = (type: keyof typeof form.gifts, amount: number) => {
    setForm((prev) => ({
      ...prev,
      gifts: { ...prev.gifts, [type]: prev.gifts[type] + amount },
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleRelationshipType = (type: string) => {
    setForm((prev) => {
      const current = prev.relationshipTypes;
      if (current.includes(type)) {
        return { ...prev, relationshipTypes: current.filter((t) => t !== type) };
      }
      return { ...prev, relationshipTypes: [...current, type] };
    });
  };

  const calcScore = () => {
    let score = 0;
    if (form.name) score += 10;
    if (form.gender) score += 10;
    if (form.age) score += 10;
    if (form.location) score += 10;
    if (form.education) score += 15;
    if (form.occupation) score += 15;
    if (form.income) score += 10;
    if (form.religion && form.community) score += 10;
    if (form.values || form.lifestyle) score += 10;
    return Math.min(score, 100);
  };

  const score = calcScore();

  const renderText = (en: string, inTxt?: string, pk?: string, bd?: string) => {
    switch (language) {
      case 'in': return inTxt || en;
      case 'pk': return pk || en;
      case 'bd': return bd || en;
      default: return en;
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-6">
      <div className="flex justify-between w-full max-w-lg">
        <h1 className="text-2xl font-bold text-pink-700">Create your profile</h1>
        <select
          className="border border-pink-300 rounded px-2 text-sm"
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
        >
          <option value="en">India</option>
          <option value="pk">Pakistan</option>
          <option value="bd">Bangladesh</option>
          <option value="other">Other</option>
        </select>
      </div>

      {language === 'other' ? (
        <p className="mt-10 text-gray-600">🌍 Coming soon / 준비중입니다</p>
      ) : (
        <div className="mt-6 bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg space-y-5">
          <div>
            <label className="block font-medium text-pink-800 mb-1">
              {renderText('Name or Nickname')}
            </label>
            <input
              name="name"
              onChange={handleChange}
              value={form.name}
              className="w-full border rounded p-2"
              placeholder="Enter your name or nickname"
            />
            <p className="text-xs text-gray-500">
              🩷 Real name or nickname — you may verify later during marriage process.
            </p>
          </div>

          <div>
            <label className="block font-medium text-pink-800 mb-1">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={form.gender}
              className="w-full border rounded p-2"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-pink-800 mb-1">Age</label>
            <input
              name="age"
              type="number"
              onChange={handleChange}
              value={form.age}
              className="w-full border rounded p-2"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label className="block font-medium text-pink-800 mb-1">Region / Location</label>
            <input
              name="location"
              onChange={handleChange}
              value={form.location}
              className="w-full border rounded p-2"
              placeholder="Enter your region or city"
            />
          </div>

          <div>
            <label className="block font-medium text-pink-800 mb-1">
              Relationship Type (You can select multiple)
            </label>
            <div className="flex flex-wrap gap-2">
              {['Marriage', 'Serious Relationship', 'Romantic Connection', 'Wedding Fund'].map((type) => (
                <button
                  key={type}
                  className={`px-3 py-1 rounded-full border ${
                    form.relationshipTypes.includes(type)
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-pink-600 border-pink-400'
                  }`}
                  onClick={() => toggleRelationshipType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {(form.relationshipTypes.includes('Marriage') ||
            form.relationshipTypes.includes('Serious Relationship') ||
            form.relationshipTypes.includes('Wedding Fund')) && (
            <>
              <div>
                <label className="block font-medium text-pink-800 mb-1">Education</label>
                <input
                  name="education"
                  onChange={handleChange}
                  value={form.education}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="block font-medium text-pink-800 mb-1">Occupation</label>
                <input
                  name="occupation"
                  onChange={handleChange}
                  value={form.occupation}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="block font-medium text-pink-800 mb-1">Income</label>
                <input
                  name="income"
                  onChange={handleChange}
                  value={form.income}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="block font-medium text-pink-800 mb-1">Religion / Community</label>
                <input
                  name="religion"
                  placeholder="Religion"
                  onChange={handleChange}
                  value={form.religion}
                  className="w-full border rounded p-2 mb-2"
                />
                <input
                  name="community"
                  placeholder="Community"
                  onChange={handleChange}
                  value={form.community}
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="block font-medium text-pink-800 mb-1">Values / Lifestyle</label>
                <textarea
                  name="values"
                  onChange={handleChange}
                  value={form.values}
                  className="w-full border rounded p-2"
                  rows={3}
                  placeholder="Your beliefs, habits, health, hobbies, or food style"
                />
              </div>
            </>
          )}

          {form.relationshipTypes.includes('Wedding Fund') && (
            <div>
              <label className="block font-medium text-pink-800 mb-1">
                Wedding Fund Story
              </label>
              <textarea
                name="fundStory"
                onChange={handleChange}
                value={form.fundStory}
                className="w-full border rounded p-2"
                rows={5}
                placeholder="Describe why you need the fund, your situation, and your sincerity"
                maxLength={maxChars}
              />
              <p className="text-xs text-gray-500">
                ({form.fundStory.length}/{maxChars} characters)
              </p>
              <div className="flex gap-3 mt-2">
                <button
                  className="bg-pink-200 px-3 py-1 rounded"
                  onClick={() => handleGift('rose', 1)}
                >
                  🌹 Rose 10₹
                </button>
                <button
                  className="bg-pink-300 px-3 py-1 rounded"
                  onClick={() => handleGift('cake', 1)}
                >
                  🍰 Cake 100₹
                </button>
                <button
                  className="bg-pink-400 px-3 py-1 rounded"
                  onClick={() => handleGift('ring', 1)}
                >
                  💍 Ring 1000₹
                </button>
              </div>
            </div>
          )}

          <div className="text-center text-pink-700 font-semibold mt-6">
            Trust Score: {score} points (Reliability {score}%)
          </div>

          <button className="w-full mt-4 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
            Submit Profile
          </button>
        </div>
      )}
    </div>
  );
}
