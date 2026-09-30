# Portfolio Akhmad Nauval

Website portfolio pribadi yang dibuat menggunakan Next.js, TypeScript, dan Tailwind CSS. Website ini digunakan untuk menampilkan informasi diri, skills, dan project yang pernah dibuat, serta informasi kontak.

## Tentang Project

Portfolio ini dibuat sebagai project pembelajaran web development dan pengembangan portfolio siswa. Website dirancang dengan tampilan modern, responsive, dan mudah digunakan pada berbagai ukuran layar.

Di dalam website terdapat beberapa bagian utama, yaitu:

* Home
* About
* Projects
* Skills
* Contact

Selain halaman utama, terdapat halaman khusus untuk menampilkan detail setiap project menggunakan dynamic routing.

## Teknologi yang Digunakan

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Icons
* React Hot Toast

## Fitur

Beberapa fitur yang terdapat pada website:

* Responsive design
* Navbar untuk navigasi website
* Hero section
* About section
* Skills section
* Project section
* Contact section
* Splash screen / loading screen
* Animasi dan transition
* Pencarian project
* Halaman detail project
* Dynamic routing
* Navigasi antar halaman
* Link project dan repository GitHub

## Struktur Component

Project menggunakan component agar kode lebih terstruktur dan mudah dikembangkan.

Beberapa component yang digunakan:

* `HeroSection` untuk bagian utama halaman
* `AboutSection` untuk informasi tentang diri
* `SkillSection` untuk menampilkan kemampuan
* `ProjectSection` untuk menampilkan project
* `ProjectCard` untuk menampilkan informasi setiap project
* `ContactSection` untuk informasi kontak
* `SectionHeader` untuk judul setiap section
* `Footer` untuk bagian footer
* `SplashScreen` untuk loading screen
* `AnimationLayout` untuk mengatur animasi halaman

## Dynamic Routing

Website menggunakan dynamic routing dari Next.js untuk membuat halaman detail project.

Halaman project menggunakan struktur:

`/projek/[id]`

Contoh:

* `/projek/1` → Website SMKN 1 PASURUAN
* `/projek/2` → Project berikutnya
* `/projek/3` → Project berikutnya

Setiap project memiliki halaman detail yang berbeda berdasarkan ID project.

Dynamic route menggunakan nilai `[id]` untuk menentukan project yang akan ditampilkan.

## Data Project

Data project disimpan secara terpisah di:

`src/data/proyek.ts`

Data tersebut berisi informasi seperti:

* ID project
* Judul project
* Deskripsi project
* Gambar project
* Teknologi yang digunakan
* Link project
* Link repository GitHub

Dengan cara ini, data project lebih mudah dikelola dan digunakan kembali pada halaman project maupun halaman detail.

## Project yang Dibuat

### 1. Website SMKN 1 PASURUAN

Website profil sekolah yang dibuat sebagai media informasi digital untuk SMKN 1 PASURUAN.

Website berisi informasi mengenai sekolah dan beberapa halaman yang digunakan untuk menampilkan informasi kepada siswa, orang tua, alumni, calon siswa, dan masyarakat.

Teknologi:

* HTML
* CSS

### 2. Figma

Konsep desain UI/UX untuk platform pembelajaran modern yang dirancang agar kegiatan belajar menjadi lebih menarik dan terorganisasi.

Teknologi:

* UI/UX
* Fgma
* Design

### 3. Management Siswa

Sebuah sistem manajemen siswa berbasis web yang dikembangkan untuk membantu sekolah mengelola data siswa secara efisien.

Teknologi:

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

### 4. Website Portfolio

Website portfolio pribadi yang digunakan untuk menampilkan informasi diri, skills, dan project yang pernah dibuat.

Teknologi:

* Next.js
* TypeScript
* Tailwind CSS

## Responsive Design

Website dibuat menggunakan pendekatan responsive sehingga dapat digunakan pada berbagai ukuran layar, mulai dari smartphone hingga desktop.

Tampilan juga disesuaikan agar tetap nyaman digunakan pada ukuran layar kecil.

## Cara Menjalankan Project

Clone repository:

```bash
git clone https://github.com/akhmadnauval03-droid/Portofolio-Akhmad-Nauval.git
```

Masuk ke folder project:

```bash
cd Portofolio-Akhmad-Nauval
```

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Kemudian buka:

```text
http://localhost:3000
```

## Pengembangan Lanjutan

Pada pengembangan lanjutan portfolio, dilakukan beberapa penambahan fitur dan perbaikan pada website.

### Tailwind CSS Styling

Tailwind CSS digunakan untuk mengatur tampilan website agar lebih responsive dan konsisten.

Penerapannya meliputi:

* Responsive layout
* Flexbox dan Grid
* Typography
* Spacing
* Button
* Card
* Hover effect
* Transition
* Responsive design untuk berbagai ukuran layar

### Penambahan Components

Beberapa component ditambahkan agar kode lebih modular dan mudah digunakan kembali.

Component tersebut meliputi:

* `ProjectCard`
* `SectionHeader`
* `SplashScreen`
* `AnimationLayout`

Dengan penggunaan component, struktur kode menjadi lebih rapi dan mudah dikembangkan.

### Dynamic Route Project

Ditambahkan route dinamis:

`/projek/[id]`

Route ini digunakan untuk membuat halaman detail project berdasarkan ID yang terdapat pada URL.

Data project diambil dari:

`src/data/proyek.ts`

Sehingga setiap project dapat memiliki halaman detail masing-masing tanpa harus membuat halaman baru secara manual untuk setiap project.
