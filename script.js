/* =========================================================
   KhushiBox — script.js
   Update WHATSAPP_NUMBER below with your real number
   (country code, no + or spaces, e.g. 923001234567)
   ========================================================= */

const WHATSAPP_NUMBER = "93424911286"; // <-- REPLACE with your WhatsApp number

/* ---------- Occasion data ---------- */
const occasions = [
  { name: "Birthday", icon: "M24 6c-3 0-5 2-5 5 0 2 1 3 2 4h6c1-1 2-2 2-4 0-3-2-5-5-5zM10 24c0-5 6-8 14-8s14 3 14 8v6H10v-6zM8 34h32v6H8z" },
  { name: "Anniversary", icon: "M24 12l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" },
  { name: "Wedding", icon: "M16 22a6 6 0 1112 0 6 6 0 01-12 0zM24 22a6 6 0 1112 0 6 6 0 01-12 0z" },
  { name: "Eid", icon: "M28 8a14 14 0 100 28 11 11 0 010-28z" },
  { name: "Valentine's Day", icon: "M24 38S8 28 8 17a8 8 0 0116-3 8 8 0 0116 3c0 11-16 21-16 21z" },
  { name: "Mother's Day", icon: "M24 10c-4 0-6 3-6 6 0 4 6 8 6 8s6-4 6-8c0-3-2-6-6-6zM14 26h20l3 12H11z" },
  { name: "Father's Day", icon: "M14 20h20v16H14zM14 20l10-10 10 10" },
  { name: "Baby Shower", icon: "M24 10a6 6 0 016 6c0 6-6 10-6 10s-6-4-6-10a6 6 0 016-6z" },
  { name: "Graduation", icon: "M6 18l18-8 18 8-18 8zM14 22v9c0 3 5 6 10 6s10-3 10-6v-9" },
  { name: "Corporate Gifts", icon: "M8 18h32v20H8zM16 18v-4a4 4 0 014-4h8a4 4 0 014 4v4" },
  { name: "Just Because", icon: "M24 6l4 8 9 1-6.5 6.5L32 30l-8-4-8 4 1.5-8.5L10 15l9-1z" }
];

/* ---------- Product data ---------- */
const products = [
  {
    name: "Blush Birthday Bliss",
    occasion: "Birthday",
    desc: "Chocolates, a scented candle and a personalised card in soft blush wrapping.",
    price: "Rs. 4,500",
    img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=500&q=70"
  },
  {
    name: "Eternal Love Anniversary Box",
    occasion: "Anniversary",
    desc: "Rose petals, a mini photo frame, chocolates and a handwritten love note.",
    price: "Rs. 8,900",
    img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=500&q=70"
  },
  {
    name: "Nikah Mubarak Hamper",
    occasion: "Wedding",
    desc: "Dry fruits, mithai, a keepsake trinket and elegant gold-ribbon wrapping.",
    price: "Rs. 12,500",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=500&q=70"
  },
  {
    name: "Chaand Raat Eid Delight",
    occasion: "Eid",
    desc: "Sheer khurma essentials, bangles, and festive sweets in a woven tray.",
    price: "Rs. 5,200",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=70"
  },
  {
    name: "Roses & Romance Box",
    occasion: "Valentine's Day",
    desc: "Dried roses, chocolate truffles and a candle for a cosy evening in.",
    price: "Rs. 6,300",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=500&q=70"
  },
  {
    name: "Mom's Morning Basket",
    occasion: "Mother's Day",
    desc: "Herbal tea, skincare minis and a card that says everything you mean.",
    price: "Rs. 5,800",
    img: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=500&q=70"
  },
  {
    name: "Dad's Coffee & Comfort Crate",
    occasion: "Father's Day",
    desc: "Ground coffee, a mug and a small treat he'll pretend he doesn't love.",
    price: "Rs. 5,000",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=70"
  },
  {
    name: "Little Star Baby Shower Box",
    occasion: "Baby Shower",
    desc: "Soft toy, baby essentials and a keepsake card for the new arrival.",
    price: "Rs. 6,700",
    img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=70"
  },
  {
    name: "Corporate Elegance Set",
    occasion: "Corporate Gifts",
    desc: "Premium notebook, coffee, dates and a branding card for your clients.",
    price: "Rs. 9,500",
    img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=500&q=70"
  }
];

