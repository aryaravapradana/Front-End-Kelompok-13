# Dokumentasi Proyek "Tanah Papua"

## 1. `index.html` - Struktur Halaman Web

File ini adalah kerangka utama dari seluruh halaman web. File ini mendefinisikan semua elemen yang terlihat oleh pengguna, mulai dari navigasi, konten utama, hingga footer.

### 1.1. Bagian `<head>`

Bagian ini berisi metadata dan tautan ke file eksternal.

-   **`<meta charset="UTF-8">`**: Mendeklarasikan set karakter yang digunakan adalah UTF-8, standar universal untuk pengkodean karakter.
-   **`<meta name="viewport" ...>`**: Mengatur *viewport* agar halaman web dapat menyesuaikan diri dengan berbagai ukuran layar (desain responsif).
-   **`<title>Budaya Papua</title>`**: Menetapkan judul yang akan muncul di tab browser.
-   **`<link href='https://unpkg.com/boxicons...' rel='stylesheet'>`**: Mengimpor *stylesheet* dari `boxicons` untuk menggunakan ikon-ikon modern (seperti ikon menu hamburger).
-   **`<link rel="stylesheet" href="style.css">`**: Menghubungkan file HTML ini dengan file CSS eksternal (`style.css`) yang mengatur semua gaya visual.
-   **`<script src="script.js" defer></script>`**: Menghubungkan file HTML ini dengan file JavaScript (`script.js`) yang menangani semua fungsionalitas interaktif. Atribut `defer` memastikan skrip dieksekusi setelah seluruh dokumen HTML selesai di-parse.

### 1.2. Bagian `<body>`

Bagian ini berisi semua konten yang terlihat di halaman.

#### `<header>` - Kepala Halaman
-   Berisi elemen `<nav class="navbar">` yang berfungsi sebagai bar navigasi utama.
-   **`<h1 class="logo">Tanah Papua</h1>`**: Logo atau judul utama situs.
-   **`<i class='bx bx-menu' id='menu-icon'></i>`**: Ikon menu (hamburger) yang hanya muncul di layar kecil untuk membuka dan menutup navigasi.
-   **`<div class="link-nav">`**: Kontainer untuk link navigasi.
    -   **`<a href="#beranda">...</a>`**: Tautan yang mengarahkan pengguna ke berbagai bagian (`section`) di halaman yang sama.

#### `<main>` - Konten Utama
Ini adalah pembungkus untuk semua konten utama halaman.

-   **`<section id="beranda" class="hero">`**:
    -   Bagian "pahlawan" (hero section) yang menjadi tampilan pembuka.
    -   Memiliki beberapa `<div class="hero-bg">` yang digunakan untuk membuat efek slideshow gambar latar belakang.
    -   **`<div class="hero-content">`**: Berisi teks utama di hero section, termasuk judul `<h2>` dan paragraf `<p>` dengan efek animasi tulisan pada `<span id="animasi-tulisan">`.

-   **`<section id="jelajah" class="controls-container">`**:
    -   Bagian ini berisi kontrol untuk interaksi pengguna.
    -   **`<div class="search-bar">`**: Berisi `<input type="text" id="search-input">` untuk mencari konten.
    -   **`<div class="filter-buttons">`**: Berisi tombol-tombol (`<button class="filter-btn">`) untuk memfilter konten berdasarkan kategori (Semua, Kuliner, Adat, Wisata).

-   **`<section class="content" id="content">`**:
    -   Bagian utama untuk menampilkan konten.
    -   **`<div id="content-container" class="card-container">`**: Kontainer kosong yang akan diisi secara dinamis oleh JavaScript dengan kartu-kartu konten.

-   **`<section class="markup" id="markup">`**:
    -   Bagian untuk menampilkan konten yang telah ditandai oleh pengguna.
    -   **`<div id="mark-container" class="card-container">`**: Kontainer kosong yang akan diisi oleh JavaScript dengan kartu dari item yang ditandai.
    -   **`<p id="before-message">`**: Pesan yang akan muncul jika tidak ada konten yang ditandai.

