import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('═══════════════════════════════════════');
console.log('  POPRAVLJANJE SVIH @VERSION IMPORTA');
console.log('═══════════════════════════════════════\n');

const uiDir = join(__dirname, 'ui');
const files = readdirSync(uiDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

console.log(`Pronađeno ${files.length} fajlova...\n`);

let totalFixed = 0;

files.forEach(file => {
  const filePath = join(uiDir, file);
  let content = readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace all @package@version with just @package
  content = content.replace(/@([a-zA-Z0-9\-\/]+)@[\d\.]+/g, '@$1');
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${file} - POPRAVLJENO`);
    totalFixed++;
  } else {
    console.log(`- ${file} - već ok`);
  }
});

console.log('\n═══════════════════════════════════════');
console.log(`  GOTOVO! Popravljeno: ${totalFixed} fajlova`);
console.log('═══════════════════════════════════════\n');
