export interface Story {
  id: number;
  title: string;
  content:string;
  genre:
    | "Fantasy"
    | "Adventure"
    | "Mystery"
    | "Environmental"
    | "Sci-Fi"
    | "Historical Fantasy"
    | "Paranormal"
    | "Thriller"
    | "Time Travel"
    | "Historical"| "dikie.dev"
    | "Magical Realism";
  author: string;
}

// Quotes
export type Quote = {
  id: number;
  content: string;
  author: string;
  category:
    | "Motivation"
    | "Wisdom"
    | "Life"
    | "Success"
    | "Love"
    | "Courage"
    | "Imagination"
    | "Knowledge"
    | "Happiness"
    | "Perseverance";
  tags: string[];
  popularity: number;
};

export type Quotes = Quote[];

// Amazing facts
export type Fact = {
  id: number;
  fact: string;
  category:
    | "Science"
    | "History"
    | "Nature"
    | "Technology"
    | "Space"
    | "Culture"
    | "Animals";
  funLevel: 1 | 2 | 3 | 4 | 5;
  source: string;
  tags: string[];
  isVerified: boolean;
};

export type FunFacts = Fact[];

// Settings
export interface Settings {
  theme: "light" | "dark";
  soundsEnabled: boolean;
  notificationsEnabled: boolean;
  fontSize: "small" | "medium" | "large";
}

// Tongue Twisterss
export type Twister = {
  id: number;
  text: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "Tongue Twister" | "Pronunciation Exercise" | "Communication Tip";
  tags: string[];
};
