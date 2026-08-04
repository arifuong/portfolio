export interface TranslationSchema {
  metaTitle: string;
  metaDesc: string;
  
  // Nav
  navAbout: string;
  navSkills: string;
  navProjects: string;
  navExperience: string;
  navContact: string;
  navCvBtn: string;
  navAriaHome: string;
  navAriaMenuOpen: string;
  navAriaMenuClose: string;

  // Hero
  heroBadge: string;
  heroName: string;
  heroRole: string;
  heroSummary: string;
  heroCtaProjects: string;
  heroCtaCv: string;
  heroAriaGithub: string;

  // About
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBio1: string;
  aboutBio2: string;
  aboutCoursesTitle: string;
  aboutCoursesList: string;
  aboutStat1Value: string;
  aboutStat1Label: string;
  aboutStat2Value: string;
  aboutStat2Label: string;
  aboutStat3Value: string;
  aboutStat3Label: string;

  // Skills
  skillsEyebrow: string;
  skillsTitle: string;
  skillsDesc: string;
  catLanguages: string;
  catFrameworks: string;
  catDatabase: string;
  catTools: string;
  catConcepts: string;

  // Projects
  projectsEyebrow: string;
  projectsTitle: string;
  projectsDesc: string;
  proj1Title: string;
  proj1Desc: string;
  proj2Title: string;
  proj2Desc: string;
  proj3Title: string;
  proj3Desc: string;
  projectsViewGithub: string;

  // Experience
  expEyebrow: string;
  expTitle: string;
  expDesc: string;
  exp1Role: string;
  exp1Company: string;
  exp1Project: string;
  exp1Period: string;
  exp1Desc: string;
  exp2Role: string;
  exp2Company: string;
  exp2Project: string;
  exp2Period: string;
  exp2Desc: string;
  exp3Role: string;
  exp3Company: string;
  exp3Period: string;
  exp3Desc: string;

  // Contact
  contactEyebrow: string;
  contactTitle: string;
  contactDesc: string;
  contactEmailLabel: string;
  contactPhoneLabel: string;
  contactGithubLabel: string;
  contactSendWhatsapp: string;
  contactVisitGithub: string;
  contactFormTitle: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactEmailInputLabel: string;
  contactEmailPlaceholder: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmitBtn: string;
  contactCopySuccess: string;

  // Footer
  footerCopyright: string;
  footerBackToTop: string;
}

