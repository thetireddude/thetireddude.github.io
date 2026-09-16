import { about, contact, experiences, projects, skills } from "./data.js";

const byId = (id) => document.getElementById(id);
const tags = (items) => items.map((item) => `<span class="tag">${item}</span>`).join("");

function artwork(kind) {
  const bar = `<div class="bar"><i></i><i></i><i></i></div>`;
  if (kind === "analytics") return `<div class="mock">${bar}<svg viewBox="0 0 160 70" style="width:100%"><polyline points="6,58 30,40 52,48 76,24 100,34 124,14 152,26" fill="none" stroke="#7fd2dc" stroke-width="4"/><polyline points="6,64 30,56 52,60 76,50 100,54 124,44 152,48" fill="none" stroke="#e9b64e" stroke-width="3" opacity=".8"/></svg></div>`;
  if (kind === "taskboard") return `<div class="mock">${bar}<div class="blocks" style="margin-top:6px"><b></b><b></b><b></b></div><div class="ln" style="margin-top:10px"></div><div class="ln short"></div></div>`;
  if (kind === "project") return `<div class="project-fallback-art" aria-hidden="true"><span>PROJECT</span><i>?</i></div>`;
  return `<div class="mock">${bar}<div class="ln"></div><div class="ln short"></div><div class="ln amber"></div><div class="blocks"><b></b><b></b><b></b></div></div>`;
}

function renderExperiences() {
  const target = byId("experience-list");
  target.innerHTML = experiences.map((experience) => `
    <div class="strip xp reveal halftone">
      <span class="sfx" style="top:-18px;right:24px">${experience.sfx}</span>
      <div class="cell when-cell"><div><span class="yr">${experience.periodStart}</span><span class="to">— to —</span><span class="yr">${experience.periodEnd}</span></div></div>
      <div class="cell hatch">
        <h3>${experience.title}</h3>
        <span class="org">${experience.organization}</span>
        <ul class="xp-list">${experience.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="tags">${tags(experience.tags)}</div>
      </div>
    </div>`).join("");
}

function projectCardArt(project) {
  const preview = project.images?.[0];
  return preview
    ? `<img class="project-card-image" src="${preview.src}" alt="" loading="lazy">`
    : artwork(project.artwork || "project");
}
function renderProjects() {
  const target = byId("projects-list");
  target.innerHTML = projects.map((project) => `
    <div class="strip proj reveal halftone proj-card" data-project="${project.id}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="View more about ${project.title}">
      <span class="sfx" style="top:-18px;right:28px">${project.sfx}</span>
      <div class="cell">
        <span class="card-hint">CLICK FOR MORE ⤢</span>
        <div class="txt hatch">
          <h3>${project.title}</h3>
          <span class="when">${project.coverLabel}</span>
          <p>${project.summary}</p>
          <div class="tags">${tags(project.tags.slice(0, 3))}</div>
        </div>
        <div class="art halftone" id="art-${project.id}">${projectCardArt(project)}</div>
      </div>
    </div>`).join("");

  const featuredProjects = projects
    .filter((project) => Number.isFinite(project.rank))
    .sort((first, second) => first.rank - second.rank);
  byId("featured-projects-list").innerHTML = featuredProjects.map((project) =>
    `<li><span class="when">${project.period.toUpperCase()}</span><br><span class="what">${project.title}</span></li>`
  ).join("");
}

function renderSkills() {
  const target = byId("skills-list");
  const categories = [...new Set(skills.map((skill) => skill.category))];
  target.innerHTML = categories.map((category) => {
    const categorySkills = skills.filter((skill) => skill.category === category);
    return `<span class="skill-group-label">${category}</span><div class="cards">${categorySkills.map((skill) => `
      <div class="card"><div class="glyph">${skill.glyph}</div><h3>${skill.name}</h3><div class="lvl" aria-label="${skill.level} out of 5 proficiency">${Array.from({ length: 5 }, (_, index) => `<i${index < skill.level ? ' class="on"' : ""}></i>`).join("")}</div></div>`).join("")}</div>`;
  }).join("");

  const featured = skills
    .filter((skill) => Number.isFinite(skill.rank))
    .sort((first, second) => first.rank - second.rank);
  byId("featured-skills-list").innerHTML = featured.map((skill) => `<span class="chip">${skill.name}</span>`).join("");
}
function renderAbout() {
  byId("about-abstract").innerHTML = about.abstract.map((paragraph) =>
    `<p style="text-transform:uppercase;font-size:.9rem;letter-spacing:.05em">${paragraph}</p>`
  ).join("");
  byId("about-description").innerHTML = about.description.map((paragraph) => `<p>${paragraph}</p>`).join("");
  byId("about-details").innerHTML = about.details.map((detail) =>
    `<li><b>${detail.label}</b>${detail.value}</li>`
  ).join("");
}
function renderContact() {
  const attributes = (link) => link.external ? ' target="_blank" rel="noopener"' : "";
  byId("cover-contact-links").innerHTML = contact.links.map((link) =>
    `<a class="c-row" href="${link.href}"${attributes(link)}><span class="ic">${link.icon}</span><span><b>${link.label}</b><span>${link.display}</span></span></a>`
  ).join("");
  byId("contact-links").innerHTML = contact.links.map((link) =>
    `<a class="contact-card" href="${link.href}"${attributes(link)}><span class="ic">${link.icon}</span><span><b>${link.label}</b><span>${link.display}</span></span></a>`
  ).join("");
}
let galleryImages = [];
let galleryIndex = 0;

