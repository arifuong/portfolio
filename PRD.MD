# Product Requirements Document (PRD) — v2 (MVP)
# Personal Portfolio Website

**Project:** Mohamad Arifin Hasbi Portfolio
**Framework:** Astro
**Version:** 2.0 (Revisi — Ramping & Fokus MVP)

---

## Catatan Revisi dari v1

| Isu di v1 | Perubahan di v2 |
|---|---|
| 2 design system beda (hitam-biru vs biru-indigo-cyan) | Digabung jadi 1 palette final |
| GSAP + Lenis + SplitType + parallax + overlap sekaligus | Animasi dipangkas, TAPI velocity scroll & overlapping section tetap dipakai (permintaan revisi) |
| Lighthouse 100 vs animasi berat → kontradiktif | Target realistis: Lighthouse ≥ 90 (turun dari 95 karena velocity scroll + overlap butuh GSAP+Lenis) |
| 9 section (Tech Stack terpisah dari Projects) | Digabung jadi 7 section |
| Future features campur di scope utama | Dipisah ke bagian tersendiri, TIDAK dikerjakan di v1 |

---

## 1. Product Vision

Membangun website portfolio pribadi yang minimalis, profesional, dan cepat menggunakan Astro, untuk mendukung Mohamad Arifin Hasbi melamar posisi magang/junior Software Engineer.

Prioritas v1: **selesai, rapi, cepat dibuka, dan enak dilihat recruiter** — bukan showcase animasi.

---

## 2. Goals

**Business Goals**
- Jadi portfolio utama saat melamar magang/kerja
- Menampilkan kemampuan Full Stack Developer (Laravel, Spring Boot, React)

**User Goals** — pengunjung dapat:
- Mengenal profil & pendidikan
- Melihat 3 proyek akademik beserta tech stack-nya
- Melihat pengalaman kerja (enumerator, operator)
- Download CV
- Menghubungi via Email atau WhatsApp

---

## 3. Technology Stack

| Kategori | Pilihan |
|---|---|
| Framework | Astro (latest stable) |
| Styling | Tailwind CSS v3 |
| Animasi | GSAP + ScrollTrigger (velocity scroll & overlapping section), Lenis Smooth Scroll, CSS transitions untuk elemen ringan |
| Icons | Lucide Icons |
| Deployment | Vercel |
| SEO | astro-seo, sitemap, robots.txt, Open Graph |

**Catatan performa:** GSAP + Lenis dipakai khusus untuk 2 efek: velocity scroll (bagian 16A) dan overlapping section (bagian 16B). Load GSAP hanya di halaman utama, lazy-load setelah First Contentful Paint, supaya tidak memblokir render awal. SplitType & animasi teks karakter-per-karakter TETAP ditunda ke v2 — tidak ada value besar untuk portfolio mahasiswa dan cukup berat.

---

## 4. Design System (Final)

### Color Palette
```
Primary     #000000   — teks utama, tombol primary, background dark mode
Secondary   #0047FF   — aksen, link, badge, highlight, progress
Neutral     #FFFFFF → #F5F5F5 → #6B7280   — background & teks sekunder
Dark BG     #0F172A   — background saat dark mode aktif
```
*(Palette biru-indigo-cyan dari draf awal tidak dipakai — diganti dengan hitam+biru sesuai design system yang sudah kamu tentukan di screenshot)*

### Typography
| Elemen | Font | Weight |
|---|---|---|
| Headline | Space Grotesk | 700 |
| Body | Inter | 400 |
| Label | Inter | 500 |

### Component Style
- Button: Primary (hitam solid), Secondary (outline biru), Inverted, Outlined
- Card: rounded-2xl, shadow soft, padding lega
- Search/Input: rounded-full atau rounded-xl, background abu muda
- Icon button: bentuk bulat (circle)

### Style Direction
Minimalist, professional, high white space, soft shadow — terinspirasi Linear/Vercel tapi disederhanakan untuk kebutuhan portfolio mahasiswa (bukan produk SaaS).

---

## 5. Layout (Final — 7 Section)

```
Navbar
Hero
About
Skills
Projects        (tech stack digabung di sini, per-card)
Experience
Contact
Footer
```

---

## 5A. Animation Strategy — Velocity Scroll & Overlapping Section

Dua efek ini yang mengharuskan GSAP + Lenis tetap dipakai di v1 (bukan cuma CSS):

**Velocity Scroll**
- Section bergerak dengan kecepatan berbeda relatif terhadap kecepatan scroll user (efek depth)
- Urutan: Hero → About → Projects → Contact bergerak dengan rasio kecepatan sedikit berbeda
- Implementasi: GSAP ScrollTrigger `scrub` + Lenis untuk smooth scroll dasar
- Batasan: hanya diterapkan ke background/elemen dekoratif, BUKAN ke teks/konten utama — supaya tetap mudah dibaca dan tidak mengganggu accessibility

