
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
      { text: "Let AI suggest the perfect outfit" },
      { text: "I'll choose my own clothes" },
      { text: "AI can suggest, but I'll make the final choice" }
    ]
  },
  {
    time: "08:15",
    scene: "calendar",
    question: "Should AI reorder your schedule for maximum efficiency today?",
    options: [
      { text: "Let AI optimize my entire day" },
      { text: "I'll manage my own schedule" },
      { text: "AI can suggest changes, but I decide" }
    ]
  },
  {
    time: "09:00",
    scene: "commuting",
    question: "Would you let AI choose the fastest, greenest route for your commute?",
    options: [
      { text: "Let AI plan my route completely" },
      { text: "I'll take my usual way" },
      { text: "Show me options but I'll decide" }
    ]
  },
  {
    time: "11:00",
    scene: "reading",
    question: "Would you let AI summarize and highlight key risks in a policy document?",
    options: [
      { text: "Let AI analyze and highlight important points" },
      { text: "I prefer to read and understand it myself" },
      { text: "AI can help, but I'll verify everything" }
    ]
  },
  {
    time: "13:00",
    scene: "lunch",
    question: "Would you let AI recommend lunch based on your health goals and afternoon meetings?",
    options: [
      { text: "Let AI choose my meal" },
      { text: "I'll decide what I want to eat" },
      { text: "Show me options that fit my needs" }
    ]
  },
  {
    time: "16:00",
    scene: "meeting",
    question: "Would you let AI suggest talking points based on your upcoming meeting guest?",
    options: [
      { text: "Let AI prepare my talking points" },
      { text: "I'll prepare on my own" },
      { text: "AI can suggest topics, but I'll refine them" }
    ]
  },
  {
    time: "18:30",
    scene: "dinner",
    question: "Would you let AI plan and arrange delivery of your dinner?",
    options: [
      { text: "Let AI order something perfect for me" },
      { text: "I'll cook or choose takeout myself" },
      { text: "AI can suggest options, but I decide" }
    ]
  },
  {
    time: "21:30",
    scene: "reflection",
    question: "Would you let AI review your day and suggest improvements for tomorrow?",
    options: [
      { text: "Let AI analyze my day and optimize tomorrow" },
      { text: "I prefer to reflect on my day myself" },
      { text: "AI can share insights, but I'll decide what to change" }
    ]
  }
];
