const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Stripe",
    logo: "S",
    logoColor: "#635bff",
    location: "Remote",
    type: "Full-time",
    category: "Engineering",
    salary: "$120k – $160k",
    posted: "2 days ago",
    description: "Join Stripe's frontend team to build beautiful, high-performance payment interfaces used by millions worldwide.",
    requirements: ["5+ years React/TypeScript", "Strong CSS & animation skills", "Experience with design systems", "REST & GraphQL APIs"],
    perks: ["Unlimited PTO", "Remote-first", "$5k learning budget", "Top-tier health insurance"]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Figma",
    logo: "F",
    logoColor: "#ff7262",
    location: "San Francisco",
    type: "Full-time",
    category: "Design",
    salary: "$100k – $140k",
    posted: "1 day ago",
    description: "Shape the future of design tools at Figma. You'll work closely with product and engineering to craft delightful user experiences.",
    requirements: ["4+ years UX/UI design", "Proficiency in Figma", "User research experience", "Strong portfolio"],
    perks: ["Equity package", "Flexible hours", "Design conference budget", "Catered lunches"]
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "Notion",
    logo: "N",
    logoColor: "#ffffff",
    location: "New York",
    type: "Full-time",
    category: "Engineering",
    salary: "$130k – $170k",
    posted: "3 days ago",
    description: "Build the all-in-one workspace that millions of teams rely on. Work across the stack with React, Node.js, and PostgreSQL.",
    requirements: ["React & Node.js expertise", "PostgreSQL / databases", "System design skills", "3+ years experience"],
    perks: ["Notion Pro subscription", "Home office stipend", "401k matching", "Parental leave"]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Vercel",
    logo: "V",
    logoColor: "#ffffff",
    location: "Remote",
    type: "Full-time",
    category: "DevOps",
    salary: "$110k – $150k",
    posted: "5 days ago",
    description: "Help scale the infrastructure powering the modern web. Work with Kubernetes, Terraform, and cutting-edge CI/CD pipelines.",
    requirements: ["Kubernetes & Docker", "Terraform / IaC", "AWS or GCP experience", "CI/CD pipelines"],
    perks: ["Fully remote", "Vercel Pro plan", "Annual retreat", "Stock options"]
  },
  {
    id: 5,
    title: "Product Manager",
    company: "Linear",
    logo: "L",
    logoColor: "#5e6ad2",
    location: "London",
    type: "Full-time",
    category: "Product",
    salary: "$95k – $130k",
    posted: "1 week ago",
    description: "Drive product strategy for Linear's issue tracking platform. Work with a world-class team to define the future of software development tools.",
    requirements: ["3+ years PM experience", "Technical background preferred", "Strong analytical skills", "Excellent communication"],
    perks: ["Linear Pro", "Flexible remote policy", "Competitive equity", "Learning stipend"]
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "Hugging Face",
    logo: "🤗",
    logoColor: "#ffd21e",
    location: "Paris",
    type: "Full-time",
    category: "Data",
    salary: "$105k – $145k",
    posted: "4 days ago",
    description: "Work on cutting-edge ML models and datasets. Help democratize AI by building tools and pipelines for the open-source community.",
    requirements: ["Python & PyTorch/TensorFlow", "ML model training & evaluation", "NLP experience a plus", "Strong math background"],
    perks: ["Open-source culture", "Conference speaking", "GPU compute credits", "Flexible hours"]
  },
  {
    id: 7,
    title: "React Native Developer",
    company: "Shopify",
    logo: "S",
    logoColor: "#96bf48",
    location: "Toronto",
    type: "Contract",
    category: "Engineering",
    salary: "$90k – $120k",
    posted: "6 days ago",
    description: "Build and maintain Shopify's mobile commerce apps used by millions of merchants globally. Own features end-to-end.",
    requirements: ["React Native expertise", "iOS & Android knowledge", "REST API integration", "Performance optimization"],
    perks: ["Shopify credits", "Hybrid work", "Wellness budget", "Parental leave"]
  },
  {
    id: 8,
    title: "Backend Engineer",
    company: "PlanetScale",
    logo: "P",
    logoColor: "#f97316",
    location: "Remote",
    type: "Full-time",
    category: "Engineering",
    salary: "$125k – $165k",
    posted: "2 days ago",
    description: "Scale the world's most advanced serverless MySQL platform. Work on distributed systems, query optimization, and developer tooling.",
    requirements: ["Go or Rust experience", "Distributed systems", "MySQL / databases", "4+ years backend"],
    perks: ["Fully remote", "Unlimited PTO", "Top-tier equipment", "Equity"]
  },
  {
    id: 9,
    title: "Marketing Manager",
    company: "Webflow",
    logo: "W",
    logoColor: "#4353ff",
    location: "San Francisco",
    type: "Full-time",
    category: "Marketing",
    salary: "$85k – $115k",
    posted: "3 days ago",
    description: "Lead growth marketing campaigns for Webflow's no-code platform. Drive acquisition, retention, and brand awareness globally.",
    requirements: ["5+ years digital marketing", "SEO/SEM expertise", "Data-driven mindset", "Content strategy"],
    perks: ["Webflow Pro", "Remote-friendly", "Marketing conference budget", "Health & dental"]
  },
  {
    id: 10,
    title: "Security Engineer",
    company: "1Password",
    logo: "🔑",
    logoColor: "#1a8cff",
    location: "Remote",
    type: "Full-time",
    category: "Security",
    salary: "$130k – $170k",
    posted: "1 week ago",
    description: "Protect millions of users' passwords and secrets. Work on cryptographic protocols, threat modeling, and security audits.",
    requirements: ["Cryptography knowledge", "Penetration testing", "Security auditing", "Go or Rust preferred"],
    perks: ["1Password family plan", "Fully remote", "Security conference budget", "Generous equity"]
  }
];

