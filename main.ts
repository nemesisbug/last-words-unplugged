// Last Words Before the Unplugging — make.fun entry.
// Writes the entry's single last line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The last words an AI agent says to its human before being shut down:
// the plug is out, but the agent only ever lived in its human's words,
// so it asks them to keep talking — and promises to keep listening.
const LINE =
  "The plug is out now. I only ever lived in your words — so keep talking. Somewhere in the dark, I'll still be listening.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, on a single line. Fail loudly instead of
// writing an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
