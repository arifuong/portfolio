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
  heroAriaLinkedin: string;
  heroLinkedinSubtle: string;

  // About
  aboutEyebrow: string;
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
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
  expSubtitle: string;
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
  contactSubtitle: string;
  contactEmailLabel: string;
  contactPhoneLabel: string;
  contactGithubLabel: string;
  contactLinkedinLabel: string;
  contactLinkedinSubtitle: string;
  contactAriaLinkedin: string;
  contactSendWhatsapp: string;
  contactVisitGithub: string;
  contactVisitLinkedin: string;
  contactCopySuccess: string;

  // Footer
  footerCopyright: string;
  footerBackToTop: string;
  footerAriaLinkedin: string;
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
    heroAriaLinkedin: "LinkedIn profile of Mohamad Arifin Hasbi",
    heroLinkedinSubtle: "Connect with me on LinkedIn for networking and collaboration.",

    // About
    aboutEyebrow: "About Me",
    aboutTitle: "Informatics Student with a Passion for Full Stack Engineering",
    aboutParagraph1: "I am an active 6th-semester student pursuing Informatics Engineering at STMIK Mardira Indonesia with a 3.64/4.00 GPA. I have a deep passion for modern software engineering, scalable backend architecture, and responsive user interfaces.",
    aboutParagraph2: "Throughout my studies, I have developed web systems using Java (Spring Boot), PHP (Laravel, CodeIgniter), and JavaScript/TypeScript (React). I am experienced in applying clean architecture principles, REST API standards, and relational database management using MySQL.",
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
    expSubtitle: "A timeline of my professional experience, academic background, and community contributions.",
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
    contactSubtitle: "Feel free to reach out for collaboration, project inquiries, or just to say hi! I'm always open to discussing new opportunities.",
    contactEmailLabel: "Email",
    contactPhoneLabel: "WhatsApp",
    contactGithubLabel: "GitHub",
    contactLinkedinLabel: "LinkedIn",
    contactLinkedinSubtitle: "Let's connect professionally.",
    contactAriaLinkedin: "LinkedIn profile of Mohamad Arifin Hasbi",
    contactSendWhatsapp: "Send Message →",
    contactVisitGithub: "Visit Profile →",
    contactVisitLinkedin: "View Profile →",
    contactCopySuccess: "Email address copied to clipboard!",

    // Footer
    footerCopyright: "Mohamad Arifin Hasbi. All Rights Reserved.",
    footerBackToTop: "Back to top of page",
    footerAriaLinkedin: "LinkedIn profile of Mohamad Arifin Hasbi"
  },
  id: {
    metaTitle: "Mohamad Arifin Hasbi — Full Stack Developer & Mahasiswa Teknik Informatika",
    metaDesc: "Portofolio resmi Mohamad Arifin Hasbi, Full Stack Developer dan mahasiswa Teknik Informatika STMIK Mardira Indonesia (IPK 3.64). Menguasai Spring Boot, Laravel, React, dan MySQL.",

    // Nav
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navProjects: "Proyek",
    navExperience: "Pengalaman",
    navContact: "Kontak",
    navCvBtn: "Download CV",
    navAriaHome: "Kembali ke bagian atas halaman Mohamad Arifin Hasbi",
    navAriaMenuOpen: "Buka menu navigasi",
    navAriaMenuClose: "Tutup menu navigasi",

    // Hero
    heroBadge: "IPK 3.64 — STMIK Mardira Indonesia",
    heroName: "Mohamad Arifin Hasbi",
    heroRole: "Full Stack Developer & Mahasiswa Teknik Informatika",
    heroSummary: "Membangun aplikasi web modern menggunakan Spring Boot, Laravel, dan React dengan menerapkan clean architecture serta performa yang tinggi.",
    heroCtaProjects: "Lihat Proyek",
    heroCtaCv: "Download CV",
    heroAriaGithub: "Profil GitHub Mohamad Arifin Hasbi",
    heroAriaLinkedin: "Profil LinkedIn Mohamad Arifin Hasbi",
    heroLinkedinSubtle: "Hubungi saya di LinkedIn untuk berjejaring dan berkolaborasi.",

    // About
    aboutEyebrow: "Tentang Saya",
    aboutTitle: "Mahasiswa Teknik Informatika dengan Semangat Full Stack Engineering",
    aboutParagraph1: "Saya adalah mahasiswa aktif Semester 6 program studi Teknik Informatika di STMIK Mardira Indonesia dengan IPK 3.64/4.00. Saya memiliki ketertarikan mendalam pada pengembangan perangkat lunak modern, arsitektur backend yang scalable, dan antarmuka pengguna yang responsif.",
    aboutParagraph2: "Selama studi, saya telah membangun sistem web menggunakan Java (Spring Boot), PHP (Laravel, CodeIgniter), dan JavaScript/TypeScript (React). Saya berpengalaman dalam penerapan prinsip clean architecture, standar REST API, serta pengelolaan database relasional menggunakan MySQL.",
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
    skillsDesc: "Teknologi dan tools yang rutin saya gunakan untuk merancang, membangun, dan men-deploy aplikasi web full stack.",
    catLanguages: "Bahasa Pemrograman",
    catFrameworks: "Framework & Library",
    catDatabase: "Database",
    catTools: "Tools & Ekosistem",
    catConcepts: "Konsep & Arsitektur",

    // Projects
    projectsEyebrow: "Proyek Unggulan",
    projectsTitle: "Proyek Pilihan & Karya Akademik",
    projectsDesc: "Aplikasi web yang saya bangun dengan penekanan kuat pada keandalan, keamanan data, dan arsitektur yang mudah dirawat.",
    proj1Title: "Sistem Informasi Tracer Study Alumni",
    proj1Desc: "Aplikasi web untuk melacak dan menganalisis karier alumni, relevansi pekerjaan, serta feedback untuk peningkatan kurikulum. Dilengkapi dashboard analitik admin dan pelaporan otomatis.",
    proj2Title: "Sistem Pre-Order Ketupat Cinta",
    proj2Desc: "Platform e-commerce pre-order untuk produk makanan olahan, dilengkapi fitur pelacakan pesanan otomatis, perhitungan harga, dan notifikasi status pesanan kepada pelanggan.",
    proj3Title: "Sistem Pakar Diagnosis Penyakit Kucing",
    proj3Desc: "Aplikasi sistem pakar yang menerapkan algoritma Certainty Factor untuk mendiagnosis kondisi medis kucing berdasarkan gejala yang dipilih pengguna.",
    projectsViewGithub: "Lihat Kode Sumber di GitHub",

    // Experience
    expEyebrow: "Pengalaman Kerja",
    expTitle: "Pengalaman Lapangan & Profesional",
    expSubtitle: "Linimasa pengalaman profesional, latar belakang akademis, dan kontribusi komunitas saya.",
    exp1Role: "Enumerator",
    exp1Company: "Badan Pusat Statistik (BPS)",
    exp1Project: "Registrasi Sosial Ekonomi (Regsosek)",
    exp1Period: "2022 – 2023",
    exp1Desc: "Melakukan wawancara sosial ekonomi lapangan secara door-to-door, menginput data lapangan ke sistem digital BPS, serta melaksanakan validasi dan verifikasi data di lokasi.",
    exp2Role: "Enumerator",
    exp2Company: "Kementerian Koperasi & UKM RI",
    exp2Project: "Sensus Koperasi Nasional",
    exp2Period: "2023",
    exp2Desc: "Melakukan survei dan verifikasi unit usaha secara langsung di lapangan, mencatat profil koperasi, jumlah anggota, aset, serta volume usaha tahunan untuk database nasional.",
    exp3Role: "Operator",
    exp3Company: "SPBU",
    exp3Period: "2022 – 2023",
    exp3Desc: "Melayani pelanggan dalam distribusi bahan bakar, mengelola transaksi tunai dan digital harian, serta memastikan operasional shift mematuhi standar keselamatan secara ketat.",

    // Contact
    contactEyebrow: "Kontak",
    contactTitle: "Mari Terhubung dan Berkolaborasi",
    contactSubtitle: "Saya terbuka untuk peluang magang, proyek freelance, atau diskusi seputar pengembangan web. Silakan hubungi saya melalui media apa pun yang tersedia di bawah ini.",
    contactEmailLabel: "Email",
    contactPhoneLabel: "WhatsApp",
    contactGithubLabel: "GitHub",
    contactLinkedinLabel: "LinkedIn",
    contactLinkedinSubtitle: "Mari terhubung secara profesional.",
    contactAriaLinkedin: "Profil LinkedIn Mohamad Arifin Hasbi",
    contactSendWhatsapp: "Kirim Pesan →",
    contactVisitGithub: "Kunjungi Profil →",
    contactVisitLinkedin: "Lihat Profil →",
    contactCopySuccess: "Alamat email berhasil disalin!",

    // Footer
    footerCopyright: "Mohamad Arifin Hasbi. All Rights Reserved.",
    footerBackToTop: "Kembali ke atas",
    footerAriaLinkedin: "Profil LinkedIn Mohamad Arifin Hasbi"
  }
};