const occasionGrid = document.getElementById("occasionGrid");
const productGrid = document.getElementById("productGrid");
const filterNote = document.getElementById("filterNote");
const clearFilterBtn = document.getElementById("clearFilter");

/* ---------- Render occasion cards ---------- */
occasions.forEach(o => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "occasion-card";
  card.dataset.occasion = o.name;
  card.innerHTML = `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
      <path d="${o.icon}"></path>
    </svg>
    <span>${o.name}</span>
  `;
  card.addEventListener("click", () => filterByOccasion(o.name, card));
  occasionGrid.appendChild(card);
});

/* ---------- Render product cards ---------- */
function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="product-body">
        <span class="product-occasion">${p.occasion}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <span class="product-price">${p.price}</span>
        <div class="product-actions">
          <button class="btn btn-outline btn-customize" data-occasion="${p.occasion}">Customize</button>
          <a class="btn btn-primary" target="_blank" rel="noopener"
             href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
               `Hi KhushiBox! I'd like to order the "${p.name}" (${p.price}).`
             )}">Order Now</a>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });

  productGrid.querySelectorAll(".btn-customize").forEach(btn => {
    btn.addEventListener("click", () => {
      const occ = btn.dataset.occasion;
      const select = document.getElementById("builderOccasion");
      if (select) select.value = occ;
      document.getElementById("customize").scrollIntoView({ behavior: "smooth" });
    });
  });
}
renderProducts(products);

/* ---------- Filter by occasion ---------- */
function filterByOccasion(name, cardEl) {
  const alreadyActive = cardEl.classList.contains("active");
  occasionGrid.querySelectorAll(".occasion-card").forEach(c => c.classList.remove("active"));

  if (alreadyActive) {
    renderProducts(products);
    filterNote.hidden = true;
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    return;
  }

  cardEl.classList.add("active");
  const filtered = products.filter(p => p.occasion === name);
  renderProducts(filtered.length ? filtered : products);

  filterNote.hidden = false;
  filterNote.querySelector("span")
    ? (filterNote.querySelector("span").textContent = filtered.length
        ? `Showing hampers for "${name}"`
        : `No featured hampers for "${name}" yet — here's everything we have. Build your own instead?`)
    : null;

  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}

clearFilterBtn.addEventListener("click", () => {
  renderProducts(products);
  filterNote.hidden = true;
  occasionGrid.querySelectorAll(".occasion-card").forEach(c => c.classList.remove("active"));
});

/* =========================================================
   Mobile nav toggle
   ========================================================= */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* =========================================================
   Sticky header shrink on scroll
   ========================================================= */
const siteHeader = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

/* =========================================================
   Build Your Own Hamper — interactive tool
   ========================================================= */
const budgetChips = document.querySelectorAll("#budgetChips .chip");
let selectedBudget = "";

budgetChips.forEach(chip => {
  chip.addEventListener("click", () => {
    budgetChips.forEach(c => c.classList.remove("selected"));
    chip.classList.add("selected");
    selectedBudget = chip.dataset.budget;
  });
});

document.getElementById("createHamperBtn").addEventListener("click", () => {
  const occasion = document.getElementById("builderOccasion").value;
  const items = Array.from(document.querySelectorAll("#itemChecklist input:checked")).map(i => i.value);
  const note = document.getElementById("personalNote").value.trim();

  let message = `Hi KhushiBox! I'd like to build a custom hamper.\n\n`;
  message += `Occasion: ${occasion}\n`;
  message += `Budget: ${selectedBudget || "Not specified"}\n`;
  message += `Items: ${items.length ? items.join(", ") : "Please suggest some items"}\n`;
  if (note) message += `Personal message to include: "${note}"\n`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});

/* =========================================================
   Scroll reveal animation
   ========================================================= */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("is-visible"));
}

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