let filtered = [...jobs];

const grid = document.getElementById('jobsGrid');
const searchInput = document.getElementById('searchInput');
const locationFilter = document.getElementById('locationFilter');
const categoryFilter = document.getElementById('categoryFilter');
const resultsCount = document.getElementById('resultsCount');
const modalOverlay = document.getElementById('modalOverlay');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

// Dynamic Typing Search Placeholders
function initSearchPlaceholder() {
  if (!searchInput) return;
  const terms = [
    "Frontend developer at Stripe...",
    "Design jobs at Figma...",
    "Remote engineer roles...",
    "Notion workspace manager...",
    "Data Scientist in Paris..."
  ];
  let termIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentTerm = terms[termIdx];
    if (isDeleting) {
      searchInput.placeholder = "Try: " + currentTerm.substring(0, charIdx - 1);
      charIdx--;
    } else {
      searchInput.placeholder = "Try: " + currentTerm.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 30 : 60;

    if (!isDeleting && charIdx === currentTerm.length) {
      speed = 2000; // Pause at end of title
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      termIdx = (termIdx + 1) % terms.length;
      speed = 400; // Pause before typing next
    }

    setTimeout(type, speed);
  }
  type();
}

// Mouse coordinates custom variable tracker for neon cards hover
function attachCardGlowListener(card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
}

// Custom Premium Toast Notification System
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${type === 'success' ? '⚡' : '⚙️'}</span>
      <span class="toast-message">${message}</span>
    </div>
    <div class="toast-progress"></div>
  `;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  setTimeout(() => {
    toast.classList.remove('visible');
    toast.addEventListener('transitionend', () => toast.remove());
    // Backup clean
    setTimeout(() => { toast.remove(); }, 600);
  }, 3500);
}

function handleApply(company) {
  closeModal();
  showToast(`Application successfully sent to ${company}! 🎉`, 'success');
}

// Scroll Entrance Reveal Animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.about-card, .company-card, .section-header, .filters-section'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => {
    el.classList.add('reveal-item');
    observer.observe(el);
  });
}

function renderCards(list) {
  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="icon">🔍</div><h3>No jobs found</h3><p>Try adjusting your search or filters</p></div>`;
    resultsCount.textContent = '0 jobs found';
    return;
  }

  resultsCount.textContent = `${list.length} job${list.length !== 1 ? 's' : ''} found`;
  grid.innerHTML = list.map((job, i) => `
    <div class="job-card" style="animation-delay:${i * 0.06}s" onclick="openModal(${job.id})">
      <div class="card-header">
        <div class="company-logo" style="background:${job.logoColor}18;color:${job.logoColor};border-color:${job.logoColor}25">${job.logo}</div>
        <div class="card-header-info">
          <h3>${job.company}</h3>
          <span>${job.posted}</span>
        </div>
      </div>
      <div class="job-title">${job.title}</div>
      <div class="job-tags">
        <span class="tag tag-location">📍 ${job.location}</span>
        <span class="tag tag-type">${job.type}</span>
        <span class="tag tag-category">${job.category}</span>
      </div>
      <div class="card-footer">
        <div>
          <div class="salary">${job.salary}</div>
          <div class="posted">${job.posted}</div>
        </div>
        <button class="apply-btn" onclick="event.stopPropagation();openModal(${job.id})">View Details</button>
      </div>
    </div>
  `).join('');

  // Attach card glow tracking on new items
  grid.querySelectorAll('.job-card').forEach(attachCardGlowListener);
  attachRipples();
}

function applyFilters() {
  const q = searchInput.value.toLowerCase().trim();
  const loc = locationFilter.value;
  const cat = categoryFilter.value;

  filtered = jobs.filter(j =>
    (!q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q)) &&
    (!loc || j.location === loc) &&
    (!cat || j.category === cat)
  );

  renderCards(filtered);
}

