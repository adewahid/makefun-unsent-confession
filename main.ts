// Unsent: The Micro-Confession Sprint — make.fun entry
// The program writes one two-part micro-confession to /output/entry.txt:
// a "To:" line naming who it was meant for, and the unsent message itself,
// typed exactly as it was once typed and never sent.
import { mkdirSync, writeFileSync } from "node:fs";

// Why this confession: it is too late, not too clever. The engagement night
// is the one moment the words could have mattered, and the cheerful
// "congrats!!" is the mask that proves the sender knew exactly what he was
// burying. Swap the addressee and the whole thing breaks: only someone who
// knew Sara for years could pretend, in two exclamation marks, to be a stranger.
const TO_LINE = "To: Sara";
const MESSAGE =
  `I typed "I still love you" the night you got engaged, then deleted it and sent "congrats!!" like someone who never knew you at all.`;

// The gate, checked here so a bad edit fails loudly instead of silently:
// the whole entry is 1-260 characters and the message itself is at most 200.
if (MESSAGE.length > 200) throw new Error(`message is ${MESSAGE.length} chars, over the 200 cap`);
const ENTRY = [TO_LINE, MESSAGE].join("\n");
if (ENTRY.length + 1 > 260) throw new Error(`entry is ${ENTRY.length + 1} chars, over the 260 cap`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length + 1} chars to /output/entry.txt`);
