export interface Cartoon {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
}

export const cartoons: Cartoon[] = [
  {
    id: 1,
    title: "Processed Food",
    description: "Hasom loves salmon, but he doesn't like SOME salmon.",
    thumbnail: "/cartoons/ep1-Processed-Food/01.jpg",
    images: [
      "/cartoons/ep1-Processed-Food/01.jpg",
      "/cartoons/ep1-Processed-Food/02.jpg",
      "/cartoons/ep1-Processed-Food/03.jpg",
      "/cartoons/ep1-Processed-Food/04.jpg",
      "/cartoons/ep1-Processed-Food/05.jpg",
    ],
  },
  {
    id: 2,
    title: "Go Out",
    description: "When Introverted meet Extroverted",
    thumbnail: "/cartoons/ep2-Go-Out/03.jpg",
    images: [
      "/cartoons/ep2-Go-Out/01.jpg",
      "/cartoons/ep2-Go-Out/02.jpg",
      "/cartoons/ep2-Go-Out/03.jpg",
      "/cartoons/ep2-Go-Out/04.jpg",
      "/cartoons/ep2-Go-Out/05.jpg",
    ],
  },
  
]; 