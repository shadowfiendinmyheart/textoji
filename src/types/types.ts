export const EngAlphabetMap = {
  q: "q",
  w: "w",
  e: "e",
  r: "r",
  t: "t",
  y: "y",
  u: "u",
  i: "i",
  o: "o",
  p: "p",
  a: "a",
  s: "s",
  d: "d",
  f: "f",
  g: "g",
  h: "h",
  j: "j",
  k: "k",
  l: "l",
  z: "z",
  x: "x",
  c: "c",
  v: "v",
  b: "b",
  n: "n",
  m: "m",
} as const;
type EngAlphabet = keyof typeof EngAlphabetMap;

export const RuAlphabetMap = {
  й: "й",
  ц: "ц",
  у: "у",
  к: "к",
  е: "е",
  н: "н",
  г: "г",
  ш: "ш",
  щ: "щ",
  з: "з",
  х: "х",
  ъ: "ъ",
  ф: "ф",
  ы: "ы",
  в: "в",
  а: "а",
  п: "п",
  р: "р",
  о: "о",
  л: "л",
  д: "д",
  ж: "ж",
  э: "э",
  я: "я",
  ч: "ч",
  с: "с",
  м: "м",
  и: "и",
  т: "т",
  ь: "ь",
  б: "б",
  ю: "ю",
  ё: "ё",
} as const;
type RuAlphabet = keyof typeof RuAlphabetMap;

export const SymbolsMap = {
  " ": " ",
  ".": ".",
  ",": ",",
  "!": "!",
  "?": "?",
  ":": ":",
} as const;
type Symbols = keyof typeof SymbolsMap;

export const NumbersMap = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "0": "0",
} as const;
type Numbers = keyof typeof NumbersMap;

export type Alphabet = EngAlphabet | RuAlphabet | Symbols | Numbers;
