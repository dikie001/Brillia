import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Heart,
  Clock,
  Star,
  Filter,
  Sparkles,
  Moon,
  Sun,
  Coffee,
  Feather,
} from "lucide-react";

type Story = {
  id: number;
  title: string;
  content: string;
  genre:
    | "Romance"
    | "Mystery"
    | "Fantasy"
    | "Drama"
    | "Adventure"
    | "Slice of Life";
  mood:
    | "Heartwarming"
    | "Mysterious"
    | "Magical"
    | "Emotional"
    | "Inspiring"
    | "Peaceful";
  readTime: number; // in minutes
  rating: number;
  author: string;
};

const stories: Story[] = [
  {
    id: 1,
    title: "The Last Letter",
    content:
      "Clara found the envelope tucked between the pages of her grandmother's recipe book. Her name was written in shaky handwriting across the front. Inside, a letter began: 'My dearest Clara, if you're reading this, then I've found a way to say goodbye properly...' As she read on, tears blurred her vision. Her grandmother had hidden letters throughout the house—in books, under jewelry boxes, inside photo frames. Each one contained a memory, a piece of advice, or simply 'I love you.' Clara spent the next three days treasure hunting through her childhood home, collecting pieces of her grandmother's heart. The final letter, found in the garden shed among the seed packets, contained the location of a small wooden box buried beneath the old oak tree. Inside was her grandmother's wedding ring and a note: 'For when you find your forever person. Love never truly dies, it just gets passed on.'",
    genre: "Drama",
    mood: "Emotional",
    readTime: 3,
    rating: 4.9,
    author: "Elena Martinez",
  },
  {
    id: 2,
    title: "Coffee Shop Connections",
    content:
      "Every Tuesday at 8:47 AM, the woman in the red coat ordered a double shot espresso, no sugar. Marcus had memorized her order three months ago, but she never seemed to notice him behind the counter. Today was different—she was crying softly into her phone. When she hung up and approached the counter, Marcus slid the espresso across with a small note: 'Bad days need good coffee and kind strangers. This one's on the house.' She looked up, really looked at him for the first time, and smiled through her tears. 'Thank you,' she whispered. The next Tuesday, she arrived at 8:45 AM with a book. 'In case you have time for a story between customers,' she said, placing it on the counter. It was the beginning of the most beautiful chapter neither of them saw coming.",
    genre: "Romance",
    mood: "Heartwarming",
    readTime: 2,
    rating: 4.7,
    author: "James Chen",
  },
  {
    id: 3,
    title: "The Night Painter",
    content:
      "The townspeople of Millbrook woke each morning to find their world a little more beautiful. A mural had appeared on the side of Mrs. Johnson's bakery—sunflowers dancing in an eternal breeze. The old bus stop was now adorned with a breathtaking mountain vista. Children's chalk drawings in the park had been transformed into masterpieces of color and light. No one knew who was responsible for these nocturnal gifts. Sarah, an insomniac who often walked the empty streets, decided to solve the mystery. On a moonless Thursday night, she hid behind the fountain and waited. At 3 AM, a figure emerged from the shadows—her elderly neighbor, Mr. Peterson, who'd lost his wife last spring. With careful, practiced movements, he transformed a blank wall into a garden of memories. Sarah understood then: some people paint to create beauty, others paint to keep love alive.",
    genre: "Slice of Life",
    mood: "Inspiring",
    readTime: 3,
    rating: 4.8,
    author: "David Kim",
  },
  {
    id: 4,
    title: "The Time Keeper's Daughter",
    content:
      "Luna discovered her father's secret on her sixteenth birthday when she accidentally broke his pocket watch. Instead of gears and springs, tiny galaxies spilled onto her bedroom floor, each one containing a frozen moment in time. Her father found her there, kneeling among the scattered stars, and sighed deeply. 'I suppose it's time you knew,' he said. He was a Time Keeper, one of the few guardians responsible for preserving perfect moments before they faded forever. A child's first laugh, a lover's gentle kiss, the exact second when someone realizes they're truly happy—all collected and stored in his impossible watch. But the watch was dying, and with it, all those precious memories would be lost. Luna looked at the tiny worlds glittering on her carpet and made a decision. She began gathering them carefully in her hands, feeling each perfect moment pulse with warmth. 'Then teach me,' she said. 'Show me how to keep them safe.'",
    genre: "Fantasy",
    mood: "Magical",
    readTime: 4,
    rating: 4.6,
    author: "Aria Blackwood",
  },
  {
    id: 5,
    title: "The Museum at Midnight",
    content:
      "Detective Rosa Valdez thought she'd seen everything in her fifteen-year career, but the case of the Metropolitan Museum's moving exhibits was testing that assumption. Security footage showed the same impossible thing every night: at exactly midnight, the statues left their pedestals and the paintings stepped out of their frames. The guards insisted they were telling the truth, but Rosa remained skeptical until she saw it herself. The marble bust of Caesar nodded at her as she passed. The medieval knight's armor turned its head to follow her movement. In the Egyptian wing, she found them all gathered around the sarcophagus of a young pharaoh, as if paying their respects. The pharaoh's spirit, barely visible in the moonlight streaming through the skylights, smiled sadly at Rosa. 'We remember him,' the spirit whispered. 'Every night, we remember those who can no longer remember themselves.' Rosa realized this wasn't a case to solve—it was a mystery to honor.",
    genre: "Mystery",
    mood: "Mysterious",
    readTime: 4,
    rating: 4.5,
    author: "Miguel Santos",
  },
  {
    id: 6,
    title: "The Paper Airplane",
    content:
      "Eight-year-old Tommy was bored during math class when he folded his worksheet into a paper airplane. Instead of throwing it across the room like usual, something made him write a message on the wing: 'Hi, I'm Tommy. Math is hard. Are you having a good day?' He launched it out the open window and watched it soar across the playground. Three days later, during recess, he found a paper airplane on his desk with a message written in careful cursive: 'Hi Tommy, I'm Mrs. Chen from the office. Math was hard for me too when I was eight. Yes, I'm having a wonderful day now, thank you for asking. Keep trying!' What started as classroom mischief became a school-wide phenomenon. Paper airplanes carried messages of encouragement between students and teachers, between shy kids and potential friends, between anyone who needed to know that someone else was thinking of them. The principal decided that some rules were meant to be beautifully broken.",
    genre: "Slice of Life",
    mood: "Heartwarming",
    readTime: 2,
    rating: 4.9,
    author: "Lisa Park",
  },
];

