"use client";

import React, { useState } from "react";

type Lang = "en" | "hi" | "ur" | "bn";

const texts: Record<Lang, any> = {
  en: {
    title: "Create your profile",
    subtitle: "We care about trust, culture, and privacy.",
    fullName: "Full name",
    fullNamePlaceholder: "e.g. Priya Sharma",
    fullNameHelp:
      "Please share your full name — your name carries your story. 💕 Only your first name will be visible to others.",
    gender: "Gender",
    genderPlaceholder: "Select gender...",
    genderHelp: "We respect everyone’s identity — love has many beautiful forms. 💕",
    age: "Age",
    agePlaceholder: "Enter your age",
    ageHelp: "This helps us show you relevant matches.",
    whatOpen: "What are you open to?",
    whatOpenHelp: "You can select more than one. Choose what matches your heart right now. 💗",
    optionMarriageTitle: "Marriage",
    optionMarriageDesc: "Ready for marriage, with family blessings and lifelong commitment.",
    optionSeriousTitle: "Serious Relationship / Nikah",
    optionSeriousDesc: "Genuine, long-term connection — marriage can follow.",
    optionRomanticTitle: "Romantic Connection",
    optionRomanticDesc: "Looking for a warm, romantic connection with trust and chemistry.",
    optionFundTitle: "Wedding Fund",
    optionFundDesc: "Getting married soon? Share your story to receive support.",
    communityTitle: "Community / Religion (optional)",
    communityDesc:
      "For marriage-focused matches, some families prefer to see this. Share only what you’re comfortable with.",
    communityPlaceholder: "e.g. Sunni Muslim, Punjabi Sikh, Hindu - Brahmin, Catholic...",
    continue: "Continue",
  },

  hi: {
    title: "अपनी प्रोफ़ाइल बनाइए",
    subtitle: "हम भरोसा, संस्कृति और प्राइवेसी को महत्व देते हैं।",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "जैसे: Priya Sharma",
    fullNameHelp:
      "कृपया अपना पूरा नाम लिखें — आपका नाम आपकी कहानी है। 💕 दूसरों को केवल आपका पहला नाम दिखेगा।",
    gender: "लिंग",
    genderPlaceholder: "लिंग चुनिए...",
    genderHelp: "हम हर पहचान का सम्मान करते हैं — प्यार कई रूपों में आता है। 💕",
    age: "उम्र",
    agePlaceholder: "अपनी उम्र लिखिए",
    ageHelp: "इससे हम आपको सही मैच दिखा पाएंगे।",
    whatOpen: "आप किसके लिए खुले हैं?",
    whatOpenHelp: "एक से ज़्यादा विकल्प चुन सकते हैं। जो दिल के सबसे पास है वही चुनिए। 💗",
    optionMarriageTitle: "Marriage / शादी",
    optionMarriageDesc: "परिवार की रज़ामंदी और लंबे रिश्ते वाली शादी के लिए तैयार।",
    optionSeriousTitle: "Serious Relationship / निकाह",
    optionSeriousDesc: "सच्चा, लंबा रिश्ता — आगे चलकर शादी हो सकती है।",
    optionRomanticTitle: "Romantic Connection",
    optionRomanticDesc: "ट्रस्ट और केमिस्ट्री वाला रिश्ता।",
    optionFundTitle: "Wedding Fund",
    optionFundDesc: "जल्द शादी है? अपनी कहानी शेयर करें और सपोर्ट पाएँ।",
    communityTitle: "समुदाय / धर्म (वैकल्पिक)",
    communityDesc:
      "शादी वाले मैच में कुछ परिवार यह देखना पसंद करते हैं। जितना आप सहज हों उतना ही लिखें।",
    communityPlaceholder: "जैसे: Sunni Muslim, Punjabi Sikh, Hindu - Brahmin, Catholic...",
    continue: "आगे बढ़ें",
  },

  ur: {
    title: "اپنی پروفائل بنائیں",
    subtitle: "ہم اعتماد، ثقافت اور پرائیویسی کا خیال رکھتے ہیں۔",
    fullName: "پورا نام",
    fullNamePlaceholder: "مثلاً: Priya Sharma",
    fullNameHelp:
      "براہِ کرم پورا نام لکھیں — آپ کا نام آپ کی کہانی ہے۔ 💕 دوسروں کو صرف آپ کا پہلا نام دکھایا جائے گا۔",
    gender: "جنس",
    genderPlaceholder: "جنس منتخب کریں...",
    genderHelp: "ہم ہر شناخت کا احترام کرتے ہیں — محبت کئی شکلوں میں آتی ہے۔ 💕",
    age: "عمر",
    agePlaceholder: "عمر درج کریں",
    ageHelp: "اس سے ہمیں بہتر میچ دکھانے میں مدد ملے گی۔",
    whatOpen: "آپ کس چیز کے لیے اوپن ہیں؟",
    whatOpenHelp: "آپ ایک سے زیادہ آپشن منتخب کر سکتے ہیں۔ جو دل کے قریب ہے وہ چنیں۔ 💗",
    optionMarriageTitle: "Marriage / شادی",
    optionMarriageDesc: "خاندانی دعا اور عمر بھر کے ساتھ والی شادی کے لیے تیار۔",
    optionSeriousTitle: "Serious Relationship / نکاح",
    optionSeriousDesc: "سنجیدہ، لمبے عرصے کا رشتہ — آگے چل کر شادی ہو سکتی ہے۔",
    optionRomanticTitle: "Romantic Connection",
    optionRomanticDesc: "گرم جوش اور پُراعتماد تعلق جس میں کیمسٹری ہو۔",
    optionFundTitle: "Wedding Fund",
    optionFundDesc: "جلد شادی ہے؟ اپنی کہانی شیئر کریں اور سپورٹ لیں۔",
    communityTitle: "کمیونٹی / مذہب (اختیاری)",
    communityDesc:
      "شادی والے میچ میں کچھ خاندان یہ جاننا پسند کرتے ہیں۔ جتنا چاہیں اتنا لکھیں۔",
    communityPlaceholder: "مثلاً: Sunni Muslim, Punjabi Sikh, Hindu - Brahmin, Catholic...",
    continue: "جاری رکھیں",
  },

  bn: {
    title: "আপনার প্রোফাইল তৈরি করুন",
    subtitle: "আমরা বিশ্বাস, সংস্কৃতি ও গোপনীয়তাকে গুরুত্ব দিই।",
    fullName: "পূর্ণ নাম",
    fullNamePlaceholder: "যেমন: Priya Sharma",
    fullNameHelp:
      "দয়া করে আপনার পূর্ণ নাম লিখুন — আপনার নামই আপনার গল্প। 💕 অন্যদের কাছে শুধু আপনার প্রথম নামটি দেখা যাবে।",
    gender: "লিঙ্গ",
    genderPlaceholder: "লিঙ্গ নির্বাচন করুন...",
    genderHelp: "আমরা সবার পরিচয়কে সম্মান করি — ভালোবাসার অনেক রূপ আছে। 💕",
    age: "বয়স",
    agePlaceholder: "আপনার বয়স লিখুন",
    ageHelp: "এতে আপনাকে ভালো ম্যাচ দেখাতে সুবিধা হবে।",
    whatOpen: "আপনি কোন সম্পর্কে আগ্রহী?",
    whatOpenHelp: "একাধিক অপশন বেছে নিতে পারেন। এখন আপনার যেটা দরকার সেটাই বেছে নিন। 💗",
    optionMarriageTitle: "Marriage / বিয়ে",
    optionMarriageDesc: "পরিবারের আশীর্বাদসহ দীর্ঘমেয়াদি বিয়ের জন্য প্রস্তুত।",
    optionSeriousTitle: "Serious Relationship / নিকাহ",
    optionSeriousDesc: "গভীর, দীর্ঘমেয়াদি সম্পর্ক — পরে বিয়ে হতে পারে।",
    optionRomanticTitle: "Romantic Connection",
    optionRomanticDesc: "বিশ্বাসযোগ্য ও উষ্ণ সম্পর্ক, যেখানে কেমিস্ট্রি আছে।",
    optionFundTitle: "Wedding Fund",
    optionFundDesc: "শিগগিরই বিয়ে? আপনার গল্প শেয়ার করুন, সাপোর্ট পেতে পারেন।",
    communityTitle: "কমিউনিটি / ধর্ম (ঐচ্ছিক)",
    communityDesc:
      "বিয়ে-কেন্দ্রিক ম্যাচে কিছু পরিবার এটি জানতে চায়। যেটুকু স্বচ্ছন্দ, শুধু সেটুকুই লিখুন।",
    communityPlaceholder: "যেমন: Sunni Muslim, Punjabi Sikh, Hindu - Brahmin, Catholic...",
    continue: "চালিয়ে যান",
  },
};

