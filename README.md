<h1 align="center">Quiz API</h1>

<h2 align="center">⚒️ Languages-Frameworks-Tools ⚒️</h2>
<br/>
<div align="center">
    <img src="https://skillicons.dev/icons?i=nodejs,javascript,express,firebase," />
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
  {
    "id": "GmcWUXRpFyDVYHNDhyVm",
    "question": "Apa ibukota Indonesia?",
    "option1": "Jakarta",
    "option2": "Bandung",
    "option3": "Surabaya",
    "option4": "Yogyakarta"
    "ans": "1"
  }
  ```
- **Deskripsi**: Mengambil semua soal yang tersedia di dalam database.


## Lisensi
Project ini dilisensikan di bawah [MIT License](LICENSE).
