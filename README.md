<h1 align="center">Quiz API</h1>

<h2 align="center">⚒️ Languages-Frameworks-Tools ⚒️</h2>
<br/>
<div align="center">
    <img src="https://skillicons.dev/icons?i=react,html,css," /><br>
    <img src="https://skillicons.dev/icons?i=nodejs,javascript,express,firebase,mongodb," />
</div>

## Deskripsi
Ini adalah proyek API aplikasi Quiz yang saya kembangkan sebagai bagian dari portofolio saya. API ini menyediakan endpoint untuk membuat, mengelola, dan mengambil soal-soal quiz beserta jawabannya. Proyek ini bertujuan untuk menunjukkan keterampilan saya dalam membangun API RESTful yang efisien dan terstruktur.

## Fitur
- Menambahkan soal dan jawaban quiz
- Mengambil daftar soal beserta opsi jawaban
- Mengambil jawaban yang benar untuk soal tertentu
- Mengelola kategori quiz
- Mengupdate dan menghapus soal

## Teknologi yang Digunakan
- **Backend**: Node.js (Express)
- **Database**: Firebase
- **Autentikasi**: Firebase auth

## Struktur API

### Endpoints

#### 1. Menambahkan Soal Baru
- **URL**: `/api/quiz`
- **Metode**: `POST`
- **Body**: 
  ```json
  {
    "question": "Apa ibukota Indonesia?",
    "option1": "Jakarta",
    "option2": "Bandung",
    "option3": "Surabaya",
    "option4": "Yogyakarta"
    "ans": "1"
  }
  ```
- **Deskripsi**: Menambahkan soal baru beserta opsi jawaban dan jawaban yang benar.

#### 2. Mendapatkan Daftar Soal
- **URL**: `/api/quiz`
- **Metode**: `GET`
- **Response**:
  ```json
quizzes: [
  {
    id: "GmcWUXRpFyDVYHNDhyVm",
    question: "Pancasila Pertama ?",
    option1: "Ketuhanan yang maha esa",
    option2: "Syahadat",
    option3: "Islam",
    option4: "Kemanusiaan",
    ans: "1",
  },
  {
    id: "wdrpztRHLIf8tR9bnjj5",
    question: "Bahasa Pemrograman dibawah ini, Kecuali?",
    option1: "Javascript",
    option2: "Python",
    option3: "C++",
    option4: "HTML",
    ans: "4",
  },
  {
    id: "x7gULiJiVOeNWPQ6NquX",
    question: "Yang termasuk bahasa pemrograman dibawah adalah ?",
    option1: "HTML",
    option2: "JSON",
    option3: "PHP",
    option4: "CSS",
    ans: "3",
  },
];
  ```
- **Deskripsi**: Mengambil semua soal yang tersedia di dalam database.


## Lisensi
Project ini dilisensikan di bawah [MIT License](LICENSE).
