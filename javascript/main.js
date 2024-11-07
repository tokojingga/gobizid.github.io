// Mengatur event listener untuk tombol detail
document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', handleDetailClick);
});

// Fungsi untuk menangani klik pada tombol detail
function handleDetailClick(e) {
    const parent = e.target.closest('.card'); // Mencari elemen induk

    // Mengambil informasi dari elemen card
    const gambar = parent.querySelector('.card-img-top').src;
    const harga = parent.querySelector('.harga').innerHTML;
    const judul = parent.querySelector('.card-text').innerHTML;
    const deskripsi = parent.querySelector('.deskripsi') ? 
        parent.querySelector('.deskripsi').innerHTML : 
        '<i>Tidak ada informasi yang tersedia</i>';

    // Menampilkan modal
    const tombolModal = document.querySelector('.btnModal');
    tombolModal.click();

    // Mengisi informasi ke dalam modal
    document.querySelector('.modalTitle').innerHTML = judul;
    updateModalImage(gambar);
    document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
    document.querySelector('.modalHarga').innerHTML = harga;

    // Mengatur link WhatsApp
    const nohp = '+62 852-9989-9161';
    const pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo, saya ingin membeli produk ini ${judul}`;
    document.querySelector('.btnBeli').href = pesan;
}

// Fungsi untuk memperbarui gambar di dalam modal
function updateModalImage(src) {
    const image = document.createElement('img');
    image.src = src;
    image.classList.add('w-100');

    const modalImageContainer = document.querySelector('.modalImage');
    modalImageContainer.innerHTML = ''; // Menghapus konten lama
    modalImageContainer.appendChild(image); // Menambahkan gambar baru
}

// Mengatur slide
let currentSlide = 0; // Menyimpan indeks slide saat ini
showSlides(currentSlide); // Menampilkan slide pertama

// Fungsi untuk menampilkan slide
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) {
        console.error("Tidak ada slide yang ditemukan.");
        return;
    }

    // Mengatur semua slide menjadi tidak terlihat
    Array.from(slides).forEach(slide => {
        slide.style.display = "none";
    });

    // Menampilkan slide yang sesuai
    if (n >= 0 && n < slides.length) {
        slides[n].style.display = "block";
    } else {
        console.error("Index slide tidak valid:", n);
    }
}

// Memanggil showSlides setelah DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", () => {
    showSlides(currentSlide); // Menampilkan slide pertama
});

// Menambahkan kontrol untuk navigasi slide
document.querySelector('.carousel-control-next').addEventListener('click', () => {
    changeSlide(1); // Pindah ke slide berikutnya
});

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    changeSlide(-1); // Pindah ke slide sebelumnya
});

// Fungsi untuk mengubah slide
function changeSlide(n) {
    currentSlide += n; // Mengatur indeks slide sesuai dengan tombol yang ditekan
    if (currentSlide >= document.getElementsByClassName("mySlides").length) {
        currentSlide = 0; // Kembali ke slide pertama
    } else if (currentSlide < 0) {
        currentSlide = document.getElementsByClassName("mySlides").length - 1; // Kembali ke slide terakhir
    }
    showSlides(currentSlide); // Menampilkan slide yang baru
}
