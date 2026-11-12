/**
 * MALAKIADAS PURUSHOTHAMAN - PORTFOLIO INTERACTIVITY & I18N
 */

// --- Translation Dictionary (FR & EN) ---
const translations = {
  fr: {
    // Nav
    "nav.about": "À Propos",
    "nav.experience": "Expériences",
    "nav.education": "Formation",
    "nav.skills": "Compétences",
    "nav.portfolio": "Projets",
    "nav.contact": "Contact",
    "nav.resume_btn": "Voir le CV",

    // Hero
    "hero.status": "Disponible pour emploi à temps partiel à Paris",
    "hero.greeting": "Bonjour, je suis",
    "hero.typed_prefix": "Je suis ",
    "hero.bio": "Étudiant en Master Commerce International à l’ESCE Paris, diplômé en Médias Digitaux (Londres) et Animation (Inde). Fort d'une expérience managériale réussie chez LEON Restaurants à Londres, j'allie rigueur opérationnelle, vision commerciale internationale et créativité visuelle avancée.",
    "hero.meta_loc": "Paris & Villiers-le-Bel, France",
    "hero.meta_status": "Master ESCE (2025 – 2026)",
    "hero.meta_lang": "Anglais, Français, Tamoul",
    "hero.cta_projects": "Découvrir mes réalisations",
    "hero.cta_contact": "Me contacter",
    "badge.exp": "Expérience Management",
    "badge.exp_sub": "LEON Restaurants Londres",
    "badge.master": "Master ESCE Paris",
    "badge.master_sub": "Commerce International",

    // Stats
    "stat.countries": "Pays d'études & travail",
    "stat.experience": "Années d'expérience",
    "stat.languages": "Langues parlées",
    "stat.satisfaction": "Engagement & rigueur",

    // About
    "about.tag": "Profil Professionnel",
    "about.title": "Convergence entre Stratégie Commerciale, Gestion Opérationnelle et Créativité",
    "about.p1": "Actuellement en <strong>Master en Commerce International à l’ESCE Business School – Paris</strong>, je recherche une opportunité professionnelle stimulante à <strong>temps partiel</strong> en parallèle de mon cursus universitaire.",
    "about.p2": "Mon parcours international m'a conduit de <strong>Bangalore</strong> (Bachelor en Médias Digitaux & Animation) à <strong>Londres</strong> (Master en Médias Digitaux et progression rapide d'équipier à Assistant Manager chez <em>LEON Restaurants</em>) puis à <strong>Paris</strong>. Cette trajectoire m'a forgé une <strong>adaptabilité hors pair</strong>, un leadership naturel et un sens aigu de la relation client.",
    "about.h1_title": "Gestion du Stress",
    "about.h1_desc": "Sang-froid éprouvé en environnements à cadence élevée.",
    "about.h2_title": "Esprit d'Initiative",
    "about.h2_desc": "Proactif dans l'optimisation des flux et des performances.",
    "value.val1_title": "Leadership Opérationnel",
    "value.val1_desc": "Supervision d'équipes de restauration rapide haut de gamme, formation continue et optimisation des flux de service.",
    "value.val2_title": "Compétences Digitales & Créatives",
    "value.val2_desc": "Maîtrise approfondie de la Suite Adobe (Photoshop, Premiere Pro, Illustrator, Lightroom) pour concevoir des supports percutants.",
    "value.val3_title": "Agilité Multiculturelle",
    "value.val3_desc": "Capacité d'intégration immédiate dans des équipes cosmopolites, bilingue anglais avec pratique du français et du tamoul.",

    // Experience
    "exp.tag": "Parcours Professionnel",
    "exp.title": "Expériences Opérationnelles & Créatives",
    "exp.desc": "Une montée en compétences continue, alliant responsabilité opérationnelle et création graphique.",
    "exp.leon_mgr_role": "Assistant Manager",
    "exp.leon_mgr_company": "LEON Restaurants • Londres, Farringdon",
    "exp.leon_mgr_date": "2023 – 2025",
    "exp.leon_mgr_loc": "Londres, Royaume-Uni",
    "exp.leon_mgr_d1": "Supervision des opérations quotidiennes et management d'équipe pour garantir un service d'excellence.",
    "exp.leon_mgr_d2": "Gestion proactive de la relation client et optimisation des performances commerciales et des ratios.",
    "exp.leon_mgr_d3": "Recrutement, formation et coaching du personnel afin de renforcer l'engagement et la rétention.",
    "exp.leon_mgr_d4": "Participation active à l'amélioration continue des processus opérationnels et de la rentabilité.",

    "exp.leon_team_role": "Membre de l'Équipe (Barista & Commis)",
    "exp.leon_team_company": "LEON Restaurants",
    "exp.leon_team_date": "2023 – 2025",
    "exp.leon_team_loc": "Londres, Royaume-Uni",
    "exp.leon_team_d1": "Fonctions de barista et commis de cuisine avec rigueur, rapidité et hygiène irréprochable.",
    "exp.leon_team_d2": "Maîtrise complète de l'ensemble des postes de travail opérationnels en amont de la promotion.",
    "exp.leon_team_d3": "Excellente collaboration d'équipe pour assurer un service fluide aux heures de pointe.",
    "exp.leon_team_d4": "Démonstration de compétences en leadership favorisant la nomination au poste d'Assistant Manager.",

    "exp.rec_role": "Réceptionniste (Temps Partiel)",
    "exp.rec_company": "La Ratatouille",
    "exp.rec_date": "2021 – 2022",
    "exp.rec_loc": "Inde",
    "exp.rec_d1": "Accueil client chaleureux et personnalisé, garantissant une expérience d'accueil positive.",
    "exp.rec_d2": "Gestion des réservations téléphoniques et numériques et optimisation de l'occupation.",
    "exp.rec_d3": "Coordination fluide de la réception pendant les flux d'affluence intense.",
    "exp.rec_d4": "Traitement rigoureux et professionnel des requêtes en face à face et par téléphone.",
    "exp.rec_d5": "Équilibre réussi et performant entre activité professionnelle exigeante et études supérieures.",

    "exp.des_role": "Graphiste & Designer Visuel",
    "exp.des_company": "Netsteds Interior",
    "exp.des_date": "2020 – 2021",
    "exp.des_loc": "Bangalore, Inde",
    "exp.des_d1": "Création de supports visuels pour la communication digitale, le branding et l'architecture d'intérieur.",
    "exp.des_d2": "Collaboration étroite avec les équipes marketing pour la production de catalogues et posts sociaux.",
    "exp.des_d3": "Utilisation poussée des logiciels Adobe (Photoshop, Illustrator) pour les rendus graphiques.",

    // Education
    "edu.tag": "Cursus Universitaire",
    "edu.title": "Formation Académique Internationale",
    "edu.desc": "Un parcours d'excellence traversant trois capitales mondiales de l'innovation et du business.",
    "edu.esce_deg": "Master en Commerce International",
    "edu.esce_sch": "ESCE Business School",
    "edu.esce_loc": "Paris, France • 2025 – 2026",
    "edu.esce_desc": "Approfondissement des stratégies de commerce mondial, négociation internationale, supply chain et gestion commerciale interculturelle.",
    "edu.lmu_deg": "Master en Médias Digitaux",
    "edu.lmu_sch": "London Metropolitan University",
    "edu.lmu_loc": "Londres, Royaume-Uni • 2023 – 2025",
    "edu.lmu_desc": "Stratégie de contenu numérique, production vidéo avancée, storytelling multimédia et communication de marque.",
    "edu.sjc_deg": "Bachelor en Médias Digitaux & Animation",
    "edu.sjc_sch": "St. Joseph's College",
    "edu.sjc_loc": "Bangalore, Inde • 2018 – 2021",
    "edu.sjc_desc": "Fondamentaux de la composition graphique, modélisation 2D/3D, animation, théorie des couleurs et montage audiovisuel.",

    // Skills
    "skills.tag": "Expertise & Outils",
    "skills.title": "Compétences & Savoir-Faire",
    "skills.desc": "Une combinaison rare de créativité numérique, de sens des affaires et de qualités humaines.",
    "skills.cat_creative": "Outils Créatifs & Digitaux",
    "skills.cat_mgmt": "Management & Commerce",
    "skills.cat_langs": "Langues & Savoir-Être",
    "skills.cert_title": "Certifications Officielles",
    "skills.cert_delf": "DELF A1 – Diplôme d'Études en Langue Française",
    "skills.cert_fitness": "Certification Fitness Trainer – ISCC International Sports & Coaching",

    // Portfolio
    "port.tag": "Réalisations",
    "port.title": "Portfolio & Études de Cas",
    "port.desc": "Sélection de projets illustrant mes compétences créatives, managériales et commerciales.",
    "port.filter_all": "Tous les projets",
    "port.filter_creative": "Création & Graphisme",
    "port.filter_mgmt": "Management & Opérations",
    "port.filter_business": "Commerce & Stratégie",

    // Contact
    "contact.tag": "Discutons Ensemble",
    "contact.title": "Entrons en Contact",
    "contact.desc": "Disponible immédiatement pour un entretien ou une proposition d'emploi à temps partiel à Paris.",
    "contact.form_name": "Votre Nom & Prénom",
    "contact.form_email": "Adresse Email",
    "contact.form_subject": "Sujet",
    "contact.form_message": "Votre Message",
    "contact.form_btn": "Envoyer le message",
    "contact.copy": "Copier"
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.resume_btn": "View Resume",

    // Hero
    "hero.status": "Available for Part-Time Roles in Paris",
    "hero.greeting": "Hello, I am",
    "hero.typed_prefix": "I am a ",
    "hero.bio": "Master's student in International Business at ESCE Paris, with dual degrees in Digital Media (London) and Animation (India). Having risen to Assistant Manager at LEON Restaurants in London, I combine operational leadership, international business acumen, and advanced visual design.",
    "hero.meta_loc": "Paris & Villiers-le-Bel, France",
    "hero.meta_status": "Master @ ESCE Paris (2025 – 2026)",
    "hero.meta_lang": "English, French, Tamil",
    "hero.cta_projects": "View My Work",
    "hero.cta_contact": "Get in Touch",
    "badge.exp": "Operational Leadership",
    "badge.exp_sub": "LEON Restaurants London",
    "badge.master": "Master's at ESCE Paris",
    "badge.master_sub": "International Business",

    // Stats
    "stat.countries": "Countries of Study & Work",
    "stat.experience": "Years of Experience",
    "stat.languages": "Languages Spoken",
    "stat.satisfaction": "Rigor & Commitment",

    // About
    "about.tag": "Professional Profile",
    "about.title": "Bridging Business Strategy, Operational Excellence & Creative Vision",
    "about.p1": "Currently pursuing a <strong>Master in International Business at ESCE Business School – Paris</strong>, I am actively seeking a rewarding <strong>part-time position</strong> alongside my university studies.",
    "about.p2": "My journey has taken me from <strong>Bangalore</strong> (Bachelor's in Digital Media & Animation) to <strong>London</strong> (Master's in Digital Media & progression from team member to Assistant Manager at <em>LEON Restaurants</em>) and now to <strong>Paris</strong>. This international background has fostered exceptional <strong>adaptability</strong>, natural leadership, and keen customer-centricity.",
    "about.h1_title": "Stress Resilience",
    "about.h1_desc": "Proven composure and clarity under fast-paced service pressure.",
    "about.h2_title": "Proactive Initiative",
    "about.h2_desc": "Constantly optimizing operational workflows and team output.",
    "value.val1_title": "Operational Leadership",
    "value.val1_desc": "Managing high-volume London hospitality shifts, staff onboarding, team coaching, and seamless floor operations.",
    "value.val2_title": "Creative Digital Expertise",
    "value.val2_desc": "Proficiency in Adobe Creative Cloud (Photoshop, Premiere Pro, Illustrator, Lightroom) for high-impact visual storytelling.",
    "value.val3_title": "Multicultural Agility",
    "value.val3_desc": "Effortless collaboration across international teams, fluent English speaker with French and Tamil fluency.",

    // Experience
    "exp.tag": "Career Journey",
    "exp.title": "Leadership & Creative Experience",
    "exp.desc": "A continuous progression blending floor management, guest relations, and visual communication.",
    "exp.leon_mgr_role": "Assistant Manager",
    "exp.leon_mgr_company": "LEON Restaurants • London, Farringdon",
    "exp.leon_mgr_date": "2023 – 2025",
    "exp.leon_mgr_loc": "London, United Kingdom",
    "exp.leon_mgr_d1": "Supervised daily store operations and managed the team to ensure consistent high-quality service.",
    "exp.leon_mgr_d2": "Drove customer relationship management, optimized commercial KPIs and labor cost efficiency.",
    "exp.leon_mgr_d3": "Trained, mentored and empowered team members to foster higher retention and engagement.",
    "exp.leon_mgr_d4": "Actively drove continuous improvements in store processes, food safety, and overall business metrics.",

    "exp.leon_team_role": "Team Member (Barista & Kitchen Staff)",
    "exp.leon_team_company": "LEON Restaurants",
    "exp.leon_team_date": "2023 – 2025",
    "exp.leon_team_loc": "London, United Kingdom",
    "exp.leon_team_d1": "Delivered exceptional barista and culinary support with speed, precision, and hygiene.",
    "exp.leon_team_d2": "Mastered all operational service stations prior to managerial promotion.",
    "exp.leon_team_d3": "Maintained high-energy team coordination during extreme morning and lunchtime peak hours.",
    "exp.leon_team_d4": "Demonstrated natural leadership and problem-solving, earning promotion to Assistant Manager.",

    "exp.rec_role": "Receptionist (Part-time)",
    "exp.rec_company": "La Ratatouille",
    "exp.rec_date": "2021 – 2022",
    "exp.rec_loc": "India",
    "exp.rec_d1": "Delivered warm and tailored customer welcomes, ensuring an exceptional guest journey.",
    "exp.rec_d2": "Handled booking systems efficiently to maximize table turnover and revenue.",
    "exp.rec_d3": "Coordinated front-of-house operations effectively during high-traffic dining hours.",
    "exp.rec_d4": "Addressed guest inquiries with precision and diplomacy, both in person and via phone.",
    "exp.rec_d5": "Maintained an exemplary balance between rigorous part-time work and university studies.",

    "exp.des_role": "Graphic Designer & Visual Communicator",
    "exp.des_company": "Netsteds Interior",
    "exp.des_date": "2020 – 2021",
    "exp.des_loc": "Bangalore, India",
    "exp.des_d1": "Designed promotional and brand identity assets for marketing and interior design clients.",
    "exp.des_d2": "Worked in close collaboration with the marketing team on catalog layouts and digital media.",
    "exp.des_d3": "Leveraged Adobe Photoshop & Illustrator for high-fidelity graphic production.",

    // Education
    "edu.tag": "Academic Qualifications",
    "edu.title": "Global Higher Education",
    "edu.desc": "Academic foundation spanning three major cultural and economic world capitals.",
    "edu.esce_deg": "Master in International Business",
    "edu.esce_sch": "ESCE Business School",
    "edu.esce_loc": "Paris, France • 2025 – 2026",
    "edu.esce_desc": "Global market expansion strategies, international trade regulations, supply chain dynamics, and intercultural negotiation.",
    "edu.lmu_deg": "Master in Digital Media",
    "edu.lmu_sch": "London Metropolitan University",
    "edu.lmu_loc": "London, United Kingdom • 2023 – 2025",
    "edu.lmu_desc": "Digital content strategy, advanced video editing, multimedia storytelling, and brand media campaigns.",
    "edu.sjc_deg": "Bachelor in Digital Media & Animation",
    "edu.sjc_sch": "St. Joseph's College",
    "edu.sjc_loc": "Bangalore, India • 2018 – 2021",
    "edu.sjc_desc": "Visual arts fundamentals, 2D/3D modeling, digital animation, color harmony, and motion graphics production.",

    // Skills
    "skills.tag": "Toolkit & Expertise",
    "skills.title": "Skills & Competencies",
    "skills.desc": "A well-rounded profile bridging creative design, business administration, and people skills.",
    "skills.cat_creative": "Digital & Creative Suite",
    "skills.cat_mgmt": "Business & Management",
    "skills.cat_langs": "Languages & Soft Skills",
    "skills.cert_title": "Official Certifications",
    "skills.cert_delf": "DELF A1 – Diplôme d'Études en Langue Française",
    "skills.cert_fitness": "Fitness Trainer Certification – ISCC International Sports & Coaching",

    // Portfolio
    "port.tag": "Case Studies",
    "port.title": "Featured Projects & Work",
    "port.desc": "A curated showcase of creative design, operational achievements, and strategic projects.",
    "port.filter_all": "All Projects",
    "port.filter_creative": "Creative & Design",
    "port.filter_mgmt": "Operations & Leadership",
    "port.filter_business": "Business & Strategy",

    // Contact
    "contact.tag": "Let's Connect",
    "contact.title": "Get In Touch",
    "contact.desc": "Available immediately for interviews and part-time opportunities in Paris.",
    "contact.form_name": "Your Full Name",
    "contact.form_email": "Email Address",
    "contact.form_subject": "Subject",
    "contact.form_message": "Your Message",
    "contact.form_btn": "Send Message",
    "contact.copy": "Copy"
  }
};

