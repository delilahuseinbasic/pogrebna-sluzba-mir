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

## 🚀 Pokretanje lokalno

```bash
# Instalacija
npm install

# Development
npm run dev

# Build
npm run build
```

## 📦 Deployment na GitHub Pages

### Koraci:

1. **Kreiraj GitHub repository:**
   - Idi na https://github.com/new
   - Ime repozitorijuma: `pogrebna-sluzba-mir` (bitno!)
   - Public repository
   - Ne inicijalizuj sa README/gitignore

2. **Push kod na GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TVOJE-GITHUB-IME/pogrebna-sluzba-mir.git
   git push -u origin main
   ```

3. **Omogući GitHub Pages:**
   - Idi u Settings > Pages
   - Source: GitHub Actions
   - Sačekaj par minuta da se deployuje

4. **Sajt će biti dostupan na:**
   `https://TVOJE-GITHUB-IME.github.io/pogrebna-sluzba-mir/`

### Automatski deployment:
- Svaki put kad pushneš promjene na `main` branch, sajt će se automatski updateovati

## 💻 Tehnologije

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- React Router v7
- Lucide Icons
- Radix UI

## 📧 Kontakt

Pogrebna služba "Mir"
- Telefon: 033 123 456 (Non-stop)
- Email: info@pogrebnasluzbamir.ba
- Adresa: Ulica Mira 123, Sarajevo

---

© 2024 Pogrebna služba "Mir". Sva prava zadržana.
