import { AlphabetTransformer } from "../alphabetTransformer/alphabetTransformer";

export class ComposerTransformer {
  alphabetTransformer?: AlphabetTransformer;
  // atomTransformer will be here
  // markdownTransformer will be here

  constructor(alphabetTransformer?: AlphabetTransformer) {
    this.alphabetTransformer = alphabetTransformer;
  }

  convert(text: string) {
    let finalText = text;

    if (this.alphabetTransformer) {
      finalText = this.alphabetTransformer.convert(text);
    }

    return finalText;
  }
}
