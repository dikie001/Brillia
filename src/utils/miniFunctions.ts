import { APP_URL } from "@/constants";
import type { Quote } from "@/types";

interface ShareTypes {
  quote: Quote;
  setCopied: (id: number | null) => void;
}

// Share Quotes
export const shareQuote = async ({ quote, setCopied }: ShareTypes) => {
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