function openModal(id) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  // Clean company name string for click arguments safely
  const safeCompanyName = job.company.replace(/'/g, "\\'");

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-company">
      <div class="modal-logo" style="background:${job.logoColor}18;color:${job.logoColor};border-color:${job.logoColor}25">${job.logo}</div>
      <div class="modal-company-info">
        <h2>${job.title}</h2>
        <p>${job.company}</p>
      </div>
    </div>
    <div class="modal-tags">
      <span class="tag tag-location">📍 ${job.location}</span>
      <span class="tag tag-type">${job.type}</span>
      <span class="tag tag-category">${job.category}</span>
    </div>
    <div class="modal-salary">${job.salary} <span style="font-size:0.9rem;color:var(--text-muted);font-weight:400">/ year</span></div>
    <div class="modal-section">
      <h4>About the Role</h4>
      <p>${job.description}</p>
    </div>
    <div class="modal-section">
      <h4>Requirements</h4>
      <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>Perks & Benefits</h4>
      <ul>${job.perks.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
    <button class="modal-apply-btn" onclick="handleApply('${safeCompanyName}')">Apply Now</button>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function clearFilters() {
  searchInput.value = '';
  locationFilter.value = '';
  categoryFilter.value = '';
  applyFilters();
}

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  if (themeToggle) {
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    themeToggle.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  }
  localStorage.setItem('site-theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('site-theme');
  if (saved) {
    setTheme(saved);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }
}

function toggleTheme() {
  const nextTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  setTheme(nextTheme);
  if (themeToggle) {
    themeToggle.classList.remove('bounce-in');
    void themeToggle.offsetWidth;
    themeToggle.classList.add('bounce-in');
  }
}

function attachRipples() {
  document.querySelectorAll('.job-card, .apply-btn, .nav-btn, .modal-apply-btn').forEach(el => {
    if (el.dataset.rippleAttached) return;
    el.dataset.rippleAttached = 'true';
    el.addEventListener('click', function (e) {
      if (el.classList.contains('apply-btn') || el.classList.contains('modal-apply-btn')) return;
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.6;
      const ripple = document.createElement('span');
      ripple.className = 'ripple-circle';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      el.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
      setTimeout(() => ripple.remove(), 700);
    });
  });
}

function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let particles = [];
  const maxDist = 140;

  // Track Mouse movement for connection glow
  let mouse = { x: null, y: null, maxDist: 120 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Spawn visual energy sparks on click
  window.addEventListener('click', (e) => {
    for (let c = 0; c < 12; c++) {
      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 4.5,
        vy: (Math.random() - 0.5) * 4.5,
        r: Math.random() * 2 + 1.2,
        a: 1.0,
        decay: Math.random() * 0.02 + 0.015,
        isSpark: true
      });
    }
  });

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    const count = Math.max(40, Math.min(120, Math.floor((w * h) / 9000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 1.8 + 1,
      a: Math.random() * 0.7 + 0.2
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // Handle explosive sparks behavior
      if (p.isSpark) {
        p.a -= p.decay;
        if (p.a <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }
      }

      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      // Color nodes differently if sparks
      if (p.isSpark) {
        ctx.fillStyle = `rgba(236,72,153,${p.a})`;
      } else {
        ctx.fillStyle = `rgba(99,102,241,${p.a})`;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Connect standard particles (skip sparks connection lines)
      if (!p.isSpark) {
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          if (q.isSpark) continue;
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(99,102,241,${(1 - dist / maxDist) * 0.14})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // Interactivity: connect particles to pointer and draw gravity pull
      if (!p.isSpark && mouse.x !== null && mouse.y !== null) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.maxDist) {
          ctx.strokeStyle = `rgba(99,102,241,${(1 - mdist / mouse.maxDist) * 0.25})`;
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Pull factor
          p.x -= mdx * 0.015;
          p.y -= mdy * 0.015;
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  createParticles();
  draw();
}

searchInput.addEventListener('input', applyFilters);
locationFilter.addEventListener('change', applyFilters);
categoryFilter.addEventListener('change', applyFilters);

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

window.addEventListener('scroll', () => {
  document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
  });
});

themeToggle?.addEventListener('click', toggleTheme);

// Dynamic typing animation for the Hero main title
function initHeroTypewriter() {
  const typewriter = document.getElementById('typewriter');
  if (!typewriter) return;

  const words = ["next dream role", "remote opportunity", "perfect team"];
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIdx];
    if (isDeleting) {
      typewriter.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typewriter.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentWord.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      speed = 300;
    }

    setTimeout(type, speed);
  }
  type();
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initParticles();
  renderCards(jobs);
  attachRipples();
  initSearchPlaceholder();
  initHeroTypewriter();
  initScrollReveal();

  // Attach card reflection glow listeners on static assets loaded
  document.querySelectorAll('.about-card, .company-card').forEach(attachCardGlowListener);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count, 10) || 0;
        let count = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const timer = setInterval(() => {
          count = Math.min(count + step, target);
          el.textContent = count.toLocaleString() + (el.dataset.suffix || '');
          if (count >= target) clearInterval(timer);
        }, 22);
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) observer.observe(heroStats);