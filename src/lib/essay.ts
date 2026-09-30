import fs from "node:fs";
import path from "node:path";

/** Body paragraphs for a published essay, read from the editorial draft. */
export function getEssayParagraphs(slug: string): string[] | null {
  const file = path.join(
    process.cwd(),
    "content/editorial",
    `${slug}-draft.md`,
  );
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const body = raw.includes("\n---\n") ? raw.split("\n---\n").slice(1).join("\n---\n") : raw;
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0 && !paragraph.startsWith("#"));

  return paragraphs.length > 0 ? paragraphs : null;
}
