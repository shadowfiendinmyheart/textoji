import { Transformer } from "../interfaces";

export class MarkdownTransformer implements Transformer {
  convert(text: string) {
    return text;
  }
}
