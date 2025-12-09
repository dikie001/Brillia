import { APP_URL } from "@/constants";
import type { Teaser } from "@/pages/USER/QuickChallenges";
import type { Quote, Story, Twister, Fact } from "@/types";
import { toast } from "sonner";

// Share Quotes/teasers/stories/quizes etc
export const shareQuote = async (
  item: Quote | Story | Twister | Fact | Teaser,
  setCopied: (id: number | null) => void
): Promise<void> => {
  const content =
    "text" in item
      ? item.text
      : "fact" in item
      ? item.fact
      : "question" in item
      ? item.question
      : item.content;
  const author =
    "author" in item ? item.author : "source" in item ? item.source : "Brillia";
  const category =
    "category" in item
      ? item.category
      : "genre" in item
      ? item.genre
      : "Brillia";

  if (navigator.share) {
    try {
      await navigator.share({
        title: ` ✨ ${category}`,
        text: `${content} - ${author !== "Brillia" && author}`,
        url: APP_URL,
      });
    } catch {
      copyToClipboard(item, setCopied);
    }
  } else {
    copyToClipboard(item, setCopied);
    toast.info("This feature only works in mobile devices");
  }
};

// Copy to clipboard
export const copyToClipboard = async (
  item: Quote | Story | Twister | Fact | Teaser,
  setCopied: (id: number | null) => void
): Promise<void> => {
  const content =
    "text" in item
      ? item.text
      : "fact" in item
      ? item.fact
      : "question" in item
      ? item.question
      : item.content;
  const author =
    "author" in item ? item.author : "source" in item ? item.source : "Brillia";

  try {
    await navigator.clipboard.writeText(`"${content}" - ${author}`);
    setCopied(item.id);
    setTimeout(() => setCopied(null), 2000);
  } catch {
    console.error("Failed to copy quote");
  }
};
