# Portofolio Akhmad Nauval

Website portfolio pribadi yang dibuat untuk menampilkan profil, keahlian, project, dan informasi kontak. Website ini dikembangkan menggunakan **Next.js, TypeScript, dan Tailwind CSS** dengan struktur component yang terorganisir serta dynamic route untuk halaman detail project.

## 🌐 Live Website

[Portofolio Akhmad Nauval](https://akhmad-nauval.vercel.app?utm_source=chatgpt.com)

## 👨‍💻 Tentang Project

Website ini merupakan project portfolio pribadi yang dikembangkan sebagai media untuk memperkenalkan diri dan menampilkan hasil project yang telah dibuat.

Portfolio berisi beberapa bagian utama, yaitu:

* Home
* About
* Projects
* Skills
* Contact

Selain halaman utama, website juga memiliki halaman detail project yang menggunakan **dynamic route** berdasarkan ID project.

---

## ✨ Fitur

### 1. Responsive Design

Website dibuat responsive menggunakan **Tailwind CSS**, sehingga tampilan dapat menyesuaikan berbagai ukuran layar seperti:

* Desktop
* Laptop
* Tablet
* Smartphone

### 2. Component-Based Development

Website menggunakan reusable component agar kode lebih terstruktur dan mudah dikembangkan.

Beberapa component yang digunakan antara lain:

* `HeroSection`
* `AboutSection`
* `ProjectSection`
* `ProjectCard`
* `SkillSection`
* `ContactSection`
* `SectionHeader`
* `Footer`
* `SplashScreen`

Penggunaan component membuat setiap bagian website dapat dikembangkan dan digunakan kembali secara lebih mudah.

### 3. Data Project Terstruktur

Informasi project dipisahkan ke dalam file:

```text
src/data/proyek.ts
```

Data project berisi informasi seperti:

* ID
* Nama project
* Deskripsi
* Gambar
* Teknologi
* Link website
* Link GitHub

Dengan cara ini, penambahan project baru dapat dilakukan tanpa harus mengubah struktur utama halaman.

### 4. Dynamic Route Project

Website menggunakan **dynamic route Next.js** untuk menampilkan detail setiap project.

Struktur route:

```text
src/app/projek/[id]/page.tsx
```

Contoh URL:

```text
/projek/1
/projek/2
/projek/3
```

Nilai `[id]` digunakan untuk menentukan project yang akan ditampilkan.

Data project kemudian diambil dari:

```text
src/data/proyek.ts
```

Sehingga setiap project memiliki halaman detailnya masing-masing.

### 5. Tailwind CSS Styling

Tailwind CSS digunakan untuk membuat dan mengatur tampilan website.

Penggunaannya meliputi:

* Layout
* Typography
* Spacing
* Responsive design
* Button
* Card
* Navbar
* Hover effect
* Transition
* Grid dan Flexbox

Penggunaan Tailwind CSS membantu membuat tampilan website lebih konsisten dan responsive.

### 6. Splash Screen

Website memiliki `SplashScreen` yang ditampilkan ketika website pertama kali dibuka.

Splash screen digunakan sebagai tampilan loading sebelum halaman utama ditampilkan.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi    | Penggunaan                      |
| ------------ | ------------------------------- |
| Next.js      | Framework utama website         |
| React        | Pembuatan component             |
| TypeScript   | Penulisan kode dengan tipe data |
| Tailwind CSS | Styling dan responsive design   |
| React Icons  | Icon pada website               |
| Git          | Version control                 |
| GitHub       | Repository project              |
| Vercel       | Deployment website              |

---

## 📁 Struktur Project

Struktur utama project:

```text
Portofolio-Akhmad-Nauval/
│
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   │
│   │   └── projek/
│   │       └── [id]/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── hero/
│   │   ├── project/
│   │   ├── skill/
│   │   └── ui/
│   │
│   └── data/
│       └── proyek.ts
│
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚀 Menjalankan Project

Pastikan **Node.js** sudah terinstall pada komputer.

### 1. Clone Repository

```bash
git clone https://github.com/akhmadnauval03-droid/Portofolio-Akhmad-Nauval.git
```

### 2. Masuk ke Folder Project

```bash
cd Portofolio-Akhmad-Nauval
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Kemudian buka:

```text
http://localhost:3000
```

---

## 📌 Pengembangan Lanjutan

Pada pengembangan lanjutan portfolio, dilakukan beberapa perubahan dan penambahan fitur, yaitu:

1. Menambahkan project baru ke dalam data project.
2. Memisahkan data project ke dalam `src/data/proyek.ts`.
3. Merapikan struktur reusable components.
4. Menggunakan Tailwind CSS untuk styling.
5. Membuat tampilan responsive.
6. Menambahkan halaman detail project.
7. Menggunakan dynamic route `projek/[id]`.
8. Menambahkan Splash Screen.
9. Memperbaiki tampilan bagian Skills.
10. Memperbaiki tampilan bagian Contact.

---

## 🎯 Tujuan Project

Project ini dibuat untuk:

* Memperkenalkan profil diri.
* Menampilkan keahlian di bidang web development.
* Menampilkan project yang telah dibuat.
* Menerapkan penggunaan Next.js dan TypeScript.
* Menerapkan Tailwind CSS dalam pembuatan interface.
* Mempelajari penggunaan reusable component.
* Mempelajari penggunaan dynamic route pada Next.js.
* Menjadi portfolio untuk pengembangan kemampuan di bidang pemrograman.

---

## 👤 Developer

**Akhmad Nauval**

Student of Software Engineering
SMKN 1 Kota Pasuruan

### Skills

* HTML
* CSS
* JavaScript
* TypeScript
* React
* Next.js
* Tailwind CSS
* MySQL
* Basic Python

---

## 📄 License

Project ini dibuat untuk keperluan pembelajaran dan portfolio pribadi.

