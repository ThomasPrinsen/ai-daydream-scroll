
export interface TimelineMoment {
  time: string;
  scene: string;
  question: string;
  options: { text: string }[];
}

export const timelineMoments: TimelineMoment[] = [
  {
    time: "07:00",
    scene: "wake-up",
    question: "Would you let AI pick your outfit based on your day's schedule and the weather?",
    options: [
      { text: "Let AI suggest my outfit" },
      { text: "I'll choose my own clothes" }
    ]
  },
  {
    time: "08:15",
    scene: "calendar",
    question: "Should AI reorder your schedule for maximum efficiency today?",
    options: [
      { text: "Let AI optimize my schedule" },
      { text: "I'll manage my own time" }
    ]
  },
  {
    time: "09:00",
    scene: "commuting",
    question: "Would you let AI choose the fastest, greenest route for your commute?",
    options: [
      { text: "Let AI plan my route" },
      { text: "I'll decide my own way" }
    ]
  },
  {
    time: "11:00",
    scene: "reading",
    question: "Would you let AI summarize and highlight key risks in a policy document?",
    options: [
      { text: "Let AI analyze the document" },
      { text: "I prefer to read it myself" }
    ]
  },
  {
    time: "13:00",
    scene: "lunch",
    question: "Would you let AI recommend lunch based on your health goals and afternoon meetings?",
    options: [
      { text: "Let AI choose my meal" },
      { text: "I'll decide what to eat" }
    ]
  },
  {
    time: "16:00",
    scene: "meeting",
    question: "Would you let AI suggest talking points based on your upcoming meeting guest?",
    options: [
      { text: "Let AI prepare my talking points" },
      { text: "I'll prepare on my own" }
    ]
  },
  {
    time: "18:30",
    scene: "dinner",
    question: "Would you let AI plan and arrange delivery of your dinner?",
    options: [
      { text: "Let AI order dinner for me" },
      { text: "I'll cook or order myself" }
    ]
  },
  {
    time: "21:30",
    scene: "reflection",
    question: "Would you let AI review your day and suggest improvements for tomorrow?",
    options: [
      { text: "Let AI analyze my day" },
      { text: "I prefer to reflect myself" }
    ]
  }
];
