# ⚡ BRZI START - Za nestrpljive!

## 🎯 Za Windows korisnike

### Metoda 1: Double-Click Deploy (NAJBRŽE!)

1. **Dvostruki-klik** na `deploy.bat`
2. Pričekaj da se instalira i builduje
3. Prati upute na ekranu
4. GOTOVO! 🎉

---

### Metoda 2: Copy-Paste u CMD (5 minuta)

1. Pritisni `Win + R`, otkucaj `cmd`, pritisni Enter

2. Copy-paste ovo u CMD:

```batch
cd C:\Users\User\Desktop\pogrebna-sluzba-mir
npm install
npm run build
```

3. Čekaj da se završi...

4. Onda copy-paste ovo:

```batch
npm install -g vercel
vercel login
vercel --prod
```

5. Prati upute, i GOTOVO! 🚀

---

## 📱 Dobio si link tipa:

```
https://pogrebna-sluzba-mir.vercel.app
```

Podijeli ga sa kim hoćeš! Aplikacija je LIVE! ✨

---

## 🆘 Ako nešto ne radi:

### Problem: "npm nije prepoznat"

**Rješenje:** Instaliraj Node.js sa https://nodejs.org
- Preuzmi LTS verziju
- Instaliraj
- Restartuj računar
- Pokušaj ponovo

---

### Problem: "vercel nije prepoznat"

**Rješenje:** 
```batch
npm install -g vercel
```

Zatim pokušaj ponovo.

---

### Problem: Build fails

**Rješenje:**
```batch
cd C:\Users\User\Desktop\pogrebna-sluzba-mir
rmdir /s /q node_modules
del package-lock.json
npm install
npm run build
```

---

### Problem: Ostalo?

Javi mi - pomoći ću ti! 💪

---

## ✅ Checklist prije deploya:

- [ ] Node.js instaliran? (`node --version`)
- [ ] npm radi? (`npm --version`)
- [ ] U pravom folderu? (`cd C:\Users\User\Desktop\pogrebna-sluzba-mir`)
- [ ] Dependencies instalirani? (`npm install`)
- [ ] Build prošao? (`npm run build`)

Sve ✅? Onda:

```batch
vercel --prod
```

I GOTOVO! 🎉🎊🚀

---

**Vrijeme potrebno**: 5-10 minuta  
**Težina**: Jako lako  
**Cijena**: $0 (besplatno!)  

Good luck! 🍀
