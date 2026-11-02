/* 11/2 Records — Official storefront */
const SHOP = "https://r0up81-3t.myshopify.com";
const SIZES = ["S", "M", "L", "XL", "XXL"];

const PRODUCTS = [
  {
    id: "dod-signature-tee-black-gold",
    handle: "dod-signature-tee-black-gold",
    title: "DOD Signature Tee — Black Gold",
    price: "KES 2,400",
    collection: "tees",
    tag: "Flagship · Tee",
    desc: "The flagship statement tee. Full-front gold metallic hand graphic with drip and splat detail on deep black — built to read across any city light.",
    bullets: [
      "Premium midweight cotton blend",
      "Gold metallic print that holds wash after wash",
      "Reinforced neckline · double-stitched seams",
      "Relaxed street fit · S–XXL"
    ],
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2079.jpg?v=1793602783"
  },
  {
    id: "dod-signature-tee-white",
    handle: "dod-signature-tee-white",
    title: "DOD Signature Tee — White",
    price: "KES 2,400",
    collection: "tees",
    tag: "High contrast · Tee",
    desc: "Clean white canvas with bold black hand graphic, splat and drip detail. The high-contrast piece that works with everything in the rotation.",
    bullets: [
      "Premium midweight cotton blend",
      "Dense black ink with sharp detail",
      "Reinforced collar · clean seams",
      "Relaxed street fit · S–XXL"
    ],
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2084.jpg?v=1793602746"
  },
  {
    id: "dod-signature-tee-olive-gold",
    handle: "dod-signature-tee-olive-gold",
    title: "DOD Signature Tee — Olive Gold",
    price: "KES 2,500",
    collection: "tees",
    tag: "Premium colour · Tee",
    desc: "Army olive body with the signature gold metallic hand graphic. Rare tone — quiet colour, loud identity.",
    bullets: [
      "Premium midweight cotton blend",
      "Gold metallic finish print",
      "Reinforced neckline · clean seams",
      "Relaxed street fit · S–XXL"
    ],
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2082.jpg?v=1793602571"
  },
  {
    id: "dod-signature-tee-heather-grey",
    handle: "dod-signature-tee-heather-grey",
    title: "DOD Signature Tee — Heather Grey",
    price: "KES 2,400",
    collection: "tees",
    tag: "Everyday · Tee",
    desc: "Heather grey staple with full black hand graphic, splat detail, and DOD wordmark. Soft daily wear that still carries the full brand mark.",
    bullets: [
      "Premium cotton blend with heather texture",
      "Solid black ink print",
      "Reinforced collar · double-stitched seams",
      "Relaxed street fit · S–XXL"
    ],
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2080.jpg?v=1793602813"
  },
  {
    id: "dod-minimal-chest-tee-charcoal",
    handle: "dod-minimal-chest-tee-charcoal",
    title: "DOD Minimal Chest Tee — Charcoal",
    price: "KES 2,000",
    collection: "tees",
    tag: "Minimal · Tee",
    desc: "Left-chest gold logo version. Same identity, quieter execution — for days you want the brand without the full front statement.",
    bullets: [
      "Premium midweight cotton blend",
      "Small gold metallic left-chest mark",
      "Reinforced neckline · clean seams",
      "Relaxed street fit · S–XXL"
    ],
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2081.jpg?v=1793602710"
  },
  {
    id: "dod-signature-hoodie-black",
    handle: "dod-signature-hoodie-black",
    title: "DOD Signature Hoodie — Black",
    price: "KES 4,800",
    collection: "hoodies",
    tag: "Heavyweight · Hoodie",
    desc: "Full-front gold metallic hand graphic on solid black. Heavyweight street piece for cooler days, late nights, and travel.",
    bullets: [
      "Heavyweight fleece · soft brushed interior",
      "Gold metallic drip graphic",
      "Kangaroo pocket · ribbed cuffs & hem",
      "Relaxed street fit · S–XXL"
    ],
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2078.jpg?v=1793602676"
  },
  {
    id: "dod-signature-hoodie-washed-grey",
    handle: "dod-signature-hoodie-washed-grey",
    title: "DOD Signature Hoodie — Washed Grey",
    price: "KES 4,800",
    collection: "hoodies",
    tag: "Washed · Hoodie",
    desc: "Washed charcoal hoodie with gold metallic DOD hand graphic. Vintage-wash texture meets premium statement print.",
    bullets: [
      "Heavyweight fleece with washed finish",
      "Soft brushed interior",
      "Gold metallic graphic with splat detail",
      "Kangaroo pocket · relaxed fit · S–XXL"
    ],
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2083.jpg?v=1793602507"
  }
];

