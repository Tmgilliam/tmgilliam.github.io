import fs from 'node:fs';

const files = [
  'src/components/ProjectCard/index.tsx',
  'src/components/SectionHeading/index.tsx',
  'src/pages/about.tsx',
  'src/pages/architecture.tsx',
  'src/pages/bbi.tsx',
  'src/pages/contact.tsx',
  'src/pages/index.tsx',
  'src/pages/projects.tsx',
  'src/pages/writing.tsx',
];

for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  if (!text.includes('import type {ReactElement}')) {
    text = `import type {ReactElement} from 'react';\n${text}`;
  }
  text = text.replace(/: JSX\.Element/g, ': ReactElement');
  fs.writeFileSync(file, text);
  console.log(`fixed ${file}`);
}
