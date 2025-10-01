export interface Story {
  id: number;
  title: string;
  content: string;
  genre: string;
  author: string;
}

// Quotes
export type Quote = {
  id: number;
  content: string;
  author: string;
  category: string;
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
