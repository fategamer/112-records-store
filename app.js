/* 11/2 Records — Phase 2 storefront */
const SHOP = "https://r0up81-3t.myshopify.com";

const PRODUCTS = [
  {
    id: "dod-signature-tee-black-gold",
    title: "DOD Signature Tee — Black Gold",
    price: "KES 2,400",
    desc: "Flagship full-front gold metallic hand graphic on deep black.",
    collection: "tees",
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2079.jpg?v=1793602783",
    handle: "dod-signature-tee-black-gold"
  },
  {
    id: "dod-signature-tee-white",
    title: "DOD Signature Tee — White",
    price: "KES 2,400",
    desc: "Clean white canvas. Bold black hand graphic with splat detail.",
    collection: "tees",
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2084.jpg?v=1793602746",
    handle: "dod-signature-tee-white"
  },
  {
    id: "dod-signature-tee-olive-gold",
    title: "DOD Signature Tee — Olive Gold",
    price: "KES 2,500",
    desc: "Army olive body with signature gold metallic hand graphic.",
    collection: "tees",
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2082.jpg?v=1793602571",
    handle: "dod-signature-tee-olive-gold"
  },
  {
    id: "dod-signature-tee-heather-grey",
    title: "DOD Signature Tee — Heather Grey",
    price: "KES 2,400",
    desc: "Heather grey staple with full black graphic and DOD wordmark.",
    collection: "tees",
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2080.jpg?v=1793602813",
    handle: "dod-signature-tee-heather-grey"
  },
  {
    id: "dod-minimal-chest-tee-charcoal",
    title: "DOD Minimal Chest Tee — Charcoal",
    price: "KES 2,000",
    desc: "Left-chest gold logo. Same identity, quieter daily wear.",
    collection: "tees",
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2081.jpg?v=1793602710",
    handle: "dod-minimal-chest-tee-charcoal"
  },
  {
    id: "dod-signature-hoodie-black",
    title: "DOD Signature Hoodie — Black",
    price: "KES 4,800",
    desc: "Heavyweight black hoodie with full-front gold metallic graphic.",
    collection: "hoodies",
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2078.jpg?v=1793602676",
    handle: "dod-signature-hoodie-black"
  },
  {
    id: "dod-signature-hoodie-washed-grey",
    title: "DOD Signature Hoodie — Washed Grey",
    price: "KES 4,800",
    desc: "Washed charcoal hoodie with gold metallic hand graphic.",
    collection: "hoodies",
    image: "https://cdn.shopify.com/s/files/1/0833/3852/6957/files/IMG_2083.jpg?v=1793602507",
    handle: "dod-signature-hoodie-washed-grey"
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
    <article class="card" data-collection="${p.collection}">
      <a class="card-media" href="${productUrl(p.handle)}" target="_blank" rel="noopener">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </a>
      <div class="card-body">
        <p class="card-tag">${p.collection === "hoodies" ? "Hoodie" : "Tee"} · Phase 2</p>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-foot">
          <span class="card-price">${p.price}</span>
          <a class="card-buy" href="${productUrl(p.handle)}" target="_blank" rel="noopener">Buy</a>
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

renderProducts();