// --- Roles for the dynamic typing effect ---
const typedRoles = {
  fr: [
    "Étudiant Master ESCE Paris",
    "Spécialiste Médias Digitaux",
    "Assistant Manager & Leader",
    "Créateur de Contenu & Graphiste"
  ],
  en: [
    "International Business Student",
    "Digital Media Specialist",
    "Hospitality Assistant Manager",
    "Graphic & Visual Designer"
  ]
};

// Current language state
let currentLang = localStorage.getItem('site_lang') || 'fr';

// --- Initialization on DOM Load ---
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitcher();
  setupTypingEffect();
  setupNavbar();
  setupFilters();
  setupModals();
  setupClipboard();
  setupContactForm();
  applyLanguage(currentLang);
});

// --- Language Switcher Logic ---
function setupLanguageSwitcher() {
  const frBtn = document.getElementById('lang-fr');
  const enBtn = document.getElementById('lang-en');

  if (!frBtn || !enBtn) return;

  frBtn.addEventListener('click', () => switchLanguage('fr'));
  enBtn.addEventListener('click', () => switchLanguage('en'));
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Update button states
  const frBtn = document.getElementById('lang-fr');
  const enBtn = document.getElementById('lang-en');
  if (frBtn && enBtn) {
    frBtn.classList.toggle('active', lang === 'fr');
    enBtn.classList.toggle('active', lang === 'en');
  }

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholder attributes if any
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Restart typing effect with new language list
  resetTypingEffect();
}

