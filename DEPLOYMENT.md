# 🕊️ Pogrebna služba "Mir"

Profesionalna web stranica za pogrebnu službu sa opcijama pregledanja osmrtnica, rezervacije sahrane i online shopa.

## ✨ Funkcionalnosti

- 📰 Pregled osmrtnica sa virtualnom svijećom
- 📅 Rezervacija sahrane (datum, muzičari, fotografi, lokacija)
- 🛒 Kompletan Web Shop (kovčezi, cvijeće, usluge)
- 💳 Sistem plaćanja
- 👤 Korisnički nalog i autentifikacija
- 🗺️ Integrirana Google mapa Sarajeva
- 🎨 Profesionalan dizajn (tamni tonovi, bordo akcenti)

## 🚀 Lokalno pokretanje

```bash
# Instalacija dependencies
npm install

# Development server
npm run dev

# Build za produkciju
npm run build

# Preview build-a
npm run preview
```

## 📦 Deployment na Vercel

### Metoda 1: Vercel CLI (najbrža)

1. Instaliraj Vercel CLI:
```bash
npm i -g vercel
```

2. U folderu projekta pokreni:
```bash
vercel
```

3. Prati upute - automatski će deployati aplikaciju

### Metoda 2: GitHub + Vercel (automatski CI/CD)

1. Kreiraj GitHub repozitorijum i pushaj kod:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tvoj-username/pogrebna-sluzba-mir.git
git push -u origin main
```

2. Idi na [vercel.com](https://vercel.com) i napravi nalog

3. Klikni "New Project" → Import tvoj GitHub repo

4. Vercel će automatski detektovati Vite settings

5. Klikni "Deploy" - gotovo!

### Metoda 3: Netlify

1. Build projekat:
```bash
npm run build
```

2. Idi na [netlify.com](https://netlify.com) i napravi nalog

3. Drag & drop `dist` folder na Netlify

4. Ili povezuj sa GitHub-om za automatski deploy

### Metoda 4: GitHub Pages

1. Izmijeni `vite.config.ts` - postavi `base` na ime repozitorijuma:
```typescript
base: '/pogrebna-sluzba-mir/'
```

2. Instaliraj gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Dodaj u `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## 💻 Tehnologije

- React 18
- TypeScript
- Vite 6
- Tailwind CSS v4
- React Router v7
- Lucide Icons
- Radix UI
- Recharts

## 📁 Struktura projekta

```
pogrebna-sluzba-mir/
├── src/
│   ├── components/     # React komponente
│   ├── contexts/       # Context API (Auth, Cart)
│   ├── utils/          # Helper funkcije
│   └── main.tsx        # Entry point
├── public/             # Statični fajlovi
├── dist/               # Build output (generiše se)
└── package.json
```

## 🔧 Konfiguracija

- `vite.config.ts` - Vite konfiguracija
- `vercel.json` - Vercel deployment settings (SPA rewrites)
- `tsconfig.json` - TypeScript konfiguracija

## 📧 Kontakt

Pogrebna služba "Mir"
- Telefon: 033 123 456 (Non-stop)
- Email: info@pogrebnasluzbamir.ba
- Adresa: Ulica Mira 123, Sarajevo

## 📝 Napomene za deployment

- **Vercel** je preporučena platforma jer automatski detektuje Vite setup
- `vercel.json` omogućava client-side routing (React Router)
- Prije deploya uvijek pokreni `npm run build` da provjeriš da nema grešaka
- Development URL: `http://localhost:5173`
- Production će biti na: `https://tvoj-projekt.vercel.app`

---

© 2024 Pogrebna služba "Mir". Sva prava zadržana.
