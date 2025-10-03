import { Heart } from "lucide-react";

export default function NoFavorites() {
  return (
    <div className="text-center py-12">
      <Heart className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
      <p className="text-xl text-gray-500 dark:text-gray-400">
        No favorites yet. Add some to see them here!
      </p>
    </div>
  );
}
