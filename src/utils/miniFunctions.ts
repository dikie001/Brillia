import { APP_URL } from "@/constants";
import type { Quote, Story } from "@/types";
import { toast } from "sonner";

// Share Quotes/teasers/stories/quizes etc
export const shareQuote = async (
  item: Quote | Story,
  setCopied: (id: number | null) => void
): Promise<void> => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: ` ✨ ${'category' in item? item.category : 'genre' in item? item.genre : 'Brillia'}`,
        text: `${item.content} - ${item.author}`,
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
  item: Quote | Story,
  setCopied: (id: number | null) => void
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(`"${item}" - ${item.author}`);
    setCopied(item.id);
    setTimeout(() => setCopied(null), 2000);
  } catch {
    console.error("Failed to copy quote");
  }
};
