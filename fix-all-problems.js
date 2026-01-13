import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('═══════════════════════════════════════════════════════════');
console.log('  KOMPLETNA ANALIZA I POPRAVKA SVIH PROBLEMA');
console.log('═══════════════════════════════════════════════════════════\n');

let totalFixed = 0;

// Problem 1: Fix @version imports in UI folder
console.log('[1/3] Popravljanje @version importa u ui/ folderu...');
console.log('───────────────────────────────────────────────────────────');
const uiDir = join(__dirname, 'ui');
const uiFiles = readdirSync(uiDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

uiFiles.forEach(file => {
  const filePath = join(uiDir, file);
  let content = readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace all @package@version with just @package
  content = content.replace(/@([a-zA-Z0-9\-\/]+)@[\d\.]+/g, '@$1');
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ ui/${file}`);
    totalFixed++;
  }
});

// Problem 2: Fix wrong import paths in root folder
console.log('\n[2/3] Popravljanje pogrešnih import putanja...');
console.log('───────────────────────────────────────────────────────────');
const rootFiles = readdirSync(__dirname).filter(f => f.endsWith('.tsx'));

const pathFixes = [
  { from: '../utils/mockData', to: './mockData' },
  { from: '../contexts/CartContext', to: './CartContext' },
  { from: '../components/ui/', to: './ui/' },
];

rootFiles.forEach(file => {
  const filePath = join(__dirname, file);
  let content = readFileSync(filePath, 'utf8');
  const original = content;
  
  pathFixes.forEach(fix => {
    content = content.replaceAll(fix.from, fix.to);
  });
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ ${file}`);
    totalFixed++;
  }
});

// Problem 3: Fix sonner and motion imports
console.log('\n[3/3] Provjera sonner i motion importa...');
console.log('───────────────────────────────────────────────────────────');
const allTsxFiles = readdirSync(__dirname).filter(f => f.endsWith('.tsx'));

allTsxFiles.forEach(file => {
  const filePath = join(__dirname, file);
  let content = readFileSync(filePath, 'utf8');
  const original = content;
  
  // Fix sonner imports
  content = content.replace(/from\s+["']sonner@[\d\.]+["']/g, 'from "sonner"');
  
  // Fix motion imports
  content = content.replace(/from\s+["']motion\/react["']/g, 'from "framer-motion"');
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ ${file}`);
    totalFixed++;
  }
});

console.log('\n═══════════════════════════════════════════════════════════');
console.log(`  GOTOVO! Ukupno popravljeno: ${totalFixed} fajlova`);
console.log('═══════════════════════════════════════════════════════════\n');