export const translations: Record<'en' | 'id', TranslationSchema> = {
  en: {
    metaTitle: "Mohamad Arifin Hasbi — Full Stack Developer & IT Student",
    metaDesc: "Official portfolio of Mohamad Arifin Hasbi, Full Stack Developer and Informatics Engineering student at STMIK Mardira Indonesia (GPA 3.64). Skilled in Spring Boot, Laravel, React, and MySQL.",

    // Nav
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",
    navCvBtn: "Download CV",
    navAriaHome: "Back to top of Mohamad Arifin Hasbi page",
    navAriaMenuOpen: "Open navigation menu",
    navAriaMenuClose: "Close navigation menu",

    // Hero
    heroBadge: "GPA 3.64 — STMIK Mardira Indonesia",
    heroName: "Mohamad Arifin Hasbi",
    heroRole: "Full Stack Developer & Informatics Student",
    heroSummary: "Building modern web applications with Spring Boot, Laravel, and React using clean architecture and high performance.",
    heroCtaProjects: "View Projects",
    heroCtaCv: "Download CV",
    heroAriaGithub: "GitHub profile of Mohamad Arifin Hasbi",

    // About
    aboutEyebrow: "About Me",
    aboutTitle: "Informatics Student with a Passion for Full Stack Engineering",
    aboutBio1: "I am an active 6th-semester student pursuing Informatics Engineering at STMIK Mardira Indonesia with a 3.64/4.00 GPA. I have a deep passion for modern software engineering, scalable backend architecture, and responsive user interfaces.",
    aboutBio2: "Throughout my studies, I have developed web systems using Java (Spring Boot), PHP (Laravel, CodeIgniter), and JavaScript/TypeScript (React, Astro). Experienced in Clean Architecture principles, REST API standards, and relational database management (MySQL, PostgreSQL).",
    aboutCoursesTitle: "Relevant Coursework",
    aboutCoursesList: "Object-Oriented Programming (OOP), Software Engineering, Databases, Web Programming, Expert Systems, Data Structures & Algorithms.",
    aboutStat1Value: "3+",
    aboutStat1Label: "Core Projects",
    aboutStat2Value: "3.64",
    aboutStat2Label: "GPA / 4.00",
    aboutStat3Value: "Sem 6",
    aboutStat3Label: "STMIK Mardira",

    // Skills
    skillsEyebrow: "Skills",
    skillsTitle: "Tech Stack & Competencies",
    skillsDesc: "Technologies and tools I routinely use to design, build, and deploy full stack web applications.",
    catLanguages: "Languages",
    catFrameworks: "Frameworks & Libraries",
    catDatabase: "Databases",
    catTools: "Tools & Ecosystem",
    catConcepts: "Concepts & Architecture",

    // Projects
    projectsEyebrow: "Featured Projects",
    projectsTitle: "Selected Projects & Academic Work",
    projectsDesc: "Web applications engineered with a strong emphasis on reliability, data security, and maintainable architecture.",
    proj1Title: "Alumni Tracer Study System",
    proj1Desc: "Web application for tracking and analyzing alumni career outcomes, job relevance, and curriculum feedback. Features administrative analytics dashboard and automated reporting.",
    proj2Title: "Ketupat Cinta Pre-Order System",
    proj2Desc: "E-commerce pre-order platform for artisanal food products, featuring automated order tracking, price calculations, and customer status notifications.",
    proj3Title: "Feline Disease Expert Diagnosis System",
    proj3Desc: "Expert system application utilizing the Certainty Factor algorithm to diagnose feline medical conditions based on user-selected symptoms.",
    projectsViewGithub: "View Source Code on GitHub",

    // Experience
    expEyebrow: "Experience",
    expTitle: "Professional & Field Experience",
    expDesc: "Professional work experience and field survey operations that built discipline, communication skills, and data precision.",
    exp1Role: "Enumerator",
    exp1Company: "Central Bureau of Statistics (BPS)",
    exp1Project: "Socio-Economic Registration (Regsosek)",
    exp1Period: "2022 – 2023",
    exp1Desc: "Conducted socio-economic field interviews door-to-door, ingested field data into BPS digital systems, and performed on-site data validation and verification.",
    exp2Role: "Enumerator",
    exp2Company: "Ministry of Cooperatives & SMEs RI",
    exp2Project: "National Cooperative Census",
    exp2Period: "2023",
    exp2Desc: "Surveyed and verified business units directly on-site, recording cooperative profiles, membership size, assets, and annual business volume for the national database.",
    exp3Role: "Operator",
    exp3Company: "SPBU Station",
    exp3Period: "2022 – 2023",
    exp3Desc: "Served customers in fuel distribution, managed daily cash and digital transactions, and ensured shift operations strictly adhered to safety standards.",

    // Contact
    contactEyebrow: "Contact",
    contactTitle: "Let's Connect & Collaborate",
    contactDesc: "I am open to internship opportunities, freelance projects, or discussions about web engineering. Feel free to reach out through any channel below.",
    contactEmailLabel: "Email",
    contactPhoneLabel: "WhatsApp",
    contactGithubLabel: "GitHub",
    contactSendWhatsapp: "Send Message →",
    contactVisitGithub: "Visit Profile →",
    contactFormTitle: "Send a Direct Message",
    contactNameLabel: "Full Name",
    contactNamePlaceholder: "Enter your full name",
    contactEmailInputLabel: "Your Email",
    contactEmailPlaceholder: "name@example.com",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "Write your message or inquiry here...",
    contactSubmitBtn: "Send Message",
    contactCopySuccess: "Email address copied to clipboard!",

    // Footer
    footerCopyright: "Mohamad Arifin Hasbi. All Rights Reserved.",
    footerBackToTop: "Back to top of page"
  },
  id: {
    metaTitle: "Mohamad Arifin Hasbi — Full Stack Developer & Mahasiswa IT",
    metaDesc: "Portfolio resmi Mohamad Arifin Hasbi, Full Stack Developer dan mahasiswa Teknik Informatika STMIK Mardira Indonesia (IPK 3.64). Menguasai Spring Boot, Laravel, React, dan MySQL.",

    // Nav
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navProjects: "Proyek",
    navExperience: "Pengalaman",
    navContact: "Kontak",
    navCvBtn: "Download CV",
    navAriaHome: "Kembali ke paling atas halaman Mohamad Arifin Hasbi",
    navAriaMenuOpen: "Buka menu navigasi",
    navAriaMenuClose: "Tutup menu navigasi",

    // Hero
    heroBadge: "IPK 3.64 — STMIK Mardira Indonesia",
    heroName: "Mohamad Arifin Hasbi",
    heroRole: "Full Stack Developer & Mahasiswa Teknik Informatika",
    heroSummary: "Mengembangkan aplikasi web modern berbasis Spring Boot, Laravel, dan React dengan arsitektur bersih dan performa tinggi.",
    heroCtaProjects: "Lihat Proyek",
    heroCtaCv: "Download CV",
    heroAriaGithub: "Profil GitHub Mohamad Arifin Hasbi",

    // About
    aboutEyebrow: "Tentang Saya",
    aboutTitle: "Mahasiswa Teknik Informatika dengan Semangat Full Stack Development",
    aboutBio1: "Saya adalah mahasiswa aktif Semester 6 program studi Teknik Informatika di STMIK Mardira Indonesia dengan IPK 3.64/4.00. Memiliki ketertarikan mendalam pada pengembangan perangkat lunak modern, arsitektur backend, dan antarmuka responsif.",
    aboutBio2: "Selama studi, saya telah membangun beberapa proyek sistem informasi menggunakan Java (Spring Boot), PHP (Laravel, CodeIgniter), dan JavaScript/TypeScript (React, Astro). Saya terbiasa menerapkan prinsip Clean Architecture, REST API standards, dan pengelolaan database relational (MySQL, PostgreSQL).",
    aboutCoursesTitle: "Mata Kuliah Relevan",
    aboutCoursesList: "Pemrograman Berbasis Objek (PBO), Rekayasa Perangkat Lunak, Basis Data, Pemrograman Web, Sistem Pakar, Struktur Data & Algoritma.",
    aboutStat1Value: "3+",
    aboutStat1Label: "Proyek Utama",
    aboutStat2Value: "3.64",
    aboutStat2Label: "IPK / 4.00",
    aboutStat3Value: "Sem 6",
    aboutStat3Label: "STMIK Mardira",

    // Skills
    skillsEyebrow: "Keahlian",
    skillsTitle: "Tech Stack & Kompetensi",
    skillsDesc: "Teknologi dan tools yang biasa saya gunakan dalam membangun aplikasi full stack dari konsep hingga deployment.",
    catLanguages: "Languages",
    catFrameworks: "Frameworks & Libraries",
    catDatabase: "Database",
    catTools: "Tools & Ecosystem",
    catConcepts: "Concepts & Architecture",

    // Projects
    projectsEyebrow: "Portofolio Proyek",
    projectsTitle: "Proyek Pilihan & Karya Akademik",
    projectsDesc: "Aplikasi web yang telah saya rancang dan kembangkan dengan fokus pada fungsionalitas, keamanan data, dan arsitektur yang mudah dirawat.",
    proj1Title: "Sistem Informasi Tracer Study Alumni",
    proj1Desc: "Aplikasi web untuk melacak dan menganalisis data alumni, termasuk status pekerjaan, relevansi pendidikan, dan feedback untuk peningkatan kurikulum. Dilengkapi dashboard admin dan fitur export laporan.",
    proj2Title: "Sistem Pre-Order Ketupat Cinta",
    proj2Desc: "Platform e-commerce sederhana untuk mengelola pre-order produk makanan, dengan fitur manajemen pesanan, perhitungan harga otomatis, dan notifikasi status pesanan ke pelanggan.",
    proj3Title: "Sistem Pakar Diagnosa Penyakit Kucing",
    proj3Desc: "Aplikasi berbasis sistem pakar menggunakan metode Certainty Factor untuk mendiagnosa penyakit pada kucing berdasarkan gejala yang dipilih pengguna, dilengkapi basis pengetahuan dari pakar hewan.",
    projectsViewGithub: "Lihat Kode Sumber di GitHub",

    // Experience
    expEyebrow: "Pengalaman Kerja",
    expTitle: "Pengalaman Lapangan & Profesional",
    expDesc: "Pengalaman kerja profesional dan kegiatan pendataan lapangan yang membentuk kedisiplinan, komunikasi, dan ketelitian data.",
    exp1Role: "Enumerator",
    exp1Company: "Badan Pusat Statistik (BPS)",
    exp1Project: "Registrasi Sosial Ekonomi (Regsosek)",
    exp1Period: "2022 – 2023",
    exp1Desc: "Melakukan pendataan sosial ekonomi masyarakat melalui wawancara langsung door-to-door, input data ke sistem digital BPS, serta verifikasi dan validasi data lapangan.",
    exp2Role: "Enumerator",
    exp2Company: "Kementerian Koperasi & UKM RI",
    exp2Project: "Pendataan Koperasi Nasional",
    exp2Period: "2023",
    exp2Desc: "Pendataan dan verifikasi data koperasi secara langsung ke unit usaha, meliputi profil koperasi, jumlah anggota, aset, dan volume usaha untuk database nasional.",
    exp3Role: "Operator",
    exp3Company: "SPBU",
    exp3Period: "2022 – 2023",
    exp3Desc: "Melayani pelanggan dalam pengisian bahan bakar, mengelola transaksi harian, dan memastikan operasional shift berjalan sesuai standar keselamatan.",

    // Contact
    contactEyebrow: "Kontak",
    contactTitle: "Mari Terhubung dan Berkolaborasi",
    contactDesc: "Saya terbuka untuk peluang magang, proyek freelance, atau diskusi seputar pengembangan web. Silakan hubungi saya melalui media di bawah ini.",
    contactEmailLabel: "Email",
    contactPhoneLabel: "WhatsApp",
    contactGithubLabel: "GitHub",
    contactSendWhatsapp: "Kirim Pesan →",
    contactVisitGithub: "Kunjungi Profil →",
    contactFormTitle: "Kirim Pesan Langsung",
    contactNameLabel: "Nama Lengkap",
    contactNamePlaceholder: "Masukkan nama Anda",
    contactEmailInputLabel: "Email Anda",
    contactEmailPlaceholder: "nama@email.com",
    contactMessageLabel: "Pesan",
    contactMessagePlaceholder: "Tuliskan pesan atau penawaran Anda di sini...",
    contactSubmitBtn: "Kirim Pesan",
    contactCopySuccess: "Alamat email berhasil disalin!",

    // Footer
    footerCopyright: "Mohamad Arifin Hasbi. Hak Cipta Dilindungi Undang-Undang.",
    footerBackToTop: "Kembali ke bagian paling atas halaman"
  }
};
