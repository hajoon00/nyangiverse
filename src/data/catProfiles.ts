export interface CatProfile {
  name: string;
  color: string;
  traits: string[];
  description: string;
  funFacts: string[];
}

export const catProfiles: CatProfile[] = [
  {
    name: "Hasom",
    color: "#87CEEB", // Sky blue
    traits: ["Playful", "Curious", "Affectionate", "Independent"],
    description: "A gentle soul who loves to explore and play with toys. Hasom enjoys being around people but also values her alone time.",
    funFacts: [
      "Loves chasing laser pointers",
      "Has a special spot on the windowsill",
      "Makes adorable little chirping sounds when excited",
      "Expert at finding the warmest spots in the house"
    ]
  },
  {
    name: "Haron",
    color: "#8B4513", // Brown
    traits: ["Calm", "Observant", "Loyal", "Gentle"],
    description: "A wise and peaceful cat who observes everything around him. Haron is incredibly loyal to his family and shows affection in subtle ways.",
    funFacts: [
      "Always greets visitors at the door",
      "Has a special meow for when he wants attention",
      "Loves watching birds from the window",
      "Follows his favorite person around the house"
    ]
  }
]; 