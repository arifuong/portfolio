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
    metaTitle: "Mohamad Arifin Hasbi | Portfolio | Full Stack Developer | Software Engineer | AI & Web Developer",
    metaDesc: "Official portfolio of Mohamad Arifin Hasbi — Full Stack Developer, Software Engineer, Web Developer, and AI Specialist from Indonesia. Expert in JavaScript, TypeScript, React, Next.js, Node.js, Python, Laravel, SQL, Google Cloud, and Machine Learning.",

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
    heroRole: "Full Stack Developer · Software Engineer · AI & Web Developer",
    heroSummary: "Building modern web applications and AI solutions with expertise in Frontend Developer & Backend Developer systems using JavaScript, TypeScript, Astro, React, Next.js, Node.js, Python, Laravel, SQL, and Google Cloud Platform.",
    heroCtaProjects: "View Projects",
    heroCtaCv: "Download CV",
    heroAriaGithub: "GitHub profile of Mohamad Arifin Hasbi",
    heroAriaLinkedin: "LinkedIn profile of Mohamad Arifin Hasbi",
    heroLinkedinSubtle: "Connect with Mohamad Arifin Hasbi on LinkedIn for networking and collaboration.",

    // About
    aboutEyebrow: "About Me",
    aboutTitle: "Mohamad Arifin Hasbi — Full Stack Developer & Software Engineer from Indonesia",
    aboutParagraph1: "I am Mohamad Arifin Hasbi, a Full Stack Developer, Software Engineer, and Data Analyst enthusiast from Indonesia. Currently a 6th-semester Informatics Engineering student at STMIK Mardira Indonesia (GPA 3.64/4.00), I specialize in building high-performance web applications, scalable backend systems, and Artificial Intelligence solutions.",
    aboutParagraph2: "My core technical stack includes JavaScript, TypeScript, Astro, React, Next.js, Node.js, Python, Java (Spring Boot), PHP (Laravel, CodeIgniter), SQL (MySQL), and Google Cloud Platform. I actively integrate Machine Learning and Data Analysis to deliver intelligent software systems.",
    aboutCoursesTitle: "Relevant Coursework & Certifications",
    aboutCoursesList: "Google Cloud Skill Badge (Natural Language API), Object-Oriented Programming (OOP), Software Engineering, Database Systems, Web Programming, Expert Systems, Data Structures & Algorithms.",
    aboutStat1Value: "3+",
    aboutStat1Label: "Core Projects",
    aboutStat2Value: "3.64",
    aboutStat2Label: "GPA / 4.00",
    aboutStat3Value: "Sem 6",
    aboutStat3Label: "STMIK Mardira",

    // Skills
    skillsEyebrow: "Skills",
    skillsTitle: "Tech Stack & Competencies",
    skillsDesc: "Technologies and tools I routinely use as a Full Stack Developer, Backend Developer, and Frontend Developer to engineer modern web applications.",
    catLanguages: "Languages",
    catFrameworks: "Frameworks & Libraries",
    catDatabase: "Databases & SQL",
    catTools: "Tools & Ecosystem",
    catConcepts: "Concepts & Architecture",

    // Projects
    projectsEyebrow: "Featured Projects",
    projectsTitle: "Selected Projects & Academic Work",
    projectsDesc: "Web applications engineered with a strong emphasis on reliability, data security, and maintainable software architecture.",
    proj1Title: "Alumni Tracer Study System",
    proj1Desc: "Full stack web application for tracking and analyzing alumni career outcomes, job relevance, and curriculum feedback. Features administrative analytics dashboard and automated reporting.",
    proj2Title: "Ketupat Cinta Pre-Order System",
    proj2Desc: "E-commerce pre-order platform for artisanal food products, featuring automated order tracking, price calculations, and customer status notifications.",
    proj3Title: "Feline Disease Expert Diagnosis System",
    proj3Desc: "Expert system application utilizing the Certainty Factor algorithm and Machine Learning logic to diagnose feline medical conditions based on user-selected symptoms.",
    projectsViewGithub: "View Source Code on GitHub",

    // Experience
    expEyebrow: "Experience",
    expTitle: "Professional & Field Experience",
    expSubtitle: "A timeline of my professional experience, academic background, and Data Analyst field contributions.",
    exp1Role: "Enumerator & Data Analyst",
    exp1Company: "Central Bureau of Statistics (BPS)",
    exp1Project: "Socio-Economic Registration (Regsosek)",
    exp1Period: "2022 – 2023",
    exp1Desc: "Conducted socio-economic field interviews door-to-door, ingested field data into BPS digital systems, and performed on-site data validation and verification.",
    exp2Role: "Enumerator & Data Analyst",
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
    contactSubtitle: "Feel free to reach out for Full Stack Developer, Software Engineer, or AI Web Development projects and internships.",
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
    metaTitle: "Mohamad Arifin Hasbi | Portfolio | Full Stack Developer | Software Engineer | AI & Web Developer",
    metaDesc: "Portfolio resmi Mohamad Arifin Hasbi — Full Stack Developer, Software Engineer, Web Developer, dan AI Specialist dari Indonesia. Menguasai JavaScript, TypeScript, React, Next.js, Node.js, Python, Laravel, SQL, Google Cloud Platform, dan Machine Learning.",

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
    heroRole: "Full Stack Developer · Software Engineer · AI & Web Developer",
    heroSummary: "Membangun aplikasi web modern dan solusi AI dengan keahlian Frontend Developer & Backend Developer menggunakan JavaScript, TypeScript, Astro, React, Next.js, Node.js, Python, Laravel, SQL, dan Google Cloud Platform.",
    heroCtaProjects: "Lihat Proyek",
    heroCtaCv: "Download CV",
    heroAriaGithub: "Profil GitHub Mohamad Arifin Hasbi",
    heroAriaLinkedin: "Profil LinkedIn Mohamad Arifin Hasbi",
    heroLinkedinSubtle: "Hubungi Mohamad Arifin Hasbi di LinkedIn untuk berjejaring dan berkolaborasi.",

    // About
    aboutEyebrow: "Tentang Saya",
    aboutTitle: "Mohamad Arifin Hasbi — Full Stack Developer & Software Engineer dari Indonesia",
    aboutParagraph1: "Saya, Mohamad Arifin Hasbi, adalah seorang Full Stack Developer, Software Engineer, dan Data Analyst enthusiast dari Indonesia. Saat ini merupakan mahasiswa aktif Semester 6 program studi Teknik Informatika di STMIK Mardira Indonesia dengan IPK 3.64/4.00, berfokus pada pengembangan aplikasi web performa tinggi, arsitektur backend yang scalable, dan solusi Artificial Intelligence.",
    aboutParagraph2: "Teknologi utama yang saya kuasai meliputi JavaScript, TypeScript, Astro, React, Next.js, Node.js, Python, Java (Spring Boot), PHP (Laravel, CodeIgniter), SQL (MySQL), serta Google Cloud Platform. Saya juga mengintegrasikan teknik Machine Learning dan Data Analysis dalam pembuatan sistem perangkat lunak yang cerdas.",
    aboutCoursesTitle: "Sertifikasi & Mata Kuliah Relevan",
    aboutCoursesList: "Google Cloud Skill Badge (Natural Language API), Pemrograman Berbasis Objek (PBO), Rekayasa Perangkat Lunak, Basis Data, Pemrograman Web, Sistem Pakar, Struktur Data & Algoritma.",
    aboutStat1Value: "3+",
    aboutStat1Label: "Proyek Utama",
    aboutStat2Value: "3.64",
    aboutStat2Label: "IPK / 4.00",
    aboutStat3Value: "Sem 6",
    aboutStat3Label: "STMIK Mardira",

    // Skills
    skillsEyebrow: "Keahlian",
    skillsTitle: "Tech Stack & Kompetensi",
    skillsDesc: "Teknologi dan tools yang rutin saya gunakan sebagai Full Stack Developer, Backend Developer, dan Frontend Developer untuk merancang aplikasi web modern.",
    catLanguages: "Bahasa Pemrograman",
    catFrameworks: "Framework & Library",
    catDatabase: "Database & SQL",
    catTools: "Tools & Ekosistem",
    catConcepts: "Konsep & Arsitektur",

    // Projects
    projectsEyebrow: "Proyek Unggulan",
    projectsTitle: "Proyek Pilihan & Karya Akademik",
    projectsDesc: "Aplikasi web yang saya bangun dengan penekanan kuat pada keandalan, keamanan data, dan arsitektur yang mudah dirawat.",
    proj1Title: "Sistem Informasi Tracer Study Alumni",
    proj1Desc: "Aplikasi web full stack untuk melacak dan menganalisis karier alumni, relevansi pekerjaan, serta feedback untuk peningkatan kurikulum. Dilengkapi dashboard analitik admin dan pelaporan otomatis.",
    proj2Title: "Ketupat Cinta Pre-Order System",
    proj2Desc: "Platform e-commerce pre-order produk kuliner, dilengkapi pelacakan pesanan otomatis, kalkulasi harga, dan notifikasi status pelanggan.",
    proj3Title: "Feline Disease Expert Diagnosis System",
    proj3Desc: "Aplikasi sistem pakar menggunakan algoritma Certainty Factor dan logika Machine Learning untuk mendiagnosis kondisi medis kucing berdasarkan gejala yang dipilih pengguna.",
    projectsViewGithub: "Lihat Kode Sumber di GitHub",

    // Experience
    expEyebrow: "Pengalaman Kerja",
    expTitle: "Pengalaman Lapangan & Profesional",
    expSubtitle: "Linimasa pengalaman profesional, latar belakang akademis, dan kontribusi Data Analyst di lapangan.",
    exp1Role: "Enumerator & Data Analyst",
    exp1Company: "Badan Pusat Statistik (BPS)",
    exp1Project: "Registrasi Sosial Ekonomi (Regsosek)",
    exp1Period: "2022 – 2023",
    exp1Desc: "Melakukan wawancara lapangan sosio-ekonomi door-to-door, memasukkan data lapangan ke sistem digital BPS, serta melakukan validasi dan verifikasi data di lokasi.",
    exp2Role: "Enumerator & Data Analyst",
    exp2Company: "Kementerian Koperasi & UKM RI",
    exp2Project: "Pendataan Lengkap Koperasi & UMKM",
    exp2Period: "2023",
    exp2Desc: "Melakukan survei dan verifikasi unit usaha langsung di lapangan, mencatat profil koperasi, jumlah anggota, aset, dan volume usaha tahunan untuk basis data nasional.",
    exp3Role: "Operator",
    exp3Company: "Stasiun SPBU",
    exp3Period: "2022 – 2023",
    exp3Desc: "Melayani pelanggan dalam distribusi bahan bakar, mengelola transaksi tunai dan digital harian, serta memastikan operasional shift mematuhi standar keselamatan kerja.",

    // Contact
    contactEyebrow: "Kontak",
    contactTitle: "Mari Terhubung dan Berkolaborasi",
    contactSubtitle: "Terbuka untuk peluang proyek Full Stack Developer, Software Engineer, magang, atau diskusi seputar pengembangan web dan AI.",
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
    footerBackToTop: "Kembali ke bagian atas halaman",
    footerAriaLinkedin: "Profil LinkedIn Mohamad Arifin Hasbi"
  }
};