// --- Typing Effect ---
let typingTimeout = null;
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function setupTypingEffect() {
  startTyping();
}

function resetTypingEffect() {
  clearTimeout(typingTimeout);
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  startTyping();
}

function startTyping() {
  const typedEl = document.getElementById('typed-text');
  if (!typedEl) return;

  const roles = typedRoles[currentLang] || typedRoles.en;
  const currentRole = roles[roleIndex % roles.length];

  if (isDeleting) {
    typedEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 2000; // pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex++;
    delay = 400; // pause before next word
  }

  typingTimeout = setTimeout(startTyping, delay);
}

// --- Navbar Behavior ---
function setupNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when clicking links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggle) mobileToggle.textContent = '☰';
      });
    });
  }
}

// --- Project Portfolio Filtering ---
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// --- Modal System for Projects & Resume ---
const projectData = {
  1: {
    titleFr: "Branding & Visuels d'Intérieur – Netsteds Interior",
    titleEn: "Brand Identity & Interior Collateral – Netsteds Interior",
    tagFr: "Design Graphique & Marketing",
    tagEn: "Graphic Design & Marketing",
    descFr: "Conception complète de la charte visuelle, de catalogues d'architecture intérieure et de campagnes promotionnelles pour les réseaux sociaux. Production vectorielle sous Illustrator et retouche avancée sous Photoshop pour valoriser les réalisations d'agencement intérieur.",
    descEn: "Comprehensive visual branding, interior architecture catalogs, and social media campaign designs. Advanced vector graphics created with Adobe Illustrator and high-fidelity photorealistic retouching in Photoshop.",
    metrics: ["+40% Engagement sur les réseaux sociaux", "5+ Catalogues imprimés et digitaux", "Direction artistique complète"],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Lightroom", "Visual Storytelling"]
  },
  2: {
    titleFr: "Optimisation Opérationnelle – LEON Restaurants Londres",
    titleEn: "Store Operations Optimization – LEON Restaurants London",
    tagFr: "Management & Service Client",
    tagEn: "Management & Customer Experience",
    descFr: "Supervision des shifts à forte cadence dans le quartier d'affaires de Farringdon à Londres. Mise en place de protocoles de formation des nouveaux équipiers, gestion active des flux clients et réduction des temps d'attente aux bornes et au comptoir.",
    descEn: "Supervising high-traffic daily shifts in London's financial district (Farringdon). Implemented structured barista and kitchen onboarding workflows, optimized peak-hour queue flow, and boosted customer satisfaction scores.",
    metrics: ["Promotion rapide d'équipier à Assistant Manager", "Supervision d'équipes jusqu'à 15 collaborateurs", "Amélioration des scores d'audit qualité"],
    tools: ["Team Leadership", "People Management", "Operations Audit", "Microsoft Excel"]
  },
  3: {
    titleFr: "Montage & Storytelling Multimédia – Master Médias Digitaux",
    titleEn: "Multimedia Video Editing & Storytelling – London Met",
    tagFr: "Production Vidéo & Animation",
    tagEn: "Video Production & Motion",
    descFr: "Création de capsules vidéo narratives, montage dynamique sous Adobe Premiere Pro, étalonnage sous Lightroom et intégration d'animations motion design. Approche centrée sur l'engagement utilisateur et la diffusion multicanale.",
    descEn: "Production of dynamic video narratives, advanced editing in Adobe Premiere Pro, color grading in Lightroom, and motion graphics integration for omni-channel digital media campaigns.",
    metrics: ["Production de documentaires courts & teasers", "Étalonnage couleur cinématique", "Maîtrise de la narration visuelle"],
    tools: ["Adobe Premiere Pro", "Adobe Lightroom", "Digital Animation", "Sound Design"]
  },
  4: {
    titleFr: "Étude d'Implantation Internationale – ESCE Paris",
    titleEn: "International Expansion Strategy – ESCE Paris",
    tagFr: "Commerce International",
    tagEn: "International Business",
    descFr: "Analyse stratégique de pénétration de marché européen pour des produits lifestyle durables. Étude comparative des réglementations douanières, analyse PESTEL, segmentation des consommateurs et projections financières.",
    descEn: "Strategic cross-border market entry analysis for sustainable lifestyle brands into European markets. Evaluated trade regulations, PESTEL frameworks, consumer psychographics, and logistics supply chain.",
    metrics: ["Analyse prévisionnelle de rentabilité", "Stratégie de supply chain transfrontalière", "Recommandations commerciales"],
    tools: ["International Trade", "Market Analysis", "Strategic Planning", "Excel Financial Modeling"]
  },
  5: {
    titleFr: "Gestion Hôtelière & Relations Clients – La Ratatouille",
    titleEn: "Guest Experience & Reservation Management – La Ratatouille",
    tagFr: "Service Client & Hospitalité",
    tagEn: "Hospitality & Guest Relations",
    descFr: "Coordination du service d'accueil en temps partiel, planification rigoureuse des tables et gestion des requêtes spécifiques des convives dans un environnement gastronomique dynamique.",
    descEn: "Delivering exceptional guest reception, front-desk reservation management, and resolving real-time guest inquiries with composure in a fine-dining establishment.",
    metrics: ["Excellence du taux de satisfaction clients", "Gestion simultanée des flux physiques et téléphoniques"],
    tools: ["Reservation Systems", "Conflict Resolution", "Interpersonal Communication", "Bilingual Service"]
  },
  6: {
    titleFr: "Animation Numérique & Composition 2D – St. Joseph's",
    titleEn: "Digital Animation & Concept Art – St. Joseph's College",
    tagFr: "Animation & Arts Visuels",
    tagEn: "Animation & Visual Arts",
    descFr: "Réalisation de storyboards, conception de personnages vectoriels, animation image par image et modélisation de décors créatifs. Solide compréhension de l'anatomie, des principes d'animation et de la théorie de la lumière.",
    descEn: "Storyboard development, vector character design, frame-by-frame 2D animation, and scenic digital rendering. Strong foundation in color theory, character movement, and artistic composition.",
    metrics: ["Court-métrage d'animation étudiant", "Exposition de concepts visuels", "Prix de créativité artistique"],
    tools: ["Adobe Illustrator", "Photoshop", "Frame-by-Frame Animation", "Character Design"]
  }
};

function setupModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-details');

  if (!modal) return;

  // Click on project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const item = projectData[id];
      if (!item) return;

      const isFr = currentLang === 'fr';
      const title = isFr ? item.titleFr : item.titleEn;
      const tag = isFr ? item.tagFr : item.tagEn;
      const desc = isFr ? item.descFr : item.descEn;

      modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <span class="project-badge-top" style="position: static; display: inline-block; margin-bottom: 0.8rem;">${tag}</span>
          <h2 style="font-size: 1.8rem; margin-bottom: 0.8rem;">${title}</h2>
          <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7;">${desc}</p>
        </div>

        <div style="margin-bottom: 1.8rem;">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.8rem; color: var(--accent-primary);">
            ${isFr ? 'Points Clés & Résultats' : 'Key Highlights & Metrics'}
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
            ${item.metrics.map(m => `
              <li style="display: flex; align-items: center; gap: 0.6rem; color: var(--text-primary); font-size: 0.95rem;">
                <span style="color: var(--accent-gold);">✔</span> ${m}
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h4 style="font-size: 1.05rem; margin-bottom: 0.8rem; color: var(--accent-primary);">
            ${isFr ? 'Compétences & Outils Mobilisés' : 'Skills & Tools Leveraged'}
          </h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${item.tools.map(t => `<span class="timeline-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;

      modal.classList.add('active');
    });
  });

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Resume Modal Setup
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('view-resume-btn');
  const openHeroResumeBtn = document.getElementById('hero-resume-btn');
  const closeResumeBtn = document.getElementById('resume-modal-close');
  const printResumeBtn = document.getElementById('print-resume-btn');

  const openResume = () => {
    if (resumeModal) resumeModal.classList.add('active');
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (openHeroResumeBtn) openHeroResumeBtn.addEventListener('click', openResume);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', () => resumeModal.classList.remove('active'));
  if (printResumeBtn) printResumeBtn.addEventListener('click', () => window.print());

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) resumeModal.classList.remove('active');
    });
  }
}

// --- Copy to Clipboard and Toast Notification ---
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function setupClipboard() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const msg = currentLang === 'fr' 
          ? `Copié : ${textToCopy}` 
          : `Copied: ${textToCopy}`;
        showToast(msg);
      }).catch(() => {
        // Fallback
        showToast(`Copied: ${textToCopy}`);
      });
    });
  });
}

// --- Contact Form Submission Simulator ---
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>⏳ ${currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...'}</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      const successMsg = currentLang === 'fr'
        ? "Merci ! Votre message a bien été envoyé. Je vous répondrai très rapidement."
        : "Thank you! Your message has been sent. I will respond promptly.";
      showToast(successMsg);
    }, 1000);
  });
}
