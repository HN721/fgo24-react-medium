import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Articel from "./pages/Articel";
import ArticelDetail from "./pages/ArticelDetail";
export default function App() {
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
      body: `Dalam lanskap pengembangan perangkat lunak modern, penanganan tanggal dan waktu merupakan fondasi yang tak terhindarkan bagi hampir setiap aplikasi, dari sistem keuangan hingga platform media sosial, dari aplikasi penjadwalan hingga layanan analitik. Akurasi, keandalan, dan kemampuan untuk beroperasi secara global dengan mempertimbangkan zona waktu dan kalender yang beragam adalah persyaratan fundamental.

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
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Articel articel={listArticel} />,
    },
    {
      path: "/Aricel/:username/:slug",
      element: <ArticelDetail articel={listArticel} />,
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