export default function Signup() {
  const [lang, setLang] = useState<Lang>("en");
  const t = texts[lang];

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [selectedIntents, setSelectedIntents] = useState<string[]>([]);
  const [community, setCommunity] = useState("");

  const toggleIntent = (value: string) => {
    setSelectedIntents((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const showCommunity =
    selectedIntents.includes("marriage") || selectedIntents.includes("serious");

  const handleSubmit = () => {
    console.log({
      fullName,
      gender,
      age,
      selectedIntents,
      community,
      lang,
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8bbd9",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2.4rem 1rem 4rem",
      }}
    >
      {/* 언어 선택 */}
      <div
        style={{
          position: "fixed",
          top: "1.1rem",
          right: "1.1rem",
          background: "rgba(255,255,255,0.9)",
          border: "1px solid #eee",
          borderRadius: "10px",
          padding: "0.4rem 0.5rem 0.25rem",
          display: "flex",
          gap: "0.35rem",
          flexWrap: "wrap",
        }}
      >
        {["en", "hi", "ur", "bn"].map((code) => (
          <button
            key={code}
            onClick={() => setLang(code as Lang)}
            style={{
              padding: "0.3rem 0.6rem",
              borderRadius: "999px",
              border: lang === code ? "2px solid #ff007a" : "1px solid #ddd",
              background: "#fff",
              fontSize: "0.68rem",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {code === "en"
              ? "English"
              : code === "hi"
              ? "हिंदी"
              : code === "ur"
              ? "اردو"
              : "বাংলা"}
          </button>
        ))}
        <button
          onClick={() =>
            alert(
              "More South Asian languages are coming soon (Tamil, Telugu, Marathi, Gujarati...)"
            )
          }
          style={{
            padding: "0.3rem 0.6rem",
            borderRadius: "999px",
            border: "1px dashed #bbb",
            background: "#fff",
            fontSize: "0.68rem",
            cursor: "pointer",
            fontWeight: 500,
            color: "#555",
          }}
        >
          + Other
        </button>
      </div>

      {/* 메인 카드 */}
      <div
        style={{
          width: "100%",
          maxWidth: "540px",
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 20px 45px rgba(0,0,0,0.05)",
          padding: "2.6rem 2.2rem 2.4rem",
        }}
      >
        <h1 style={{ fontSize: "1.55rem", fontWeight: 700, marginBottom: "0.35rem" }}>
          {t.title}
        </h1>
        <p style={{ color: "#666", fontSize: "0.82rem", marginBottom: "1.6rem" }}>
          {t.subtitle}
        </p>

        {/* 이름 */}
        <label style={{ fontWeight: 600 }}>{t.fullName}</label>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={t.fullNamePlaceholder}
          style={{
            width: "100%",
            padding: "0.75rem 0.8rem",
            borderRadius: "0.75rem",
            border: "1px solid #e6e6e6",
            outline: "none",
            marginBottom: "0.35rem",
          }}
        />
        <p style={{ fontSize: "0.66rem", color: "#7a7a7a", marginBottom: "1.1rem" }}>
          {t.fullNameHelp}
        </p>

        {/* 성별 */}
        <label style={{ fontWeight: 600 }}>{t.gender}</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{
            width: "100%",
            padding: "0.7rem 0.8rem",
            borderRadius: "0.75rem",
            border: "1px solid #e6e6e6",
            outline: "none",
            marginBottom: "0.35rem",
          }}
        >
          <option value="">{t.genderPlaceholder}</option>
          <option value="female">Female / Woman</option>
          <option value="male">Male / Man</option>
          <option value="nonbinary">Non-binary</option>
          <option value="other">Prefer to self-describe</option>
        </select>
        <p style={{ fontSize: "0.66rem", color: "#7a7a7a", marginBottom: "1.1rem" }}>
          {t.genderHelp}
        </p>

        {/* 나이 */}
        <label style={{ fontWeight: 600 }}>{t.age}</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder={t.agePlaceholder}
          style={{
            width: "100%",
            padding: "0.75rem 0.8rem",
            borderRadius: "0.75rem",
            border: "1px solid #e6e6e6",
            outline: "none",
            marginBottom: "0.3rem",
          }}
        />
        <p style={{ fontSize: "0.66rem", color: "#7a7a7a", marginBottom: "1.35rem" }}>
          {t.ageHelp}
        </p>

        {/* 오픈 옵션 */}
        <label style={{ fontWeight: 600 }}>{t.whatOpen}</label>
        <p style={{ fontSize: "0.66rem", color: "#7a7a7a", marginBottom: "0.85rem" }}>
          {t.whatOpenHelp}
        </p>

        {[
          ["marriage", "💍", t.optionMarriageTitle, t.optionMarriageDesc],
          ["serious", "❤️", t.optionSeriousTitle, t.optionSeriousDesc],
          ["romantic", "💞", t.optionRomanticTitle, t.optionRomanticDesc],
          ["fund", "🎁", t.optionFundTitle, t.optionFundDesc],
        ].map(([key, icon, title, desc]) => (
          <button
            key={key}
            type="button"
            onClick={() => toggleIntent(key)}
            style={{
              width: "100%",
              textAlign: "left",
              borderRadius: "1rem",
              border: selectedIntents.includes(key)
                ? "2px solid #ff007a"
                : "1px solid #eee",
              background: "#fff",
              padding: "0.55rem 0.65rem",
              marginBottom: "0.6rem",
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: "0.2rem" }}>
              {icon} {title}
            </p>
            <p style={{ fontSize: "0.67rem", color: "#555" }}>{desc}</p>
          </button>
        ))}

        {/* 커뮤니티 */}
        {showCommunity && (
          <div style={{ marginTop: "1.6rem" }}>
            <label style={{ fontWeight: 600 }}>{t.communityTitle}</label>
            <p style={{ fontSize: "0.66rem", color: "#7a7a7a", marginBottom: "0.5rem" }}>
              {t.communityDesc}
            </p>
            <input
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              placeholder={t.communityPlaceholder}
              style={{
                width: "100%",
                padding: "0.7rem 0.8rem",
                borderRadius: "0.75rem",
                border: "1px solid #e6e6e6",
                outline: "none",
                marginBottom: "1.2rem",
              }}
            />
          </div>
        )}

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            background: "#ff007a",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "0.85rem 0",
            fontWeight: 600,
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          {t.continue}
        </button>
      </div>
    </div>
  );
}
