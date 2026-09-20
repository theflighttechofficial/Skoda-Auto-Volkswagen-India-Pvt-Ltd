import { useState } from "react";
import { Bot, Send, RefreshCw, Car } from "lucide-react";
export const AIAdvisor = ({ brand = "skoda", initialPrompt }) => {
  const isVW = brand === "volkswagen";
  const isAudi = brand === "audi";
  const isPorsche = brand === "porsche";
  const isLamborghini = brand === "lamborghini";
  const isBentley = brand === "bentley";
  const [question, setQuestion] = useState(initialPrompt || "");
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("All");
  const [selectedEngine, setSelectedEngine] = useState("All");
  const initialGreeting = isLamborghini
    ? "Hello! I am your official **Lamborghini India AI Consultant**. Ask me anything about our complete portfolio\u2014the screaming V10 **Hurac\u00e1n**, Super SUV **Urus**, hybrid V12 flagship **Revuelto**, or our track-focused specials: the **Hurac\u00e1n STO** (640 PS) and **Urus Performante** (657 PS). You can also ask about LDVI chassis control, torque-vectoring all-wheel drive, naturally-aspirated V10/V12 engineering, or on-road calculations."
    : isPorsche
    ? "Hello! I am your official **Porsche India AI Consultant**. Ask me anything about our complete portfolio\u2014the iconic **911 Carrera**, mid-engine **718 Cayman**, benchmark **Macan** compact SUV, full-size **Cayenne**, grand-touring **Panamera**, or our motorsport-derived flagships: the naturally-aspirated **911 GT3** (510 PS), all-wheel-drive **911 Turbo S** (650 PS), and record-setting **Cayenne Turbo GT** (640 PS). You can also ask about PDK dual-clutch gearboxes, Porsche Active Suspension Management, flat-6 engineering, or on-road calculations."
    : isAudi
    ? "Hello! I am your official **Audi India AI Consultant**. Ask me anything about our complete portfolio\u2014the **A4** progressive sedan, quattro-equipped **A6**, compact **Q3**, benchmark **Q5**, flagship 7-seater **Q7**, coupe-SUV halo **Q8**, or our Audi Sport performance flagships: the **RS5** (450 PS 2.9 TFSI V6) and **RS Q8** (600 PS 4.0 TFSI V8). You can also ask about TFSI engines, quattro all-wheel drive, 5-Star Euro NCAP safety, or on-road calculations."
    : isVW
      ? "Hello! I am your official **Volkswagen India AI Consultant**. Ask me anything about our complete portfolio\u2014the **Virtus** performance sedan, **Taigun** dynamic SUV, **Tiguan 4MOTION** luxury SUV, upcoming **Tayron 7-Seater**, the legendary **Polo & GT TSI**, or our hot-hatch track weapon: the **Golf GTI** (265 PS EA888 EVO4 with VAQ diff) and **Virtus GT Plus**. You can also ask about TSI engines, 5-Star Global NCAP safety scores, or on-road calculations."
      : "Hello! I am your official **\u0160koda Auto India AI Consultant**. Ask me anything about our complete portfolio\u2014the new **Kylaq** compact SUV, **Slavia** sedan, **Kushaq** SUV, executive legend **Octavia**, flagship **Kodiaq 4x4**, executive **Superb**, or our motorsport weapons: the **Octavia vRS** (265 PS EA888 with VAQ diff) and **Kodiaq vRS** (265 PS with 4x4). You can also ask about TSI & TDI performance, 5-Star safety scores, or on-road calculations.";
  const [conversation, setConversation] = useState([
    {
      role: "assistant",
      text: initialGreeting,
    },
  ]);
  const quickPrompts = isLamborghini
    ? [
        "What's the difference between the Huracán EVO and Huracán STO?",
        "Is the Urus practical for a family, or is it just a fast SUV?",
        "What is LDVI and how does it control the chassis?",
        "How does the Revuelto's hybrid V12 compare to the old Aventador?",
        "Huracán vs Revuelto: which should I pick for daily driving?",
        "Tell me about the Urus Performante's Pikes Peak record.",
        "What is the naturally-aspirated V10 like to drive versus a turbo engine?",
      ]
    : isPorsche
    ? [
        "What's the difference between the 911 Carrera and Carrera S?",
        "Is the Cayenne practical for a family, or is it just a fast SUV?",
        "What does PDK mean and how is it different from a regular automatic?",
        "How does the 911 GT3's naturally-aspirated flat-6 compare to the Turbo S?",
        "718 Cayman vs 911 Carrera: which mid-engine layout should I pick?",
        "Tell me about the Cayenne Turbo GT's Nürburgring lap record.",
        "Macan vs Cayenne: which Porsche SUV suits city driving better?",
      ]
    : isAudi
    ? [
        "How does the Audi RS5 quattro sport differential perform on track?",
        "Audi Q5 vs BMW X3 vs Mercedes GLC: What are the key differences?",
        "Explain the Q7's Euro NCAP safety structure and quattro all-wheel drive.",
        "What is quattro all-wheel drive and which Audi models get it standard?",
        "Tell me about the Audi RS Q8's N\u00fcrburgring lap record and 4.0 TFSI V8.",
        "Audi Advantage: What is included in warranty & service packages?",
        "How does the Q3 Sportback compare to the standard Q3 SUV?",
        "Tell me about the Audi RS6 Avant's practicality and 600 PS performance.",
        "What made the Audi A3 a great entry point into Audi ownership?",
        "Is the Audi A8 L worth it over the A6 for a chauffeur-driven flagship?",
      ]
    : isVW
      ? [
          "How does the Golf GTI VAQ mechanical limited-slip differential perform on track?",
          "Virtus GT Plus vs \u0160koda Slavia 1.5 TSI: What are the key differences?",
          "Explain the Taigun 5-Star Global NCAP safety structure and continuous laser welding.",
          "What is Active Cylinder Technology (ACT) on the 1.5L TSI EVO and what mileage does it give?",
          "Tell me about the upcoming Volkswagen Tayron 7-Seater luxury SUV in India.",
          "Volkswagen 4EVER Care: What is included in warranty & maintenance packages?",
          "How does Tiguan 4MOTION all-wheel drive handle snow and heavy monsoon rain?",
        ]
      : [
          "How does the \u0160koda Octavia vRS VAQ limited-slip diff perform on track?",
          "Explain the Kodiaq vRS 265 PS 4x4 launch control and N\xFCrburgring pedigree.",
          "What makes the \u0160koda Octavia liftback and multi-link suspension so iconic?",
          "Tell me about \u0160koda\u2019s 1.8L and 2.0L TDI Turbo-Diesel engines and highway mileage.",
          "Should I pick the Superb 2.0L TSI or 2.0L TDI Diesel for long distance highway touring?",
          "Should I pick Kylaq or Kushaq for daily city commuting & highway trips?",
          "1.0L TSI vs 1.5L TSI EVO with ACT: Which should I buy for Slavia/Kushaq?",
        ];
  const modelOptions = isLamborghini
    ? [
        "All",
        "Huracán STO",
        "Revuelto",
        "Urus Performante",
        "Huracán EVO",
        "Urus S",
      ]
    : isPorsche
    ? [
        "All",
        "911 GT3",
        "911 Turbo S",
        "Cayenne Turbo GT",
        "911 Carrera",
        "718 Cayman",
        "Macan",
        "Cayenne",
        "Panamera",
      ]
    : isAudi
    ? ["All", "RS5", "RS6", "RS Q8", "A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8"]
    : isVW
      ? [
          "All",
          "Golf GTI",
          "Virtus GT Plus",
          "Virtus",
          "Taigun",
          "Tiguan 4MOTION",
          "Tayron",
          "Polo GT",
        ]
      : [
          "All",
          "Octavia vRS",
          "Kodiaq vRS",
          "Kylaq",
          "Slavia",
          "Kushaq",
          "Octavia",
          "Kodiaq",
          "Superb",
        ];
  const engineOptions = isLamborghini
    ? [
        "All",
        "5.2 V10 Huracán (640 PS)",
        "6.5 V12 Hybrid Revuelto (1,015 PS)",
        "4.0 Twin-Turbo V8 Urus (657 PS)",
      ]
    : isPorsche
    ? [
        "All",
        "4.0 NA Flat-6 GT3 (510 PS)",
        "3.7 Twin-Turbo Flat-6 Turbo S (650 PS)",
        "4.0 Twin-Turbo V8 Turbo GT (640 PS)",
        "3.0 Twin-Turbo Flat-6",
        "2.0 Turbo Flat-4",
        "2.0 Turbo (Macan)",
        "3.0 Turbo V6 (Cayenne)",
        "2.9 Twin-Turbo V6 (Panamera)",
      ]
    : isAudi
    ? [
        "All",
        "4.0 TFSI RS Q8 (600 PS)",
        "2.9 TFSI RS5 (450 PS)",
        "2.0 TFSI",
        "2.0 TFSI quattro",
        "3.0 TFSI V6 quattro",
      ]
    : isVW
      ? [
          "All",
          "2.0 TSI GTI (265 PS)",
          "1.0 TSI",
          "1.5 TSI EVO (ACT)",
          "2.0 TSI 4MOTION",
          "2.0 TDI",
        ]
      : [
          "All",
          "2.0 TSI vRS (265 PS)",
          "1.0 TSI",
          "1.5 TSI EVO",
          "2.0 TSI",
          "1.8 TDI",
          "2.0 TDI",
        ];
  const handleAsk = async (promptText) => {
    const query = (promptText || question).trim();
    if (!query || loading) return;
    setConversation((prev) => [...prev, { role: "user", text: query }]);
    setQuestion("");
    setLoading(true);
    try {
      const res = await fetch("/api/ask-skoda-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand,
          question: query,
          model: selectedModel,
          engine: selectedEngine,
        }),
      });
      const data = await res.json();
      if (data.answer) {
        setConversation((prev) => [
          ...prev,
          { role: "assistant", text: data.answer },
        ]);
      } else {
        setConversation((prev) => [
          ...prev,
          {
            role: "assistant",
            text: isLamborghini
              ? "I encountered an issue retrieving the response. All Lamborghini cars in India offer LDVI chassis control, torque-vectoring all-wheel drive on most models, and naturally-aspirated or hybrid engineering."
              : isPorsche
              ? "I encountered an issue retrieving the response. All Porsche cars in India offer PDK dual-clutch or manual transmissions, Porsche Active Suspension Management, and a heritage of motorsport-derived engineering."
              : isAudi
              ? "I encountered an issue retrieving the response. All Audi cars in India offer 5-Star Euro NCAP safety, quattro all-wheel drive on most models, and turbocharged TFSI engines."
              : isVW
                ? "I encountered an issue retrieving the response. All Volkswagen cars in India offer standard 6 airbags, 5-Star crash safety, and turbocharged TSI engines."
                : "I encountered an issue retrieving the response. All \u0160koda cars in India offer standard 6 to 9 airbags, 5-Star crash safety, and turbocharged TSI engines.",
          },
        ]);
      }
    } catch (err) {
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          text: isLamborghini
            ? "Unable to reach the server. Lamborghini India offers the Hurac\u00E1n (from \u20B93.80Cr), Urus (from \u20B94.20Cr), and Revuelto (from \u20B98.90Cr). All feature LDVI chassis control and torque-vectoring all-wheel drive on most models."
            : isPorsche
            ? "Unable to reach the server. Porsche India offers the Macan (from \u20B987.40L), 718 Cayman (from \u20B91.15Cr), Panamera (from \u20B91.68Cr), 911 Carrera (from \u20B91.99Cr), and Cayenne (from \u20B91.31Cr). All feature PDK dual-clutch transmissions and Porsche Active Suspension Management."
            : isAudi
            ? "Unable to reach the server. Audi India offers the A4 (from \u20B946.05L), A6 (from \u20B963.15L), Q3 (from \u20B946.38L), Q5 (from \u20B965.10L), Q7 (from \u20B985.30L), and Q8 (from \u20B91.17Cr). All feature 5-Star Euro NCAP safety and Audi Advantage warranty."
            : isVW
              ? "Unable to reach the server. Volkswagen India offers the Virtus (from \u20B911.56L), Taigun (from \u20B911.70L), Tiguan 4MOTION (from \u20B935.17L), and Golf GTI. All feature 100% 5-Star safety and standard 4EVER Care warranty."
              : "Unable to reach the server. \u0160koda India offers the Kylaq (from \u20B97.89L), Slavia (from \u20B910.69L), Kushaq (from \u20B910.89L), Kodiaq 4x4 (from \u20B939.99L), and Superb (from \u20B954.00L). All feature 100% 5-Star safety pedigree and standard 4-year warranty.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };
  const primaryColor = isBentley ? "green" : isLamborghini ? "yellow" : isPorsche ? "amber" : isAudi ? "red" : isVW ? "blue" : "emerald";
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Bot
              className={`w-6 h-6 ${isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"}`}
            />
            {isLamborghini
              ? "Lamborghini India AI Automotive Advisor"
              : isPorsche
              ? "Porsche India AI Automotive Advisor"
              : isAudi
                ? "Audi India AI Automotive Advisor"
                : isVW
                ? "Volkswagen India AI Automotive Advisor"
                : "\u0160koda India AI Automotive Advisor"}
          </h2>
          <p className="text-sm text-zinc-400">
            Intelligent recommendations, variant matchmaker, competitor
            benchmarks, and ownership costs
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span
            className={`w-2 h-2 rounded-full ${isBentley ? "bg-green-400" : isLamborghini ? "bg-yellow-400" : isPorsche ? "bg-amber-400" : isAudi ? "bg-red-400" : isVW ? "bg-blue-400" : "bg-emerald-400"} animate-pulse`}
          />
          <span>Active Intelligence</span>
        </div>
      </div>

      {/* Filter and Context Pill Selector */}
      <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs">
        <span className="text-zinc-400 font-medium">Focus Car Model:</span>
        <div className="flex flex-wrap items-center gap-1.5">
          {modelOptions.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedModel(m)}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${selectedModel === m ? (m.includes("vRS") || m.includes("GTI") || m.includes("GT") || m.includes("RS") ? "bg-red-600 text-white shadow-sm font-bold" : isBentley ? "bg-green-600 text-white shadow-sm" : isLamborghini ? "bg-yellow-600 text-white shadow-sm" : isPorsche ? "bg-amber-600 text-white shadow-sm" : isAudi ? "bg-red-600 text-white shadow-sm" : isVW ? "bg-blue-600 text-white shadow-sm" : "bg-emerald-600 text-white shadow-sm") : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"}`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 ml-0 sm:ml-4">
          <span className="text-zinc-400 font-medium">Engine:</span>
          {engineOptions.map((e) => (
            <button
              key={e}
              onClick={() => setSelectedEngine(e)}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${selectedEngine === e ? (e.includes("vRS") || e.includes("GTI") || e.includes("RS") ? "bg-red-600 text-white shadow-sm font-bold" : isBentley ? "bg-green-600 text-white shadow-sm" : isLamborghini ? "bg-yellow-600 text-white shadow-sm" : isPorsche ? "bg-amber-600 text-white shadow-sm" : isAudi ? "bg-red-600 text-white shadow-sm" : isVW ? "bg-blue-600 text-white shadow-sm" : "bg-emerald-600 text-white shadow-sm") : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"}`}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Prompt Chips */}
      <div className="space-y-1.5">
        <span className="text-[11px] uppercase font-bold tracking-wider text-zinc-500 block">
          Suggested Consultation Questions:
        </span>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(prompt)}
              className={`text-xs px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 ${isBentley ? "hover:border-green-700/50" : isLamborghini ? "hover:border-yellow-700/50" : isPorsche ? "hover:border-amber-700/50" : isAudi ? "hover:border-red-700/50" : isVW ? "hover:border-blue-700/50" : "hover:border-emerald-700/50"} text-zinc-300 hover:text-white transition-all text-left cursor-pointer`}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Conversation Thread */}
      <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-4 sm:p-6 space-y-4 min-h-[360px] max-h-[580px] overflow-y-auto">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div
                className={`w-8 h-8 rounded-lg ${isBentley ? "bg-green-950 border border-green-700/60 text-green-400" : isLamborghini ? "bg-yellow-950 border border-yellow-700/60 text-yellow-400" : isPorsche ? "bg-amber-950 border border-amber-700/60 text-amber-400" : isAudi ? "bg-red-950 border border-red-700/60 text-red-400" : isVW ? "bg-blue-950 border border-blue-700/60 text-blue-400" : "bg-emerald-950 border border-emerald-700/60 text-emerald-400"} flex items-center justify-center flex-shrink-0`}
              >
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${msg.role === "user" ? (isBentley ? "bg-green-600 text-white" : isLamborghini ? "bg-yellow-600 text-white" : isPorsche ? "bg-amber-600 text-white" : isAudi ? "bg-red-600 text-white" : isVW ? "bg-blue-600 text-white" : "bg-emerald-600 text-white") : "bg-zinc-950 border border-zinc-800 text-zinc-200 shadow-md"}`}
            >
              <div className="whitespace-pre-line space-y-1.5">
                {msg.text.split("\n").map((line, lIdx) => {
                  if (line.startsWith("### ")) {
                    return (
                      <p
                        key={lIdx}
                        className={`font-bold ${isBentley ? "text-green-400" : isLamborghini ? "text-yellow-400" : isPorsche ? "text-amber-400" : isAudi ? "text-red-400" : isVW ? "text-blue-400" : "text-emerald-400"} text-base mt-2 mb-1`}
                      >
                        {line.replace("### ", "")}
                      </p>
                    );
                  }
                  if (line.startsWith("- **") || line.startsWith("* **")) {
                    const parts = line.split("**");
                    return (
                      <p key={lIdx} className="pl-2">
                        <span className="text-white font-semibold">
                          {parts[1]}
                        </span>
                        {parts.slice(2).join("")}
                      </p>
                    );
                  }
                  return <p key={lIdx}>{line}</p>;
                })}
              </div>
            </div>

            {msg.role === "user" && (
              <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 text-zinc-300">
                <Car className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-3 text-zinc-400 text-xs">
            <div
              className={`w-8 h-8 rounded-lg ${isBentley ? "bg-green-950 border border-green-700/60 text-green-400" : isLamborghini ? "bg-yellow-950 border border-yellow-700/60 text-yellow-400" : isPorsche ? "bg-amber-950 border border-amber-700/60 text-amber-400" : isAudi ? "bg-red-950 border border-red-700/60 text-red-400" : isVW ? "bg-blue-950 border border-blue-700/60 text-blue-400" : "bg-emerald-950 border border-emerald-700/60 text-emerald-400"} flex items-center justify-center flex-shrink-0`}
            >
              <RefreshCw className="w-4 h-4 animate-spin" />
            </div>
            <span>
              {isLamborghini
                ? "Consulting Lamborghini naturally-aspirated & hybrid technical specifications & pricing matrix..."
                : isPorsche
                ? "Consulting Porsche motorsport-derived technical specifications & pricing matrix..."
                : isAudi
                  ? "Consulting Audi progressive luxury technical specifications & pricing matrix..."
                  : isVW
                    ? "Consulting Volkswagen German technical specifications & pricing matrix..."
                  : "Consulting \u0160koda technical specifications & pricing matrix..."}
            </span>
          </div>
        )}
      </div>

      {/* Input Form Bar */}
      <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-900 border border-zinc-800">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Ask about ${selectedModel === "All" ? (isBentley ? "any Bentley model" : isLamborghini ? "any Lamborghini model" : isPorsche ? "any Porsche model" : isAudi ? "any Audi model" : isVW ? "any Volkswagen model" : "any \u0160koda model") : selectedModel}, mileage, comparisons, or safety...`}
          className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none"
        />
        <button
          onClick={() => handleAsk()}
          disabled={!question.trim() || loading}
          className={`px-4 py-2 rounded-lg ${isBentley ? "bg-green-600 hover:bg-green-500 shadow-green-900/40" : isLamborghini ? "bg-yellow-600 hover:bg-yellow-500 shadow-yellow-900/40" : isPorsche ? "bg-amber-600 hover:bg-amber-500 shadow-amber-900/40" : isAudi ? "bg-red-600 hover:bg-red-500 shadow-red-900/40" : isVW ? "bg-blue-600 hover:bg-blue-500 shadow-blue-900/40" : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/40"} disabled:opacity-40 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer`}
        >
          <span>Ask</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