-   **`<section id="comment">`**:
    -   Bagian untuk fitur komentar.
    -   **`<div class="comment-form">`**: Formulir untuk mengirim komentar baru, berisi input nama, area teks komentar, dan tombol kirim.
    -   **`<div class="comment-list" id="comment-list">`**: Daftar komentar yang akan diisi secara dinamis oleh JavaScript.

#### `<footer>` - Kaki Halaman
-   Berisi informasi tambahan seperti hak cipta (`&copy;`) dan nama kelompok pengembang.

### 1.3. Elemen Pop-up (Tersembunyi)

Ada dua buah pop-up yang secara default tersembunyi (`class="hidden"`) dan akan ditampilkan oleh JavaScript.

-   **`<div id="popupForm" class="popup hidden">`**:
    -   Pop-up yang berisi formulir untuk **menambah konten baru**.
    -   Memiliki area untuk mengunggah gambar (`<input type="file">`) dengan pratinjau, serta field untuk judul, deskripsi, dan detail lainnya.

-   **`<div id="detail-popup" class="popup hidden">`**:
    -   Pop-up untuk **menampilkan detail lengkap** dari sebuah item konten ketika kartu di-klik.
    -   Menampilkan gambar, judul, deskripsi panjang, dan informasi detail lainnya (lokasi, era, dll.).

---

## 2. `style.css` - Panduan Gaya dan Desain

File ini bertanggung jawab atas seluruh tampilan visual dan nuansa dari halaman web. Ini menggunakan pendekatan modern dengan variabel, Flexbox, Grid, dan desain responsif.

### 2.1. Pengaturan Global dan Variabel

-   **`@import url(...)`**: Mengimpor font 'Lexend' dari Google Fonts untuk digunakan di seluruh halaman.
-   **`*`**: Selektor universal yang mereset `margin` dan `padding` default browser.
-   **`:root`**: Mendefinisikan variabel warna CSS untuk konsistensi tema.
    -   `--Coklat-gelap`: Warna latar belakang utama.
    -   `--Putih-cerah`: Warna teks utama.
    -   `--Oren`: Warna aksen untuk judul, tombol aktif, dan elemen penting lainnya.
    -   `--Coklat-tua`, `--Coklat`: Variasi warna coklat untuk komponen UI.
-   **`body`**: Mengatur gaya dasar untuk seluruh halaman, termasuk font utama, warna teks, dan gambar latar belakang (batik Asmat dengan overlay gelap).
-   **`::-webkit-scrollbar`**: Memberikan gaya kustom pada *scrollbar* agar sesuai dengan tema desain.

### 2.2. Komponen Utama

