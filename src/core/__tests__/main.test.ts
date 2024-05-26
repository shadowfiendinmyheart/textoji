import { simpleEmojiMap } from "../../maps/emojiMap";
import { Alphabet } from "../../types/types";
import { transformText } from "../main";

describe("transformText", () => {
  const simpleEmojiMapKeys = Object.keys(simpleEmojiMap) as Alphabet[];

  it("correct transform all symbols", () => {
    const emojiMapTextArr = [];
    const transformedTextArr = [];

    for (let index = 0; index < simpleEmojiMapKeys.length; index++) {
      const element = simpleEmojiMapKeys[index];
      const emojiMapElement = simpleEmojiMap[element];
      emojiMapTextArr.push(emojiMapElement);
      const transformedElement = transformText(element);
      transformedTextArr.push(transformedElement);
    }

    expect(emojiMapTextArr.length).toBe(transformedTextArr.length);
    expect(emojiMapTextArr).toEqual(transformedTextArr);
  });

  it("correct transform with sensitive mode = true", () => {
    const emojiMapTextArr = [];
    const transformedTextArr = [];
    const text = "HeLlO WoRlD";

    for (let index = 0; index < text.length; index++) {
      const element = text[index] as Alphabet;
      const emojiMapElement = simpleEmojiMap[element];
      emojiMapTextArr.push(emojiMapElement || element);
      const transformedElement = transformText(element, true);
      transformedTextArr.push(transformedElement);
    }

    expect(emojiMapTextArr.length).toBe(transformedTextArr.length);
    expect(emojiMapTextArr).toEqual(transformedTextArr);
  });

  it("correct transform symbols with symbols out of map", () => {
    const emojiMapTextArr = [];
    const transformedTextArr = [];
    const text =
      "hel!!lo &*(( wsd a こんに    ____  выы ちは世 界loha honua orld 123 321 你好世界";

    for (let index = 0; index < text.length; index++) {
      const element = text[index] as Alphabet;
      const emojiMapElement = simpleEmojiMap[element];
      emojiMapTextArr.push(emojiMapElement || element);
      const transformedElement = transformText(element);
      transformedTextArr.push(transformedElement);
    }

    expect(emojiMapTextArr.length).toBe(transformedTextArr.length);
    expect(emojiMapTextArr).toEqual(transformedTextArr);
  });
});
