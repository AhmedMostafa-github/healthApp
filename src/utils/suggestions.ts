import { moods } from "@components/MoodSelector/MoodSelector";

export const getSuggestions = (moodValue: number, sleep: number): string[] => {
  const moodEmoji = moods.find((m) => m.value === moodValue)?.emoji || "😐";

  const suggestions = [
    {
      mood: "😃",
      sleepRange: [6, 12],
      suggestions: [
        "Keep up the good energy!",
        "Share your happiness with someone today.",
      ],
    },
    {
      mood: "🙂",
      sleepRange: [6, 12],
      suggestions: [
        "You're doing great! Consider a fun activity today.",
        "Maybe try something new you've been wanting to do.",
      ],
    },
    {
      mood: "😐",
      sleepRange: [4, 8],
      suggestions: [
        "Take a short walk",
        "Do something relaxing like journaling.",
      ],
    },
    {
      mood: "😕",
      sleepRange: [1, 8],
      suggestions: [
        "Take a power nap",
        "Call a friend or drink some warm tea.",
      ],
    },
    {
      mood: "😡",
      sleepRange: [1, 8],
      suggestions: [
        "Try deep breathing",
        "Step away and take a 10-minute break.",
      ],
    },
  ];

  const match = suggestions.find(
    (item) =>
      item.mood === moodEmoji &&
      sleep >= item.sleepRange[0] &&
      sleep <= item.sleepRange[1]
  );

  return match
    ? match.suggestions
    : ["Stay hydrated", "Be kind to yourself 💛"];
};
