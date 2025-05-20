import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Articel from "./pages/Articel";
import ArticelDetail from "./pages/ArticelDetail";
import Layout from "./component/Layout";
export default function App() {
  const [artikel, setArtikel] = useState([]);

  const listArticel = [
    {
      username: "Hosea",
      slug: "menyelami-dunia-http-request-dalam-javascript-menggunakan-axios",
      title: "Menyelami Dunia HTTP Request dalam JavaScript Menggunakan Axios",
      body: `Dalam pengembangan web modern, pertukaran data antara klien (browser) dan server adalah fondasi utama yang memungkinkan aplikasi menjadi dinamis dan interaktif. Proses komunikasi ini sebagian besar dilakukan melalui protokol Hypertext Transfer Protocol (HTTP), yang mendefinisikan bagaimana klien meminta sumber daya dan bagaimana server merespons. JavaScript, sebagai bahasa pemrograman sisi klien yang dominan, memiliki peran krusial dalam menginisiasi dan mengelola permintaan-permintaan HTTP ini.

      Secara historis, pengembang web menggunakan objek XMLHttpRequest (XHR) untuk membuat permintaan HTTP asinkron. Meskipun fungsional, API XHR dikenal cukup verbose dan kurang intuitif untuk tugas-tugas umum seperti menangani respons JSON atau mengelola state permintaan yang kompleks. Kemunculan Fetch API membawa paradigma berbasis Promise yang lebih modern dan bersih untuk melakukan permintaan jaringan, mengatasi beberapa keterbatasan XHR. Namun, komunitas JavaScript terus berinovasi, dan salah satu library yang sangat populer dan diadopsi secara luas untuk menangani HTTP request adalah Axios.
      
      Axios adalah klien HTTP berbasis Promise untuk browser dan Node.js. Library ini menawarkan antarmuka yang lebih ringkas, fitur yang lebih kaya, dan penanganan kesalahan yang lebih konsisten dibandingkan dengan API bawaan browser seperti XHR atau Fetch dalam banyak skenario penggunaan. Kepopulerannya tidak lepas dari kemudahan penggunaannya, kemampuannya untuk melakukan transformasi data otomatis, adanya interceptor yang kuat, dukungan untuk pembatalan permintaan, dan kompatibilitas dengan berbagai lingkungan JavaScript.
      
      Artikel ini bertujuan untuk menjadi panduan komprehensif bagi pengembang, baik yang baru memulai maupun yang sudah berpengalaman, untuk memahami secara mendalam bagaimana memanfaatkan JavaScript dalam konteks HTTP request, dengan fokus utama pada penggunaan library Axios. Kita akan menjelajahi mulai dari konsep dasar HTTP, cara menginstal dan menggunakan Axios untuk permintaan sederhana, hingga fitur-fitur lanjutan seperti konfigurasi global, interceptor, penanganan kesalahan yang canggih, pembatalan permintaan, serta praktik terbaik dalam mengelola panggilan API dalam aplikasi skala nyata. Kami akan berusaha menyajikan materi ini dalam gaya formal yang cocok untuk tujuan edukasi, dengan contoh-contoh kode yang jelas dan penjelasan yang mendetail.`,
      img: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "Rananda",
      slug: "membangun-masa-depan-tanggal-dan-waktu-di-javascript-dengan-temporal-api",
      title:
        "Membangun Masa Depan Tanggal dan Waktu di JavaScript Dengan Temporal API",
      body: `Dalam lanskap pengembangan perangkat lunak modern, penanganan tanggal dan waktu merupakan fondasi yang tak terhindarkan bagi hampir setiap aplikasi, dari sistem keuangan hingga platform media sosial, dari aplikasi penjadwalan hingga layanan analitik. Akurasi, keandalan, dan kemampuan untuk beroperasi secara global dengan mempertimbangkan zona waktu dan kalender yang beragam adalah persyaratan fundamental.\n
      Namun, sudah menjadi rahasia umum di kalangan pengembang JavaScript bahwa objek Date bawaan sering kali menjadi sumber kebingungan, bug, dan frustrasi yang signifikan. Didesain di era awal web dengan fokus yang lebih sederhana, Date memiliki kelemahan mendasar seperti mutabilitas yang tidak terduga, API yang membingungkan dan tidak konsisten, serta penanganan zona waktu yang rentan kesalahan dan ambigu. Mengembangkan fitur yang membutuhkan manipulasi tanggal dan waktu yang kompleks, seperti menghitung durasi lintas zona waktu atau menjadwalkan acara berulang dengan mempertimbangkan aturan kalender yang berbeda, sering kali memerlukan penggunaan library pihak ketiga atau penulisan kode boilerplate yang rawan kesalahan.
      
      Menyadari kebutuhan yang mendesak akan solusi yang lebih baik, komite teknis ECMAScript (TC39) telah mengembangkan proposal Temporal API. Temporal dirancang dari awal untuk menjadi API penanganan tanggal dan waktu yang komprehensif, immutable, eksplisit dalam representasi dan operasi, serta mampu menangani kerumitan dunia nyata seperti zona waktu IANA dan sistem kalender non-Gregorian dengan cara yang andal.
      
      Artikel ini hadir sebagai panduan lengkap untuk JavaScript Temporal API. Kita akan menggali lebih dalam kelemahan objek Date lama yang memotivasi lahirnya Temporal, memahami arsitektur dan berbagai tipe objek Temporal yang merepresentasikan konsep waktu secara presisi, mempelajari secara rinci operasi-operasi kunci yang dapat dilakukan (penambahan, pengurangan, selisih, pembulatan, perbandingan), mengeksplorasi penanganan zona waktu dan kalender yang canggih, serta melihat bagaimana Temporal dapat diintegrasikan ke dalam proyek Anda hari ini. Dengan pemahaman mendalam tentang Temporal API, Anda akan siap untuk membangun fitur terkait waktu yang lebih kuat, andal, dan mudah dikelola di JavaScript.`,
      img: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "Yasir",
      slug: "mengelola-operasi-asinkron-dalam-perulangan-di-javascript-dari-sekuensial-hingga-paralel-dengan",
      title:
        "Mengelola Operasi Asinkron dalam Perulangan di JavaScript: Dari Sekuensial Hingga Paralel dengan Promise dan Async/Await",
      body: `Dalam pengembangan perangkat lunak modern menggunakan JavaScript, interaksi dengan sumber daya eksternal seperti API web, sistem file, atau database seringkali merupakan bagian integral dari aplikasi. Operasi-operasi ini, secara inheren, bersifat asinkron. Seperti yang telah kita bahas sebelumnya (atau Anda mungkin sudah ketahui), JavaScript menggunakan model asinkron untuk menangani tugas-tugas yang memakan waktu tanpa memblokir thread eksekusi utama, sehingga menjaga aplikasi tetap responsif. Promises dan Async/Await adalah alat fundamental yang memungkinkan kita mengelola alur kontrol operasi asinkron dengan cara yang lebih terstruktur dan mudah dibaca dibandingkan dengan callback.

      Namun, tantangan muncul ketika kita perlu melakukan operasi asinkron berulang kali, misalnya, memproses daftar item satu per satu, atau mengambil data terkait untuk setiap item dalam sebuah koleksi. Menggabungkan logika perulangan (loops) dengan operasi asinkron menggunakan Promises dan Async/Await seringkali menjadi sumber kebingungan, karena perilaku asinkron dapat berinteraksi secara tak terduga dengan sifat sinkron dari banyak konstruksi perulangan tradisional di JavaScript.
      
      Artikel ini akan menyelami secara mendalam bagaimana menangani operasi asinkron di dalam berbagai jenis perulangan di JavaScript. Kita akan mengeksplorasi perbedaan perilaku antara loop for tradisional, for...of, dan metode iterasi array seperti forEach, map, filter, dan reduce ketika dihadapkan dengan kode asinkron (await). Kita akan mempelajari teknik untuk mengeksekusi operasi asinkron secara sekuensial (satu per satu) dan secara paralel (bersamaan), serta membahas kapan dan mengapa memilih salah satu pendekatan tersebut. Terakhir, kita akan melihat cara mengelola error dan beberapa skenario lanjutan termasuk mengontrol jumlah operasi yang berjalan secara bersamaan (konkurensi terbatas).
      
      Artikel ini ditujukan untuk pengembang yang ingin memperdalam pemahaman mereka tentang manajemen asinkron di JavaScript, khususnya dalam konteks iterasi data.
      
      1. Memahami Kembali Asynchronous JavaScript dan Loops
      Sebelum kita masuk ke detailnya, mari kita segarkan kembali beberapa konsep dasar.
      
      Async/Await dan Promises Singkat:
      Promise: Objek yang merepresentasikan penyelesaian (atau kegagalan) dari sebuah operasi asinkron dan nilai hasilnya. Promise memiliki tiga status: pending, fulfilled, dan rejected. Status fulfilled atau rejected disebut settled.
      async function: Sebuah fungsi yang ditandai dengan kata kunci async. Fungsi ini selalu mengembalikan Promise. Di dalamnya, kita bisa menggunakan kata kunci await.
      await: Hanya bisa digunakan di dalam fungsi async. await digunakan di depan ekspresi yang mengembalikan Promise. Ini akan menjeda eksekusi fungsi async sampai Promise tersebut settled. Jika Promise fulfilled, await mengembalikan nilai hasilnya. Jika rejected, await melempar error.`,
      img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "Naldi",
      slug: "nasi-uduk-warung-jakart",
      title: "Nasi Uduk “Warung Jakarta”",
      body: `If you’ve read my last post, you’d know that I was let down by nasi uduk Kerobokan. (If you haven’t read it, you’re missing out! Click here to read about it).

      The very next week, I decided to re-visit the place, this time on a Saturday. At around ten, I arrived. As soon as I saw the warung was up and running, my eyes lit up. To add to my excitement, the cakwe stall beside it was also open. I nearly drooled at the prospect of the combination.`,
      img: "https://images.pexels.com/photos/32083423/pexels-photo-32083423.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "Dway",
      slug: "kota-kucing",
      title: "Kota Kucing",
      body: `Kota mati itu diberi nama Kota Kucing. Letaknya sekitaran tiga puluh kilo meter ke arah barat daya dari pusat kota Boulder, negara bagian Colorado USA. Kota itu berada di tengah-tengah ratusan hektar tanah tandus dan dikelilingi tembok kokoh setinggi pohon kelapa.

     Kata seorang penggemar hal-hal gaib di Facebook, Kota Kucing dulunya adalah sebuah hutan luas tempat anggota suku Indian Neflami yang tersisa menikmati kebebasan terakhir mereka. Namun setelah pasukan penakluk dari Barat menemukan mereka — karena pengkhianatan salah satu anggota suku, di tempat itu terjadi pembantaian besar-besaran. Pohon-pohon yang menyaksikan itu ikut berduka sehingga puasa air dan akhirnya mati. Hanya hitungan bulan tanah hijau itu menjadi tandus dan kering.
     
     Saat revolusi industri meletus di Amerika, pabrik dan pemukiman sempat dibangun. Namun roh-roh yang bersemayam di sana menjelma hantu yang menakuti seluruh penduduk. Para penduduk yang tak tahan kabur dan hanya menyisakan kucing-kucing perliharaan yang terus berkembangbiak.
     
     Roh-roh yang bersemayam di sana kemudian memasuki tubuh kucing untuk kembali merasakan kebebasan yang belum tuntas mereka rasakan. Tidak hanya itu, ada juga cerita kalau penduduk di sana bukan pergi karena ditakuti hantu tapi diculik alien lalu diubah menjadi kucing.
     
     Meski ada banyak versi, yang lebih dipercaya orang-orang adalah cerita tentang kucing-kucing yang berisi roh-roh manusia pencari kebebasan. Maka berdatanganlah para pencari kebebasan di sana yang menjadikan kota kucing sebagai pelarian agar lepas dari segala macam beban sebagai manusia.
     
     Sebuah berita pernah mengguncang Amerika di dekade 90-an. Ratusan kaum hippie, sengaja masuk ke sana dan bunuh diri massal untuk merasakan kehidupan bebas sebagai kucing. Sadar kejadian serupa bisa terjadi, pemerintah membangun tembok kokoh dan menutup akses masuk ke sana. Meski demikian, ada cerita bahwa terowongan bawah tanah digali oleh orang-orang di beberapa sisi. Jika bersungguh-sungguh mencari kebebasan, roh-roh penunggu akan menunjukkan arah menuju terowongan.
     
     Aku tak percaya dengan cerita seperti itu. Aku juga tak tahu kebenaran tentang kota mati itu karena belum pernah berkunjung langsung ke sana. Hanya lewat obrolan media sosial dari grup penggemar teori konspirasi dan pencari UFO aku bisa sedikit menggali informasi.
     
     Aku senang dengan teori konspirasi karena dari sanalah aku bisa melihat banyak orang yang melihat dunia dengan cara pandang yang berbeda. Aku bosan dengan pandangan ilmiah yang kaku dan dingin. Lewat mitos-mitos itu aku bisa berekreasi dari rutinitas kampus yang bikin stress.
     
     Lambat laun beberapa mitos itu berpengaruh besar dalam hidupku. Dan mitos itulah yang mengiringi perjalananku siang ini. Aku akan bertemu dengan Casandra Liaow, mahasiswa Indonesia berdarah Tionghoa yang kukenal setahun lalu ketika aku menghadiri festival budaya Asia di aula besar kampus University of Colorado pada akhir musim dingin. Di dalam bis aku mengenang awal perjumpaan kami.
     
     Kala itu aku dan dia tergabung di PPI (Perhimpunan Pelajar Indonesia) Colorado. Kami kebetulan berada di divisi Humas. Kami sering terlibat obrolan saat sama-sama merancang acara pengenalan budaya Indonesia atau acara-acara lain. Di bulan-bulan berikutnya, meski berbeda kampus, kami selalu menyempatkan diri untuk bertemu di tempat-tempat yang berbeda. Kadang ia mengajakku ke acara Reading Festival di perpustakaan kreatif Hamilton Library atau ke kafe Carrow River di daerah Boulder Springs, atau sekadar duduk di Fiske Planetarium, melihat koleksi-koleksi teleskop.
     
     Kami dekat satu sama lain sebagai teman baik. Setelah tahun demi tahun berlalu, kami akhirnya menjadi sepasang kekasih.
     
     Saat libur musim panas, di tahun kedua kami di universitas, kami pulang ke Makassar. Aku mengajaknya ke rumahku menunjukkan kepada orangtuaku kalau Casandra wanita yang kupilih untuk menjadi kekasihku.
     
     Tanggapan tak mengenakkan kudapat. Orangtuaku tak senang dengan hubungan kami karena perbedaan etnis dan beberapa luka sisa-sisa konflik tahun 1998 yang masih membekas dengan sangat dalam. Hubunganku dengan Casandra merenggang selepas kejadian itu.
     
     Aku coba pasrah dan mengambil jarak sambil berpikir kalau mungkin itulah jalan yang terbaik. Terlalu banyak perbedaan bisajadi berdampak buruk ketika kami nanti menikah.
     
     Aku menyibukkan diri agar dapat melupakannya meski itu sangat sulit. Kenangan-kenangan bersamanya bermunculan saat aku tak memikirkan riset untuk tesisku.
     
     Saat di mana aku bisa mengatur otakku agar tak mengingatnya, tiba-tiba saja ia mengajak bertemu di Kota Kucing, sebulan setelah kami tak menjalin kontak sama sekali.
     
     “Aku tunggu sampai jam empat tanggal 25 Januari setelah kau kembali dari Makassar. Kalau lebih satu menit saja, aku akan masuk ke sana dan menjadi kucing.”
     
     Begitu pesan singkat yang kubaca seminggu lalu. Hanya dua kalimat. Tapi kalimat singkat itu mengandung harapan dan pertaruhan sekaligus. Gegara pesan singkatnya, aku kepikiran. Aku pernah bercerita tentang miitos Kota Kucing kepadanya di awal pertemuan kami. Aku mengatakan kalau Kota Kucing mungkin adalah tempat di mana manusia bisa bebas. Di sana manusia bisa jadi kucing dan tak berurusan dengan masalah kompleks karena ras, etnis, budaya yang melekat dan membatasi gerak manusia.
     
     Aku menceritakannya karena tak ada topik lain kala itu. Aku tak pernah menduga seseorang akan percaya dengan apa yang kuceritakan. Mungkin Casandra hanya ingin memanfaatkan mitos itu untuk membuat pertemuan ini jadi semakin sentimentil dan romantis untuk titik balik hubungan yang sempat terancam kandas.`,
      img: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      username: "Alya",
      slug: "pemahaman-mendalam-tentang-closure-di-javascript",
      title: "Pemahaman Mendalam tentang Closure di JavaScript",
      body: "Closure memungkinkan fungsi mengakses variabel dari scope luar meskipun fungsi tersebut dieksekusi di luar konteks awalnya. Konsep ini penting dalam JavaScript, terutama dalam pengelolaan state dan callback.",
      img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
    {
      username: "Fajar",
      slug: "perbandingan-framework-front-end-terpopuler-di-2025",
      title: "Perbandingan Framework Front-End Terpopuler di 2025",
      body: "React, Vue, dan Svelte semakin bersaing di tahun 2025. Artikel ini mengulas kelebihan dan kekurangan dari masing-masing framework berdasarkan performa, dokumentasi, dan komunitas.",
      img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    },
    {
      username: "Laras",
      slug: "pengantar-dasar-ux-design-untuk-developer",
      title: "Pengantar Dasar UX Design untuk Developer",
      body: "Memahami dasar-dasar UX Design penting agar developer tidak hanya membuat aplikasi yang berfungsi, tetapi juga menyenangkan untuk digunakan.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      username: "Rafi",
      slug: "konsep-reactive-programming-dalam-javascript",
      title: "Konsep Reactive Programming dalam JavaScript",
      body: "Reactive Programming adalah pendekatan pemrograman deklaratif berbasis data stream. Artikel ini membahas penerapannya di JavaScript menggunakan RxJS.",
      img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      username: "Tania",
      slug: "strategi-menghadapi-interview-software-engineer",
      title: "Strategi Menghadapi Interview Software Engineer",
      body: "Tips dan strategi untuk menghadapi interview teknis, mulai dari coding challenge, system design, hingga pertanyaan soft skill.",
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
      username: "Dino",
      slug: "mengenal-nodejs-dan-ecosystemnya",
      title: "Mengenal Node.js dan Ekosistemnya",
      body: "Node.js memungkinkan JavaScript berjalan di sisi server. Artikel ini mengupas arsitektur, kelebihan, dan bagaimana memulai proyek Node.js.",
      img: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
    },
    {
      username: "Nabila",
      slug: "web-performance-optimization-untuk-pemula",
      title: "Web Performance Optimization untuk Pemula",
      body: "Pelajari cara mempercepat loading website dengan teknik optimasi gambar, lazy loading, dan penggunaan CDN.",
      img: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg",
    },
    {
      username: "Ihsan",
      slug: "algoritma-pencarian-dan-penerapannya",
      title: "Algoritma Pencarian dan Penerapannya",
      body: "Dari linear hingga binary search, pahami perbedaan algoritma pencarian dan di mana masing-masing sebaiknya digunakan.",
      img: "https://images.pexels.com/photos/210241/pexels-photo-210241.jpeg",
    },
    {
      username: "Sinta",
      slug: "progressive-web-app-pwa-untuk-developer-modern",
      title: "Progressive Web App (PWA) untuk Developer Modern",
      body: "PWA menggabungkan kelebihan web dan aplikasi native. Pelajari cara membuat aplikasi yang bisa diakses offline, installable, dan cepat.",
      img: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg",
    },
    {
      username: "Bram",
      slug: "javascript-modularization-dengan-es6-modules",
      title: "JavaScript Modularization dengan ES6 Modules",
      body: "Modularisasi membantu menjaga kode tetap terorganisir. Pelajari bagaimana ES6 Modules bekerja dan bagaimana cara menggunakannya.",
      img: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
    },
  ];
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Articel articel={listArticel} />,
        },
        {
          path: "/Aricel/:username/:slug",
          element: <ArticelDetail articel={listArticel} />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </>
  );
}
