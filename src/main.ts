import { simpleAnimatedEmojiMap } from "./emojiMap";
import { Alphabet } from "./types";

export const transformText = (text: string) => {
  const splittedText = text.toLowerCase().split("");
  const emojiMap = simpleAnimatedEmojiMap;
  const transformedText: string[] = [];
  splittedText.forEach((char: string) => {
    const emojiChar = emojiMap[char as Alphabet];
    if (!emojiChar) {
      transformedText.push(char);
      return;
    }
    transformedText.push(emojiChar);
  });
  return transformedText.join("");
};