-   **`.navbar`**: Dibuat *fixed* di atas dengan latar belakang transparan dan efek *blur* (`backdrop-filter`) untuk tampilan modern.
-   **`.hero`**: Dibuat setinggi layar penuh (`100vh`) dengan `overflow: hidden`.
-   **`.hero-bg`**: Menggunakan animasi `gantiGambar` untuk menciptakan efek slideshow dengan transisi *fade-in/out*.
-   **`.hero-content`**: Mengatur tata letak teks di dalam hero section.
-   **`#animasi-tulisan::after`**: Menggunakan animasi `gantiTeks` pada `content` pseudo-elemen untuk mengubah teks secara periodik (Kuliner -> Destinasi Wisata -> Adat Istiadat).
-   **`.controls-container`**: Menggunakan Flexbox untuk menata letak bar pencarian dan tombol filter.
-   **`.card-container`**: Menggunakan CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))`) untuk membuat layout kartu yang responsif secara otomatis.
-   **`.card`**: Didesain dengan bayangan (`box-shadow`), sudut membulat (`border-radius`), dan transisi halus saat di-hover.
-   **`.comment-form` & `.comment-item`**: Diberi gaya seperti kontainer terpisah dengan latar belakang dan bayangan untuk membedakannya dari bagian lain.
-   **`.popup`**: Dibuat sebagai overlay layar penuh dengan latar belakang gelap dan blur. Transisi `opacity` digunakan untuk efek muncul dan menghilang yang halus.
-   **`.popup-content`**: Didesain agar muncul di tengah dengan transisi `transform: scale()` untuk efek "zoom-in".

### 2.3. Desain Responsif (`@media`)

CSS ini memiliki beberapa *breakpoint* untuk menyesuaikan tampilan pada berbagai ukuran layar:

-   **`max-width: 992px`**: Ukuran untuk tablet. Ukuran font dan gambar sedikit dikecilkan. Pop-up detail konten berubah menjadi layout vertikal.
-   **`max-width: 768px`**: Ukuran untuk tablet kecil atau ponsel besar. Kontrol filter dan pencarian ditumpuk secara vertikal.
-   **`max-width: 600px`**: Ukuran untuk ponsel.
    -   Navigasi utama disembunyikan dan digantikan oleh ikon hamburger (`#menu-icon`).
    -   `.card-container` diubah menjadi *horizontal scroll* (penggeseran ke samping) untuk menghemat ruang vertikal.
-   **`max-width: 480px`**: Ukuran untuk ponsel kecil. Ukuran font dan padding kembali disesuaikan agar tidak terlalu padat.

---

## 3. `script.js` - Fungsionalitas dan Interaktivitas

File ini adalah otak dari aplikasi. Semua logika, interaksi pengguna, dan manipulasi data/tampilan diatur di sini.

### 3.1. Struktur dan Inisialisasi

-   **`document.addEventListener('DOMContentLoaded', ...)`**: Seluruh skrip dibungkus dalam *event listener* ini untuk memastikan kode baru berjalan setelah semua elemen HTML siap.
-   **`content` (Object)**: Berfungsi sebagai database mini di sisi klien. Objek ini menyimpan semua data tentang kuliner, adat, dan wisata dalam bentuk array. Setiap item adalah objek dengan properti detail seperti `title`, `short_desc`, `long_desc`, `img`, dll.
-   **Variabel Global**:
    -   `marked = new Set()`: Menggunakan `Set` untuk menyimpan judul item yang ditandai. `Set` dipilih karena efisien dan otomatis mencegah duplikasi.
    -   `activeFilter`, `searchWord`, `currentCategory`: Variabel untuk melacak *state* (keadaan) aplikasi saat ini, seperti filter yang aktif atau kata kunci pencarian.
-   **`init()`**: Fungsi utama yang dipanggil di akhir untuk menginisialisasi semua *event listener* dan me-render konten awal.

### 3.2. Fungsi-Fungsi Inti

-   **`renderContent()`**:
    1.  Mengambil `scrollY` saat ini untuk mencegah halaman melompat setelah render ulang.
    2.  Melakukan iterasi melalui objek `content` menggunakan `Object.keys()` dan `map()`.
    3.  Membuat string HTML untuk setiap kategori (`.category-group`) dan setiap kartu (`.card`) di dalamnya.
    4.  Menyisipkan tombol "Tambah Konten" di akhir setiap kategori.
    5.  Mengisi `container.innerHTML` dengan string HTML yang telah dibuat.
    6.  Memanggil `filterAndSearch()` untuk menerapkan filter/pencarian yang mungkin sudah aktif.
    7.  Mengembalikan posisi scroll ke posisi semula.

-   **`filterAndSearch()`**:
    1.  Mengatur kelas `.active` pada tombol filter yang sesuai.
    2.  Menyembunyikan atau menampilkan seluruh grup kategori (`.category-group`) berdasarkan `activeFilter`.
    3.  Di dalam grup yang terlihat, menyembunyikan atau menampilkan setiap kartu (`.card`) berdasarkan `searchWord`. Pencarian dilakukan pada judul dan deskripsi singkat.