function productUrl(handle) {
  return `${SHOP}/products/${handle}`;
}

function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  const list = filter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.collection === filter);

  grid.innerHTML = list.map((p) => `
    <article class="card" data-id="${p.id}">
      <button type="button" class="card-media" data-open="${p.id}" aria-label="View ${p.title}">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </button>
      <div class="card-body">
        <p class="card-tag">${p.tag}</p>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-foot">
          <span class="card-price">${p.price}</span>
          <div class="card-actions">
            <button type="button" class="card-view" data-open="${p.id}">Details</button>
            <a class="card-buy" href="${productUrl(p.handle)}" target="_blank" rel="noopener">Buy</a>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

document.getElementById("filters")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  renderProducts(btn.dataset.filter);
});

/* Mobile menu (tagger) */
const menuBtn = document.getElementById("menu-btn");
const menuPanel = document.getElementById("menu-panel");

function openMenu() {
  if (!menuPanel) return;
  menuPanel.hidden = false;
  requestAnimationFrame(() => menuPanel.classList.add("is-open"));
  menuBtn?.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
}
function closeMenu() {
  if (!menuPanel) return;
  menuPanel.classList.remove("is-open");
  menuBtn?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  setTimeout(() => { menuPanel.hidden = true; }, 250);
}
menuBtn?.addEventListener("click", () => {
  if (menuPanel?.classList.contains("is-open")) closeMenu();
  else openMenu();
});
menuPanel?.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});

/* Drawer */
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("drawer-overlay");
let activeSize = "M";
let activeProduct = null;

function openDrawer(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p || !drawer) return;
  activeProduct = p;
  activeSize = "M";
  closeMenu();

  document.getElementById("drawer-image").src = p.image;
  document.getElementById("drawer-image").alt = p.title;
  document.getElementById("drawer-tag").textContent = p.tag;
  document.getElementById("drawer-title").textContent = p.title;
  document.getElementById("drawer-price").textContent = p.price;
  document.getElementById("drawer-desc").textContent = p.desc;
  document.getElementById("drawer-bullets").innerHTML = p.bullets.map((b) => `<li>${b}</li>`).join("");

  const sizesEl = document.getElementById("drawer-sizes");
  sizesEl.innerHTML = SIZES.map((s) =>
    `<button type="button" class="size-btn${s === activeSize ? " is-active" : ""}" data-size="${s}">${s}</button>`
  ).join("");

  updateBuyLink();
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  overlay.hidden = false;
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  drawer?.classList.remove("is-open");
  drawer?.setAttribute("aria-hidden", "true");
  if (overlay) overlay.hidden = true;
  document.body.classList.remove("drawer-open");
}

function updateBuyLink() {
  const buy = document.getElementById("drawer-buy");
  if (!buy || !activeProduct) return;
  buy.href = productUrl(activeProduct.handle);
  buy.textContent = `Buy ${activeSize} — secure checkout`;
}

document.getElementById("product-grid")?.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-open]");
  if (openBtn) {
    e.preventDefault();
    openDrawer(openBtn.dataset.open);
  }
});

document.getElementById("drawer-sizes")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".size-btn");
  if (!btn) return;
  activeSize = btn.dataset.size;
  document.querySelectorAll(".size-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
  updateBuyLink();
});

document.getElementById("drawer-close")?.addEventListener("click", closeDrawer);
overlay?.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDrawer();
    closeMenu();
  }
});

renderProducts();
