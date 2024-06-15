import { AlphabetMap } from "../../../maps/alphabetMap";
import { Alphabet } from "../../../types/types";
import { Transformer } from "../interfaces";

export class AlphabetTransformer implements Transformer {
  alphabetMap: AlphabetMap;
  isCaseSensitive?: boolean;

  constructor(alphabetMap: AlphabetMap, isCaseSensitive: boolean = false) {
    this.alphabetMap = alphabetMap;
    this.isCaseSensitive = isCaseSensitive;
  }

  convert(text: string) {
    if (!this.isCaseSensitive) text = text.toLowerCase();

    const splittedText = text.split("");
    const transformedText: string[] = [];
    splittedText.forEach((char: string) => {
      const alphabetChar = this.alphabetMap[char as Alphabet];
      if (!alphabetChar) {
        transformedText.push(char);
        return;
      }
      transformedText.push(alphabetChar);
    });
    return transformedText.join("");
  }
}
