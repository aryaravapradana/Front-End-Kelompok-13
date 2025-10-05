document.addEventListener('DOMContentLoaded', function () {

  
  
  

  const marked = new Set();
  let activeFilter = "semua";
  let searchWord = "";
  let currentCategory = null;

  
  
  

  const content = {
    kuliner: [
      {
        title: "Papeda",
        short_desc: "Makanan pokok masyarakat Papua yang terbuat dari sagu, biasanya dinikmati dengan lauk berkuah kaya rempah.",
        long_desc: "Papeda adalah makanan berupa bubur sagu khas Maluku dan Papua yang biasanya disajikan dengan ikan tongkol atau mubara yang dibumbui dengan kunyit. Papeda memiliki rasa tawar dan tekstur yang kental dan lengket. Makanan ini sangat kaya serat, rendah kolesterol, dan cukup bernutrisi.",
        location: "Hampir di seluruh wilayah Papua",
        era: "Zaman prasejarah",
        uniqueness: "Teksturnya yang unik seperti lem dan cara makannya yang khas menggunakan gata-gata (sumpit bambu).",
        status: "Masih menjadi makanan pokok dan ikon kuliner Papua.",
        img: "image/kuliner/Papeda.jpg"
      },
      {
        title: "Ikan Bakar Manokwari",
        short_desc: "Ikan segar yang dibakar dengan bumbu khas Papua dan disiram sambal pedas yang digiling kasar.",
        long_desc: "Ikan Bakar Manokwari adalah hidangan khas dari pesisir Manokwari. Ikan yang digunakan biasanya adalah ikan tongkol atau tuna. Keistimewaan hidangan ini terletak pada sambal mentahnya yang pedas dan segar, yang disiramkan langsung ke atas ikan bakar panas. Sambal ini terbuat dari cabai, bawang, dan rempah-rempah lokal.",
        location: "Manokwari, Papua Barat",
        era: "Tradisional, diwariskan turun-temurun",
        uniqueness: "Sambal mentah yang disiramkan di atas ikan, memberikan sensasi rasa pedas dan segar yang khas.",
        status: "Sangat populer di restoran seafood di seluruh Papua.",
        img: "image/kuliner/Ikan-Bakar-Manokwari-1.jpg"
      },
      {
        title: "Udang Selingkuh",
        short_desc: "Lobster air tawar dari Wamena dengan capit besar seperti kepiting, memiliki daging yang manis dan padat.",
        long_desc: "Dinamakan 'Udang Selingkuh' karena bentuknya yang unik, yaitu udang dengan capit besar seperti kepiting. Hewan ini hanya dapat ditemukan di Sungai Baliem, Wamena. Dagingnya yang padat, lembut, dan manis membuatnya menjadi hidangan mewah yang sering diolah dengan cara direbus, dibakar, atau saus asam manis.",
        location: "Wamena, Lembah Baliem, Papua Pegunungan",
        era: "Kuliner kontemporer yang mulai populer di kalangan wisatawan",
        uniqueness: "Perpaduan bentuk antara udang dan kepiting yang hanya ada di Papua.",
        status: "Menjadi menu andalan di restoran-restoran di Wamena.",
        img: "image/kuliner/udang-selingkuh.jpg"
      },
      {
        title: "Sate Ulat Sagu",
        short_desc: "Kuliner ekstrem berupa ulat sagu bakar yang kaya protein, favorit masyarakat pedalaman Papua.",
        long_desc: "Sate Ulat Sagu adalah salah satu kuliner paling otentik dan menantang dari Papua. Ulat sagu, yang merupakan larva dari kumbang sagu, dipanen dari batang pohon sagu yang membusuk. Ulat ini kemudian ditusuk seperti sate dan dibakar di atas bara api. Rasanya sering dideskripsikan gurih seperti kacang atau keju bakar, dengan tekstur renyah di luar dan lembut di dalam. Makanan ini adalah sumber protein hewani yang sangat penting bagi masyarakat di pedalaman.",
        location: "Daerah pedalaman Papua, terutama di sekitar hutan sagu.",
        era: "Tradisional, sejak zaman nenek moyang.",
        uniqueness: "Bahan baku yang tidak biasa dan kandungan protein yang sangat tinggi.",
        status: "Masih dikonsumsi secara luas oleh masyarakat adat, menjadi daya tarik bagi wisatawan petualang.",
        img: "image/kuliner/Sate Ulat Sagu, Khas Papua.jpeg"
      },
      {
        title: "Kue Lontar",
        short_desc: "Pai susu khas Papua berukuran besar, menunjukkan adanya pengaruh kuliner Belanda di masa lalu.",
        long_desc: "Kue Lontar adalah adaptasi lokal dari pie susu (melk taart) yang dibawa oleh bangsa Belanda. Kue ini memiliki bagian pinggiran yang renyah dengan isian vla yang sangat lembut dan manis. Terbuat dari bahan-bahan sederhana seperti telur, susu kental manis, dan margarin, kue ini menjadi hidangan penutup favorit di berbagai acara keluarga dan perayaan di Papua.",
        location: "Fakfak dan berbagai kota pesisir Papua",
        era: "Masa kolonial Belanda",
        uniqueness: "Ukurannya yang besar dan isiannya yang lumer di mulut.",
        status: "Populer sebagai oleh-oleh dan hidangan saat hari raya.",
        img: "image/kuliner/kue lontar.jpeg"
      },
      {
        title: "Sambal Colo-colo",
        short_desc: "Sambal khas dari bahan mentah seperti cabai, tomat, dan bawang, memberikan rasa segar yang khas.",
        long_desc: "Berbeda dari sambal lain yang umumnya diulek, Sambal Colo-colo dibuat dari bahan-bahan segar yang diiris kasar. Terdiri dari cabai rawit, tomat, bawang merah, dan daun kemangi yang kemudian disiram dengan perasan jeruk nipis atau lemon cui dan sedikit kecap manis. Sambal ini memberikan ledakan rasa segar, asam, pedas, dan manis yang sangat cocok untuk menemani hidangan ikan bakar atau seafood lainnya.",
        location: "Maluku dan Papua",
        era: "Tradisional",
        uniqueness: "Penyajiannya yang mentah dan segar tanpa proses masak.",
        status: "Wajib ada sebagai pendamping hidangan laut.",
        img: "image/kuliner/sambal colo colo.png"
      },
      {
        title: "Aunu Senebre",
        short_desc: "Ikan teri nasi yang dicampur dengan parutan kelapa dan daun talas, lalu dikukus hingga kering.",
        long_desc: "Aunu Senebre adalah lauk tradisional yang memiliki rasa gurih yang khas. Ikan teri nasi dicampur dengan parutan kelapa, irisan daun talas, dan bumbu-bumbu, kemudian dikukus hingga matang dan sedikit mengering. Hidangan ini sering disantap sebagai lauk pendamping papeda atau berbagai jenis umbi-umbian rebus.",
        location: "Wilayah pesisir utara Papua",
        era: "Tradisional",
        uniqueness: "Kombinasi rasa gurih dari ikan teri dan kelapa.",
        status: "Masih sering dibuat di rumah-rumah sebagai lauk sehari-hari.",
        img: "image/kuliner/Aunu Senebre.jpg"
      },
      {
        title: "Sagu Lempeng",
        short_desc: "Camilan keras berbentuk lempengan yang terbuat dari sagu, cocok sebagai teman minum teh.",
        long_desc: "Sagu Lempeng adalah cara tradisional masyarakat Papua untuk mengawetkan sagu. Adonan sagu dipadatkan dalam cetakan persegi panjang yang terbuat dari tanah liat, lalu dibakar hingga menjadi keras seperti biskuit. Rasanya tawar dan teksturnya sangat keras, sehingga seringkali harus dicelupkan ke dalam air, teh, atau kopi sebelum dimakan. Ini adalah bekal praktis bagi para pemburu atau nelayan.",
        location: "Seluruh wilayah Papua, terutama di daerah penghasil sagu",
        era: "Kuno",
        uniqueness: "Daya tahan yang sangat lama dan teksturnya yang sangat keras.",
        status: "Masih dikonsumsi, terkadang dijual sebagai camilan tradisional.",
        img: "image/kuliner/Sagu_Lempeng.png"
      },
      {
        title: "Ikan Bungkus",
        short_desc: "Pepes ala Papua, menggunakan ikan laut yang dibumbui rempah dan dibungkus daun talas.",
        long_desc: "Serupa dengan pepes di Jawa, Ikan Bungkus adalah metode memasak dengan cara membungkus bahan utama dengan daun. Di Papua, ikan laut segar (biasanya ikan ekor kuning) dibumbui dengan rempah-rempah lokal yang kaya rasa, lalu dibungkus rapat dengan daun talas. Bungkusan ini kemudian dibakar di atas bara api. Proses ini membuat daging ikan menjadi sangat lembut, juicy, dan beraroma wangi khas daun talas.",
        location: "Daerah pesisir Papua",
        era: "Tradisional",
        uniqueness: "Penggunaan daun talas sebagai pembungkus yang memberikan aroma khas.",
        status: "Populer di warung makan lokal dan acara keluarga.",
        img: "image/kuliner/Ikan bungkus.jpg"
      },
      {
        title: "Martabak Sagu",
        short_desc: "Martabak manis unik yang terbuat dari sagu dan gula merah, kemudian digoreng.",
        long_desc: "Martabak Sagu adalah kudapan manis khas Fakfak. Berbeda dari martabak biasa, adonannya terbuat dari sagu yang dihaluskan, dicampur dengan gula merah, dan sedikit garam. Adonan ini kemudian digoreng di atas wajan hingga matang. Hasilnya adalah camilan dengan tekstur yang kenyal dan rasa manis legit dari gula merah.",
        location: "Fakfak, Papua Barat",
        era: "Tradisional",
        uniqueness: "Bahan dasar sagu yang menggantikan tepung terigu.",
        status: "Camilan sore hari yang populer di Fakfak.",
        img: "image/kuliner/Martabak_sagu.jpeg"
      }
    ],
    adat: [
        {
            title: "Upacara Bakar Batu",
            short_desc: "Ritual memasak bersama sebagai bentuk syukur, menggunakan batu yang dipanaskan hingga membara.",
            long_desc: "Upacara Bakar Batu adalah tradisi kuno masyarakat di Lembah Baliem yang berfungsi sebagai simbol solidaritas, perdamaian, dan rasa syukur. Dalam upacara ini, berbagai jenis makanan seperti daging babi, ubi, dan sayuran dimasak bersama dalam sebuah lubang di tanah dengan menggunakan batu-batu yang telah dipanaskan hingga merah membara. Proses memasak ini bisa memakan waktu berjam-jam dan hasilnya dinikmati bersama oleh seluruh komunitas.",
            location: "Lembah Baliem, Papua Pegunungan",
            era: "Sejak zaman nenek moyang",
            uniqueness: "Teknik memasak tanpa api langsung, hanya menggunakan panas dari batu.",
            status: "Masih aktif dilakukan, terutama saat acara besar atau festival budaya.",
            img: "image/adat/upacara-lempat-batu.jpeg"
        },
        {
            title: "Tradisi Iki Palek",
            short_desc: "Tradisi potong jari oleh Suku Dani sebagai wujud duka cita yang mendalam atas kehilangan anggota keluarga.",
            long_desc: "Iki Palek adalah tradisi ekstrem yang dilakukan oleh Suku Dani untuk menunjukkan kesedihan saat kehilangan anggota keluarga yang dicintai. Jari dipotong menggunakan kapak batu atau pisau tradisional. Tradisi ini didasari oleh keyakinan bahwa rasa sakit fisik dapat mewakili dan melambangkan dalamnya duka dan cinta kepada yang telah tiada. Setiap ruas jari yang hilang menandakan orang terkasih yang telah pergi.",
            location: "Wamena, Papua Pegunungan",
            era: "Kuno, diwariskan dari leluhur Suku Dani",
            uniqueness: "Ekspresi duka cita melalui mutilasi diri yang memiliki makna filosofis mendalam.",
            status: "Sudah sangat jarang dilakukan karena larangan pemerintah dan pengaruh modernisasi.",
            img: "image/adat/Iki-palek.jpg"
        },
        {
            title: "Upacara Tanam Sasi",
            short_desc: "Upacara adat kematian Suku Marind-Anim menggunakan kayu Sasi sebagai penanda.",
            long_desc: "Sasi adalah larangan adat untuk mengambil hasil sumber daya alam tertentu dalam jangka waktu yang disepakati. Upacara Tanam Sasi khususnya pada Suku Marind-Anim adalah penanda masa berkabung. Sebuah kayu Sasi yang diukir dengan motif tertentu ditanam setelah kematian seseorang. Selama Sasi berlaku, warga dilarang melakukan aktivitas tertentu sebagai tanda penghormatan. Sasi akan dicabut setelah 1000 hari dengan upacara besar.",
            location: "Merauke, Papua Selatan",
            era: "Tradisional",
            uniqueness: "Menggabungkan ritual duka cita dengan konservasi alam secara adat.",
            status: "Masih dilestarikan di beberapa komunitas Suku Marind-Anim.",
            img: "image/adat/Upacara-Tanam-Sasi.jpeg"
        },
        {
            title: "Upacara Wor",
            short_desc: "Ritual Suku Biak untuk memohon perlindungan dalam setiap siklus kehidupan penting.",
            long_desc: "Wor adalah tradisi lisan dan serangkaian upacara adat Suku Biak yang sangat penting. Upacara ini dilakukan pada setiap tahap penting dalam kehidupan, mulai dari kehamilan, kelahiran, perkawinan, hingga kematian. Tujuannya adalah untuk memohon, mengundang, dan meminta perlindungan dari roh-roh leluhur dan penguasa alam semesta. Wor diiringi oleh nyanyian, tarian, dan persembahan.",
            location: "Kepulauan Biak, Papua",
            era: "Kuno",
            uniqueness: "Satu tradisi yang mencakup seluruh siklus hidup manusia.",
            status: "Masih dijaga kelestariannya oleh para tetua adat Suku Biak.",
            img: "image/adat/upacara-wor.jpeg"
        },
        {
            title: "Tradisi Ararem",
            short_desc: "Prosesi pengantaran mas kawin dari calon suami ke calon istri pada Suku Biak.",
            long_desc: "Ararem adalah tradisi mengantar mas kawin dalam adat pernikahan Suku Biak. Rombongan keluarga calon mempelai pria akan berjalan kaki beramai-ramai menuju kediaman calon mempelai wanita, membawa piring-piring antik (ben-bepon), guci, dan barang berharga lainnya. Prosesi ini diiringi dengan nyanyian dan tarian, menciptakan suasana yang meriah dan penuh kebersamaan.",
            location: "Kepulauan Biak, Papua",
            era: "Tradisional",
            uniqueness: "Piring antik sebagai mas kawin utama yang sangat dihargai.",
            status: "Masih menjadi bagian penting dalam prosesi pernikahan adat Biak.",
            img: "image/adat/Ararem.jpeg"
        },
        {
            title: "Seni Ukir Asmat",
            short_desc: "Seni ukir kayu spiritual dari Suku Asmat yang terkenal di seluruh dunia.",
            long_desc: "Suku Asmat adalah salah satu suku di dunia yang paling ahli dalam seni ukir kayu. Bagi mereka, mengukir bukan sekadar aktivitas seni, tetapi juga medium untuk berkomunikasi dengan dunia roh para leluhur. Setiap ukiran, baik itu patung (mbis), perisai, atau tiang, memiliki makna spiritual yang mendalam dan seringkali dibuat untuk keperluan ritual, seperti upacara kematian atau inisiasi.",
            location: "Kabupaten Asmat, Papua Selatan",
            era: "Kuno, sejak zaman leluhur",
            uniqueness: "Motif ukiran yang rumit dan penuh simbolisme spiritual.",
            status: "Sangat dihargai oleh kolektor seni dunia, terus dilestarikan oleh generasi muda.",
            img: "image/adat/pemahat-suku-asmat.jpg"
        },
        {
            title: "Pakaian Adat Koteka",
            short_desc: "Pakaian tradisional pria di pegunungan Papua, terbuat dari labu yang dikeringkan.",
            long_desc: "Koteka, atau holim, adalah penutup kemaluan pria yang dikenakan oleh beberapa suku di daerah pegunungan, seperti Suku Dani. Terbuat dari buah labu air yang isinya dibuang dan kulitnya dikeringkan. Bentuk dan ukuran koteka bisa bervariasi dan seringkali menunjukkan status sosial pemakainya. Meskipun pemakaiannya mulai berkurang, koteka tetap menjadi simbol identitas budaya yang kuat.",
            location: "Pegunungan Tengah Papua (misal: Lembah Baliem)",
            era: "Kuno",
            uniqueness: "Bahan dan bentuknya yang sangat khas dan fungsional untuk kondisi alam pegunungan.",
            status: "Masih dikenakan oleh generasi tua dan dalam upacara adat atau festival.",
            img: "image/adat/katoka.png"
        },
        {
            title: "Upacara Kematian Asmat",
            short_desc: "Ritual unik Suku Asmat dalam memperlakukan jenazah, yang tidak dikuburkan.",
            long_desc: "Suku Asmat memiliki cara yang sangat unik dalam memperlakukan jenazah. Di masa lalu, jenazah orang terhormat tidak dikubur, melainkan diletakkan di atas sebuah panggung (para) hingga tersisa tulangnya. Tulang-belulang ini kemudian disimpan di dalam rumah atau bahkan digunakan sebagai bantal untuk mengenang dan menyerap kekuatan mendiang. Saat ini, praktik ini sudah digantikan dengan penguburan biasa.",
            location: "Kabupaten Asmat, Papua Selatan",
            era: "Kuno",
            uniqueness: "Tidak menguburkan jenazah, melainkan menyimpannya sebagai pengingat.",
            status: "Praktik asli sudah ditinggalkan, namun ceritanya tetap menjadi bagian dari sejarah suku.",
            img: "image/adat/Upacara-kematian-suku-asmat.jpeg"
        },
        {
            title: "Tradisi Nasu Palek",
            short_desc: "Tradisi mengiris telinga yang dilakukan oleh Suku Dani sebagai tanda duka cita.",
            long_desc: "Mirip dengan tradisi potong jari (Iki Palek), Nasu Palek adalah tradisi melukai diri sebagai tanda duka. Dalam tradisi ini, daun telinga bagian atas diiris dengan menggunakan sembilu (pisau dari bambu). Tradisi ini juga dilakukan oleh Suku Dani di Lembah Baliem untuk melambangkan kesedihan yang mendalam atas kepergian orang yang dikasihi.",
            location: "Lembah Baliem, Papua Pegunungan",
            era: "Kuno",
            uniqueness: "Selain potong jari, telinga juga menjadi bagian tubuh untuk mengekspresikan duka.",
            status: "Sudah sangat jarang atau bahkan tidak pernah dilakukan lagi.",
            img: "image/adat/Nasu-palek.jpg"
        },
        {
            title: "Perkawinan Adat Biak",
            short_desc: "Prosesi pernikahan Suku Biak yang melibatkan perjodohan sejak kecil dan penyerahan pusaka.",
            long_desc: "Masyarakat Suku Biak memiliki tradisi perjodohan anak (fakfuken) sejak mereka masih kecil. Prosesi pernikahan melibatkan beberapa tahapan, dimulai dari pinangan (senepen) hingga lamaran resmi. Puncak dari prosesi ini adalah penyerahan mas kawin (Ararem) yang terdiri dari benda-benda pusaka bernilai tinggi. Seluruh rangkaian acara diisi dengan makan bersama, nyanyian, dan tarian.",
            location: "Kepulauan Biak, Papua",
            era: "Tradisional",
            uniqueness: "Tradisi perjodohan dini dan penggunaan benda pusaka sebagai mas kawin.",
            status: "Beberapa tahapan masih dijalankan, meskipun tradisi perjodohan dini mulai ditinggalkan.",
            img: "image/adat/pernikahan-suku-biak.jpg"
        }
    ],
    wisata: [
        {
            title: "Raja Ampat",
            short_desc: "Gugusan pulau tropis dengan keindahan bawah laut yang diakui sebagai salah satu yang terbaik di dunia.",
            long_desc: "Kepulauan Raja Ampat adalah sebuah surga tropis yang terdiri dari lebih dari 1.500 pulau kecil. Terletak di jantung Segitiga Terumbu Karang Dunia, Raja Ampat memiliki keanekaragaman hayati laut terkaya di bumi. Ini adalah destinasi impian bagi para penyelam dan snorkeler, dengan ratusan jenis terumbu karang dan ribuan spesies ikan. Pemandangan dari puncak Piaynemo atau Wayag adalah ikon yang tak terlupakan.",
            location: "Kabupaten Raja Ampat, Papua Barat Daya",
            era: "Populer sejak awal tahun 2000-an",
            uniqueness: "Memiliki 75% dari seluruh spesies terumbu karang yang ada di dunia.",
            status: "Destinasi wisata kelas dunia dan kawasan konservasi laut yang dilindungi.",
            img: "image/wisata/Raja Ampat_ A Secret Paradise - Raja Ampat_ Emerald Mist & Luxury.jpeg"
        },
        {
            title: "Danau Sentani",
            short_desc: "Danau terbesar di Papua dengan pulau-pulau hijau di tengahnya, menawarkan pemandangan yang indah.",
            long_desc: "Danau Sentani adalah danau vulkanik yang luas dengan pemandangan spektakuler. Terdapat sekitar 22 pulau kecil yang tersebar di seluruh danau, masing-masing dengan desanya sendiri. Selain keindahan alamnya, danau ini juga kaya akan budaya. Festival Danau Sentani diadakan setiap tahun, menampilkan tarian adat di atas perahu, upacara tradisional, dan pameran kuliner khas.",
            location: "Kabupaten Jayapura, Papua",
            era: "Objek wisata sejak lama",
            uniqueness: "Festival budaya tahunan yang diadakan di tengah danau.",
            status: "Populer di kalangan wisatawan lokal dan mancanegara.",
            img: "image/wisata/Danau Sentani, Papua.jpeg"
        },
        {
            title: "Lembah Baliem",
            short_desc: "Lembah subur yang dikelilingi pegunungan, rumah bagi suku-suku asli Papua dengan budaya yang kaya.",
            long_desc: "Lembah Baliem adalah jendela menuju kehidupan tradisional Papua. Terletak di ketinggian sekitar 1.600 mdpl, lembah ini adalah rumah bagi Suku Dani, Yali, dan Lani. Wisatawan dapat menyaksikan kehidupan sehari-hari, tradisi kuno seperti Bakar Batu, dan bahkan mumi leluhur yang diawetkan. Festival Budaya Lembah Baliem yang diadakan setiap tahun menjadi daya tarik utama, menampilkan simulasi perang antar suku dan berbagai pertunjukan budaya.",
            location: "Kabupaten Jayawijaya, Papua Pegunungan",
            era: "Ditemukan oleh dunia luar pada tahun 1938",
            uniqueness: "Kehidupan suku-suku asli yang masih sangat otentik di tengah pemandangan alam yang spektakuler.",
            status: "Populer untuk wisata budaya dan petualangan trekking.",
            img: "image/wisata/Hamsa Village, Baliem Valley, Papua_ Indonesia_.jpeg"
        },
        {
            title: "Taman Nasional Teluk Cenderawasih",
            short_desc: "Taman nasional laut terbesar di Indonesia, tempat ideal untuk berenang bersama hiu paus.",
            long_desc: "Taman Nasional Teluk Cenderawasih adalah surga bagi para pecinta laut. Kawasan konservasi ini mencakup pulau-pulau, terumbu karang, dan perairan laut dalam. Daya tarik utamanya adalah kesempatan untuk berinteraksi langsung dengan hiu paus (whale shark) yang sering muncul di sekitar bagan (platform nelayan). Selain itu, taman nasional ini juga menjadi lokasi penelitian untuk berbagai biota laut langka.",
            location: "Teluk Cenderawasih, Papua Barat dan Papua Tengah",
            era: "Didirikan pada tahun 1993",
            uniqueness: "Interaksi dengan hiu paus yang jinak dan ramah.",
            status: "Kawasan Konservasi Nasional, destinasi khusus minat.",
            img: "image/wisata/taman-nasional-teluk-cendrawasih-1024x683.jpg"
        },
        {
            title: "Danau Paniai",
            short_desc: "Danau indah di dataran tinggi dengan udara sejuk dan pemandangan pegunungan yang memukau.",
            long_desc: "Danau Paniai adalah salah satu danau terindah di Indonesia. Terletak di ketinggian 1.700 mdpl, danau ini menawarkan udara yang sejuk dan panorama alam yang luar biasa. Airnya yang biru jernih dikelilingi oleh tebing-tebing dan pegunungan hijau. Aktivitas yang bisa dilakukan antara lain memancing, berkeliling danau dengan perahu, atau sekadar bersantai menikmati ketenangan alam.",
            location: "Kabupaten Paniai, Papua Tengah",
            era: "Dikenal sejak masa kolonial",
            uniqueness: "Keindahan danau altimontana (dataran tinggi) yang sangat luas.",
            status: "Destinasi wisata alam yang tenang dan damai.",
            img: "image/wisata/Danau Paniai, Destinasi Wisata Dunia Di Papua.jpeg"
        },
        {
            title: "Pegunungan Arfak",
            short_desc: "Kawasan cagar alam dengan keanekaragaman hayati tinggi, rumah bagi burung-burung surga.",
            long_desc: "Pegunungan Arfak adalah surga bagi para pengamat burung dan pecinta alam. Kawasan ini merupakan cagar alam yang melindungi ekosistem hutan pegunungan yang kaya. Di sini, wisatawan dapat melihat langsung berbagai jenis burung Cenderawasih (burung surga) menari di habitat aslinya. Terdapat juga danau kembar Anggi Giji dan Anggi Gida yang menawan.",
            location: "Kabupaten Pegunungan Arfak, Papua Barat",
            era: "Kawasan Cagar Alam",
            uniqueness: "Spot terbaik di dunia untuk melihat burung Cenderawasih.",
            status: "Destinasi ekowisata dan penelitian.",
            img: "image/wisata/pegunungan-arfak.jpeg"
        },
        {
            title: "Pantai Bosnik",
            short_desc: "Pantai pasir putih di Biak dengan air laut biru jernih dan deretan pohon kelapa yang meneduhkan.",
            long_desc: "Pantai Bosnik adalah salah satu pantai terpopuler di Pulau Biak. Pantai ini memiliki garis pantai yang panjang dengan hamparan pasir putih yang lembut. Air lautnya yang tenang dan jernih berwarna biru kehijauan, sangat ideal untuk berenang dan snorkeling. Di sepanjang pantai, terdapat pondok-pondok (saung) yang bisa disewa untuk bersantai sambil menikmati es kelapa muda.",
            location: "Pulau Biak, Papua",
            era: "Populer di kalangan masyarakat lokal",
            uniqueness: "Pemandangan matahari terbenam yang spektakuler.",
            status: "Ramai dikunjungi saat akhir pekan dan hari libur.",
            img: "image/wisata/Pantai Bosnik, Destinasi wisata di Pulau Biak, yang Wajib Kamu Kunjungi.jpeg"
        },
        {
            title: "Air Terjun Wafsarak",
            short_desc: "Air terjun bertingkat dengan kolam alami berwarna biru kehijauan yang jernih di Biak Utara.",
            long_desc: "Tersembunyi di hutan Biak Utara, Air Terjun Wafsarak menawarkan kesegaran alam yang masih alami. Air terjun ini tidak terlalu tinggi namun memiliki beberapa tingkatan dengan kolam-kolam alami di bawahnya. Airnya yang sangat jernih dan berwarna biru kehijauan mengundang siapa saja untuk berenang dan merasakan kesegarannya. Suasananya sangat tenang dan damai.",
            location: "Biak Utara, Pulau Biak, Papua",
            era: "Objek wisata alam lokal",
            uniqueness: "Kolam alami dengan air yang sangat jernih dan berwarna biru.",
            status: "Mulai dikenal oleh wisatawan petualang.",
            img: "image/wisata/Air Terjun Wafsarak, Biak, Papua.jpeg"
        },
        {
            title: "Pulau Mansinam",
            short_desc: "Pulau bersejarah tempat masuknya Injil pertama kali di Tanah Papua, kini menjadi situs wisata religi.",
            long_desc: "Pulau Mansinam memiliki nilai sejarah yang sangat penting bagi umat Kristiani di Papua. Pada 5 Februari 1855, dua misionaris Jerman, Carl Ottow dan Johann Geissler, tiba di pulau ini dan memulai penyebaran Injil. Saat ini, Pulau Mansinam menjadi destinasi wisata religi, dengan monumen pendaratan Injil, gereja tua, dan sebuah patung Yesus Kristus yang besar di puncak bukit.",
            location: "Manokwari, Papua Barat",
            era: "Sejak 1855",
            uniqueness: "Titik nol peradaban Kristen di Tanah Papua.",
            status: "Situs ziarah penting, terutama saat perayaan Hari Pekabaran Injil.",
            img: "image/wisata/Patung Yesus Kristus, Pulau Mansinam, Manokwari, Papua Barat.jpeg"
        },
        {
            title: "Pantai Harlem",
            short_desc: "Surga tersembunyi di Jayapura dengan pasir putih halus dan perairan dangkal yang tenang.",
            long_desc: "Pantai Harlem sering disebut sebagai salah satu pantai terindah di dekat Jayapura. Untuk mencapainya, dibutuhkan perjalanan perahu yang menambah kesan petualangan. Pantai ini menawarkan pasir putih yang sangat halus seperti tepung, air laut yang tenang dan dangkal dengan gradasi warna biru yang indah, serta sumber air tawar yang mengalir langsung ke pantai. Suasananya sangat tenang dan cocok untuk melepaskan penat.",
            location: "Distrik Depapre, Kabupaten Jayapura, Papua",
            era: "Baru populer beberapa tahun terakhir",
            uniqueness: "Memiliki sumber air tawar jernih di tepi pantai.",
            status: "Destinasi favorit untuk liburan akhir pekan bagi warga Jayapura.",
            img: "image/wisata/4 Keseruan di Pantai Harlem Papua, Spot Sempurna Mencari Ketenangan Jiwa - Pigiblog.jpeg"
        }
    ]
  };

  
  
  

  const container = document.getElementById('content-container');
  const markContainer = document.getElementById('mark-container');
  const beforeMessage = document.getElementById('before-message');
  const commentList = document.getElementById('comment-list');
  const beforeComment = document.querySelector('.before-comment');
  const popup = document.getElementById("popupForm");
  const form = document.getElementById("contentForm");
  const detailPopup = document.getElementById('detail-popup');
  const detailPopupImg = document.getElementById('detail-popup-img');
  const detailPopupTitle = document.getElementById('detail-popup-title');
  const detailPopupDesc = document.getElementById('detail-popup-desc');
  const closeDetailPopupBtn = document.getElementById('close-detail-popup');
  const imagePreview = document.getElementById('image-preview');
  const uploadPrompt = document.getElementById('upload-prompt');

  
  
  

  /**
   * Renders all content based on the global `content` object.
   * This function rebuilds the main content area's HTML.
   */
  function renderContent() {
    const scrollY = window.scrollY;

    container.innerHTML = Object.keys(content).map(cont => {
      const cardsHtml = content[cont].map(item => {
        const isMarked = marked.has(item.title);
        return `
          <div class="card">
            ${item.img ? `<img src="${item.img}" alt="${item.title}">` : ""}
            <h3>${item.title}</h3>
            <p>${item.short_desc}</p>
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

    filterAndSearch();
    window.scrollTo(0, scrollY);
  }

  /**
   * Adds a new card to the DOM without re-rendering everything.
   * @param {object} item - The new item to add.
   * @param {string} category - The category of the new item.
   */
  function addNewCard(item, category) {
    const categoryGroup = document.querySelector(`.category-group[data-category='${category}']`);
    if (!categoryGroup) return;

    const cardContainer = categoryGroup.querySelector('.card-container');
    const addButton = categoryGroup.querySelector('.add-content-btn');

    const isMarked = marked.has(item.title);
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerHTML = `
      ${item.img ? `<img src="${item.img}" alt="${item.title}">` : ''}
      <h3>${item.title}</h3>
      <p>${item.short_desc}</p>
      <button class="mark-btn${isMarked ? ' marked' : ''}">
        ${isMarked ? 'Hapus Tanda' : 'Tandai'}
      </button>
    `;

    if (addButton) {
      cardContainer.insertBefore(newCard, addButton);
    } else {
      cardContainer.appendChild(newCard);
    }
  }

  /**
   * Filters and searches content based on `activeFilter` and `searchWord`.
   * Toggles the visibility of cards and groups.
   */
  function filterAndSearch() {
    const groups = document.querySelectorAll('.category-group');
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[data-category="${activeFilter}"]`).classList.add('active');

    groups.forEach(group => {
      const category = group.dataset.category;
      const isCategoryVisible = activeFilter === 'semua' || category === activeFilter;
      group.style.display = isCategoryVisible ? 'block' : 'none';

      group.querySelectorAll('.card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        const isCardVisible = isCategoryVisible && (title.includes(searchWord) || desc.includes(searchWord));
        card.style.display = isCardVisible ? 'flex' : 'none';
      });
    });
  }
  

  /**
   * Toggles the visibility of the placeholder message in the markup section.
   */
  function updatebeforeMessage() {
    beforeMessage.style.display = markContainer.children.length === 0 ? 'block' : 'none';
  }

  /**
   * Adds a new card to the markup section.
   * @param {{title: string, desc: string, img: string}} item - The item to add.
   */
  function addToMarkup({ title, desc, img }) {
    if (Array.from(markContainer.querySelectorAll('.card h3')).some(h3 => h3.textContent === title)) return;

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      ${img ? `<img src="${img}" alt="${title}">` : ""}
      <h3>${title}</h3>
      <p>${desc}</p>
      <button class="remove-mark-btn">Hapus</button>
    `;
    markContainer.appendChild(card);
    updatebeforeMessage();
  }

  /**
   * Removes a card from the markup section.
   * @param {string} title - The title of the card to remove.
   */
  function removeFromMarkup(title) {
    const markedCards = markContainer.querySelectorAll('.card');
    markedCards.forEach(mc => {
      if (mc.querySelector('h3').textContent === title) {
        mc.remove();
      }
    });
    updatebeforeMessage();
  }

  
  
  

  /**
   * Toggles the visibility of the placeholder message in the comment section.
   */
  function updatebeforeComment() {
    beforeComment.style.display = commentList.querySelectorAll('.comment-item').length === 0 ? 'block' : 'none';
  }

  /**
   * Adds a new comment to the comment list.
   */
  function addComment() {
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');
    const name = nameInput.value.trim() || "Anonim";
    const text = commentInput.value.trim();

    if (text) {
      const avatarF = name.charAt(0).toUpperCase();
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment-item');
      commentDiv.innerHTML = `
          <div class="comment-avatar">${avatarF}</div>
          <div class="comment-content">
            <strong>${name}</strong>
            <p>${text}</p>
          </div>
          <button class="delete-btn">Hapus</button>
        `;
      commentList.appendChild(commentDiv);
      nameInput.value = "";
      commentInput.value = "";
      updatebeforeComment();
    }
  }

  function openDetailPopup(item) {
    detailPopupTitle.textContent = item.title;
    detailPopupDesc.textContent = item.long_desc;
    document.getElementById('detail-popup-location').textContent = item.location;
    document.getElementById('detail-popup-era').textContent = item.era;
    document.getElementById('detail-popup-uniqueness').textContent = item.uniqueness;
    document.getElementById('detail-popup-status').textContent = item.status;
    detailPopupImg.src = item.img;
    detailPopupImg.style.display = item.img ? 'block' : 'none';
    detailPopup.classList.remove('hidden');
  }

  function closeDetailPopup() {
    detailPopup.classList.add('hidden');
  }

  
  
  

  /**
   * Handles clicks on the main content container using event delegation.
   * @param {Event} e - The click event.
   */
  function handleContentClick(e) {
    const target = e.target;

    
    if (target.classList.contains('mark-btn')) {
      const parentCard = target.closest('.card');
      const title = parentCard.querySelector('h3').textContent;
      const desc = parentCard.querySelector('p').textContent;
      const img = parentCard.querySelector('img') ? parentCard.querySelector('img').src : "";

      if (target.classList.contains('marked')) {
        target.classList.remove('marked');
        target.textContent = "Tandai";
        marked.delete(title);
        removeFromMarkup(title);
      } else {
        target.classList.add('marked');
        target.textContent = "Hapus Tanda";
        marked.add(title);
        addToMarkup({ title, desc, img });
      }
      return;
    }

    
    if (target.classList.contains('add-content-btn')) {
      currentCategory = target.dataset.category;
      document.getElementById("form-title").textContent = `Tambah ${currentCategory}`;
      
      // Reset form state every time it's opened
      form.reset();
      document.getElementById("new-img").value = "";
      imagePreview.classList.add('hidden');
      imagePreview.src = '#';
      uploadPrompt.classList.remove('hidden');

      popup.classList.remove("hidden");
      return;
    }

    
    const card = target.closest('.card');
    if (card) {
        const title = card.querySelector('h3').textContent;
        const category = card.closest('.category-group').dataset.category;
        const item = content[category].find(i => i.title === title);
        if (item) {
            openDetailPopup(item);
        }
    }
  }

  /**
   * Handles form submission for adding new content.
   * @param {Event} e - The submit event.
   */
  function handleFormSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("new-title").value;
    const short_desc = document.getElementById("new-short-desc").value;
    const long_desc = document.getElementById("new-long-desc").value;
    const location = document.getElementById("new-location").value;
    const era = document.getElementById("new-era").value;
    const uniqueness = document.getElementById("new-uniqueness").value;
    const status = document.getElementById("new-status").value;
    const file = document.getElementById("new-img").files[0];

    let imgSrc = null;
    if (file) {
      imgSrc = URL.createObjectURL(file);
    }

    const newItem = {
      title,
      short_desc,
      long_desc,
      location,
      era,
      uniqueness,
      status,
      img: imgSrc
    };

    content[currentCategory].push(newItem);
    addNewCard(newItem, currentCategory);

    popup.classList.add("hidden");
  }

  
  
  

  /**
   * Sets up all initial event listeners.
   */
  function init() {
    
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".link-nav a");
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
      });
    });

    
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });

    
    document.querySelector('.filter-buttons').addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        activeFilter = e.target.dataset.category;
        filterAndSearch();
      }
    });

    
    document.getElementById('search-input').addEventListener('input', (e) => {
      searchWord = e.target.value.toLowerCase();
      filterAndSearch();
    });

    
    container.addEventListener('click', handleContentClick);

    
    markContainer.addEventListener('click', (e) => {
      const target = e.target;
      const card = target.closest('.card');

      if (target.classList.contains('remove-mark-btn')) {
        const title = card.querySelector('h3').textContent;
        
        document.querySelectorAll('.mark-btn.marked').forEach(btn => {
          const mainCard = btn.closest('.card');
          if (mainCard && mainCard.querySelector('h3').textContent === title) {
            btn.classList.remove('marked');
            btn.textContent = 'Tandai';
          }
        });
        
        marked.delete(title);
        card.remove();
        updatebeforeMessage();
        return; 
      }

      if (card) {
        const title = card.querySelector('h3').textContent;
        
        let item = null;
        for (const category in content) {
            const foundItem = content[category].find(i => i.title === title);
            if (foundItem) {
                item = foundItem;
                break;
            }
        }

        if (item) {
            openDetailPopup(item);
        }
      }
    });

    
    document.getElementById('submit-comment').addEventListener('click', addComment);

    
    commentList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.comment-item').remove();
        updatebeforeComment();
      }
    });

    
    const newImgInput = document.getElementById('new-img');
    const uploadArea = document.querySelector('.form-image-upload-area');

    newImgInput.addEventListener('change', () => {
        const file = newImgInput.files[0];
        if (file) {
            imagePreview.src = URL.createObjectURL(file);
            imagePreview.classList.remove('hidden');
            uploadPrompt.classList.add('hidden');
        }
    });

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith('image/')) {
                newImgInput.files = files;
                const changeEvent = new Event('change');
                newImgInput.dispatchEvent(changeEvent);
            } else {
                alert('Hanya file gambar yang diperbolehkan!');
            }
        }
    });

    form.addEventListener("submit", handleFormSubmit);
    document.getElementById("closePopup").addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    
    closeDetailPopupBtn.addEventListener('click', closeDetailPopup);
    detailPopup.addEventListener('click', (e) => {
        if (e.target === detailPopup) {
            closeDetailPopup();
        }
    });

    
    renderContent();
    updatebeforeMessage();
    updatebeforeComment();
  }

  
  init();

});