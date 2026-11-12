/**
 * MALAKIADAS PURUSHOTHAMAN - EDITORIAL PORTFOLIO JAVASCRIPT
 * Inspired by Lucas Miller Layout + Spider-Man & Acid Lime Theme Toggle
 */

// --- Translations Dictionary (FR / EN) ---
const translations = {
  fr: {
    // Nav
    "nav.about": "À Propos",
    "nav.experience": "Expériences",
    "nav.education": "Formation",
    "nav.skills": "Compétences",
    "nav.portfolio": "Projets",
    "nav.contact": "Contact",
    "nav.resume_btn": "Curriculum Vitae",

    // Hero
    "hero.micro": "MÉDIAS DIGITAUX & COMMERCE INTERNATIONAL — ESCE PARIS",
    "hero.bio": "Je suis <strong>Malakiadas Purushothaman</strong> — étudiant en Master en Commerce International à l’ESCE Paris, diplômé en Médias Digitaux (Londres) et Animation (Inde), concevant des identités de marque percutantes, du motion design et des stratégies d'expansion mondiale.",
    "hero.cta_projects": "Découvrir mes projets",
    "hero.cta_contact": "Me contacter",
    "hero.cta_resume": "Voir le CV",

    // Section Titles
    "sec.about_title": "Profil & Vision",
    "sec.exp_title": "Expériences Clés",
    "sec.edu_title": "Formation Académique",
    "sec.skills_title": "Expertise & Outils",
    "sec.port_title": "Portfolio & Réalisations",
    "sec.contact_title": "Entrons en Contact",

    // About
    "about.p1": "Actuellement en <strong>Master en Commerce International à l’ESCE Business School – Paris</strong>, je combine une solide maîtrise des outils de création digitale avec une vision stratégique du commerce international.",
    "about.p2": "Mon parcours académique et professionnel s'étend de <strong>Bangalore</strong> (Bachelor Médias Digitaux & Animation) à <strong>Londres</strong> (Master Médias Digitaux) puis à <strong>Paris</strong>. Cette triple culture m'apporte une agilité hors pair, un sens affûté du storytelling et une capacité immédiate d'intégration.",
    "about.stat_countries": "Pays d'études & travail",
    "about.stat_experience": "Années de création & études",
    "about.stat_languages": "Langues parlées",
    "about.stat_satisfaction": "Rigueur & Excellence",

    // Pillars
    "pillar.p1_title": "Direction Artistique & Création Digitale",
    "pillar.p1_desc": "Maîtrise complète de la Suite Adobe (Photoshop, Premiere Pro, Illustrator, Lightroom) pour concevoir des identités de marque et des campagnes multimédias percutantes.",
    "pillar.p2_title": "Stratégie Commerciale Mondiale",
    "pillar.p2_desc": "Analyse de marché, études PESTEL, logistique transfrontalière et négociations interculturelles acquises à l'ESCE Business School.",
    "pillar.p3_title": "Agilité Multiculturelle & Leadership",
    "pillar.p3_desc": "Polyglotte (anglais courant, français intermédiaire, tamoul langue maternelle), autonome et proactif face aux défis complexes.",

    // Experiences
    "exp.med_role": "Spécialiste Médias Digitaux & Vidéo",
    "exp.med_company": "Projets Multimédia & Freelance",
    "exp.med_date": "2023 – Présent",
    "exp.med_loc": "Londres & Paris",
    "exp.med_d1": "Production, montage et étalonnage vidéo sous Adobe Premiere Pro et Lightroom.",
    "exp.med_d2": "Direction artistique et conception d'habillages visuels pour campagnes omnicanales.",
    "exp.med_d3": "Storytelling créatif maximisant la rétention et l'engagement sur les plateformes digitales.",
    "exp.med_d4": "Gestion autonome des projets, de l'idéation graphique à la livraison des rendus finaux.",

    "exp.des_role": "Graphiste & Designer Visuel",
    "exp.des_company": "Netsteds Interior",
    "exp.des_date": "2020 – 2021",
    "exp.des_loc": "Bangalore, Inde",
    "exp.des_d1": "Création d'identités visuelles, brochures et catalogues de design d'intérieur.",
    "exp.des_d2": "Collaboration étroite avec les équipes marketing pour la production de contenus publicitaires.",
    "exp.des_d3": "Utilisation avancée des logiciels Adobe (Photoshop, Illustrator) pour la composition graphique.",

    "exp.esce_role": "Consultant Junior en Stratégie Internationale",
    "exp.esce_company": "ESCE Business School • Projets Académiques",
    "exp.esce_date": "2025 – 2026",
    "exp.esce_loc": "Paris, France",
    "exp.esce_d1": "Études de marché et stratégie d'implantation transfrontalière pour marques innovantes.",
    "exp.esce_d2": "Analyses PESTEL, benchmarking concurrentiel et segmentation d'audience.",
    "exp.esce_d3": "Modélisation de prévisions financières et plans de rentabilité sous Microsoft Excel.",
    "exp.esce_d4": "Présentation de recommandations stratégiques en contextes bilingues anglais et français.",

    "exp.anim_role": "Concepteur Motion Graphics & Animation 2D",
    "exp.anim_company": "St. Joseph's College • Projets de Création",
    "exp.anim_date": "2019 – 2021",
    "exp.anim_loc": "Bangalore, Inde",
    "exp.anim_d1": "Conception de storyboards, création de décors vectoriels et animation image par image.",
    "exp.anim_d2": "Production d'animations numériques sous la Suite Adobe.",
    "exp.anim_d3": "Participation à des projets créatifs étudiants récompensés pour leur qualité visuelle.",

    // Education
    "edu.esce_deg": "Master en Commerce International",
    "edu.esce_sch": "ESCE Business School • Paris (2025 – 2026)",
    "edu.esce_desc": "Commerce international, supply chain, négociation interculturelle et marketing global.",
    "edu.lmu_deg": "Master en Médias Digitaux",
    "edu.lmu_sch": "London Metropolitan University • Londres (2023 – 2025)",
    "edu.lmu_desc": "Stratégie de contenu numérique, production vidéo avancée et communication de marque.",
    "edu.sjc_deg": "Bachelor Médias Digitaux & Animation",
    "edu.sjc_sch": "St. Joseph's College • Bangalore (2018 – 2021)",
    "edu.sjc_desc": "Composition visuelle, animation 2D/3D, théorie des couleurs et montage audiovisuel.",

    // Portfolio Filters
    "port.filter_all": "Tous les projets",
    "port.filter_creative": "Graphisme & Branding",
    "port.filter_media": "Médias & Motion",
    "port.filter_strategy": "Stratégie & Commerce",

    // Contact
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
    "hero.micro": "DIGITAL MEDIA & GLOBAL COMMERCE — ESCE PARIS",
    "hero.bio": "I'm <strong>Malakiadas Purushothaman</strong> — an International Business master's student at ESCE Paris with a background in Digital Media (London) & Animation (India), crafting visual identities, motion graphics, and global business strategies.",
    "hero.cta_projects": "Explore Work",
    "hero.cta_contact": "Get In Touch",
    "hero.cta_resume": "View Resume",

    // Section Titles
    "sec.about_title": "Profile & Vision",
    "sec.exp_title": "Key Experience",
    "sec.edu_title": "Higher Education",
    "sec.skills_title": "Skills & Toolkit",
    "sec.port_title": "Featured Work",
    "sec.contact_title": "Let's Connect",

    // About
    "about.p1": "Currently pursuing a <strong>Master in International Business at ESCE Business School – Paris</strong>, I combine creative digital execution with strategic acumen in global commerce.",
    "about.p2": "My international trajectory spans <strong>Bangalore</strong> (Bachelor's in Digital Media & Animation), <strong>London</strong> (Master's in Digital Media), and now <strong>Paris</strong>. This multicultural background brings sharp adaptability, visual storytelling excellence, and global trade fluency.",
    "about.stat_countries": "Countries of Study & Work",
    "about.stat_experience": "Years of Training & Projects",
    "about.stat_languages": "Languages Spoken",
    "about.stat_satisfaction": "Rigor & Excellence",

    // Pillars
    "pillar.p1_title": "Art Direction & Digital Creation",
    "pillar.p1_desc": "Proficiency across Adobe Creative Cloud (Photoshop, Premiere Pro, Illustrator, Lightroom) to produce high-impact visual identities and campaigns.",
    "pillar.p2_title": "Global Business Strategy",
    "pillar.p2_desc": "Cross-border expansion feasibility, PESTEL analysis, supply chain dynamics, and intercultural negotiation honed at ESCE Paris.",
    "pillar.p3_title": "Multicultural Agility & Drive",
    "pillar.p3_desc": "Trilingual (fluent English, intermediate French, native Tamil), proactive initiative, and team leadership across diverse settings.",

    // Experiences
    "exp.med_role": "Digital Media & Video Specialist",
    "exp.med_company": "Multimedia Projects & Freelance",
    "exp.med_date": "2023 – Present",
    "exp.med_loc": "London & Paris",
    "exp.med_d1": "Video production, dynamic editing, and color grading in Adobe Premiere Pro and Lightroom.",
    "exp.med_d2": "Art direction and visual design assets for cross-platform digital brand campaigns.",
    "exp.med_d3": "Compelling visual storytelling designed to maximize audience retention and reach.",
    "exp.med_d4": "End-to-end creative management from initial design brief to final high-definition delivery.",

    "exp.des_role": "Graphic Designer & Visual Communicator",
    "exp.des_company": "Netsteds Interior",
    "exp.des_date": "2020 – 2021",
    "exp.des_loc": "Bangalore, India",
    "exp.des_d1": "Created brand collateral, print catalogs, and digital interior design campaigns.",
    "exp.des_d2": "Collaborated closely with marketing teams on social posts and editorial advertising.",
    "exp.des_d3": "Utilized Adobe Photoshop & Illustrator for high-fidelity vector layouts.",

    "exp.esce_role": "Junior Consultant – International Strategy",
    "exp.esce_company": "ESCE Business School • Academic Projects",
    "exp.esce_date": "2025 – 2026",
    "exp.esce_loc": "Paris, France",
    "exp.esce_d1": "Conducted market feasibility and cross-border expansion blueprints for consumer brands.",
    "exp.esce_d2": "Executed PESTEL frameworks, competitor benchmarks, and audience segmentation.",
    "exp.esce_d3": "Built quantitative sales forecasts and margin projections using Microsoft Excel.",
    "exp.esce_d4": "Delivered strategic business presentations in bilingual English and French settings.",

    "exp.anim_role": "Motion Graphics & 2D Animation Designer",
    "exp.anim_company": "St. Joseph's College • Creative Projects",
    "exp.anim_date": "2019 – 2021",
    "exp.anim_loc": "Bangalore, India",
    "exp.anim_d1": "Crafted storyboards, vector character designs, and frame-by-frame 2D animation.",
    "exp.anim_d2": "Produced digital motion graphics leveraging the Adobe Creative Suite.",
    "exp.anim_d3": "Contributed to award-winning student animated shorts recognized for artistic composition.",

    // Education
    "edu.esce_deg": "Master in International Business",
    "edu.esce_sch": "ESCE Business School • Paris (2025 – 2026)",
    "edu.esce_desc": "International trade, cross-border logistics, commercial negotiation, and global marketing.",
    "edu.lmu_deg": "Master in Digital Media",
    "edu.lmu_sch": "London Metropolitan University • London (2023 – 2025)",
    "edu.lmu_desc": "Digital content strategy, advanced video editing, multimedia storytelling, and brand media.",
    "edu.sjc_deg": "Bachelor in Digital Media & Animation",
    "edu.sjc_sch": "St. Joseph's College • Bangalore (2018 – 2021)",
    "edu.sjc_desc": "Visual arts fundamentals, 2D/3D modeling, color theory, and video editing.",

    // Portfolio Filters
    "port.filter_all": "All Projects",
    "port.filter_creative": "Graphic & Branding",
    "port.filter_media": "Media & Motion",
    "port.filter_strategy": "Strategy & Business",

    // Contact
    "contact.desc": "Available immediately for interviews and part-time opportunities in Paris.",
    "contact.form_name": "Your Full Name",
    "contact.form_email": "Email Address",
    "contact.form_subject": "Subject",
    "contact.form_message": "Your Message",
    "contact.form_btn": "Send Message",
    "contact.copy": "Copy"
  }
};

