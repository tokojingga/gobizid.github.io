document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.closest('.card'); // Menggunakan closest untuk mencari elemen induk

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? 
            parent.querySelector('.deskripsi').innerHTML : 
            '<i>Tidak ada informasi yang tersedia</i>';

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;

        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '+62 852-9989-9161';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo, saya ingin membeli produk ini ${gambar}`;

        document.querySelector('.btnBeli').href = pesan;
    });
});

let slideIndex = 0;
let currentSlide = 0; // Menyimpan indeks slide saat ini
showSlides(currentSlide); // Menampilkan slide pertama

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) {
        console.error("Tidak ada slide yang ditemukan.");
        return;
    }

    // Mengatur semua slide menjadi tidak terlihat
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Menampilkan slide yang sesuai
    if (n >= 0 && n < slides.length) {
        slides[n].style.display = "block";
    } else {
        console.error("Index slide tidak valid:", n);
    }
}

// Memanggil showSlides setelah DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function() {
    showSlides(currentSlide); // Menampilkan slide pertama
});

// Menambahkan kontrol untuk navigasi
document.querySelector('.carousel-control-next').addEventListener('click', function() {
    currentSlide++;
    if (currentSlide >= document.getElementsByClassName("mySlides").length) {
        currentSlide = 0; // Kembali ke slide pertama
    }
    showSlides(currentSlide);
});

document.querySelector('.carousel-control-prev').addEventListener('click', function() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = document.getElementsByClassName("mySlides").length - 1; // Kembali ke slide terakhir
    }
    showSlides(currentSlide);
});

function plusSlides(n) {
    slideIndex += n - 1; // Mengatur indeks slide sesuai dengan tombol yang ditekan
    showSlides(slideIndex); // Memperbaiki pemanggilan showSlides dengan slideIndex
}
