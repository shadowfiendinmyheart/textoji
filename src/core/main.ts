import { simpleEmojiMap } from "../maps/emojiMap";
import { Alphabet } from "../types/types";

export const transformText = (text: string, isCaseSensitive: boolean = false) => {
  const splittedText = isCaseSensitive
    ? text.split("")
    : text.toLowerCase().split("");

  const emojiMap = simpleEmojiMap;
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
