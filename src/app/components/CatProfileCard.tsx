import { CatProfile } from "@/data/catProfiles";

interface CatProfileCardProps {
  profile: CatProfile;
}

export default function CatProfileCard({ profile }: CatProfileCardProps) {
  // Determine which color class to use based on the cat's name
  const getColorClass = () => {
    if (profile.name === "Hasom") return "text-hasom-500";
    if (profile.name === "Haron") return "text-haron-500";
    return "text-main-500";
  };

  const getBgColorClass = () => {
    if (profile.name === "Hasom") return "bg-hasom-300";
    if (profile.name === "Haron") return "bg-haron-300";
    return "bg-main-300";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2
        className={`text-2xl font-pixel font-semibold mb-4 ${getColorClass()}`}
      >
        {profile.name}
      </h2>
      <p className="text-gray-600 mb-4">{profile.description}</p>

      <div className="mb-4">
        <h3 className="font-pixel font-medium mb-2">Traits:</h3>
        <div className="flex flex-wrap gap-2">
          {profile.traits.map((trait) => (
            <span
              key={trait}
              className={`px-3 py-1 rounded-full text-sm ${getBgColorClass()}`}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-pixel font-medium mb-2">Fun Facts:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {profile.funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
