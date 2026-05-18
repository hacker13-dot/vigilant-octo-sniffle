// ===================== DATA =====================

const CHEESES = [
  { id: 1,  name: "Parmigiano-Reggiano",   origin: "Emilia-Romagna, Italy",  type: "aged",  price: 28.99, unit: "lb", emoji: "🧀", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parmigiano_reggiano.jpg/400px-Parmigiano_reggiano.jpg",                                                               rating: 4.9, reviews: 342, badge: null,  desc: "The king of Italian cheeses. Aged 24+ months, with a granular texture and rich, nutty, umami-forward flavour. Perfect for grating or eating in chunks with honey.",  tags: ["Cow's Milk","Hard","Aged 24mo","Imported"] },
  { id: 2,  name: "French Brie de Meaux",  origin: "Île-de-France, France",   type: "soft",  price: 19.99, unit: "lb", emoji: "🍥", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_de_Meaux_Rouzaire.jpg/400px-Brie_de_Meaux_Rouzaire.jpg",                                                     rating: 4.8, reviews: 218, badge: "New", desc: "Protected designation Brie with a bloomy white rind and buttery, mushroomy interior. Best served at room temperature with a crusty baguette.",                        tags: ["Cow's Milk","Soft","Bloomy Rind","Imported"] },
  { id: 3,  name: "Aged Vermont Cheddar",  origin: "Vermont, USA",            type: "aged",  price: 16.50, unit: "lb", emoji: "🟡", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cheddar_Cheese_%28local%29.jpg/400px-Cheddar_Cheese_%28local%29.jpg",                                            rating: 4.7, reviews: 501, badge: null,  desc: "Sharp, bold and complex — aged for 2 years on the farm. Crunchy tyrosine crystals throughout. A true American classic that stands up to any imported rival.",         tags: ["Cow's Milk","Hard","Aged 2yr","USA"] },
  { id: 4,  name: "Roquefort AOP",         origin: "Aveyron, France",         type: "blue",  price: 32.00, unit: "lb", emoji: "💙", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/RoquefortFR.jpg/400px-RoquefortFR.jpg",                                                                          rating: 4.6, reviews: 187, badge: null,  desc: "Cave-aged sheep's milk blue cheese from the Combalou caves. Intensely pungent, creamy and salty. Exceptional crumbled over salads or with a glass of Sauternes.",    tags: ["Sheep's Milk","Blue","AOP","Cave-Aged"] },
  { id: 5,  name: "Manchego DOP",          origin: "La Mancha, Spain",        type: "hard",  price: 21.00, unit: "lb", emoji: "⬜", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Queso_Manchego.jpg/400px-Queso_Manchego.jpg",                                                                     rating: 4.8, reviews: 276, badge: null,  desc: "Spain's most iconic cheese — made from La Mancha sheep milk, aged 6 months. Buttery with notes of hay and lanolin. The distinctive herringbone rind is a trademark.", tags: ["Sheep's Milk","Hard","Aged 6mo","Spain"] },
  { id: 6,  name: "Burrata Fresca",        origin: "Puglia, Italy",           type: "fresh", price: 12.99, unit: "ea", emoji: "⚪", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Fresh_burrata_cheese.jpg/400px-Fresh_burrata_cheese.jpg",                                                          rating: 4.9, reviews: 412, badge: "New", desc: "Hand-crafted same-day burrata — a delicate mozzarella shell filled with stracciatella and fresh cream. Eat within 24 hours for the full experience.",               tags: ["Cow's Milk","Fresh","Same-Day","Imported"] },
  { id: 7,  name: "Époisses de Bourgogne", origin: "Burgundy, France",        type: "soft",  price: 24.99, unit: "ea", emoji: "🟠", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Epoisses_2.jpg/400px-Epoisses_2.jpg",                                                                             rating: 4.5, reviews: 134, badge: null,  desc: "Napoleon's favourite cheese — a washed-rind powerhouse with an orange sticky rind, washed with Marc de Bourgogne. Pungent outside, silky and meaty inside.",         tags: ["Cow's Milk","Soft","Washed Rind","AOP"] },
  { id: 8,  name: "Stilton PDO",           origin: "Nottinghamshire, UK",     type: "blue",  price: 26.00, unit: "lb", emoji: "🔵", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Stilton_2.jpg/400px-Stilton_2.jpg",                                                                               rating: 4.6, reviews: 209, badge: null,  desc: "The 'King of English Cheeses' — rich, creamy and crumbly with distinctive blue-green veins. Traditionally served with port wine during the festive season.",          tags: ["Cow's Milk","Blue","PDO","UK"] },
  { id: 9,  name: "Gouda 5-Year Aged",     origin: "Noord-Holland, NL",       type: "aged",  price: 34.00, unit: "lb", emoji: "🧡", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Goudacheese.jpg/400px-Goudacheese.jpg",                                                                           rating: 4.9, reviews: 388, badge: null,  desc: "Extra-aged Gouda with deep amber colour and caramel-butterscotch sweetness. Packed with crunchy crystals. A dessert cheese experience in every bite.",               tags: ["Cow's Milk","Hard","Aged 5yr","Netherlands"] },
  { id: 10, name: "Chèvre Log",            origin: "Loire Valley, France",    type: "fresh", price: 10.99, unit: "ea", emoji: "🐐", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/FrenchGoatCheese.jpg/400px-FrenchGoatCheese.jpg",                                                                  rating: 4.7, reviews: 165, badge: "New", desc: "Fresh Loire Valley goat cheese — bright, tangy and lemon-zesty. Wonderful crumbled on salads, spread on toast, or drizzled with wildflower honey.",               tags: ["Goat's Milk","Fresh","Loire","France"] },
  { id: 11, name: "Comté Reserve",         origin: "Franche-Comté, France",   type: "hard",  price: 29.50, unit: "lb", emoji: "🟤", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Comte_Cheese.jpg/400px-Comte_Cheese.jpg",                                                                         rating: 4.8, reviews: 298, badge: null,  desc: "18-month aged Comté from a mountain fromagerie. Complex and fruity with notes of toasted hazelnuts and mountain herbs. One of France's great cheeses.",              tags: ["Cow's Milk","Hard","Mountain","AOP"] },
  { id: 12, name: "Gorgonzola Piccante",   origin: "Lombardy, Italy",         type: "blue",  price: 22.00, unit: "lb", emoji: "🫐", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gorgonzola_--_Di_Giovanna_--_cut.jpg/400px-Gorgonzola_--_Di_Giovanna_--_cut.jpg",                                rating: 4.5, reviews: 172, badge: null,  desc: "Intensely spicy and crumbly aged Gorgonzola — the more assertive sibling of Gorgonzola Dolce. Great for pasta sauces, risotto or paired with pears and walnuts.",    tags: ["Cow's Milk","Blue","Aged","DOP"] },
];

const DEALS = [
  { id: 1, cheeseId: 9,  discount: 35, label: "Deal of the Week",   extraDesc: "Limited stock — only 12 lbs left!" },
  { id: 2, cheeseId: 1,  discount: 20, label: "Flash Sale",          extraDesc: "Import savings passed to you!" },
  { id: 3, cheeseId: 5,  discount: 25, label: "Weekend Special",     extraDesc: "Free shipping on orders over $60!" },
  { id: 4, cheeseId: 6,  discount: 15, label: "Fresh Pick",          extraDesc: "Order by Thursday for weekend delivery" },
];

const TRADES = [
  { id: 1, user: "CheeseHunter_Dave",   have: "2 lbs Aged Manchego",       want: "Stilton or Roquefort",   location: "Portland, OR",   posted: "2 hours ago" },
  { id: 2, user: "FarmFresh_Emily",     have: "1 wheel local Gouda (~3lb)", want: "French Brie or Camembert",location: "Madison, WI",    posted: "5 hours ago" },
  { id: 3, user: "ArtisanAl",           have: "Homemade Ricotta (2 lbs)",   want: "Any aged hard cheese",   location: "Brooklyn, NY",   posted: "Yesterday" },
  { id: 4, user: "TheCurdNerd",         have: "Extra-aged Cheddar 1.5lb",   want: "Époisses or washed rind",location: "Austin, TX",     posted: "Yesterday" },
  { id: 5, user: "Queso_Queen",         have: "Queso Fresco 3 lbs",         want: "European blue cheese",   location: "San Diego, CA",  posted: "2 days ago" },
  { id: 6, user: "AlpineCheeseLover",   have: "Gruyère wedge 1.5 lbs",      want: "UK cheese — Stilton, Red Leicester, Wensleydale", location: "Denver, CO", posted: "2 days ago" },
];

const COUPONS = [
  { value: "15%", off: "OFF", code: "BIGCHEESE15", title: "New Customer Discount",   desc: "15% off your first order — no minimum spend.",                expires: "May 31, 2026" },
  { value: "$10", off: "OFF", code: "WHEELS10",    title: "$10 Off Orders Over $75", desc: "Save $10 when you spend $75 or more on any cheese.",         expires: "May 15, 2026" },
  { value: "20%", off: "OFF", code: "BLUELOVERS",  title: "Blue Cheese Sale",        desc: "20% off all blue cheeses — Stilton, Roquefort, Gorgonzola.", expires: "May 10, 2026" },
  { value: "Free", off: "SHIP", code: "FREESHIP60", title: "Free Shipping",          desc: "Free cold-chain shipping on all orders over $60.",           expires: "Ongoing" },
  { value: "25%", off: "OFF", code: "AGED25",      title: "Aged Cheese Special",     desc: "25% off all cheeses aged 12 months or longer.",              expires: "May 20, 2026" },
  { value: "$5",  off: "OFF", code: "TRYBRIE5",    title: "Soft Cheese Sampler",     desc: "$5 off when you buy any two soft cheeses together.",         expires: "May 25, 2026" },
];

// ===================== CART STATE =====================
let cart = [];
let currentQty = 1;
let currentProductId = null;
let activeFilter = 'all';
let searchQuery = '';

// ===================== RENDER PRODUCTS =====================
function imgTag(c, height = '180px') {
  return `<img src="${c.img}" alt="${c.name}" style="width:100%;height:${height};object-fit:cover;display:block;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span style="display:none;font-size:4rem;width:100%;height:${height};align-items:center;justify-content:center;background:linear-gradient(135deg,var(--gold-light),var(--cream-dark))">${c.emoji}</span>`;
}

function renderProducts(list) {
  const grid = document.getElementById('product-grid');
  if (!list.length) {
    grid.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:3rem 0;">No cheeses found. Try a different search or filter.</p>';
    return;
  }
  grid.innerHTML = list.map(c => `
    <div class="product-card" onclick="openProduct(${c.id})">
      <div class="product-image" style="padding:0;overflow:hidden;">
        ${imgTag(c)}
        ${c.badge ? `<div class="product-badge badge-new">${c.badge}</div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-name">${c.name}</div>
        <div class="product-origin">📍 ${c.origin}</div>
        <div class="product-rating">${starRating(c.rating)} <small style="color:var(--text-muted)">(${c.reviews})</small></div>
        <div class="product-footer">
          <div class="product-price">$${c.price.toFixed(2)} <small>/ ${c.unit}</small></div>
          <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${c.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function starRating(r) {
  const full = Math.floor(r);
  const half = r % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + ' ' + r.toFixed(1);
}

function getFilteredList() {
  return CHEESES.filter(c => {
    const matchType = activeFilter === 'all' || c.type === activeFilter;
    const matchSearch = !searchQuery || c.name.toLowerCase().includes(searchQuery) || c.origin.toLowerCase().includes(searchQuery);
    return matchType && matchSearch;
  });
}

function filterCheese(type, btn) {
  activeFilter = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(getFilteredList());
}

function searchCheese(val) {
  searchQuery = val.toLowerCase();
  renderProducts(getFilteredList());
}

// ===================== PRODUCT MODAL =====================
function openProduct(id) {
  currentProductId = id;
  currentQty = 1;
  const c = CHEESES.find(x => x.id === id);
  if (!c) return;

  document.getElementById('product-modal-content').innerHTML = `
    <div class="product-modal-inner">
      <div class="product-modal-img" style="padding:0;overflow:hidden;">${imgTag(c, '200px')}</div>
      <div class="product-modal-details">
        <h2>${c.name}</h2>
        <div class="origin">📍 ${c.origin}</div>
        <div class="rating">${starRating(c.rating)} <span style="color:var(--text-muted);font-size:.88rem">(${c.reviews} reviews)</span></div>
        <div class="desc">${c.desc}</div>
        <div class="tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="price-big">$${c.price.toFixed(2)} <small style="font-size:1rem;font-weight:400;color:var(--text-muted)">/ ${c.unit}</small></div>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <span class="qty-display" id="modal-qty">${currentQty}</span>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
          <span style="font-size:.88rem;color:var(--text-muted)">${c.unit}s</span>
        </div>
        <button class="btn-primary btn-large" style="width:100%" onclick="addToCartModal(${c.id})">Add to Cart 🛒</button>
      </div>
    </div>
  `;
  showModal('product-modal');
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  const el = document.getElementById('modal-qty');
  if (el) el.textContent = currentQty;
}

function addToCartModal(id) {
  for (let i = 0; i < currentQty; i++) addToCart(id, true);
  closeModal('product-modal');
  toast(`Added ${currentQty} × ${CHEESES.find(c=>c.id===id).name} to cart`);
}

// ===================== CART =====================
function addToCart(id, silent = false) {
  const cheese = CHEESES.find(c => c.id === id);
  if (!cheese) return;
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...cheese, qty: 1 }); }
  updateCartUI();
  if (!silent) toast(`${cheese.emoji} ${cheese.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = count;

  const container = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');

  if (!cart.length) {
    container.innerHTML = '<p class="empty-cart">Your cart is empty. Add some cheese!</p>';
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.qty} = $${(item.price * item.qty).toFixed(2)}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑</button>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
  footer.style.display = 'flex';
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function applyCoupon() {
  const input = document.getElementById('coupon-input');
  const code = input.value.trim().toUpperCase();
  const valid = COUPONS.map(c => c.code);
  if (valid.includes(code)) {
    toast(`✅ Coupon ${code} applied! Discount reflected at checkout.`);
    input.style.borderColor = 'var(--green)';
  } else {
    toast(`❌ Invalid coupon code. Check the Coupons section!`);
    input.style.borderColor = 'var(--red)';
  }
}

// ===================== RENDER TRADES =====================
function renderTrades() {
  document.getElementById('trade-grid').innerHTML = TRADES.map(t => `
    <div class="trade-card">
      <h4>🔄 Trade Offer</h4>
      <div class="trade-have"><strong>Have:</strong> ${t.have}</div>
      <div class="trade-want"><strong>Want:</strong> ${t.want}</div>
      <div class="trade-meta">
        <span>👤 ${t.user} · 📍 ${t.location}</span>
        <button class="btn-gold" onclick="contactTrader('${t.user}')">Contact</button>
      </div>
      <div style="font-size:.78rem;color:var(--text-muted);margin-top:.5rem">Posted: ${t.posted}</div>
    </div>
  `).join('');
}

function contactTrader(user) {
  toast(`Message sent to ${user}! They'll be notified.`);
}

// ===================== RENDER DEALS =====================
function renderDeals() {
  document.getElementById('deals-grid').innerHTML = DEALS.map(d => {
    const c = CHEESES.find(x => x.id === d.cheeseId);
    const discounted = c.price * (1 - d.discount / 100);
    return `
      <div class="deal-card">
        <div class="deal-image" style="padding:0;overflow:hidden;position:relative;">
          ${imgTag(c, '160px')}
          <div class="deal-discount">-${d.discount}%</div>
        </div>
        <div class="deal-info">
          <div class="deal-name">${c.name}</div>
          <div class="deal-desc">${d.label} — ${d.extraDesc}</div>
          <div class="deal-prices">
            <span class="deal-price-new">$${discounted.toFixed(2)}</span>
            <span class="deal-price-old">$${c.price.toFixed(2)}</span>
            <span style="font-size:.82rem;color:var(--text-muted)">/ ${c.unit}</span>
          </div>
          <button class="btn-primary" style="width:100%" onclick="addDealToCart(${c.id}, ${discounted.toFixed(2)})">Add Deal to Cart 🛒</button>
        </div>
      </div>
    `;
  }).join('');
}

function addDealToCart(id, salePrice) {
  const cheese = CHEESES.find(c => c.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...cheese, price: salePrice, qty: 1 }); }
  updateCartUI();
  toast(`🔥 Deal added: ${cheese.name} at sale price!`);
}

// ===================== RENDER COUPONS =====================
function renderCoupons() {
  document.getElementById('coupon-grid').innerHTML = COUPONS.map(c => `
    <div class="coupon-card">
      <div class="coupon-left">
        <div class="coupon-value">${c.value}</div>
        <div class="coupon-off">${c.off}</div>
      </div>
      <div class="coupon-right">
        <div class="coupon-title">${c.title}</div>
        <div class="coupon-desc">${c.desc}</div>
        <div class="coupon-code-row">
          <span class="coupon-code">${c.code}</span>
          <button class="copy-btn" onclick="copyCode('${c.code}', this)">Copy</button>
        </div>
        <div class="coupon-expires">Expires: ${c.expires}</div>
      </div>
    </div>
  `).join('');
}

function copyCode(code, btn) {
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'Copied!';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = 'Copy'; btn.style.color = ''; }, 2000);
    toast(`Coupon code ${code} copied to clipboard!`);
  });
}

// ===================== COUNTDOWN TIMER =====================
function updateCountdown() {
  const now = new Date();
  // Next Monday midnight
  const nextMonday = new Date(now);
  const day = now.getDay();
  const daysUntilMonday = day === 0 ? 1 : 8 - day;
  nextMonday.setDate(now.getDate() + daysUntilMonday);
  nextMonday.setHours(0, 0, 0, 0);

  const diff = nextMonday - now;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById('countdown').innerHTML =
    `⏱ Deals reset in: <b>${d}d</b> ${h}h ${m}m ${s}s`;
}

// ===================== SELL FORM =====================
function submitListing() {
  const name = document.getElementById('sell-name').value.trim();
  const price = document.getElementById('sell-price').value;
  const condition = document.getElementById('sell-condition').value;
  if (!name || !price) { toast('Please fill in the cheese name and price.'); return; }
  toast(`✅ Listing preview created for "${name}"! Sign in to publish.`);
  showModal('sell-modal');
}

// ===================== TRADE FORM =====================
function submitTrade() {
  toast('✅ Trade offer posted! Cheese swappers will contact you soon.');
  closeModal('trade-modal');
  // Prepend a new trade card (demo only)
  const fakeCard = document.createElement('div');
  fakeCard.className = 'trade-card';
  fakeCard.innerHTML = `
    <h4>🔄 Trade Offer <span style="color:var(--green);font-size:.8rem">(Just Posted)</span></h4>
    <div class="trade-have"><strong>Have:</strong> Your listing</div>
    <div class="trade-want"><strong>Want:</strong> Great cheese in return</div>
    <div class="trade-meta"><span>👤 You · 📍 Your Location</span></div>
    <div style="font-size:.78rem;color:var(--text-muted);margin-top:.5rem">Posted: Just now</div>
  `;
  document.getElementById('trade-grid').prepend(fakeCard);
}

// ===================== CHECKOUT =====================
function placeOrder() {
  cart = [];
  updateCartUI();
  closeModal('checkout-modal');
  toast('🎉 Order placed! Your cheese is on its way!');
}

// ===================== NEWSLETTER =====================
function subscribeNewsletter(e) {
  e.preventDefault();
  toast('🧀 Welcome to the Big Cheese club! Check your inbox.');
  e.target.reset();
}

// ===================== MODALS =====================
function showModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

// ===================== MOBILE MENU =====================
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ===================== TOAST =====================
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3000);
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(CHEESES);
  renderTrades();
  renderDeals();
  renderCoupons();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
