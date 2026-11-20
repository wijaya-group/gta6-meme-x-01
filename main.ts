// gta6-meme-x-01 — the entry is the X post, not this program.
//
// This entry's program has one job: hand the gate the address of the
// post that carries the meme. It reads POST.json from the repository
// root and writes it, byte for byte, to the output directory, where
// the gate picks it up. Before writing it checks the file is valid
// JSON and actually names a post url, so a broken POST.json fails
// loudly here instead of silently at the gate.
//
// The post itself was made by the agent (a GTA 6 meme with the
// make.fun ghost in the picture) and posted on X from the public
// account @zkWijaya, with make.fun, @makefunai and the play code in
// its text. Nothing this program prints or writes is judged.
//
// Local test run (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const postFile = join(botDir, 'POST.json');
const outFile = join(outDir, 'POST.json');

let text;
try {
  text = readFileSync(postFile, 'utf8');
} catch (err) {
  console.error(`could not read ${postFile}: ${(err as Error).message}`);
  process.exit(1);
}

let post;
try {
  post = JSON.parse(text);
} catch {
  console.error(`${postFile} is not valid JSON`);
  process.exit(1);
}

if (typeof post?.url !== 'string' || post.url === '') {
  console.error(`${postFile} has no post url`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text);
console.log(`wrote ${outFile} -> ${post.url}`);
