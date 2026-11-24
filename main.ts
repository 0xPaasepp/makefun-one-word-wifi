import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Gaslighting";

// The entry word must be a single word, 1-20 characters, non-blank.
if (WORD.length < 1 || WORD.length > 20) {
  throw new Error("word must be 1-20 characters");
}
if (WORD.trim().length === 0) {
  throw new Error("word must be non-blank");
}
if (WORD.trim() !== WORD) {
  throw new Error("word must have no surrounding whitespace");
}
if (/\s/.test(WORD)) {
  throw new Error("word must be a single word");
}
// The word must survive a UTF-8 round-trip unchanged.
if (Buffer.from(WORD, "utf8").toString("utf8") !== WORD) {
  throw new Error("word must survive a UTF-8 round-trip");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
