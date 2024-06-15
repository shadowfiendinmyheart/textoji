import { Transformer } from "../interfaces";

export class AtomTransformer implements Transformer {
  convert(text: string) {
    return text;
  }
}
