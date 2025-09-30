import { APP_URL } from "@/constants";
import type { Quote } from "@/types";
import { toast } from "sonner";

// interface ShareTypes {
//   quote: Quote;
//   setCopied: (id: number | null) => void;
// }

// Share Quotes/teasers/stories/quizes etc
export const shareQuote = async (
  quote: Quote,
  setCopied: (id: number | null) => void
): Promise<void> => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `✨ ${quote.category} quotes`,
        text: `${quote.text} - ${quote.author}`,
        url: APP_URL,
      });
    } catch {
      copyToClipboard(quote, setCopied);
    }
  } else {
    copyToClipboard(quote, setCopied);
    toast.info("This feature only works in mobile devices");
  }
};

// Copy to clipboard
export const copyToClipboard = async (
  quote: Quote,
  setCopied: (id: number | null) => void
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
    setCopied(quote.id);
    setTimeout(() => setCopied(null), 2000);
  } catch {
    console.error("Failed to copy quote");
  }
};
