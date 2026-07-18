import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (
      entry.name === 'node_modules' ||
      entry.name === '.git' ||
      entry.name === 'build' ||
      entry.name === '.docusaurus'
    ) {
      continue;
    }
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(mdx?|yml|yaml|tsx?|css|json)$/i.test(entry.name)) {
      targets.push(full);
    }
  }
}

walk(root);

const replacements = [
  [/Ã¢â‚¬â€/g, '—'],
  [/Ã¢â‚¬â€œ/g, '–'],
  [/Ã¢â€\s*â€™/g, '→'],
  [/Ã¢â€ â€™/g, '→'],
  [/â€”/g, '—'],
  [/â€“/g, '–'],
  [/â€™/g, "'"],
  [/â€œ/g, '"'],
  [/â€/g, '"'],
  [/Â·/g, '·'],
];

let fixed = 0;
for (const file of targets) {
  let text = fs.readFileSync(file, 'utf8');
  const original = text;
  for (const [pattern, value] of replacements) {
    text = text.replace(pattern, value);
  }
  // Quote description frontmatter containing em/en dashes
  text = text.replace(/^description:\s*(.+)$/m, (match, value) => {
    if (value.startsWith('"') || value.startsWith("'")) {
      return match;
    }
    if (/[—–]/.test(value)) {
      return `description: "${value.replace(/"/g, '\\"')}"`;
    }
    return match;
  });
  if (text !== original) {
    fs.writeFileSync(file, text, 'utf8');
    fixed += 1;
    console.log(`fixed ${path.relative(root, file)}`);
  }
}

console.log(`files_fixed=${fixed}`);
