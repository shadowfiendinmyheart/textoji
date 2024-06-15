import { simpleAlphabetMap } from "../../../../maps/alphabetMap";
import { Alphabet } from "../../../../types/types";
import { AlphabetTransformer } from "../alphabetTransformer";

describe("alphabetTransformer", () => {
  const simpleAlphabetMapKeys = Object.keys(simpleAlphabetMap) as Alphabet[];

  it("correct transform all symbols", () => {
    const alphabetMapTextArr = [];
    const transformedTextArr = [];
    const alphabetTransformer = new AlphabetTransformer(simpleAlphabetMap);

    for (let index = 0; index < simpleAlphabetMapKeys.length; index++) {
      const element = simpleAlphabetMapKeys[index];
      const alphabetMapElement = simpleAlphabetMap[element];
      alphabetMapTextArr.push(alphabetMapElement);
      const transformedElement = alphabetTransformer.convert(element);
      transformedTextArr.push(transformedElement);
    }

    expect(alphabetMapTextArr.length).toBe(transformedTextArr.length);
    expect(alphabetMapTextArr).toEqual(transformedTextArr);
  });

  it("correct transform with sensitive mode = true", () => {
    const alphabetMapTextArr = [];
    const transformedTextArr = [];
    const text = "HeLlO WoRlD";
    const alphabetTransformer = new AlphabetTransformer(simpleAlphabetMap, true);

    for (let index = 0; index < text.length; index++) {
      const element = text[index] as Alphabet;
      const alphabetMapElement = simpleAlphabetMap[element];
      alphabetMapTextArr.push(alphabetMapElement || element);
      const transformedElement = alphabetTransformer.convert(element);
      transformedTextArr.push(transformedElement);
    }

    expect(alphabetMapTextArr.length).toBe(transformedTextArr.length);
    expect(alphabetMapTextArr).toEqual(transformedTextArr);
  });

  it("correct transform symbols with symbols out of map", () => {
    const alphabetMapTextArr = [];
    const transformedTextArr = [];
    const text =
      "hel!!lo &*(( wsd a こんに    ____  выы ちは世 界loha honua orld 123 321 你好世界";
    const alphabetTransformer = new AlphabetTransformer(simpleAlphabetMap);

    for (let index = 0; index < text.length; index++) {
      const element = text[index] as Alphabet;
      const alphabetMapElement = simpleAlphabetMap[element];
      alphabetMapTextArr.push(alphabetMapElement || element);
      const transformedElement = alphabetTransformer.convert(element);
      transformedTextArr.push(transformedElement);
    }

    expect(alphabetMapTextArr.length).toBe(transformedTextArr.length);
    expect(alphabetMapTextArr).toEqual(transformedTextArr);
  });
});
