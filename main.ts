import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

// Verify the copy: re-read what was written and fail loudly if it differs.
const written = readFileSync(target);
if (written.length !== bytes.length) {
  throw new Error(
    `entry.png byte count mismatch: wrote ${bytes.length}, read back ${written.length}`,
  );
}
if (!written.equals(bytes)) {
  throw new Error("entry.png content mismatch after copy");
}
