import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('═══════════════════════════════════════════════════════════');
console.log('  MEGA FIX - SVE @VERSION IMPORTOVE U SVIM FAJLOVIMA');
console.log('═══════════════════════════════════════════════════════════\n');

let totalFixed = 0;
let totalFiles = 0;

// Function to fix all @version imports in a file
function fixFileImports(filePath, fileName) {
  let content = readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace ALL @package@version patterns with just @package
  // This regex catches:
  // - lucide-react@0.487.0
  // - @radix-ui/react-slot@1.1.2
  // - sonner@2.0.3
  // - class-variance-authority@0.7.1
  // etc.
  content = content.replace(/(['"])((?:@[a-zA-Z0-9\-]+\/)?[a-zA-Z0-9\-]+)@[\d\.]+(['"])/g, '$1$2$3');
  
  // Also fix wrong import paths
  content = content.replace(/from\s+["']\.\.\/utils\/mockData["']/g, 'from "./mockData"');
  content = content.replace(/from\s+["']\.\.\/contexts\/CartContext["']/g, 'from "./CartContext"');
  content = content.replace(/from\s+["']\.\.\/components\/ui\//g, 'from "./ui/');
  
  // Fix motion imports
  content = content.replace(/from\s+["']motion\/react["']/g, 'from "framer-motion"');
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ ${fileName}`);
    totalFixed++;
  }
  totalFiles++;
}

// Fix all .tsx and .ts files in ui folder
console.log('[1/2] Popravljanje ui/ foldera...');
console.log('───────────────────────────────────────────────────────────');
const uiDir = join(__dirname, 'ui');
const uiFiles = readdirSync(uiDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

uiFiles.forEach(file => {
  fixFileImports(join(uiDir, file), `ui/${file}`);
});

// Fix all .tsx files in root folder
console.log('\n[2/2] Popravljanje root foldera...');
console.log('───────────────────────────────────────────────────────────');
const rootFiles = readdirSync(__dirname).filter(f => f.endsWith('.tsx'));

rootFiles.forEach(file => {
  fixFileImports(join(__dirname, file), file);
});

console.log('\n═══════════════════════════════════════════════════════════');
console.log(`  GOTOVO!`);
console.log(`  Pregledano: ${totalFiles} fajlova`);
console.log(`  Popravljeno: ${totalFixed} fajlova`);
console.log('═══════════════════════════════════════════════════════════\n');
