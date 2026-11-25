// One-Line Laugh-Off — writes exactly one funny line to /output/entry.txt.
// Node 22, stdlib only. The line is an original one-liner, written for this bounty.
import { mkdirSync, writeFileSync } from "node:fs";

// Candidate (v1): a dead narrator's confession — the twist lands on the last word.
// Shortlist considered and rejected: the smart-fridge breakup ("we need to talk"),
// the AI wedding vows (fiancée marries the chatbot), the bank birthday card
// ("insufficient funds"). The obituary line won: tightest economy, sharpest
// surprise, and a premise nobody has heard before. Final wording (v3, after two
// revisions): "finally" stays — it carries the whole premise in a single word.
const LINE =
  "I finally read the terms and conditions — that's why this is my obituary.";

// Fail loudly rather than submit an invalid entry: the gate requires
// 1–200 characters of UTF-8 text, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
