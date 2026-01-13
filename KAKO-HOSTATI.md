# 🚀 Kompletna Uputstva za Deployment

## ✅ Što sam sve ispravio:

1. **Importovi** - Ispravio sam sve import putanje da pokazuju na prave fajlove
2. **Vite konfiguracija** - Dodao Tailwind v4 plugin i postavio base path na `/`
3. **Vercel konfiguracija** - Kreiran `vercel.json` za client-side routing
4. **Git ignore** - Dodao `.gitignore` fajl

## 📋 Sada trebaš da uradiš sljedeće:

### KORAK 1: Provjeri da li radi lokalno

Otvori Command Prompt (CMD) ili PowerShell u folderu projekta i pokreni:

```bash
cd C:\Users\User\Desktop\pogrebna-sluzba-mir
npm install
npm run dev
```

Trebalo bi da se otvori aplikacija na `http://localhost:5173`

Ako sve radi, zatvori server sa `Ctrl + C`

---

### KORAK 2: Testiraj build

```bash
npm run build
```

Ako build prođe bez grešaka, znači da je sve OK!

---

### KORAK 3: Deploy na Vercel (Najlakša opcija)

#### 3A: Vercel CLI (PREPORUČENO - najbrže)

```bash
# Instaliraj Vercel CLI globalno
npm install -g vercel

# Uloguj se
vercel login

# Deploy (samo otkucaj "vercel" i pritisni Enter)
vercel

# Za production deploy
vercel --prod
```

Prati upute na ekranu:
- Potvrdi da je ovo novi projekat
- Izaberi svoj Vercel team/account
- Ostavi default settings
- Gotovo! Dobit ćeš URL gdje je aplikacija live

---

#### 3B: Preko Vercel Web Interface (sa GitHub-om)

**1. Pushaj kod na GitHub:**

```bash
# Otvori projekat u Command Prompt
cd C:\Users\User\Desktop\pogrebna-sluzba-mir

# Inicijalizuj git (ako već nije)
git init

# Dodaj sve fajlove
git add .

# Napravi commit
git commit -m "Initial commit - Pogrebna služba Mir"

# Kreiraj repo na github.com prvo, pa:
git remote add origin https://github.com/TVOJ-USERNAME/pogrebna-sluzba-mir.git
git branch -M main
git push -u origin main
```

**2. Deploy sa Vercel:**

- Idi na https://vercel.com
- Napravi nalog (možeš sa GitHub)
- Klikni "New Project"
- Import tvoj GitHub repo
- Vercel će automatski detektovati Vite
- Klikni "Deploy"
- Čekaj 1-2 minute
- **GOTOVO!** Dobit ćeš URL tipa: `https://pogrebna-sluzba-mir.vercel.app`

---

### KORAK 4: Deploy na Netlify (Alternativa)

**Metoda 1 - Drag & Drop:**

```bash
# Build projekat
npm run build
```

- Idi na https://netlify.com
- Napravi nalog
- Drag & drop `dist` folder na Netlify
- Gotovo!

**Metoda 2 - Sa GitHub:**

- Pushaj kod na GitHub (kao gore)
- Conectuj Netlify sa GitHub repom
- Netlify će automatski deployati

---

## 🎯 Koju opciju izabrati?

### 🏆 **NAJBOLJE: Vercel CLI** 
- Najbrže (5 minuta)
- Automatski CI/CD
- Besplatno
- Perfektno za React/Vite

### ✅ **DOBRO: GitHub + Vercel Web**
- Automatski redeploy pri svakom push-u
- Git version control
- Malo duže setup (10-15 min)

### ⚡ **BRZO ALI JEDNOSTAVNO: Netlify Drag & Drop**
- Za testiranje
- Bez git-a
- Ručni redeploy

---

## 📝 Dodatne napomene:

1. **Domain**: Nakon deploya možeš povezati vlastitu domenu (npr. pogrebnasluzbamir.ba)

2. **Environment Variables**: Ako ti trebaju API keys, dodaj ih u Vercel/Netlify dashboard

3. **Analytics**: Vercel nudi besplatne analytics

4. **Custom Domain na Vercel**:
   - Idi u Project Settings → Domains
   - Dodaj svoj domain
   - Slijedi DNS upute

---

## ⚠️ Ako dobiješ grešku:

### "Cannot find module..."
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### "Build failed"
```bash
npm run build
# Pročitaj grešku i javi mi
```

### "404 on page refresh"
- `vercel.json` rješava ovo (već kreiran ✅)

---

## 🎉 Rezultat:

Nakon deploya dobit ćeš URL poput:
- Vercel: `https://pogrebna-sluzba-mir.vercel.app`
- Netlify: `https://pogrebna-sluzba-mir.netlify.app`

I možeš podijeliti sa kim hoćeš! 🚀

---

**Trebuje li pomoć? Samo javi! 💪**