function updateProjectGallery() {
  if (!galleryImages.length) return;
  const image = byId("project-gallery-image");
  const counter = byId("project-gallery-counter");
  const caption = byId("project-gallery-caption");
  const current = galleryImages[galleryIndex];
  image.src = current.src;
  image.alt = current.alt;
  counter.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
  caption.textContent = current.alt;
}

function moveProjectGallery(direction) {
  if (galleryImages.length < 2) return;
  galleryIndex = (galleryIndex + direction + galleryImages.length) % galleryImages.length;
  updateProjectGallery();
}

function renderProjectGallery(project) {
  const artBox = byId("modal-art-box");
  if (!Array.isArray(project.images) || project.images.length === 0) {
    galleryImages = [];
    artBox.innerHTML = `${artwork(project.artwork || "project")}<span class="no-image-message">NO IMAGES YET</span>`;
    return;
  }
  galleryImages = project.images;
  galleryIndex = 0;
  artBox.innerHTML = `
    <img class="project-gallery-image" id="project-gallery-image" src="" alt="">
    <button class="gallery-control gallery-control-prev" id="project-gallery-prev" type="button" aria-label="Previous project image">←</button>
    <button class="gallery-control gallery-control-next" id="project-gallery-next" type="button" aria-label="Next project image">→</button>
    <span class="gallery-caption" id="project-gallery-caption" aria-live="polite"></span>
    <span class="gallery-counter" id="project-gallery-counter" aria-live="polite"></span>`;
  byId("project-gallery-prev").addEventListener("click", () => moveProjectGallery(-1));
  byId("project-gallery-next").addEventListener("click", () => moveProjectGallery(1));
  updateProjectGallery();
}
const modalOverlay = byId("project-modal-overlay");
const modalBox = byId("project-modal");
const resumeButton = byId("resume-button");
const resumeModalOverlay = byId("resume-modal-overlay");
const resumeModal = byId("resume-modal");
const resumeModalCloseBtn = byId("resume-modal-close-btn");
const modalCloseBtn = byId("modal-close-btn");
let lastFocusedEl;

function openProjectModal(id) {
  const project = projects.find((entry) => entry.id === id);
  if (!project) return;
  byId("modal-title-text").textContent = project.title;
  byId("modal-type-text").textContent = project.type;
  byId("modal-desc-wrap").innerHTML = project.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  byId("modal-tags").innerHTML = tags(project.tags);
  byId("modal-details").innerHTML = [
    `<div class="detail-item"><b>Date</b><span>${project.period}</span></div>`,
    ...project.links.map((link) => `<div class="detail-item"><b>${link.label}</b><a href="${link.url}" target="_blank" rel="noopener">${link.url.replace(/^https?:\/\//, "")}</a></div>`)
  ].join("");
  renderProjectGallery(project);
  lastFocusedEl = document.activeElement;
  modalOverlay.classList.add("open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modalCloseBtn.focus();
}

function closeProjectModal() {
  modalOverlay.classList.remove("open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  lastFocusedEl?.focus?.();
}

function setupModal() {
  document.querySelectorAll(".proj-card").forEach((card) => {
    card.addEventListener("click", () => openProjectModal(card.dataset.project));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openProjectModal(card.dataset.project); }
    });
  });
  modalCloseBtn.addEventListener("click", closeProjectModal);
  modalOverlay.addEventListener("click", (event) => { if (event.target === modalOverlay) closeProjectModal(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalOverlay.classList.contains("open")) closeProjectModal();
    if (modalOverlay.classList.contains("open") && event.key === "ArrowLeft") moveProjectGallery(-1);
    if (modalOverlay.classList.contains("open") && event.key === "ArrowRight") moveProjectGallery(1);
    if (event.key !== "Tab" || !modalOverlay.classList.contains("open")) return;
    const focusable = modalBox.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
}

function setupResumeModal() {
  let resumeTrigger = null;
  const closeResumeModal = () => {
    resumeModalOverlay.classList.remove("open");
    resumeModalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    resumeTrigger?.focus?.();
  };
  resumeButton.addEventListener("click", () => {
    resumeTrigger = document.activeElement;
    resumeModalOverlay.classList.add("open");
    resumeModalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    resumeModalCloseBtn.focus();
  });
  resumeModalCloseBtn.addEventListener("click", closeResumeModal);
  resumeModalOverlay.addEventListener("click", (event) => { if (event.target === resumeModalOverlay) closeResumeModal(); });
  document.addEventListener("keydown", (event) => {
    if (!resumeModalOverlay.classList.contains("open")) return;
    if (event.key === "Escape") { closeResumeModal(); return; }
    if (event.key !== "Tab") return;
    const focusable = resumeModal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
}
function setupEnhancements() {
  const navLinks = [...document.querySelectorAll(".masthead nav a")];
  const setActiveFromHash = () => navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === window.location.hash));
  window.addEventListener("hashchange", setActiveFromHash); setActiveFromHash();
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("in"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.querySelectorAll(".cover .panel").forEach((panel) => {
    panel.addEventListener("mousemove", (event) => { const box = panel.getBoundingClientRect(); const x = event.clientX - box.left; const y = event.clientY - box.top; const base = panel.matches(":nth-child(odd)") ? -0.35 : 0.35; panel.style.transform = `rotate(${base}deg) translate(${((x / box.width) - 0.5) * -5}px, ${((y / box.height) - 0.5) * -5}px)`; });
    panel.addEventListener("mouseleave", () => { panel.style.transform = ""; });
  });
  document.querySelectorAll(".sfx").forEach((sfx) => sfx.style.setProperty("rotate", `${(Math.random() * 10 - 5).toFixed(1)}deg`));
}

renderExperiences();
renderProjects();
renderSkills();
renderAbout();
renderContact();
setupModal();
setupResumeModal();
setupEnhancements();