// Current language state & theme
let currentLang = localStorage.getItem('site_lang') || 'fr';
let currentTheme = localStorage.getItem('site_theme') || 'spiderman';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupLanguageSwitcher();
  setupDrawerMenu();
  setupFilters();
  setupModals();
  setupClipboard();
  setupContactForm();
  applyLanguage(currentLang);
  applyTheme(currentTheme);
});

// --- Theme Switcher (Spider-Man / Acid Lime) ---
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    currentTheme = (currentTheme === 'spiderman') ? 'acid' : 'spiderman';
    localStorage.setItem('site_theme', currentTheme);
    applyTheme(currentTheme);
    showToast(currentTheme === 'acid' ? '⚡ Mode Acid Lime activé' : '🕷️ Mode Spider-Man activé');
  });
}

function applyTheme(theme) {
  if (theme === 'acid') {
    document.body.classList.add('theme-acid');
  } else {
    document.body.classList.remove('theme-acid');
  }
}

// --- Language Switcher ---
function setupLanguageSwitcher() {
  const frBtn = document.getElementById('lang-fr');
  const enBtn = document.getElementById('lang-en');

  if (frBtn) frBtn.addEventListener('click', () => switchLanguage('fr'));
  if (enBtn) enBtn.addEventListener('click', () => switchLanguage('en'));
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  const frBtn = document.getElementById('lang-fr');
  const enBtn = document.getElementById('lang-en');
  if (frBtn && enBtn) {
    frBtn.classList.toggle('active', lang === 'fr');
    enBtn.classList.toggle('active', lang === 'en');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });
}

