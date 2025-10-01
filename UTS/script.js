document.addEventListener('DOMContentLoaded', function () {

  ///////////// INISIALISASI VARIABEL GLOBAL /////////////////////////////
  const marked = new Set();
  let activeFilter = "semua";
  let searchWord = "";

  ///////////// KONTEN /////////////////////////////
  // isi dari content (defaultnya), isinya judul, deskripsi sama gambarnya //
  const content = {
    kuliner: [
      {
        title: "Papeda",
        desc: "Makanan pokok masyarakat Papua yang terbuat dari sagu. Teksturnya kental dan lengket seperti lem dengan rasa yang cenderung tawar, biasanya dinikmati dengan lauk berkuah kaya rempah seperti ikan kuah kuning.",
        img: "image/kuliner/Papeda.jpg"
      },

      {
        title: "Ikan Bakar Manokwari",
        desc: "Hidangan ini berasal dari pesisir Manokwari, menggunakan ikan segar seperti tuna atau tongkol yang dibumbui dengan rempah khas Papua lalu dibakar. Ciri khasnya adalah sambal pedas yang ditumbuk kasar yang disiram di atas ikan.",
        img: "image/kuliner/Ikan-Bakar-Manokwari-1.jpg"
      },

      {
        title: "Udang Selingkuh",
        desc: "Sejenis lobster air tawar dari wilayah Wamena yang memiliki capit besar seperti kepiting. Dagingnya padat, lembut, dan manis, serta biasa diolah dengan cara direbus, dibakar, atau digoreng.",
        img: "image/kuliner/udang-selingkuh.jpg"
      },

      {
        title: "Sate Ulat Sagu",
        desc: "Kuliner ekstrem ini merupakan salah satu makanan favorit masyarakat Papua. Ulat sagu yang kaya protein dipanen dari batang pohon sagu yang sudah tua, kemudian dibakar seperti sate. Rasanya gurih dengan tekstur renyah di luar dan lembut di dalam.",
        img: "image/kuliner/Sate Ulat Sagu, Khas Papua.jpeg"
      },

      {
        title: "Kue Lontar",
        desc: "Kue ini mirip dengan pai susu berukuran besar yang menunjukkan adanya pengaruh kuliner Belanda di Papua. Isiannya terbuat dari campuran telur, susu, dan gula, menghasilkan rasa yang manis dan tekstur yang lembut.",
        img: "image/kuliner/kue lontar.jpeg"
      },

      {
        title: "Sambal Colo-colo",
        desc: "Sambal khas Papua ini tidak diulek, melainkan dibuat dari bahan-bahan mentah seperti irisan cabai, tomat, bawang merah, dan perasan jeruk nipis yang memberikan rasa segar. Sambal ini sangat cocok disajikan sebagai pendamping ikan bakar.",
        img: "image/kuliner/sambal colo colo.png"
      },

      {
        title: "Aunu Senebre",
        desc: "Makanan ini terbuat dari ikan teri nasi yang dicampur dengan parutan kelapa dan daun talas, lalu dikukus. Rasanya gurih dengan tekstur yang agak kering dan sering disantap bersama papeda atau umbi-umbian.",
        img: "image/kuliner/Aunu Senebre.jpg"
      },

      {
        title: "Sagu Lempeng",
        desc: "Camilan ini berbentuk seperti biskuit keras yang terbuat dari sagu. Sagu lempeng sering dinikmati sebagai menu sarapan atau teman minum teh dan kopi.",
        img: "image/kuliner/Sagu_Lempeng.png"
      },

      {
        title: "Ikan Bungkus",
        desc: "Mirip dengan pepes, hidangan ini menggunakan ikan laut yang dibumbui dengan rempah-rempah khas, kemudian dibungkus dengan daun talas dan dimasak. Proses ini membuat daging ikan tetap lembut dan memiliki aroma yang khas.",
        img: "image/kuliner/Ikan bungkus.jpg"
      },

      {
        title: "Martabak Sagu",
        desc: "Berbeda dari martabak pada umumnya, martabak khas Papua ini terbuat dari sagu yang dihaluskan dan dicampur dengan gula merah, kemudian digoreng. Hasilnya adalah kudapan dengan rasa manis dan tekstur yang kenyal.",
        img: "image/kuliner/Martabak_sagu.jpeg"
      }
    ],

    adat: [
      {
        title: "Upacara Bakar Batu",
        desc: "Tradisi penting di Papua yang merupakan ritual memasak bersama oleh warga satu kampung sebagai bentuk syukur, menyambut kebahagiaan, atau mengumpulkan prajurit. Prosesi ini melibatkan pemanasan batu hingga membara, kemudian menumpuk berbagai makanan di atasnya.",
        img: "image/adat/upacara-lempat-batu.jpeg"
      },

      {
        title: "Tradisi Iki Palek (Potong Jari)",
        desc: "Dilakukan oleh Suku Dani sebagai wujud duka cita atau kesedihan yang mendalam ketika ada anggota keluarga dekat yang meninggal dunia. Setiap irisan jari yang berkurang adalah bentuk penghormatan pada orang tua, pasangan, atau saudara yang meninggal.",
        img: "image/adat/Iki-palek.jpg"
      },

      {
        title: "Upacara Tanam Sasi",
        desc: "Upacara adat kematian yang dilakukan oleh Suku Marind-Anim menggunakan kayu Sasi sebagai media utama, yang ditanam selama sekitar 40 hari setelah kematian seseorang dan dicabut setelah 1.000 hari. Ukiran pada kayu Sasi memiliki makna khusus, seperti kehadiran roh leluhur.",
        img: "image/adat/Upacara-Tanam-Sasi.jpeg"
      },

      {
        title: "Upacara Wor",
        desc: "Ritual Suku Biak untuk memohon, mengundang, atau meminta perlindungan kepada penguasa alam semesta. Tradisi ini dipercaya mampu melindungi seseorang dalam setiap peralihan siklus hidupnya.",
        img: "image/adat/upacara-wor.jpeg"
      },

      {
        title: "Tradisi Ararem",
        desc: "Budaya asli Suku Biak yang berarti 'maskawin'. Tradisi ini merupakan prosesi pengantaran maskawin dari calon suami kepada calon istri yang dilakukan secara beramai-ramai, diiringi nyanyian dan tarian tradisional.",
        img: "image/adat/Ararem.jpeg"
      },

      {
        title: "Seni Ukir dan Patung Suku Asmat",
        desc: "Suku Asmat dikenal sebagai ahli dalam seni ukir kayu. Mereka menghasilkan patung-patung yang digunakan untuk berbagai ritual adat dan memiliki makna spiritual yang mendalam, melambangkan hubungan antara manusia dengan leluhur.",
        img: "image/adat/pemahat-suku-asmat.jpg"
      },

      {
        title: "Pakaian Adat Koteka",
        desc: "Pakaian tradisional yang dikenakan oleh laki-laki di beberapa suku Papua, terutama suku yang tinggal di daerah Pegunungan Tengah. Terbuat dari labu yang dikeringkan dan diukir, digunakan untuk menutupi bagian tubuh tertentu, dan menjadi simbol kebanggaan serta identitas budaya.",
        img: "image/adat/katoka.png"
      },

      {
        title: "Upacara Kematian Suku Asmat",
        desc: "Suku Asmat memiliki upacara kematian yang unik, di mana mereka biasanya tidak mengubur mayat anggota suku yang telah meninggal dunia, melainkan memiliki cara tersendiri dalam memperlakukan jenazah.",
        img: "image/adat/Upacara-kematian-suku-asmat.jpeg"
      },

      {
        title: "Tradisi Nasu Palek (Iris Telinga)",
        desc: "Upacara mengiris telinga yang dilakukan oleh masyarakat Suku Dani sebagai wujud rasa duka cita atau sedih ketika ada anggota keluarga yang meninggal dunia, mirip dengan Iki Palek namun pada bagian telinga.",
        img: "image/adat/Nasu-palek.jpg"
      },

      {
        title: "Perkawinan Suku Biak",
        desc: "Masyarakat Suku Biak dikenal gemar menjodohkan anak-anak mereka sejak kecil. Sebelum pernikahan berlangsung, mereka menjalani serangkaian prosesi seperti pinangan (senepen) dan lamaran (fakfuhen), melibatkan penyerahan benda pusaka dan makan bersama.",
        img: "image/adat/pernikahan-suku-biak.jpg"
      }
    ],

    wisata: [
      {
        title: "Raja Ampat",
        desc: "Destinasi mendunia dengan gugusan pulau-pulau kecil dan besar serta keindahan bawah lautnya yang kaya akan biota laut, menjadikannya primadona bagi wisatawan lokal maupun mancanegara.",
        img: "image/wisata/Raja Ampat_ A Secret Paradise - Raja Ampat_ Emerald Mist & Luxury.jpeg"
      },

      {
        title: "Danau Sentani",
        desc: "Danau terbesar di Papua ini menawarkan pemandangan indah dengan pulau-pulau kecil yang ditumbuhi rerumputan hijau, serta udara yang sejuk.",
        img: "image/wisata/Danau Sentani, Papua.jpeg"
      },

      {
        title: "Lembah Baliem",
        desc: "Terkenal dengan keindahan alamnya yang unik dan budaya lokal yang menarik, Lembah Baliem adalah rumah bagi Suku Dani yang masih menjaga tradisi leluhur mereka.",
        img: "image/wisata/Hamsa Village, Baliem Valley, Papua_ Indonesia_.jpeg"
      },

      {
        title: "Taman Nasional Teluk Cenderawasih",
        desc: "Merupakan taman nasional laut terbesar di Indonesia, tempat wisatawan dapat menemukan berbagai jenis hewan laut seperti kura-kura, penyu, lumba-lumba, dan hiu, serta keindahan terumbu karang.",
        img: "image/wisata/taman-nasional-teluk-cendrawasih-1024x683.jpg"
      },

      {
        title: "Danau Paniai",
        desc: "Danau ini terletak di ketinggian 1.700 mdpl dengan udara sejuk dan pemandangan pegunungan yang indah, serta air danau yang biru tua dan jernih, menawarkan ketenangan alam yang memukau.",
        img: "image/wisata/Danau Paniai, Destinasi Wisata Dunia Di Papua.jpeg"
      },

      {
        title: "Pegunungan Arfak",
        desc: "Menawarkan udara sejuk pegunungan dan danau-danau menawan seperti Danau Anggi Giji dan Danau Anggi Gida, menjadikannya tempat ideal untuk trekking dan menikmati keindahan alam.",
        img: "image/wisata/pegunungan-arfak.jpeg"
      },

      {
        title: "Pantai Bosnik",
        desc: "Pantai ini menyuguhkan hamparan pasir putih yang luas, air laut biru jernih, keindahan bawah laut dengan koral, dan deretan pohon kelapa, cocok untuk bersantai dan snorkeling.",
        img: "image/wisata/Pantai Bosnik, Destinasi wisata di Pulau Biak, yang Wajib Kamu Kunjungi.jpeg"
      },

      {
        title: "Air Terjun Wafsarak",
        desc: "Berada di Kota Biak Numfor, air terjun ini memiliki air berwarna biru kehijauan yang bersih dan jernih, menawarkan suasana alami yang menyegarkan.",
        img: "image/wisata/Air Terjun Wafsarak, Biak, Papua.jpeg"
      },

      {
        title: "Pulau Mansinam",
        desc: "Pulau ini memiliki nilai sejarah penting sebagai tempat masuknya Injil di Papua pada tahun 1855, menjadikannya situs ziarah dan destinasi wisata religi.",
        img: "image/wisata/Patung Yesus Kristus, Pulau Mansinam, Manokwari, Papua Barat.jpeg"
      },

      {
        title: "Pantai Harlem",
        desc: "Disebut sebagai surga tersembunyi di Distrik Depapre, Kabupaten Jayapura, dengan pasir putih membentang dan perairan dangkal yang aman untuk berenang, menawarkan ketenangan dan keindahan alam yang masih alami.",
        img: "image/wisata/4 Keseruan di Pantai Harlem Papua, Spot Sempurna Mencari Ketenangan Jiwa - Pigiblog.jpeg"
      }
    ]
  };

  ///////////// LINK NAVIGASI /////////////////////////////
  //ngasih tau saat ini ada di section yang mana, setelah itu ditandain aktif. jadi nav-linknya nyala waktu ada di dalam section tertentu
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".link-nav a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // ganti hamburger button ke x kalau dibuka, kalo ditutup balik lagi ke hamburger bar (buat media query dengan width kecil)
  let menuIcon = document.getElementById('menu-icon');
  let navbar = document.querySelector('.navbar');
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  ///////////// CONTENT CONTAINER /////////////////////////////
  // nambahin konten pada div dengan id 'content-container'. berdasarkan object content diatas.
  // dia akan ngerender konten ke masing masing kategori. dengan melakukan generate HTML untuk setiap kategori (kuliner, adat, wisata) berupa card 
  // (yang berisi gambar, judul, deskripsi) disertai tombol Tandai untuk markup dan juga tombol Tambah konten secara terpisah di akhir.
  const container = document.getElementById('content-container');
  container.innerHTML = Object.keys(content).map(cont => `
        <div class="category-group" data-category="${cont}">
            <h2 class="category-title">${cont.charAt(0).toUpperCase() + cont.slice(1)} Papua</h2>
            <div class="card-container">
                ${content[cont].map(item => `
                    <div class="card">
                        ${item.img ? `<img src="${item.img}" alt="${item.title}">` : ""}
                        <h3>${item.title} </h3> 
                        <p>${item.desc}</p>
                        <button class="mark-btn">Tandai</button>
                    </div>
                `).join('')}
            </div>
            <button class="add-content-btn" data-category="${cont}">+ Tambah ${cont}</button>
        </div>
    `).join('');

  ///////////// FILTER BUTTON /////////////////////////////
  // Tombol filter, nunjukkin grup konten berdasarkan kategori data 
  // nantinya kita bisa milih kategori (semua, kuliner, adat, wisata).
  // Kalau 'semua', maka semua grup ditampilkan. kalau kategori lain, hanya grup itu yang tampil.

  const filterBtns = document.querySelectorAll('.filter-btn');
  const groups = document.querySelectorAll('.category-group');
  document.querySelector('.filter-btn[data-category="semua"]').classList.add('active');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      groups.forEach(group => {
        if (category === 'semua' || group.dataset.category === category) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  ///////////// SEARCH BAR /////////////////////////////
  // Mencari berdasarkan judul atau deskripsi. Kalau sesuai query maka card ditampilkan, kalau tidak maka card disembunyikan.
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    searchWord = searchInput.value.toLowerCase(); // simpan query terbaru
    filterAndSearch();
    const word = searchInput.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();
      if (title.includes(word) || desc.includes(word)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });

  ///////////// MARKUP(TANDAI) /////////////////////////////
  // buat nyimpen data yang ditandai.
  const markContainer = document.getElementById('mark-container');
  const beforeMessage = document.getElementById('before-message');
  function addToMarkup(item) { // bikin card baru di area Tandai.
    // Cek apakah sudah ada card dengan judul yang sama
    const exists = Array.from(markContainer.querySelectorAll('.card h3')).some(h3 => h3.textContent === item.title);
    if (exists) return;
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      ${item.img ? `<img src="${item.img}" alt="${item.title}">` : ""}
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <button class="remove-mark-btn">Hapus</button>
    `;
    // Event buat hapus mark
    card.querySelector('.remove-mark-btn').addEventListener('click', function () {
      card.remove();
      // Hapus status tandai di card utama
      document.querySelectorAll('.mark-btn.marked').forEach(btn => {
        const parent = btn.closest('.card');
        if (parent && parent.querySelector('h3').textContent === item.title) {
          btn.classList.remove('marked');
          btn.textContent = 'Tandai';
        }
      });
      marked.delete(item.title);
      updatebeforeMessage();
    });
    markContainer.appendChild(card);
    updatebeforeMessage();
  }

  //kalo ga ada item, tampilin tulisan. kalo ada item ganti sama itemnya.
  function updatebeforeMessage() {
    if (markContainer.children.length === 0) {
      beforeMessage.style.display = 'block';
    } else {
      beforeMessage.style.display = 'none';
    }
  }

  document.querySelectorAll('.mark-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parentCard = e.target.closest('.card');
      const title = parentCard.querySelector('h3').textContent;
      const desc = parentCard.querySelector('p').textContent;
      const img = parentCard.querySelector('img') ? parentCard.querySelector('img').src : "";

      if (btn.classList.contains('marked')) {
        btn.classList.remove('marked');
        btn.textContent = "Tandai";
        const markedCards = markContainer.querySelectorAll('.card');
        markedCards.forEach(mc => {
          if (mc.querySelector('h3').textContent === title) {
            mc.remove();
          }
        });
      } else {
        btn.classList.add('marked');
        btn.textContent = "Hapus Tanda";
        addToMarkup({ title, desc, img });
      }
      updatebeforeMessage();
    });
  });

  updatebeforeMessage();

  ///////////// KOMENTAR /////////////////////////////
  const nameInput = document.getElementById('name-input');
  const commentInput = document.getElementById('comment-input');
  const submitComment = document.getElementById('submit-comment');
  const commentList = document.getElementById('comment-list');
  const beforeComment = document.querySelector('.before-comment');

  //kalo ga ada item, tampilin tulisan. kalo ada item ganti sama itemnya
  function updatebeforeComment() {
    if (commentList.querySelectorAll('.comment-item').length === 0) {
      beforeComment.style.display = 'block';
    } else {
      beforeComment.style.display = 'none';
    }
  }

  //event buat nambahin komentar
  submitComment.addEventListener('click', () => {
    const name = nameInput.value.trim() || "Anonim"; //kalo kosong jadi anonim
    const text = commentInput.value.trim();

    if (text !== "") {
      const avatarF = name.charAt(0).toUpperCase(); //Avatar berupa huruf pertama

      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment-item');
      commentDiv.innerHTML = `
          <div class="comment-avatar">${avatarF}</div>
          <div class="comment-content">
            <strong>${name}</strong>
            <p>${text}</p>
          </div>
          <button class="delete-btn">Hapus</button>
        `; //ada juga tombol untuk hapus komentar

      commentList.appendChild(commentDiv);
      nameInput.value = "";
      commentInput.value = "";
      updatebeforeComment();

      //ngehapus komentar
      commentDiv.querySelector('.delete-btn').addEventListener('click', () => {
        commentDiv.remove();
        updatebeforeComment();
      });
    }
  });

  updatebeforeComment();

  ///////////// POP UP FORM /////////////////////////////
  //Munculin popup berupa form ketika mau nambahin konten.
  let currentCategory = null;
  const popup = document.getElementById("popupForm");
  const form = document.getElementById("contentForm");
  const closePopup = document.getElementById("closePopup");

  // buka popup
  document.querySelectorAll(".add-content-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.category;
      document.getElementById("form-title").textContent = `Tambah ${currentCategory}`;
      popup.classList.remove("hidden");
    });
  });

  // tutup popup
  closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("new-title").value;
    const desc = document.getElementById("new-desc").value;
    const file = document.getElementById("new-img").files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imgBase64 = event.target.result;

        // Tambah ke data
        content[currentCategory].push({ title, desc, img: imgBase64 });

        // Render ulang
        renderContent();
      };
      reader.readAsDataURL(file);
    } else {
      // Kalau tidak ada file, tambah tanpa gambar
      content[currentCategory].push({ title, desc, img: null });
      renderContent();
    }

    // Tutup popup, lalu reset form di luar
    popup.classList.add("hidden");
    form.reset();
  });

  ///////////// RENDER CONTENT /////////////////////////////

  // activeFilter diganti sesuai kategori (data-category). Langsung dipanggil filterAndSearch() supaya konten tampil sesuai filter + keyword pencarian.
  function filterButtonsSetUp() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.getAttribute('data-category');
        filterAndSearch();
      });
    });
  }

  function filterAndSearch() {
    const groups = document.querySelectorAll('.category-group');

    groups.forEach(group => {
      // cek filter kategori
      if (activeFilter === "semua" || group.dataset.category === activeFilter) {
        group.style.display = 'block';
      } else {
        group.style.display = 'none';
      }

      // cek search bar untuk setiap card
      group.querySelectorAll('.card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();

        if ((title.includes(searchWord) || desc.includes(searchWord)) &&
          (activeFilter === "semua" || group.dataset.category === activeFilter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });

    // update tombol filter visual
    document.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.getAttribute('data-category') === activeFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }


  // Re-render semua konten dari object content, Ngejaga status filter, ngejaga search bar, Ngejaga item yang sudah ditandai(marked), Bind ulang event tombol (karena elemen baru selalu diganti).
  function renderContent() {
    const scrollY = window.scrollY;

    container.innerHTML = Object.keys(content).map(cont => {
      const cardsHtml = content[cont].map(item => {
        const isMarked = marked.has(item.title);
        return `
        <div class="card">
          ${item.img ? `<img src="${item.img}" alt="${item.title}">` : ""}
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <button class="mark-btn${isMarked ? ' marked' : ''}">
            ${isMarked ? 'Hapus Tanda' : 'Tandai'}
          </button>
        </div>
      `;
      }).join('');

      return `
      <div class="category-group" data-category="${cont}">
        <h2 class="category-title">${cont.charAt(0).toUpperCase() + cont.slice(1)} Papua</h2>
        <div class="card-container">
          ${cardsHtml}
          <button class="add-content-btn" data-category="${cont}">+ Tambah ${cont}</button>
        </div>
      </div>
    `;
    }).join('');

    // bind ulang tombol tambah konten
    document.querySelectorAll(".add-content-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategory = btn.dataset.category;
        document.getElementById("form-title").textContent = `Tambah ${currentCategory}`;
        popup.classList.remove("hidden");
      });
    });

    // bind ulang tombol tandai
    document.querySelectorAll('.mark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const parentCard = e.target.closest('.card');
        const title = parentCard.querySelector('h3').textContent;
        const desc = parentCard.querySelector('p').textContent;
        const img = parentCard.querySelector('img') ? parentCard.querySelector('img').src : "";

        if (btn.classList.contains('marked')) {
          btn.classList.remove('marked');
          btn.textContent = "Tandai";
          marked.delete(title);
          const markedCards = markContainer.querySelectorAll('.card');
          markedCards.forEach(mc => {
            if (mc.querySelector('h3').textContent === title) {
              mc.remove();
            }
          });
        } else {
          btn.classList.add('marked');
          btn.textContent = "Hapus Tanda";
          marked.add(title);
          addToMarkup({ title, desc, img });
        }
        updatebeforeMessage();
      });
    });

    filterButtonsSetUp();

    document.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.getAttribute('data-category') === activeFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.category-group').forEach(group => {
      if (activeFilter === 'semua' || group.dataset.category === activeFilter) {
        group.style.display = 'block';
      } else {
        group.style.display = 'none';
      }
    });

    filterButtonsSetUp();
    filterAndSearch();
    window.scrollTo(0, scrollY);
  }
  renderContent();
});