const genreColors = {
  Romance: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  Mystery:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Fantasy:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  Drama: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Adventure:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Slice of Life":
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
};

const moodIcons = {
  Heartwarming: Heart,
  Mysterious: Moon,
  Magical: Sparkles,
  Emotional: Coffee,
  Inspiring: Sun,
  Peaceful: Feather,
};

export default function MiniStories() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [readStories, setReadStories] = useState<Set<number>>(new Set());
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const markAsRead = (id: number) => {
    setReadStories(new Set([...readStories, id]));
  };

  const filteredStories =
    filter === "All"
      ? stories
      : filter === "Favorites"
      ? stories.filter((story) => favorites.has(story.id))
      : stories.filter(
          (story) => story.genre === filter || story.mood === filter
        );

  const filters = [
    "All",
    "Favorites",
    "Romance",
    "Mystery",
    "Fantasy",
    "Drama",
    "Adventure",
    "Slice of Life",
    "Heartwarming",
    "Magical",
    "Inspiring",
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedStory !== null) {
        setSelectedStory(null);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedStory]);

  const selectedStoryData = selectedStory
    ? stories.find((s) => s.id === selectedStory)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-violet-100 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900 text-gray-900 dark:text-gray-100 p-6">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-300 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <BookOpen className="w-12 h-12 text-amber-600 dark:text-amber-400" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-spin" />
            </div>
            <h1 className="text-6xl font-black bg-gradient-to-r from-amber-600 via-rose-600 to-violet-600 bg-clip-text text-transparent">
              Mini Stories
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Brief tales that linger in your heart long after the last word
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                <BookOpen className="w-4 h-4 inline mr-2" />
                {stories.length} Stories
              </span>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                <Star className="w-4 h-4 inline mr-2" />
                Read: {readStories.size}
              </span>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
              <span className="text-sm font-bold text-pink-600 dark:text-pink-400">
                <Heart className="w-4 h-4 inline mr-2" />
                Favorites: {favorites.size}
              </span>
            </div>
          </div>
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === filterOption
                  ? "bg-gradient-to-r from-rose-500 to-violet-500 text-white shadow-lg scale-105 shadow-rose-200 dark:shadow-rose-900"
                  : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-rose-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg hover:scale-105 border border-white/20"
              }`}
            >
              <Filter className="w-3 h-3 inline mr-2" />
              {filterOption}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story, index) => {
            const MoodIcon = moodIcons[story.mood];
            const isRead = readStories.has(story.id);
            const isFavorite = favorites.has(story.id);

            return (
              <div
                key={story.id}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  setSelectedStory(story.id);
                  markAsRead(story.id);
                }}
              >
                {/* Story Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MoodIcon className="w-6 h-6 text-amber-500" />
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          genreColors[story.genre]
                        }`}
                      >
                        {story.genre}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(story.id);
                    }}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isFavorite
                        ? "text-pink-500 bg-pink-100 dark:bg-pink-900/30 scale-110"
                        : "text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                {/* Story Title */}
                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {story.title}
                </h2>

                {/* Story Preview */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.content.substring(0, 120)}...
                </p>

                {/* Story Metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {story.readTime} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current text-yellow-400" />
                      {story.rating}
                    </span>
                  </div>
                  {isRead && (
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      ✓ Read
                    </span>
                  )}
                </div>

                {/* Author */}
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  by {story.author}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredStories.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
              No stories found
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Try adjusting your filters to discover more stories
            </p>
          </div>
        )}
      </div>

      {/* Story Modal */}
      {selectedStoryData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 px-8 py-6 border-b border-gray-200 dark:border-gray-700 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                      genreColors[selectedStoryData.genre]
                    }`}
                  >
                    {selectedStoryData.genre}
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    {selectedStoryData.mood}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ×
                </button>
              </div>
              <h1 className="text-4xl font-black mt-4 text-gray-800 dark:text-gray-100">
                {selectedStoryData.title}
              </h1>
              <div className="flex items-center gap-6 mt-4 text-sm text-gray-600 dark:text-gray-400">
                <span>by {selectedStoryData.author}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {selectedStoryData.readTime} minute read
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  {selectedStoryData.rating}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="px-8 py-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {selectedStoryData.content}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-b-3xl">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Press ESC to close
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(selectedStoryData.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    favorites.has(selectedStoryData.id)
                      ? "bg-pink-500 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-900/30"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.has(selectedStoryData.id) ? "fill-current" : ""
                    }`}
                  />
                  {favorites.has(selectedStoryData.id)
                    ? "Favorited"
                    : "Add to Favorites"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