**Overlapping Section**
- Hero overlap About, About overlap Skills, Skills overlap Projects, Projects overlap Contact
- Implementasi: negative margin + z-index stacking + GSAP ScrollTrigger `pin` pada transisi antar section
- Batasan: di mobile, efek overlap disederhanakan jadi transisi biasa (fade/slide) — overlap penuh berisiko merusak layout di layar kecil dan menambah CLS (Cumulative Layout Shift)

**Trade-off yang perlu kamu terima:**
- Lighthouse Performance turun ke target ≥ 90 (bukan 95+) karena GSAP+Lenis menambah JS bundle
- Testing ekstra dibutuhkan di berbagai device untuk pastikan tetap 60fps
- Load GSAP secara lazy (setelah konten utama render) supaya FCP tidak ikut terdampak

---

## 6. Hero Section
**Isi:** Nama, "Full Stack Developer / Mahasiswa Teknik Informatika", ringkasan 1 kalimat, badge "IPK 3.64 — STMIK Mardira Indonesia", CTA Download CV + CTA Lihat Proyek, ikon GitHub.

**Animasi:** Fade up saat load, tanpa parallax/character-reveal (hemat performa).

---

## 7. About Section
**Isi:** Ringkasan profesional (dari CV), pendidikan (STMIK Mardira Indonesia, IPK 3.64/4.00, semester 6), highlight mata kuliah relevan.
**Layout:** Teks + statistik kecil (3 Proyek, IPK 3.64, Semester 6).
**Animasi:** Fade up saat scroll (via Intersection Observer / Astro View Transition, bukan GSAP).

---

## 8. Skills Section
**Kategori:** Languages, Frameworks & Libraries, Database, Tools, Concepts (OOP, REST API, MVC, Clean Architecture).
**Komponen:** Badge/pill grid — bukan progress bar (progress bar butuh angka subjektif yang sulit dipertanggungjawabkan di interview).
**Animasi:** Fade + stagger ringan.

---

## 9. Projects Section
Tiga card, masing-masing:
- Judul, deskripsi singkat, badge tech stack, link GitHub

1. **Sistem Informasi Tracer Study Alumni** — Spring Boot, React, MySQL, JWT
2. **Sistem Pre-Order Ketupat Cinta** — Laravel, PHP, MySQL, Tailwind CSS
3. **Sistem Pakar Diagnosa Penyakit Kucing** — CodeIgniter, PHP, MySQL, Certainty Factor

**Hover effect:** scale + shadow (ringan, tanpa tilt/glow kompleks).

---

## 10. Experience Section
Vertical timeline sederhana (CSS border, bukan GSAP line-draw):
- Enumerator — Regsosek BPS (2022–2023)
- Enumerator — Kementerian Koperasi & UKM RI (2023)
- Operator — SPBU (2022–2023)

---

## 11. Contact Section
- Email (dengan tombol copy)
- WhatsApp (+62 858-4665-3147, wa.me link)
- GitHub
- Form kontak sederhana (opsional — bisa pakai Formspree/mailto jika tidak mau setup backend)

---

## 12. Footer
Copyright, social icons, back-to-top.

---

## 13. SEO Requirements
- Semantic HTML (header, nav, main, section, footer)
- Satu H1 saja
- Metadata lengkap: title, description, canonical, Open Graph, Twitter Card
- JSON-LD Schema (Person)
- Sitemap + robots.txt

---

## 14. Performance Target (Realistis)

| Metric | Target v1 |
|---|---|
| Lighthouse Performance | ≥ 90 (diturunkan dari 95 karena GSAP+Lenis) |
| Accessibility | ≥ 95 |
| Best Practices | 100 |
| SEO | 100 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2s |

---

## 15. Accessibility
WCAG AA — keyboard navigation, focus state, ARIA label, contrast ratio ≥ 4.5.

---

## 16. Ditunda ke v2 (Future Features)
Dikerjakan **setelah** v1 live dan dipakai melamar kerja — bukan sekarang:
- SplitType (character/word reveal text animation)
- Magnetic button effect, advanced tilt/glow pada card
- Dark/Light mode toggle
- Blog (Astro Content Collection)
- Multi-language (ID/EN)
- CMS (Sanity/Contentful)
- GitHub contribution graph, project filter, search
- Testimonials, certificate gallery

---

## 17. Folder Structure
```
src
├── assets
├── components
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   ├── Experience.astro
│   ├── Contact.astro
│   └── Footer.astro
├── data
├── layouts
├── pages
│   └── index.astro
└── styles
```

---

## 18. Success Criteria (v1)
- Website live dan bisa diakses publik
- Lighthouse Performance & SEO ≥ 95
- Responsive di mobile, tablet, desktop
- Semua data dari CV (proyek, pengalaman, skill) tampil akurat
- Siap dipakai untuk melamar magang dalam 1–2 minggu pengerjaan