// --- Slide-out Drawer Menu ---
function setupDrawerMenu() {
  const openBtn = document.getElementById('menu-open-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('drawer-menu');

  if (!drawer) return;

  if (openBtn) {
    openBtn.addEventListener('click', () => drawer.classList.add('open'));
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
  }

  drawer.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

// --- Filter Projects ---
function setupFilters() {
  const filterBtns = document.querySelectorAll('.proj-filter-btn');
  const projectCards = document.querySelectorAll('.proj-card-editorial');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
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

// --- Project Modals Data ---
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
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBody = document.getElementById('modal-details');

  if (!modal) return;

  document.querySelectorAll('.proj-card-editorial').forEach(card => {
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
          <span class="proj-thumb-tag" style="position: static; display: inline-block; margin-bottom: 0.8rem;">${tag}</span>
          <h2 style="font-family: var(--font-display); font-size: 2.2rem; color: #ffffff; margin-bottom: 0.8rem;">${title}</h2>
          <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7;">${desc}</p>
        </div>

        <div style="margin-bottom: 1.8rem;">
          <h4 style="font-size: 1.1rem; margin-bottom: 0.8rem; color: var(--accent-primary);">
            ${isFr ? 'Points Clés & Résultats' : 'Key Highlights & Metrics'}
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
            ${item.metrics.map(m => `
              <li style="display: flex; align-items: center; gap: 0.6rem; color: #ffffff; font-size: 0.95rem;">
                <span style="color: var(--accent-primary);">✦</span> ${m}
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.8rem; color: var(--accent-primary);">
            ${isFr ? 'Compétences & Outils Mobilisés' : 'Skills & Tools Leveraged'}
          </h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${item.tools.map(t => `<span class="exp-pill-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;

      modal.classList.add('active');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Resume Modal
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

// --- Toast & Clipboard ---
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>✦</span><span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function setupClipboard() {
  document.querySelectorAll('.contact-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        showToast(currentLang === 'fr' ? `Copié : ${text}` : `Copied: ${text}`);
      });
    });
  });
}

// --- Contact Form ---
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = orig;
      form.reset();
      showToast(currentLang === 'fr' ? "Merci ! Message envoyé avec succès." : "Thank you! Message sent successfully.");
    }, 900);
  });
}
