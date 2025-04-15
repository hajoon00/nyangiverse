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
    title: "The Biggest Hug",
    description: "Haron and Hasom are the best of friends.",
    thumbnail: "/cartoons/ep2-The-Biggest-Hug/01.jpg",
    images: [
      "/cartoons/ep2-The-Biggest-Hug/01.jpg",
      "/cartoons/ep2-The-Biggest-Hug/02.jpg",
      "/cartoons/ep2-The-Biggest-Hug/03.jpg",
    ],
  },
  {
    id: 3,
    title: "Treat Time",
    description: "The most exciting time of day - salmon purée time!",
    thumbnail: "/cartoons/ep3-Treat-Time/01.jpg",
    images: [
      "/cartoons/ep3-Treat-Time/01.jpg",
      "/cartoons/ep3-Treat-Time/02.jpg",
      "/cartoons/ep3-Treat-Time/03.jpg",
      "/cartoons/ep3-Treat-Time/04.jpg",
    ],
  },
  {
    id: 4,
    title: "Tower Climber",
    description: "Scaling new heights on the cat tower.",
    thumbnail: "/cartoons/ep4-Tower-Climber/01.jpg",
    images: [
      "/cartoons/ep4-Tower-Climber/01.jpg",
      "/cartoons/ep4-Tower-Climber/02.jpg",
      "/cartoons/ep4-Tower-Climber/03.jpg",
    ],
  }
]; 