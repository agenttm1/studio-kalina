# Studio Kalina — demo stranica (TM Studio)

Demo stranica izmišljenog frizerskog studija i brijačnice u Umagu. Portfolio primjer TM Studija:
**svijetla stranica** kojoj je **naručivanje** srce (usluga → osoba → termin → podaci).

> Studio Kalina ne postoji. Adresa, telefoni, osoblje i cijene su primjeri.
> Na dnu stranice stoji napomena da je riječ o demu TM Studija.

## Pokretanje

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # produkcijski build
npm run typecheck  # samo provjera tipova
```

Potreban je Node.js 20.9 ili noviji.

## Paketi

| Paket | Zašto |
|---|---|
| `next`, `react`, `react-dom` | Next.js (App Router) |
| `tailwindcss`, `@tailwindcss/postcss` | Tailwind CSS v4 |
| `framer-motion` | animacije (koraci obrasca, naslovi, traka, nagib kartica) |
| `lenis` | glatko skrolanje |
| `lucide-react` | ikone |
| `typescript`, `@types/*` | tipovi |

Fontovi (Inter s `latin-ext` podskupom, za č, ć, đ, š i ž) učitavaju se preko `next/font` pri buildu.

## Gdje je što

```
src/
├─ data/salon.ts              ← SAV SADRŽAJ: tekstovi, usluge, cijene, osoblje, radno vrijeme, kontakt
├─ lib/
│  ├─ schedule.ts             ← logika termina (radno vrijeme, zauzeti termini, prvi slobodni)
│  └─ ui.ts                   ← zajedničke klase gumba i kontejnera
├─ app/
│  ├─ layout.tsx              ← fontovi, meta podaci, lang="hr"
│  ├─ page.tsx                ← redoslijed sekcija
│  ├─ globals.css             ← paleta u @theme, fokus, reduced-motion
│  ├─ opengraph-image.tsx     ← Open Graph slika generirana iz koda
│  └─ icon.svg                ← favicon
├─ components/
│  ├─ booking/                ← obrazac za naručivanje (stanje, koraci, napredak, sažetak)
│  ├─ sections/               ← Hero, Traka, Cjenik, Tim, Prije/poslije, Prostor, Pitanja, Kontakt
│  ├─ layout/                 ← zaglavlje, donji izbornik na mobitelu, podnožje, logo
│  ├─ illustrations/          ← SVG ilustracije (bez fotografija ljudi)
│  ├─ ui/                     ← naslov koji izranja iz maske, brojač cijena, zaglavlje sekcije
│  ├─ providers/SmoothScroll  ← Lenis + glatko skrolanje do sekcije
│  └─ JsonLd.tsx              ← strukturirani podaci tipa HairSalon
└─ hooks/                     ← trenutno vrijeme, aktivna sekcija, detekcija miša
```

## Prilagodba za pravi salon

1. Promijeni `src/data/salon.ts` — ime, adresu, telefone, `siteUrl`, usluge, osoblje i radno vrijeme.
2. U `copy.footer` ukloni napomenu o demu.
3. U `src/lib/schedule.ts` zamijeni funkciju `busyBlocks` stvarnim podacima iz kalendara salona,
   a u `src/components/booking/Booking.tsx` (funkcija `onSubmit`, korak 4) dodaj slanje narudžbe.

## Tehničke napomene

- Koraci obrasca ulaze sa strane unutar elementa s `overflow: clip`; `html` i `body` također imaju
  `overflow-x: clip`, pa se stranica ne može proširiti ni na Androidu.
- `<fieldset>` u koracima ima `min-w-0` — bez toga se širi na širinu vodoravnog popisa dana.
- Visina heroja je `100svh`; donja traka na mobitelu poštuje `env(safe-area-inset-bottom)`.
- Obrazac radi samo tipkovnicom: odabiri su pravi radio gumbi, Enter ide na sljedeći korak,
  a fokus se pri promjeni koraka premješta na naslov novog koraka.
- Stanje obrasca je samo u React stanju — nema `localStorage`, ništa se ne šalje.
- Sve animacije poštuju `prefers-reduced-motion`.
