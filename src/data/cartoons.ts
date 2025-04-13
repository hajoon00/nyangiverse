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
    title: "Snow Day Adventure",
    description: "A magical day playing in the snow for the first time.",
    thumbnail: "/images/cartoons/ep1-thumb.jpg",
    images: [
      "/images/cartoons/ep1-1.jpg",
      "/images/cartoons/ep1-2.jpg",
      "/images/cartoons/ep1-3.jpg",
      "/images/cartoons/ep1-4.jpg",
    ],
  },
  {
    id: 2,
    title: "Quiet Moments",
    description: "Finding peace in the little moments of solitude.",
    thumbnail: "/images/cartoons/ep2-thumb.jpg",
    images: [
      "/images/cartoons/ep2-1.jpg",
      "/images/cartoons/ep2-2.jpg",
      "/images/cartoons/ep2-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Treat Time",
    description: "The most exciting time of day - salmon purée time!",
    thumbnail: "/images/cartoons/ep3-thumb.jpg",
    images: [
      "/images/cartoons/ep3-1.jpg",
      "/images/cartoons/ep3-2.jpg",
      "/images/cartoons/ep3-3.jpg",
      "/images/cartoons/ep3-4.jpg",
    ],
  },
  {
    id: 4,
    title: "Tower Climber",
    description: "Scaling new heights on the cat tower.",
    thumbnail: "/images/cartoons/ep4-thumb.jpg",
    images: [
      "/images/cartoons/ep4-1.jpg",
      "/images/cartoons/ep4-2.jpg",
      "/images/cartoons/ep4-3.jpg",
    ],
  }
]; 