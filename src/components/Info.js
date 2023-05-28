import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Info.css";
import Category from "./Category";
import Modal from "./Modal";
import { Link } from 'react-router-dom';

function Info() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedCard]);

  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  const handleCardHover = () => {
    // Set isHovered to true when the cursor enters the card
  };

  const handleCardLeave = () => {
    // Set isHovered to false when the cursor leaves the card
  };

  const categories = [
    {
      id: 0,
      name: "",
      cards: [
        {
          id: 11,
          title: "Taman Ujung Kulon",
          content:
            "Taman Nasional Ujung Kulon adalah sebuah Kawasan Taman Nasional yang terletak di ujung paling barat pulau Jawa. Tepatnya di kecamatan Sumur dan Cimanggu kabupaten Pandeglang provinsi Banten. Beberapa wilayah yang biasa dikunjungi oleh wisatawan di Kawasan Nasional Ujung Kulon adalah Gunung Honje, Semenanjung Ujung Kulon, Pulau Peucang, Pulau Handeleum dan Pulau Panaitan. Berhati-hati di pulau ini karena di pulau ini merupakan tempat bagi satwa rusa dan ular python. Untuk mencapai Kawasan Taman Nasional Ujung Kulon, anda dapat memulainya dengan menuju Serang, Banten dan berhenti di terminal Pakupatan untuk selanjutnya menuju Tamanjaya (Sumur) menggunakan elf. Darisana, anda dapat mencarter kapal yang tarifnya sekitar Rp 2.500.000 dengan kapasitas maximal 20 orang dan harga dapat berubah. Harga untuk kapal yang bertambat pada dermaga tiap wisata pun berbeda lagi, biasanya sekitar Rp 100.000 untuk tiap kapal.Untuk penginapan, tersedia bivak yang bertarif sekitar Rp 150.000. Atau resort Pulau Peucang yang tarifnya sekitar Rp 750.000/malam.Jika anda tidak ingin repot, saat ini banyak jasa travel yang menawarkan paket wisata ke Kawasan Nasional Taman Ujung Kulon. Tarifnya beragam dari Rp 500.000 hingga Rp 1.000.000 per orang.",
          image: "./gambar/Ujungkulon.jpeg",
        },
        {
          id: 12,
          title: "Kota Tua Jakarta",
          content: "Wisata Kota Tua Jakarta yang juga dikenal dengan sebutan Batavia Lama (Oud Batavia) ini adalah sebuah wilayah kecil di Jakarta, Indonesia. Wilayah khusus ini memiliki luas 1,3-kilometer persegi yang melintasi Jakarta Utara dan Jakarta Barat. Kawasan ini juga dijuluki dengan Permata Asia dan Ratu dari Timur pada abad ke-16 oleh pelayar Eropa. Di kawasan ini terdapat ragam bangunan tua yang masih terawat yang masing-masing memiliki sejarah. Rute menuju wisata Kota Tua Jakarta sangat mudah dilalui. Lokasi ini bisa dikunjungi dengan menggunakan kendaraan pribadi maupun transportasi umum. Bagi yang berangkat dari Bogor ataupun Tangerang dapat menggunakan KRL dan turun di Stasiun Jakarta Kota. Dilanjutkan dengan berjalan kaki sekitar 200-meter menuju Taman Fatahilah yang menjadi spot center dari Kota Tua. Atau bisa juga dengan menggunakan Transjakarta dan turun di halte Museum Fatahillah. Kota Tua bisa dibilang termasuk kawasan wisata publik, sehingga tidak ada ketentuan khusus mengenai jam operasionalnya. Jadi secara umum, Kota Tua Jakarta terbuka setiap hari Senin hingga Minggu selama 24 jam nonstop.",
          image: "./gambar/Kotatuajakarta.jpeg",
        },
        {
          id: 21,
          title: "Cukang Taneuh (Green Canyon)",
          content: "Cukang Taneuh atau Green Canyon (Ngarai Hijau) adalah salah satu objek wisata di Jawa Barat yang terletak di Desa Kertayasa Kecamatan Cijulang, Kabupaten Pangandaran. Ngarai ini terbentuk dari erosi tanah akibat aliran sungai Cijulang selama jutaan tahun yang menembus gua dengan stalaktit dan stalakmit yang mempesona serta diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang. Untuk mencapai tempat ini, kita harus menyewa sebuah perahu kayuh dari dermaga Ciseureuh. Perjalanannya memakan waktu kurang lebih 30-45 menit dengan jarak sekitar 3 km untuk sampai ke Green Canyon. Harga sampannya sekitar Rp200.000, -/Perahu untuk maksimal 5 orang dan beroperasi setiap hari mulai dari pukul 7.30 sampai 16.00 WIB,untuk hari Jum'at Tutup.Sepanjang perjalanan, mata kita akan dimanjakan oleh hijau teduhnya warna air sungai. Di mulut gua terdapat air terjun Palatar sehingga suasana di objek wisata ini terasa begitu sejuk. Kegiatan yang dapat dilakukan di antaranya panjat tebing, berenang, bersampan sambil memancing. Untuk mencapai lokasi ini wisatawan dapat menggunakan perahu yang banyak tersedia di Dermaga Ciseureuh, baik perahu tempel maupun perahu kayuh. Objek wisata ini berdekatan degan objek wisata Batu Karas serta Bandar Udara Nusawiru.",
          image: "./gambar/Cukang.jpeg",
        },
        {
          id: 22,
          title: "Telaga Warna",
          content: "Cukang Taneuh atau Green Canyon (Ngarai Hijau) adalah salah satu objek wisata di Jawa Barat yang terletak di Desa Kertayasa Kecamatan Cijulang, Kabupaten Pangandaran. Ngarai ini terbentuk dari erosi tanah akibat aliran sungai Cijulang selama jutaan tahun yang menembus gua dengan stalaktit dan stalakmit yang mempesona serta diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang. Untuk mencapai tempat ini, kita harus menyewa sebuah perahu kayuh dari dermaga Ciseureuh. Perjalanannya memakan waktu kurang lebih 30-45 menit dengan jarak sekitar 3 km untuk sampai ke Green Canyon. Harga sampannya sekitar Rp200.000, -/Perahu untuk maksimal 5 orang dan beroperasi setiap hari mulai dari pukul 7.30 sampai 16.00 WIB,untuk hari Jum'at Tutup. Sepanjang perjalanan, mata kita akan dimanjakan oleh hijau teduhnya warna air sungai. Di mulut gua terdapat air terjun Palatar sehingga suasana di objek wisata ini terasa begitu sejuk. Kegiatan yang dapat dilakukan di antaranya panjat tebing, berenang, bersampan sambil memancing. Untuk mencapai lokasi ini wisatawan dapat menggunakan perahu yang banyak tersedia di Dermaga Ciseureuh, baik perahu tempel maupun perahu kayuh. Objek wisata ini berdekatan degan objek wisata Batu Karas serta Bandar Udara Nusawiru. ",
          image: "./gambar/Telaga.jpeg",
        },
        {
          id: 23,
          title: "Candi Ratu Boko",
          content: "Ratu Boko terletak sekitar 3 km ke arah selatan dari Candi Prambanan. Kawasan Ratu Boko yang berlokasi di atas sebuah bukit dengan ketinggian ± 195.97 m diatas permukaan laut. Situs Ratu Boko sebenarnya bukan sebuah candi, melainkan reruntuhan sebuah kerajaan. Oleh karena itu, Candi Ratu Boko sering disebut juga Kraton Ratu Boko. Kraton Ratu Boko yang menempati lahan yang cukup luas tersebut terdiri atas beberapa kelompok bangunan. Sebagian besar di antaranya saat ini hanya berupa reruntuhan. Di lereng bukit tempat kawasan Ratu Boko berada, terdapat dua buah gua, yang disebut Gua Lanang dan Gua Wadon (gua lelaki dan perempuan). Gua Lanang yang terletak di timur laut ‘paseban’ merupakan lorong persegi. Di dalam gua, masing-masing di sisi kiri, kanan dan belakang, terdapat relung seperti bilik. Pada dinding gua terdapat pahatan berbentuk semacam pigura persegi panjang. Kota besar terdekat dari Ratu Boko adalah Yogyakarta. Dengan bandara Internasional Adisutjipto menjadi pilihan bagi turis mancanegara untuk mengunjungi Ratu Boko melalui Yogyakarta. Akses menuju Ratu Boko dimudahkan oleh lokasinya yang berdekatan dengan Prambanan sehingga memudahkan bagi anda yang menggunakan transportasi umum dari Yogyakarta.",
          image: "./gambar/Ratuboko.jpeg",
        },
        {
          id: 24,
          title: "Tumpak Sewu",
          content: "Air Terjun Tumpak Sewu atau disebut juga Coban Sewu adalah sebuah air terjun berketinggian sekitar 120 meter. Air terjun ini berbatasan dengan Kabupaten Lumajang dan Kabupaten Malang, Provinsi Jawa Timur. Air Terjun Tumpak Sewu memiliki aliran air yang menyerupai tirai sehingga termasuk dalam tipe air terjun Tiered. Lokasi Air Terjun Tumpak Sewu ada di dalam sebuah lembah yang curam memanjang dengan elevasi 500 meter di atas permukaan air laut. Air Terjun Tumpak Sewu terbentuk di aliran Sungai Glidih yang berhulu di Gunung Semeru. Air Terjun Tumpak Sewu terletak di perbatasan Malang-Lumajang, Jawa Timur tepatnya berada pada dua desa yaitu Desa Sidomulyo, Kecamatan Pronojiwo, Kabupaten Lumajang dan Desa Sidorenggo Kecamatan Ampel Gading Kabupaten Malang Provinsi Jawa Timur, Indonesia. ",
          image: "./gambar/TumpakSewu.jpeg",
        },
      ],
    },
  
  ];

  return (
    <>
    <div className="container">
      <h1>Where Next?</h1>
      <div className="row justify-content-center">
        {categories.map((category) => (
          <div key={category.id}>
            <Category
              category={category}
              selectedCard={selectedCard}
              handleClick={handleClick} // Pass the handleClick function
              handleCardHover={handleCardHover}
              handleCardLeave={handleCardLeave}
            />
          </div>
        ))}
      </div>

      {selectedCard && (
        <Modal
          selectedCard={selectedCard}
          closeModal={closeModal}
          handleModalClick={handleModalClick}
        />
      )}
    </div>
          <footer className='information'>
          <div className='footer'>
            <small className='website-rights'>Jaoa © 2023</small>
            <div className='social-icons'>
              <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                <i className='fab fa-facebook-f' />
              </Link>
              <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                <i className='fab fa-instagram' />
              </Link>
              <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                <i className='fab fa-youtube' />
              </Link>
              <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                <i className='fab fa-twitter' />
              </Link>
              <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </footer>
        </>

    
  );
}

export default Info;