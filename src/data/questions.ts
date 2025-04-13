// src/data/questions.ts

export type Choice = 'hasom' | 'haron';

export interface Question {
  id: number;
  text: string;
  choices: {
    text: string;
    type: Choice;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What would you do on a free weekend?",
    choices: [
      { text: "Go out for a walk and refresh myself!", type: 'hasom' },
      { text: "Stay home and relax quietly.", type: 'haron' },
    ],
  },
  {
    id: 2,
    text: "How do you handle meeting someone new?",
    choices: [
      { text: "I take the lead and start the conversation.", type: 'hasom' },
      { text: "I’m reserved — I respond if they approach first.", type: 'haron' },
    ],
  },
  {
    id: 3,
    text: "What’s your working style?",
    choices: [
      { text: "Spontaneous, but I always pull it off.", type: 'hasom' },
      { text: "Calm and organized, I prefer planning ahead.", type: 'haron' },
    ],
  },
  {
    id: 4,
    text: "How do you express emotions?",
    choices: [
      { text: "If I like something, I say it. If I don’t, I show it too.", type: 'hasom' },
      { text: "I keep my emotions to myself.", type: 'haron' },
    ],
  },
  {
    id: 5,
    text: "If it started snowing outside?",
    choices: [
      { text: "I’d be so excited to run out and play!", type: 'hasom' },
      { text: "I hate getting snowed on. I’d rather stay cozy under the blanket.", type: 'haron' },
    ],
  },
  {
    id: 6,
    text: "What’s your snacking habit?",
    choices: [
      { text: "I love trying new treats. I live for snacks!", type: 'hasom' },
      { text: "I don’t care for treats. Regular meals are enough.", type: 'haron' },
    ],
  },
  {
    id: 7,
    text: "What do you do when you're tired?",
    choices: [
      { text: "Flop around in a messy room.", type: 'hasom' },
      { text: "Hide in a quiet corner and stay still.", type: 'haron' },
    ],
  },
];
