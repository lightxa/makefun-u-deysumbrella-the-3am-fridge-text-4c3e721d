import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Fridge Text: the one line a smart fridge texts its owner at 3am.
// One absurd concrete image (the hum), deadpan machine voice, twist last.
const LINE =
  "It's 3am. I've been humming the same note since 2019 and you have never once thanked me.";

// Write exactly the line, no trailing newline, so the file holds 1-140 chars.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
