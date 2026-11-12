/**
 * MALAKIADAS PURUSHOTHAMAN - PORTFOLIO INTERACTIVITY & I18N
 * Spider-Man Colorways & Digital/Creative/International Business Focus
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
    "hero.bio": "Étudiant en Master Commerce International à l’ESCE Paris, diplômé en Médias Digitaux (Londres) et Animation (Inde). Passionné par la convergence entre création visuelle et vision commerciale mondiale, je mets mon expertise en Suite Adobe, production audiovisuelle et stratégie internationale au service de projets ambitieux.",
    "hero.meta_loc": "Paris & Villiers-le-Bel, France",
    "hero.meta_status": "Master ESCE (2025 – 2026)",
    "hero.meta_lang": "Anglais, Français, Tamoul",
    "hero.cta_projects": "Découvrir mes réalisations",
    "hero.cta_contact": "Me contacter",
    "badge.exp": "Créatif & Médias Digitaux",
    "badge.exp_sub": "Suite Adobe & Production",
    "badge.master": "Master ESCE Paris",
    "badge.master_sub": "Commerce International",

    // Stats
    "stat.countries": "Pays d'études & travail",
    "stat.experience": "Années de formation & projets",
    "stat.languages": "Langues parlées",
    "stat.satisfaction": "Rigueur & Créativité",

    // About
    "about.tag": "Profil Professionnel",
    "about.title": "Convergence entre Stratégie Commerciale, Médias Digitaux et Créativité",
    "about.p1": "Actuellement en <strong>Master en Commerce International à l’ESCE Business School – Paris</strong>, je recherche une opportunité professionnelle stimulante à <strong>temps partiel</strong> en parallèle de mon cursus universitaire.",
    "about.p2": "Mon parcours international m'a conduit de <strong>Bangalore</strong> (Bachelor en Médias Digitaux & Animation) à <strong>Londres</strong> (Master en Médias Digitaux) puis à <strong>Paris</strong>. Cette trajectoire unique combine une expertise pointue en <strong>production graphique et audiovisuelle</strong> avec une compréhension stratégique des <strong>échanges commerciaux internationaux</strong>.",
    "about.h1_title": "Gestion du Stress",
    "about.h1_desc": "Sang-froid éprouvé lors des livraisons de projets à forte cadence.",
    "about.h2_title": "Esprit d'Initiative",
    "about.h2_desc": "Proactif dans la conception de solutions visuelles innovantes.",
    "value.val1_title": "Création Digitale & Direction Artistique",
    "value.val1_desc": "Maîtrise approfondie de la Suite Adobe (Photoshop, Premiere Pro, Illustrator, Lightroom) pour concevoir des supports visuels et vidéos percutants.",
    "value.val2_title": "Stratégie Internationale & Marchés",
    "value.val2_desc": "Analyse d'expansion mondiale, marketing digital transfrontalier et négociation interculturelle développés à l'ESCE Paris.",
    "value.val3_title": "Agilité Multiculturelle",
    "value.val3_desc": "Capacité d'intégration immédiate dans des environnements internationaux, bilingue anglais avec pratique du français et du tamoul.",

    // Experience
    "exp.tag": "Parcours Professionnel",
    "exp.title": "Expériences Créatives, Digitales & Stratégiques",
    "exp.desc": "Un parcours axé sur la création graphique, la réalisation multimédia et le développement commercial international.",
    
    // Exp 1: Freelance Digital Media
    "exp.med_role": "Spécialiste Médias Digitaux & Vidéo",
    "exp.med_company": "Projets Multimédia & Freelance",
    "exp.med_date": "2023 – Présent",
    "exp.med_loc": "Londres & Paris",
    "exp.med_d1": "Production, montage et étalonnage de vidéos dynamiques sous Adobe Premiere Pro et Lightroom.",
    "exp.med_d2": "Direction artistique et conception d'éléments graphiques pour des campagnes digitales omnicanales.",
    "exp.med_d3": "Élaboration de narrations visuelles captivantes maximisant l'engagement sur les réseaux sociaux.",
    "exp.med_d4": "Gestion complète des projets créatifs, du brief client au rendu final haute définition.",

    // Exp 2: Netsteds Interior
    "exp.des_role": "Graphiste & Designer Visuel",
    "exp.des_company": "Netsteds Interior",
    "exp.des_date": "2020 – 2021",
    "exp.des_loc": "Bangalore, Inde",
    "exp.des_d1": "Création de supports visuels pour la communication de marque et le design d’intérieur.",
    "exp.des_d2": "Collaboration étroite avec l’équipe marketing pour la production de catalogues et posts sociaux.",
    "exp.des_d3": "Utilisation avancée des logiciels Adobe (Photoshop, Illustrator) pour les rendus graphiques.",

    // Exp 3: ESCE Paris Projects
    "exp.esce_proj_role": "Consultant Junior en Stratégie Internationale",
    "exp.esce_proj_company": "ESCE Business School • Projets Académiques",
    "exp.esce_proj_date": "2025 – 2026",
    "exp.esce_proj_loc": "Paris, France",
    "exp.esce_proj_d1": "Études de marché et stratégies d'expansion transfrontalières pour des marques innovantes.",
    "exp.esce_proj_d2": "Analyses PESTEL, études concurrentielles et identification des opportunités commerciales.",
    "exp.esce_proj_d3": "Modélisation de prévisions de vente et plans de rentabilité sous Microsoft Excel.",
    "exp.esce_proj_d4": "Présentations de recommandations stratégiques en contextes bilingues anglais et français.",

    // Exp 4: Animation & Motion
    "exp.anim_role": "Concepteur Motion Graphics & Animation 2D",
    "exp.anim_company": "St. Joseph's College • Projets de Création",
    "exp.anim_date": "2019 – 2021",
    "exp.anim_loc": "Bangalore, Inde",
    "exp.anim_d1": "Réalisation de storyboards et conception de décors et personnages vectoriels.",
    "exp.anim_d2": "Animation 2D image par image et composition graphique sous la Suite Adobe.",
    "exp.anim_d3": "Participation à des projets créatifs d'animation récompensés pour leur originalité visuelle.",

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
    "edu.lmu_desc": "Stratégie de contenu numérique, production vidéo avancée, storytelling multimédia et communication de marque digitale.",
    "edu.sjc_deg": "Bachelor en Médias Digitaux & Animation",
    "edu.sjc_sch": "St. Joseph's College",
    "edu.sjc_loc": "Bangalore, Inde • 2018 – 2021",
    "edu.sjc_desc": "Fondamentaux de la composition graphique, modélisation 2D/3D, animation, théorie des couleurs et montage audiovisuel.",

    // Skills
    "skills.tag": "Expertise & Outils",
    "skills.title": "Compétences & Savoir-Faire",
    "skills.desc": "Une combinaison rare de créativité numérique, de vision commerciale et de qualités humaines.",
    "skills.cat_creative": "Outils Créatifs & Digitaux",
    "skills.cat_mgmt": "Commerce & Stratégie",
    "skills.cat_langs": "Langues & Savoir-Être",
    "skills.cert_title": "Certifications Officielles",
    "skills.cert_delf": "DELF A1 – Diplôme d'Études en Langue Française",
    "skills.cert_fitness": "Certification Fitness Trainer – ISCC International Sports & Coaching",

    // Portfolio
    "port.tag": "Réalisations",
    "port.title": "Portfolio & Études de Cas",
    "port.desc": "Sélection de réalisations illustrant mes compétences en médias digitaux, design graphique et stratégie commerciale.",
    "port.filter_all": "Tous les projets",
    "port.filter_creative": "Création & Graphisme",
    "port.filter_mgmt": "Médias & Motion",
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
    "hero.bio": "Master's student in International Business at ESCE Paris, with dual degrees in Digital Media (London) and Animation (India). Passionate about blending visual storytelling with global business strategy, I bring advanced Adobe Creative Cloud skills, video editing mastery, and market strategy expertise.",
    "hero.meta_loc": "Paris & Villiers-le-Bel, France",
    "hero.meta_status": "Master @ ESCE Paris (2025 – 2026)",
    "hero.meta_lang": "English, French, Tamil",
    "hero.cta_projects": "View My Work",
    "hero.cta_contact": "Get in Touch",
    "badge.exp": "Digital Media & Creative",
    "badge.exp_sub": "Adobe Suite & Production",
    "badge.master": "Master's at ESCE Paris",
    "badge.master_sub": "International Business",

    // Stats
    "stat.countries": "Countries of Study & Work",
    "stat.experience": "Years of Training & Projects",
    "stat.languages": "Languages Spoken",
    "stat.satisfaction": "Rigor & Creativity",

    // About
    "about.tag": "Professional Profile",
    "about.title": "Bridging Business Strategy, Digital Media & Creative Vision",
    "about.p1": "Currently pursuing a <strong>Master in International Business at ESCE Business School – Paris</strong>, I am actively seeking a rewarding <strong>part-time position</strong> alongside my university studies.",
    "about.p2": "My international journey spans <strong>Bangalore</strong> (Bachelor's in Digital Media & Animation), <strong>London</strong> (Master's in Digital Media), and now <strong>Paris</strong>. This unique background bridges high-level <strong>digital content creation</strong> with sharp strategic understanding of <strong>global business trade</strong>.",
    "about.h1_title": "Stress Resilience",
    "about.h1_desc": "Proven composure delivering high-tempo creative campaigns.",
    "about.h2_title": "Proactive Initiative",
    "about.h2_desc": "Constantly innovating in visual design and digital storytelling.",
    "value.val1_title": "Digital Creation & Art Direction",
    "value.val1_desc": "Advanced proficiency across the Adobe Creative Cloud (Photoshop, Premiere Pro, Illustrator, Lightroom) to craft impactful media assets.",
    "value.val2_title": "International Business & Strategy",
    "value.val2_desc": "Global market entry analysis, cross-border digital marketing campaigns, and intercultural negotiation honed at ESCE Paris.",
    "value.val3_title": "Multicultural Agility",
    "value.val3_desc": "Effortless collaboration across international teams, fluent English speaker with French and Tamil fluency.",

    // Experience
    "exp.tag": "Career Journey",
    "exp.title": "Creative, Digital & Strategic Experience",
    "exp.desc": "A dedicated trajectory blending visual communication, digital content production, and global business planning.",
    
    // Exp 1: Freelance Digital Media
    "exp.med_role": "Digital Media & Video Specialist",
    "exp.med_company": "Multimedia Projects & Freelance",
    "exp.med_date": "2023 – Present",
    "exp.med_loc": "London & Paris",
    "exp.med_d1": "Production, dynamic video editing, and color grading using Adobe Premiere Pro and Lightroom.",
    "exp.med_d2": "Art direction and visual design for cross-platform digital brand campaigns.",
    "exp.med_d3": "Developing compelling visual narratives designed to maximize social media engagement and reach.",
    "exp.med_d4": "End-to-end creative management from initial design brief to final high-definition delivery.",

    // Exp 2: Netsteds Interior
    "exp.des_role": "Graphic Designer & Visual Communicator",
    "exp.des_company": "Netsteds Interior",
    "exp.des_date": "2020 – 2021",
    "exp.des_loc": "Bangalore, India",
    "exp.des_d1": "Designed promotional and brand identity assets for marketing and interior design clients.",
    "exp.des_d2": "Worked in close collaboration with the marketing team on catalog layouts and digital media.",
    "exp.des_d3": "Leveraged Adobe Photoshop & Illustrator for high-fidelity graphic production.",

    // Exp 3: ESCE Paris Projects
    "exp.esce_proj_role": "Junior Consultant – International Strategy",
    "exp.esce_proj_company": "ESCE Business School • Academic Projects",
    "exp.esce_proj_date": "2025 – 2026",
    "exp.esce_proj_loc": "Paris, France",
    "exp.esce_proj_d1": "Conducted market feasibility and European expansion blueprints for consumer brands.",
    "exp.esce_proj_d2": "Performed PESTEL research, competitor benchmarks, and consumer target segmentation.",
    "exp.esce_proj_d3": "Built quantitative sales forecasts and margin projections using Microsoft Excel.",
    "exp.esce_proj_d4": "Delivered strategic business presentations in bilingual English and French environments.",

    // Exp 4: Animation & Motion
    "exp.anim_role": "Motion Graphics & 2D Animation Designer",
    "exp.anim_company": "St. Joseph's College • Creative Projects",
    "exp.anim_date": "2019 – 2021",
    "exp.anim_loc": "Bangalore, India",
    "exp.anim_d1": "Designed storyboards, character concept art, and vector environments.",
    "exp.anim_d2": "Executed frame-by-frame 2D animation and multimedia composition in Adobe Creative Suite.",
    "exp.anim_d3": "Collaborated on student animated short films recognized for artistic and narrative quality.",

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
    "skills.desc": "A well-rounded profile bridging creative design, business acumen, and people skills.",
    "skills.cat_creative": "Digital & Creative Suite",
    "skills.cat_mgmt": "Business & Strategy",
    "skills.cat_langs": "Languages & Soft Skills",
    "skills.cert_title": "Official Certifications",
    "skills.cert_delf": "DELF A1 – Diplôme d'Études en Langue Française",
    "skills.cert_fitness": "Fitness Trainer Certification – ISCC International Sports & Coaching",

    // Portfolio
    "port.tag": "Case Studies",
    "port.title": "Featured Projects & Work",
    "port.desc": "A curated showcase of digital media, visual branding, and international business strategy.",
    "port.filter_all": "All Projects",
    "port.filter_creative": "Creative & Design",
    "port.filter_mgmt": "Media & Motion",
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
    "Graphiste & Créateur Visuel",
    "Stratège Commerce International"
  ],
  en: [
    "International Business Student",
    "Digital Media Specialist",
    "Graphic & Visual Designer",
    "Global Strategy Consultant"
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
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex++;
    delay = 400;
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
    titleFr: "Direction Artistique & Motion Design – Campagne Multimédia",
    titleEn: "Art Direction & Motion Graphics – Multimedia Campaign",
    tagFr: "Motion Design & Vidéo",
    tagEn: "Motion Design & Video",
    descFr: "Création d'animations vectorielles graphiques, génériques dynamiques et habillage visuel sous Premiere Pro et After Effects. Optimisation des formats pour diffusion multicanale sur Instagram, YouTube et LinkedIn.",
    descEn: "Created custom vector motion graphics, dynamic video titles, and visual branding in Premiere Pro and After Effects, fully formatted for cross-platform distribution.",
    metrics: ["Augmentation de la rétention vidéo de 35%", "Habillage graphique complet", "Diffusion cross-plateforme"],
    tools: ["Premiere Pro", "After Effects", "Photoshop", "Motion Design"]
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
    titleFr: "Identité Visuelle & Stratégie Digitale – Creative Suite",
    titleEn: "Visual Identity & Digital Strategy – Creative Suite",
    tagFr: "Design Graphique & Web",
    tagEn: "Graphic Design & Web",
    descFr: "Élaboration d'identités graphiques complètes pour marques digitales : logos, palettes chromatiques, typographies et maquettes d'interfaces utilisateur.",
    descEn: "Full corporate visual identity development for digital-native brands: typography rules, color hierarchies, custom vector logos, and UI asset kits.",
    metrics: ["Chartes graphiques complètes livrées", "Identités visuelles modernes et distinctives"],
    tools: ["Adobe Illustrator", "Photoshop", "Typography", "Visual Branding"]
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
                <span style="color: var(--accent-primary);">✔</span> ${m}
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
