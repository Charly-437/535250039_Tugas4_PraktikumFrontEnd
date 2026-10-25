// Menentukan struktur data yang harus dimiliki setiap anggota tim (contohnya nama rolenya apa dll)
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  description: string;
  profile: string;
};

// Simpan data anggota tim yang digunakan pada halaman tim dan halaman detailnya
export const teamMembers: TeamMember[] = [
  {
    slug: "doraemon",
    name: "Doraemon",
    role: "Kepala Inovasi Produk",
    image: "/images/characters/doraemon.png",
    description:
      "Mengembangkan ide menu kreatif untuk menghadirkan pengalaman café yang menyenangkan.",
    profile:
      "Doraemon bertanggung jawab mengembangkan ide dan inovasi produk Dorayemon Café. Ia membantu menghadirkan pilihan menu yang menarik dan sesuai dengan karakter café."
  },
  {
    slug: "nobita",
    name: "Nobita",
    role: "Layanan Pelanggan",
    image: "/images/characters/nobita.png",
    description:
      "Membantu pelanggan dan menciptakan suasana café yang ramah.",
    profile:
      "Nobita bertugas membantu pelanggan serta menerima masukan dari para pengunjung. Ia berusaha menciptakan pengalaman berkunjung yang nyaman dan menyenangkan."
  },
  {
    slug: "shizuka",
    name: "Shizuka",
    role: "Manajer Operasional",
    image: "/images/characters/shizuka.png",
    description:
      "Memastikan kegiatan operasional café berjalan tertib dan nyaman.",
    profile:
      "Shizuka mengoordinasikan kegiatan operasional sehari-hari dan membantu memastikan kebersihan, kerapian, serta kenyamanan café tetap terjaga."
  },
  {
    slug: "gian",
    name: "Gian",
    role: "Manajer Acara",
    image: "/images/characters/gian.png",
    description:
      "Menciptakan suasana meriah melalui kegiatan dan acara café.",
    profile:
      "Gian bertanggung jawab merencanakan berbagai kegiatan yang dapat membuat Dorayemon Café semakin menarik dan menghadirkan suasana menyenangkan bagi pengunjung."
  },
  {
    slug: "suneo",
    name: "Suneo",
    role: "Manajer Pemasaran",
    image: "/images/characters/suneo.png",
    description:
      "Memperkenalkan menu dan kegiatan café melalui promosi kreatif.",
    profile:
      "Suneo menangani strategi pemasaran dan promosi Dorayemon Café untuk memperkenalkan menu, kegiatan, serta identitas café kepada masyarakat."
  }
];
