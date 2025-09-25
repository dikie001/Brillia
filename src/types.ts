export interface Story {
  id: number;
  title: string;
  content: string;
  genre: string;
  author: string;
}

export type Quote = {
  id: number;
  text: string;
  author: string;
  category:
    | "Success"
    | "Motivation"
    | "Perseverance"
    | "Happiness"
    | "Courage"
    | "Wisdom"
    | "Innovation"
    | "Leadership"
    | "Love"
    | "Growth"
    | "Action";
  tags: string[];
  popularity: number; 
};

export type Quotes = Quote[];