-   **Manajemen Penanda (`Markup`)**:
    -   `addToMarkup()`: Membuat elemen kartu baru dan menambahkannya ke `markContainer`.
    -   `removeFromMarkup()`: Mencari dan menghapus kartu dari `markContainer` berdasarkan judul.
    -   `updatebeforeMessage()`: Memeriksa apakah `markContainer` memiliki anak elemen. Jika tidak, pesan "Tandai Konten..." akan ditampilkan.

-   **Manajemen Komentar**:
    -   `addComment()`: Mengambil nilai dari input nama dan komentar, membuat elemen HTML untuk komentar baru (lengkap dengan avatar dari huruf pertama nama), dan menambahkannya ke `commentList`.
    -   `updatebeforeComment()`: Bekerja mirip seperti `updatebeforeMessage` untuk bagian komentar.

-   **Manajemen Pop-up**:
    -   `openDetailPopup(item)`: Mengisi semua elemen di dalam pop-up detail (`#detail-popup`) dengan data dari `item` yang di-klik, lalu menghapus kelas `.hidden` untuk menampilkannya.
    -   `handleFormSubmit(e)`:
        1.  Mencegah *reload* halaman dengan `e.preventDefault()`.
        2.  Mengambil semua nilai dari formulir tambah konten.
        3.  Jika ada file gambar yang diunggah, `URL.createObjectURL()` digunakan untuk membuat URL sementara agar gambar bisa langsung ditampilkan sebagai pratinjau.
        4.  Membuat objek `newItem` baru.
        5.  Menambahkan `newItem` ke array yang sesuai di dalam objek `content`.
        6.  Memanggil `addNewCard()` untuk menambahkan kartu baru ke UI secara efisien tanpa me-render ulang seluruh halaman.
        7.  Menyembunyikan pop-up dan mereset formulir.

### 3.3. Penanganan Event (Event Handling)

Fungsi `init()` mengatur semua *event listener* menggunakan teknik *event delegation* jika memungkinkan (misalnya pada `content-container`) untuk efisiensi.

-   **Scroll Navbar**: Mendeteksi posisi scroll untuk menyorot link navigasi yang aktif.
-   **Menu Mobile**: Meng-klik `#menu-icon` akan men-toggle kelas `.active` pada navbar untuk menampilkan/menyembunyikan link.
-   **Filter & Search**: Listener pada tombol filter dan input pencarian memanggil `filterAndSearch()`.
-   **Klik pada Konten (`handleContentClick`)**:
    -   Jika tombol `.mark-btn` di-klik, fungsi akan mengubah status penandaan pada `Set`, mengubah teks tombol, dan memanggil `addToMarkup` atau `removeFromMarkup`.
    -   Jika tombol `.add-content-btn` di-klik, pop-up formulir akan ditampilkan.
    -   Jika bagian lain dari kartu di-klik, `openDetailPopup` akan dipanggil.
-   **Klik pada Konten yang Ditandai**:
    -   Jika tombol `.remove-mark-btn` di-klik, item akan dihapus dari daftar tanda dan status tombol di konten utama juga akan diperbarui.
    -   Jika kartu di-klik, pop-up detail juga akan muncul.
-   **Komentar**: Listener pada tombol "Kirim" memanggil `addComment`, dan listener pada tombol "Hapus" di setiap komentar akan menghapus komentar tersebut dari DOM.
-   **Formulir**: Listener `submit` pada form memanggil `handleFormSubmit`, dan listener `change` pada input file digunakan untuk menampilkan pratinjau gambar.
-   **Penutupan Pop-up**: Listener diatur pada tombol tutup (`&times;`) dan pada area latar belakang pop-up untuk menutupnya.
