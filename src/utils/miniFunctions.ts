import { APP_URL } from "@/constants";
import type { Quote } from "@/types";


export const shareQuote = async (quote: Quote) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `✨ ${quote.category} quotes`,
        text: `${quote.text} - ${quote.author}`,
        url: APP_URL,
      });
    } catch {
      copyToClipboard(quote);
    }
  } else {
    copyToClipboard(quote);
  }
};
